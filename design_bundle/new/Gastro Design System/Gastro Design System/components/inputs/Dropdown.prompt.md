**Dropdown / Select** — a tappable field that opens a list of options; use for single-choice selection (address, sort order, party size) where radios would take too much space.

```jsx
const [sort, setSort] = React.useState('popular');
<Dropdown
  label="Sort by"
  value={sort}
  onChange={setSort}
  options={[
    { label: 'Most popular', value: 'popular' },
    { label: 'Price: low to high', value: 'price' },
    { label: 'Rating', value: 'rating' },
  ]}
/>
```

- **Sizes:** `fixed` (48px, default) and `floating` (56px) to match input field heights.
- **States:** open raises the border to 2px accent; `error` shows a red 2px border + alert icon on helper text; `disabled` dims to 30–38%.
- Closes on outside tap. Options enforce a 44px min touch target. Uses Phosphor `ph-caret-down` / `ph-check` / `ph-warning-circle`.
