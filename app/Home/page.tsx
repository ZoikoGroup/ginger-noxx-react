import "@/app/Home/components/Home.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Hero from "@/app/Home/components/Hero";
import BestSellers from "@/app/Home/components/BestSellers";
import ExplorePlatform from "@/app/Home/components/ExplorePlatform";
import GingerProfile from "@/app/Home/components/GingerProfile";
import WhyGinger from "@/app/Home/components/WhyGinger";
import InnovationPlatform from "@/app/Home/components/InnovationPlatform";
import OurStory from "@/app/Home/components/OurStory";
import ReviewsTrust from "@/app/Home/components/ReviewsTrust";
import TradeDistribution from "@/app/Home/components/TradeDistribution";
import PresenceBar from "@/app/Home/components/PresenceBar";
import EducationAuthority from "@/app/Home/components/EducationAuthority"
import Newsletter from "@/app/Home/components/Newsletter";


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
