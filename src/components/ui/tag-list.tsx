import { cn } from "@/lib/utils";
import styles from "./tag-list.module.css";

type TagListProps = {
  children: React.ReactNode;
  className?: string;
};

export default function TagList({ children, className }: TagListProps) {
  return (
    <section className={cn(styles.tagList, className)}>{children}</section>
  );
}
