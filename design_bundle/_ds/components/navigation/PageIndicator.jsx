import React from 'react';

/**
 * PageIndicator (Pagination) — dots showing position within a carousel or
 * multi-step flow. Active dot elongates to a pill.
 */
export function PageIndicator({ count = 3, activeIndex = 0, onDotClick = null }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }} role="tablist" aria-label="Pages">
      {Array.from({ length: count }).map((_, i) => {
        const active = i === activeIndex;
        const clickable = Boolean(onDotClick);
        return (
          <button
            key={i} type="button" role="tab" aria-selected={active}
            aria-label={`Page ${i + 1}`} disabled={!clickable}
            onClick={() => clickable && onDotClick(i)}
            style={{
              width: active ? 20 : 8, height: 8, padding: 0, border: 'none',
              borderRadius: 'var(--radius-full)',
              background: active ? 'var(--color-brand-primary)' : 'var(--color-border-strong)',
              cursor: clickable ? 'pointer' : 'default',
              transition: 'width var(--duration-base) var(--ease-standard), background-color var(--duration-base) var(--ease-standard)',
            }}
          />
        );
      })}
    </div>
  );
}
