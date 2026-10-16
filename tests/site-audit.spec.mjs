import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

/**
 * The whole site, not a sample: every page in the sitemap plus the 404.
 *
 * browser-a11y.spec.mjs checks eleven representative routes in depth. This
 * file walks all of them for the things that break one page at a time – a
 * missing translation in a title, a link to an anchor that was renamed, an
 * hreflang pair that no longer points back, a contrast failure that only
 * exists in dark mode on one language.
 *
 * Fast checks run on every `npm run test:browser`. The slow sweeps (axe on
 * every page in both themes, reflow at 320 px) run with SITE_AUDIT=1:
 *
 *   SITE_AUDIT=1 npx playwright test tests/site-audit.spec.mjs --project home-desktop
 *
 * Findings are collected rather than thrown one at a time, so a single run
 * lists all of them; the test fails at the end if any were found.
 */

const ORIGIN = 'https://simple-time.app';
const ONCE = 'home-desktop';
const FULL = Boolean(process.env.SITE_AUDIT);
const LANGS = ['en', 'de', 'nl', 'sv', 'fr', 'it', 'es', 'pt', 'ru', 'uk', 'el', 'tr', 'hy', 'ar', 'he', 'hi', 'zh', 'ja'];
const RTL = new Set(['ar', 'he']);

// Entrance animations must not be caught half-way by a contrast check.
test.use({ contextOptions: { reducedMotion: 'reduce' } });

async function sitemapPaths(request) {
  const index = await (await request.get('/sitemap-index.xml')).text();
  const maps = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  const paths = [];
  for (const map of maps) {
    const xml = await (await request.get(map)).text();
    for (const [, loc] of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) paths.push(new URL(loc).pathname);
  }
  return paths;
}

const langOf = (path) => {
  const first = path.split('/')[1];
  return LANGS.includes(first) ? first : 'en';
};

function report(testInfo, name, findings) {
  console.log(`SITE_AUDIT ${name} ${JSON.stringify(findings)}`);
  return testInfo.attach(name, { body: JSON.stringify(findings, null, 2), contentType: 'application/json' });
}

