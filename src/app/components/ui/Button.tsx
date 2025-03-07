// src/components/ui/Button.tsx
import { cn } from "@/app/lib/utils";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  // Define base styles for the button
  const baseStyles = "py-2 md:px-6 md:py-4 font-bold rounded focus:outline-none transition";

  // Define variant-specific styles
  const variantStyles =
    variant === "primary"
      ? " hover:bg-blue-700 text-white "
      : "  hover:bg-gray-300 text-gray-800";

  return (
    <button className={cn(baseStyles, variantStyles, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
