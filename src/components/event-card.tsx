"use client";

import styles from "./event-card.module.css";
import BtnsGroup from "./ui/btns-group";
import Button from "./ui/button";
import Paragraph from "./ui/paragraph";
import TagList from "./ui/tag-list";
import Tag from "./ui/tag";
import { cn, formatDate, formatDateRange } from "@/lib/utils";
import NewsEventCardSchema from "./ui/news-events-card-schema";
import CardDetailsList from "./ui/card-details-list";
import CardDetails from "./ui/card-details";
import { TEventCard } from "@/lib/types";
import { isAfter, isBefore } from "date-fns";
import ShareBtn from "./ui/share-btn";
import SessionLikeBtnWrapper from "./ui/session-like-btn-wrapper";

type EventCardProps = {
  event: TEventCard;
};

export default function EventCard({ event }: EventCardProps) {
  const now = new Date();
  const isOngoing =
    event.eventEndDate &&
    isAfter(now, new Date(event.eventStartDate)) &&
    isBefore(now, new Date(event.eventEndDate));

  return (
    <NewsEventCardSchema
      imgAlt={event.eventImageAlt}
      imgDesktopUrl={event.eventDesktopImageUrl}
      imgMobileUrl={event.eventMobileImageUrl}
    >
      <TagList className={styles.eventTagList}>
        {event.eventEndDate && isOngoing && (
          <Tag variant="important" size="lg">
            W trakcie
          </Tag>
        )}
        {event.eventTags.map((tag) => (
          <Tag key={tag.id} variant="default" size="lg">
            {tag.tagDescription}
          </Tag>
        ))}
      </TagList>

      <Paragraph
        className={cn(styles.eventParagraph)}
        style={{ lineHeight: "1.5" }}
      >
        {event.eventDescription}.
      </Paragraph>

      <CardDetailsList className={styles.cardDetailsList}>
        <CardDetails
          type="icon"
          variant="location"
          className={styles.cardDetailsContainer}
        >
          <Paragraph
            style={{
              fontSize: "1.6rem",
              color: "#21232D",
              fontWeight: "600",
              lineHeight: "normal",
            }}
          >
            {event.branch.branchName}
          </Paragraph>
          <Paragraph style={{ fontSize: "1.4rem", lineHeight: "normal" }}>
            {event.branch.branchAddressStreet.startsWith("Al.")
              ? event.branch.branchAddressStreet
              : `ul. ${event.branch.branchAddressStreet}`}
          </Paragraph>
        </CardDetails>

        <CardDetails
          type="icon"
          variant="date"
          className={styles.cardDetailsContainer}
        >
          <Paragraph
            style={{
              fontSize: "1.6rem",
              color: "#21232D",
              fontWeight: "600",
              lineHeight: "normal",
            }}
          >
            {event.eventEndDate
              ? formatDateRange(
                  new Date(event.eventStartDate),
                  new Date(event.eventEndDate)
                )
              : formatDate(new Date(event.eventStartDate))}
          </Paragraph>
          {event.eventStartHour && (
            <Paragraph style={{ fontSize: "1.4rem", lineHeight: "normal" }}>
              Godzina: {event.eventStartHour}
            </Paragraph>
          )}
        </CardDetails>
      </CardDetailsList>

      <section className={styles.eventCardFooter}>
        <BtnsGroup>
          <SessionLikeBtnWrapper
            type="event"
            id={event.id}
            text={event.eventTitle}
          />
          <ShareBtn
            type="wydarzenia"
            slug={event.eventSlug}
            toastText={`Skopiowano link do wydarzenia: ${event.eventTitle}`}
          />
        </BtnsGroup>

        <Button
          link="yes"
          href={`/wydarzenia/${event.eventSlug}`}
          variant="primary"
          size="md"
        >
          Szczegóły
        </Button>
      </section>
    </NewsEventCardSchema>
  );
}
