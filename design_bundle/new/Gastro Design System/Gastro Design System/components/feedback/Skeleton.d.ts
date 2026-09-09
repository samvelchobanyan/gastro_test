export interface SkeletonProps {
  /** `text` (multiple lines), `block` (rectangle), or `circle`. */
  variant?: 'text' | 'block' | 'circle';
  width?: number | string;
  height?: number | string;
  /** Corner radius for `block`. */
  radius?: number | string;
  /** Line count for `text`. Default 3. */
  lines?: number;
}

export function Skeleton(props: SkeletonProps): JSX.Element;
