import { cn } from "@/lib/utils";
import styles from "./available-item-list.module.css";

// set max-height and top, bottom margins
export default function AvailableItemList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn(styles.availableItemList, className)}>
      {children}
    </section>
  );
}
