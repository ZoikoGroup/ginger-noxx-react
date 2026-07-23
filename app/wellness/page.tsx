import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import WellnessHero from "@/app/wellness/components/WellnessHero";
import WellnessTrustBar from "@/app/wellness/components/WellnessTrustBar";
import EasiestWayToBegin from "@/app/wellness/components/EasiestWayToBegin";
import DailyRhythm from "@/app/wellness/components/DailyRhythm";
import ExploreByFocus from "@/app/wellness/components/ExploreByFocus";
import MostTrustedChoices from "@/app/wellness/components/MostTrustedChoices";
import WellnessSets from "@/app/wellness/components/WellnessSets";
import WellnessReviews from "@/app/wellness/components/WellnessReviews";
import WellnessCTA from "@/app/wellness/components/WellnessCTA";

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
