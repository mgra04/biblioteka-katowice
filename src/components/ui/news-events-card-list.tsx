import styles from "./news-events-card-list.module.css";

type NewsEventsCardListProps = {
  children: React.ReactNode;
};

export default function NewsEventsCardList({
  children,
}: NewsEventsCardListProps) {
  return <section className={styles.cardList}>{children}</section>;
}
