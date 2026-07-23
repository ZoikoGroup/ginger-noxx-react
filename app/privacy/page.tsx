import Header from "@/components/Header";
import Footer from "@/components/Footer";

import PrivacyContent from "@/app/privacy/components/PrivacyContent";
const Page = () => {
  return (
    <>
      <Header />

      <main>
        <PrivacyContent />
      </main>

      <Footer />
    </>
  );
};

export default Page;