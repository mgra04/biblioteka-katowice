import styles from "./branches-page.module.css";

import NewsFilterBtn from "@/components/news/news-filter-btn";
import { NewsSortBtn } from "@/components/news-sort-btn";
import BtnsGroup from "@/components/ui/btns-group";
import Divider from "@/components/ui/divider";
import H1 from "@/components/ui/h1";
import PageHeader from "@/components/ui/page-header";
import Pagination from "@/components/ui/pagination";
import Results from "@/components/ui/results";
import ResultsPaginationContainer from "@/components/ui/results-pagination-container";
import BranchesCardList from "@/components/branches-card-list";
import { getBranches } from "@/lib/server-utils";
import { z } from "zod";
import { BRANCHES_PER_PAGE } from "@/lib/constants";

type BranchesPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function page({ searchParams }: BranchesPageProps) {
  const { page } = await searchParams;
  const finalPage = page
    ? pageNumberSchema.safeParse(page).success
      ? pageNumberSchema.safeParse(page).data
      : 1
    : 1;
  const { branches, totalCount } = await getBranches(finalPage);
  const previousPath =
    finalPage && finalPage > 1 ? `/filie?page=${finalPage - 1}` : "";
  const nextPath =
    finalPage && totalCount > finalPage * 9
      ? `/filie?page=${finalPage + 1}`
      : "";

  return (
    <BranchesPage>
      <PageHeader>
        <H1
          className={styles.heading}
          withImage="yes"
          imageUrl="/branches-icon.svg"
          imageAlt="book with glasses icon"
          imageSize={56}
        >
          Filie
        </H1>

        <BtnsGroup>
          {/*ZMIENIĆ PRZYCISKI */}
          <NewsFilterBtn />
          <NewsSortBtn />
        </BtnsGroup>
      </PageHeader>

      <Divider />

      <ResultsPaginationContainer>
        <Results
          totalCount={totalCount}
          curPage={finalPage ?? 1}
          resultsPerPage={BRANCHES_PER_PAGE}
        />
        <Pagination
          className={styles.topPagination}
          page={finalPage ?? 1}
          nextPath={nextPath}
          previousPath={previousPath}
          totalCount={totalCount}
          site="filie"
        />
      </ResultsPaginationContainer>

      <BranchesCardList branches={branches} />

      <Pagination
        className={styles.bottomPagination}
        page={finalPage ?? 1}
        nextPath={nextPath}
        previousPath={previousPath}
        totalCount={totalCount}
        site="filie"
      />
    </BranchesPage>
  );
}

function BranchesPage({ children }: { children: React.ReactNode }) {
  return <main className={styles.branchesLayout}>{children}</main>;
}
