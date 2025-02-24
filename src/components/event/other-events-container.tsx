import styles from "./other-events-container.module.css";
import EventSlider from "../branch-event-slider";
import H2 from "../ui/h2";
import { TEventCard, TEventPage } from "@/lib/types";

type OtherEventsContainerProps = {
  event: TEventPage;
  events: TEventCard[];
  totalCount: number;
};

export default async function OtherEventsContainer({
  event,
  events,
  totalCount,
}: OtherEventsContainerProps) {
  return (
    <>
      {events && totalCount > 0 && (
        <section className={styles.branchUpcomingEventsContainer}>
          <H2 className={styles.branchSecHeading}>
            Inne wydarzenia w filii nr {event.branch.branchNumber}
          </H2>
          <EventSlider events={events} />
        </section>
      )}
    </>
  );
}
