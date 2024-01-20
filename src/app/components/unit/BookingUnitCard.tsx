"use client";

import Link from "next/link";
import React from "react";

type Props = {};

const BookingUnitCard = (props: Props) => {
  return (
    <section className="sticky top-24 h-min rounded-lg bg-white p-4 shadow-lg ring-1 ring-zinc-300 sm:w-1/2">
      <p className="text-xl text-zinc-900">
        $800 <span className="text-sm">night</span>
      </p>
      <Link href="/units/unit/reserve">
        <button className="text-md w-full rounded-lg bg-cyan-600 py-3 font-medium text-white mt-8 mb-4">
          Reserve
        </button>
      </Link>

      <p className="text-center text-sm text-zinc-500 mb-4">
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
