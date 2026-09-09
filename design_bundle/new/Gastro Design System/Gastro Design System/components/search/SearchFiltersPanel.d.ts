export interface SearchFiltersPanelProps {
  maxPrice?: number;
  onMaxPriceChange?: (value: number) => void;
  dietaryOptions?: string[];
  selectedDietary?: string[];
  onToggleDietary?: (option: string) => void;
  onApply?: () => void;
  onReset?: () => void;
}

export function SearchFiltersPanel(props: SearchFiltersPanelProps): JSX.Element;
