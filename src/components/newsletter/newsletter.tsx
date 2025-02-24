import NewsletterForm from "./newsletter-form";
import styles from "./newsletter.module.css";
import H1 from "../ui/h1";
import NewsletterPaperAircraft from "./newsletter-paper-aircraft";
import NewsletterSpiral1 from "./newsletter-spiral1";
import NewsletterSpiral2 from "./newsletter-spiral2";
import NewsletterSpiral3 from "./newsletter-spiral3";

export default function Newsletter() {
  return (
    <section className={styles.newsletterSection}>
      <div className={styles.newsletterContent}>
        <H1
          withImage="yes"
          imageSize="var(--image-size)"
          imageAlt="Graphic of an envelope with a protruding letter"
          imageUrl="/newsletter-image.svg"
          className={styles.newsletterHeading}
        >
          Newsletter
        </H1>

        <NewsletterForm />

        <NewsletterPaperAircraft className={styles.newsletterPaperAircraft} />
        <NewsletterSpiral1 className={styles.newsletterSpiral1} />
        <NewsletterSpiral2 className={styles.newsletterSpiral2} />
        <NewsletterSpiral3 className={styles.newsletterSpiral3} />
      </div>
    </section>
  );
}
