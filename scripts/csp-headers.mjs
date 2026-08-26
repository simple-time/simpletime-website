#!/usr/bin/env node
/**
 * Replace 'unsafe-inline' in the built CSP with hashes of the inline code
 * Astro actually emitted.
 *
 * Astro inlines its small component scripts rather than emitting separate
 * files, so 'self' alone is not enough — without hashes the page needs
 * 'unsafe-inline', which is what CSP exists to avoid. Running this after
 * every build keeps the hashes from going stale.
 *
 * Scripts of type application/ld+json are deliberately skipped: browsers
 * do not execute them, and a strict script-src leaves them readable.
 *
 * Wired up as the `postbuild` npm script.
 */

import { createHash } from 'node:crypto';
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const HEADERS = join(DIST, '_headers');

const EXECUTABLE_TYPES = new Set(['', 'module', 'text/javascript', 'application/javascript']);

async function htmlFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await htmlFiles(full)));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

const sha256 = (body) => `'sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}'`;

const files = await htmlFiles(DIST);
const scriptHashes = new Set();
const styleHashes = new Set();

for (const file of files) {
  const html = await readFile(file, 'utf8');

  for (const match of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
    const [, attrs, body] = match;
    if (/\ssrc=/.test(attrs)) continue;
    const type = (attrs.match(/type="([^"]*)"/)?.[1] ?? '').toLowerCase();
    if (!EXECUTABLE_TYPES.has(type)) continue;
    scriptHashes.add(sha256(body));
  }

  for (const match of html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) {
    styleHashes.add(sha256(match[1]));
  }
}

let headers = await readFile(HEADERS, 'utf8');
const before = headers;

headers = headers.replace(
  /script-src 'self' 'unsafe-inline'/,
  `script-src 'self' ${[...scriptHashes].join(' ')}`,
);
headers = headers.replace(
  /style-src 'self' 'unsafe-inline'/,
  `style-src 'self' ${[...styleHashes].join(' ')}`,
);

if (headers === before) {
  console.error('csp-headers: no CSP placeholders found in dist/_headers — not written');
  process.exit(1);
}

// _headers allows 2000 characters per line.
const longest = Math.max(...headers.split('\n').map((l) => l.length));
if (longest > 2000) {
  console.error(`csp-headers: a header line is ${longest} characters, over the 2000 limit`);
  process.exit(1);
}

await writeFile(HEADERS, headers);
console.log(
  `csp-headers: ${scriptHashes.size} script + ${styleHashes.size} style hashes ` +
    `across ${files.length} pages (longest header line ${longest} chars)`,
);
