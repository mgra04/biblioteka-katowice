import Button from "@/components/ui/button";
import styles from "./news-item-page.module.css";
import { Heart, MoveLeft } from "lucide-react";
import Image from "next/image";
import H1 from "@/components/ui/h1";
import Paragraph from "@/components/ui/paragraph";
import BtnsGroup from "@/components/ui/btns-group";
import { getNewsItem } from "@/lib/server-utils";
import H3 from "@/components/ui/h3";
import { TNewsDescription } from "@/lib/types";
import ShareBtn from "@/components/ui/share-btn";

type Props = {
  params: Promise<{ newsSlug: string }>;
};

function renderDescription(item: TNewsDescription) {
  return (
    <div key={item.id} className={styles.descriptionItem}>
      {item.title && <H3 className={styles.sectionTitle}>{item.title}</H3>}
      {item.text && (
        <Paragraph className={styles.paragraph}>{item.text}</Paragraph>
      )}
      {item.subItems && item.subItems.length > 0 && (
        <ul className={styles.subList}>
          {item.subItems.map((subItem) => renderListItem(subItem))}
        </ul>
      )}
    </div>
  );
}

function renderListItem(item: TNewsDescription) {
  return (
    <li key={item.id} className={styles.subListItem}>
      {item.title && <H3 className={styles.listTitle}>{item.title}</H3>}
      {item.text && (
        <Paragraph className={styles.listParagraph}>{item.text}</Paragraph>
      )}

      {item.subItems && item.subItems.length > 0 && (
        <ul className={styles.subList}>
          {item.subItems.map((child) => renderListItem(child))}
        </ul>
      )}
    </li>
  );
}

export default async function page({ params }: Props) {
  const { newsSlug } = await params;
  const newsItem = await getNewsItem(newsSlug);

  return (
    <main className={styles.container}>
      <Button
        style={{ fontSize: "1.4rem" }}
        link="yes"
        href="/aktualnosci"
        className={styles.backBtn}
        variant="primary"
        size="lg"
      >
        <MoveLeft size={18} /> Wróć do listy aktualności
      </Button>

      <section className={styles.item}>
        <div className={styles.itemImageContainer}>
          <Image
            className={styles.itemImage}
            src={newsItem.newsDesktopImageUrl}
            alt={newsItem.newsImageAlt}
            fill
            sizes="(max-width: 78rem) 100vw, 24rem"
          />
        </div>

        <div className={styles.brushImageWrapper}>
          <Image
            className={styles.brushImage}
            src="/small-brush.avif"
            alt="brush graphic"
            fill
            sizes="(max-width: 78rem) 100vw, 24rem"
          />
        </div>

        <section className={styles.itemContent}>
          <H1 className={styles.heading} withImage="no">
            {newsItem.newsTitle}
          </H1>
          <section className={styles.itemSections}>
            {newsItem.newsDescription.map((section) =>
              renderDescription(section)
            )}
          </section>
        </section>

        <BtnsGroup className={styles.itemBtnsGroup}>
          <Button variant="outline" size="icon">
            <Heart size={22} />
          </Button>
          <ShareBtn
            slug={newsItem.newsSlug}
            toastText={`Skopiowano link do postu: ${newsItem.newsTitle}`}
            type="aktualnosci"
          />
        </BtnsGroup>
      </section>
    </main>
  );
}
