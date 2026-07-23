import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import BundlesHero from "@/app/bundles-and-gifts/components/BundlesHero";
import NeedGiftFast from "@/app/bundles-and-gifts/components/NeedGiftFast";
import AllBundles from "@/app/bundles-and-gifts/components/AllBundles";
import BuildYourOwn from "@/app/bundles-and-gifts/components/BuildYourOwn";
import WhyBundles from "@/app/bundles-and-gifts/components/WhyBundles";
import CustomerReviews from "@/app/bundles-and-gifts/components/CustomerReviews";
import BundlesCTA from "@/app/bundles-and-gifts/components/BundlesCTA";

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
