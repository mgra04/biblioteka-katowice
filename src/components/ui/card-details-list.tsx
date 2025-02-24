import { cn } from "@/lib/utils";
import styles from "./card-details-list.module.css";

type CardDetailsListProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function CardDetailsList({
  children,
  className,
  style,
}: CardDetailsListProps) {
  return (
    <section style={style} className={cn(styles.cardDetailsList, className)}>
      {children}
    </section>
  );
}
