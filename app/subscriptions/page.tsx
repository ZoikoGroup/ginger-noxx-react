import "@/components/subscriptions/subscriptions.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import SubscriptionHero from "@/components/subscriptions/SubscriptionHero";
import SubscriptionBenefitsBar from "@/components/subscriptions/SubscriptionBenefitsBar";
import SubscriptionFamilyPlan from "@/components/subscriptions/SubscriptionFamilyPlan";
import SubscriptionBenefits from "@/components/subscriptions/SubscriptionBenefits";
import SubscriptionSteps from "@/components/subscriptions/SubscriptionSteps";
import BuiltForEveryMoment from "@/components/subscriptions/BuiltForEveryMoment";
import SubscriptionAddOns from "@/components/subscriptions/SubscriptionAddOns";
import SubscriptionTestimonials from "@/components/subscriptions/SubscriptionTestimonials";
import SubscriptionCTA from "@/components/subscriptions/SubscriptionCTA";

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