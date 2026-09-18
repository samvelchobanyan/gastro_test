export interface QuickActionTileProps {
  /** Phosphor icon name. */
  icon?: string;
  label?: string;
  onClick?: () => void;
}

export interface QuickAction {
  key?: string;
  icon: string;
  label: string;
  onClick?: () => void;
}

export interface QuickActionTilesProps {
  actions?: QuickAction[];
}

export function QuickActionTile(props: QuickActionTileProps): JSX.Element;
export function QuickActionTiles(props: QuickActionTilesProps): JSX.Element;
