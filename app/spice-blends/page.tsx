import "@/app/spice-blends/components/spice-blends.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import SpiceBlendsHero from "@/app/spice-blends/components/SpiceBlendsHero";
import SpiceBlendsProducts from "@/app/spice-blends/components/SpiceBlendsProducts";
import SpiceBlendsFlavorSystem from "@/app/spice-blends/components/SpiceBlendsFlavorSystem";
import SpiceBlendsRealCooking from "@/app/spice-blends/components/SpiceBlendsRealCooking";
import SpiceBlendsKitchenUses from "@/app/spice-blends/components/SpiceBlendsKitchenUses";
import SpiceBlendsTestimonials from "@/app/spice-blends/components/SpiceBlendsTestimonials";
import CleanStandard from "@/app/spice-blends/components/CleanStandard";
import SpiceBlendsCTA from "@/app/spice-blends/components/SpiceBlendsCTA";

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