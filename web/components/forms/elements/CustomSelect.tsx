import { memo } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import FormFieldWrapper from "./FormFieldWrapper";
import { BaseFormFieldProps } from "@/types";

interface CustomSelectProps extends BaseFormFieldProps {
  options: { value: string; label: string; disabled?: boolean }[];
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

/**
 * Renders a customizable select dropdown, integrated with a wrapper for a consistent
 * form field layout. It supports a placeholder, options, and controlled/uncontrolled states.
 *
 * @param {CustomSelectProps} props - The props for the component.
 * @param {Array<{value: string; label: string; disabled?: boolean}>} props.options - An array of objects, each representing a select option.
 * @param {string} [props.placeholder] - The text displayed when no option is selected.
 * @param {string} [props.value] - The controlled value of the selected option.
 * @param {string} [props.defaultValue] - The initial value for uncontrolled usage.
 * @param {(value: string) => void} [props.onValueChange] - Callback fired when the selected value changes.
 * @param {string} [props.label] - The label displayed for the select.
 * @param {string} [props.description] - A short description displayed below the label.
 * @param {string} [props.error] - An error message to display, indicating a validation error.
 * @param {boolean} [props.disabled] - If true, the select dropdown will be disabled.
 * @param {string} [props.className] - Additional CSS classes to apply to the select trigger.
 */
export const CustomSelect = ({ options, placeholder, ...props }: CustomSelectProps) => (
  <FormFieldWrapper {...props}>
    {(id, describedBy) => (
      <Select
        value={props.value}
        defaultValue={props.defaultValue}
        onValueChange={props.onValueChange}
        disabled={props.disabled}
      >
        <SelectTrigger
          className={cn(props.error && "border-destructive focus:ring-destructive", props.className)}
          aria-invalid={!!props.error}
          aria-describedby={describedBy}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )}
  </FormFieldWrapper>
);
export default memo(CustomSelect);
