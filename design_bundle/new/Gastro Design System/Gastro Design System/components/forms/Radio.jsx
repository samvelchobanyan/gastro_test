import React from 'react';

/**
 * Radio — single choice among a small mutually-exclusive set.
 * Use RadioGroup to manage selection across options.
 */
export function Radio({
  checked = false,
  onChange = () => {},
  label = null,
  value,
  name,
  disabled = false,
  id,
}) {
  const [pressed, setPressed] = React.useState(false);

  const outer = {
    boxSizing: 'border-box', flex: '0 0 auto', width: 22, height: 22, borderRadius: '50%',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    border: `2px solid ${checked ? 'var(--control-on-bg)' : 'var(--control-off-border)'}`,
    background: 'var(--control-off-bg)', transition: 'var(--transition-colors)',
    boxShadow: pressed ? '0 0 0 6px var(--control-glow)' : 'none',
  };
  const dot = {
    boxSizing: 'border-box', flex: '0 0 auto', width: 10, height: 10, borderRadius: '50%',
    background: checked ? 'var(--control-on-bg)' : 'transparent',
    transition: 'transform var(--duration-fast) var(--ease-emphasized)',
    transform: checked ? 'scale(1)' : 'scale(0)',
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
      <input id={id} type="radio" name={name} value={value} checked={checked} disabled={disabled}
        onChange={() => onChange(value)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={outer} aria-hidden="true"><span style={dot} /></span>
      {label && <span style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--color-text-primary)' }}>{label}</span>}
    </label>
  );
}

/**
 * RadioGroup — convenience wrapper managing a single selected value
 * across an array of { label, value } options.
 */
export function RadioGroup({ options = [], value = null, onChange = () => {}, name = 'radio-group' }) {
  return (
    <div role="radiogroup" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
      {options.map((o) => {
        const opt = typeof o === 'string' ? { label: o, value: o } : o;
        return (
          <Radio key={String(opt.value)} name={name} value={opt.value}
            checked={value === opt.value} onChange={onChange} label={opt.label} />
        );
      })}
    </div>
  );
}
