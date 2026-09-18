import React from 'react';

/**
 * SearchBar — search-optimized input with leading magnifier, clear button
 * and optional live suggestions dropdown.
 */
export function SearchBar({
  value = '',
  onChange = () => {},
  onSubmit = () => {},
  placeholder = 'Search dishes, restaurants…',
  suggestions = [],    // array of strings
  onSelectSuggestion = () => {},
  disabled = false,
}) {
  const [focused, setFocused] = React.useState(false);
  const showSug = focused && value.length > 0 && suggestions.length > 0;

  const bar = {
    display: 'flex', alignItems: 'center', gap: 'var(--space-sm)',
    height: 48, padding: '0 var(--space-base)', boxSizing: 'border-box',
    background: 'var(--color-bg-surface-sunken)',
    border: `var(--border-width-default) solid ${focused ? 'var(--input-border-focus)' : 'transparent'}`,
    borderRadius: 'var(--radius-full)',
    opacity: disabled ? 'var(--state-disabled-opacity)' : 1,
    transition: 'var(--transition-colors)',
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div style={bar}>
        <i className="ph ph-magnifying-glass" aria-hidden="true" style={{ fontSize: 'var(--icon-sm)', color: 'var(--color-text-tertiary)' }} />
        <input
          type="search" value={value} placeholder={placeholder} disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSubmit(value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 120)}
          style={{
            flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
            color: 'var(--input-text)', fontFamily: 'var(--font-family-base)',
            fontSize: 'var(--font-size-body)',
          }}
          aria-label="Search"
        />
        {value && (
          <button
            type="button" onClick={() => onChange('')} aria-label="Clear"
            style={{
              width: 24, height: 24, display: 'inline-flex', alignItems: 'center',
              justifyContent: 'center', border: 'none', background: 'var(--color-border-default)',
              color: 'var(--color-text-secondary)', borderRadius: 'var(--radius-full)',
              cursor: 'pointer', fontSize: 14,
            }}
          >
            <i className="ph ph-x" aria-hidden="true" />
          </button>
        )}
      </div>
      {showSug && (
        <div style={{
          position: 'absolute', top: 'calc(100% + var(--space-xs))', left: 0, right: 0, zIndex: 20,
          background: 'var(--color-bg-surface)', border: 'var(--border-width-default) solid var(--color-border-muted)',
          borderRadius: 'var(--radius-input)', boxShadow: 'var(--elevation-overlay)', padding: 'var(--space-xs)',
        }} role="listbox">
          {suggestions.map((s) => (
            <button
              key={s} type="button" role="option"
              onClick={() => { onSelectSuggestion(s); onChange(s); }}
              style={{
                display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', width: '100%', minHeight: 44,
                padding: '0 var(--space-md)', border: 'none', background: 'transparent',
                borderRadius: 'var(--radius-sm)', cursor: 'pointer', textAlign: 'left',
                fontFamily: 'var(--font-family-base)', fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-primary)',
              }}
            >
              <i className="ph ph-magnifying-glass" aria-hidden="true" style={{ fontSize: 16, color: 'var(--color-text-tertiary)' }} />
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
