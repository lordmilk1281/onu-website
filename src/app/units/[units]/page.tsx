import HouseIcon from "@/app/components/icons/HouseIcon";
import ImageIcon from "@/app/components/icons/ImageIcon";
import Container from "@/app/components/layouts/Container";
import BookingUnitCard from "@/app/components/unit/BookingUnitCard";
import Image from "next/image";
import React from "react";

type Props = {};

const UnitPage = (props: Props) => {
  return (
    <Container className="space-y-6 py-12 xl:grid">
      <h1 className="text-3xl font-medium">
        Aura House 2bds Eco Bamboo House, Pool, River View
      </h1>

      <section className="relative grid sm:grid-cols-2 gap-2 overflow-hidden rounded-xl">
        <div className="relative aspect-square w-full">
          <Image
            src="/gallery/main.webp"
            className="object-cover"
            alt="main"
            fill
          />
        </div>
        <div className="hidden grid-cols-2 gap-2 sm:grid">
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
        <button className="absolute bottom-4 right-4 hidden items-center gap-1 rounded-md border border-black bg-white px-3 py-1.5 text-sm font-medium sm:flex">
          <ImageIcon />
          Show all photos
        </button>
      </section>

      <div className="flex flex-col gap-16 sm:flex-row">
        <section className="w-full divide-y divide-zinc-200 border-b border-zinc-200">
          <div className="pb-6 text-zinc-900">
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
            <h3 className="text-xl font-medium">Where you&apos;ll sleep</h3>
            <div className="relative aspect-video w-full sm:w-60">
              <Image
                src="/gallery/bed.jpg"
                alt="bed"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-zinc-700">Bedroom</p>
              <p className="text-sm text-zinc-500">
                1 double bed, 1 single bed
              </p>
            </div>
          </div>

          <div className="space-y-4 py-6">
            <h3 className="text-xl font-medium">What this place offers</h3>
            <div className="space-y-3">
              <AmenityItem
                title="Ocean View"
                icon={<HouseIcon className="w-6 text-zinc-700" />}
              />
              <AmenityItem
                title="Sea View"
                icon={<HouseIcon className="w-6 text-zinc-700" />}
              />
              <AmenityItem
                title="Wifi"
                icon={<HouseIcon className="w-6 text-zinc-700" />}
              />
              <AmenityItem
                title="Dedicated workspace"
                icon={<HouseIcon className="w-6 text-zinc-700" />}
              />
            </div>
            <button className="rounded-lg border border-zinc-900 px-6 py-2 text-sm font-medium">
              Show All 45 Amenities
            </button>
          </div>
        </section>

        <BookingUnitCard />
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
        <p className="font-medium text-zinc-700">{title}</p>
        <p className="text-zinc-500">{description}</p>
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
      <p className="text-zinc-700">{title}</p>
    </div>
  );
};
