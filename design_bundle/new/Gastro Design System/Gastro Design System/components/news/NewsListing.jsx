import React from 'react';

/**
 * NewsListing — image + title + publish date item for restaurant news,
 * announcements or blog posts. Horizontal layout: thumbnail beside the
 * text, for list feeds.
 */
export function NewsListing({
  image = null,
  title = '',
  publishedAt = '',
  onClick = null,
}) {
  const interactive = Boolean(onClick);
  const Tag = interactive ? 'button' : 'div';

  const thumb = {
    flex: '0 0 auto', width: 96, height: 96,
    borderRadius: 'var(--radius-md)', overflow: 'hidden',
    background: image ? `center/cover no-repeat url("${image}")` : 'var(--color-bg-surface-sunken)',
  };

  return (
    <Tag
      type={interactive ? 'button' : undefined} onClick={onClick}
      style={{
        display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 'var(--space-md)',
        width: '100%', boxSizing: 'border-box', textAlign: 'left',
        background: 'transparent', border: 'none', padding: 0, font: 'inherit',
        cursor: interactive ? 'pointer' : 'default', fontFamily: 'var(--font-family-base)',
      }}
    >
      <div style={thumb} />
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{
          fontSize: 'var(--font-size-body)', lineHeight: 'var(--line-height-body)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-primary)',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>{title}</span>
        <span style={{ fontSize: 'var(--font-size-caption)', lineHeight: 'var(--line-height-caption)', color: 'var(--color-text-tertiary)' }}>{publishedAt}</span>
      </div>
    </Tag>
  );
}
