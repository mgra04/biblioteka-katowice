import Button from "./button";
import { MoveLeft, MoveRight } from "lucide-react";
import styles from "./pagination.module.css";
import { cn } from "@/lib/utils";
import PaginationButtons from "./pagination-buttons";
import { BRANCHES_PER_PAGE } from "@/lib/constants";

type PaginationProps = {
  className?: string;
  page: number;
  previousPath: string;
  nextPath: string;
  totalCount: number;
  site: "wydarzenia" | "filie" | "aktualnosci" | "katalog-glowny";
};

export default function Pagination({
  className,
  page,
  previousPath,
  nextPath,
  totalCount,
  site,
}: PaginationProps) {
  const numPages = Math.ceil(totalCount / BRANCHES_PER_PAGE);
  const curPage = Number.isInteger(page) && page > 0 ? page : 1;

  return (
    <section className={cn(styles.paginationContainer, className)}>
      {curPage !== 1 && (
        <Button
          link="yes"
          href={previousPath}
          variant="primary"
          size="paginationArrow"
        >
          <MoveLeft className={styles.moveIcon} />
        </Button>
      )}

      <PaginationButtons curPage={page} numPages={numPages} site={site} />

      {curPage !== numPages && (
        <Button
          link="yes"
          href={nextPath}
          variant="primary"
          size="paginationArrow"
        >
          <MoveRight className={styles.moveIcon} />
        </Button>
      )}
    </section>
  );
}
