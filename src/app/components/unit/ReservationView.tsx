import { useState } from "react";
import { DateRange } from "react-day-picker";
import PrimaryButton from "../buttons/PrimaryButton";
import Calendar from "../globals/Calendar";
import Counter from "./Counter";

type Props = {};

const ReservationView = (props: Props) => {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();
  const [adultsCount, setAdultsCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);

  return (
    <div className="sm:max-w-lg">
      <h1 className="text-3xl font-semibold text-zinc-900">Request to book</h1>
      <div className="max-w-md divide-y divide-gray-300">
        {/* Your trip */}
        <section className="space-y-4 py-5">
          <h3 className="text-xl font-medium">Your trip</h3>

          {/* Dates */}
          <div className="space-y-4">
            <div>
              <span className="block font-medium">Dates</span>
              <span className="block text-sm text-gray-500">
                Feb 26 - Mar 2
              </span>
            </div>
            <Calendar range={selectedRange} onChange={setSelectedRange} />
          </div>

          {/* Guests */}
          <div className="space-y-4">
            <div>
              <span className="block font-medium">Guests</span>
              <span className="block text-sm text-gray-500">
                {adultsCount + childrenCount + infantCount} guest
              </span>
            </div>
            <Counter
              title="Adults"
              description="Age 13+"
              value={adultsCount}
              onChange={setAdultsCount}
            />
            <Counter
              title="Children"
              description="Ages 2–12"
              value={childrenCount}
              onChange={setChildrenCount}
            />
            <Counter
              title="Infants"
              description="Under 2"
              value={infantCount}
              onChange={setInfantCount}
            />
          </div>
        </section>

        {/* Payment Details */}
        <section className="space-y-4 py-5">
          <h3 className="text-xl font-medium">Payment Details</h3>
          <div className="viber divide-y divide-gray-300 rounded-lg border border-gray-300">
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
            if I’m responsible for damage. I agree to pay the total amount shown
            if the Host accepts my booking request.
          </p>
          <PrimaryButton label="Request to book" className="w-full sm:w-auto" />
        </section>
      </div>
    </div>
  );
};

export default ReservationView;
