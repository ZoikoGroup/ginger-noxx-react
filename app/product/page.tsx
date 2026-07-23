import "@/app/product/components/product.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ProductHero from "@/app/product/components/ProductHero";
import ProductBenefits from "@/app/product/components/ProductBenefits";
import ProductLifestyle from "@/app/product/components/ProductLifestyle";
import ProductTrusted from "@/app/product/components/ProductTrusted";
import ProductCleanStandard from "@/app/product/components/ProductCleanStandard";
import ProductSystem from "@/app/product/components/ProductSystem";
import ProductStartStrong from "@/app/product/components/ProductStartStrong";
import ProductEffortless from "@/app/product/components/ProductEffortless";
import ProductFAQ from "@/app/product/components/ProductFAQ";
import ProductCTA from "@/app/product/components/ProductCTA";


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
