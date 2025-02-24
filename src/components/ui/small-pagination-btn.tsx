"use client";

import { cn } from "@/lib/utils";
import styles from "./small-pagination-btn.module.css";
import { cva } from "class-variance-authority";
import { MoveLeft, MoveRight } from "lucide-react";

type SmallPaginationBtnProps = {
  variant: "default" | "absolute";
  type: "forward" | "backward";
  className?: string;
  onClickForward?: () => void;
  onClickBackward?: () => void;
};

const buttonVariants = cva(styles.defaultClasses, {
  variants: {
    variant: {
      default: styles.default,
      absolute: styles.absolute,
    },
  },
});

export default function SmallPaginationBtn({
  type,
  variant,
  className,
  onClickForward,
  onClickBackward,
}: SmallPaginationBtnProps) {
  return (
    <>
      {type === "forward" && (
        <button
          onClick={onClickForward}
          className={cn(buttonVariants({ variant, className }))}
        >
          <MoveRight
            size={18}
            color={`${variant === "default" ? "#E5E9FC" : "#50556D"}`}
          />
        </button>
      )}
      {type === "backward" && (
        <button
          onClick={onClickBackward}
          className={cn(buttonVariants({ variant, className }))}
        >
          <MoveLeft
            size={18}
            color={`${variant === "default" ? "#E5E9FC" : "#50556D"}`}
          />
        </button>
      )}
    </>
  );
}
