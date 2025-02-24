"use client";

import styles from "./top-nav-item.module.css";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTopNavContext } from "@/hooks/use-top-nav-context";
import { usePathname } from "next/navigation";

type TopNavItemProps = {
  path: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function TopNavItem({
  path,
  label,
  className,
  style,
}: TopNavItemProps) {
  const { handleMenuToggle } = useTopNavContext();
  const pathname = usePathname();
  const isActive = pathname === path;

  const handleClick = () => {
    handleMenuToggle();
  };

  return (
    <li
      style={isActive ? { background: "#3b4153", ...style } : style}
      className={cn(styles.navItem, className)}
    >
      <Link onClick={handleClick} href={path}>
        {label}
      </Link>
    </li>
  );
}
