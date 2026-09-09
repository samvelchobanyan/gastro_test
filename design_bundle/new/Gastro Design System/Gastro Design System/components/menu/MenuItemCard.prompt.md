**MenuItemCard** — the core menu row: dish photo, name, 2-line description, price, and an add-to-cart control. Use it in menu lists and category sections.

```jsx
const [qty, setQty] = React.useState(0);
<MenuItemCard
  name="Margherita"
  description="San Marzano tomato, fior di latte, basil, cold-pressed olive oil."
  price={12.5}
  tag="Popular"
  imageUrl="/pizza.jpg"
  quantity={qty}
  onAdd={() => setQty(1)}
  onQuantityChange={setQty}
/>
```

- Composes **Stepper** (`size="sm"`) once an item is in the cart; before that it shows a floating **+** add button.
- `tag` renders as an overline badge in the accent-subtle color.
- Requires the Phosphor web font (`ph-plus`, `ph-image`) on the page.
