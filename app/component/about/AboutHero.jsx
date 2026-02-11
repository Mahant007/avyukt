import styles from "../../About/about.module.css";

export default function AboutHero({ data }) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>

      <div className={styles.heroContent}>
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
      </div>
    </section>
  );
}
