import Image from "next/image";
import React from "react";

type Props = {};

const UnitCard = (props: Props) => {
  return (
    <div className="space-y-1.5">
      <div className="relative w-full aspect-square">
        <Image alt="card" src="/sample-guest.jpg" fill className="object-cover rounded-xl -z-10" />
      </div>
      <div>
        <div className="font-semibold text-gray-900 truncate text-base">
          Cupidatat Lorem excepteur
        </div>
        <div className="text-gray-500 text-sm">4,837 kilometers away</div>
        <div className="text-gray-500 text-sm">Mar 9 -14</div>
      </div>
    </div>
  );
};

export default UnitCard;
