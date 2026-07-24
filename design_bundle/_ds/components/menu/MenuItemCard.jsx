import React from 'react';
import { Stepper } from '../forms/Stepper.jsx';

/**
 * MenuItemCard — dish photo, name, short description, price and an
 * add-to-cart control. Horizontal list-style layout (text left,
 * image right) common to food ordering apps.
 *
 * When quantity is 0 an "Add" button shows; once > 0 it becomes a
 * compact Stepper.
 */
export function MenuItemCard({
  name = 'Dish name',
  description = '',
  price = 0,
  currency = '$',
  imageUrl = null,
  tag = null,
  quantity = 0,
  onAdd = () => {},
  onQuantityChange = () => {},
}) {
  const [addPressed, setAddPressed] = React.useState(false);

  const fmt = (n) =>
    `${currency}${Number(n).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const card = {
    display: 'flex',
    gap: 'var(--space-base)',
    padding: 'var(--space-base)',
    background: 'var(--card-bg)',
    border: 'var(--border-width-default) solid var(--card-border)',
    borderRadius: 'var(--radius-card)',
    boxShadow: 'var(--elevation-card)',
    fontFamily: 'var(--font-family-base)',
    alignItems: 'stretch',
  };

  const addBtn = {
    position: 'absolute',
    right: 8,
    bottom: 8,
    width: 36,
    height: 36,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: 'var(--radius-md)',
    background: addPressed ? 'var(--button-primary-bg-active)' : 'var(--button-primary-bg)',
    color: 'var(--button-primary-text)',
    boxShadow: 'var(--elevation-raised)',
    cursor: 'pointer',
    fontSize: 'var(--icon-md)',
    transition: 'var(--transition-press)',
    WebkitTapHighlightColor: 'transparent',
  };

  return (
    <div style={card}>
      {/* Text column */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {tag && (
          <span
            style={{
              alignSelf: 'flex-start',
              marginBottom: 'var(--space-sm)',
              padding: '2px 8px',
              background: 'var(--color-brand-subtle)',
              color: 'var(--color-text-accent)',
              borderRadius: 'var(--radius-tag)',
              fontSize: 'var(--font-size-overline)',
              lineHeight: 'var(--line-height-overline)',
              fontWeight: 'var(--font-weight-semibold)',
              letterSpacing: 'var(--letter-spacing-overline)',
              textTransform: 'uppercase',
            }}
          >
            {tag}
          </span>
        )}
        <div
          style={{
            fontSize: 'var(--font-size-h3)',
            lineHeight: 'var(--line-height-h3)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-text-primary)',
          }}
        >
          {name}
        </div>
        {description && (
          <div
            style={{
              marginTop: 'var(--space-xs)',
              fontSize: 'var(--font-size-body)',
              lineHeight: 'var(--line-height-body)',
              color: 'var(--color-text-secondary)',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {description}
          </div>
        )}
        <div
          style={{
            marginTop: 'auto',
            paddingTop: 'var(--space-md)',
            fontSize: 'var(--font-size-h3)',
            lineHeight: 'var(--line-height-h3)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-text-primary)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {fmt(price)}
        </div>
      </div>

      {/* Image + action */}
      <div style={{ position: 'relative', flex: '0 0 104px', width: 104 }}>
        <div
          style={{
            width: 104,
            height: 104,
            borderRadius: 'var(--radius-md)',
            background: imageUrl
              ? `center / cover no-repeat url("${imageUrl}")`
              : 'var(--color-bg-surface-sunken)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-disabled)',
            fontSize: 32,
          }}
        >
          {!imageUrl && <i className="ph ph-image" aria-hidden="true" />}
        </div>

        {quantity > 0 ? (
          <div style={{ position: 'absolute', right: 0, bottom: 8 }}>
            <Stepper size="sm" value={quantity} min={0} onChange={onQuantityChange} ariaLabel={`Quantity of ${name}`} />
          </div>
        ) : (
          <button
            type="button"
            style={addBtn}
            onClick={onAdd}
            onPointerDown={() => setAddPressed(true)}
            onPointerUp={() => setAddPressed(false)}
            onPointerLeave={() => setAddPressed(false)}
            aria-label={`Add ${name}`}
          >
            <i className="ph ph-plus" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
