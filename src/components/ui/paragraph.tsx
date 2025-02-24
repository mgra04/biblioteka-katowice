import { cn } from "@/lib/utils";
import styles from "./paragraph.module.css";

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function Paragraph({
  children,
  className,
  style,
}: ParagraphProps) {
  return (
    <p className={cn(styles.paragraph, className)} style={style}>
      {children}
    </p>
  );
}
