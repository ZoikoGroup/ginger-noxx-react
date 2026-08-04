import "./components/beverages.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import BeveragesHero from "./components/BeveragesHero";
import BeveragesTrustBar from "./components/BeveragesTrustBar";
import DecisionEngine from "./components/DecisionEngine";
import MostLovedProducts from "./components/MostLovedProducts";
import AllBeverages from "./components/AllBeverages";
import BeveragesWhy from "./components/BeveragesWhy";
import BeveragesReviews from "./components/BeveragesReviews";
import BeveragesCTA from "./components/BeveragesCTA";

export default function BeveragesPage() {
  return (
    <>
      <Header />

      <main>
        <BeveragesHero />
        <BeveragesTrustBar />
        <div id="decision-engine">
          <DecisionEngine />
        </div>
        <div id="most-loved-beverages">
          <MostLovedProducts />
        </div>
        <AllBeverages />
        <BeveragesWhy />
        <BeveragesReviews />
        <BeveragesCTA />
      </main>

      <Footer />
    </>
  );
}