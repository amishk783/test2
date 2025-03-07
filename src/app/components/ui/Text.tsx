// src/components/ui/Text.tsx
import { cn } from "@/app/lib/utils";
import React from "react";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "heading" | "subheading" | "body" | "caption";
  as?: React.ElementType;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  variant = "body",
  as: Component = "p",
  className = "",
  children,

  ...props
}) => {
  let variantStyles = "";

  switch (variant) {
    case "heading":
      variantStyles = `text-4xl font-bold `;
      break;
    case "subheading":
      variantStyles = `text-2xl font-semibold `;
      break;
    case "body":
      variantStyles = `text-base `;
      break;
    case "caption":
      variantStyles = `text-sm text-gray-600 `;
      break;
    default:
      variantStyles = `text-base `;
      break;
  }

  return (
    <Component className={cn(variantStyles, className)} {...props}>
      {children}
    </Component>
  );
};

export default Text;
