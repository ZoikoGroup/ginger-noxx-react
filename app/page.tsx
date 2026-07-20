import "@/components/home/Home.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Hero from "@/components/home/Hero";
import BestSellers from "@/components/home/BestSellers";
import ExplorePlatform from "@/components/home/ExplorePlatform";
import GingerProfile from "@/components/home/GingerProfile";
import WhyGinger from "@/components/home/WhyGinger";
import InnovationPlatform from "@/components/home/InnovationPlatform";
import OurStory from "@/components/home/OurStory";
import ReviewsTrust from "@/components/home/ReviewsTrust";
import TradeDistribution from "@/components/home/TradeDistribution";
import PresenceBar from "@/components/home/PresenceBar";
import EducationAuthority from "@/components/home/EducationAuthority"
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />
      <BestSellers />
      <ExplorePlatform />
      <GingerProfile />
      <WhyGinger />
      <InnovationPlatform />
      <OurStory />
      <ReviewsTrust />
      <TradeDistribution />
      <PresenceBar />
      <EducationAuthority />
      <Newsletter />

      <Footer />
    </>
  );
}

