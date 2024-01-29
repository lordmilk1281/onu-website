"use client";

import MinusCircleIcon from "../icons/MinusCircleIcon";
import PlusCircleIcon from "../icons/PlusCircleIcon";

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
        <p className="text-sm font-medium text-zinc-900">{title}</p>
        <p className="text-xs text-zinc-700">{description}</p>
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

export default Counter;
