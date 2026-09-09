import React from 'react';

/**
 * ReservationConfirmationCard — success summary after booking a table:
 * restaurant, date/time, party size, confirmation code.
 */
export function ReservationConfirmationCard({
  restaurantName = '',
  dateLabel = '',
  timeLabel = '',
  partySize = 2,
  confirmationCode = '',
}) {
  const row = (icon, label) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-body)' }}>
      <i className={`ph ph-${icon}`} aria-hidden="true" style={{ fontSize: 18, color: 'var(--color-text-tertiary)' }} />{label}
    </div>
  );
  return (
    <div style={{
      padding: 'var(--space-lg)', background: 'var(--card-bg)', border: 'var(--border-width-default) solid var(--card-border)',
      borderRadius: 'var(--radius-card)', boxShadow: 'var(--elevation-card)', textAlign: 'center', fontFamily: 'var(--font-family-base)',
    }}>
      <div style={{
        width: 56, height: 56, margin: '0 auto var(--space-md)', borderRadius: 'var(--radius-full)',
        background: 'var(--color-bg-success)', color: 'var(--color-status-success)', display: 'flex',
        alignItems: 'center', justifyContent: 'center', fontSize: 28,
      }}><i className="ph-fill ph-check-circle" aria-hidden="true" /></div>
      <h3 style={{ margin: 0, fontSize: 'var(--font-size-h2)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-primary)' }}>Table confirmed</h3>
      <p style={{ margin: '4px 0 var(--space-md)', color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-body)' }}>{restaurantName}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start', margin: '0 auto', width: 'fit-content' }}>
        {row('calendar', `${dateLabel} · ${timeLabel}`)}
        {row('users', `${partySize} guests`)}
        {confirmationCode && row('ticket', `Code ${confirmationCode}`)}
      </div>
    </div>
  );
}
