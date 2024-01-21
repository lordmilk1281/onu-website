"use client";

import Link from "next/link";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

type Props = {};

const BookingUnitCard = (props: Props) => {
  return (
    <section className="sticky top-24 h-min rounded-lg bg-white p-4 shadow-lg ring-1 ring-zinc-300 sm:w-1/2">
      <p className="text-xl text-zinc-900">
        $800 <span className="text-sm">night</span>
      </p>
      <Link href="/units/unit/reserve">
        <PrimaryButton label="Reserve" className="mb-4 mt-8 w-full" />
      </Link>

      <p className="mb-4 text-center text-sm text-zinc-500">
        You won&apos;t be charged yet
      </p>
      <div className="flex items-center justify-between border-t border-zinc-200 pt-4 font-semibold text-zinc-900">
        <span className="">Total before taxes</span>
        <span>$9,879</span>
      </div>
    </section>
  );
};

export default BookingUnitCard;
