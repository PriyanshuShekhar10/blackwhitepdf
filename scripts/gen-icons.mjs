import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFileSync, unlinkSync } from "node:fs";

/**
 * Raster icons for BlackWhitePDF.
 * Filled geometry (not strokes) so the mark stays crisp at 16×16.
 * Light/dark adaptation lives only in favicon.svg — PNGs/ICO stay ink tile
 * so tabs and home screens stay consistent.
 */

const docMark = `
  <path fill="#ffffff" d="M9 5h9.2L23 9.8V27H9V5z"/>
  <path fill="#171717" d="M18.2 5V9.8H23L18.2 5z"/>
  <rect fill="#c4c4c4" x="12" y="14" width="8" height="2" rx="1"/>
  <rect fill="#8a8a8a" x="12" y="18" width="6.5" height="2" rx="1"/>
  <rect fill="#171717" x="12" y="22" width="5" height="2" rx="1"/>
`;

// Simplified 16×16 mark: thicker bars, more padding, only two lines.
const docMark16 = `
  <path fill="#ffffff" d="M8 4h10l4 4v18H8V4z"/>
  <path fill="#171717" d="M18 4v4h4L18 4z"/>
  <rect fill="#b0b0b0" x="11" y="14" width="10" height="2.5" rx="1.25"/>
  <rect fill="#171717" x="11" y="20" width="7" height="2.5" rx="1.25"/>
`;

const rounded = (mark) =>
  Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="8" fill="#171717"/>
  ${mark}
</svg>`);

const square = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#171717"/>
  ${docMark}
</svg>`);

// Maskable: keep the mark inside the center ~80% safe zone.
const maskable = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#171717"/>
  <g transform="translate(3.2 3.2) scale(0.8)">
    ${docMark}
  </g>
</svg>`);

const png = (svg, size) =>
  sharp(svg, { density: 512 }).resize(size, size).png();

const tmp16 = "public/favicon-16.png";
const tmp32 = "public/favicon-32.png";
const tmp48 = "public/favicon-48.png";

await png(rounded(docMark16), 16).toFile(tmp16);
await png(rounded(docMark), 32).toFile(tmp32);
await png(rounded(docMark), 48).toFile(tmp48);

await png(square, 180).toFile("public/apple-touch-icon.png");
await png(square, 192).toFile("public/icon-192.png");
await png(square, 512).toFile("public/icon-512.png");
await png(maskable, 512).toFile("public/icon-512-maskable.png");

const ico = await pngToIco([tmp16, tmp32, tmp48]);
writeFileSync("public/favicon.ico", ico);

// Keep 16/32 PNGs for explicit <link sizes="…"> tags; drop the ICO-only 48.
unlinkSync(tmp48);

console.log(
  "icons generated → public/{favicon.ico,favicon-16.png,favicon-32.png,apple-touch-icon.png,icon-*.png}",
);
