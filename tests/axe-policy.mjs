const targets = (nodes = []) => nodes.map((node) => node.target.join(' '));

const requireFindingArray = (results, name) => {
  if (!Array.isArray(results?.[name])) {
    throw new Error(`Invalid Axe results: ${name} must be an array`);
  }
  return results[name];
};

const findings = (items = []) =>
  items.map((item) => ({
    id: item.id,
    impact: item.impact ?? 'unknown',
    targets: targets(item.nodes),
  }));

export function createAxeReport(results, { route, project }) {
  const violations = requireFindingArray(results, 'violations');
  const incomplete = requireFindingArray(results, 'incomplete');

  return {
    route,
    project,
    violations: findings(violations),
    incomplete: findings(incomplete),
  };
}

export function assertNoAxeViolations(report) {
  if (report.violations.length === 0) return;

  const details = report.violations
    .map(
      (item) =>
        `${item.id} (${item.impact}): ${item.targets.length > 0 ? item.targets.join(', ') : 'target unavailable'}`,
    )
    .join('\n');

  throw new Error(
    `Axe found ${report.violations.length} accessibility violation(s) in ${report.project} ${report.route}:\n${details}`,
  );
}
