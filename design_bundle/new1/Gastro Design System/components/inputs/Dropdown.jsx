import React from 'react';

/**
 * Dropdown / Select — tappable field that opens a list of options.
 * Neutral/base level; brand applied via tokens.
 *
 * options: array of { label, value } or plain strings.
 */
export function Dropdown({
  options = [],
  value = null,
  placeholder = 'Select…',
  label = null,
  helperText = null,
  disabled = false,
  error = false,
  size = 'fixed', // 'fixed' (48px) | 'floating' (56px)
  onChange = () => {},
  id,
}) {
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef(null);

  const norm = options.map((o) =>
    typeof o === 'string' ? { label: o, value: o } : o
  );
  const selected = norm.find((o) => o.value === value) || null;
  const height = size === 'floating' ? 56 : 48;

  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('pointerdown', onDoc);
    return () => document.removeEventListener('pointerdown', onDoc);
  }, [open]);

  const borderColor = error
    ? 'var(--input-border-error)'
    : open
    ? 'var(--input-border-focus)'
    : 'var(--input-border)';

  const field = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-sm)',
    width: '100%',
    height,
    padding: '0 var(--input-padding-x)',
    boxSizing: 'border-box',
    background: 'var(--input-bg)',
    border: `${open || error ? 'var(--border-width-focus)' : 'var(--border-width-default)'} solid ${borderColor}`,
    borderRadius: 'var(--radius-input)',
    color: selected ? 'var(--input-text)' : 'var(--input-placeholder)',
    fontFamily: 'var(--font-family-base)',
    fontSize: 'var(--font-size-body)',
    fontWeight: 'var(--font-weight-medium)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 'var(--state-disabled-opacity)' : 1,
    textAlign: 'left',
    WebkitTapHighlightColor: 'transparent',
  };

  const menu = {
    position: 'absolute',
    top: `calc(100% + var(--space-xs))`,
    left: 0,
    right: 0,
    zIndex: 20,
    background: 'var(--color-bg-surface)',
    border: 'var(--border-width-default) solid var(--color-border-muted)',
    borderRadius: 'var(--radius-input)',
    boxShadow: 'var(--elevation-overlay)',
    padding: 'var(--space-xs)',
    maxHeight: 240,
    overflowY: 'auto',
  };

  const opt = (isSel) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    minHeight: 44,
    padding: '0 var(--space-md)',
    border: 'none',
    background: isSel ? 'var(--color-brand-subtle)' : 'transparent',
    borderRadius: 'var(--radius-sm)',
    color: isSel ? 'var(--color-text-accent)' : 'var(--color-text-primary)',
    fontFamily: 'var(--font-family-base)',
    fontSize: 'var(--font-size-body)',
    fontWeight: isSel ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
    cursor: 'pointer',
    textAlign: 'left',
  });

  return (
    <div ref={rootRef} style={{ position: 'relative', width: '100%' }}>
      {label && (
        <label
          htmlFor={id}
          style={{
            display: 'block',
            marginBottom: 'var(--space-sm)',
            fontFamily: 'var(--font-family-base)',
            fontSize: 'var(--font-size-body)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--input-label)',
          }}
        >
          {label}
        </label>
      )}
      <button
        id={id}
        type="button"
        style={field}
        disabled={disabled}
        onClick={() => !disabled && setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {selected ? selected.label : placeholder}
        </span>
        <i
          className="ph ph-caret-down"
          aria-hidden="true"
          style={{
            fontSize: 'var(--icon-sm)',
            color: 'var(--color-text-tertiary)',
            transform: open ? 'rotate(180deg)' : 'none',
            transition: `transform var(--duration-fast) var(--ease-standard)`,
          }}
        />
      </button>

      {open && (
        <div style={menu} role="listbox">
          {norm.map((o) => {
            const isSel = o.value === value;
            return (
              <button
                key={String(o.value)}
                type="button"
                role="option"
                aria-selected={isSel}
                style={opt(isSel)}
                onClick={() => { onChange(o.value); setOpen(false); }}
              >
                <span>{o.label}</span>
                {isSel && <i className="ph ph-check" aria-hidden="true" style={{ fontSize: 'var(--icon-sm)' }} />}
              </button>
            );
          })}
        </div>
      )}

      {helperText && (
        <div
          style={{
            marginTop: 'var(--space-sm)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-xs)',
            fontFamily: 'var(--font-family-base)',
            fontSize: 'var(--font-size-caption)',
            lineHeight: 'var(--line-height-caption)',
            color: error ? 'var(--color-text-error)' : 'var(--input-helper)',
          }}
        >
          {error && <i className="ph ph-warning-circle" aria-hidden="true" style={{ fontSize: 14 }} />}
          {helperText}
        </div>
      )}
    </div>
  );
}
