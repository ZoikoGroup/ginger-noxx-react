import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SustainabilityHero from "@/app/sustainability/components/SustainabilityHero";
import SustainabilityCommitments from "@/app/sustainability/components/SustainabilityCommitments";
import SustainabilityImpact from "@/app/sustainability/components/SustainabilityImpact";
import SustainabilityStages from "@/app/sustainability/components/SustainabilityStages";
import SustainabilityCollaborations from "@/app/sustainability/components/SustainabilityCollaborations";
import SustainabilityInsights from "@/app/sustainability/components/SustainabilityInsights";
import SustainabilityCTA from "@/app/sustainability/components/SustainabilityCTA";

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF3EA] overflow-x-hidden font-['Poppins']">
      <Header />
      <SustainabilityHero />
      <div id="sustain-commitments">
        <SustainabilityCommitments />
      </div>
      <SustainabilityImpact />
      <div id="sustain-stages">
        <SustainabilityStages />
      </div>
      <SustainabilityCollaborations />
      <SustainabilityInsights />
      <SustainabilityCTA />
      <Footer />
    </main>
  );
}
