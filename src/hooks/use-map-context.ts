import { MapContext } from "@/contexts/map-context-provider";
import { useContext } from "react";

export function useMapContext() {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMapContext must be used within a MapContextProvider");
  }
  return context;
}
