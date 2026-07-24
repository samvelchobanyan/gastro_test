import React from 'react';

/**
 * NewsListing — image + title + publish date item for restaurant news,
 * announcements or blog posts. `orientation="vertical"` stacks image on
 * top (grid feeds); `orientation="horizontal"` places a thumbnail beside
 * the text (list feeds).
 */
export function NewsListing({
  image = null,
  title = '',
  publishedAt = '',
  orientation = 'vertical',
  onClick = null,
}) {
  const interactive = Boolean(onClick);
  const Tag = interactive ? 'button' : 'div';
  const isHorizontal = orientation === 'horizontal';

  const thumb = {
    flex: isHorizontal ? '0 0 auto' : '0 0 auto',
    width: isHorizontal ? 96 : '100%',
    height: isHorizontal ? 96 : 140,
    borderRadius: 'var(--radius-md)', overflow: 'hidden',
    background: image ? `center/cover no-repeat url("${image}")` : 'var(--color-bg-surface-sunken)',
  };

  return (
    <Tag
      type={interactive ? 'button' : undefined} onClick={onClick}
      style={{
        display: 'flex', flexDirection: isHorizontal ? 'row' : 'column',
        alignItems: isHorizontal ? 'center' : 'stretch', gap: 'var(--space-md)',
        width: isHorizontal ? '100%' : 220, boxSizing: 'border-box', textAlign: 'left',
        background: 'transparent', border: 'none', padding: 0, font: 'inherit',
        cursor: interactive ? 'pointer' : 'default', fontFamily: 'var(--font-family-base)',
      }}
    >
      <div style={thumb} />
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{
          fontSize: 'var(--font-size-body)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-primary)',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>{title}</span>
        <span style={{ fontSize: 'var(--font-size-caption)', color: 'var(--color-text-tertiary)' }}>{publishedAt}</span>
      </div>
    </Tag>
  );
}
