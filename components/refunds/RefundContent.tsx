import "./refund.css";

const RefundContent = () => {
  return (
    <section className="refund-content">
      <div className="refund-container">

        {/* Header */}
        <div className="refund-header">
          <span className="refund-label">
            Legal · Returns
          </span>

          <h1>Refund &amp; Returns Policy</h1>

          <p className="refund-date">
            <strong>Effective Date:</strong>
            <span> March 2026 · GingerNoxx™ · A Zoiko Foods Corp brand</span>
          </p>
        </div>

        {/* Intro */}
        <div className="refund-intro-box">
          <p>
            At GingerNoxx™, we are committed to ensuring that every purchase
            you make meets your expectations for quality, freshness, and
            flavour. Our Refund &amp; Returns Policy is designed to protect
            our customers, maintain product integrity, and prevent abuse or
            fraudulent claims.
          </p>
        </div>

        {/* Contents */}
        <div className="refund-contents-card">
          <span className="refund-contents-label">
            Contents
          </span>

          <ul className="refund-contents-list">
            <li>Eligibility for Returns</li>
            <li>Damaged, Defective, or Incorrect Items</li>
            <li>How to Initiate a Return</li>
            <li>Refund Processing</li>
            <li>Exchanges</li>
            <li>Non-Returnable Items</li>
            <li>International Orders</li>
            <li>Fraud Prevention Measures</li>
          </ul>
        </div>

        {/* Eligibility */}
        <div className="refund-section">
          <div className="refund-heading">
            <h2>Eligibility for Returns</h2>
          </div>

          <ul className="refund-list">
            <li>
              Only items purchased directly from GingerNoxx™ (official online
              store or authorised retail partners) are eligible for return or
              refund.
            </li>

            <li>
              Products must be returned within <strong>30 days</strong> of
              receipt.
            </li>

            <li>
              Items must be unopened, unused, and in their original packaging
              to qualify for a return.
            </li>

            <li>
              Perishable items, opened beverages, or partially used products
              are non-returnable unless damaged or defective.
            </li>
          </ul>
        </div>

        {/* Damaged Items */}
        <div className="refund-section">
          <div className="refund-heading">
            <h2>Damaged, Defective, or Incorrect Items</h2>
          </div>

          <p className="refund-text">
            If your order arrives damaged, defective, or incorrect, contact our
            Customer Support Team immediately at{" "}
            <a href="mailto:support@gingernoxx.com">
              support@gingernoxx.com
            </a>{" "}
            with your order number and a photo of the item(s). GingerNoxx™
            will provide a replacement, exchange, or full refund, including
            applicable shipping costs, at no additional charge. All claims are
            verified before processing to prevent fraudulent requests.
          </p>
        </div>

        {/* How to Initiate a Return */}
        <div className="refund-section">
          <div className="refund-heading">
            <h2>How to Initiate a Return</h2>
          </div>

          <div className="refund-steps">

            <div className="refund-step">
              <div className="refund-step-icon"></div>

              <p>
                Contact Customer Support within 30 days of receiving your order.
              </p>
            </div>

            <div className="refund-step">
              <div className="refund-step-icon"></div>

              <p>
                Provide your order number, reason for return, and photos if
                applicable.
              </p>
            </div>

            <div className="refund-step">
              <div className="refund-step-icon"></div>

              <p>
                Our team will issue a Return Merchandise Authorisation (RMA)
                with instructions for shipping.
              </p>
            </div>

            <div className="refund-step">
              <div className="refund-step-icon"></div>

              <p>
                Returns must be sent using a trackable shipping method.
                GingerNoxx™ is not responsible for lost or misdirected returns.
                Returns that appear to be fraudulent or suspicious may be
                denied.
              </p>
            </div>

          </div>
        </div>
                {/* Refund Processing */}
        <div className="refund-section">
          <div className="refund-heading">
            <h2>Refund Processing</h2>
          </div>

          <p className="refund-text">
            Returned items are carefully inspected. Refunds will be issued only
            after verification of item condition and purchase authenticity.
            Approved refunds are processed to the original payment method within{" "}
            <strong>7–10 business days</strong>. Shipping charges for standard
            delivery are non-refundable unless the return is due to a
            GingerNoxx™ error.
          </p>
        </div>

        {/* Exchanges */}
        <div className="refund-section">
          <div className="refund-heading">
            <h2>Exchanges</h2>
          </div>

          <p className="refund-text">
            Exchanges for different flavours, sizes, or product variants can be
            requested during the return process. Availability is subject to
            stock. If the replacement item is of higher value, the difference
            will be charged; if lower, a partial refund will be issued.
            Fraudulent or repeated exchange requests may be denied.
          </p>
        </div>

        {/* Non-Returnable Items */}
        <div className="refund-section">
          <div className="refund-heading">
            <h2>Non-Returnable Items</h2>
          </div>

          <p className="refund-text">
            The following items are non-returnable unless defective or damaged
            on arrival:
          </p>

          <ul className="refund-list">
            <li>Perishable items and opened beverages</li>
            <li>Partially used products</li>
            <li>Gift cards</li>
            <li>Items purchased through third-party marketplaces</li>
          </ul>
        </div>

        {/* International Orders */}
        <div className="refund-section">
          <div className="refund-heading">
            <h2>International Orders</h2>
          </div>

          <p className="refund-text">
            Refunds and returns for international orders are subject to local
            customs, import taxes, and shipping fees. GingerNoxx™ will cover
            the cost of replacement items for damaged or defective shipments,
            but not duties or taxes paid by the customer.
          </p>
        </div>

        {/* Fraud Prevention Measures */}
        <div className="refund-section">
          <div className="refund-heading">
            <h2>Fraud Prevention Measures</h2>
          </div>

          <p className="refund-text">
            To protect against fraudulent claims:
          </p>

          <ul className="refund-list">
            <li>
              Refunds and replacements require proof of purchase and item
              verification.
            </li>

            <li>
              Serial numbers, batch codes, or photos may be requested.
            </li>

            <li>
              Repeated or suspicious claims may trigger account review or
              denial.
            </li>

            <li>
              GingerNoxx™ reserves the right to refuse service or ban accounts
              that abuse the policy.
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="refund-support-card">
          <span className="refund-support-label">
            Customer Support
          </span>

          <h3>
            Questions about a return or refund?
          </h3>

          <p>
            <span>Email: </span>

            <a href="mailto:support@gingernoxx.com">
              support@gingernoxx.com
            </a>

            <br />

            Phone: 1-800-484-5574

            <br />

            Response time: 24–48 hours on business days
          </p>
        </div>

      </div>
    </section>
  );
};

export default RefundContent;