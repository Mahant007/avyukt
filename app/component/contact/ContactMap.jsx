import styles from "../../contact/contact.module.css";

export default function ContactMap({ map }) {
  return (
    <div className={styles.map}>
      <iframe
        src={map.embedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
