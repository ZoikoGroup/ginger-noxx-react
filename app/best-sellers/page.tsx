import "../components/bestsellers/bestsellers.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import BestSellersHero from "../components/bestsellers/BestSellersHero";
import BestSellersFeatures from "../components/bestsellers/BestSellersFeatures";
import BestSellersProduct from "../components/bestsellers/BestSellersProducts";
import BestWhyLead from "../components/bestsellers/BestWhyLead";
import BestSellersBundles from "../components/bestsellers/BestSellersBundles";
import BestSellersTestimonials from "../components/bestsellers/BestSellersTestimonials";
import BestSellersFAQ from "../components/bestsellers/BestSellersFAQ";


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