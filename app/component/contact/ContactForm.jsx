"use client";

import styles from "../../contact/contact.module.css";

export default function ContactForm({ form }) {
  return (
    <div className={styles.ContactForm}>
        <h3 className={styles.heading}>Drop your message</h3>
      <form
        className={styles.form}
        action={`https://formsubmit.co/${form.actionEmail}`}
        method="POST"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value={form.subject} />

        <input name="name" placeholder="Your Name" required />
        <input name="email" type="email" placeholder="Your Email" required />
        <input name="phone" placeholder="Your Phone" />
        <textarea name="message" placeholder="Your Message" required />

        <button type="submit">Send Message</button>

        <p className={styles.note}>
          Submitting this form does not create an attorney-client relationship.
        </p>
      </form>
    </div>
  );
}
