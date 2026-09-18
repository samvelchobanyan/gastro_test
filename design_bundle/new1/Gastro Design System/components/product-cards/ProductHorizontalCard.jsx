import React from 'react';

/**
 * ProductHorizontalCard — horizontal product row mirroring
 * ProductVerticalCard: a small square photo on the left with the product
 * name (Body Small Semibold) and price (Body Extra Small) stacked to its right.
 * Image is half the vertical card's width. Swappable placeholder.
 */
export function ProductHorizontalCard({
  name = 'Product name',
  price = '',
  imageUrl = null,
  imageSize = 80,
  onClick = () => {},
}) {
  return (
    <button type="button" onClick={onClick} style={{
      boxSizing: 'border-box', width: '100%', padding: 0, border: 'none', background: 'transparent',
      cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-family-base)',
      display: 'flex', alignItems: 'center', gap: 'var(--space-md)', WebkitTapHighlightColor: 'transparent',
    }}>
      {imageUrl ? (
        <img src={imageUrl} alt="" style={{ width: imageSize, height: imageSize, flex: '0 0 auto', objectFit: 'cover', borderRadius: 'var(--radius-card)', display: 'block' }} />
      ) : (
        <div aria-hidden="true" style={{
          width: imageSize, height: imageSize, flex: '0 0 auto', borderRadius: 'var(--radius-card)',
          background: 'repeating-linear-gradient(45deg, var(--gray-100), var(--gray-100) 8px, var(--gray-200) 8px, var(--gray-200) 16px)',
        }} />
      )}
      <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-xxs)' }}>
        <span style={{ fontSize: 'var(--font-size-body-sm)', lineHeight: 'var(--line-height-body-sm)', fontWeight: 'var(--font-weight-semibold)', fontFamily: 'var(--font-family-base)', color: 'var(--color-text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</span>
        <span style={{ fontSize: 'var(--font-size-body-xs)', lineHeight: 'var(--line-height-body-xs)', fontFamily: 'var(--font-family-base)', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{price}</span>
      </div>
    </button>
  );
}
