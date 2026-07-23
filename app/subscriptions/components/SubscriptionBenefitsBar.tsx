import React from "react";

const benefits = [
  "Save 15% Every Order",
  "Flexible Delivery Intervals",
  "Pause or Cancel Anytime",
  "Early Access to New Flavours",
  "Premium Packaging Included",
];

const SubscriptionBenefitsBar = () => {
  return (
    <section className="subscription-benefits">
      <div className="subscription-benefits-container">
        {benefits.map((item, index) => (
          <React.Fragment key={index}>
            <div className="subscription-benefits-item">
              {item}
            </div>

            {index === 0 && (
              <div className="subscription-benefits-divider"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default SubscriptionBenefitsBar;