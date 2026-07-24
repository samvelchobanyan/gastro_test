import React from 'react';

/**
 * FormGroup — layout container grouping related fields with a shared
 * label/legend and consistent vertical spacing.
 */
export function FormGroup({ legend = null, helperText = null, children }) {
  return (
    <fieldset style={{
      border: 'none', margin: 0, padding: 0, minInlineSize: 'auto',
      fontFamily: 'var(--font-family-base)',
    }}>
      {legend && (
        <legend style={{
          padding: 0, marginBottom: 'var(--space-md)',
          fontSize: 'var(--font-size-h3)', lineHeight: 'var(--line-height-h3)',
          fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-primary)',
        }}>{legend}</legend>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-base)' }}>
        {children}
      </div>
      {helperText && (
        <div style={{
          marginTop: 'var(--space-sm)', fontSize: 'var(--font-size-caption)',
          lineHeight: 'var(--line-height-caption)', color: 'var(--color-text-tertiary)',
        }}>{helperText}</div>
      )}
    </fieldset>
  );
}
