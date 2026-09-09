import React from 'react';

/**
 * Spinner — circular indeterminate loading indicator. Sizes in px; inherits
 * accent by default, or `onDark` for placement on dark surfaces / buttons.
 */
export function Spinner({ size = 24, thickness = 2.5, onDark = false, label = 'Loading' }) {
  const track = onDark ? 'var(--alpha-white-24)' : 'var(--color-border-default)';
  const head = onDark ? '#fff' : 'var(--color-brand-primary)';
  return (
    <span role="status" aria-label={label} style={{ display: 'inline-flex', width: size, height: size }}>
      <span style={{
        width: size, height: size, borderRadius: '50%',
        border: `${thickness}px solid ${track}`, borderTopColor: head,
        animation: 'gastro-spin .7s linear infinite',
      }} />
      <style>{'@keyframes gastro-spin{to{transform:rotate(360deg)}}'}</style>
    </span>
  );
}
