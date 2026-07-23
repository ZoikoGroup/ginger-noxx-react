import "@/app/story/components/story.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import StoryHero from "@/app/story/components/StoryHero";
import StoryProblem from "@/app/story/components/StoryProblem";
import StoryBirth from "@/app/story/components/StoryBirth";
import StoryProducts from "@/app/story/components/StoryProducts";
import StoryGlobalFlavor from "@/app/story/components/StoryGlobalFlavor";
import StoryInnovation from "@/app/story/components/StoryInnovation";
import StoryPromise from "@/app/story/components/StoryPromise";
import MissionSection from "@/app/story/components/MissionSection";
import StoryCTA from "@/app/story/components/StoryCTA";


export default function StoryPage() {
  return (
    <>
      <Header />

      <main>
      <StoryHero />
      <StoryProblem />
      <StoryBirth />
      <StoryProducts />
      <StoryGlobalFlavor />
      <StoryInnovation />
      <StoryPromise />
      <MissionSection />
      <StoryCTA />

      </main>

      <Footer />
    </>
  );
}
