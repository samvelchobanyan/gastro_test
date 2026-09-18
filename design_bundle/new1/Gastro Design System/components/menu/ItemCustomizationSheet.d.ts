export interface SizeOption {
  label: string;
  value: any;
  priceDelta?: number;
}

export interface AddOnOption {
  key: string;
  label: string;
  price: number;
}

export interface ItemCustomizationSheetProps {
  open?: boolean;
  onClose?: () => void;
  itemName?: string;
  basePrice?: number;
  /** Single-choice size/variant group. */
  sizeOptions?: SizeOption[];
  /** Multi-choice add-ons, each with its own price delta. */
  addOns?: AddOnOption[];
  onAddToCart?: (selection: { size: any; addOns: Record<string, boolean>; qty: number; total: number }) => void;
}

export function ItemCustomizationSheet(props: ItemCustomizationSheetProps): JSX.Element;
