import styles from "./branch-upcoming-events-container.module.css";
import H2 from "../ui/h2";
import BranchEventSlider from "../branch-event-slider";
import { TEventCard } from "@/lib/types";

type BranchUpcomingEventsContainerProps = {
  events: TEventCard[];
};

export default function BranchUpcomingEventsContainer({
  events,
}: BranchUpcomingEventsContainerProps) {
  return (
    <section className={styles.branchUpcomingEventsContainer}>
      <H2 className={styles.branchSecHeading}>Wydarzenia w filii nr 1</H2>
      <BranchEventSlider events={events} />
    </section>
  );
}
