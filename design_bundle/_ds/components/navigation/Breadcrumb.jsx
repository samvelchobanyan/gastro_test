import React from 'react';

/**
 * Breadcrumb — current location within a multi-step flow (e.g. checkout).
 * Steps show completed / current / upcoming states with a connector.
 */
export function Breadcrumb({
  steps = [],          // [{ label }]
  current = 0,
  onStepClick = null,  // (index) => void — only completed steps clickable
}) {
  return (
    <nav aria-label="Progress" style={{ fontFamily: 'var(--font-family-base)' }}>
      <ol style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', listStyle: 'none', margin: 0, padding: 0 }}>
        {steps.map((s, i) => {
          const done = i < current;
          const active = i === current;
          const clickable = done && onStepClick;
          return (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <button
                type="button" disabled={!clickable}
                onClick={() => clickable && onStepClick(i)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6, border: 'none',
                  background: 'transparent', padding: 0, cursor: clickable ? 'pointer' : 'default',
                }}
                aria-current={active ? 'step' : undefined}
              >
                <span style={{
                  width: 22, height: 22, flex: '0 0 auto', display: 'inline-flex', alignItems: 'center',
                  justifyContent: 'center', borderRadius: '50%', fontSize: 12, fontWeight: 'var(--font-weight-bold)',
                  background: done ? 'var(--color-brand-primary)' : active ? 'var(--color-brand-subtle)' : 'var(--color-bg-surface-sunken)',
                  color: done ? 'var(--color-text-on-brand)' : active ? 'var(--color-text-accent)' : 'var(--color-text-tertiary)',
                  border: active ? '2px solid var(--color-brand-primary)' : 'none', boxSizing: 'border-box',
                }}>
                  {done ? <i className="ph-bold ph-check" aria-hidden="true" /> : i + 1}
                </span>
                <span style={{
                  fontSize: 'var(--font-size-body)',
                  fontWeight: active ? 'var(--font-weight-semibold)' : 'var(--font-weight-medium)',
                  color: active ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)',
                }}>{s.label}</span>
              </button>
              {i < steps.length - 1 && (
                <i className="ph ph-caret-right" aria-hidden="true" style={{ fontSize: 14, color: 'var(--color-text-tertiary)' }} />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
