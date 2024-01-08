import React from "react";
import HouseIcon from "../icons/HouseIcon";
import BuildingIcon from "../icons/BuildingIcon";
import AnchorIcon from "../icons/AnchorIcon";

type Props = {};

const FilterTypes = (props: Props) => {
  return (
    <section className="sticky top-[81px] bg-white border-b border-gray-100">
      <div className="container mx-auto flex gap-10 xl:max-w-[1120px]">
        {unitTypes.map((unit) => (
          <div
            key={unit.id}
            className="group relative flex cursor-pointer flex-col items-center gap-1 py-4"
          >
            <span>{unit.icon}</span>
            <span className="text-sm">{unit.name}</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 w-full group-hover:bg-gray-900 " />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FilterTypes;

const unitTypes = [
  { id: "apartment", name: "Apartment", icon: <HouseIcon /> },
  { id: "hotel", name: "Hotel", icon: <BuildingIcon /> },
  { id: "safari", name: "Safari", icon: <AnchorIcon /> },
];
