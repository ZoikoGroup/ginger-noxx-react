import Header from "@/components/Header";
import Footer from "@/components/Footer";

import SnacksHero from "@/app/snacks/components/SnacksHero";
import ShopByCraving from "./components/ShopByCraving";
import MostLovedSnacks from "./components/MostLovedSnacks";
import SnacksThatDoMore from "./components/SnacksThatDoMore";
import SnacksReviews from "./components/SnacksReviews";
import SnacksCTA from "./components/SnacksCTA";

export const metadata = {
  title: "Ginger Snacks | GingerNoxx",
  description:
    "Sweet, spicy, and everything in between — snacks made better with real ginger. Explore energy chews, fire bites, granola clusters, and dark chocolate bark.",
};

export default function SnacksPage() {
  return (
    <>
      <Header />

      <main>
        <SnacksHero />
        <div id="shop-by-craving">
          <ShopByCraving />
        </div>
        <div id="most-loved-snacks">
          <MostLovedSnacks />
        </div>
        <SnacksThatDoMore />
        <SnacksReviews />
        <SnacksCTA />
      </main>

      <Footer />
    </>
  );
}