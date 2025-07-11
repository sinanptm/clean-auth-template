import { memo } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import FormFieldWrapper from "./FormFieldWrapper";
import { BaseFormFieldProps } from "@/types";

interface CustomTextAreaProps extends BaseFormFieldProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  resize?: boolean;
}

/**
 * Renders a textarea input, integrated with a wrapper for a consistent
 * form field layout. It supports optional resizing.
 *
 * @param {CustomTextAreaProps} props - The props for the component.
 * @param {boolean} [props.resize=true] - If true, the textarea will be resizable by the user.
 * @param {string} [props.label] - The label displayed for the textarea.
 * @param {string} [props.description] - A short description displayed below the label.
 * @param {string} [props.error] - An error message to display, indicating a validation error.
 * @param {boolean} [props.disabled] - If true, the textarea will be disabled.
 * @param {string} [props.className] - Additional CSS classes to apply to the textarea.
 */
const CustomTextArea = ({ resize = true, ...props }: CustomTextAreaProps) => {
  // eslint-disable-next-line
  const { error, showHint, ...textAreaProps } = props;
  return (
    <FormFieldWrapper {...props}>
      {(id, describedBy) => (
        <Textarea
          id={id}
          className={cn(!resize && "resize-none", props.error && "border-destructive", props.className)}
          aria-describedby={describedBy}
          aria-invalid={!!props.error}
          {...textAreaProps}
        />
      )}
    </FormFieldWrapper>
  );
};

export default memo(CustomTextArea);
