import "@/app/footer.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}

        <div className="footer-left">

          <Image
            src="/Image/logo-white.png"
            alt="GingerNoxx"
            width={176}
            height={56}
            className="footer-logo"
          />

          <p className="footer-description">
            The world's first ginger-fusion platform
            <br />
            — defining a new global category in
            <br />
            food, drink, and wellness.
          </p>

          <div className="footer-badges">
            <span>HALAL</span>
            <span>VEGAN</span>
            <span>CLEAN LABEL</span>
            <span>ISO 22000</span>
          </div>

          <div className="footer-social">

            <a href="#">
              <Image
                src="/Icons/facebook.svg"
                alt="Facebook"
                width={42}
                height={42}
              />
            </a>

            <a href="#">
              <Image
                src="/Icons/instagram.svg"
                alt="Instagram"
                width={42}
                height={42}
              />
            </a>

            <a href="#">
              <Image
                src="/Icons/twitter.svg"
                alt="Twitter"
                width={42}
                height={42}
              />
            </a>

            <a href="#">
              <Image
                src="/Icons/linkedin.svg"
                alt="LinkedIn"
                width={42}
                height={42}
              />
            </a>

            <a href="#">
              <Image
                src="/Icons/youtube.svg"
                alt="YouTube"
                width={42}
                height={42}
              />
            </a>

          </div>

        </div>

        {/* Shop */}

        <div className="footer-column">

          <h4>Shop</h4>

          <ul>

            <li><Link href="/beverages">Beverages</Link></li>

            <li><Link href="/snacks">Snacks</Link></li>

            <li><Link href="/wellness">Wellness</Link></li>

            <li><Link href="/ingredients">Ingredients</Link></li>

            <li><Link href="/bundles-and-gifts">Bundles &amp; Gifts</Link></li>

            <li><Link href="/subscriptions">Subscriptions</Link></li>

          </ul>

        </div>

        {/* Company */}

        <div className="footer-column">

          <h4>Company</h4>

          <ul>

            <li><Link href="/story">Our Story</Link></li>

            <li><Link href="/innovation">Innovation Platform</Link></li>

            <li><Link href="/why">Why Ginger</Link></li>

            <li><Link href="/sustainability">Sustainability</Link></li>

            <li><Link href="/careers">Careers</Link></li>

            <li><Link href="/press-media">Press</Link></li>

          </ul>

        </div>

        {/* Connect */}

        <div className="footer-column">

          <h4>Connect</h4>

          <ul>

            <li><Link href="/wholesale">Wholesale Portal</Link></li>

            <li><Link href="/stockists">Find a Stockist</Link></li>

            <li><Link href="/contact-us">Contact Us</Link></li>

            <li><Link href="/collective">GingerNoxx Collective</Link></li>

            <li><Link href="/blog">Blog / Lab Notes</Link></li>

            <li><Link href="/faq">FAQs</Link></li>

          </ul>

        </div>

        {/* Legal */}

        <div className="footer-column">

          <h4>Legal</h4>

          <ul>

            <li><Link href="/privacy">Privacy Policy</Link></li>

            <li><Link href="/legal-terms">Terms of Use</Link></li>

            <li><Link href="/cookies">Cookie Settings</Link></li>

            <li><Link href="/accessibility">Accessibility</Link></li>

          </ul>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 GingerNoxx™ · A Zoiko Foods Corp brand. All rights reserved.
      </div>

    </footer>
  );
}
