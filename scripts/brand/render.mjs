// Renders public/og.png, public/apple-touch-icon.png and public/favicon.ico with a locally installed
// Microsoft Edge or Google Chrome in headless mode. Sources: og-card.html and public/favicon.svg.
// Run with `npm run brand:render` after changing either source, then commit the generated files.
// Set BROWSER_PATH if the browser is not found in its default location.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const brandDir = fileURLToPath(new URL('./', import.meta.url));
const publicDir = fileURLToPath(new URL('../../public/', import.meta.url));
const monoFont = pathToFileURL(
  fileURLToPath(new URL('../../node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-700-normal.woff2', import.meta.url))
).href;

const browser = [
  process.env.BROWSER_PATH,
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
].find((path) => path && existsSync(path));

if (!browser) {
  throw new Error('No Edge or Chrome installation found. Set BROWSER_PATH to the browser executable.');
}

// Scratch space for the browser profile and screenshots; node_modules is git-ignored.
const cacheDir = fileURLToPath(new URL('../../node_modules/.cache/', import.meta.url));
mkdirSync(cacheDir, { recursive: true });
const workDir = mkdtempSync(join(cacheDir, 'mgp-brand-'));

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// On Windows the browser launcher returns immediately and a child process writes the screenshot later,
// so wait until the file exists and its size has stopped changing.
async function waitForFile(path, timeoutMs = 30000) {
  let lastSize = -1;
  for (const start = Date.now(); Date.now() - start < timeoutMs; await sleep(250)) {
    if (!existsSync(path)) continue;
    const size = statSync(path).size;
    if (size > 0 && size === lastSize) return;
    lastSize = size;
  }
  throw new Error(`Timed out waiting for ${path}`);
}

async function screenshot(pageUrl, width, height, { transparent = false } = {}) {
  const out = join(workDir, `shot-${width}x${height}.png`);
  const args = [
    '--headless=new',
    // A throwaway profile per shot keeps each run independent of any browser window that is already open.
    `--user-data-dir=${join(workDir, `profile-${width}x${height}`)}`,
    '--no-first-run',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--allow-file-access-from-files',
    '--virtual-time-budget=3000',
    `--window-size=${width},${height}`,
    `--screenshot=${out}`,
  ];
  if (transparent) args.push('--default-background-color=00000000');
  execFileSync(browser, [...args, pageUrl], { stdio: 'ignore' });
  await waitForFile(out);

  const png = readFileSync(out);
  const actualWidth = png.readUInt32BE(16);
  const actualHeight = png.readUInt32BE(20);
  if (actualWidth !== width || actualHeight !== height) {
    throw new Error(`Expected ${width}x${height} but the browser produced ${actualWidth}x${actualHeight} for ${pageUrl}`);
  }
  return png;
}

// Inlines the favicon SVG into a page so it can use the JetBrains Mono font file.
function iconPage(size, { square }) {
  const svg = readFileSync(join(publicDir, 'favicon.svg'), 'utf8');
  const html = `<!doctype html><html><head><style>
    @font-face { font-family: "JetBrains Mono"; font-weight: 700; src: url("${monoFont}") format("woff2"); }
    html, body { margin: 0; width: ${size}px; height: ${size}px; overflow: hidden; background: ${square ? '#0f172a' : 'transparent'}; }
    svg { display: block; width: ${size}px; height: ${size}px; }
  </style></head><body>${svg}</body></html>`;
  const file = join(workDir, `icon-${size}.html`);
  writeFileSync(file, html);
  return pathToFileURL(file).href;
}

// A single-image ICO file may hold PNG data directly (supported by all current browsers).
function pngToIco(png, size) {
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  header.writeUInt8(size, 6);
  header.writeUInt8(size, 7);
  header.writeUInt16LE(1, 10);
  header.writeUInt16LE(32, 12);
  header.writeUInt32LE(png.length, 14);
  header.writeUInt32LE(22, 18);
  return Buffer.concat([header, png]);
}

try {
  writeFileSync(join(publicDir, 'og.png'), await screenshot(pathToFileURL(join(brandDir, 'og-card.html')).href, 1200, 630));
  console.log('brand: wrote public/og.png');

  // iOS rounds the corners itself, so the touch icon is a full square.
  writeFileSync(join(publicDir, 'apple-touch-icon.png'), await screenshot(iconPage(180, { square: true }), 180, 180));
  console.log('brand: wrote public/apple-touch-icon.png');

  const favicon = await screenshot(iconPage(32, { square: false }), 32, 32, { transparent: true });
  writeFileSync(join(publicDir, 'favicon.ico'), pngToIco(favicon, 32));
  console.log('brand: wrote public/favicon.ico');
} finally {
  // Background browser processes may still hold the profile briefly after the screenshot is written.
  await sleep(1500);
  rmSync(workDir, { recursive: true, force: true, maxRetries: 10, retryDelay: 500 });
}
