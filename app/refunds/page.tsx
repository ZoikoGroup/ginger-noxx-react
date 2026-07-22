import Header from "@/components/Header";
import Footer from "@/components/Footer";

import RefundContent from "@/components/refunds/RefundContent";

const Page = () => {
  return (
    <>
      <Header />

      <main>
        <RefundContent />
      </main>

      <Footer />
    </>
  );
};

export default Page;