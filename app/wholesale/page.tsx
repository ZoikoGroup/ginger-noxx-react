import "@/app/wholesale/components/wholesale.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import WholesaleHero from "@/app/wholesale/components/WholesaleHero";
import WholesaleCategory from "@/app/wholesale/components/WholesaleCategory";
import WholesaleProductCategories from "@/app/wholesale/components/WholesaleProductCategories";
import WholesaleGlobalReach from "@/app/wholesale/components/WholesaleGlobalReach";
import WholesaleCertifications from "@/app/wholesale/components/WholesaleCertifications";
import WholesaleCTA from "@/app/wholesale/components/WholesaleCTA";
import WholesaleFAQ from "@/app/wholesale/components/WholesaleFAQ";
import WholesaleFinalCTA from "@/app/wholesale/components/WholesaleFinalCTA";

export default function BestSellersPage() {
  return (
    <>
      <Header />

      <WholesaleHero />
      <WholesaleCategory />
      <WholesaleProductCategories />
      <WholesaleGlobalReach />
      <WholesaleCertifications />
      <WholesaleCTA />
      <WholesaleFAQ />
      <WholesaleFinalCTA />

      <Footer />
    </>
  );
}
