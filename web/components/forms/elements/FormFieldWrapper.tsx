"use client";

import { Label } from "@radix-ui/react-label";
import { memo, useId } from "react";
import { cn } from "@/lib/utils";
import { FormFieldWrapperProps } from "@/types";

/**
 * A wrapper component for form fields that provides consistent labeling, error display,
 * and accessibility attributes. It dynamically generates IDs and handles description
 * for associated input elements.
 *
 * @param {FormFieldWrapperProps} props - The props for the component.
 * @param {React.ReactNode} props.children - A render prop function that receives the generated `id` and `describedBy` attributes.
 * @param {string} [props.label] - The label text for the form field.
 * @param {string} [props.description] - A supplementary description for the field, displayed below the label.
 * @param {string} [props.error] - An error message to display, indicating a validation error.
 * @param {string} [props.hint] - A hint or instructional text for the field.
 * @param {boolean} [props.showHint] - If true, the hint text will be displayed.
 * @param {boolean} [props.required] - If true, an asterisk will be appended to the label to indicate a required field.
 * @param {boolean} [props.disabled] - If true, the label and description will appear visually disabled.
 * @param {string} [props.className] - Additional CSS classes to apply to the wrapper div.
 */
const FormFieldWrapper = ({
  label,
  error,
  hint,
  required,
  showHint,
  description,
  disabled,
  className,
  children,
}: FormFieldWrapperProps) => {
  const id = useId();
  const hasError = !!error;

  const describedBy = error ? `${id}-error` : hint && showHint ? `${id}-hint` : undefined;

  return (
    <div
      className={cn(
        "space-y-2 [--ring:var(--color-indigo-300)] *:not-first:mt-2 in-[.dark]:[--ring:var(--color-indigo-900)]",
        className,
      )}
    >
      {label && (
        <Label
          htmlFor={id}
          className={cn(
            "text-sm font-medium leading-none",
            hasError && "text-destructive",
            required && "after:content-['*'] after:ml-0.5 after:text-destructive",
            disabled && "opacity-50 cursor-not-allowed",
          )}
        >
          {label}
        </Label>
      )}

      {description && (
        <p className={cn("text-xs text-muted-foreground", disabled && "opacity-50")}>{description}</p>
      )}

      {children(id, describedBy)}

      {error && (
        <p id={`${id}-error`} className="text-xs text-destructive" role="alert" aria-live="polite">
          {error}
        </p>
      )}

      {hint && showHint && !error && (
        <p id={`${id}-hint`} className="text-xs text-muted-foreground">
          {hint}
        </p>
      )}
    </div>
  );
};

export default memo(FormFieldWrapper);
