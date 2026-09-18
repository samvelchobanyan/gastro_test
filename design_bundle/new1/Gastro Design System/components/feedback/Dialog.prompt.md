# Dialog

Centered blocking confirmation/alert. Use `tone="destructive"` for irreversible actions.

```jsx
<Dialog open={open} onClose={close} icon="trash" tone="destructive"
  title="Remove item?" description="This will empty your cart." confirmLabel="Remove" onConfirm={remove} />
```
