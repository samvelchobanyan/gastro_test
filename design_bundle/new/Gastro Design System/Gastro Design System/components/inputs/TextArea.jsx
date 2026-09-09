import React from 'react';

/**
 * TextArea — multi-line input for longer free text (special instructions,
 * reviews). Auto-min height, optional character counter.
 */
export function TextArea({
  value = '',
  onChange = () => {},
  label = null,
  placeholder = '',
  helperText = null,
  error = false,
  disabled = false,
  rows = 4,
  maxLength = null,
  id,
}) {
  const [focused, setFocused] = React.useState(false);
  const borderColor = error
    ? 'var(--input-border-error)'
    : focused ? 'var(--input-border-focus)' : 'var(--input-border)';
  const borderW = focused || error ? 'var(--border-width-focus)' : 'var(--border-width-default)';

  const area = {
    width: '100%', boxSizing: 'border-box', resize: 'vertical',
    padding: 'var(--space-md) var(--input-padding-x)',
    background: 'var(--input-bg)', color: 'var(--input-text)',
    border: `${borderW} solid ${borderColor}`, borderRadius: 'var(--radius-input)',
    fontFamily: 'var(--font-family-base)', fontSize: 'var(--font-size-body)',
    lineHeight: 'var(--line-height-body)', outline: 'none',
    opacity: disabled ? 'var(--state-disabled-opacity)' : 1,
    transition: 'var(--transition-colors)',
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
      <textarea
        id={id} rows={rows} value={value} placeholder={placeholder}
        disabled={disabled} maxLength={maxLength || undefined} style={area}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        aria-invalid={error || undefined}
      />
      <div style={{
        marginTop: 'var(--space-sm)', display: 'flex', justifyContent: 'space-between',
        gap: 'var(--space-sm)', fontFamily: 'var(--font-family-base)',
        fontSize: 'var(--font-size-caption)', lineHeight: 'var(--line-height-caption)',
        color: error ? 'var(--color-text-error)' : 'var(--input-helper)',
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
          {error && <i className="ph ph-warning-circle" aria-hidden="true" style={{ fontSize: 14 }} />}
          {helperText}
        </span>
        {maxLength && <span style={{ fontVariantNumeric: 'tabular-nums' }}>{value.length}/{maxLength}</span>}
      </div>
    </div>
  );
}
