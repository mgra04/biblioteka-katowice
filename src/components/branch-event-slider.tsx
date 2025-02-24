import { TEventCard } from "@/lib/types";
import EventCard from "./event-card";
import CardSlider from "./ui/card-slider";
import Button from "./ui/button";

type EventSliderProps = {
  events: TEventCard[];
};

export default function BranchEventSlider({ events }: EventSliderProps) {
  return (
    <CardSlider
      type="events"
      button={
        <Button variant="outline" size="lg" link="yes" href="/wydarzenia">
          Wszystkie wydarzenia
        </Button>
      }
    >
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </CardSlider>
  );
}
