import "@/app/about/components/about.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import AboutHero from "@/app/about/components/AboutHero";
import AboutStats from "@/app/about/components/AboutStats";
import AboutStory from "@/app/about/components/AboutStory";
import AboutVision from "@/app/about/components/AboutVision";
import AboutModel from "@/app/about/components/AboutModel";
import AboutAI from "@/app/about/components/AboutAI";
import AboutEcosystem from "@/app/about/components/AboutEcosystem";
import AboutPromise from "@/app/about/components/AboutPromise";
import AboutSustainability from "@/app/about/components/AboutSustainability";
import AboutFuture from "@/app/about/components/AboutFuture";
import AboutCTA from "@/app/about/components/AboutCTA";
export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <AboutHero />
        <AboutStats />
        <AboutStory />
        <AboutVision />
        <AboutModel />
        <AboutAI />
        <AboutEcosystem />
        <AboutPromise />
        <AboutSustainability />
        <AboutFuture />
        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}
