import React from 'react';

/**
 * RatingStars — interactive or display-only star rating. Supports half
 * stars in display mode and an optional count label.
 */
export function RatingStars({
  value = 0,
  max = 5,
  size = 20,
  readOnly = true,
  onChange = () => {},
  count = null,        // e.g. 128 -> "(128)"
}) {
  const [hover, setHover] = React.useState(null);
  const shown = hover != null ? hover : value;

  const star = (i) => {
    const full = shown >= i + 1;
    const half = !full && shown >= i + 0.5;
    const cls = full ? 'ph-fill ph-star' : half ? 'ph-fill ph-star-half' : 'ph ph-star';
    return (
      <i key={i} className={cls} aria-hidden="true"
        style={{ fontSize: size, color: full || half ? 'var(--amber-500)' : 'var(--color-border-strong)' }} />
    );
  };

  if (readOnly) {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-family-base)' }}
        role="img" aria-label={`${value} out of ${max} stars`}>
        <span style={{ display: 'inline-flex', gap: 2 }}>{Array.from({ length: max }).map((_, i) => star(i))}</span>
        {count != null && <span style={{ fontSize: 'var(--font-size-body)', color: 'var(--color-text-tertiary)' }}>({count})</span>}
      </span>
    );
  }

  return (
    <span style={{ display: 'inline-flex', gap: 4 }} role="radiogroup" aria-label="Rating">
      {Array.from({ length: max }).map((_, i) => (
        <button
          key={i} type="button" aria-label={`${i + 1} star`}
          onMouseEnter={() => setHover(i + 1)} onMouseLeave={() => setHover(null)}
          onClick={() => onChange(i + 1)}
          style={{ border: 'none', background: 'transparent', padding: 2, cursor: 'pointer', lineHeight: 0, WebkitTapHighlightColor: 'transparent' }}
        >{star(i)}</button>
      ))}
    </span>
  );
}
