#!/usr/bin/env node
/**
 * Check the live site from the outside – what the build cannot see.
 *
 * check-headers.mjs proves that dist/_headers is right. Whether Cloudflare
 * actually serves it that way, redirects http and www, refuses old TLS, and
 * whether DNS protects the domain and its mail is only visible on the real
 * server. This script asks it directly and lists every deviation from the
 * intended state; it exits 1 if there is any.
 *
 *   node scripts/check-live.mjs                 # https://simple-time.app
 *   node scripts/check-live.mjs --origin https://simple-time.app
 *
 * It only reads: plain GET/HEAD requests, one TLS handshake per old protocol
 * version, and DNS lookups over Cloudflare's public resolver (DoH).
 */

import tls from 'node:tls';

const args = process.argv.slice(2);
const at = args.indexOf('--origin');
const ORIGIN = at >= 0 && args[at + 1] ? args[at + 1] : 'https://simple-time.app';
const HOST = new URL(ORIGIN).host;

// Public copies of the site on workers.dev. Each must either be gone or carry noindex.
const COPIES = [
  'https://simpletime-website.white-bread-a79a.workers.dev/',
  'https://simpletime-website.polished-resonance-9e49.workers.dev/',
];

const problems = [];
const ok = [];
const check = (condition, good, bad) => (condition ? ok.push(good) : problems.push(bad));

async function head(url, init = {}) {
  return fetch(url, { method: 'GET', redirect: 'manual', ...init, headers: { 'user-agent': 'simpletime-check-live', ...init.headers } });
}

async function doh(name, type) {
  const response = await fetch(`https://cloudflare-dns.com/dns-query?name=${name}&type=${type}`, {
    headers: { accept: 'application/dns-json' },
  });
  const json = await response.json();
  return (json.Answer ?? []).filter((a) => a.type === { TXT: 16, CAA: 257, DS: 43, MX: 15 }[type]).map((a) => a.data);
}

function oldTls(version) {
  return new Promise((resolve) => {
    const socket = tls.connect({
      host: HOST,
      port: 443,
      servername: HOST,
      minVersion: version,
      maxVersion: version,
      ciphers: 'DEFAULT:@SECLEVEL=0',
    });
    socket.setTimeout(8000, () => {
      socket.destroy();
      resolve(false);
    });
    socket.once('secureConnect', () => {
      socket.end();
      resolve(true);
    });
    socket.once('error', () => resolve(false));
  });
}

// ---------------------------------------------------------------- HTTP ---

const home = await head(`${ORIGIN}/`);
check(home.status === 200, 'home answers 200', `home answers ${home.status}`);
const headers = Object.fromEntries(home.headers);
for (const [name, pattern] of [
  ['content-security-policy', /default-src 'self'/],
  ['x-content-type-options', /nosniff/],
  ['x-frame-options', /DENY/],
  ['referrer-policy', /strict-origin/],
  ['cross-origin-opener-policy', /same-origin/],
  ['strict-transport-security', /max-age=\d{7,}/],
]) {
  check(pattern.test(headers[name] ?? ''), `${name} present`, `${name} missing or weak: ${headers[name] ?? '(none)'}`);
}
check(!/'unsafe-inline'/.test(headers['content-security-policy'] ?? ''), 'CSP without unsafe-inline', "CSP allows 'unsafe-inline'");
check(!headers['set-cookie'], 'no cookies on the home page', `home sets a cookie: ${headers['set-cookie']}`);

const plain = await head(`http://${HOST}/`);
check(
  [301, 308].includes(plain.status) && (plain.headers.get('location') ?? '').startsWith('https://'),
  'http redirects to https',
  `http://${HOST}/ answers ${plain.status} instead of a permanent redirect to https`,
);

const www = await head(`https://www.${HOST}/`);
check(
  [301, 308].includes(www.status) && new URL(www.headers.get('location') ?? 'x:', ORIGIN).host === HOST,
  'www redirects to the bare domain',
  `https://www.${HOST}/ answers ${www.status} – a second copy of the site instead of a redirect`,
);

const missing = await head(`${ORIGIN}/check-live-does-not-exist/`);
check(missing.status === 404, 'unknown pages answer 404', `unknown page answers ${missing.status}`);

for (const path of ['/robots.txt', '/sitemap-index.xml', '/.well-known/security.txt']) {
  const response = await head(`${ORIGIN}${path}`);
  check(response.status === 200, `${path} present`, `${path} answers ${response.status}`);
}

for (const copy of COPIES) {
  try {
    const response = await head(copy);
    const indexable = response.status === 200 && !/noindex/.test(response.headers.get('x-robots-tag') ?? '');
    check(!indexable, `${copy} not indexable`, `${copy} serves the site without noindex – a public duplicate`);
  } catch {
    ok.push(`${copy} unreachable`);
  }
}

// ----------------------------------------------------------------- TLS ---

for (const version of ['TLSv1', 'TLSv1.1']) {
  const accepted = await oldTls(version);
  check(!accepted, `${version} refused`, `${version} still accepted (minimum should be TLS 1.2)`);
}

// ----------------------------------------------------------------- DNS ---

const domain = HOST.replace(/^www\./, '');
const ds = await doh(domain, 'DS');
check(ds.length > 0, 'DNSSEC signed', 'DNSSEC not enabled (no DS record at the registry)');
const caa = await doh(domain, 'CAA');
check(caa.length > 0, 'CAA records present', 'no CAA record – any certificate authority may issue for the domain');
const dmarc = (await doh(`_dmarc.${domain}`, 'TXT')).join(' ');
check(/p=(quarantine|reject)/.test(dmarc), 'DMARC enforced', `DMARC not enforced: ${dmarc || '(none)'}`);
const spf = (await doh(domain, 'TXT')).find((t) => t.includes('v=spf1')) ?? '';
check(/-all/.test(spf), 'SPF ends in -all', `SPF is soft: ${spf || '(none)'}`);

// -------------------------------------------------------------- report ---

for (const line of ok) console.log(`ok    ${line}`);
for (const line of problems) console.log(`FAIL  ${line}`);
console.log(`\ncheck-live: ${ok.length} ok, ${problems.length} to fix (${ORIGIN})`);
process.exit(problems.length ? 1 : 0);
