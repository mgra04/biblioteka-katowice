import styles from "./branch-opening-hours-container.module.css";

import BranchHeadingWithIcon from "./branch-heading-with-icon";
import BranchOpeningHoursItem from "./branch-opening-hours-item";
import BranchOpeningHoursList from "./branch-opening-hours-list";
import { TBranchOpeningHours } from "@/lib/types";

type BranchOpeningHoursProps = {
  openingHours: TBranchOpeningHours[];
};

export default function BranchOpeningHoursContainer({
  openingHours,
}: BranchOpeningHoursProps) {
  return (
    <div className={styles.branchOpeningHoursContainer}>
      <BranchHeadingWithIcon
        className={styles.branchOpeningHoursHeading}
        icon="date"
        type="openingHours"
      />

      <BranchOpeningHoursList className={styles.branchOpeningHoursList}>
        {openingHours.map((openingHour) => (
          <BranchOpeningHoursItem
            key={openingHour.day}
            day={openingHour.day}
            openTime={openingHour.openTime}
            closeTime={openingHour.closeTime}
            isOpen={openingHour.isOpen}
          />
        ))}
      </BranchOpeningHoursList>
      <div className={styles.divider2} />
    </div>
  );
}
