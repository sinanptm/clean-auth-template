import { Input } from "@/components/ui/input";
import FormFieldWrapper from "./FormFieldWrapper";
import { memo, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { BaseFormFieldProps } from "@/types";

interface CustomInputProps extends BaseFormFieldProps, React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Renders a standard input field, integrated with a wrapper for a consistent
 * form field layout. It also includes a visibility toggle for password fields.
 *
 * @param {CustomInputProps} props - The props for the component.
 * @param {string} [props.type="text"] - The type of the input (e.g., "text", "password", "email").
 * @param {string} [props.label] - The label displayed for the input.
 * @param {string} [props.description] - A short description displayed below the label.
 * @param {string} [props.error] - An error message to display, indicating a validation error.
 * @param {boolean} [props.disabled] - If true, the input will be disabled.
 * @param {string} [props.className] - Additional CSS classes to apply to the input.
 */
const CustomInput = ({ type, ...props }: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  // eslint-disable-next-line
  const { error, showHint, ...inputProps } = props;
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <FormFieldWrapper {...props}>
      {(id, describedBy) => (
        <div className="relative">
          <Input
            id={id}
            type={inputType}
            className={cn(
              props.error && "border-destructive focus-visible:ring-destructive",
              isPassword && "pr-10",
              props.className,
            )}
            aria-describedby={describedBy}
            aria-invalid={!!props.error}
            {...inputProps}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
            </button>
          )}
        </div>
      )}
    </FormFieldWrapper>
  );
};

export default memo(CustomInput);
