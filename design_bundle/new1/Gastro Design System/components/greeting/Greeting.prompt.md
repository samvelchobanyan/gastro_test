# Greeting

App home header: brand logo left, two-line greeting ("Greetings" / "Hi, {name}") beside it, notification bell right with unread dot. White-label — pass `logoUrl` to swap the placeholder mark.

```jsx
<Greeting name="Aram" hasNotifications onBellClick={openNotifications} />
```

Full-width; sits at the top of a home screen. Set `hasNotifications={false}` to hide the bell dot; override `greeting` for localization.
