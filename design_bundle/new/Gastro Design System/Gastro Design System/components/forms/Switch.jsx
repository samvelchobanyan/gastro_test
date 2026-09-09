import React from 'react';

/**
 * Switch — on/off toggle for settings and binary preferences.
 * Immediate (<100ms) thumb slide. Redundant to color via position.
 */
export function Switch({
  checked = false,
  onChange = () => {},
  label = null,
  disabled = false,
  id,
}) {
  const track = {
    position: 'relative', flex: '0 0 auto', width: 44, height: 26,
    borderRadius: 'var(--radius-full)',
    background: checked ? 'var(--control-on-bg)' : 'var(--color-border-strong)',
    transition: 'background-color var(--duration-fast) var(--ease-standard)',
  };
  const thumb = {
    position: 'absolute', top: 3, left: 3, width: 20, height: 20, borderRadius: '50%',
    background: 'var(--color-bg-main)', boxShadow: 'var(--elevation-card)',
    transform: checked ? 'translateX(18px)' : 'translateX(0)',
    transition: 'transform var(--duration-fast) var(--ease-standard)',
  };
  const row = {
    display: 'inline-flex', alignItems: 'center', gap: 'var(--space-md)',
    cursor: disabled ? 'not-allowed' : 'pointer', minHeight: 'var(--touch-target-min)',
    opacity: disabled ? 'var(--state-disabled-opacity)' : 1,
    fontFamily: 'var(--font-family-base)', WebkitTapHighlightColor: 'transparent',
  };

  return (
    <label style={row} htmlFor={id}>
      <input id={id} type="checkbox" role="switch" checked={checked} disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={track} aria-hidden="true"><span style={thumb} /></span>
      {label && <span style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--color-text-primary)' }}>{label}</span>}
    </label>
  );
}
