import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnovationHero from '@/app/innovation/components/InnovationHero';
import InnovationFeatures from '@/app/innovation/components/InnovationFeatures';
import InnovationProcess from '@/app/innovation/components/InnovationProcess';
import InnovationCaseStudies from '@/app/innovation/components/InnovationCaseStudies';
import InnovationPartner from '@/app/innovation/components/InnovationPartner';
import InnovationCTA from '@/app/innovation/components/InnovationCTA';

export default function InnovationPage() {
  return (
    <main className="min-h-screen bg-orange-50 font-['Poppins']">
      <Header />
      <InnovationHero />
      <InnovationFeatures />
      <InnovationProcess />
      <InnovationCaseStudies />
      <InnovationPartner />
      <InnovationCTA />
      <Footer />
    </main>
  );
}
