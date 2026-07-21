import "@/components/spice-blends/spice-blends.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import SpiceBlendsHero from "@/components/spice-blends/SpiceBlendsHero";
import SpiceBlendsProducts from "@/components/spice-blends/SpiceBlendsProducts";
import SpiceBlendsFlavorSystem from "@/components/spice-blends/SpiceBlendsFlavorSystem";
import SpiceBlendsRealCooking from "@/components/spice-blends/SpiceBlendsRealCooking";
import SpiceBlendsKitchenUses from "@/components/spice-blends/SpiceBlendsKitchenUses";
import SpiceBlendsTestimonials from "@/components/spice-blends/SpiceBlendsTestimonials";
import CleanStandard from "@/components/spice-blends/CleanStandard";
import SpiceBlendsCTA from "@/components/spice-blends/SpiceBlendsCTA";

export default function SpiceBlendsPage() {
  return (
    <>
    <Header />
    
          <main>
            <SpiceBlendsHero />
            <SpiceBlendsProducts />
            <SpiceBlendsFlavorSystem />
            <SpiceBlendsRealCooking />
            <SpiceBlendsKitchenUses />
            <SpiceBlendsTestimonials />
            <CleanStandard />
            <SpiceBlendsCTA />
          </main>

    <Footer />      
      
    </>
  );
}