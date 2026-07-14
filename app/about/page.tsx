import "../components/about/about.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import AboutHero from "../components/about/AboutHero";
import AboutStats from "../components/about/AboutStats";
import AboutStory from "../components/about/AboutStory";
import AboutVision from "../components/about/AboutVision";
import AboutModel from "../components/about/AboutModel";
import AboutAI from "../components/about/AboutAI";
import AboutEcosystem from "../components/about/AboutEcosystem";
import AboutPromise from "../components/about/AboutPromise";
import AboutSustainability from "../components/about/AboutSustainability";
import AboutFuture from "../components/about/AboutFuture";
import AboutCTA from "../components/about/AboutCTA";
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