import * as pdfjsLib from "pdfjs-dist";
import workerUrl from "pdfjs-dist/build/pdf.worker.mjs?url";
import { jsPDF } from "jspdf";

pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl;

export type ScanMode = "bw" | "gray";

export interface Point {
  x: number;
  y: number;
}
/** Corners in TL, TR, BR, BL order, normalised to 0..1 of the page. */
export type Quad = [Point, Point, Point, Point];

export interface ScanOptions {
  /** Output rendering resolution in DPI. Higher = sharper text, bigger files. */
  dpi: number;
  /** "bw" = pure black & white scan, "gray" = cleaned grayscale. */
  mode: ScanMode;
  /**
   * Ink threshold offset (C). A pixel becomes black when it is darker than
   * (localAverage - C). Higher = only strong ink stays black (less noise),
   * lower = more gets picked up (bolder text but more speckle).
   */
  threshold: number;
  /** Radius (px) of the neighbourhood used for the local average. */
  blockRadius: number;
  /** Contrast boost applied before thresholding (1 = none). */
  contrast: number;
  /** Remove isolated black specks after thresholding (B&W mode only). */
  despeckle: boolean;
  /**
   * Optional crop/deskew quad (normalised 0..1). When set, each page is
   * perspective-warped so this quadrilateral becomes an upright rectangle.
   */
  crop?: Quad | null;
}

export const DEFAULT_OPTIONS: ScanOptions = {
  dpi: 200,
  mode: "gray",
  threshold: 12,
  blockRadius: 12,
  contrast: 1.15,
  despeckle: true,
  crop: null,
};

/**
 * Solves the 3x3 homography H (8 DOF) mapping source points to destination
 * points, given 4 correspondences. Returns the flat coefficients
 * [a, b, c, d, e, f, g, h] where dst ~ H * src.
 */
function getPerspectiveTransform(src: Point[], dst: Point[]): number[] {
  const A: number[][] = [];
  const b: number[] = [];
  for (let i = 0; i < 4; i++) {
    const { x, y } = src[i];
    const { x: u, y: v } = dst[i];
    A.push([x, y, 1, 0, 0, 0, -x * u, -y * u]);
    b.push(u);
    A.push([0, 0, 0, x, y, 1, -x * v, -y * v]);
    b.push(v);
  }
  return solveLinear(A, b);
}

/** Gaussian elimination with partial pivoting for an n×n system. */
function solveLinear(A: number[][], b: number[]): number[] {
  const n = b.length;
  for (let col = 0; col < n; col++) {
    let pivot = col;
    for (let r = col + 1; r < n; r++) {
      if (Math.abs(A[r][col]) > Math.abs(A[pivot][col])) pivot = r;
    }
    [A[col], A[pivot]] = [A[pivot], A[col]];
    [b[col], b[pivot]] = [b[pivot], b[col]];

    const diag = A[col][col] || 1e-12;
    for (let r = 0; r < n; r++) {
      if (r === col) continue;
      const factor = A[r][col] / diag;
      for (let c = col; c < n; c++) A[r][c] -= factor * A[col][c];
      b[r] -= factor * b[col];
    }
  }
  return b.map((v, i) => v / (A[i][i] || 1e-12));
}

/**
 * Perspective-warps `quad` (pixel coords on `source`) into an upright
 * rectangle. Output size is derived from the quad's own edge lengths so the
 * document keeps its aspect ratio. Areas outside the source become white.
 */
