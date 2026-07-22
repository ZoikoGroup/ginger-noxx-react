import Header from "@/components/Header";
import Footer from "@/components/Footer";

import PrivacyContent from "@/components/privacy/PrivacyContent";
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