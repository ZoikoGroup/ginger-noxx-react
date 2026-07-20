import Header from "@/components/Header";
import Footer from "@/components/Footer";

import CareersHero from "@/components/careers/CareersHero";
import CareersIntro from "@/components/careers/CareersIntro";
import CareersValues from "@/components/careers/CareersValues";
import CareersRoles from "@/components/careers/CareersRoles";
import CareersJobs from "@/components/careers/CareersJobs";
import CareersCulture from "@/components/careers/CareersCulture";
import CareersTestimonial from "@/components/careers/CareersTestimonial";
import CareersCTA from "@/components/careers/CareersCTA";

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col w-full">
        <CareersHero />
        <CareersIntro />
        <CareersValues />
        <CareersRoles />
        <CareersJobs />
        <CareersCulture />
        <CareersTestimonial />
        <CareersCTA />
      </main>
      <Footer />
    </>
  );
}
