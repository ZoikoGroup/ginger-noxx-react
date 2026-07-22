import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import WellnessHero from "@/components/wellness/WellnessHero";
import WellnessTrustBar from "@/components/wellness/WellnessTrustBar";
import EasiestWayToBegin from "@/components/wellness/EasiestWayToBegin";
import DailyRhythm from "@/components/wellness/DailyRhythm";
import ExploreByFocus from "@/components/wellness/ExploreByFocus";
import MostTrustedChoices from "@/components/wellness/MostTrustedChoices";
import WellnessSets from "@/components/wellness/WellnessSets";
import WellnessReviews from "@/components/wellness/WellnessReviews";
import WellnessCTA from "@/components/wellness/WellnessCTA";

export const metadata = {
  title: "Ginger Wellness | GingerNoxx",
  description:
    "Support your body naturally with the power of ginger. Discover morning shots, daily routine guides, wellness sets, and digestive support.",
};

export default function WellnessPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col w-full bg-orange-50">
        <WellnessHero />
        <WellnessTrustBar />
        <div id="easiest-way" className="w-full">
          <EasiestWayToBegin />
        </div>
        <div id="daily-rhythm" className="w-full">
          <DailyRhythm />
        </div>
        <ExploreByFocus />
        <MostTrustedChoices />
        <WellnessSets />
        <WellnessReviews />
        <WellnessCTA />
      </main>
      <Footer />
    </>
  );
}
