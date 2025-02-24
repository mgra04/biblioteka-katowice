import { cn } from "@/lib/utils";
import styles from "./params-item-list.module.css";

type ParamsItemListProps = {
  children: React.ReactNode;
  version: "short" | "long";
  className?: string;
};

export default function ParamsItemList({
  children,
  version,
  className,
}: ParamsItemListProps) {
  return (
    <ul
      className={
        version === "short"
          ? cn(styles.paramsItemListShort, className)
          : cn(styles.paramsItemListLong, className)
      }
    >
      {children}
    </ul>
  );
}
