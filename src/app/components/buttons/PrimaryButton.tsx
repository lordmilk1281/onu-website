import { cn } from "@/utils";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const PrimaryButton = ({ className, label, ...props }: Props) => {
  return (
    <button
      className={cn(
        "text-md rounded-lg bg-cyan-600 py-4 px-6 font-medium text-white",
        className,
      )}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
