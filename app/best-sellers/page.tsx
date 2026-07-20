import "@/components/best-sellers/bestsellers.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import BestSellersHero from "@/components/best-sellers/BestSellersHero";
import BestSellersFeatures from "@/components/best-sellers/BestSellersFeatures";
import BestSellersProduct from "@/components/best-sellers/BestSellersProducts";
import BestWhyLead from "@/components/best-sellers/BestWhyLead";
import BestSellersBundles from "@/components/best-sellers/BestSellersBundles";
import BestSellersTestimonials from "@/components/best-sellers/BestSellersTestimonials";
import BestSellersFAQ from "@/components/best-sellers/BestSellersFAQ";


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
