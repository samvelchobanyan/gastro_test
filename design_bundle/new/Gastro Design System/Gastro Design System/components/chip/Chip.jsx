import React from 'react';

/**
 * Chip — interactive tag: a selectable toggle (filter chips) and/or
 * removable (with an x). For a static, non-interactive label, use Tag.
 */
export function Chip({
  label = '',
  icon = null,          // phosphor name
  selected = false,
  onClick = null,
  onRemove = null,
  size = 'md',          // 'sm' 24 | 'md' 32
}) {
  const h = size === 'sm' ? 24 : 32;
  const t = selected
    ? { bg: 'var(--chip-bg-selected)', color: 'var(--chip-text-selected)' }
    : { bg: 'var(--chip-bg)', color: 'var(--chip-text)' };
  const interactive = Boolean(onClick);

  const style = {
    display: 'inline-flex', alignItems: 'center', gap: 6, height: h,
    padding: `0 ${size === 'sm' ? 10 : 12}px`, boxSizing: 'border-box',
    background: t.bg, color: t.color, border: 'none', borderRadius: 'var(--radius-full)',
    fontFamily: 'var(--font-family-base)', fontSize: size === 'sm' ? 12 : 'var(--font-size-body)',
    fontWeight: 'var(--font-weight-semibold)', cursor: interactive ? 'pointer' : 'default',
    WebkitTapHighlightColor: 'transparent', whiteSpace: 'nowrap',
    transition: 'var(--transition-colors)',
  };
  const Tag = interactive ? 'button' : 'span';

  return (
    <Tag type={interactive ? 'button' : undefined} style={style} onClick={onClick} aria-pressed={interactive ? selected : undefined}>
      {selected && <i className="ph-bold ph-check" aria-hidden="true" style={{ fontSize: 14 }} />}
      {!selected && icon && <i className={`ph ph-${icon}`} aria-hidden="true" style={{ fontSize: 16 }} />}
      {label}
      {onRemove && (
        <span
          role="button" aria-label={`Remove ${label}`} onClick={(e) => { e.stopPropagation(); onRemove(); }}
          style={{ display: 'inline-flex', marginRight: -2, fontSize: 14, opacity: 0.8 }}
        ><i className="ph ph-x" aria-hidden="true" /></span>
      )}
    </Tag>
  );
}
