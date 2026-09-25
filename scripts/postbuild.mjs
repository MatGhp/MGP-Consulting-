// Emits a copy of dist/index.html for every client-side route so GitHub Pages
// answers /impressum and /datenschutz with HTTP 200 instead of the 404 fallback.
import { copyFile, mkdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const routes = ['impressum', 'datenschutz'];

const index = join(dist, 'index.html');
await readFile(index);

for (const route of routes) {
  const dir = join(dist, route);
  await mkdir(dir, { recursive: true });
  await copyFile(index, join(dir, 'index.html'));
  console.log(`postbuild: wrote /${route}/index.html`);
}
