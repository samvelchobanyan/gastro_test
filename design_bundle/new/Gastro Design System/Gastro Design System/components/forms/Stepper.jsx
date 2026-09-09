import React from 'react';

/**
 * Stepper — increment/decrement control for quantity selection.
 * Neutral/base level; brand applied via tokens.
 */
export function Stepper({
  value = 0,
  min = 0,
  max = 99,
  step = 1,
  size = 'md',
  disabled = false,
  onChange = () => {},
  ariaLabel = 'Quantity',
}) {
  const [pressed, setPressed] = React.useState(null); // 'dec' | 'inc' | null

  const dims = size === 'sm'
    ? { h: 32, btn: 32, val: 32, font: 13, icon: 16 }
    : { h: 40, btn: 40, val: 44, font: 15, icon: 18 };

  const atMin = disabled || value <= min;
  const atMax = disabled || value >= max;

  const clamp = (v) => Math.max(min, Math.min(max, v));
  const dec = () => { if (!atMin) onChange(clamp(value - step)); };
  const inc = () => { if (!atMax) onChange(clamp(value + step)); };

  const wrap = {
    display: 'inline-flex',
    alignItems: 'center',
    height: dims.h,
    border: `var(--border-width-default) solid var(--color-border-default)`,
    borderRadius: 'var(--radius-full)',
    background: 'var(--color-bg-main)',
    opacity: disabled ? 'var(--state-disabled-opacity)' : 1,
    userSelect: 'none',
  };

  const btn = (isActive, isPressed) => ({
    width: dims.btn,
    height: dims.btn,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    background: isPressed ? 'var(--overlay-press-dark)' : 'transparent',
    borderRadius: 'var(--radius-full)',
    color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-disabled)',
    cursor: isActive ? 'pointer' : 'not-allowed',
    padding: 0,
    fontSize: dims.icon,
    transition: 'var(--transition-press)',
    WebkitTapHighlightColor: 'transparent',
  });

  const val = {
    minWidth: dims.val,
    textAlign: 'center',
    fontFamily: 'var(--font-family-base)',
    fontSize: dims.font,
    fontWeight: 'var(--font-weight-semibold)',
    color: 'var(--color-text-primary)',
    fontVariantNumeric: 'tabular-nums',
  };

  return (
    <div style={wrap} role="group" aria-label={ariaLabel}>
      <button
        type="button"
        style={btn(!atMin, pressed === 'dec')}
        onClick={dec}
        onPointerDown={() => !atMin && setPressed('dec')}
        onPointerUp={() => setPressed(null)}
        onPointerLeave={() => setPressed(null)}
        disabled={atMin}
        aria-label="Decrease"
      >
        <i className="ph ph-minus" aria-hidden="true" />
      </button>
      <span style={val} aria-live="polite">{value}</span>
      <button
        type="button"
        style={btn(!atMax, pressed === 'inc')}
        onClick={inc}
        onPointerDown={() => !atMax && setPressed('inc')}
        onPointerUp={() => setPressed(null)}
        onPointerLeave={() => setPressed(null)}
        disabled={atMax}
        aria-label="Increase"
      >
        <i className="ph ph-plus" aria-hidden="true" />
      </button>
    </div>
  );
}
