import React from 'react';

/**
 * Dialog / Alert — centered overlay for critical confirmations, blocking
 * background interaction. Optional destructive tone. Mount inside a
 * position:relative screen frame.
 */
export function Dialog({
  open = false,
  onClose = () => {},
  title = '',
  description = null,
  icon = null,             // phosphor name
  tone = 'default',        // 'default' | 'destructive'
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm = () => {},
  children = null,
}) {
  const [pressed, setPressed] = React.useState(null);
  if (!open) return null;
  const danger = tone === 'destructive';

  const btn = (primary) => ({
    flex: 1, minHeight: 48, border: primary ? 'none' : 'var(--border-width-default) solid var(--color-border-default)',
    borderRadius: 'var(--radius-md)',
    background: primary
      ? (pressed === 'c' ? (danger ? 'var(--red-600)' : 'var(--button-primary-bg-active)') : (danger ? 'var(--color-status-error)' : 'var(--button-primary-bg)'))
      : (pressed === 'x' ? 'var(--color-bg-surface-sunken)' : 'transparent'),
    color: primary ? 'var(--color-text-on-brand)' : 'var(--color-text-primary)',
    fontFamily: 'var(--font-family-base)', fontSize: 'var(--font-size-body-lg)', fontWeight: 'var(--font-weight-semibold)',
    cursor: 'pointer', transition: 'var(--transition-press)', WebkitTapHighlightColor: 'transparent',
  });

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-lg)' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'var(--color-bg-scrim)' }} />
      <div role="alertdialog" aria-modal="true" aria-label={title} style={{
        position: 'relative', width: '100%', maxWidth: 320, background: 'var(--color-bg-surface)',
        borderRadius: 'var(--radius-dialog)', boxShadow: 'var(--elevation-overlay)',
        padding: 'var(--space-lg)', boxSizing: 'border-box', textAlign: 'center', fontFamily: 'var(--font-family-base)',
      }}>
        {icon && (
          <div style={{
            width: 48, height: 48, margin: '0 auto var(--space-md)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: 'var(--radius-full)', fontSize: 26,
            background: danger ? 'var(--color-bg-error)' : 'var(--color-brand-subtle)',
            color: danger ? 'var(--color-status-error)' : 'var(--color-text-accent)',
          }}><i className={`ph ph-${icon}`} aria-hidden="true" /></div>
        )}
        <h2 style={{ margin: 0, fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-primary)' }}>{title}</h2>
        {description && <p style={{ margin: 'var(--space-sm) 0 0', fontSize: 'var(--font-size-body-lg)', lineHeight: 'var(--line-height-body-lg)', color: 'var(--color-text-secondary)' }}>{description}</p>}
        {children}
        <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-lg)' }}>
          <button type="button" style={btn(false)} onClick={onClose}
            onPointerDown={() => setPressed('x')} onPointerUp={() => setPressed(null)} onPointerLeave={() => setPressed(null)}>{cancelLabel}</button>
          <button type="button" style={btn(true)} onClick={onConfirm}
            onPointerDown={() => setPressed('c')} onPointerUp={() => setPressed(null)} onPointerLeave={() => setPressed(null)}>{confirmLabel}</button>
        </div>
      </div>
    </div>
  );
}
