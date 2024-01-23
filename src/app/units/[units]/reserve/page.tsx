"use client";

import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import TextButton from "@/app/components/buttons/TextButton";
import DialogModal from "@/app/components/globals/DialogModal";
import ChevronLeftIcon from "@/app/components/icons/ChevronLeftIcon";
import Container from "@/app/components/layouts/Container";
import ReservationCalendar from "@/app/components/unit/ReservationCalendar";
import GuestCount from "@/app/components/unit/GuestCount";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

const ReservationConfirmationPage = (props: Props) => {
  const router = useRouter();
  const [openGuests, setOpenGuests] = useState(false);
  const [openReservationDates, setOpenReservationDates] = useState(false);
  return (
    <>
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
              <TextButton
                label="Edit"
                className="static text-base"
                onClick={() => setOpenReservationDates(true)}
              />
            </div>
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col">
                <span className="font-medium">Guests</span>
                <span className="text-gray-500">1 guest</span>
              </div>
              <TextButton
                label="Edit"
                className="static text-base"
                onClick={() => setOpenGuests(true)}
              />
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

          {/* Warning  */}
          <section className="space-y-4 py-4">
            <p className="mt-5 text-xs">
              By selecting the button below, I agree to the{" "}
              <span className="font-medium underline">
                Ground rules for guests
              </span>
              ,{" "}
              <span className="font-medium underline">
                Onu&apos;s Rebooking and Refund Policy
              </span>
              , and that Onu can{" "}
              <span className="font-medium underline">
                charge my payment method
              </span>{" "}
              if I’m responsible for damage. I agree to pay the total amount
              shown if the Host accepts my booking request.
            </p>
            <PrimaryButton label="Request to book" />
          </section>
        </div>
      </Container>
      <DialogModal open={openGuests} onClose={() => setOpenGuests(false)}>
        <GuestCount />
      </DialogModal>

      <DialogModal
        open={openReservationDates}
        onClose={() => setOpenReservationDates(false)}
      >
        <ReservationCalendar />
      </DialogModal>
    </>
  );
};

export default ReservationConfirmationPage;
