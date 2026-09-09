import React from 'react';
import { BottomSheet } from '../feedback/BottomSheet.jsx';
import { RadioGroup } from '../forms/Radio.jsx';
import { Checkbox } from '../forms/Checkbox.jsx';
import { Stepper } from '../forms/Stepper.jsx';
import { Button } from '../buttons/Button.jsx';

/**
 * ItemCustomizationSheet — bottom sheet for configuring a menu item before
 * adding to cart: single-choice option groups (size), multi-choice add-ons,
 * quantity and special instructions. Composes BottomSheet + form controls.
 */
export function ItemCustomizationSheet({
  open = false,
  onClose = () => {},
  itemName = '',
  basePrice = 0,
  sizeOptions = null,      // [{label,value,priceDelta}]
  addOns = [],             // [{key,label,price}]
  onAddToCart = () => {},
}) {
  const [size, setSize] = React.useState(sizeOptions ? sizeOptions[0].value : null);
  const [selected, setSelected] = React.useState({});
  const [qty, setQty] = React.useState(1);

  const sizeDelta = sizeOptions ? (sizeOptions.find((s) => s.value === size)?.priceDelta || 0) : 0;
  const addOnsTotal = addOns.reduce((sum, a) => sum + (selected[a.key] ? a.price : 0), 0);
  const total = (basePrice + sizeDelta + addOnsTotal) * qty;

  return (
    <BottomSheet open={open} onClose={onClose} title={itemName}
      footer={
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
          <Stepper value={qty} min={1} max={10} onChange={setQty} />
          <Button fullWidth onClick={() => onAddToCart({ size, addOns: selected, qty, total })}>
            Add to cart · ${total.toFixed(2)}
          </Button>
        </div>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
        {sizeOptions && (
          <div>
            <h3 style={{ margin: '0 0 var(--space-md)', fontSize: 'var(--font-size-h3)', color: 'var(--color-text-primary)' }}>Size</h3>
            <RadioGroup name="size" value={size} onChange={setSize}
              options={sizeOptions.map((s) => ({ label: s.priceDelta ? `${s.label} (+$${s.priceDelta.toFixed(2)})` : s.label, value: s.value }))} />
          </div>
        )}
        {addOns.length > 0 && (
          <div>
            <h3 style={{ margin: '0 0 var(--space-md)', fontSize: 'var(--font-size-h3)', color: 'var(--color-text-primary)' }}>Add-ons</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              {addOns.map((a) => (
                <div key={a.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Checkbox checked={!!selected[a.key]} label={a.label}
                    onChange={(v) => setSelected((s) => ({ ...s, [a.key]: v }))} />
                  <span style={{ fontSize: 'var(--font-size-body)', color: 'var(--color-text-tertiary)' }}>+${a.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </BottomSheet>
  );
}
