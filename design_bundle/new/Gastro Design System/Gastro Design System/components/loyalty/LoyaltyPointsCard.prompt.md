# LoyaltyPointsCard

Fixed **328×116** dark membership card. Neutral-900 background with an optional per-brand background image (placeholder by default). Left: "Loyalty points" (H3), points balance (H1), tier (Body small). Right: 64×64 QR.

```jsx
<LoyaltyPointsCard points={1535} membership="Prime"
  qrValue="member:8842" backgroundImage="/brands/acme/loyalty-bg.png" />
```

Every brand supplies its own 328×116 background image via `backgroundImage`. For the flexible full-width card use `LoyaltyWidget`.
