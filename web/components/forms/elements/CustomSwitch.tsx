import { memo } from "react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import FormFieldWrapper from "./FormFieldWrapper";
import { BaseFormFieldProps } from "@/types";

interface CustomSwitchProps extends BaseFormFieldProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

/**
 * Renders a switch (toggle) component, integrated with a wrapper for a consistent
 * form field layout. It supports controlled and uncontrolled states.
 *
 * @param {CustomSwitchProps} props - The props for the component.
 * @param {boolean} [props.checked] - The controlled checked state of the switch.
 * @param {boolean} [props.defaultChecked] - The initial checked state for uncontrolled usage.
 * @param {(checked: boolean) => void} [props.onCheckedChange] - Callback fired when the checked state changes.
 * @param {string} [props.label] - The label displayed for the switch.
 * @param {string} [props.description] - A short description displayed below the label.
 * @param {string} [props.error] - An error message to display, indicating a validation error.
 * @param {boolean} [props.disabled] - If true, the switch will be disabled.
 * @param {string} [props.className] - Additional CSS classes to apply to the switch.
 */
const CustomSwitch = (props: CustomSwitchProps) => (
  <FormFieldWrapper {...props}>
    {(id, describedBy) => (
      <div className="flex items-start space-x-3">
        <Switch
          id={id}
          checked={props.checked}
          defaultChecked={props.defaultChecked}
          onCheckedChange={props.onCheckedChange}
          disabled={props.disabled}
          className={cn(
            "cursor-pointer",
            props.error && "data-[state=unchecked]:bg-destructive/20",
            props.className,
          )}
          aria-invalid={!!props.error}
          aria-describedby={describedBy}
        />
      </div>
    )}
  </FormFieldWrapper>
);

export default memo(CustomSwitch);
