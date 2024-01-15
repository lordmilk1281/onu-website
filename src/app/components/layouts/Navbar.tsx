import React from "react";
import LocationIcon from "../icons/LocationIcon";
import UserMenu from "./UserMenu";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="sticky top-0 border-b border-gray-100 bg-white z-50">
      <div className="container mx-auto hidden h-20 items-center justify-between bg-white sm:flex xl:max-w-[1120px]">
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
