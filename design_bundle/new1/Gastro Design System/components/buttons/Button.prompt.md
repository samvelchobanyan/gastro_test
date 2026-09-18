# Button

Primary CTA and secondary/tertiary actions. Use one primary per screen; pair with a secondary for alternate actions.

```jsx
<Button variant="primary" size="lg" fullWidth iconLeft="shopping-cart-simple" onClick={checkout}>
  Add to cart · $18.00
</Button>
```

Variants: `primary` (filled accent), `secondary` (outline), `tertiary` (text), `destructive` (red). Sizes `lg/md/sm/xs` = 56/48/40/32px. `loading` freezes size and shows a spinner; `disabled` drops to ~35% opacity.
