import HouseIcon from "@/app/components/icons/HouseIcon";
import ImageIcon from "@/app/components/icons/ImageIcon";
import Container from "@/app/components/layouts/Container";
import Image from "next/image";
import React from "react";

type Props = {};

const UnitPage = (props: Props) => {
  return (
    <Container className="space-y-6 py-6 xl:grid ">
      <h1 className="text-3xl font-medium">
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

      <div className="flex gap-16">
        <section className="w-full divide-y divide-gray-200 border-b border-gray-200">
          <div className="pb-6 text-gray-900">
            <h3 className="text-2xl font-medium">
              Private room in resort in Olhuveli, Maldives
            </h3>
            <p>3 guests • 1 bedroom • 1 bed • 1 private bath</p>
          </div>

          <div className="space-y-5 py-6">
            <FeatureItem
              icon={<HouseIcon />}
              title="Dedicated workspace"
              description="A room with the wifi that's well suited for working."
            />
            <FeatureItem
              icon={<HouseIcon />}
              title="Dedicated workspace"
              description="A room with the wifi that's well suited for working."
            />
            <FeatureItem
              icon={<HouseIcon />}
              title="Dedicated workspace"
              description="A room with the wifi that's well suited for working."
            />
          </div>

          <div className="space-y-4 py-6">
            <h3 className="text-xl font-medium">Where you'll sleep</h3>
            <div className="relative aspect-video w-60">
              <Image
                src="/gallery/bed.jpg"
                alt="bed"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-gray-700">Bedroom</p>
              <p className="text-sm text-gray-500">
                1 double bed, 1 single bed
              </p>
            </div>
          </div>

          <div className="space-y-4 py-6">
            <h3 className="text-xl font-medium">What this place offers</h3>
            <div className="space-y-3">
              <AmenityItem
                title="Ocean View"
                icon={<HouseIcon className="w-6 text-gray-700" />}
              />
              <AmenityItem
                title="Sea View"
                icon={<HouseIcon className="w-6 text-gray-700" />}
              />
              <AmenityItem
                title="Wifi"
                icon={<HouseIcon className="w-6 text-gray-700" />}
              />
              <AmenityItem
                title="Dedicated workspace"
                icon={<HouseIcon className="w-6 text-gray-700" />}
              />
            </div>
            <button className="rounded-lg border border-gray-900 font-medium px-6 py-2 text-sm">
              Show All 45 Amenities
            </button>
          </div>
        </section>

        <section className="sticky top-24 h-min w-1/2 space-y-4 rounded-lg bg-white p-4 shadow-lg ring-1 ring-gray-300">
          <p className="text-xl text-gray-900">
            $800 <span className="text-sm">night</span>
          </p>

          <button className="text-md w-full rounded-lg bg-cyan-500 py-3 font-medium text-white">
            Reserve
          </button>

          <p className="text-center text-sm text-gray-500">
            You won't be charged yet
          </p>
          <div className="flex items-center justify-between border-t border-gray-200 pt-4 font-semibold text-gray-900">
            <span className="">Total before taxes</span>
            <span>$9,879</span>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default UnitPage;

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureItem = ({ title, description, icon }: FeatureProps) => {
  return (
    <div className="flex items-center gap-8">
      {icon}
      <div>
        <p className="font-medium text-gray-700">{title}</p>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

type AmenityProps = {
  icon: React.ReactNode;
  title: string;
};

const AmenityItem = ({ title, icon }: AmenityProps) => {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <p className="text-gray-700">{title}</p>
    </div>
  );
};
