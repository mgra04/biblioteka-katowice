import styles from "./catalog-item-sections.module.css";

type CatalogItemSectionsProps = {
  children: React.ReactNode;
};

export default function CatalogItemSections({
  children,
}: CatalogItemSectionsProps) {
  return <div className={styles.sectionsWrapper}>{children}</div>;
}
