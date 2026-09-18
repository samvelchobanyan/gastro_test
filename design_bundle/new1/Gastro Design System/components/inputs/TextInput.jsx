import React from 'react';

/**
 * TextInput — single-line field with label, placeholder, helper/error text,
 * optional leading/trailing icon. Fixed-label style (48px) by default;
 * `floating` grows to 56px. Neutral/base; brand via tokens.
 */
export function TextInput({
  value = '',
  onChange = () => {},
  label = null,
  placeholder = '',
  helperText = null,
  error = false,
  disabled = false,
  size = 'fixed',      // 'fixed' 48 | 'floating' 56
  type = 'text',
  iconLeft = null,
  iconRight = null,
  id,
}) {
  const [focused, setFocused] = React.useState(false);
  const height = size === 'floating' ? 56 : 48;

  const borderColor = error
    ? 'var(--input-border-error)'
    : focused ? 'var(--input-border-focus)' : 'var(--input-border)';
  const borderW = focused || error ? 'var(--border-width-focus)' : 'var(--border-width-default)';

  const wrap = {
    display: 'flex', alignItems: 'center', gap: 'var(--space-sm)',
    height, padding: '0 var(--input-padding-x)', boxSizing: 'border-box',
    background: 'var(--input-bg)',
    border: `${borderW} solid ${borderColor}`,
    borderRadius: 'var(--radius-input)',
    opacity: disabled ? 'var(--state-disabled-opacity)' : 1,
    transition: 'var(--transition-colors)',
  };
  const input = {
    flex: 1, minWidth: 0, height: '100%', border: 'none', outline: 'none',
    background: 'transparent', color: 'var(--input-text)',
    fontFamily: 'var(--font-family-base)', fontSize: 'var(--font-size-body)',
    fontWeight: 'var(--font-weight-regular)',
  };

  return (
    <div style={{ width: '100%' }}>
      {label && (
        <label htmlFor={id} style={{
          display: 'block', marginBottom: 'var(--space-sm)',
          fontFamily: 'var(--font-family-base)', fontSize: 'var(--font-size-body)',
          fontWeight: 'var(--font-weight-medium)', color: 'var(--input-label)',
        }}>{label}</label>
      )}
      <div style={wrap}>
        {iconLeft && <i className={`ph ph-${iconLeft}`} aria-hidden="true" style={{ fontSize: 'var(--icon-sm)', color: 'var(--color-text-tertiary)' }} />}
        <input
          id={id} type={type} value={value} placeholder={placeholder}
          disabled={disabled} style={input}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          aria-invalid={error || undefined}
        />
        {iconRight && <i className={`ph ph-${iconRight}`} aria-hidden="true" style={{ fontSize: 'var(--icon-sm)', color: 'var(--color-text-tertiary)' }} />}
      </div>
      {helperText && (
        <div style={{
          marginTop: 'var(--space-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-xs)',
          fontFamily: 'var(--font-family-base)', fontSize: 'var(--font-size-caption)',
          lineHeight: 'var(--line-height-caption)',
          color: error ? 'var(--color-text-error)' : 'var(--input-helper)',
        }}>
          {error && <i className="ph ph-warning-circle" aria-hidden="true" style={{ fontSize: 14 }} />}
          {helperText}
        </div>
      )}
    </div>
  );
}
