import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQHero from "@/components/faq/FAQHero";
import FAQContent from "@/components/faq/FAQContent";
import FAQContact from "@/components/faq/FAQContact";

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col font-['Poppins']">
      <Header />
      <main className="flex-grow">
        <FAQHero />
        <FAQContent />
        <FAQContact />
      </main>
      <Footer />
    </div>
  );
}

