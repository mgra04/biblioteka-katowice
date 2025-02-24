"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import styles from "./nav-dropdown-item.module.css";
import TopNavItem from "./top-nav-item";

type DropdownItem = {
  id: number;
  label: string;
  path: string;
};

type NavDropdownItemProps = {
  items: DropdownItem[];
  children: React.ReactNode;
};

export default function NavDropdownItem({
  items,
  children,
}: NavDropdownItemProps) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 57rem)");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 400);
  };

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  return (
    <li
      onMouseEnter={isDesktop ? handleMouseEnter : undefined}
      onMouseLeave={isDesktop ? handleMouseLeave : undefined}
      className={isDesktop ? styles.dropdown : styles.dropdownMobile}
    >
      <button
        type="button"
        onClick={!isDesktop ? toggleDropdown : undefined}
        className={
          isDesktop ? styles.dropdownToggle : styles.dropdownToggleMobile
        }
      >
        {children}
        <ChevronDown
          className={open ? styles.chevronOpen : styles.chevron}
          size={16}
        />
      </button>

      {open && (
        <ul
          className={
            isDesktop ? styles.dropdownMenu : styles.dropdownMenuMobile
          }
        >
          {items.map((item) => (
            <TopNavItem
              style={{ width: "100%" }}
              className={
                isDesktop
                  ? styles.dropdownMenuItem
                  : styles.dropdownMenuMobileItem
              }
              key={item.id}
              path={item.path}
              label={item.label}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
