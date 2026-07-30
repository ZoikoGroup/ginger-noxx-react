import type { Metadata } from "next";
import "@/app/find-profile/components/find-profile.css"

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import FindProfileHero from "@/app/find-profile/components/FindProfileHero";
import FindProfileNotify from "@/app/find-profile/components/FindProfileNotify";
import FindProfileReviews from "@/app/find-profile/components/FindProfileReviews";

export const metadata: Metadata = {
  title: "Find Your Ginger Profile | Personalized Match Tool",
  description:
    "Find your Ginger Profile and get personalized product recommendations based on your taste, lifestyle, and daily use. Start your match now.",
};

export default function FindProfilePage() {
  return (
    <>
        <Header />
    <main>
      <FindProfileHero />
      <FindProfileNotify />
      <FindProfileReviews />
    </main>
       <Footer />
    </>
  );
}