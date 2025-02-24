import H1 from "@/components/ui/h1";
import styles from "./news-page.module.css";
import BtnsGroup from "@/components/ui/btns-group";
import NewsCard from "@/components/news-card";
import Pagination from "@/components/ui/pagination";
import Results from "@/components/ui/results";
import NewsFilterBtn from "@/components/news/news-filter-btn";
import { NewsSortBtn } from "@/components/news-sort-btn";
import PageHeader from "@/components/ui/page-header";
import Divider from "@/components/ui/divider";
import ResultsPaginationContainer from "@/components/ui/results-pagination-container";
import NewsEventsCardList from "@/components/ui/news-events-card-list";
import { z } from "zod";
import { getNews } from "@/lib/server-utils";
import { NEWS_PER_PAGE } from "@/lib/constants";

type NewsPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function page({ searchParams }: NewsPageProps) {
  const { page } = await searchParams;
  const finalPage = page
    ? pageNumberSchema.safeParse(page).success
      ? pageNumberSchema.safeParse(page).data
      : 1
    : 1;
  const { news, totalCount } = await getNews(finalPage);
  const previousPath =
    finalPage && finalPage > 1 ? `/aktualnosci?page=${finalPage - 1}` : "";
  const nextPath =
    finalPage && totalCount > finalPage * NEWS_PER_PAGE
      ? `/aktualnosci?page=${finalPage + 1}`
      : "";
  return (
    <NewsPage>
      <PageHeader>
        <H1
          className={styles.heading}
          withImage="yes"
          imageUrl="/newsIcon.svg"
          imageAlt="ringtone icon"
          imageSize={56}
        >
          Aktualności
        </H1>

        <BtnsGroup>
          <NewsFilterBtn />
          <NewsSortBtn />
        </BtnsGroup>
      </PageHeader>

      <Divider />

      <ResultsPaginationContainer>
        <Results
          totalCount={totalCount}
          curPage={finalPage ?? 1}
          resultsPerPage={NEWS_PER_PAGE}
        />
        <Pagination
          className={styles.topPagination}
          page={finalPage ?? 1}
          nextPath={nextPath}
          previousPath={previousPath}
          totalCount={totalCount}
          site="aktualnosci"
        />
      </ResultsPaginationContainer>

      <NewsEventsCardList>
        {news.map((newsItem) => (
          <NewsCard key={newsItem.id} newsItem={newsItem} />
        ))}
      </NewsEventsCardList>

      <Pagination
        className={styles.bottomPagination}
        page={finalPage ?? 1}
        nextPath={nextPath}
        previousPath={previousPath}
        totalCount={totalCount}
        site="aktualnosci"
      />
    </NewsPage>
  );
}

function NewsPage({ children }: { children: React.ReactNode }) {
  return <main className={styles.newsLayout}>{children}</main>;
}
