import { TEventCard } from "@/lib/types";
import CardSlider from "../ui/card-slider";
import EventCard from "../event-card";

type EventSliderProps = {
  events: TEventCard[];
};

export default function AccountEventsSlider({ events }: EventSliderProps) {
  return (
    <CardSlider type="events">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </CardSlider>
  );
}
