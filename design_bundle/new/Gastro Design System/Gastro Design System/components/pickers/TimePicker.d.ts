export interface TimeSlot {
  time: string;
  disabled?: boolean;
}

export interface TimePickerProps {
  /** Plain time strings or `{ time, disabled }` objects. */
  slots?: Array<TimeSlot | string>;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
}

export function TimePicker(props: TimePickerProps): JSX.Element;
