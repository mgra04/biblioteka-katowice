import Paragraph from "./paragraph";
import styles from "./results.module.css";

type ResultsProps = {
  totalCount: number;
  curPage: number;
  resultsPerPage: number;
};

export default function Results({
  totalCount,
  curPage,
  resultsPerPage,
}: ResultsProps) {
  const start = (curPage - 1) * resultsPerPage + 1;
  const end = Math.min(curPage * resultsPerPage, totalCount);
  return (
    <Paragraph className={styles.resultsParagraph}>
      Wyświetlono:{" "}
      <span className={styles.resultsBold}>
        {start} - {end} z {totalCount}
      </span>
    </Paragraph>
  );
}
