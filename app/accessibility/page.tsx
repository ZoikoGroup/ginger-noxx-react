import Header from "@/components/Header";
import Footer from "@/components/Footer";

import AccessibilityContent from "@/app/accessibility/components/AccessibilityContent";

const Page = () => {
  return (
    <>
      <Header />

      <main>
        <AccessibilityContent />
      </main>

      <Footer />
    </>
  );
};

export default Page;