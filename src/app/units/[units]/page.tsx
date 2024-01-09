import ImageIcon from "@/app/components/icons/ImageIcon";
import Image from "next/image";
import React from "react";

type Props = {};

const UnitPage = (props: Props) => {
  return (
    <div className="container mx-auto max-w-[1120px] space-y-6 py-6 xl:grid ">
      <h1 className="text-3xl font-semibold">
        Aura House 2bds Eco Bamboo House, Pool, River View
      </h1>

      <section className="relative grid grid-cols-2 gap-2 overflow-hidden rounded-xl">
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
        <button className="absolute bottom-4 right-4 flex items-center gap-1 rounded-md border border-black bg-white px-3 py-1.5 text-sm font-medium">
          <ImageIcon />
          Show all photos
        </button>
      </section>

      <div className="flex gap-3">
        <section className="w-full">
          <div>
            <h3 className="text-2xl font-semibold">
              Private room in resort in Olhuveli, Maldives
            </h3>
            <p>3 guests • 1 bedroom • 1 bed • 1 private bath</p>
          </div>
        </section>

        <section className="sticky top-40 w-[45%] space-y-4 rounded-lg bg-white p-4 shadow-lg ring-1 ring-gray-300">
          <p className="text-xl text-gray-900">
            $800 <span className="text-sm">night</span>
          </p>

          <button className="text-md bg-cyan-500 py-3 font-medium text-white w-full rounded-lg">
            Reserve
          </button>
        </section>
      </div>
    </div>
  );
};

export default UnitPage;
