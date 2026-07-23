import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import BeveragesHero from "@/app/beverages/components/BeveragesHero";
import BeveragesTrustBar from "@/app/beverages/components/BeveragesTrustBar";
import DecisionEngine from "@/app/beverages/components/DecisionEngine";
import MostLovedBeverages from "@/app/beverages/components/MostLovedBeverages";
import AllGingerBeverages from "@/app/beverages/components/AllGingerBeverages";
import WhyGingerNoxx from "@/app/beverages/components/WhyGingerNoxx";
import BeveragesReviews from "@/app/beverages/components/BeveragesReviews";
import BeveragesCTA from "@/app/beverages/components/BeveragesCTA";

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
