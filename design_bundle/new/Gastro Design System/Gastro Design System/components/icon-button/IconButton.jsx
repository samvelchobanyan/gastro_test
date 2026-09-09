import React from 'react';

/**
 * IconButton — tappable icon-only control (favorite, share, close, back).
 * Always renders inside a >=48px hit target even when the visual is smaller.
 */
export function IconButton({
  icon = 'heart',      // phosphor name
  variant = 'ghost',   // 'ghost' | 'filled' | 'tonal'
  size = 'md',         // 'sm' 40 | 'md' 48 | 'lg' 56 hit target
  disabled = false,
  active = false,      // e.g. favorited
  onClick = () => {},
  ariaLabel = 'Action',
}) {
  const [pressed, setPressed] = React.useState(false);
  const targets = { sm: 40, md: 48, lg: 56 };
  const icons = { sm: 20, md: 24, lg: 24 };
  const t = targets[size];

  const palettes = {
    ghost: {
      bg: pressed ? 'var(--overlay-press-dark)' : 'transparent',
      color: active ? 'var(--color-brand-primary)' : 'var(--color-text-primary)',
    },
    filled: {
      bg: pressed ? 'var(--button-primary-bg-active)' : 'var(--button-primary-bg)',
      color: 'var(--button-primary-text)',
    },
    tonal: {
      bg: pressed ? 'var(--accent-100)' : 'var(--color-brand-subtle)',
      color: 'var(--color-text-accent)',
    },
  };
  const p = palettes[variant] || palettes.ghost;

  const style = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: t, height: t, padding: 0, border: 'none',
    background: p.bg, color: p.color, borderRadius: 'var(--radius-full)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 'var(--state-disabled-opacity)' : 1,
    transition: 'var(--transition-press)', WebkitTapHighlightColor: 'transparent',
  };
  const clear = () => setPressed(false);

  return (
    <button
      type="button" style={style} disabled={disabled} onClick={onClick}
      aria-label={ariaLabel} aria-pressed={active || undefined}
      onPointerDown={() => !disabled && setPressed(true)}
      onPointerUp={clear} onPointerLeave={clear}
    >
      <i
        className={`ph${active && variant === 'ghost' ? '-fill' : ''} ph-${icon}`}
        aria-hidden="true"
        style={{ fontSize: icons[size] }}
      />
    </button>
  );
}
