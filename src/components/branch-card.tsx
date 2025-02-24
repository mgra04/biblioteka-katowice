import Image from "next/image";
import styles from "./branch-card.module.css";
import H2 from "./ui/h2";
import Paragraph from "./ui/paragraph";
import H3 from "./ui/h3";
import Tag from "./ui/tag";
import Button from "./ui/button";
import BtnsGroup from "./ui/btns-group";
import { AiFillChrome } from "react-icons/ai";
import { RiInstagramFill, RiFacebookFill } from "react-icons/ri";
import { TBranchCard, TBranchOpeningHours } from "@/lib/types";

type BranchCardProps = {
  branch: TBranchCard;
};

function groupOpeningHours(openingHours: TBranchOpeningHours[]) {
  const grouped = [];
  let currentGroup = null;

  for (const hours of openingHours) {
    if (!hours.isOpen) continue;

    const timeRange = `${hours.openTime} - ${hours.closeTime}`;
    if (currentGroup && currentGroup.timeRange === timeRange) {
      currentGroup.days.push(hours.day);
    } else {
      if (currentGroup) grouped.push(currentGroup);
      currentGroup = { days: [hours.day], timeRange };
    }
  }

  if (currentGroup) grouped.push(currentGroup);

  return grouped.map((group) => {
    const days =
      group.days.length > 1
        ? `${group.days[0]} - ${group.days[group.days.length - 1]}`
        : group.days[0];
    return `${days}: ${group.timeRange}`;
  });
}

export default function BranchCard({ branch }: BranchCardProps) {
  const groupedOpeningHours = groupOpeningHours(branch.branchOpeningHours);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={branch.branchImageUrl}
          alt={branch.branchImageAlt}
          fill
          sizes="(max-width: 78rem) 100vw, 24rem"
        />
      </div>

      <div className={styles.cardContent}>
        <H2 className={styles.cardTitle}>{branch.branchName}</H2>
        <Paragraph
          style={{ lineHeight: "1" }}
          className={styles.cardStreetName}
        >
          {branch.branchAddressStreet.startsWith("Al.")
            ? branch.branchAddressStreet
            : `ul. ${branch.branchAddressStreet}`}
        </Paragraph>

        <H3 className={styles.cardOpeningHoursTitle}>Godziny otwarcia</H3>
        <div className={styles.cardOpeningHoursList}>
          {groupedOpeningHours.map((hours, index) => (
            <Paragraph
              key={index}
              style={{ lineHeight: "1" }}
              className={styles.cardOpeningHoursText}
            >
              {hours}
            </Paragraph>
          ))}
        </div>

        {branch.branchAdaptedToDisabilities && (
          <Tag size="md" variant="default" className={styles.cardTag}>
            Przystosowana do potrzeb osób niepełnosprawnych
          </Tag>
        )}

        <section className={styles.cardFooter}>
          <Button
            className={styles.mainBtns}
            link="yes"
            href={branch.branchGoogleMapLink}
            variant="outline"
            size="md"
          >
            Jak dojechać?
          </Button>

          <Button
            className={styles.mainBtns}
            link="yes"
            href={`/filie/${branch.branchSlug}`}
            variant="primary"
            size="md"
          >
            Szczegóły
          </Button>
        </section>

        <div className={styles.cardAboluteBtns}>
          <BtnsGroup style={{ flexDirection: "column" }}>
            {branch.branchFacebookLink && (
              <Button
                variant="outline"
                link="yes"
                href={branch.branchFacebookLink}
                size="icon"
              >
                <RiFacebookFill size={22} />
              </Button>
            )}
            {branch.branchInstagramLink && (
              <Button
                variant="outline"
                link="yes"
                href={branch.branchInstagramLink}
                size="icon"
              >
                <RiInstagramFill size={22} />
              </Button>
            )}
            {branch.branchWebsiteLink && (
              <Button
                variant="outline"
                link="yes"
                href={branch.branchWebsiteLink}
                size="icon"
              >
                <AiFillChrome size={22} color="currentColor" />
              </Button>
            )}
          </BtnsGroup>
        </div>
      </div>
    </div>
  );
}
