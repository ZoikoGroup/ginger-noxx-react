import "@/app/why/components/why.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import WhyHero from "@/app/why/components/WhyHero";
import WhyBenefits from "@/app/why/components/WhyBenefits";
import WhyEvidence from "@/app/why/components/WhyEvidence";
import WhyComparison from "@/app/why/components/WhyComparison";
import WhyInnovation from "@/app/why/components/WhyInnovation";
import WhyMoments from "@/app/why/components/WhyMoments";
import WhyProducts from "@/app/why/components/WhyProducts";
import WhyTestimonials from "@/app/why/components/WhyTestimonials";
import WhyCTA from "@/app/why/components/WhyCTA";

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