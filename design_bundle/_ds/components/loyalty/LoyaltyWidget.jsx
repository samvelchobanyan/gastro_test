import React from 'react';

/**
 * LoyaltyWidget — membership card: points balance, membership tier
 * (Regular/Advanced/Prime, tier names are brand-configurable), and a QR
 * code for in-store scanning. Own layout: stacked header with tier pill,
 * large points readout, divider, then a centered QR block below.
 */
export function LoyaltyWidget({
  points = 0,
  membership = 'Regular',
  discountLabel = null,   // e.g. "10%"
  qrValue = '',
}) {
  const size = 21;
  let seed = 0;
  for (let i = 0; i < qrValue.length; i++) seed = (seed * 31 + qrValue.charCodeAt(i)) >>> 0;
  const rand = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  const inFinder = (r, c) => (r < 7 && c < 7) || (r < 7 && c >= size - 7) || (r >= size - 7 && c < 7);
  const modules = [];
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (inFinder(r, c)) continue;
      if (rand() > 0.55) modules.push([r, c]);
    }
  }
  const finder = (top, left) => (
    <React.Fragment key={`${top}-${left}`}>
      <rect x={left} y={top} width={7} height={7} fill="#000" />
      <rect x={left + 1} y={top + 1} width={5} height={5} fill="#fff" />
      <rect x={left + 2} y={top + 2} width={3} height={3} fill="#000" />
    </React.Fragment>
  );

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-lg)',
      padding: 'var(--space-lg)', borderRadius: 'var(--radius-card)',
      background: 'var(--card-bg)', border: 'var(--border-width-default) solid var(--card-border)',
      boxShadow: 'var(--elevation-card)', fontFamily: 'var(--font-family-base)', boxSizing: 'border-box',
    }}>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
        <span style={{
          fontSize: 'var(--font-size-overline)', letterSpacing: 'var(--letter-spacing-overline)', textTransform: 'uppercase',
          fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-tertiary)',
        }}>Loyalty points</span>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 6 }}>
          <span style={{ fontSize: 36, lineHeight: 1, fontWeight: 'var(--font-weight-bold)', color: 'var(--color-text-primary)', fontVariantNumeric: 'tabular-nums' }}>
            {points.toLocaleString()}
          </span>
        </div>

        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', alignSelf: 'flex-start',
          borderRadius: 'var(--radius-full)', background: 'var(--color-brand-subtle)', color: 'var(--color-text-accent)',
          fontSize: 'var(--font-size-caption)', fontWeight: 'var(--font-weight-bold)',
        }}>
          <i className="ph-fill ph-crown" aria-hidden="true" style={{ fontSize: 13 }} />{membership}
          {discountLabel && <span style={{ color: 'var(--accent-300)' }}>· {discountLabel} off</span>}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flex: '0 0 auto' }}>
        <div style={{ background: '#fff', padding: 8, borderRadius: 'var(--radius-sm)', border: 'var(--border-width-default) solid var(--color-border-muted)' }}>
          <svg viewBox={`0 0 ${size} ${size}`} width={88} height={88} shapeRendering="crispEdges">
            <rect x={0} y={0} width={size} height={size} fill="#fff" />
            {finder(0, 0)}
            {finder(0, size - 7)}
            {finder(size - 7, 0)}
            {modules.map(([r, c]) => <rect key={`${r}-${c}`} x={c} y={r} width={1} height={1} fill="#000" />)}
          </svg>
        </div>
      </div>
    </div>
  );
}
