"use client";

import styles from "./PracticeBanner.module.css";

export default function PracticeBanner({
  title,
  subtitle,
  backgroundImage,
}) {
  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        {title && <h1>{title}</h1>}
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
