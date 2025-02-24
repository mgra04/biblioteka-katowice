import BtnsGroup from "@/components/ui/btns-group";
import styles from "./catalog-page.module.css";
import Searchbar from "@/components/searchbar";
import Divider from "@/components/ui/divider";
import ResultsPaginationContainer from "@/components/ui/results-pagination-container";
import Results from "@/components/ui/results";
import Pagination from "@/components/ui/pagination";
import CatalogCard from "@/components/catalog-card";
import CatalogCardList from "@/components/catalog-card-list";
import CatalogSortBtn from "@/components/catalog/catalog-sort-btn";
import CatalogFilterBtn from "@/components/catalog/catalog-filter-btn";
import { z } from "zod";
import { getCatalogItems } from "@/lib/server-utils";
import { CATALOG_ITEMS_PER_PAGE } from "@/lib/constants";

type CatalogItemsPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function page({ searchParams }: CatalogItemsPageProps) {
  const { page } = await searchParams;
  const finalPage = page
    ? pageNumberSchema.safeParse(page).success
      ? pageNumberSchema.safeParse(page).data
      : 1
    : 1;
  const { catalogItems, totalCount } = await getCatalogItems(finalPage);
  const previousPath =
    finalPage && finalPage > 1 ? `/katalog-glowny?page=${finalPage - 1}` : "";
  const nextPath =
    finalPage && totalCount > finalPage * 9
      ? `/katalog-glowny?page=${finalPage + 1}`
      : "";

  return (
    <CatalogPage>
      <section className={styles.catalogHeader}>
        <Searchbar />

        <BtnsGroup className={styles.btnsGroup}>
          <CatalogFilterBtn />
          <CatalogSortBtn />
        </BtnsGroup>
      </section>

      <Divider style={{ marginTop: "3.2rem" }} />

      <ResultsPaginationContainer>
        <Results
          totalCount={totalCount}
          curPage={finalPage ?? 1}
          resultsPerPage={CATALOG_ITEMS_PER_PAGE}
        />
        <Pagination
          className={styles.topPagination}
          page={finalPage ?? 1}
          nextPath={nextPath}
          previousPath={previousPath}
          totalCount={totalCount}
          site="katalog-glowny"
        />
      </ResultsPaginationContainer>

      <CatalogCardList>
        {catalogItems.map((item) => (
          <CatalogCard key={item.id} catalogItem={item} />
        ))}
      </CatalogCardList>
    </CatalogPage>
  );
}

function CatalogPage({ children }: { children: React.ReactNode }) {
  return <main className={styles.catalogLayout}>{children}</main>;
}
