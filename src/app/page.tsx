import UnitCard from "./components/cards/UnitCard";
import Container from "./components/layouts/Container";
import FilterTypes from "./components/listing/FilterTypes";

export default function Home() {
  return (
    <div className="mb-12 space-y-6">
      <FilterTypes />

      <Container className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image) => (
          <UnitCard key={image} imageUrl={`${image}`} />
        ))}
      </Container>
    </div>
  );
}

const images = [3, 2, 3, 4, 3, 2, 3, 4, 3, 2, 3, 4, 3, 2, 3, 4, 3];
