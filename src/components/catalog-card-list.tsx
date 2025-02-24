import styles from "./catalog-card-list.module.css";

type CatalogCardListProps = {
  children: React.ReactNode;
};

export default function CatalogCardList({ children }: CatalogCardListProps) {
  return <section className={styles.cardList}>{children}</section>;
}
