import React from "react";
import LocationIcon from "../icons/LocationIcon";
import UserMenu from "./UserMenu";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="border-b bg-white sticky top-0">
      <div className="container xl:max-w-[1120px] mx-auto hidden h-20 items-center justify-between bg-white sm:flex">
        <Link href="/     " className="flex items-center gap-x-1 text-cyan-500">
          <LocationIcon />
          <span className="text-xl font-bold ">onu</span>
        </Link>

        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
