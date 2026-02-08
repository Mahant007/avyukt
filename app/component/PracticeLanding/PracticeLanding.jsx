"use client";

import styles from "./PracticeLanding.module.css";

export default function PracticeLanding({
  title,
  overview,
  sections = [],
  process = [],
  faqs = [],
}) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
       

        {/* TITLE */}
        {title && <h1 className={styles.title}>{title}</h1>}

        {/* OVERVIEW */}
        {overview && (
          <div className={styles.overview}>
            {overview.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        )}

        {/* CONTENT SECTIONS */}
        {sections.map((section, i) => (
          <div key={i} className={styles.block}>
            <h2>{section.heading}</h2>

            {section.description && (
              <p className={styles.text}>{section.description}</p>
            )}

            {section.points && (
              <ul>
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* PROCESS */}
        {process.length > 0 && (
          <div className={styles.block}>
            <h2>Civil Litigation Process</h2>
            <ol className={styles.process}>
              {process.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        )}

        {/* FAQs */}
        {faqs.length > 0 && (
          <div className={styles.block}>
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, i) => (
              <div key={i} className={styles.faq}>
                <strong>{faq.q}</strong>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
