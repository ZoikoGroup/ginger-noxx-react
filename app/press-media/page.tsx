import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/app/press-media/components/Hero";
import BrandAssets from "@/app/press-media/components/BrandAssets";
import PressEnquiries from "@/app/press-media/components/PressEnquiries";

export default function PressMedia() {
  return (
    <div className="w-full min-h-screen bg-[#FAF3EA] flex flex-col">
      <Header />
      <main className="w-full flex-1 flex flex-col">
        <Hero />
        <BrandAssets />
        <PressEnquiries />
        {/* Extra white space at bottom as in design */}
        <div className="w-full bg-[#FAF3EA] flex-1 min-h-[160px]" />
      </main>
      <Footer />
    </div>
  );
}
