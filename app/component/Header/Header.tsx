"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { Container } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* LOGO */}
        <div className={styles.logoWrapper}>
          <Link href="/">
            <Image
              src="/images/avyukt_logo4.png"
              alt="Avyukt Associates"
              fill 
              
              priority
              
              className={styles.logo}
            />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/About">About Us</Link></li>

            {/* PRACTICE DROPDOWN */}
            <li
              className={styles.dropdown}
              onMouseEnter={() => setPracticeOpen(true)}
              onMouseLeave={() => setPracticeOpen(false)}
            >
              <button
                className={styles.dropdownBtn}
                type="button"
              >
                Our Practice <span className={styles.caret}>▾</span>
              </button>

              {practiceOpen && (
                <ul className={styles.dropdownMenu}>
                  <li><Link href="/practice/civil-litigation">Civil Litigation</Link></li>
                  <li><Link href="/practice/criminal-litigation">Criminal Litigation</Link></li>
                  <li><Link href="/practice/family-law">Family & Matrimonial</Link></li>
                  <li><Link href="/practice/property-disputes">Property Disputes</Link></li>
                  <li><Link href="/practice/consumer-protection">Consumer Protection</Link></li>
                  <li><Link href="/practice/drafting-legal">Drafting & Legal Documentation</Link></li>
                </ul>
              )}
            </li>

            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>

        {/* HAMBURGER */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li onClick={() => setMenuOpen(false)}>
              <Link href="/">Home</Link>
            </li>

            <li onClick={() => setMenuOpen(false)}>
              <Link href="/About">About Us</Link>
            </li>

            {/* MOBILE PRACTICE DROPDOWN */}
            <li>
              <button
                className={styles.mobileDropdownBtn}
                onClick={() => setPracticeOpen(!practiceOpen)}
              >
                Our Practice
                <span className={practiceOpen ? styles.rotate : ""}>▾</span>
              </button>

              {practiceOpen && (
                <ul className={styles.mobileSubmenu}>
                   <li><Link href="/practice/civil-litigation">Civil Litigation</Link></li>
                  <li><Link href="/practice/criminal-litigation">Criminal Litigation</Link></li>
                  <li><Link href="/practice/family-law">Family & Matrimonial</Link></li>
                  <li><Link href="/practice/property-disputes">Property Disputes</Link></li>
                  <li><Link href="/practice/consumer-protection">Consumer Protection</Link></li>
                  <li><Link href="/practice/drafting-legal">Drafting & Legal Documentation</Link></li>
                </ul>
              )}
            </li>

            <li onClick={() => setMenuOpen(false)}>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
