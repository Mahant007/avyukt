import { teamData } from "../../data/about/team";
import styles from "../../About/about.module.css";
import Image from "next/image";

export default function TeamSection() {
  const founder = teamData[0];
  const others = teamData.slice(1);

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Team</h2>

        {/* ===== FOUNDER SHOWCASE ===== */}
        <div className={styles.founderSection}>
          <div className={styles.founderImageWrapper}>
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              className={styles.founderImage}
            />
          </div>

          <div className={styles.founderContent}>
            <h3>{founder.name}</h3>
            <span>{founder.role}</span>

            {founder.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* ===== OTHER MEMBERS ===== */}
        <div className={styles.otherMembers}>
          {others.map((member) => (
            <div key={member.id} className={styles.memberCard}>
              <div className={styles.memberImageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={styles.memberImage}
                />

                {/* HOVER OVERLAY */}
              </div>
              <div className={styles.memberOverlay}>
                <div className={styles.memberOverlayContent}>
                  <div className={styles.memberBio}>
                    <p>{member.bio[0]}</p>
                  </div>
                </div>
              </div>
              <div className={styles.memberInfo}>
                <h4>{member.name}</h4>
                <span>{member.role}</span>
                <span>{member.shortIntro}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
