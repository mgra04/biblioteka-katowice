import styles from "./available-item.module.css";
import { TAvailableItem } from "@/lib/types";
import Paragraph from "./paragraph";
import Button from "./button";
import { cn } from "@/lib/utils";

export default function AvailableItem({
  data,
  style,
}: {
  data: TAvailableItem;
  style?: React.CSSProperties;
}) {
  const { branchName, branchStreet, status, quantity } = data;
  return (
    <section style={style} className={styles.availableItemContainer}>
      <div className={styles.availableItemTextContainer}>
        <Paragraph className={cn(styles.paragraph, styles.location)}>
          <span className={styles.bold}>{branchName}</span>{" "}
          <span className={styles.streetText}>
            (
            {branchStreet.startsWith("Al.")
              ? branchStreet
              : `ul. ${branchStreet}`}
            )
          </span>
        </Paragraph>
        <Paragraph className={styles.paragraph}>
          Status:{" "}
          <span
            className={status === "Dostępna" ? styles.clrGreen : styles.clrRed}
          >
            {status}
          </span>
        </Paragraph>
        {quantity && (
          <Paragraph className={styles.paragraph}>
            Ilość egzemplarzy <span className={styles.bold}>{quantity}</span>
          </Paragraph>
        )}
      </div>

      <Button variant="primary" size="md">
        {status === "Dostępna" ? "Wypożycz" : "Zapisz się"}
      </Button>
    </section>
  );
}
