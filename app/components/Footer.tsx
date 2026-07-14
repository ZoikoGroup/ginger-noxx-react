import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-left">

          <Image
            src="/Image/logo-white.png"
            alt="GingerNoxx"
            width={180}
            height={60}
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
      width={20}
      height={20}
    />
  </a>

  <a href="#">
    <Image
      src="/Icons/instagram.svg"
      alt="Instagram"
      width={20}
      height={20}
    />
  </a>

  <a href="#">
    <Image
      src="/Icons/twitter.svg"
      alt="X"
      width={20}
      height={20}
    />
  </a>

  <a href="#">
    <Image
      src="/Icons/linkedin.svg"
      alt="LinkedIn"
      width={20}
      height={20}
    />
  </a>

  <a href="#">
    <Image
      src="/Icons/youtube.svg"
      alt="YouTube"
      width={20}
      height={20}
    />
  </a>

</div>

        </div>

        {/* SHOP */}

        <div className="footer-column">

          <h4>Shop</h4>

          <ul>
            <li><a href="#">Beverages</a></li>
            <li><a href="#">Snacks</a></li>
            <li><a href="#">Wellness</a></li>
            <li><a href="#">Ingredients</a></li>
            <li><a href="#">Bundles &amp; Gifts</a></li>
            <li><a href="#">Subscriptions</a></li>
          </ul>

        </div>

        {/* COMPANY */}

        <div className="footer-column">

          <h4>Company</h4>

          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Innovation Platform</a></li>
            <li><a href="#">Why Ginger</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>

        </div>

        {/* CONNECT */}

        <div className="footer-column">

          <h4>Connect</h4>

          <ul>
            <li><a href="#">Wholesale Portal</a></li>
            <li><a href="#">Find a Stockist</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">GingerNoxx Collective</a></li>
            <li><a href="#">Blog / Lab Notes</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>

        </div>

        {/* LEGAL */}

        <div className="footer-column">

          <h4>Legal</h4>

          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Cookie Settings</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>

        </div>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">
        © 2026 GingerNoxx™ · A Zoiko Foods Corp brand. All rights reserved.
      </div>

    </footer>
  );
}