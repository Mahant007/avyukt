"use client";

import Link from "next/link";
import styles from "./PracticeHero.module.css";

export default function PracticeHero({
  title,
  description,
  backgroundImage,
  ctaText,
  ctaLink,
}) {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        {title && <h1>{title}</h1>}
        {description && <p>{description}</p>}

        {ctaText && ctaLink && (
          <Link href={ctaLink} className={styles.cta}>
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
