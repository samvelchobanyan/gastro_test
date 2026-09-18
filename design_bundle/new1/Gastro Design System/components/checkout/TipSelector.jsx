import React from 'react';

/**
 * TipSelector — segmented preset percentages + custom amount for tipping
 * the courier/staff. Shows the computed dollar amount per preset.
 */
export function TipSelector({ subtotal = 0, presets = [10, 15, 20], value = 15, onChange = () => {}, allowCustom = true }) {
  const isCustom = !presets.includes(value) && value !== 0;
  return (
    <div style={{ fontFamily: 'var(--font-family-base)' }}>
      <div style={{ display: 'flex', gap: 8 }}>
        {presets.map((p) => {
          const active = value === p;
          return (
            <button key={p} type="button" onClick={() => onChange(p)} style={{
              flex: 1, height: 56, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              border: active ? 'none' : 'var(--border-width-default) solid var(--color-border-default)',
              borderRadius: 'var(--radius-md)', background: active ? 'var(--color-brand-primary)' : 'var(--color-bg-main)',
              color: active ? 'var(--color-text-on-brand)' : 'var(--color-text-primary)', cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent', transition: 'var(--transition-colors)',
            }}>
              <span style={{ fontSize: 'var(--font-size-body-lg)', fontWeight: 'var(--font-weight-bold)' }}>{p}%</span>
              <span style={{ fontSize: 11, opacity: 0.85 }}>${(subtotal * p / 100).toFixed(2)}</span>
            </button>
          );
        })}
        <button type="button" onClick={() => onChange(0)} style={{
          flex: 1, height: 56, border: value === 0 ? 'none' : 'var(--border-width-default) solid var(--color-border-default)',
          borderRadius: 'var(--radius-md)', background: value === 0 ? 'var(--color-brand-primary)' : 'var(--color-bg-main)',
          color: value === 0 ? 'var(--color-text-on-brand)' : 'var(--color-text-primary)', cursor: 'pointer',
          fontSize: 'var(--font-size-body)', fontWeight: 'var(--font-weight-semibold)', WebkitTapHighlightColor: 'transparent',
        }}>No tip</button>
      </div>
      {allowCustom && (
        <button type="button" onClick={() => onChange(isCustom ? value : 25)} style={{
          marginTop: 'var(--space-sm)', border: 'none', background: 'transparent', color: 'var(--color-text-accent)',
          fontSize: 'var(--font-size-body)', fontWeight: 'var(--font-weight-semibold)', cursor: 'pointer', padding: 0,
        }}>Custom amount</button>
      )}
    </div>
  );
}
