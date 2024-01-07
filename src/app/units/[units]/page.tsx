import Image from "next/image";
import React from "react";

type Props = {};

const UnitPage = (props: Props) => {
  return (
    <div className="container mx-auto max-w-[1120px] xl:grid space-y-6 py-6 ">
      <h1 className="text-2xl font-semibold">
        Aura House 2bds Eco Bamboo House, Pool, River View
      </h1>

      <section className="grid grid-cols-2 gap-2 overflow-hidden rounded-xl">
        <div className="relative aspect-square w-full">
          <Image
            src="/gallery/main.webp"
            className="object-cover"
            alt="main"
            fill
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[0, 1, 2, 3].map((sub) => (
            <div key={sub} className="relative aspect-square w-full">
              <Image
                className="object-cover"
                src={`/gallery/sub-${sub}.webp`}
                alt="main"
                fill
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UnitPage;
