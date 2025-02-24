// FOR NEWS, EVENTS, BRANCHES PAGES

import { cn } from "@/lib/utils";
import styles from "./divider.module.css";

type DividerProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function Divider({ className, style }: DividerProps) {
  return <div style={style} className={cn(styles.divider, className)} />;
}
