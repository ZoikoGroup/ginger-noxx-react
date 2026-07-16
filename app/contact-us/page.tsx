import "../components/contact-us/contact.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import ContactSection from "../components/contact-us/ContactSection";
import ContactResponseBar from "../components/contact-us/ContactResponseBar";

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