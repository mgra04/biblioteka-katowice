"use client";

import NavDropdownItem from "./nav-dropdown-item";
import TopNavItem from "./top-nav-item";
import styles from "./top-nav-list.module.css";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useTopNavContext } from "@/hooks/use-top-nav-context";

const routes = [
  { id: 1, label: "Aktualności", path: "/aktualnosci" },
  { id: 2, label: "Wydarzenia", path: "/wydarzenia" },
  { id: 3, label: "Filie", path: "/filie" },
  { id: 4, label: "Galeria", path: "/galeria" },
  { id: 5, label: "FAQ", path: "/faq" },
  { id: 6, label: "Kontakt", path: "/kontakt" },
];

const DropdownItems = [
  {
    id: 1,
    label: "Katalog główny",
    path: "/katalog-glowny",
  },
  {
    id: 2,
    label: "Legimi",
    path: "/legimi",
  },
  {
    id: 3,
    label: "Academica",
    path: "/academica",
  },
  {
    id: 4,
    label: "Ibuk Libra",
    path: "/ibuk-libra",
  },
];

export default function TopNavList() {
  const isDesktop = useMediaQuery("(min-width: 57rem)");

  return <>{isDesktop ? <DesktopNavItems /> : <MobileNavItems />}</>;
}

function DesktopNavItems() {
  return (
    <ul className={styles.navItemsDesktop}>
      <NavDropdownItem items={DropdownItems}>Katalogi</NavDropdownItem>

      {routes.map((route) => (
        <TopNavItem key={route.id} path={route.path} label={route.label} />
      ))}
    </ul>
  );
}

function MobileNavItems() {
  const { isOpenMenu, isAnimating } = useTopNavContext();
  return (
    <ul
      className={cn(
        styles.navItemsMobile,
        isOpenMenu && styles.navItemsVisible,
        isAnimating && styles.navItemsHidden,
        !isOpenMenu && !isAnimating && styles.navItemsDisplayNone
      )}
    >
      <NavDropdownItem items={DropdownItems}>Katalogi</NavDropdownItem>

      {routes.map((route) => (
        <TopNavItem key={route.id} path={route.path} label={route.label} />
      ))}
    </ul>
  );
}
