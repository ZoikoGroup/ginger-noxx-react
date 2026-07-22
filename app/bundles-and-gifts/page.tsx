import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import BundlesHero from "@/components/bundles-and-gifts/BundlesHero";
import NeedGiftFast from "@/components/bundles-and-gifts/NeedGiftFast";
import AllBundles from "@/components/bundles-and-gifts/AllBundles";
import BuildYourOwn from "@/components/bundles-and-gifts/BuildYourOwn";
import WhyBundles from "@/components/bundles-and-gifts/WhyBundles";
import CustomerReviews from "@/components/bundles-and-gifts/CustomerReviews";
import BundlesCTA from "@/components/bundles-and-gifts/BundlesCTA";

export const metadata = {
  title: "Bundles & Gifts | GingerNoxx",
  description:
    "Thoughtfully curated ginger experiences — ready to give or enjoy. Explore our top gifted packs and build your own custom box.",
};

export default function BundlesAndGiftsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col w-full bg-orange-50">
        <BundlesHero />
        <div id="need-fast" className="w-full">
          <NeedGiftFast />
        </div>
        <div id="all-bundles" className="w-full">
          <AllBundles />
        </div>
        <BuildYourOwn />
        <WhyBundles />
        <CustomerReviews />
        <BundlesCTA />
      </main>
      <Footer />
    </>
  );
}
