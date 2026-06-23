// Generates the PWA / Apple Touch icons by rasterizing an inline SVG with sharp.
// Aesthetic: black background, yellow lambda (Λ) glyph — matches the app.
//
//   npm run icons   (also runnable directly: node scripts/generate-icons.mjs)
//
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const BLACK = '#000000';
const YELLOW = '#eab308'; // tailwind yellow-500

// A centered lambda glyph drawn as a stroked path so it reads cleanly at small
// sizes. `safe` controls the inset (used to keep the maskable icon inside the
// safe zone). Returns an SVG string for the given pixel size.
function svg(size, { rounded = false, safe = 1 } = {}) {
  const cx = size / 2;
  const stroke = size * 0.11;
  // Lambda spans `span` fraction of the canvas, scaled by `safe`.
  const span = size * 0.5 * safe;
  const top = (size - span) / 2;
  const bottom = top + span;
  const halfW = span * 0.46;
  const apex = top;
  // Left leg goes from apex down-left; right leg from a point on the left leg
  // down-right (classic lambda). We approximate with two strokes.
  const radius = rounded ? size * 0.22 : 0;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="${BLACK}"/>
  <g fill="none" stroke="${YELLOW}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
    <path d="M ${cx} ${apex} L ${cx + halfW} ${bottom}"/>
    <path d="M ${cx} ${apex} L ${cx - halfW} ${bottom}"/>
    <path d="M ${cx - halfW * 0.35} ${top + span * 0.42} L ${cx - halfW} ${bottom}"/>
  </g>
</svg>`;
}

async function render(name, size, opts) {
  const out = join(publicDir, name);
  await sharp(Buffer.from(svg(size, opts))).png().toFile(out);
  console.log(`wrote ${name} (${size}x${size})`);
}

await render('pwa-192.png', 192, { rounded: false });
await render('pwa-512.png', 512, { rounded: false });
// Maskable: extra inset so the glyph survives platform masking.
await render('pwa-512-maskable.png', 512, { rounded: false, safe: 0.72 });
// Apple touch icon: square, no transparency, no rounded corners (iOS rounds it).
await render('apple-touch-icon-180.png', 180, { rounded: false });

console.log('done');
