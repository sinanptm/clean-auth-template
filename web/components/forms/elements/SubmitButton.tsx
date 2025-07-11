import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubmitButtonProps {
  isLoading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "button" | "reset";
  className?: string;
  // eslint-disable-next-line
  [key: string]: any;
}

/**
 * Renders a submit button that can display a loading spinner and be disabled.
 *
 * @param {SubmitButtonProps} props - The props for the component.
 * @param {boolean} [props.isLoading=false] - If true, a loading spinner is shown and the button is disabled.
 * @param {boolean} [props.disabled=false] - If true, the button is disabled.
 * @param {React.ReactNode} [props.children="Submit"] - The content to display inside the button.
 * @param {(event: React.MouseEvent<HTMLButtonElement>) => void} [props.onClick] - Callback fired when the button is clicked.
 * @param {"submit" | "button" | "reset"} [props.type="submit"] - The type of the button.
 * @param {string} [props.className] - Additional CSS classes to apply to the button.
 */
const SubmitButton = ({
  isLoading = false,
  disabled = false,
  children = "Submit",
  onClick,
  type = "submit",
  className,
  ...props
}: SubmitButtonProps) => {
  return (
    <Button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={cn("cursor-pointer", className)}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin " />}
      {children}
    </Button>
  );
};

export default memo(SubmitButton);
