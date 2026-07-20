import Header from "@/components/Header";
import Footer from "@/components/Footer";

import CommunityHero from "@/components/community/CommunityHero";
import CommunityFeatures from "@/components/community/CommunityFeatures";
import CommunityGallery from "@/components/community/CommunityGallery";
import CommunityCTA from "@/components/community/CommunityCTA";

export default function CommunityPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-950">
        <CommunityHero />
        <CommunityFeatures />
        <CommunityGallery />
        <CommunityCTA />
      </main>
      <Footer />
    </>
  );
}
