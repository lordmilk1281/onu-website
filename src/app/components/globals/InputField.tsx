import { cn } from "@/utils";
import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const InputField = ({ className, ...props }: Props) => {
  return (
    <input
      {...props}
      className={cn("w-full rounded-lg border border-zinc-300 p-4", className)}
    />
  );
};

export default InputField;
