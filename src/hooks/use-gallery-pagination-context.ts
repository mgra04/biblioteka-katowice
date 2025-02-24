import { GalleryPaginationContext } from "@/contexts/gallery-pagination-context-provider";
import { useContext } from "react";

export function useGalleryPaginationContext() {
  const context = useContext(GalleryPaginationContext);
  if (!context) {
    throw new Error(
      "GalleryPaginationContext must be used within a GalleryPaginationContextProvider"
    );
  }
  return context;
}
