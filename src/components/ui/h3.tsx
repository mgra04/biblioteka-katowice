import { cn } from "@/lib/utils";
import styles from "./h3.module.css";

type H3Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function H3({ children, className, style }: H3Props) {
  return (
    <h3 style={style} className={cn(styles.thirdHeading, className)}>
      {children}
    </h3>
  );
}
