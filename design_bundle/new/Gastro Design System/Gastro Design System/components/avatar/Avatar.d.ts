export interface AvatarProps {
  /** Image URL. Falls back to initials, then a user glyph. */
  src?: string;
  /** Used for initials + the accessible label. */
  name?: string;
  /** xs 24 · sm 32 · md 40 (default) · lg 56 · xl 72. */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'rounded';
  /** Optional presence dot. */
  status?: 'online' | 'busy' | null;
}

export function Avatar(props: AvatarProps): JSX.Element;
