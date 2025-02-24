import styles from "./home-events-section.module.css";
import H1 from "../ui/h1";
import HomeEventsSlider from "./home-events-slider";
import { TEventCard } from "@/lib/types";

type HomeEventsSectionProps = {
  events: TEventCard[];
};

export default function HomeEventsSection({ events }: HomeEventsSectionProps) {
  return (
    <section className={styles.eventsSection}>
      <H1
        withImage="yes"
        imageSize="var(--image-size)"
        imageAlt="calendar icon"
        imageUrl="/events-icon.svg"
        className={styles.sectionHeading}
      >
        Wydarzenia
      </H1>
      <HomeEventsSlider events={events} />
    </section>
  );
}
