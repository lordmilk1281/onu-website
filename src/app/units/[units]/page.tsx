"use client";

import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import DialogModal from "@/app/components/globals/DialogModal";
import HouseIcon from "@/app/components/icons/HouseIcon";
import ImageIcon from "@/app/components/icons/ImageIcon";
import Container from "@/app/components/layouts/Container";
import Gallery from "@/app/components/unit/Gallery";
import ReservationView from "@/app/components/unit/ReservationView";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const UnitPage = (props: Props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openGallery, setOpenGallery] = useState(false);
  return (
    <>
      <Container className="space-y-6 py-12 xl:grid">
        <h1 className="text-3xl font-medium">
          Aura House 2bds Eco Bamboo House, Pool, River View
        </h1>

        <section className="relative grid gap-2 overflow-hidden rounded-xl sm:grid-cols-2">
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
          <button
            onClick={() => setOpenGallery(true)}
            className="absolute bottom-4 right-4 flex items-center gap-1 rounded-md border border-black bg-white px-3 py-1.5 text-sm font-medium"
          >
            <ImageIcon />
            Show all photos
          </button>
        </section>

        <div className="flex flex-col gap-16 sm:flex-row">
          <section className="w-full divide-y divide-zinc-200 border-b border-zinc-200">
            <div className="space-y-3 pb-6">
              <h3 className="text-2xl font-medium text-zinc-900">
                Private room in resort in Olhuveli, Maldives
              </h3>
              <p className="text-sm text-zinc-700">
                3 guests • 1 bedroom • 1 bed • 1 private bath
              </p>
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
              <button className="rounded-lg border border-zinc-900 px-6 py-2 text-sm font-medium focus:bg-zinc-100 text-slate-900">
                Show All 45 Amenities
              </button>
            </div>
          </section>

          <section className="sticky top-24 h-min rounded-lg bg-white p-4 shadow-lg ring-1 ring-zinc-300 sm:w-1/2">
            <p className="text-xl text-zinc-900">
              $800 <span className="text-sm">night</span>
            </p>
            <PrimaryButton
              onClick={() => setDrawerOpen(true)}
              label="Reserve"
              className="mb-4 mt-8 w-full"
            />

            <p className="mb-4 text-center text-sm text-zinc-500">
              You won&apos;t be charged yet
            </p>
            <div className="flex items-center justify-between border-t border-zinc-200 pt-4 font-semibold text-zinc-900">
              <span className="">Total before taxes</span>
              <span>$9,879</span>
            </div>
          </section>
        </div>
      </Container>
      <DialogModal onClose={() => setDrawerOpen(false)} open={drawerOpen}>
        <ReservationView />
      </DialogModal>

      <DialogModal className="p-0 bg-inherit" onClose={() => setOpenGallery(false)} open={openGallery}>
        <Gallery />
      </DialogModal>
    </>
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
