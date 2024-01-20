import { cn } from "@/utils";
import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const TextButton = ({ className, label, ...props }: Props) => (
  <button {...props} className={cn("absolute right-4 top-4 text-sm font-medium underline", className)}>
    {label}
  </button>
);
export default TextButton;
