import Image from "next/image";
import HomeCard from "./home-card";
import styles from "./home-card-list.module.css";

export default function HomeCardList() {
  return (
    <section className={styles.cards}>
      <HomeCard
        position="topLeft"
        btnHref="/katalog-glowny"
        btnText="Przeglądaj katalog"
        title="Katalog biblioteki"
        description="Wszystkie książki, audiobooki, e-booki i gry planszowe dostępne w wybranych filiach"
      />
      <HomeCard
        position="topRight"
        btnHref="/legimi"
        btnText="Sprawdź Legimi"
        title="Legimi"
        description="Tysiące audiobooków i e-booków dostępnych online - odkryj je dzięki bibliotece!"
      />
      <HomeCard
        position="bottomLeft"
        btnHref="/academica"
        btnText="Sprawdź Academica"
        title="Academica"
        description="Cyfrowa wypożyczalnia publikacji naukowych dla studentów, uczniów i badaczy"
      />
      <HomeCard
        position="bottomRight"
        btnHref="/ibuk-libra"
        btnText="Sprawdź Ibuk Libra"
        title="Ibuk Libra"
        description="Dostęp do setek książek naukowych i podręczników w wersji online"
      />
      <div className={styles.brushImageWrapper}>
        <picture className={styles.pictureWrapper}>
          <source srcSet="/home/brush-tablet.avif" media="(min-width: 35rem)" />
          <source
            srcSet="/home/brush-desktop.avif"
            media="(min-width: 46.875rem)"
          />
          <Image
            className={styles.brushImage}
            src="/home/brush-mobile.avif"
            alt="Loop graphic"
            fill
            sizes="(max-width: 78rem) 100vw, 24rem"
          />
        </picture>
      </div>
    </section>
  );
}
