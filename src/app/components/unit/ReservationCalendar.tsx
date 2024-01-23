"use strict";

import { useState } from "react";
import Calendar from "../globals/Calendar";
import XIcon from "../icons/XIcon";
import { DateRange } from "react-day-picker";

type Props = {};

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const ReservationCalendar = (props: Props) => {
  const [value, onChange] = useState<Value>(new Date());
  const [selectedDate, setSelectedDate] = useState("start-date");
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();
  return (
    <div className="mt-4 w-[90vw] max-w-sm space-y-4">
      <div>
        <h3 className="text-xl font-medium text-zinc-900">5 nights</h3>
        <p className="text-zinc-500">6 beds . 5 baths</p>
      </div>
      <div className="inline-flex rounded-lg border border-zinc-300">
        <SelectDate
          label="check in"
          isSelected={selectedDate === "start-date"}
          onClick={() => setSelectedDate("start-date")}
        />
        <SelectDate
          label="check out"
          isSelected={selectedDate === "end-date"}
          onClick={() => setSelectedDate("end-date")}
        />
      </div>
      <Calendar range={selectedRange} onChange={setSelectedRange} />
    </div>
  );
};

export default ReservationCalendar;

type SelectedDateProps = {
  isSelected: boolean;
  label: string;
  onClick: () => void;
};

const SelectDate = ({ isSelected, label, onClick }: SelectedDateProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex justify-between p-3 ${
        isSelected ? "rounded-lg ring-2 ring-black" : ""
      }`}
    >
      <div className="flex flex-col">
        <span className="text-xs font-medium uppercase text-zinc-900">
          {label}
        </span>
        <input
          className="w-32 rounded-md text-sm uppercase focus-visible:outline-none"
          placeholder="MM/DD/YYYY"
          type="text"
        />
      </div>
      <button className="mr-2">
        <XIcon className="h-4 w-4" />
      </button>
    </div>
  );
};
