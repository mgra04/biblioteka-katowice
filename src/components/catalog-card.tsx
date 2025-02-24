import Image from "next/image";
import styles from "./catalog-card.module.css";
import Tag from "./ui/tag";
import H2 from "./ui/h2";
import CardDetails from "./ui/card-details";
import Link from "next/link";
import Button from "./ui/button";
import BtnsGroup from "./ui/btns-group";
import CardDetailsList from "./ui/card-details-list";
import CheckAvailabilityBtn from "./check-availability-btn";
import { TCatalogItemCard } from "@/lib/types";
import { getCatalogItemTypeLabel } from "@/lib/utils";
import ShareBtn from "./ui/share-btn";
import SessionLikeBtnWrapper from "./ui/session-like-btn-wrapper";

type CatalogCardProps = {
  catalogItem: TCatalogItemCard;
};

export default function CatalogCard({ catalogItem }: CatalogCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={catalogItem.catalogItemImageUrl}
          alt={catalogItem.catalogItemImageAlt}
          fill
          sizes="(max-width: 78rem) 100vw, 24rem"
        />
      </div>

      <div className={styles.cardContent}>
        <Tag
          style={{ width: "fit-content", marginBottom: "0.8rem" }}
          variant="default"
          size="lg"
        >
          {getCatalogItemTypeLabel(catalogItem.catalogItemType)}
        </Tag>
        <H2 className={styles.cardTitle}>{catalogItem.catalogItemTitle}</H2>

        {catalogItem.catalogItemType === "boardGame" ? (
          <CardDetailsList style={{ gap: "0.6rem" }}>
            <CardDetails className={styles.cardText} type="text">
              Autor: <Link href="/katalog-glowny">Andrzej Sapkowski</Link>
            </CardDetails>
            <CardDetails className={styles.cardText} type="text">
              Wydawnictwo: <Link href="/katalog-glowny">SuperNOWA</Link>
            </CardDetails>
          </CardDetailsList>
        ) : (
          <CardDetailsList style={{ gap: "0.6rem" }}>
            {catalogItem.catalogItemParams.map((param) =>
              param.catalogItemParamValue.map((value) =>
                value.catalogItemParamLink ? (
                  <CardDetails
                    key={value.id}
                    className={styles.cardText}
                    type="text"
                  >
                    {param.catalogItemParamName}:{" "}
                    <Link href={value.catalogItemParamLink}>
                      {value.catalogItemParamValue}
                    </Link>
                  </CardDetails>
                ) : (
                  <CardDetails
                    key={value.id}
                    className={styles.cardText}
                    type="text"
                  >
                    {param.catalogItemParamName}:{" "}
                    <span>{value.catalogItemParamValue}</span>
                  </CardDetails>
                )
              )
            )}
          </CardDetailsList>
        )}

        <section className={styles.cardFooter}>
          <CheckAvailabilityBtn branches={catalogItem.branches} />

          <Button
            link="yes"
            href={`/katalog-glowny/${catalogItem.catalogItemSlug}`}
            variant="primary"
            size="md"
          >
            Szczegóły
          </Button>
        </section>

        <div className={styles.cardAboluteBtns}>
          <BtnsGroup style={{ flexDirection: "column" }}>
            <SessionLikeBtnWrapper
              type="catalogItem"
              id={catalogItem.id}
              text={catalogItem.catalogItemTitle}
            />
            <ShareBtn
              slug={catalogItem.catalogItemSlug}
              toastText={`Skopiowany link do przedmiotu: ${catalogItem.catalogItemTitle}`}
              type="katalog-glowny"
            />
          </BtnsGroup>
        </div>
      </div>
    </div>
  );
}