export function warpQuad(source: HTMLCanvasElement, quad: Quad): HTMLCanvasElement {
  const [tl, tr, br, bl] = quad;
  const dist = (a: Point, b: Point) => Math.hypot(a.x - b.x, a.y - b.y);
  const outW = Math.max(1, Math.round(Math.max(dist(tl, tr), dist(bl, br))));
  const outH = Math.max(1, Math.round(Math.max(dist(tl, bl), dist(tr, br))));

  const dstRect: Point[] = [
    { x: 0, y: 0 },
    { x: outW, y: 0 },
    { x: outW, y: outH },
    { x: 0, y: outH },
  ];
  // Map output (dst rectangle) coordinates back to source pixels.
  const [a, b, c, d, e, f, g, h] = getPerspectiveTransform(dstRect, [
    tl,
    tr,
    br,
    bl,
  ]);

  const sctx = source.getContext("2d", { willReadFrequently: true })!;
  const src = sctx.getImageData(0, 0, source.width, source.height);
  const sw = src.width;
  const sh = src.height;
  const sdata = src.data;

  const out = document.createElement("canvas");
  out.width = outW;
  out.height = outH;
  const octx = out.getContext("2d")!;
  const dstImg = octx.createImageData(outW, outH);
  const ddata = dstImg.data;

  for (let y = 0; y < outH; y++) {
    for (let x = 0; x < outW; x++) {
      const denom = g * x + h * y + 1;
      const sx = (a * x + b * y + c) / denom;
      const sy = (d * x + e * y + f) / denom;
      const di = (y * outW + x) * 4;

      if (sx < 0 || sy < 0 || sx > sw - 1 || sy > sh - 1) {
        ddata[di] = ddata[di + 1] = ddata[di + 2] = 255;
        ddata[di + 3] = 255;
        continue;
      }
      // Bilinear sample.
      const x0 = Math.floor(sx);
      const y0 = Math.floor(sy);
      const x1 = Math.min(x0 + 1, sw - 1);
      const y1 = Math.min(y0 + 1, sh - 1);
      const fx = sx - x0;
      const fy = sy - y0;
      for (let ch = 0; ch < 3; ch++) {
        const p00 = sdata[(y0 * sw + x0) * 4 + ch];
        const p10 = sdata[(y0 * sw + x1) * 4 + ch];
        const p01 = sdata[(y1 * sw + x0) * 4 + ch];
        const p11 = sdata[(y1 * sw + x1) * 4 + ch];
        const top = p00 + (p10 - p00) * fx;
        const bottom = p01 + (p11 - p01) * fx;
        ddata[di + ch] = top + (bottom - top) * fy;
      }
      ddata[di + 3] = 255;
    }
  }
  octx.putImageData(dstImg, 0, 0);
  return out;
}

const grayColor = (r: number, g: number, b: number) =>
  0.299 * r + 0.587 * g + 0.114 * b;

/**
 * Separable sliding-window maximum (radius `r`) via a monotonic deque — O(1)
 * amortised per pixel. Used to estimate the paper/background brightness even
 * underneath text (paper is the local brightest value).
 */
function slidingMax2D(
  src: Float64Array,
  w: number,
  h: number,
  r: number
): Float64Array {
  const tmp = new Float64Array(w * h);
  const out = new Float64Array(w * h);
  const dq = new Int32Array(Math.max(w, h));

  for (let y = 0; y < h; y++) {
    const base = y * w;
    let head = 0;
    let tail = 0;
    let next = 0;
    for (let x = 0; x < w; x++) {
      const hi = x + r < w - 1 ? x + r : w - 1;
      while (next <= hi) {
        const v = src[base + next];
        while (tail > head && src[base + dq[tail - 1]] <= v) tail--;
        dq[tail++] = next;
        next++;
      }
      const lo = x - r;
      while (dq[head] < lo) head++;
      tmp[base + x] = src[base + dq[head]];
    }
  }

  for (let x = 0; x < w; x++) {
    let head = 0;
    let tail = 0;
    let next = 0;
    for (let y = 0; y < h; y++) {
      const hi = y + r < h - 1 ? y + r : h - 1;
      while (next <= hi) {
        const v = tmp[next * w + x];
        while (tail > head && tmp[dq[tail - 1] * w + x] <= v) tail--;
        dq[tail++] = next;
        next++;
      }
      const lo = y - r;
      while (dq[head] < lo) head++;
      out[y * w + x] = tmp[dq[head] * w + x];
    }
  }
  return out;
}

/** Integral-image box blur (radius `r`), O(1) per pixel. */
function boxBlur2D(
  src: Float64Array,
  w: number,
  h: number,
  r: number
): Float64Array {
  const iw = w + 1;
  const integral = new Float64Array(iw * (h + 1));
  for (let y = 0; y < h; y++) {
    let rowSum = 0;
    const rowOffset = y * w;
    const intRow = (y + 1) * iw;
    const intPrev = y * iw;
    for (let x = 0; x < w; x++) {
      rowSum += src[rowOffset + x];
      integral[intRow + x + 1] = integral[intPrev + x + 1] + rowSum;
    }
  }
  const out = new Float64Array(w * h);
  for (let y = 0; y < h; y++) {
    const y1 = y - r < 0 ? 0 : y - r;
    const y2 = y + r >= h ? h - 1 : y + r;
    for (let x = 0; x < w; x++) {
      const x1 = x - r < 0 ? 0 : x - r;
      const x2 = x + r >= w ? w - 1 : x + r;
      const area = (x2 - x1 + 1) * (y2 - y1 + 1);
      const sum =
        integral[(y2 + 1) * iw + (x2 + 1)] -
        integral[y1 * iw + (x2 + 1)] -
        integral[(y2 + 1) * iw + x1] +
        integral[y1 * iw + x1];
      out[y * w + x] = sum / area;
    }
  }
  return out;
}

