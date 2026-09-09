import React from 'react';

/**
 * PromoCodeInput — inline field + apply button for discount codes.
 * Shows an applied state with the discount amount and a remove action.
 */
export function PromoCodeInput({
  value = '',
  onChange = () => {},
  onApply = () => {},
  applied = null,        // { code, amount } or null
  onRemove = () => {},
  error = null,
}) {
  if (applied) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-md)',
        padding: 'var(--space-md)', background: 'var(--color-bg-success)', borderRadius: 'var(--radius-md)',
        fontFamily: 'var(--font-family-base)',
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--color-text-success)' }}>
          <i className="ph-fill ph-check-circle" aria-hidden="true" style={{ fontSize: 20 }} />
          <span style={{ fontSize: 'var(--font-size-body)', fontWeight: 'var(--font-weight-semibold)' }}>{applied.code} applied · −${applied.amount.toFixed(2)}</span>
        </span>
        <button type="button" onClick={onRemove} style={{ border: 'none', background: 'transparent', color: 'var(--color-text-success)', cursor: 'pointer', fontSize: 18 }} aria-label="Remove promo code">
          <i className="ph ph-x" aria-hidden="true" />
        </button>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'var(--font-family-base)' }}>
      <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
        <input
          value={value} onChange={(e) => onChange(e.target.value.toUpperCase())} placeholder="Promo code"
          style={{
            flex: 1, height: 48, padding: '0 var(--input-padding-x)', boxSizing: 'border-box',
            border: `var(--border-width-default) solid ${error ? 'var(--input-border-error)' : 'var(--input-border)'}`,
            borderRadius: 'var(--radius-input)', background: 'var(--input-bg)', color: 'var(--input-text)',
            fontFamily: 'var(--font-family-base)', fontSize: 'var(--font-size-body)', outline: 'none', textTransform: 'uppercase',
          }}
        />
        <button type="button" onClick={() => onApply(value)} disabled={!value} style={{
          height: 48, padding: '0 var(--space-lg)', borderRadius: 'var(--radius-md)',
          background: 'var(--button-secondary-bg)', border: 'var(--border-width-default) solid var(--button-secondary-border)',
          color: 'var(--button-secondary-text)', fontFamily: 'var(--font-family-base)', fontSize: 'var(--font-size-body)',
          fontWeight: 'var(--font-weight-semibold)', cursor: value ? 'pointer' : 'not-allowed',
          opacity: value ? 1 : 'var(--state-disabled-opacity)',
        }}>Apply</button>
      </div>
      {error && (
        <div style={{ marginTop: 'var(--space-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', fontSize: 'var(--font-size-caption)', color: 'var(--color-text-error)' }}>
          <i className="ph ph-warning-circle" aria-hidden="true" style={{ fontSize: 14 }} />{error}
        </div>
      )}
    </div>
  );
}
