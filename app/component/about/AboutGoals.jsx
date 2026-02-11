import styles from "../../About/about.module.css";

export default function AboutGoals({ data }) {
  return (
    <section className={styles.goalSection}>
      <div className={styles.goalContainer}>
        <h2>{data.heading}</h2>

        <ul>
          {data.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
