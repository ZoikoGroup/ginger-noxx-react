import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import IngredientsHero from "@/components/ingredients/IngredientsHero";
import CookThisTonight from "@/components/ingredients/CookThisTonight";
import FlavourProfile from "@/components/ingredients/FlavourProfile";
import MostUsedKitchen from "@/components/ingredients/MostUsedKitchen";
import RealKitchensReviews from "@/components/ingredients/RealKitchensReviews";
import IngredientsCTA from "@/components/ingredients/IngredientsCTA";

export const metadata = {
  title: "Ginger Ingredients | GingerNoxx",
  description:
    "Bring bold flavour, warmth, and depth to every dish with real ginger. Discover our kitchen essentials, pastes, spice blends, and seasonings.",
};

export default function IngredientsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col w-full bg-orange-50">
        <IngredientsHero />
        <div id="cook-tonight" className="w-full">
          <CookThisTonight />
        </div>
        <FlavourProfile />
        <MostUsedKitchen />
        <RealKitchensReviews />
        <IngredientsCTA />
      </main>
      <Footer />
    </>
  );
}
