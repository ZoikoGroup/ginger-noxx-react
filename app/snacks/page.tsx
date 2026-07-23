import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import SnacksHero from "@/app/snacks/components/SnacksHero";
import ShopByCraving from "@/app/snacks/components/ShopByCraving";
import MostLovedSnacks from "@/app/snacks/components/MostLovedSnacks";
import SnacksThatDoMore from "@/app/snacks/components/SnacksThatDoMore";
import SnacksReviews from "@/app/snacks/components/SnacksReviews";
import SnacksCTA from "@/app/snacks/components/SnacksCTA";

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
