import "../components/story/story.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import StoryHero from "../components/story/StoryHero";
import StoryProblem from "../components/story/StoryProblem";
import StoryBirth from "../components/story/StoryBirth";
import StoryProducts from "../components/story/StoryProducts";
import StoryGlobalFlavor from "../components/story/StoryGlobalFlavor";
import StoryInnovation from "../components/story/StoryInnovation";
import StoryPromise from "../components/story/StoryPromise";
import MissionSection from "../components/story/MissionSection";
import StoryCTA from "../components/story/StoryCTA";


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