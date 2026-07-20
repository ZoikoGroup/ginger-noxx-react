import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InnovationHero from '../../components/innovation/InnovationHero';
import InnovationFeatures from '../../components/innovation/InnovationFeatures';
import InnovationProcess from '../../components/innovation/InnovationProcess';
import InnovationCaseStudies from '../../components/innovation/InnovationCaseStudies';
import InnovationPartner from '../../components/innovation/InnovationPartner';
import InnovationCTA from '../../components/innovation/InnovationCTA';

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
