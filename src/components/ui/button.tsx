import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import styles from "./button.module.css";
import React from "react";
import Link from "next/link";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "outline" | "destructive";
  size: "md" | "lg" | "icon" | "paginationButton" | "paginationArrow";
  onClick?: () => void;
  onChangePage?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  link?: "yes" | "no";
  href?: string;
  id?: string;
};

export const buttonVariants = cva(styles.defaultClasses, {
  variants: {
    variant: {
      primary: styles.primary,
      destructive: styles.destructive,
      outline: styles.outline,
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    },
    size: {
      md: styles.md,
      lg: styles.lg,
      icon: styles.icon,
      paginationButton: styles.paginationButton,
      paginationArrow: styles.paginationArrow,
    },
  },
});

export default function Button({
  children,
  variant,
  onClick,
  size,
  className,
  type,
  style,
  link,
  href,
  id,
  ...props
}: ButtonProps) {
  return (
    <>
      {link === "yes" && href ? (
        <Link
          style={style}
          className={cn(buttonVariants({ variant, size, className }))}
          href={href}
        >
          {children}
        </Link>
      ) : (
        <button
          id={id}
          type={type}
          onClick={onClick}
          style={style}
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
}
