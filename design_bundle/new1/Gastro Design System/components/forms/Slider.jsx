import React from 'react';

/**
 * Slider — draggable control for selecting a value within a range
 * (e.g. price ceiling, max delivery distance). Single thumb.
 */
export function Slider({
  value = 50,
  min = 0,
  max = 100,
  step = 1,
  onChange = () => {},
  disabled = false,
  formatValue = null,   // (v) => string
  showValue = true,
  id,
}) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div style={{ width: '100%', opacity: disabled ? 'var(--state-disabled-opacity)' : 1 }}>
      {showValue && (
        <div style={{
          marginBottom: 'var(--space-sm)', fontFamily: 'var(--font-family-base)',
          fontSize: 'var(--font-size-body)', fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-text-primary)', fontVariantNumeric: 'tabular-nums',
        }}>{formatValue ? formatValue(value) : value}</div>
      )}
      <input
        id={id} type="range" min={min} max={max} step={step} value={value} disabled={disabled}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          width: '100%', height: 24, WebkitAppearance: 'none', appearance: 'none',
          background: 'transparent', cursor: disabled ? 'not-allowed' : 'pointer',
          '--pct': `${pct}%`,
        }}
      />
      <style>{`
        input[type=range]{--track:6px}
        input[type=range]::-webkit-slider-runnable-track{height:var(--track);border-radius:var(--radius-full);
          background:linear-gradient(to right,var(--color-brand-primary) var(--pct),var(--color-bg-surface-sunken) var(--pct));}
        input[type=range]::-moz-range-track{height:var(--track);border-radius:var(--radius-full);background:var(--color-bg-surface-sunken);}
        input[type=range]::-moz-range-progress{height:var(--track);border-radius:var(--radius-full);background:var(--color-brand-primary);}
        input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:22px;height:22px;margin-top:-8px;
          border-radius:50%;background:var(--color-bg-main);border:2px solid var(--color-brand-primary);box-shadow:var(--elevation-card);}
        input[type=range]::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:var(--color-bg-main);
          border:2px solid var(--color-brand-primary);box-shadow:var(--elevation-card);}
      `}</style>
    </div>
  );
}
