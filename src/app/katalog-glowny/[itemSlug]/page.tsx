import Button from "@/components/ui/button";
import styles from "./catalog-item-page.module.css";
import { Heart, MoveLeft } from "lucide-react";
import Paragraph from "@/components/ui/paragraph";
import BtnsGroup from "@/components/ui/btns-group";
import ParamsItemList from "@/components/catalog-item/params-item-list";
import ParamsItem from "@/components/catalog-item/params-item";
import H1 from "@/components/ui/h1";
import CatalogItemOtherItemsContainer from "@/components/catalog-item/catalog-item-other-items-container";
import ItemAvailabilityStatus from "@/components/catalog-item/item-availability-status";
import ItemFullDescription from "@/components/catalog-item/item-full-description";
import ItemParams from "@/components/catalog-item/item-params";
import ItemAboutAuthor from "@/components/catalog-item/item-about-author";
import CatalogItemSections from "@/components/catalog-item/catalog-item-sections";
import { getCatalogItem, getOtherBooksByAuthor } from "@/lib/server-utils";
import ShareBtn from "@/components/ui/share-btn";
import Image from "next/image";

interface CustomCSSProperties extends React.CSSProperties {
  "--aspect-ratio"?: string;
}

type Props = {
  params: Promise<{ itemSlug: string }>;
};

export default async function page({ params }: Props) {
  const { itemSlug } = await params;
  const catalogItem = await getCatalogItem(itemSlug);
  const authorId = catalogItem.CatalogItemAuthor[0].author.id;
  const otherBooks = await getOtherBooksByAuthor(authorId, catalogItem.id);

  const paddingPercentage =
    (+catalogItem.catalogItemHeight / +catalogItem.catalogItemWidth) * 100;
  const customStyle: CustomCSSProperties = {
    "--aspect-ratio": `${paddingPercentage}%`,
  };
  const filteredParams = catalogItem.catalogItemParams.filter((param) =>
    [
      "author",
      "publisher",
      "dimensions",
      "numberOfPages",
      "publishYear",
    ].includes(param.catalogItemParamType)
  );

  return (
    <main>
      <section className={styles.container}>
        <Button
          style={{ fontSize: "1.4rem" }}
          link="yes"
          href="/katalog-glowny"
          className={styles.backBtn}
          variant="primary"
          size="lg"
        >
          <MoveLeft size={18} /> Wróć do katalogu
        </Button>

        <section className={styles.item}>
          <div style={customStyle} className={styles.itemImageContainer}>
            <Image
              className={styles.itemImage}
              src={catalogItem.catalogItemImageUrl}
              alt={catalogItem.catalogItemImageAlt}
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

          <div className={styles.itemContent}>
            <H1 withImage="no" className={styles.itemHeading}>
              {catalogItem.catalogItemTitle}
            </H1>
            <Paragraph className={styles.itemDescription}>
              {catalogItem.catalogItemDescription}{" "}
              <span className={styles.itemReadMoreContainer}>
                <a
                  className={styles.itemReadMoreBtn}
                  href="#item-full-description"
                >
                  Czytaj więcej
                </a>
              </span>
            </Paragraph>

            <ParamsItemList
              className={styles.paramsShortItemList}
              version="short"
            >
              {filteredParams.map((param) =>
                param.catalogItemParamValue.map((value) => (
                  <ParamsItem
                    key={value.id}
                    label={param.catalogItemParamName}
                    link={value.catalogItemParamLink ? "yes" : "no"}
                    content={value.catalogItemParamValue}
                    version="short"
                    href={value.catalogItemParamLink || undefined}
                  />
                ))
              )}
            </ParamsItemList>

            <Button
              className={styles.itemButton}
              size="lg"
              variant="outline"
              link="yes"
              href="#item-params"
            >
              Więcej parametrów
            </Button>
          </div>

          <BtnsGroup className={styles.itemBtnsGroup}>
            <Button variant="outline" size="icon">
              <Heart size={22} />
            </Button>
            <ShareBtn
              slug={catalogItem.catalogItemSlug}
              toastText={`Skopiowany link do przedmiotu: ${catalogItem.catalogItemTitle}`}
              type="katalog-glowny"
            />
          </BtnsGroup>
        </section>
      </section>

      <CatalogItemSections>
        <ItemAvailabilityStatus branches={catalogItem.branches} />

        <ItemFullDescription description={catalogItem.catalogItemDescription} />

        <ItemParams params={catalogItem.catalogItemParams} />

        <ItemAboutAuthor
          authorName={catalogItem.CatalogItemAuthor[0].author.authorName}
          authorAbout={catalogItem.CatalogItemAuthor[0].author.authorAbout}
        />

        <CatalogItemOtherItemsContainer items={otherBooks} />
      </CatalogItemSections>
    </main>
  );
}
