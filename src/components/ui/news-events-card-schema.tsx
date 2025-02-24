import Image from "next/image";
import styles from "./news-events-card-schema.module.css";

type NewsEventCardSchemaProps = {
  children: React.ReactNode;
  imgMobileUrl: string;
  imgDesktopUrl: string;
  imgAlt: string;
};

export default function NewsEventCardSchema({
  children,
  imgMobileUrl,
  imgDesktopUrl,
  imgAlt,
}: NewsEventCardSchemaProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <picture className={styles.pictureWrapper}>
          <source srcSet={imgDesktopUrl} media="(min-width: 75rem)" />
          <Image
            className={styles.image}
            src={imgMobileUrl}
            alt={imgAlt}
            fill
            sizes="(max-width: 78rem) 100vw, 24rem"
          />
        </picture>
      </div>

      <div className={styles.cardContent}>{children}</div>
    </div>
  );
}
