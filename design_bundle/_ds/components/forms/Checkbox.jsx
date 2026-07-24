import React from 'react';

/**
 * Checkbox — binary selection control for multi-select lists / agreements.
 * Redundant to color: uses a check glyph, not hue alone.
 */
export function Checkbox({
  checked = false,
  indeterminate = false,
  onChange = () => {},
  label = null,
  disabled = false,
  id,
}) {
  const [pressed, setPressed] = React.useState(false);
  const on = checked || indeterminate;

  const box = {
    flex: '0 0 auto', width: 22, height: 22, display: 'inline-flex',
    alignItems: 'center', justifyContent: 'center',
    background: on ? 'var(--control-on-bg)' : 'var(--control-off-bg)',
    border: `2px solid ${on ? 'var(--control-on-bg)' : 'var(--control-off-border)'}`,
    borderRadius: 'var(--radius-checkbox)', color: 'var(--control-on-mark)',
    transition: 'var(--transition-colors)', fontSize: 15,
    boxShadow: pressed ? '0 0 0 6px var(--control-glow)' : 'none',
  };
  const row = {
    display: 'inline-flex', alignItems: 'center', gap: 'var(--space-md)',
    cursor: disabled ? 'not-allowed' : 'pointer', minHeight: 'var(--touch-target-min)',
    opacity: disabled ? 'var(--state-disabled-opacity)' : 1,
    fontFamily: 'var(--font-family-base)', WebkitTapHighlightColor: 'transparent',
  };
  const clear = () => setPressed(false);

  return (
    <label style={row} htmlFor={id}
      onPointerDown={() => !disabled && setPressed(true)} onPointerUp={clear} onPointerLeave={clear}>
      <input id={id} type="checkbox" checked={checked} disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
        aria-checked={indeterminate ? 'mixed' : checked} />
      <span style={box} aria-hidden="true">
        {indeterminate ? <i className="ph-bold ph-minus" /> : checked ? <i className="ph-bold ph-check" /> : null}
      </span>
      {label && <span style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--color-text-primary)' }}>{label}</span>}
    </label>
  );
}
