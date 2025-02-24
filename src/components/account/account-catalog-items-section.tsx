import styles from "./account-catalog-items-section.module.css";
import { TCatalogItemCard } from "@/lib/types";
import H2 from "../ui/h2";
import AccountCatalogItemsSlider from "./account-catalog-items-slider";

type AccountCatalogItemsSectionProps = {
  catalogItems: TCatalogItemCard[];
};

export default function AccountCatalogItemsSection({
  catalogItems,
}: AccountCatalogItemsSectionProps) {
  return (
    <section className={styles.catalogItemsSection}>
      <H2 className={styles.sectionHeading}>Zapisane aktualności</H2>
      <AccountCatalogItemsSlider catalogItems={catalogItems} />
    </section>
  );
}
