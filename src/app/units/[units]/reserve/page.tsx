"use client";

import TextButton from "@/app/components/buttons/TextButton";
import ChevronLeftIcon from "@/app/components/icons/ChevronLeftIcon";
import Container from "@/app/components/layouts/Container";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const ReversePage = (props: Props) => {
  const router = useRouter();
  return (
    <Container className="my-12 space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => router.back()}>
          <ChevronLeftIcon />
        </button>
        <h1 className="text-3xl font-semibold text-zinc-900">
          Request to book
        </h1>
      </div>
      <div className="max-w-md divide-y divide-gray-300">
        {/* Your trip */}
        <section className="space-y-4 py-4">
          <h3 className="text-xl font-medium">Your trip</h3>
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col">
              <span className="font-medium">Dates</span>
              <span className="text-gray-500">Feb 26 - Mar 2</span>
            </div>
            <TextButton label="Edit" className="static text-base" />
          </div>
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col">
              <span className="font-medium">Guests</span>
              <span className="text-gray-500">1 guest</span>
            </div>
            <TextButton label="Edit" className="static text-base" />
          </div>
        </section>

        {/* Choose how to pay */}
        <section className="space-y-4 py-4">
          <h3 className="text-xl font-medium">Choose how to pay</h3>
          <div className="viber divide-y divide-gray-300 rounded-lg border border-gray-300">
            <div className="z-10 rounded-tl-md rounded-tr-md border-2 border-black p-4">
              <span className="font-medium">Pay in full</span>
              <span className="block">Pay the total ($3, 198.90).</span>
            </div>
            <div className="p-4">
              <span className="font-medium">Pay in full</span>
              <span className="block">Pay the total ($3, 198.90).</span>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default ReversePage;
