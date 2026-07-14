import "../components/wholesale/wholesale.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import WholesaleHero from "../components/wholesale/WholesaleHero";
import WholesaleCategory from "../components/wholesale/WholesaleCategory";
import WholesaleProductCategories from "../components/wholesale/WholesaleProductCategories";
import WholesaleGlobalReach from "../components/wholesale/WholesaleGlobalReach";


export default function BestSellersPage() {
  return (
    <>
    <Header />

      <WholesaleHero />
      <WholesaleCategory />
      <WholesaleProductCategories />
      <WholesaleGlobalReach />
      
    <Footer />  
    </>
  );
}