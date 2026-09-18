# CartLineItem

One cart/order row — thumbnail, name, modifiers, price, quantity. Read-only (order history) when `onQtyChange` is omitted.

```jsx
<CartLineItem image={img} name="Margherita Pizza" modifiers="Large, extra cheese"
  price={16} qty={qty} onQtyChange={setQty} onRemove={remove} />
```
