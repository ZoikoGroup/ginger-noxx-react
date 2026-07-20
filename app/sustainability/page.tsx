import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SustainabilityHero from "@/components/sustainability/SustainabilityHero";
import SustainabilityCommitments from "@/components/sustainability/SustainabilityCommitments";
import SustainabilityImpact from "@/components/sustainability/SustainabilityImpact";
import SustainabilityStages from "@/components/sustainability/SustainabilityStages";
import SustainabilityCollaborations from "@/components/sustainability/SustainabilityCollaborations";
import SustainabilityInsights from "@/components/sustainability/SustainabilityInsights";
import SustainabilityCTA from "@/components/sustainability/SustainabilityCTA";

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header />
      <SustainabilityHero />
      <SustainabilityCommitments />
      <SustainabilityImpact />
      <SustainabilityStages />
      <SustainabilityCollaborations />
      <SustainabilityInsights />
      <SustainabilityCTA />
      <Footer />
    </main>
  );
}
