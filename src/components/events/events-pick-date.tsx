"use client";

import { addDays, format } from "date-fns";
import { pl } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import Button from "../ui/button";

export default function EventsPickDate() {
  const date = {
    from: new Date(2025, 1, 4),
    to: addDays(new Date(2025, 1, 4), 20),
  };

  return (
    <Button variant="outline" size="lg">
      <CalendarIcon size={18} />
      {date?.from ? (
        date.to ? (
          <>
            {format(date.from, "LLL dd, y", { locale: pl })} -{" "}
            {format(date.to, "LLL dd, y", { locale: pl })}
          </>
        ) : (
          format(date.from, "LLL dd, y")
        )
      ) : (
        <span>Pick a date</span>
      )}
    </Button>
  );
}
