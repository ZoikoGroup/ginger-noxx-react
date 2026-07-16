import "../components/product/product.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import ProductHero from "../components/product/ProductHero";
import ProductBenefits from "../components/product/ProductBenefits";
import ProductLifestyle from "../components/product/ProductLifestyle";
import ProductTrusted from "../components/product/ProductTrusted";
import ProductCleanStandard from "../components/product/ProductCleanStandard";
import ProductSystem from "../components/product/ProductSystem";
import ProductStartStrong from "../components/product/ProductStartStrong";
import ProductEffortless from "../components/product/ProductEffortless";
import ProductFAQ from "../components/product/ProductFAQ";
import ProductCTA from "../components/product/ProductCTA";


export default function ProductPage() {
  return (
    <>
      <Header />

      <main>
      <ProductHero />
      <ProductBenefits />    
      <ProductLifestyle />
      <ProductTrusted />
      <ProductCleanStandard />
      <ProductSystem />
      <ProductStartStrong />
      <ProductEffortless />
      <ProductFAQ />
      <ProductCTA />

      </main>

      <Footer />
    </>
  );
}