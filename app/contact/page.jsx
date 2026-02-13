import { contactData } from "../data/contact/contact";
import styles from "./contact.module.css";
import ContactInfo from "../component/contact/ContactInfo";
import ContactForm from "../component/contact/ContactForm";
import ContactMap from "../component/contact/ContactMap";
import PracticeBanner from "../component/PracticeBanner/PracticeBanner";
// import { contactData } from "../data/contact/contact";

export default function ContactPage() {
  return (
    <section className={styles.page}>
      <PracticeBanner {...contactData.banner}/>
      <div className={styles.container}>



        <div className={styles.grid}>
          <ContactInfo office={contactData.office} />
          <ContactForm form={contactData.form} />
        </div>

        <ContactMap map={contactData.map} />

      </div>
    </section>
  );
}
