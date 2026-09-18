import React from 'react';
import { Button } from '../buttons/Button.jsx';

/**
 * Wallet — fixed-width (328px) dark balance card. Shows a "Wallet" title
 * (Body Small, neutral-500) and the balance value (Heading 1, neutral-0)
 * on a neutral-900 surface, with a "Top Up" button on the right.
 */
export function Wallet({
  balance = '$0.00',
  title = 'Wallet',
  topUpLabel = 'Top Up',
  onTopUp = () => {},
  icon = null,      // per-client icon image URL; placeholder when null
}) {
  return (
    <div style={{
      boxSizing: 'border-box', width: 328, padding: 'var(--space-base)',
      borderRadius: 'var(--space-base)', background: 'var(--gray-900)',
      fontFamily: 'var(--font-family-base)', display: 'flex', alignItems: 'center', gap: 'var(--space-md)',
    }}>
      {icon ? (
        <img src={icon} alt="" style={{ flex: '0 0 auto', width: 48, height: 48, borderRadius: 'var(--radius-sm)', objectFit: 'cover' }} />
      ) : (
        <span aria-hidden="true" style={{
          flex: '0 0 auto', width: 48, height: 48, borderRadius: 'var(--radius-sm)',
          background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0 8px, rgba(255,255,255,0) 8px 16px), rgba(255,255,255,0.06)',
        }} />
      )}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: 'var(--font-size-body-sm)', lineHeight: 'var(--line-height-body-sm)', fontWeight: 'var(--font-weight-regular)', fontFamily: 'var(--font-family-base)', color: 'var(--gray-500)' }}>{title}</span>
        <span style={{ fontSize: 'var(--font-size-h1)', lineHeight: 'var(--line-height-h1)', fontWeight: 'var(--font-weight-bold)', fontFamily: 'var(--font-family-base)', color: 'var(--gray-0)' }}>{balance}</span>
      </div>
      <Button size="xs" radius="full" iconLeft="plus" onClick={onTopUp}>{topUpLabel}</Button>
    </div>
  );
}
