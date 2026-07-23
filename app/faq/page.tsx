import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQHero from "@/app/faq/components/FAQHero";
import FAQContent from "@/app/faq/components/FAQContent";
import FAQContact from "@/app/faq/components/FAQContact";

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

