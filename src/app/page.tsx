"use client"

import UnitCard from "./components/cards/UnitCard";
import Container from "./components/layouts/Container";
import FilterTypes from "./components/listing/FilterTypes";

export default function Home() {
  return (
    <div className="mb-12 space-y-6">
      <FilterTypes />

      <Container className="xl:max-w-[90vw] grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5">
        {units.map((unit, index) => (
          <UnitCard key={index} {...unit} />
        ))}
      </Container>
    </div>
  );
}

const units = [
  {
    imageUrls: ["3", "2", "3", "4"],
  },
  {
    imageUrls: ["3", "2", "3", "4"],
  },
  {
    imageUrls: ["3", "2", "3", "4"],
  },
  {
    imageUrls: ["3", "2", "3", "4"],
  },
  {
    imageUrls: ["3", "2", "3", "4"],
  },
  {
    imageUrls: ["3", "2", "3", "4"],
  },
  {
    imageUrls: ["3", "2", "3", "4"],
  },
  {
    imageUrls: ["3", "2", "3", "4"],
  },
];
