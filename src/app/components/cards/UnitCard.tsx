import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  imageUrl: string
};

const UnitCard = ({ imageUrl }: Props) => {
  return (
    <Link href="/units/page" className="space-y-1.5">
      <div className="relative w-full aspect-square">
        <Image alt="card" src={`/${imageUrl}.jpg`} fill className="object-cover rounded-xl -z-10" />
      </div>
      <div>
        <div className="font-semibold text-zinc-900 truncate text-base">
          Cupidatat Lorem excepteur
        </div>
        <div className="text-zinc-500 text-sm">4,837 kilometers away</div>
        <div className="text-zinc-500 text-sm">Mar 9 -14</div>
      </div>
    </Link>
  );
};

export default UnitCard;
