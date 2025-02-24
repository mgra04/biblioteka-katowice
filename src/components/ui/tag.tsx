import { cn } from "@/lib/utils";
import styles from "./tag.module.css";
import { cva } from "class-variance-authority";

type TagProps = {
  variant: "important" | "default";
  size: "md" | "lg" | "extraLg";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const tagVariants = cva(styles.defaultClasses, {
  variants: {
    variant: {
      default: styles.default,
      important: styles.important,
    },
    size: {
      md: styles.md,
      lg: styles.lg,
      extraLg: styles.extraLg,
    },
  },
});

export default function Tag({
  variant,
  size,
  children,
  className,
  style,
}: TagProps) {
  return (
    <div
      style={style}
      className={cn(tagVariants({ variant, size, className }))}
    >
      {children}
    </div>
  );
}
