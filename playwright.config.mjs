import { defineConfig } from '@playwright/test';

const desktop = {
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
  isMobile: false,
  hasTouch: false,
};

const mobile = {
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 1,
  isMobile: true,
  hasTouch: true,
};

const scenario = (name, route, expectedStatus, lang, dir, device) => ({
  name,
  metadata: { route, expectedStatus, lang, dir, mobile: device === mobile },
  use: { ...device, browserName: 'chromium' },
});

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  retries: process.env.CI ? 1 : 0,
  timeout: 30_000,
  expect: { timeout: 5_000 },
  reporter: [
    ['line'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],
  use: {
    baseURL: 'http://127.0.0.1:4322',
    locale: 'en-US',
    timezoneId: 'UTC',
    reducedMotion: 'reduce',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'off',
  },
  webServer: {
    command: 'node scripts/serve-dist.mjs',
    url: 'http://127.0.0.1:4322/',
    reuseExistingServer: false,
    timeout: 30_000,
    env: { PORT: '4322' },
  },
  projects: [
    scenario('home-desktop', '/', 200, 'en', 'ltr', desktop),
    scenario('home-mobile', '/', 200, 'en', 'ltr', mobile),
    scenario('german-home-desktop', '/de/', 200, 'de', 'ltr', desktop),
    scenario('arabic-home-mobile', '/ar/', 200, 'ar', 'rtl', mobile),
    scenario('privacy-mobile', '/privacy/', 200, 'en', 'ltr', mobile),
    scenario('contact-mobile', '/contact/', 200, 'en', 'ltr', mobile),
    scenario('not-found-desktop', '/**stweb004_probe**/', 404, 'en', 'ltr', desktop),
  ],
});
