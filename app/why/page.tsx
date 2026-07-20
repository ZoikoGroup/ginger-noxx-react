import "@/components/why/why.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import WhyHero from "@/components/why/WhyHero";
import WhyBenefits from "@/components/why/WhyBenefits";
import WhyEvidence from "@/components/why/WhyEvidence";
import WhyComparison from "@/components/why/WhyComparison";
import WhyInnovation from "@/components/why/WhyInnovation";
import WhyMoments from "@/components/why/WhyMoments";
import WhyProducts from "@/components/why/WhyProducts";
import WhyTestimonials from "@/components/why/WhyTestimonials";
import WhyCTA from "@/components/why/WhyCTA";

export default function WhyPage() {
  return (
    <>
      <Header />

      <main>
        <WhyHero />
        <WhyBenefits />
        <WhyEvidence />
        <WhyComparison />
        <WhyInnovation />
        <WhyMoments />
        <WhyProducts />
        <WhyTestimonials />
        <WhyCTA />
      </main>

      <Footer />
    </>
  );
}