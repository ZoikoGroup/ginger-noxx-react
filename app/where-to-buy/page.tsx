import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import StockistsHero from '@/app/stockists/components/StockistsHero';
import StockistsLocator from '@/app/stockists/components/StockistsLocator';
import StockistsCTA from '@/app/stockists/components/StockistsCTA';

export default function WhereToBuyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col w-full bg-[#FAF3EA] font-['Poppins']">
        <StockistsHero />
        <StockistsLocator />
        <StockistsCTA />
      </main>
      <Footer />
    </>
  );
}
