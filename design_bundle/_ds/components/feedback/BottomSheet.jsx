import React from 'react';

/**
 * BottomSheet (Modal) — overlay surface sliding up from the bottom for
 * focused tasks or confirmations. Scrim + drag handle; closes on scrim tap.
 * Absolutely positioned — mount inside a position:relative screen frame.
 */
export function BottomSheet({
  open = false,
  onClose = () => {},
  title = null,
  children = null,
  footer = null,
}) {
  return (
    <div aria-hidden={!open} style={{ position: 'absolute', inset: 0, pointerEvents: open ? 'auto' : 'none', zIndex: 50 }}>
      <div onClick={onClose} style={{
        position: 'absolute', inset: 0, background: 'var(--color-bg-scrim)',
        opacity: open ? 1 : 0, transition: 'opacity var(--duration-base) var(--ease-standard)',
      }} />
      <section role="dialog" aria-modal="true" aria-label={title || 'Sheet'} style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        background: 'var(--color-bg-surface)',
        borderTopLeftRadius: 'var(--radius-sheet)', borderTopRightRadius: 'var(--radius-sheet)',
        boxShadow: 'var(--elevation-sheet)', maxHeight: '88%', display: 'flex', flexDirection: 'column',
        transform: open ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform var(--duration-slow) var(--ease-decelerate)',
        fontFamily: 'var(--font-family-base)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 'var(--space-md)' }}>
          <span aria-hidden="true" style={{ width: 36, height: 4, borderRadius: 'var(--radius-full)', background: 'var(--color-border-strong)' }} />
        </div>
        {title && (
          <header style={{
            padding: 'var(--space-md) var(--space-lg)', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <h2 style={{ margin: 0, fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)', fontWeight: 'var(--font-weight-semibold)' }}>{title}</h2>
            <button type="button" onClick={onClose} aria-label="Close" style={{
              width: 40, height: 40, border: 'none', background: 'transparent', cursor: 'pointer',
              color: 'var(--color-text-secondary)', fontSize: 22, borderRadius: 'var(--radius-full)',
            }}><i className="ph ph-x" aria-hidden="true" /></button>
          </header>
        )}
        <div style={{ padding: '0 var(--space-lg) var(--space-lg)', overflowY: 'auto' }}>{children}</div>
        {footer && (
          <footer style={{
            padding: 'var(--space-base) var(--space-lg)',
            paddingBottom: 'calc(var(--space-lg) + env(safe-area-inset-bottom, 0px))',
            borderTop: 'var(--border-width-default) solid var(--color-border-muted)',
          }}>{footer}</footer>
        )}
      </section>
    </div>
  );
}