test('every page: status, head, headings, images and links', async ({ page, request }, testInfo) => {
  test.skip(testInfo.project.name !== ONCE, 'project-independent');
  test.setTimeout(10 * 60_000);

  const paths = await sitemapPaths(request);
  expect(paths.length, 'pages in the sitemap').toBeGreaterThanOrEqual(LANGS.length * 6);

  const problems = [];
  // Advice rather than defects: reported, but they do not fail the run.
  const warnings = [];
  const pages = new Map();
  const consoleErrors = [];
  page.on('console', (m) => m.type() === 'error' && consoleErrors.push(`${page.url()}: ${m.text()}`));
  page.on('pageerror', (e) => consoleErrors.push(`${page.url()}: ${e.message}`));

  for (const path of paths) {
    const response = await page.goto(path, { waitUntil: 'load' });
    if (response?.status() !== 200) {
      problems.push(`${path}: HTTP ${response?.status()}`);
      continue;
    }
    const info = await page.evaluate(() => {
      const meta = (n) => document.querySelector(`meta[name="${n}"]`)?.getAttribute('content') ?? null;
      const prop = (n) => document.querySelector(`meta[property="${n}"]`)?.getAttribute('content') ?? null;
      return {
        lang: document.documentElement.lang,
        dir: document.documentElement.dir,
        title: document.title,
        description: meta('description'),
        robots: meta('robots'),
        canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? null,
        hreflang: [...document.querySelectorAll('link[rel="alternate"][hreflang]')].map((l) => [l.getAttribute('hreflang'), l.getAttribute('href')]),
        ogImage: prop('og:image'),
        ogUrl: prop('og:url'),
        ogTitle: prop('og:title'),
        twitterImage: meta('twitter:image'),
        h1: [...document.querySelectorAll('h1')].map((h) => h.textContent.trim()),
        levels: [...document.querySelectorAll('main h1, main h2, main h3, main h4, main h5, main h6')].map((h) => Number(h.tagName[1])),
        imagesWithoutAlt: [...document.images].filter((i) => !i.hasAttribute('alt')).map((i) => i.getAttribute('src')),
        brokenImages: [...document.images].filter((i) => i.complete && i.naturalWidth === 0 && i.loading !== 'lazy').map((i) => i.currentSrc || i.src),
        links: [...document.querySelectorAll('a[href]')].map((a) => ({ href: a.getAttribute('href'), blank: a.target === '_blank', rel: a.rel, name: (a.getAttribute('aria-label') || a.textContent || '').trim() })),
        ids: [...document.querySelectorAll('[id]')].map((e) => e.id),
        jsonLd: [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => {
          try {
            return JSON.parse(s.textContent) && 'ok';
          } catch (error) {
            return String(error);
          }
        }),
        text: document.body.innerText,
      };
    });
    pages.set(path, info);

    const lang = langOf(path);
    const where = `${path}:`;
    if (info.lang !== lang) problems.push(`${where} <html lang="${info.lang}">, expected ${lang}`);
    if ((info.dir === 'rtl') !== RTL.has(lang)) problems.push(`${where} dir="${info.dir}"`);
    if (!info.title) problems.push(`${where} no <title>`);
    if (info.title.length > 70) warnings.push(`${where} title ${info.title.length} characters (search results cut at ~60–70): "${info.title}"`);
    if (!info.description) problems.push(`${where} no meta description`);
    else if (info.description.length > 170) warnings.push(`${where} description ${info.description.length} characters (cut at ~155–160)`);
    if (info.canonical !== `${ORIGIN}${path}`) problems.push(`${where} canonical ${info.canonical}`);
    if (info.robots && /noindex/.test(info.robots)) problems.push(`${where} noindex on an indexable page`);
    if (info.ogUrl !== `${ORIGIN}${path}`) problems.push(`${where} og:url ${info.ogUrl}`);
    if (!info.ogImage || !info.twitterImage) problems.push(`${where} share image missing`);
    if (info.h1.length !== 1) problems.push(`${where} ${info.h1.length} <h1>`);
    for (let i = 1; i < info.levels.length; i++) {
      if (info.levels[i] > info.levels[i - 1] + 1) problems.push(`${where} heading jumps from h${info.levels[i - 1]} to h${info.levels[i]}`);
    }
    for (const src of info.imagesWithoutAlt) problems.push(`${where} <img> without alt: ${src}`);
    for (const src of info.brokenImages) problems.push(`${where} image failed to load: ${src}`);
    for (const result of info.jsonLd) if (result !== 'ok') problems.push(`${where} JSON-LD does not parse: ${result}`);
    for (const pattern of [/\bTODO\b/, /\bFIXME\b/, /lorem ipsum/i, /\bundefined\b/, /\bNaN\b/, /\{[a-z]+\}/]) {
      const hit = info.text.match(pattern);
      if (hit) problems.push(`${where} visible text contains "${hit[0]}"`);
    }
    for (const link of info.links) {
      if (link.blank && !/noopener|noreferrer/.test(link.rel)) problems.push(`${where} target=_blank without noopener: ${link.href}`);
      if (!link.name) problems.push(`${where} link without a name: ${link.href}`);
    }

    // hreflang: every language once, plus x-default, all absolute on the canonical origin.
    const hl = new Map(info.hreflang);
    for (const l of [...LANGS, 'x-default']) if (!hl.has(l)) problems.push(`${where} hreflang ${l} missing`);
    if (info.hreflang.length !== LANGS.length + 1) problems.push(`${where} ${info.hreflang.length} hreflang links`);
    if (hl.get(lang) !== `${ORIGIN}${path}`) problems.push(`${where} hreflang for its own language points to ${hl.get(lang)}`);
  }

  // Reciprocity: the page an alternate points to must point back.
  for (const [path, info] of pages) {
    for (const [l, href] of info.hreflang) {
      if (l === 'x-default') continue;
      const target = new URL(href).pathname;
      const back = pages.get(target);
      if (!back) problems.push(`${path}: hreflang ${l} → ${target} is not in the sitemap`);
      else if (!back.hreflang.some(([, h]) => h === `${ORIGIN}${path}`)) problems.push(`${path}: ${target} does not point back`);
    }
  }

  // Titles and descriptions must not repeat within a language.
  for (const key of ['title', 'description']) {
    const seen = new Map();
    for (const [path, info] of pages) {
      const id = `${langOf(path)}|${info[key]}`;
      if (seen.has(id)) problems.push(`${path}: same ${key} as ${seen.get(id)}`);
      else seen.set(id, path);
    }
  }

  // Internal links: the target exists, and an anchor exists on it.
  const internal = new Map();
  for (const [path, info] of pages) {
    for (const { href } of info.links) {
      if (/^(https?:|mailto:|tel:)/.test(href)) continue;
      const url = new URL(href, `${ORIGIN}${path}`);
      const key = url.pathname + url.hash;
      if (!internal.has(key)) internal.set(key, path);
    }
  }
  for (const [key, from] of internal) {
    const [target, anchor] = key.split('#');
    const known = pages.get(target);
    if (!known) {
      const status = (await request.get(target)).status();
      if (status !== 200) problems.push(`${from}: link to ${target} answers ${status}`);
      continue;
    }
    if (anchor && !known.ids.includes(decodeURIComponent(anchor))) problems.push(`${from}: link to ${key} – no element with id "${anchor}"`);
  }

  // Share images and icons referenced from the head.
  const assets = new Set();
  for (const info of pages.values()) assets.add(new URL(info.ogImage).pathname);
  for (const asset of [...assets, '/favicon.ico', '/favicon-32.png', '/favicon-192.png', '/apple-touch-icon.png']) {
    const status = (await request.get(asset)).status();
    if (status !== 200) problems.push(`${asset}: HTTP ${status}`);
  }

  for (const error of consoleErrors) problems.push(`console: ${error}`);
  await report(testInfo, 'crawl', { pages: pages.size, internalLinks: internal.size, problems, warnings });
  expect(problems, problems.join('\n')).toEqual([]);
});

