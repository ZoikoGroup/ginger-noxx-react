import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import StockistsHero from '@/components/stockists/StockistsHero';
import StockistsLocator from '@/components/stockists/StockistsLocator';
import StockistsCTA from '@/components/stockists/StockistsCTA';

export default function WhereToBuyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col w-full">
        <StockistsHero />
        <StockistsLocator />
        <StockistsCTA />
      </main>
      <Footer />
    </>
  );
}
