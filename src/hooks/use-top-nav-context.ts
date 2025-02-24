import { TopNavContext } from "@/contexts/top-nav-context-provider";
import { useContext } from "react";

export function useTopNavContext() {
  const context = useContext(TopNavContext);
  if (!context) {
    throw new Error(
      "useTopNavContext must be used within a TopNavContextProvider"
    );
  }
  return context;
}
