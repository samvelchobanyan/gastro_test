import React from 'react';

/**
 * ProgressBar — horizontal linear progress. Determinate (value 0–100) or
 * indeterminate (animated sweep). Optional label + percentage.
 */
export function ProgressBar({ value = 0, indeterminate = false, label = null, showValue = false, tone = 'brand' }) {
  const colors = { brand: 'var(--color-brand-primary)', success: 'var(--color-status-success)' };
  const fill = colors[tone] || colors.brand;
  const pct = Math.max(0, Math.min(100, value));

  return (
    <div style={{ width: '100%', fontFamily: 'var(--font-family-base)' }}>
      {(label || showValue) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-sm)', fontSize: 'var(--font-size-caption)', color: 'var(--color-text-secondary)' }}>
          <span>{label}</span>{showValue && !indeterminate && <span style={{ fontVariantNumeric: 'tabular-nums' }}>{pct}%</span>}
        </div>
      )}
      <div role="progressbar" aria-valuenow={indeterminate ? undefined : pct} aria-valuemin={0} aria-valuemax={100}
        style={{ position: 'relative', height: 6, borderRadius: 'var(--radius-full)', background: 'var(--color-bg-surface-sunken)', overflow: 'hidden' }}>
        {indeterminate ? (
          <span style={{ position: 'absolute', top: 0, bottom: 0, width: '40%', borderRadius: 'var(--radius-full)', background: fill, animation: 'gastro-indet 1.3s var(--ease-standard) infinite' }} />
        ) : (
          <span style={{ display: 'block', height: '100%', width: `${pct}%`, background: fill, borderRadius: 'var(--radius-full)', transition: 'width var(--duration-base) var(--ease-standard)' }} />
        )}
      </div>
      <style>{'@keyframes gastro-indet{0%{left:-40%}100%{left:100%}}'}</style>
    </div>
  );
}
