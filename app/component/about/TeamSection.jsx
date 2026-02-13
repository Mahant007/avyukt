import { teamData } from "../../data/about/team";
import styles from "../../About/about.module.css";
import Image from "next/image";

export default function TeamSection() {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
       <div className={styles.sectionHeader}>
      <span className={styles.sectionSubtitle}>Our Professionals</span>
      <h2 className={styles.sectionTitle}>Meet Our Legal Team</h2>
      <div className={styles.sectionDivider}></div>
    </div>

        <div className={styles.teamGrid}>
          {teamData.map((member) => (
            <div
              key={member.id}
              className={`${styles.memberCard} ${
                member.isFounder ? styles.founderCard : ""
              }`}
            >
              <div className={styles.memberImageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={styles.memberImage}
                />

              </div>
                <div className={styles.memberOverlay}>
                  <p>{member.bio[0]}</p>
                </div>

              <div className={styles.memberInfo}>
                <h4>{member.name}</h4>
                <span className={styles.role}>{member.role}</span>
                <p className={styles.shortIntro}>{member.shortIntro}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
