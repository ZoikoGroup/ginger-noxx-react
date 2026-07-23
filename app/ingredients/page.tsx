import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import IngredientsHero from "@/app/ingredients/components/IngredientsHero";
import CookThisTonight from "@/app/ingredients/components/CookThisTonight";
import FlavourProfile from "@/app/ingredients/components/FlavourProfile";
import MostUsedKitchen from "@/app/ingredients/components/MostUsedKitchen";
import RealKitchensReviews from "@/app/ingredients/components/RealKitchensReviews";
import IngredientsCTA from "@/app/ingredients/components/IngredientsCTA";

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
