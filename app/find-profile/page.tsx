import "@/components/find-profile/find-profile.css"

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import FindProfileHero from "@/components/find-profile/FindProfileHero";
import FindProfileNotify from "@/components/find-profile/FindProfileNotify";
import FindProfileReviews from "@/components/find-profile/FindProfileReviews";

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