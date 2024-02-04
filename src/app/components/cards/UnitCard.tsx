import Image from "next/image";
import Link from "next/link";
import React from "react";
import Gallery from "../unit/Gallery";

type Props = {
  imageUrls: string[];
};

const UnitCard = ({ imageUrls }: Props) => {
  return (
    <Link href="/units/page" className="space-y-1.5">
      <Gallery />
      <div>
        <div className="truncate text-base font-semibold text-zinc-900">
          Cupidatat Lorem excepteur
        </div>
        <div className="text-sm text-zinc-500">4,837 kilometers away</div>
        <div className="text-sm text-zinc-500">Mar 9 -14</div>
      </div>
    </Link>
  );
};

export default UnitCard;
