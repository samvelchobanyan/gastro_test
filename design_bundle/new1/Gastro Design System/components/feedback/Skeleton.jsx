import React from 'react';

/**
 * Skeleton — placeholder shapes mimicking content layout while data loads.
 * Compose primitives (text lines, blocks, circles) with a shimmer.
 */
export function Skeleton({ variant = 'text', width = '100%', height = null, radius = null, lines = 3 }) {
  const base = {
    background: 'linear-gradient(90deg, var(--gray-100) 25%, var(--gray-200) 37%, var(--gray-100) 63%)',
    backgroundSize: '400% 100%', animation: 'gastro-shimmer 1.4s ease infinite',
  };
  const kf = <style>{'@keyframes gastro-shimmer{0%{background-position:100% 0}100%{background-position:-100% 0}}'}</style>;

  if (variant === 'text') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', width }}>
        {Array.from({ length: lines }).map((_, i) => (
          <span key={i} style={{ ...base, height: 12, borderRadius: 'var(--radius-xs)', width: i === lines - 1 ? '60%' : '100%' }} />
        ))}
        {kf}
      </div>
    );
  }
  if (variant === 'circle') {
    const d = height || width;
    return <span style={{ ...base, display: 'inline-block', width: d, height: d, borderRadius: '50%' }}>{kf}</span>;
  }
  // block
  return <span style={{ ...base, display: 'block', width, height: height || 96, borderRadius: radius || 'var(--radius-md)' }}>{kf}</span>;
}
