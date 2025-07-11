"use client";

import { memo } from "react";
import { OTPInput, type SlotProps } from "input-otp";
import { cn } from "@/lib/utils";
import FormFieldWrapper from "./FormFieldWrapper";
import type { BaseFormFieldProps } from "@/types";

interface CustomOTPInputProps extends BaseFormFieldProps {
  maxLength?: number;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

/**
 * Renders an OTP (One-Time Password) input field, integrated with a wrapper for a consistent
 * form field layout. It allows users to input a multi-digit code with visual feedback.
 *
 * @param {CustomOTPInputProps} props - The props for the component.
 * @param {number} [props.maxLength=6] - The maximum number of digits for the OTP.
 * @param {string} [props.value] - The controlled value of the OTP input.
 * @param {(value: string) => void} [props.onChange] - Callback fired when the OTP value changes.
 * @param {boolean} [props.disabled] - If true, the OTP input will be disabled.
 * @param {string} [props.label] - The label displayed for the OTP input.
 * @param {string} [props.description] - A short description displayed below the label.
 * @param {string} [props.error] - An error message to display, indicating a validation error.
 * @param {string} [props.className] - Additional CSS classes to apply to the component.
 */
const CustomOTPInput = ({
  maxLength = 6,
  value,
  onChange,
  disabled,
  label,
  error,
  hint,
  showHint,
  description,
  required,
  className,
}: CustomOTPInputProps) => {
  return (
    <FormFieldWrapper
      label={label}
      error={error}
      hint={hint}
      showHint={showHint}
      description={description}
      required={required}
      disabled={disabled}
      className={className}
    >
      {(id, describedBy) => (
        <div className="flex justify-center">
          <OTPInput
            id={id}
            value={value}
            onChange={onChange}
            disabled={disabled}
            maxLength={maxLength}
            containerClassName="flex items-center gap-3 has-[:disabled]:opacity-50"
            aria-describedby={describedBy}
            aria-invalid={!!error}
            render={({ slots }) => (
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  {slots.slice(0, 3).map((slot, idx) => (
                    <Slot key={idx} {...slot} hasError={!!error} />
                  ))}
                </div>
                <div className="w-2 h-px bg-border" />
                <div className="flex gap-2">
                  {slots.slice(3).map((slot, idx) => (
                    <Slot key={idx} {...slot} hasError={!!error} />
                  ))}
                </div>
              </div>
            )}
          />
        </div>
      )}
    </FormFieldWrapper>
  );
};

const Slot = memo(({ char, isActive, hasError }: SlotProps & { hasError: boolean }) => {
  return (
    <div
      className={cn(
        "relative flex size-14 items-center justify-center rounded-md border text-base font-medium transition-colors",
        "bg-background text-foreground",
        // Default state
        "border-input",
        // Active state
        isActive && "border-ring ring-2 ring-ring/20",
        // Error state
        hasError && "border-destructive",
        // Filled state
        char !== null && !hasError && "border-primary/60",
      )}
    >
      {char !== null ? (
        <span className="text-foreground">{char}</span>
      ) : (
        <span className="text-muted-foreground/40">•</span>
      )}
    </div>
  );
});
Slot.displayName = "Slot";

export default memo(CustomOTPInput);
