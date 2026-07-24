import React from 'react';

/**
 * OrderHistoryCard — past-order summary: restaurant, date, item preview,
 * total and status. Composes with ReorderButton as a trailing action.
 */
export function OrderHistoryCard({
  restaurantName = '',
  date = '',
  itemsSummary = '',
  total = 0,
  status = 'Delivered',
  onClick = null,
  actions = null,       // node, e.g. <ReorderButton onClick={...} />
}) {
  return (
    <div onClick={onClick} style={{
      padding: 'var(--space-base)', background: 'var(--card-bg)', border: 'var(--border-width-default) solid var(--card-border)',
      borderRadius: 'var(--radius-card)', boxShadow: 'var(--elevation-card)', cursor: onClick ? 'pointer' : 'default',
      fontFamily: 'var(--font-family-base)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
        <div>
          <div style={{ fontSize: 'var(--font-size-h3)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-primary)' }}>{restaurantName}</div>
          <div style={{ fontSize: 'var(--font-size-caption)', color: 'var(--color-text-tertiary)' }}>{date}</div>
        </div>
        <span style={{
          fontSize: 11, fontWeight: 'var(--font-weight-bold)', padding: '4px 10px', borderRadius: 'var(--radius-full)',
          background: 'var(--color-bg-success)', color: 'var(--color-text-success)', whiteSpace: 'nowrap',
        }}>{status}</span>
      </div>
      <div style={{ marginTop: 'var(--space-sm)', fontSize: 'var(--font-size-body)', color: 'var(--color-text-secondary)' }}>{itemsSummary}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'var(--space-md)' }}>
        <span style={{ fontSize: 'var(--font-size-body-lg)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-text-primary)', fontVariantNumeric: 'tabular-nums' }}>${total.toFixed(2)}</span>
        {actions}
      </div>
    </div>
  );
}
