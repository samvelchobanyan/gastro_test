# TextInput

Single-line text field with label, helper/error text and optional icons.

```jsx
<TextInput label="Email" type="email" value={v} onChange={setV}
  error={!valid} helperText={valid ? null : 'Enter a valid email'} iconLeft="envelope" />
```

Focus raises the border to 2px accent. `error` recolors border + shows a warning icon.
