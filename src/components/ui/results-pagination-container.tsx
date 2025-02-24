import styles from "./results-pagination-container.module.css";

type ResultsPaginationContainerProps = {
  children: React.ReactNode;
};

export default function ResultsPaginationContainer({
  children,
}: ResultsPaginationContainerProps) {
  return <div className={styles.resultsPaginationContainer}>{children}</div>;
}
