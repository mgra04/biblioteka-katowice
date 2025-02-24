import { cn } from "@/lib/utils";
import Button from "../ui/button";
import H3 from "../ui/h3";
import Paragraph from "../ui/paragraph";
import styles from "./home-card.module.css";

type HomeCardProps = {
  title: string;
  description: string;
  btnText: string;
  btnHref: string;
  position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
};

export default function HomeCard({
  title,
  description,
  btnText,
  btnHref,
  position,
}: HomeCardProps) {
  return (
    <div
      className={cn(
        styles.card,
        position === "topLeft" && styles.topLeft,
        position === "topRight" && styles.topRight,
        position === "bottomLeft" && styles.bottomLeft,
        position === "bottomRight" && styles.bottomRight
      )}
    >
      <div className={styles.cardContent}>
        <H3 className={styles.cardTitle}>{title}</H3>
        <Paragraph className={styles.cardDescription}>{description}</Paragraph>
        <Button
          className={styles.cardBtn}
          link="yes"
          href={btnHref}
          variant="primary"
          size="lg"
        >
          {btnText}
        </Button>
      </div>
    </div>
  );
}
