import UnitCard from "./components/cards/UnitCard";

export default function Home() {
  return (
    <div className="mb-6 space-y-6">
      <section className="sticky top-[81px] bg-white shadow-md">
        <div className="container mx-auto xl:max-w-7xl flex gap-10">
          {unitTypes.map((unit) => (
            <div key={unit.id} className="group relative cursor-pointer py-4">
              <span className="text-sm">{unit.name}</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 w-full group-hover:bg-gray-900 " />
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto xl:max-w-7xl grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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

const unitTypes = [
  { id: "apartment", name: "Apartment", icon: <></> },
  { id: "hotel", name: "Hotel", icon: <></> },
  { id: "safari", name: "Safari", icon: <></> },
];
