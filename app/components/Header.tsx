"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";
import "./header.css";

export default function Header() {
  return (
    <header className="header">

      {/* ================= Top Announcement Bar ================= */}

      <div className="top-bar">

        <div className="top-bar-content">

          <span className="top-star">✦</span>

          <span className="top-text">
            Your Ginger Profile Not set{" "}
            <a href="#" className="top-link">
              Find yours →
            </a>
          </span>

        </div>

        <button className="top-close">
          ✕
        </button>

      </div>

      {/* ================= Main Navigation ================= */}

      <nav className="navbar">

        {/* Logo */}

        <Link href="/" className="logo">
          <Image
            src="/Image/ginger-logo.png"
            alt="GingerNoxx"
            width={175}
            height={42}
            priority
          />
        </Link>

        {/* Navigation */}

        <ul className="nav-links">

          <li>
            <Link href="#">
              Shop ▾
            </Link>
          </li>

          <li>
            <Link href="#">
              Why Ginger
            </Link>
          </li>

          <li>
            <Link href="#">
              Innovation
            </Link>
          </li>
                    <li>
            <Link href="#">
              Our Story
            </Link>
          </li>

          <li>
            <Link href="#">
              Where to Buy
            </Link>
          </li>

        </ul>

        {/* Right Side */}

        <div className="navbar-right">

          <button className="portal-btn">
            Wholesale Portal
          </button>

          <div className="nav-icons">

            <button className="icon-btn" aria-label="Search">
              <FiSearch />
            </button>

            <button className="icon-btn" aria-label="Account">
              <FiUser />
            </button>

            <button className="icon-btn cart-btn" aria-label="Cart">
              <FiShoppingBag />

              <span className="cart-count">
                0
              </span>

            </button>

          </div>

        </div>

      </nav>

    </header>
  );
}