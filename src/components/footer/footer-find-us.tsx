import styles from "./footer-find-us.module.css";
import Image from "next/image";
import BtnsGroup from "../ui/btns-group";
import Button from "../ui/button";
import H2 from "../ui/h2";

export default function FooterFindUs() {
  return (
    <section className={styles.findUsContainer}>
      <H2 className={styles.heading}>Znajdź nas</H2>
      <BtnsGroup>
        <Button size="icon" variant="primary">
          <Image
            src="/facebook-footer.svg"
            alt="Facebook icon"
            width={26}
            height={26}
          />
        </Button>
        <Button size="icon" variant="primary">
          <Image
            src="/youtube-footer.svg"
            alt="Youtube icon"
            width={26}
            height={26}
          />
        </Button>
        <Button size="icon" variant="primary">
          <Image
            src="/instagram-footer.svg"
            alt="Instagram icon"
            width={26}
            height={26}
          />
        </Button>
      </BtnsGroup>
    </section>
  );
}
