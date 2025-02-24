import { cn } from "@/lib/utils";
import styles from "./h2.module.css";

type H2Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function H2({ children, className, style }: H2Props) {
  return (
    <h2 style={style} className={cn(styles.secHeading, className)}>
      {children}
    </h2>
  );
}
