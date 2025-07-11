import { memo } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import FormFieldWrapper from "./FormFieldWrapper";
import { BaseFormFieldProps } from "@/types";

interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

interface CustomRadioGroupProps extends BaseFormFieldProps {
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: "horizontal" | "vertical";
}

/**
 * Renders a group of radio buttons, integrated with a wrapper for a consistent
 * form field layout. Each radio option can have a label and an optional description.
 *
 * @param {CustomRadioGroupProps} props - The props for the component.
 * @param {Array<{
 *   value: string;
 *   label: string;
 *   description?: string;
 *   disabled?: boolean;
 * }>} props.options - An array of objects, each representing a radio option.
 * @param {string} [props.value] - The controlled value of the selected radio button.
 * @param {string} [props.defaultValue] - The initial value for uncontrolled usage.
 * @param {(value: string) => void} [props.onValueChange] - Callback fired when the selected value changes.
 * @param {'horizontal' | 'vertical'} [props.orientation='vertical'] - The layout orientation of the radio buttons.
 * @param {string} [props.label] - The label displayed for the radio group.
 * @param {string} [props.description] - A short description displayed below the label.
 * @param {string} [props.error] - An error message to display, indicating a validation error.
 * @param {boolean} [props.disabled] - If true, all radio buttons in the group will be disabled.
 * @param {string} [props.className] - Additional CSS classes to apply to the radio group.
 */
const CustomRadioGroup = ({ options, orientation = "vertical", ...props }: CustomRadioGroupProps) => (
  <FormFieldWrapper {...props}>
    {(id, describedBy) => (
      <RadioGroup
        value={props.value}
        defaultValue={props.defaultValue}
        onValueChange={props.onValueChange}
        disabled={props.disabled}
        className={cn(
          "space-y-3",
          orientation === "horizontal" && "flex space-x-6 space-y-0",
          props.className,
        )}
        aria-invalid={!!props.error}
        aria-describedby={describedBy}
      >
        {options.map((option) => (
          <div key={option.value} className="flex items-start space-x-3">
            <RadioGroupItem
              value={option.value}
              id={`${id}-${option.value}`}
              disabled={option.disabled}
              className={cn("cursor-pointer", props.error && "border-destructive")}
            />
            <div className="flex-1 space-y-1">
              <label
                htmlFor={`${id}-${option.value}`}
                className={cn(
                  "text-sm font-medium leading-none cursor-pointer",
                  props.error && "text-destructive",
                  (option.disabled || props.disabled) && "opacity-50 cursor-not-allowed",
                )}
              >
                {option.label}
              </label>
              {option.description && <p className="text-xs text-muted-foreground">{option.description}</p>}
            </div>
          </div>
        ))}
      </RadioGroup>
    )}
  </FormFieldWrapper>
);

export default memo(CustomRadioGroup);
