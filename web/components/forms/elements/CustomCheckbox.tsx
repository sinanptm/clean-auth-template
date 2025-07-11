import { memo } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import FormFieldWrapper from "./FormFieldWrapper";
import { BaseFormFieldProps } from "@/types";

interface CustomCheckBoxProps extends BaseFormFieldProps {
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}

/**
 * Renders a checkbox input, integrated with a wrapper for a consistent
 * form field layout including a label, description, and error messages.
 *
 * @param {CustomCheckBoxProps} props - The props for the component.
 * @param {boolean} [props.checked] - The controlled checked state of the checkbox.
 * @param {boolean} [props.defaultChecked] - The initial checked state for uncontrolled usage.
 * @param {(checked: boolean) => void} [props.onCheckedChange] - Callback fired when the checked state changes.
 * @param {string} [props.label] - The label displayed for the checkbox.
 * @param {string} [props.description] - A short description displayed below the label.
 * @param {string} [props.error] - An error message to display, indicating a validation error.
 * @param {boolean} [props.disabled] - If true, the checkbox will be disabled.
 * @param {string} [props.className] - Additional CSS classes to apply to the checkbox.
 */
const CustomCheckbox = (props: CustomCheckBoxProps) => (
  <FormFieldWrapper {...props}>
    {(id, describedBy) => (
      <Checkbox
        id={id}
        checked={props.checked}
        defaultChecked={props.defaultChecked}
        onCheckedChange={props.onCheckedChange}
        disabled={props.disabled}
        className={cn(
          props.error && "border-destructive data-[state=checked]:bg-destructive cursor-pointer",
          props.className,
        )}
        aria-invalid={!!props.error}
        aria-describedby={describedBy}
      />
    )}
  </FormFieldWrapper>
);

export default memo(CustomCheckbox);
