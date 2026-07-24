import "@/app/best-sellers/components/bestsellers.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import BestSellersHero from "@/app/best-sellers/components/BestSellersHero";
import BestSellersFeatures from "@/app/best-sellers/components/BestSellersFeatures";
import BestSellersProduct from "@/app/best-sellers/components/BestSellersProducts";
import BestWhyLead from "@/app/best-sellers/components/BestWhyLead";
import BestSellersBundles from "@/app/best-sellers/components/BestSellersBundles";
import BestSellersTestimonials from "@/app/best-sellers/components/BestSellersTestimonials";
import BestSellersFAQ from "@/app/best-sellers/components/BestSellersFAQ";


export default function BestSellersPage() {
  return (
    <>
      <Header />

      <BestSellersHero />
      <BestSellersFeatures />
      <BestSellersProduct />
      <BestWhyLead />
      <BestSellersBundles />
      <BestSellersTestimonials />
      <BestSellersFAQ />

      <Footer />
    </>
  );
}
