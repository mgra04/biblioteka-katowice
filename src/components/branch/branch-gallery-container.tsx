import styles from "@/components/branch/branch-gallery-container.module.css";
import GalleryPaginationContextProvider from "@/contexts/gallery-pagination-context-provider";
import H2 from "../ui/h2";
import GallerySlider from "../gallery/gallery-slider";
import { images } from "@/lib/temp-data";
import { cn } from "@/lib/utils";

export default function BranchGalleryContainer() {
  return (
    <div className={styles.branchGalleryContainer}>
      <H2 className={cn(styles.branchSecHeading, styles.hidden)}>
        Galeria zdjęć
      </H2>
      <GalleryPaginationContextProvider images={images}>
        <GallerySlider images={images} />
      </GalleryPaginationContextProvider>
    </div>
  );
}
