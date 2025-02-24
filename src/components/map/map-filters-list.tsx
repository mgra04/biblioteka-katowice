import styles from "./map-filters-list.module.css";

type MapFiltersListProps = {
  children: React.ReactNode;
};

export default function MapFiltersList({ children }: MapFiltersListProps) {
  return <section className={styles.filtersList}>{children}</section>;
}