/**
 * Turns a rendered page (ImageData) into a scanned-looking one, in place.
 * Uses an integral image so the local-average lookup is O(1) per pixel.
 */
export function applyScanFilter(image: ImageData, opts: ScanOptions): void {
  const { width: w, height: h, data } = image;
  const size = w * h;

  // 1. Grayscale + contrast (around mid grey 128).
  const gray = new Float64Array(size);
  const c = opts.contrast;
  for (let i = 0, p = 0; i < size; i++, p += 4) {
    let v = grayColor(data[p], data[p + 1], data[p + 2]);
    v = (v - 128) * c + 128;
    gray[i] = v < 0 ? 0 : v > 255 ? 255 : v;
  }

  if (opts.mode === "gray") {
    // Adaptive background flattening (the clean "greyscale scan" look):
    //   1. Estimate the paper brightness with a local max filter (paper is the
    //      brightest thing around, even between lines of text).
    //   2. Smooth that estimate so it becomes a soft illumination map.
    //   3. Divide the page by it → uneven lighting and faint show-through from
    //      the back of the page flatten out to white.
    //   4. Apply a white-point + gamma curve so paper goes pure white while
    //      text keeps smooth grayscale anti-aliasing (not harsh 1-bit).
    const raw = new Float64Array(size);
    for (let i = 0, p = 0; i < size; i++, p += 4) {
      raw[i] = grayColor(data[p], data[p + 1], data[p + 2]);
    }

    const bgRadius = Math.max(10, Math.round(opts.blockRadius * 2 * (opts.dpi / 110)));
    const paper = boxBlur2D(
      slidingMax2D(raw, w, h, bgRadius),
      w,
      h,
      Math.max(1, bgRadius >> 1)
    );

    // Higher threshold → lower white point → more aggressive whitening.
    const whiteCut = Math.min(250, Math.max(150, 235 - opts.threshold * 2));
    const gamma = opts.contrast; // >1 deepens text without binarising it
    for (let i = 0, p = 0; i < size; i++, p += 4) {
      const bg = paper[i] < 1 ? 1 : paper[i];
      let n = (raw[i] / bg) * 255;
      if (n > 255) n = 255;
      let t = n / whiteCut;
      if (t > 1) t = 1;
      t = Math.pow(t, gamma);
      const v = t * 255;
      data[p] = data[p + 1] = data[p + 2] = v;
      data[p + 3] = 255;
    }
    return;
  }

  // 2. Integral image for fast local means.
  const iw = w + 1;
  const integral = new Float64Array(iw * (h + 1));
  for (let y = 0; y < h; y++) {
    let rowSum = 0;
    const rowOffset = y * w;
    const intRow = (y + 1) * iw;
    const intPrev = y * iw;
    for (let x = 0; x < w; x++) {
      rowSum += gray[rowOffset + x];
      integral[intRow + x + 1] = integral[intPrev + x + 1] + rowSum;
    }
  }

  // 3. Adaptive threshold: black where pixel < localMean - C.
  const r = Math.max(1, Math.round(opts.blockRadius));
  const C = opts.threshold;
  const out = data; // write straight into RGBA
  for (let y = 0; y < h; y++) {
    const y1 = y - r < 0 ? 0 : y - r;
    const y2 = y + r >= h ? h - 1 : y + r;
    for (let x = 0; x < w; x++) {
      const x1 = x - r < 0 ? 0 : x - r;
      const x2 = x + r >= w ? w - 1 : x + r;
      const area = (x2 - x1 + 1) * (y2 - y1 + 1);
      const sum =
        integral[(y2 + 1) * iw + (x2 + 1)] -
        integral[y1 * iw + (x2 + 1)] -
        integral[(y2 + 1) * iw + x1] +
        integral[y1 * iw + x1];
      const mean = sum / area;
      const idx = y * w + x;
      const black = gray[idx] < mean - C;
      const v = black ? 0 : 255;
      const p = idx * 4;
      out[p] = out[p + 1] = out[p + 2] = v;
      out[p + 3] = 255;
    }
  }

  // 4. Optional despeckle: drop black pixels with no black neighbours.
  if (opts.despeckle) {
    const isBlack = new Uint8Array(size);
    for (let i = 0; i < size; i++) isBlack[i] = out[i * 4] === 0 ? 1 : 0;
    for (let y = 1; y < h - 1; y++) {
      for (let x = 1; x < w - 1; x++) {
        const idx = y * w + x;
        if (!isBlack[idx]) continue;
        const neighbours =
          isBlack[idx - 1] +
          isBlack[idx + 1] +
          isBlack[idx - w] +
          isBlack[idx + w] +
          isBlack[idx - w - 1] +
          isBlack[idx - w + 1] +
          isBlack[idx + w - 1] +
          isBlack[idx + w + 1];
        if (neighbours === 0) {
          const p = idx * 4;
          out[p] = out[p + 1] = out[p + 2] = 255;
        }
      }
    }
  }
}

