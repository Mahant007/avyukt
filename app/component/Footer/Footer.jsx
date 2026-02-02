"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import { footerData } from "./data/footerData";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const { brand, practiceAreas, usefulLinks, contact, copyright } = footerData;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* MAIN FLEX */}
        <div className={styles.main}>
          {/* LEFT */}
          <div className={styles.left}>
            <Image src={brand.logo} alt={brand.name} width={180} height={60} />

            <p className={styles.description}>{brand.description}</p>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            {/* PRACTICE AREAS */}
            <div className={styles.accordion}>
              <button
                className={styles.accordionHeader}
                onClick={() => toggle("practice")}
              >
                Practice Area
                <span
                  className={`${styles.icon} ${
                    openSection === "practice" ? styles.rotate : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              <ul
                className={`${styles.accordionBody}  ${
                  openSection === "practice" ? styles.open : ""
                }`}
              >
                {practiceAreas.map((item, i) => (
                  <li key={i}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* USEFUL LINKS */}
            <div className={styles.accordion}>
              <button
                className={styles.accordionHeader}
                onClick={() => toggle("links")}
              >
                Useful Links
                <span
                  className={`${styles.icon} ${
                    openSection === "links" ? styles.rotate : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              <ul
                className={`${styles.accordionBody} ${
                  openSection === "links" ? styles.open : ""
                }`}
              >
                {usefulLinks.map((item, i) => (
                  <li key={i}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div className={styles.accordion}>
              <button
                className={styles.accordionHeader}
                onClick={() => toggle("contact")}
              >
                Keep In Touch
                <span
                  className={`${styles.icon} ${
                    openSection === "contact" ? styles.rotate : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              <ul
                className={`${styles.accordionBody} ${
                  openSection === "contact" ? styles.open : ""
                }`}
              >
                <li>📍 {contact.address}</li>
                <li>
                  ✉️ <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
                <li>
                  📞 <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                </li>
                <li>🕒 {contact.hours}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className={styles.bottom}>{copyright}</div>
      </div>
    </footer>
  );
}
