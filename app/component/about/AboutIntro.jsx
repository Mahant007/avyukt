import styles from "../../About/about.module.css";

export default function AboutIntro({ data }) {
  return (
    <section className={styles.introSection}>
      <div className={styles.introContainer}>

        <div className={styles.introText}>
          <h2>{data.heading}</h2>
          {data.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className={styles.introImage}></div>

      </div>
    </section>
  );
}