test('the 404 page answers 404, stays out of the index and leads home', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== ONCE, 'project-independent');
  for (const [path, lang, home] of [
    ['/gibt-es-nicht/', 'en', '/'],
    ['/de/gibt-es-nicht/', 'de', '/de/'],
    ['/fr/introuvable/', 'fr', '/fr/'],
  ]) {
    const response = await page.goto(path);
    expect(response?.status(), path).toBe(404);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
    await expect(page.locator('html')).toHaveAttribute('lang', lang);
    await expect(page.locator('#home-link')).toHaveAttribute('href', home);
  }
});

test('without JavaScript every section is visible', async ({ browser }, testInfo) => {
  test.skip(testInfo.project.name !== ONCE, 'project-independent');
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL: testInfo.project.use.baseURL });
  const page = await context.newPage();
  const problems = [];
  for (const path of ['/', '/de/', '/ar/', '/pro/', '/faq/', '/contact/', '/privacy/']) {
    await page.goto(path);
    const hidden = await page.evaluate(() =>
      [...document.querySelectorAll('main *')]
        .filter((e) => e.children.length === 0 && e.textContent.trim())
        .filter((e) => {
          for (let n = e; n && n !== document.body; n = n.parentElement) {
            const s = getComputedStyle(n);
            if (s.opacity === '0' || s.visibility === 'hidden') return true;
          }
          return false;
        })
        .map((e) => e.textContent.trim().slice(0, 40)),
    );
    if (hidden.length) problems.push(`${path}: ${hidden.length} texts invisible without JS, e.g. "${hidden[0]}"`);
    await expect(page.locator('h1'), path).toBeVisible();
  }
  await context.close();
  await report(testInfo, 'no-js', problems);
  expect(problems, problems.join('\n')).toEqual([]);
});

