import "@/app/subscriptions/components/subscriptions.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import SubscriptionHero from "@/app/subscriptions/components/SubscriptionHero";
import SubscriptionBenefitsBar from "@/app/subscriptions/components/SubscriptionBenefitsBar";
import SubscriptionFamilyPlan from "@/app/subscriptions/components/SubscriptionFamilyPlan";
import SubscriptionBenefits from "@/app/subscriptions/components/SubscriptionBenefits";
import SubscriptionSteps from "@/app/subscriptions/components/SubscriptionSteps";
import BuiltForEveryMoment from "@/app/subscriptions/components/BuiltForEveryMoment";
import SubscriptionAddOns from "@/app/subscriptions/components/SubscriptionAddOns";
import SubscriptionTestimonials from "@/app/subscriptions/components/SubscriptionTestimonials";
import SubscriptionCTA from "@/app/subscriptions/components/SubscriptionCTA";

export default function SubscriptionsPage() {
  return (
    <>
      <Header />

      <main>
        <SubscriptionHero />
        <SubscriptionBenefitsBar />
        <SubscriptionFamilyPlan />
        <SubscriptionBenefits />
        <SubscriptionSteps />
        <BuiltForEveryMoment />
        <SubscriptionAddOns />
        <SubscriptionTestimonials />
        <SubscriptionCTA />
      </main>

      <Footer />
    </>
  );
}