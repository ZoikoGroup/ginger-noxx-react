import Header from "@/components/Header";
import Footer from "@/components/Footer";

import CareersHero from "@/app/careers/components/CareersHero";
import CareersIntro from "@/app/careers/components/CareersIntro";
import CareersValues from "@/app/careers/components/CareersValues";
import CareersRoles from "@/app/careers/components/CareersRoles";
import CareersJobs from "@/app/careers/components/CareersJobs";
import CareersCulture from "@/app/careers/components/CareersCulture";
import CareersTestimonial from "@/app/careers/components/CareersTestimonial";
import CareersCTA from "@/app/careers/components/CareersCTA";

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col w-full bg-[#FAF3EA] font-['Poppins']">
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
