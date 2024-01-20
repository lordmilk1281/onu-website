import React from "react";
import LocationIcon from "../icons/LocationIcon";
import UserMenu from "./UserMenu";
import Link from "next/link";
import Container from "./Container";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-100 bg-white">
      <Container className="flex h-20 items-center justify-between bg-white xl:max-w-[1120px]">
        <Link href="/" className="flex items-center gap-x-1 text-cyan-500">
          <LocationIcon />
          <span className="text-xl font-bold ">onu</span>
        </Link>

        <UserMenu />
      </Container>
    </nav>
  );
};

export default Navbar;
