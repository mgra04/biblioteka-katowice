import styles from "./login-page.module.css";
import Button from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import AccountBenefitsSection from "@/components/sign/account-benefits-section";
import SignDivider from "@/components/sign/sign-divider";
import SignFullForm from "@/components/sign/sign-full-form";

export default function page() {
  return (
    <main className={styles.container}>
      <Button
        style={{ fontSize: "1.4rem" }}
        link="yes"
        href="/"
        className={styles.backBtn}
        variant="primary"
        size="lg"
      >
        <MoveLeft size={18} /> Wróć do strony głównej
      </Button>

      <section className={styles.formContainer}>
        <picture>
          <source
            srcSet="/sign/logo-desktop.svg"
            media="(min-width: 46.5rem)"
            width={373}
            height={197}
          />
          <Image
            className={styles.logoImage}
            src="/sign/logo-mobile.svg"
            alt="Logo of public library in Katowice"
            width={263}
            height={144}
          />
        </picture>

        <SignFullForm version="signin" className={styles.fullForm} />

        <SignDivider />

        <AccountBenefitsSection />
      </section>
    </main>
  );
}
