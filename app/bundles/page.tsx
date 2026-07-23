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

export default function BundlesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col w-full bg-[#FAF3EA] font-['Poppins']">
        <BundlesHero />
        <NeedGiftFast />
        <AllBundles />
        <BuildYourOwn />
        <WhyBundles />
        <CustomerReviews />
        <BundlesCTA />
      </main>
      <Footer />
    </>
  );
}
