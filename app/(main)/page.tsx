import { Hero } from "./_components/hero";
import { Categories } from "./_components/categories";
import { NewArrivals } from "./_components/new-arrivals";
import { Features } from "./_components/features";
import { Recommendation } from "./_components/recommendation";
import { Articles } from "./_components/articles";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <NewArrivals />
      <Features />
      <Recommendation />
      <Articles />
    </main>
  );
}