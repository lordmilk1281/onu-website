"use client";

import { cn } from "@/utils";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import ThreeBarsIcon from "../icons/ThreeBarsIcon";
import UserCircleIcon from "../icons/UserCircleIcon";

type Props = {};

const UserMenu = (props: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex gap-2 rounded-full px-3.5 py-2 ring-1 ring-zinc-300 transition-shadow hover:shadow-md focus:outline-none">
        <ThreeBarsIcon />
        <UserCircleIcon />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        sideOffset={10}
        align="end"
        className="z-50 w-60 rounded-lg bg-white shadow-lg ring-1 ring-zinc-100"
      >
        <Item label="Sign up" className="font-medium" />
        <Item label="Login" />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default UserMenu;

type ItemProps = {
  label: string;
  className?: string;
};

const Item = ({ label, className = "" }: ItemProps) => {
  return (
    <DropdownMenu.Item
      className={cn(
        "rounded-md px-4 py-2 text-sm hover:bg-zinc-100 cursor-pointer",
        className,
      )}
    >
      {label}
    </DropdownMenu.Item>
  );
};
