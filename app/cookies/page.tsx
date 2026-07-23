import Header from "@/components/Header";
import Footer from "@/components/Footer";

import CookieContent from "@/app/cookies/components/CookieContent";

const Page = () => {
  return (
    <>
      <Header />

      <main>
        <CookieContent />
      </main>

      <Footer />
    </>
  );
};

export default Page;