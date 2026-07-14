import Image from "next/image";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";

export default function Header() {
  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
  <span className="star">✦</span>

  <span>
    Your Ginger Profile Not set{" "}
    <a href="#" className="find-link">
      Find yours →
    </a>
  </span>

  <span className="close">×</span>
</div>

      {/* Navbar */}
      <nav className="navbar">
        {/* Logo */}
        <Image
          src="/Image/ginger-logo.png.png"
          alt="GingerNoxx Logo"
          width={220}
          height={60}
        />

        {/* Navigation */}
        <ul className="nav-links">
          <li>Shop ▼</li>
          <li>Why Ginger</li>
          <li>Innovation</li>
          <li>Our Story</li>
          <li>Where to Buy</li>
        </ul>

        {/* Wholesale Button */}
        <button className="portal-btn">
          Wholesale Portal
        </button>

        {/* Icons */}
        <div className="icons">
          <FiSearch />
          <FiUser />
          <FiShoppingBag />
        </div>
      </nav>
    </header>
  );
}