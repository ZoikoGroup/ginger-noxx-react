import "@/app/innovations/components/innovations.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import InnovationHero from "@/app/innovations/components/InnovationHero";
import InnovationWrongThings from "@/app/innovations/components/InnovationWrongThings";
import InnovationSystems from "@/app/innovations/components/InnovationSystems";
import InnovationGingerFusion from "@/app/innovations/components/InnovationGingerFusion";
import InnovationFusionPlatform from "@/app/innovations/components/InnovationFusionPlatform";
import InnovationConceptShelf from "@/app/innovations/components/InnovationConceptShelf";
import InnovationBuiltScale from "@/app/innovations/components/InnovationBuiltScale";
import InnovationDifference from "@/app/innovations/components/InnovationDifference";
import InnovationAlreadyMotion from "@/app/innovations/components/InnovationAlreadyMotion";
import InnovationPlatformReal from "@/app/innovations/components/InnovationPlatformReal";
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