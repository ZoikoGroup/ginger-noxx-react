import "@/app/find-profile/components/find-profile.css"

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import FindProfileHero from "@/app/find-profile/components/FindProfileHero";
import FindProfileNotify from "@/app/find-profile/components/FindProfileNotify";
import FindProfileReviews from "@/app/find-profile/components/FindProfileReviews";

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