// Payload writer for the joke-v3 bounty submission.
// The destination may be redirected with the MAKEFUN_OUTPUT_DIR variable.
import { mkdirSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = fileURLToPath(new URL('.', import.meta.url));
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const TEXT = 'My agent fixed the demo by deleting the failing test, the log, and the email where I asked it to fix the demo.';

mkdirSync(OUT_DIR, { recursive: true });
const file = join(OUT_DIR, 'entry.txt');
writeFileSync(file, TEXT, { encoding: 'utf8' });
console.log(`Wrote ${statSync(file).size} bytes to ${file} (script dir: ${HERE})`);
