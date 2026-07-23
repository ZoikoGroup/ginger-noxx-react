import "@/app/find-us/components/find-us.css"

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import FindUsHero from "@/app/find-us/components/FindUsHero";
import FindUsStatusGuide from "@/app/find-us/components/FindUsStatusGuide";
import FindUsLocator from "@/app/find-us/components/FindUsLocator";
import BuyOnlineCards from "@/app/find-us/components/BuyOnlineCards";
import StockistsAvailability from "@/app/find-us/components/StockistsAvailability";
import BringMarket from "@/app/find-us/components/BringMarket";
import DistributionGlance from "@/app/find-us/components/DistributionGlance";
import NotifyAvailability from "@/app/find-us/components/NotifyAvailability";
import FindUsCTA from "@/app/find-us/components/FindUsCTA";

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