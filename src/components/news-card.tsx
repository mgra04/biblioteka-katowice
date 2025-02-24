import Image from "next/image";
import styles from "./news-card.module.css";
import BtnsGroup from "./ui/btns-group";
import Button from "./ui/button";
import H2 from "./ui/h2";
import Paragraph from "./ui/paragraph";
import { TNewsItem } from "@/lib/types";
import ShareBtn from "./ui/share-btn";
import SessionLikeBtnWrapper from "./ui/session-like-btn-wrapper";

type NewsCardProps = {
  newsItem: TNewsItem;
};

export default function NewsCard({ newsItem }: NewsCardProps) {
  return (
    <div className={styles.newsCard}>
      <div className={styles.newsImageWrapper}>
        <picture className={styles.pictureWrapper}>
          <source
            srcSet={newsItem.newsDesktopImageUrl}
            media="(min-width: 78rem)"
          />
          <Image
            className={styles.newsImage}
            src={newsItem.newsMobileImageUrl}
            alt={newsItem.newsImageAlt}
            fill
            sizes="(max-width: 78rem) 100vw, 24rem"
          />
        </picture>
      </div>

      <div className={styles.newsCardContent}>
        <H2 className={styles.newsTitle}>{newsItem.newsTitle}</H2>
        <Paragraph className={styles.newsParagraph}>
          {newsItem.newsDescription[0].text}
        </Paragraph>

        <section className={styles.newsCardFooter}>
          <BtnsGroup>
            <SessionLikeBtnWrapper
              type="news"
              id={newsItem.id}
              text={newsItem.newsTitle}
            />
            <ShareBtn
              type="aktualnosci"
              slug={newsItem.newsSlug}
              toastText={`Skopiowano link do postu: ${newsItem.newsTitle}`}
            />
          </BtnsGroup>

          <Button
            link="yes"
            href={`/aktualnosci/${newsItem.newsSlug}`}
            variant="primary"
            size="md"
          >
            Czytaj więcej
          </Button>
        </section>
      </div>
    </div>
  );
}
