import styles from "../../contact/contact.module.css";

export default function ContactInfo({ office }) {
  return (
    <div className={styles.info}>
      <h3>Office Address</h3>
      {office.address.map((line, i) => (
        <p key={i}>{line}</p>
      ))}

      <h3>Contact</h3>
      <p>Phone: {office.phone}</p>
      <p>Email: {office.email}</p>

      <h3>Working Hours</h3>
      <p>{office.hours}</p>
    </div>
  );
}
