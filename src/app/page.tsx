import UnitCard from "./components/cards/UnitCard";
import FilterTypes from "./components/listing/FilterTypes";

export default function Home() {
  return (
    <div className="mb-6 space-y-6">
      <FilterTypes />

      <section className="container mx-auto grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:max-w-[1120px]">
        <UnitCard />
        <UnitCard />
        <UnitCard />
        <UnitCard />
        <UnitCard />
        <UnitCard />
        <UnitCard />
        <UnitCard />
        <UnitCard />
        <UnitCard />
        <UnitCard />
      </section>
    </div>
  );
}
