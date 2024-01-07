import React from "react";
import LocationIcon from "../icons/LocationIcon";
import UserMenu from "./UserMenu";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="border-b bg-white sticky top-0">
      <div className="container xl:max-w-7xl mx-auto hidden h-20 items-center justify-between bg-white sm:flex">
        <div className="flex items-center gap-x-1 text-cyan-500">
          <LocationIcon />
          <span className="text-xl font-bold ">onu</span>
        </div>

        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
