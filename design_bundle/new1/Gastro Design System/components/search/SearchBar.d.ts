export interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  /** Fired on Enter. */
  onSubmit?: (value: string) => void;
  placeholder?: string;
  /** Live suggestion strings shown while focused with a non-empty value. */
  suggestions?: string[];
  onSelectSuggestion?: (value: string) => void;
  disabled?: boolean;
}

export function SearchBar(props: SearchBarProps): JSX.Element;
