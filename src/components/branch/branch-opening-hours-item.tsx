import Paragraph from "../ui/paragraph";
import styles from "./branch-opening-hours-item.module.css";

type BranchOpeningHoursItemProps = {
  day: string;
  openTime: string | null;
  closeTime: string | null;
  isOpen: boolean;
};

export default function BranchOpeningHoursItem({
  day,
  openTime,
  closeTime,
  isOpen,
}: BranchOpeningHoursItemProps) {
  return (
    <Paragraph className={styles.branchOpeningHoursItem}>
      {day}{" "}
      <span className={isOpen ? styles.clrDark : styles.clrRed}>
        {isOpen ? `${openTime} - ${closeTime}` : "Zamknięte"}
      </span>
    </Paragraph>
  );
}
