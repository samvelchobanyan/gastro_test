# MenuTabsVertical

Horizontal scroll row of category items, each stacking a round image with its label beneath (no pill). Active item gets a brand-color ring + accent label.

```jsx
<MenuTabsVertical value={cat} onChange={setCat}
  categories={[
    { label: 'Pizza', value: 'pizza', image: pizzaImg },
    { label: 'Burgers', value: 'burgers', image: burgerImg },
  ]} />
```

The container-free counterpart to `MenuTabs` (44px pills). For text-only switching use `MenuCategoryTabs`.
