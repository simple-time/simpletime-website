import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { assertNoAxeViolations, createAxeReport } from './axe-policy.mjs';

test.describe('axe gate policy', () => {
  test.skip(
    () => test.info().project.name !== 'home-desktop',
    'gate policy is project-independent',
  );

  test('zero violations passes', () => {
    const report = createAxeReport(
      { violations: [], incomplete: [] },
      { route: '/fixture/', project: 'policy-test' },
    );

    expect(() => assertNoAxeViolations(report)).not.toThrow();

    const context = { route: '/fixture/', project: 'policy-test' };
    for (const malformed of [
      undefined,
      {},
      { violations: null, incomplete: [] },
      { violations: {}, incomplete: [] },
      { violations: [], incomplete: null },
      { violations: [], incomplete: {} },
    ]) {
      expect(() => createAxeReport(malformed, context)).toThrow(/Invalid Axe results: (violations|incomplete) must be an array/);
    }
  });

  test('a real Axe violation fails', async ({ page }) => {
    await page.setContent('<!doctype html><html lang="en"><head><title>Fixture</title></head><body><button></button></body></html>');
    const axe = await new AxeBuilder({ page }).analyze();
    const report = createAxeReport(axe, { route: '/fixture/', project: 'policy-test' });

    expect(report.violations.some((item) => item.id === 'button-name')).toBe(true);
    expect(() => assertNoAxeViolations(report)).toThrow(/button-name/);
  });

  test('incomplete-only remains visible and does not fail', () => {
    const report = createAxeReport(
      {
        violations: [],
        incomplete: [{ id: 'needs-review', impact: null, nodes: [{ target: ['#subject'] }] }],
      },
      { route: '/fixture/', project: 'policy-test' },
    );

    expect(report.incomplete).toEqual([
      { id: 'needs-review', impact: 'unknown', targets: ['#subject'] },
    ]);
    expect(() => assertNoAxeViolations(report)).not.toThrow();
  });
});
