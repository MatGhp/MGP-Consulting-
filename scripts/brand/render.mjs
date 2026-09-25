// Renders public/og.png, public/apple-touch-icon.png and public/favicon.ico with a locally installed
// Microsoft Edge or Google Chrome in headless mode.
// Sources: og-card.html (filled with the copy from src/i18n/translations/en.ts) and public/favicon.svg.
// Run with `npm run brand:render` after changing the copy or either source, then commit the generated files.
// Set BROWSER_PATH if the browser is not found in its default location.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createServer } from 'vite';

const repoRoot = fileURLToPath(new URL('../../', import.meta.url));
const brandDir = join(repoRoot, 'scripts', 'brand');
const publicDir = join(repoRoot, 'public');

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

// Scratch space for the browser profiles, pages and screenshots; node_modules is git-ignored.
const cacheDir = join(repoRoot, 'node_modules', '.cache');
mkdirSync(cacheDir, { recursive: true });
const workDir = mkdtempSync(join(cacheDir, 'mgp-brand-'));

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// A PNG is complete once it ends with the IEND chunk type and its fixed CRC.
const PNG_END = Buffer.from([0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82]);
const isCompletePng = (png) => png.length > PNG_END.length && png.subarray(png.length - PNG_END.length).equals(PNG_END);

// On Windows the browser launcher returns immediately and a child process writes the screenshot later,
// so poll until the file is a complete PNG.
async function waitForPng(path, timeoutMs = 30000) {
  for (const start = Date.now(); Date.now() - start < timeoutMs; await sleep(250)) {
    if (!existsSync(path)) continue;
    try {
      const png = readFileSync(path);
      if (isCompletePng(png)) return png;
    } catch {
      // The browser may still hold the file open; try again on the next poll.
    }
  }
  throw new Error(`Timed out waiting for a complete PNG at ${path}`);
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

  const png = await waitForPng(out);
  const actualWidth = png.readUInt32BE(16);
  const actualHeight = png.readUInt32BE(20);
  if (actualWidth !== width || actualHeight !== height) {
    throw new Error(`Expected ${width}x${height} but the browser produced ${actualWidth}x${actualHeight} for ${pageUrl}`);
  }
  return png;
}

// The translations are TypeScript; Vite (already a dev dependency) compiles and loads them.
async function loadEnglishCopy() {
  const vite = await createServer({
    root: repoRoot,
    configFile: false,
    logLevel: 'error',
    appType: 'custom',
    server: { middlewareMode: true, hmr: false },
    // Only one module is loaded, so skip the dependency pre-bundling scan of the HTML entries.
    optimizeDeps: { noDiscovery: true, entries: [] },
  });
  try {
    const { en } = await vite.ssrLoadModule('/src/i18n/translations/en.ts');
    return en;
  } finally {
    await vite.close();
  }
}

const escapeHtml = (text) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function fillTemplate(template, values) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    if (!(key in values)) throw new Error(`og-card.html uses the placeholder "${key}" but render.mjs provides no value for it`);
    return values[key];
  });
}

function writePage(name, html) {
  const file = join(workDir, name);
  writeFileSync(file, html);
  return pathToFileURL(file).href;
}

function ogCardPage(en, faviconSvg) {
  const { personalInfo } = en.data;
  const hero = en.ui.hero;
  // Only stable facts: the availability month is left out because social platforms cache the image.
  const facts = [
    `${hero.kpiYearsValue} ${hero.kpiYearsExp.toLowerCase()}`,
    `${hero.kpiLocationValue} · ${hero.kpiLocationLabel}`,
    `${hero.kpiLanguageFluency} (${hero.kpiLanguageValue})`,
  ];
  const html = fillTemplate(readFileSync(join(brandDir, 'og-card.html'), 'utf8'), {
    fontBase: pathToFileURL(join(repoRoot, 'node_modules', '@fontsource')).href,
    mark: faviconSvg,
    companyName: escapeHtml(personalInfo.companyName),
    name: escapeHtml(personalInfo.name),
    role: escapeHtml(personalInfo.role),
    headline: escapeHtml(personalInfo.headline),
    headlineAccent: escapeHtml(personalInfo.headlineAccent),
    facts: facts.map((fact) => `<div class="fact">${escapeHtml(fact)}</div>`).join('\n    '),
  });
  return writePage('og-card.html', html);
}

function iconPage(faviconSvg, size, { square }) {
  return writePage(
    `icon-${size}.html`,
    `<!doctype html><html><head><style>
      html, body { margin: 0; width: ${size}px; height: ${size}px; overflow: hidden; background: ${square ? '#0f172a' : 'transparent'}; }
      svg { display: block; width: ${size}px; height: ${size}px; }
    </style></head><body>${faviconSvg}</body></html>`
  );
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
  const en = await loadEnglishCopy();
  const faviconSvg = readFileSync(join(publicDir, 'favicon.svg'), 'utf8');

  writeFileSync(join(publicDir, 'og.png'), await screenshot(ogCardPage(en, faviconSvg), 1200, 630));
  console.log('brand: wrote public/og.png');

  // iOS rounds the corners itself, so the touch icon is a full square.
  writeFileSync(join(publicDir, 'apple-touch-icon.png'), await screenshot(iconPage(faviconSvg, 180, { square: true }), 180, 180));
  console.log('brand: wrote public/apple-touch-icon.png');

  const favicon = await screenshot(iconPage(faviconSvg, 32, { square: false }), 32, 32, { transparent: true });
  writeFileSync(join(publicDir, 'favicon.ico'), pngToIco(favicon, 32));
  console.log('brand: wrote public/favicon.ico');
} finally {
  // Background browser processes may still hold the profiles briefly after the screenshots are written.
  // A leftover scratch folder is harmless, so a failed cleanup only warns instead of hiding the real result.
  await sleep(1500);
  try {
    rmSync(workDir, { recursive: true, force: true, maxRetries: 10, retryDelay: 500 });
  } catch (error) {
    console.warn(`brand: could not remove ${workDir} (${error.message}); it is safe to delete later.`);
  }
}
