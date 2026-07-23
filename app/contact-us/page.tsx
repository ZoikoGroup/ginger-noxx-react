import "@/app/contact-us/components/contact.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ContactSection from "@/app/contact-us/components/ContactSection";
import ContactResponseBar from "@/app/contact-us/components/ContactResponseBar";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <ContactSection />
        <ContactResponseBar />
      </main>

      <Footer />
    </>
  );
}
