import styles from "./catalog-item-other-items-container.module.css";
import React from "react";
import H2 from "../ui/h2";
import ItemsSlider from "./items-slider";
import { TCatalogItemCard } from "@/lib/types";

type CatalogItemOtherItemsContainerProps = {
  items: TCatalogItemCard[];
};

export default function CatalogItemOtherItemsContainer({
  items,
}: CatalogItemOtherItemsContainerProps) {
  return (
    <section className={styles.itemOtherAuthorItems}>
      <H2 className={styles.itemSectionHeading}>Inne książki autora</H2>
      <ItemsSlider items={items} />
    </section>
  );
}
