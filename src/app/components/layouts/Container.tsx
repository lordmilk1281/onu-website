import { cn } from "@/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => (
  <div
    className={cn(
      "container mx-auto px-4 sm:px-0 xl:max-w-[1120px]",
      className,
    )}
  >
    {children}
  </div>
);

export default Container;
