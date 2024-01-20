"use client";

import { cn } from "@/utils";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import ThreeBarsIcon from "../icons/ThreeBarsIcon";
import UserCircleIcon from "../icons/UserCircleIcon";

type Props = {};

const UserMenu = (props: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="flex gap-2 rounded-full px-3.5 py-2 ring-1 ring-zinc-300 transition-shadow hover:shadow-md">
          <ThreeBarsIcon />
          <UserCircleIcon />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        sideOffset={10}
        align="end"
        className="w-60 bg-white shadow-lg ring-1 ring-zinc-100 rounded-lg z-50"
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
    <DropdownMenu.Item className={cn("px-4 py-2 hover:bg-zinc-100 rounded-md text-sm", className)}>
      {label}
    </DropdownMenu.Item>
  );
};
