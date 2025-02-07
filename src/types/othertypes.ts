interface ComboBoxProps {
  options: { value: string; label: string }[]; // The options data
  placeholder: string;
  onChange: (value: string) => void; // Callback to handle the selected value
  noOptionsMessage?: string; // Custom message for when no options are found
  value?: string; // The selected value
  width?: string;
}
