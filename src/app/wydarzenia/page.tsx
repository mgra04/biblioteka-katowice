import H1 from "@/components/ui/h1";
import styles from "./events-page.module.css";
import BtnsGroup from "@/components/ui/btns-group";
import Pagination from "@/components/ui/pagination";
import Results from "@/components/ui/results";
import PageHeader from "@/components/ui/page-header";
import Divider from "@/components/ui/divider";
import ResultsPaginationContainer from "@/components/ui/results-pagination-container";
import NewsEventsCardList from "@/components/ui/news-events-card-list";
import EventCard from "@/components/event-card";
import EventsFilterBtn from "@/components/events/events-filter-btn";
import EventsPickDate from "@/components/events/events-pick-date";
import { z } from "zod";
import { getEvents } from "@/lib/server-utils";
import { EVENTS_PER_PAGE } from "@/lib/constants";

type EventsPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function page({ searchParams }: EventsPageProps) {
  const { page } = await searchParams;
  const finalPage = page
    ? pageNumberSchema.safeParse(page).success
      ? pageNumberSchema.safeParse(page).data
      : 1
    : 1;
  const { events, totalCount } = await getEvents(finalPage);
  const previousPath =
    finalPage && finalPage > 1 ? `/wydarzenia?page=${finalPage - 1}` : "";
  const nextPath =
    finalPage && totalCount > finalPage * 9
      ? `/wydarzenia?page=${finalPage + 1}`
      : "";

  return (
    <EventsPage>
      <PageHeader>
        <H1
          className={styles.heading}
          withImage="yes"
          imageUrl="/events-icon.svg"
          imageAlt="calendar icon"
          imageSize={56}
        >
          Wydarzenia
        </H1>

        <BtnsGroup className={styles.btnGroup}>
          <EventsFilterBtn />
          <EventsPickDate />
        </BtnsGroup>
      </PageHeader>

      <Divider />

      <ResultsPaginationContainer>
        <Results
          totalCount={totalCount}
          curPage={finalPage ?? 1}
          resultsPerPage={EVENTS_PER_PAGE}
        />
        <Pagination
          className={styles.topPagination}
          page={finalPage ?? 1}
          nextPath={nextPath}
          previousPath={previousPath}
          totalCount={totalCount}
          site="wydarzenia"
        />
      </ResultsPaginationContainer>

      <NewsEventsCardList>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </NewsEventsCardList>

      <Pagination
        className={styles.bottomPagination}
        page={finalPage ?? 1}
        nextPath={nextPath}
        previousPath={previousPath}
        totalCount={totalCount}
        site="wydarzenia"
      />
    </EventsPage>
  );
}

function EventsPage({ children }: { children: React.ReactNode }) {
  return <main className={styles.eventsLayout}>{children}</main>;
}
