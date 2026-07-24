import React from 'react';

/**
 * SegmentedControl (Tab Bar) — horizontal set of tabs for switching views
 * within a single screen. Sliding accent indicator. Also used for
 * Delivery/Pickup style two-option toggles.
 */
export function SegmentedControl({
  options = [],        // [{ label, value, icon? }] or strings
  value = null,
  onChange = () => {},
  fullWidth = true,
}) {
  const norm = options.map((o) => (typeof o === 'string' ? { label: o, value: o } : o));
  const idx = Math.max(0, norm.findIndex((o) => o.value === value));

  const wrap = {
    position: 'relative', display: 'inline-flex', width: fullWidth ? '100%' : 'auto',
    padding: 4, boxSizing: 'border-box', background: 'var(--color-bg-surface-sunken)',
    borderRadius: 'var(--radius-full)', fontFamily: 'var(--font-family-base)',
  };
  const indicator = {
    position: 'absolute', top: 4, bottom: 4, left: 4,
    width: `calc((100% - 8px) / ${norm.length})`,
    transform: `translateX(${idx * 100}%)`,
    background: 'var(--color-bg-main)', borderRadius: 'var(--radius-full)',
    boxShadow: 'var(--elevation-card)',
    transition: 'transform var(--duration-base) var(--ease-standard)',
  };

  return (
    <div style={wrap} role="tablist">
      <span style={indicator} aria-hidden="true" />
      {norm.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={String(o.value)} type="button" role="tab" aria-selected={active}
            onClick={() => onChange(o.value)}
            style={{
              position: 'relative', zIndex: 1, flex: fullWidth ? 1 : '0 0 auto',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              minHeight: 40, padding: '0 var(--space-base)', border: 'none', background: 'transparent',
              color: active ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)',
              fontSize: 'var(--font-size-body)', fontWeight: active ? 'var(--font-weight-semibold)' : 'var(--font-weight-medium)',
              cursor: 'pointer', WebkitTapHighlightColor: 'transparent', whiteSpace: 'nowrap',
              transition: 'color var(--duration-base) var(--ease-standard)',
            }}
          >
            {o.icon && <i className={`ph ph-${o.icon}`} aria-hidden="true" style={{ fontSize: 18 }} />}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
