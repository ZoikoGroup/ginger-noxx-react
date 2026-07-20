import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/press-media/Hero";
import BrandAssets from "@/components/press-media/BrandAssets";
import PressEnquiries from "@/components/press-media/PressEnquiries";

export default function PressMedia() {
  return (
    <div className="w-full bg-orange-50 min-h-screen">
      <Header />
      
      <main className="w-full flex flex-col items-center relative">
        <Hero />
        <BrandAssets />
        <PressEnquiries />
      </main>

      <Footer />
    </div>
  );
}

