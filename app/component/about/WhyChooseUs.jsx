import styles from "../../About/about.module.css";

export default function WhyChooseUs({ data }) {
  return (
    <section className={styles.whySection}>
      <h2>Why Choose Us</h2>

      <div className={styles.whyGrid}>
        {data.map((item, i) => (
          <div key={i} className={styles.whyCard}>
            <div className={styles.cardNumber}>
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