export interface LoadedPdf {
  numPages: number;
  /** Renders one page (1-indexed) to a canvas at the given DPI. */
  renderPage: (pageNumber: number, dpi: number) => Promise<HTMLCanvasElement>;
}

export async function loadPdf(fileData: ArrayBuffer): Promise<LoadedPdf> {
  const pdf = await pdfjsLib.getDocument({ data: fileData }).promise;
  return {
    numPages: pdf.numPages,
    async renderPage(pageNumber, dpi) {
      const page = await pdf.getPage(pageNumber);
      const scale = dpi / 72;
      const viewport = page.getViewport({ scale });
      const canvas = document.createElement("canvas");
      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);
      const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
      await page.render({ canvas, canvasContext: ctx, viewport }).promise;
      return canvas;
    },
  };
}

/** Renders + filters a single page and returns the processed canvas. */
export async function processPage(
  pdf: LoadedPdf,
  pageNumber: number,
  opts: ScanOptions
): Promise<HTMLCanvasElement> {
  let canvas = await pdf.renderPage(pageNumber, opts.dpi);
  if (opts.crop) {
    const quadPx = opts.crop.map((p) => ({
      x: p.x * canvas.width,
      y: p.y * canvas.height,
    })) as Quad;
    canvas = warpQuad(canvas, quadPx);
  }
  const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
  const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
  applyScanFilter(image, opts);
  ctx.putImageData(image, 0, 0);
  return canvas;
}

export interface ProgressInfo {
  page: number;
  total: number;
}

/**
 * Processes every page and assembles a downloadable PDF.
 * Preserves each page's original point size so the output isn't rescaled.
 */
export async function buildScannedPdf(
  fileData: ArrayBuffer,
  opts: ScanOptions,
  onProgress?: (info: ProgressInfo) => void
): Promise<Blob> {
  const pdf = await loadPdf(fileData);
  let doc: jsPDF | null = null;

  for (let n = 1; n <= pdf.numPages; n++) {
    const canvas = await processPage(pdf, n, opts);
    // Point size = pixels converted back from DPI to 72-dpi points.
    const wPt = (canvas.width / opts.dpi) * 72;
    const hPt = (canvas.height / opts.dpi) * 72;
    const orientation = wPt > hPt ? "landscape" : "portrait";
    const format: [number, number] = [wPt, hPt];

    if (!doc) {
      doc = new jsPDF({ unit: "pt", format, orientation, compress: true });
    } else {
      doc.addPage(format, orientation);
    }

    // PNG keeps B&W text crisp; JPEG is smaller for grayscale photos.
    const imgType = opts.mode === "bw" ? "PNG" : "JPEG";
    const dataUrl =
      opts.mode === "bw"
        ? canvas.toDataURL("image/png")
        : canvas.toDataURL("image/jpeg", 0.85);
    doc.addImage(dataUrl, imgType, 0, 0, wPt, hPt, undefined, "FAST");

    onProgress?.({ page: n, total: pdf.numPages });
    // Yield so the UI can repaint the progress bar.
    await new Promise((r) => setTimeout(r, 0));
  }

  return doc!.output("blob");
}
