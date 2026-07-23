import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import CollectiveHero from '@/app/collective/components/CollectiveHero';
import CollectiveFeatures from '@/app/collective/components/CollectiveFeatures';
import CollectiveGallery from '@/app/collective/components/CollectiveGallery';
import CollectiveCTA from '@/app/collective/components/CollectiveCTA';

export default function CommunityPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col w-full bg-[#FAF3EA] font-['Poppins']">
        <CollectiveHero />
        <CollectiveFeatures />
        <CollectiveGallery />
        <CollectiveCTA />
      </main>
      <Footer />
    </>
  );
}
