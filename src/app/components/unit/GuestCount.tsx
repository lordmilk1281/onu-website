"use client";

import { useState } from "react";
import MinusCircleIcon from "../icons/MinusCircleIcon";
import PlusCircleIcon from "../icons/PlusCircleIcon";
import PrimaryButton from "../buttons/PrimaryButton";
import TextButton from "../buttons/TextButton";

type Props = {};

const GuestCount = (props: Props) => {
  const [adultsCount, setAdultsCount] = useState(0);
  return (
    <div className="mt-4 w-[90vw] max-w-sm space-y-4">
      <h2 className="text-xl font-semibold text-zinc-900">Guests</h2>
      <Counter
        title="Adults"
        description="Age 13+"
        value={adultsCount}
        onChange={setAdultsCount}
      />
      <Counter
        title="Children"
        description="Ages 2–12"
        value={adultsCount}
        onChange={setAdultsCount}
      />
      <Counter
        title="Infants"
        description="Under 2"
        value={adultsCount}
        onChange={setAdultsCount}
      />
      <div className="flex items-center justify-between border-t border-zinc-300 py-4">
        <TextButton label="Cancel" className="static text-lg" />
        <PrimaryButton label="Confirm" className="py-3" />
      </div>
    </div>
  );
};

export default GuestCount;

type CounterProps = {
  value: number;
  title: string;
  description: string;
  onChange: (value: number) => void;
};

const Counter = ({ title, description, value, onChange }: CounterProps) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium text-zinc-900">{title}</p>
        <p className="text-sm text-zinc-700">{description}</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => onChange(value === 0 ? 0 : value - 1)}
          className="text-zinc-500 hover:text-zinc-700 disabled:text-zinc-300"
          disabled={value === 0}
        >
          <MinusCircleIcon />
        </button>
        <span className="my-auto block text-center">{value}</span>
        <button
          onClick={() => onChange(value + 1)}
          className="text-zinc-500 hover:text-zinc-700"
        >
          <PlusCircleIcon />
        </button>
      </div>
    </div>
  );
};
