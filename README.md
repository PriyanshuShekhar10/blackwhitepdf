# PDF Scanner

An Astro site that turns a PDF of **photographed** book/document pages into a
clean **scanned-looking** PDF — solid black text on bright white paper —
applied to **every page at once**.

Everything runs **in the browser**. The PDF is never uploaded to a server.

## How it works

1. `pdfjs-dist` renders each page to a canvas at your chosen DPI.
2. An **adaptive threshold** filter (`src/scripts/scanner.ts`) compares each
   pixel to the local average around it, so uneven photo lighting/shadows are
   removed and ink turns crisp black while paper turns pure white. An integral
   image keeps the local-average lookup O(1) per pixel.
3. `jsPDF` reassembles the processed pages into a new PDF, preserving each
   page's original size, and hands you a download.

## Controls

- **Mode** — Black & White (true scan) or cleaned Grayscale.
- **Resolution** — 120–300 DPI (higher = sharper text, bigger file).
- **Ink threshold** — lower = bolder text (more speckle), higher = cleaner.
- **Detail size** — neighbourhood used for local lighting; bigger handles softer
  shadows.
- **Contrast** — pre-threshold contrast boost.
- **Remove speckles** — drops isolated black dots (B&W mode).

A live before/after preview of the current page updates as you tune settings, so
you can dial it in before converting the whole document.

## Commands

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Install dependencies                        |
| `npm run dev`   | Start dev server at `localhost:4321`        |
| `npm run build` | Build the static site to `./dist/`          |
| `npm run preview` | Preview the production build              |

## Project structure

```
src/
  pages/index.astro     # UI + client wiring
  scripts/scanner.ts    # rendering, scan filter, PDF assembly
```
