import Header from "../Header";
import Footer from "../Footer";
import FAQHero from "./FAQHero";
import FAQContent from "./FAQContent";
import FAQContact from "./FAQContact";

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

