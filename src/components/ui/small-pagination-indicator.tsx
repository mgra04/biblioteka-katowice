import { cn } from "@/lib/utils";
import styles from "./small-pagination-indicator.module.css";

type SmallPaginationIndicatorProps = {
  className?: string;
  variant: "default" | "defaultToAbsolute";
  numResults: number;
  currentPage: number;
  onIndicatorClick: (index: number) => void;
};

export default function SmallPaginationIndicator({
  className,
  variant,
  numResults,
  currentPage,
  onIndicatorClick,
}: SmallPaginationIndicatorProps) {
  return (
    <>
      {variant === "default" && (
        <section className={cn(styles.defaultPaginationContainer, className)}>
          {Array.from({ length: numResults }).map((_, index) => (
            <button
              key={index}
              className={cn(
                styles.defaultPaginationElement,
                index === currentPage && styles.active
              )}
              onClick={() => onIndicatorClick(index)}
            ></button>
          ))}
        </section>
      )}

      {variant === "defaultToAbsolute" && (
        <section
          className={cn(styles.defaultToAbsPaginationContainer, className)}
        >
          {Array.from({ length: numResults }).map((_, index) => (
            <button
              key={index}
              className={cn(
                styles.defaultToAbsPaginationElement,
                index === currentPage && styles.active
              )}
              onClick={() => onIndicatorClick(index)}
            ></button>
          ))}
        </section>
      )}
    </>
  );
}
