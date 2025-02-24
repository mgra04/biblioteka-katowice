import styles from "./footer.module.css";
import FooterAboutUs from "./footer-about-us";
import FooterCheckOut from "./footer-check-out";
import FooterFindUs from "./footer-find-us";
import FooterInformation from "./footer-information";
import FooterWebsite from "./footer-website";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <section className={styles.footerLinks}>
          <FooterWebsite className={styles.footerWebsite} />
          <FooterAboutUs className={styles.footerAboutUs} />
          <FooterInformation className={styles.footerInformation} />
          <FooterCheckOut className={styles.footerCheckOut} />
        </section>

        <FooterFindUs />
      </div>
    </footer>
  );
}
