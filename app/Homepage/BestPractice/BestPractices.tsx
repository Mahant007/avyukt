"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./PracticeAreas.module.css";

export default function PracticeAreas({ title, subtitle, areas = [] }) {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateView = () => {
      const width = window.innerWidth;

      if (width <= 767) {
        setSlidesToShow(1);
      } else if (width <= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  if (!areas.length) return null;

  const showSlider = slidesToShow < 3;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADING */}
        <div className={styles.heading}>
          {title && <h2>{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
        </div>

        {/* GRID / SLIDER */}
        <div
          ref={sliderRef}
          className={`${styles.wrapper} ${
            showSlider ? styles.slider : styles.grid
          }`}
          style={
            showSlider
              ? { gridTemplateColumns: `repeat(${areas.length}, 1fr)` }
              : {}
          }
        >
          {areas.map((area, index) => (
            <div
              key={index}
              className={styles.card}
              style={showSlider ? { flex: `0 0 ${100 / slidesToShow}%` } : {}}
            >
              {/* ICON */}
              {area.icon && (
                <div className={styles.iconWrap}>
                  <img src={area.icon} alt={area.title} />
                </div>
              )}

              {/* CONTENT */}
              <div className={styles.content}>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>

              {/* VIEW MORE */}
              {area.viewMoreLink && (
                <div className={styles.action}>
                  <Link href={area.viewMoreLink} className={styles.viewMore}>
                    <span>View More</span>
                    <span className={styles.arrow}>→</span>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
