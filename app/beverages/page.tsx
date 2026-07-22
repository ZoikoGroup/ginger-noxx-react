import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import BeveragesHero from "@/components/beverages/BeveragesHero";
import BeveragesTrustBar from "@/components/beverages/BeveragesTrustBar";
import DecisionEngine from "@/components/beverages/DecisionEngine";
import MostLovedBeverages from "@/components/beverages/MostLovedBeverages";
import AllGingerBeverages from "@/components/beverages/AllGingerBeverages";
import WhyGingerNoxx from "@/components/beverages/WhyGingerNoxx";
import BeveragesReviews from "@/components/beverages/BeveragesReviews";
import BeveragesCTA from "@/components/beverages/BeveragesCTA";

export const metadata = {
  title: "Ginger Beverages | GingerNoxx",
  description:
    "Refreshment, energy, and daily wellness powered by real ginger. Discover sparkling infusions, concentrated shots, botanical iced teas, and wellness blends.",
};

export default function BeveragesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col w-full bg-orange-50">
        <BeveragesHero />
        <BeveragesTrustBar />
        <div id="decision-engine" className="w-full">
          <DecisionEngine />
        </div>
        <MostLovedBeverages />
        <AllGingerBeverages />
        <WhyGingerNoxx />
        <BeveragesReviews />
        <BeveragesCTA />
      </main>
      <Footer />
    </>
  );
}
