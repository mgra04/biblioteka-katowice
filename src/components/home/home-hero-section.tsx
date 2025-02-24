import Image from "next/image";
import styles from "./home-hero-section.module.css";
import H1 from "../ui/h1";
import Paragraph from "../ui/paragraph";
import BtnsGroup from "../ui/btns-group";
import Button from "../ui/button";
import HomeCardList from "./home-card-list";

export default function HomeHeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.leftSide}>
        <H1 className={styles.heading} withImage="no">
          <span className={styles.relativeSpan}>
            Twoja
            <div className={styles.loopImageWrapper}>
              <picture>
                <source
                  srcSet="/home/loop-desktop.svg"
                  media="(min-width: 46.5rem)"
                  width={180}
                  height={93}
                />
                <Image
                  className={styles.loopImage}
                  src="/home/loop-mobile.svg"
                  alt="Loop graphic"
                  width={120}
                  height={62}
                />
              </picture>
            </div>
          </span>
          biblioteka
        </H1>
        <Paragraph className={styles.paragraph}>
          Odkrywaj, czytaj i bądź na bieżąco! Sprawdź książki, audiobooki i
          e-booki dostępne w bibliotece, a także zobacz, co nowego dzieje się w
          świecie wydarzeń i aktualności.
        </Paragraph>
        <BtnsGroup className={styles.btnsGroup}>
          <Button link="yes" href="/aktualnosci" variant="outline" size="lg">
            Zobacz aktualności
          </Button>
          <Button link="yes" href="/wydarzenia" variant="outline" size="lg">
            Zobacz wydarzenia
          </Button>
        </BtnsGroup>
      </div>

      <HomeCardList />
    </section>
  );
}
