export interface FilterItemProps {
  label: string;
  value: string;
}
export interface DropdownProps {
  defaultValue: string | number;
  menuItems: [] | any;
  onSelect?: (value: string) => void;
}
