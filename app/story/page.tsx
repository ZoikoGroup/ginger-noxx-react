import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "About GingerNoxx | Our Story, Vision & Values",
  description:
    "Learn about GingerNoxx, our story, vision, and values. We are committed to quality, innovation, and bringing authentic, high-quality products to customers.",
};

export default function StoryPage() {
  return (
    <>
      <Header />

      <main>
      <StoryHero />
      <StoryProblem />
      <StoryBirth />
      <div id="story-products">
        <StoryProducts />
      </div>
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
