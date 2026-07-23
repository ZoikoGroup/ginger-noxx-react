import Header from "@/components/Header";
import Footer from "@/components/Footer";

import WellnessHero from "@/app/wellness/components/WellnessHero";
import WellnessTrustBar from "./components/WellnessTrustBar";
import EasiestWayToBegin from "./components/EasiestWayToBegin";
import DailyRhythm from "./components/DailyRhythm";
import ExploreByFocus from "./components/ExploreByFocus";
import MostTrustedChoices from "./components/MostTrustedChoices";
import WellnessSets from "./components/WellnessSets";
import WellnessReviews from "./components/WellnessReviews";
import WellnessCTA from "./components/WellnessCTA";


export const metadata = {
  title: "Ginger Wellness | GingerNoxx",
  description:
    "Support your body naturally with the power of ginger. Discover morning shots, daily routine guides, wellness sets, and digestive support.",
};

export default function WellnessPage() {
  return (
    <>
      <Header />

      <main>
        <WellnessHero />
        <WellnessTrustBar />
       <EasiestWayToBegin />
       <DailyRhythm />
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