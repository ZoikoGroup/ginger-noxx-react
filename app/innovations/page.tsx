import "@/components/innovations/innovations.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import InnovationHero from "@/components/innovations/InnovationHero";
import InnovationWrongThings from "@/components/innovations/InnovationWrongThings";
import InnovationSystems from "@/components/innovations/InnovationSystems";
import InnovationGingerFusion from "@/components/innovations/InnovationGingerFusion";
import InnovationFusionPlatform from "@/components/innovations/InnovationFusionPlatform";
import InnovationConceptShelf from "@/components/innovations/InnovationConceptShelf";
import InnovationBuiltScale from "@/components/innovations/InnovationBuiltScale";
import InnovationDifference from "@/components/innovations/InnovationDifference";
import InnovationAlreadyMotion from "@/components/innovations/InnovationAlreadyMotion";
import InnovationPlatformReal from "@/components/innovations/InnovationPlatformReal";
export default function InnovationsPage() {
  return (
    <>
      <Header />

      <main>
        <InnovationHero />
        <InnovationWrongThings />
        <InnovationSystems />
        <InnovationGingerFusion />
        <InnovationFusionPlatform />
        <InnovationConceptShelf />
        <InnovationBuiltScale />
        <InnovationDifference />
        <InnovationAlreadyMotion />
        <InnovationPlatformReal />

      </main>

      <Footer />
    </>
  );
}