test('blocked storage, fonts and images do not break the page', async ({ browser }, testInfo) => {
  test.skip(testInfo.project.name !== ONCE, 'project-independent');
  const context = await browser.newContext({ baseURL: testInfo.project.use.baseURL, reducedMotion: 'reduce' });
  // Storage that throws, as in Safari with cookies blocked or some private modes.
  await context.addInitScript(() => {
    const deny = () => {
      throw new DOMException('denied', 'SecurityError');
    };
    Object.defineProperty(window, 'localStorage', { get: deny, configurable: true });
  });
  await context.route(/\.(woff2|webp|png)(\?.*)?$/, (route) => route.abort());
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(`${page.url()}: ${e.message}`));
  for (const path of ['/', '/de/faq/', '/he/pro/']) {
    await page.goto(path);
    await expect(page.locator('h1'), path).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow, `${path} horizontal overflow`).toBeLessThanOrEqual(1);
  }
  // The theme still switches for the visit, it only is not remembered.
  await page.goto('/');
  const before = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  await page.locator('#theme-toggle').click();
  const after = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  expect(after, 'theme toggle without storage').toBe(!before);
  await context.close();
  expect(errors, errors.join('\n')).toEqual([]);
});

test('back, forward and reload keep page, language and theme', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== ONCE, 'project-independent');
  await page.goto('/de/');
  await page.locator('#theme-toggle').click();
  const dark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  await page.goto('/de/faq/');
  await page.goBack();
  await expect(page).toHaveURL(/\/de\/$/);
  await page.goForward();
  await expect(page).toHaveURL(/\/de\/faq\/$/);
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'de');
  expect(await page.evaluate(() => document.documentElement.classList.contains('dark')), 'theme after reload').toBe(dark);
  // The language menu keeps the visitor on the same page.
  await page.locator('details.lang-menu summary').click();
  await page.locator('details.lang-menu a[hreflang="en"]').click();
  await expect(page).toHaveURL(/\/faq\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

test('axe on every page, light and dark', async ({ page, request }, testInfo) => {
  test.skip(testInfo.project.name !== ONCE || !FULL, 'SITE_AUDIT=1 only');
  test.setTimeout(30 * 60_000);
  const paths = [...(await sitemapPaths(request)), '/gibt-es-nicht/'];
  const findings = [];
  for (const scheme of ['light', 'dark']) {
    await page.emulateMedia({ colorScheme: scheme, reducedMotion: 'reduce' });
    for (const path of paths) {
      await page.goto(path, { waitUntil: 'load' });
      const result = await new AxeBuilder({ page }).analyze();
      for (const v of result.violations) {
        findings.push({ scheme, path, id: v.id, impact: v.impact, nodes: v.nodes.slice(0, 3).map((n) => n.target.join(' ')) });
      }
    }
  }
  await report(testInfo, 'axe-all', findings);
  expect(findings, JSON.stringify(findings, null, 1)).toEqual([]);
});

test('reflow: 320 px (400 % zoom), phone landscape and a wide screen', async ({ browser, request }, testInfo) => {
  test.skip(testInfo.project.name !== ONCE || !FULL, 'SITE_AUDIT=1 only');
  test.setTimeout(30 * 60_000);
  const paths = [...(await sitemapPaths(request)), '/gibt-es-nicht/'];
  const findings = [];
  for (const viewport of [
    { width: 320, height: 640 },
    { width: 844, height: 390 },
    { width: 2560, height: 1440 },
  ]) {
    const context = await browser.newContext({ viewport, baseURL: testInfo.project.use.baseURL, reducedMotion: 'reduce' });
    const page = await context.newPage();
    for (const path of paths) {
      await page.goto(path, { waitUntil: 'load' });
      const result = await page.evaluate(() => {
        const doc = document.documentElement;
        // Text cut off at the right edge of the window, outside a scroll rail.
        const clipped = [...document.querySelectorAll('h1, h2, h3, p, li, a, button, summary')]
          .filter((e) => {
            const r = e.getBoundingClientRect();
            return r.width > 0 && r.right > doc.clientWidth + 1 && !e.closest('.snap-rail, [data-gallery]');
          })
          .slice(0, 3)
          .map((e) => `${e.tagName.toLowerCase()} "${e.textContent.trim().slice(0, 30)}"`);
        return { overflow: doc.scrollWidth - doc.clientWidth, clipped };
      });
      if (result.overflow > 1 || result.clipped.length) findings.push({ viewport: `${viewport.width}x${viewport.height}`, path, ...result });
    }
    await context.close();
  }
  await report(testInfo, 'reflow', findings);
  expect(findings, JSON.stringify(findings, null, 1)).toEqual([]);
});
