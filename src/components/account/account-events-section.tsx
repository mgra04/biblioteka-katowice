import styles from "./account-events-section.module.css";
import { TEventCard } from "@/lib/types";
import AccountEventsSlider from "./account-events-slider";
import H2 from "../ui/h2";

type AccountEventsSectionProps = {
  events: TEventCard[];
};

export default function AccountEventsSection({
  events,
}: AccountEventsSectionProps) {
  return (
    <section className={styles.eventsSection}>
      <H2 className={styles.sectionHeading}>Zapisane wydarzenia</H2>
      <AccountEventsSlider events={events} />
    </section>
  );
}
