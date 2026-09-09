export interface TabBarOption {
  label: string;
  value: any;
  /** Optional leading Phosphor icon. */
  icon?: string;
}

export interface TabBarProps {
  /** `{ label, value, icon? }` objects or plain strings. */
  options?: Array<TabBarOption | string>;
  value?: any;
  onChange?: (value: any) => void;
  /** `big` (full-width, 40px tall — default) or `small` (compact, auto-width). */
  size?: 'big' | 'small';
  /** Stretch to container width. Defaults to true for `big`, false for `small`. */
  fullWidth?: boolean;
}

export function TabBar(props: TabBarProps): JSX.Element;
