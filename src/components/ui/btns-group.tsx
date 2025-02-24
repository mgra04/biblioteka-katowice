import { cn } from "@/lib/utils";
import styles from "./btns-group.module.css";

type BtnsGroupProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function BtnsGroup({
  children,
  className,
  style,
}: BtnsGroupProps) {
  return (
    <section style={style} className={cn(styles.actionBtnsGroup, className)}>
      {children}
    </section>
  );
}
