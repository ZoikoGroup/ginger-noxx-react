import "@/components/find-us/find-us.css"

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import FindUsHero from "@/components/find-us/FindUsHero";
import FindUsStatusGuide from "@/components/find-us/FindUsStatusGuide";
import FindUsLocator from "@/components/find-us/FindUsLocator";
import BuyOnlineCards from "@/components/find-us/BuyOnlineCards";
import StockistsAvailability from "@/components/find-us/StockistsAvailability";
import BringMarket from "@/components/find-us/BringMarket";
import DistributionGlance from "@/components/find-us/DistributionGlance";
import NotifyAvailability from "@/components/find-us/NotifyAvailability";
import FindUsCTA from "@/components/find-us/FindUsCTA";

export default function FindProfilePage() {
  return (
    <>
        <Header />
    <main>
      <FindUsHero />
      <FindUsStatusGuide />
      <FindUsLocator />
      <BuyOnlineCards />
      <StockistsAvailability />
      <BringMarket />
      <DistributionGlance />
      <NotifyAvailability />
      <FindUsCTA />
    </main>
       <Footer />
    </>
  );
}