import BtnsGroup from "@/components/ui/btns-group";
import styles from "./event-page.module.css";
import Button from "@/components/ui/button";
import { Heart, MoveLeft } from "lucide-react";
import Image from "next/image";
import H2 from "@/components/ui/h2";
import Paragraph from "@/components/ui/paragraph";
import CardDetails from "@/components/ui/card-details";
import H3 from "@/components/ui/h3";
import OtherEventsContainer from "@/components/event/other-events-container";
import TagList from "@/components/ui/tag-list";
import Tag from "@/components/ui/tag";
import { getEvent, getEvents } from "@/lib/server-utils";
import { isAfter, isBefore } from "date-fns";
import { formatDate, formatDateRange } from "@/lib/utils";
import ShareBtn from "@/components/ui/share-btn";

type Props = {
  params: Promise<{ eventSlug: string }>;
};

export default async function page({ params }: Props) {
  const { eventSlug } = await params;
  const event = await getEvent(eventSlug);
  const { events, totalCount } = await getEvents(
    undefined,
    undefined,
    event.branch.id,
    event.id
  );

  const now = new Date();
  const isOngoing =
    event.eventEndDate &&
    isAfter(now, new Date(event.eventStartDate)) &&
    isBefore(now, new Date(event.eventEndDate));

  return (
    <main>
      <div className={styles.container}>
        <Button
          style={{ fontSize: "1.4rem" }}
          link="yes"
          href="/wydarzenia"
          className={styles.backBtn}
          variant="primary"
          size="lg"
        >
          <MoveLeft size={18} /> Wróć do listy wydarzeń
        </Button>

        <section className={styles.event}>
          <div className={styles.eventImageContainer}>
            <Image
              className={styles.eventImage}
              src={event.eventDesktopImageUrl}
              alt={event.eventImageAlt}
              fill
              sizes="(max-width: 78rem) 100vw, 24rem"
            />
          </div>

          <div className={styles.brushImageWrapper}>
            <Image
              className={styles.brushImage}
              src="/small-brush.avif"
              alt="brush graphic"
              fill
              sizes="(max-width: 78rem) 100vw, 24rem"
            />
          </div>

          <div className={styles.eventContent}>
            <TagList className={styles.tagList}>
              {event.eventEndDate && isOngoing && (
                <Tag
                  variant="important"
                  size="extraLg"
                  style={{ fontSize: "1.4rem", lineHeight: "2rem" }}
                >
                  W trakcie
                </Tag>
              )}
              {event.eventTags.map((tag) => (
                <Tag
                  key={tag.id}
                  variant="default"
                  size="extraLg"
                  style={{ fontSize: "1.4rem", lineHeight: "2rem" }}
                >
                  {tag.tagDescription}
                </Tag>
              ))}
            </TagList>

            <H2 className={styles.eventHeading}>{event.eventTitle}</H2>
            <Paragraph className={styles.eventDescription}>
              {event.eventDescription}.
            </Paragraph>

            <section className={styles.eventDetailsList}>
              <CardDetails
                type="icon"
                variant="location"
                size={40}
                className={styles.cardDetailsContainer}
              >
                <H3 className={styles.eventDetailsHeading}>
                  {event.branch.branchName}
                </H3>
                <Paragraph
                  className={styles.eventDetailsParagraph}
                  style={{ lineHeight: "normal" }}
                >
                  {event.branch.branchAddressStreet.startsWith("Al.")
                    ? event.branch.branchAddressStreet
                    : `ul. ${event.branch.branchAddressStreet}`}
                </Paragraph>
              </CardDetails>

              <CardDetails
                type="icon"
                variant="date"
                size={40}
                className={styles.cardDetailsContainer}
              >
                <H3 className={styles.eventDetailsHeading}>
                  {event.eventEndDate
                    ? formatDateRange(
                        new Date(event.eventStartDate),
                        new Date(event.eventEndDate)
                      )
                    : formatDate(new Date(event.eventStartDate))}
                </H3>
                {event.eventStartHour && (
                  <Paragraph
                    className={styles.eventDetailsParagraph}
                    style={{ lineHeight: "normal" }}
                  >
                    Godzina: {event.eventStartHour}
                  </Paragraph>
                )}
              </CardDetails>
            </section>

            <Button
              className={styles.eventButton}
              size="lg"
              variant="outline"
              link="yes"
              href={event.branch.branchGoogleMapLink}
            >
              Jak dojechać?
            </Button>
          </div>

          <BtnsGroup className={styles.eventBtnsGroup}>
            <Button variant="outline" size="icon">
              <Heart size={22} />
            </Button>
            <ShareBtn
              slug={event.eventSlug}
              toastText={`Skopiowano link do wydarzenia: ${event.eventTitle}`}
              type="wydarzenia"
            />
          </BtnsGroup>
        </section>
      </div>

      <OtherEventsContainer
        event={event}
        events={events}
        totalCount={totalCount}
      />
    </main>
  );
}
