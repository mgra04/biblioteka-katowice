"use client";

import styles from "../catalog/catalog-filter-btn.module.css";
import Button from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ListFilter } from "lucide-react";

export default function EventsFilterBtn() {
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" size="lg">
            <ListFilter size={18} color="#21232d" /> Filtruj
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className={styles.drawerContent}>
            <DrawerHeader>
              <DrawerTitle className={styles.title}>
                Filtruj wydarzenia
              </DrawerTitle>
            </DrawerHeader>
            <div className={styles.filterList}>
              <BranchSelect />
              <TargetGroupSelect />
              <EventTypeSelect />
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline" size="lg">
                  Zamknij
                </Button>
              </DrawerClose>
              <Button variant="primary" size="lg">
                Zatwierdź
              </Button>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function BranchSelect() {
  const numbers = Array.from({ length: 35 }, (_, i) => i + 1);

  return (
    <Select>
      <SelectTrigger className={styles.selectTrigger}>
        <SelectValue placeholder="Wybierz filię" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {numbers.map((number) => (
            <SelectItem key={number} value={String(number)}>
              Filia {number}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function TargetGroupSelect() {
  const groups = ["Grupa 1", "Grupa 2", "Grupa 3"];

  return (
    <Select>
      <SelectTrigger className={styles.selectTrigger}>
        <SelectValue placeholder="Wybierz grupę docelową" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {groups.map((group) => (
            <SelectItem key={group} value={group}>
              {group}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function EventTypeSelect() {
  const eventTypes = ["Warsztaty", "Spotkanie autorskie", "Wykład"];

  return (
    <Select>
      <SelectTrigger className={styles.selectTrigger}>
        <SelectValue placeholder="Wybierz typ wydarzenia" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {eventTypes.map((eventType) => (
            <SelectItem key={eventType} value={eventType}>
              {eventType}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
