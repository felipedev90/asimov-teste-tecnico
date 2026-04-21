import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "accent";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-dark text-white hover:bg-black",
  secondary: "bg-white text-dark border border-dark hover:bg-dark hover:text-white",
  accent: "bg-primary text-dark hover:bg-dark hover:text-primary",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", fullWidth = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center",
          "px-9 py-5 rounded-xl",
          "text-body font-normal",
          "transition-colors duration-200",
          "cursor-pointer",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          // Variant styles
          variantStyles[variant],
          // Full width
          fullWidth && "w-full",
          // Custom overrides
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };