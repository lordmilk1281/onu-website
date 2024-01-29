"use client";

import { useState } from "react";
import AnchorIcon from "../icons/AnchorIcon";
import BuildingIcon from "../icons/BuildingIcon";
import HouseIcon from "../icons/HouseIcon";
import Container from "../layouts/Container";

type Props = {};

const FilterTypes = (props: Props) => {
  const [selectedFilter, setSelectedFilter] = useState("apartment");
  return (
    <section className="sticky top-[81px] border-b border-zinc-100 bg-white">
      <Container className="flex gap-8 justify-between sm:justify-normal">
        {unitTypes.map((unit) => (
          <FilterItem
            key={unit.id}
            {...unit}
            isSelected={selectedFilter === unit.id}
            onClick={() => setSelectedFilter(unit.id)}
          />
        ))}
      </Container>
    </section>
  );
};

export default FilterTypes;

type FilterItemProps = {
  onClick: () => void;
  icon: React.ReactNode;
  name: string;
  isSelected: boolean;
};

const FilterItem = ({ onClick, icon, name, isSelected }: FilterItemProps) => {
  return (
    <li
      onClick={onClick}
      className="group relative flex cursor-pointer flex-col items-center gap-1 py-3"
    >
      <span className={isSelected ? "text-black" : "text-zinc-500"}>
        {icon}
      </span>
      <span className="text-sm">{name}</span>
      <span
        className={`absolute inset-x-0 -bottom-[1px] h-0.5 w-full ${
          isSelected ? "bg-zinc-900" : "group-hover:bg-zinc-300"
        }`}
      />
    </li>
  );
};

const unitTypes = [
  { id: "apartment", name: "Apartment", icon: <HouseIcon /> },
  { id: "hotel", name: "Hotel", icon: <BuildingIcon /> },
  { id: "safari", name: "Safari", icon: <AnchorIcon /> },
];
