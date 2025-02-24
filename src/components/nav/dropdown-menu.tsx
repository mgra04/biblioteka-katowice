import { NavItem } from "@/lib/types";
import styles from "./dropdown-menu.module.css";
import TopNavItem from "./top-nav-item";
import { cn } from "@/lib/utils";

type DropdownMenuProps = {
  items: NavItem[];
  isOpen: boolean;
};

export default function DropdownMenu({ items, isOpen }: DropdownMenuProps) {
  return (
    <div
      className={cn(styles.dropdownMenu, isOpen && styles.dropdownMenuVisible)}
    >
      <ul>
        {items.map((item) => (
          <TopNavItem
            className={styles.dropdownItem}
            key={item.id}
            path={item.path}
            label={item.label}
          />
        ))}
      </ul>
    </div>
  );
}
