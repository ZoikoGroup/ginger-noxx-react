import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import SnacksHero from "@/components/snacks/SnacksHero";
import ShopByCraving from "@/components/snacks/ShopByCraving";
import MostLovedSnacks from "@/components/snacks/MostLovedSnacks";
import SnacksThatDoMore from "@/components/snacks/SnacksThatDoMore";
import SnacksReviews from "@/components/snacks/SnacksReviews";
import SnacksCTA from "@/components/snacks/SnacksCTA";

export const metadata = {
  title: "Ginger Snacks | GingerNoxx",
  description:
    "Sweet, spicy, and everything in between — snacks made better with real ginger. Explore energy chews, fire bites, granola clusters, and dark chocolate bark.",
};

export default function SnacksPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col w-full bg-orange-50">
        <SnacksHero />
        <div id="shop-craving" className="w-full">
          <ShopByCraving />
        </div>
        <MostLovedSnacks />
        <SnacksThatDoMore />
        <SnacksReviews />
        <div id="build-box" className="w-full">
          <SnacksCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
