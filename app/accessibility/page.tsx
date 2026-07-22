import Header from "@/components/Header";
import Footer from "@/components/Footer";

import AccessibilityContent from "../../components/accessibility/AccessibilityContent";

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