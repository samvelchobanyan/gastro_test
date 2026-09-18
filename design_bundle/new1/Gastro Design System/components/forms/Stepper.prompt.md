**Stepper** — increment/decrement control for choosing a quantity; use it for cart items, party size, or any small bounded number.

```jsx
const [qty, setQty] = React.useState(1);
<Stepper value={qty} min={1} max={10} onChange={setQty} />
```

- **Sizes:** `md` (40px, default) for cart rows and sheets; `sm` (32px) for inline/compact card actions.
- Buttons auto-disable at `min` / `max`; pass `disabled` to freeze the whole control.
- Uses Phosphor `ph-minus` / `ph-plus` — ensure the Phosphor web font is loaded on the page.
