import Image from "next/image";
import styles from "../../About/about.module.css";

export default function AboutIntro({ data }) {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutcontainer}>

        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <h2>{data.heading}</h2>

          {data.content.map((para, index) => (
            <p key={index}>{para}</p>
          ))}

          {data.link && (
            <a href={data.link} className={styles.readMore}>
              Read More →
            </a>
          )}
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
          <Image
            src={data.image}
            alt={data.title}
            fill
            alt="aboutImage"
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
}
