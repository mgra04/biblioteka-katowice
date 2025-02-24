"use client";

import Image from "next/image";

import styles from "./gallery-slider.module.css";
import { useGalleryPaginationContext } from "@/hooks/use-gallery-pagination-context";
import SmallPaginationIndicator from "../ui/small-pagination-indicator";
import SmallPaginationBtn from "../ui/small-pagination-btn";

type GallerySliderProps = {
  images: string[];
};

export default function GallerySlider({ images }: GallerySliderProps) {
  const {
    currentPage,
    handleNext,
    handlePrev,
    numResults,
    handleIndicatorClick,
  } = useGalleryPaginationContext();

  return (
    <div className={styles.gallerySliderContainer}>
      <div className={styles.branchGalleryImages}>
        <Image
          className={styles.branchGalleryImage}
          src={images[currentPage]}
          alt={`branch-gallery-image${currentPage + 1}`}
          fill
          sizes="(max-width: 78rem) 100vw, 24rem"
        />
      </div>
      <div className={styles.paginationControls}>
        <div className={styles.paginationBtns}>
          <SmallPaginationBtn
            className={styles.btnLeft}
            type="backward"
            variant="default"
            onClickBackward={handlePrev}
          />
          <SmallPaginationBtn
            className={styles.btnRight}
            type="forward"
            variant="default"
            onClickForward={handleNext}
          />
        </div>
      </div>

      <SmallPaginationIndicator
        variant="defaultToAbsolute"
        className={styles.indicator}
        numResults={numResults}
        currentPage={currentPage}
        onIndicatorClick={handleIndicatorClick}
      />
    </div>
  );
}
