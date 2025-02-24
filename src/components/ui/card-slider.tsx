"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./card-slider.module.css";
import SmallPaginationBtn from "./small-pagination-btn";
import SmallPaginationIndicator from "./small-pagination-indicator";

type CardSliderProps = {
  children: React.ReactNode[];
  button?: React.ReactNode;
  type?: "events" | "catalogItems";
};

export default function CardSlider({
  children,
  button,
  type,
}: CardSliderProps) {
  const [currentCard, setCurrentCard] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleForward = () => {
    setCurrentCard((prev) => (prev + 1) % children.length);
  };

  const handleBackward = () => {
    setCurrentCard((prev) => (prev === 0 ? children.length - 1 : prev - 1));
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentCard(index);
  };

  useEffect(() => {
    if (cardRef.current) {
      const width = cardRef.current.offsetWidth;
      setCardWidth(width + 24);
    }
  }, []);

  return (
    <div className={styles.cardSliderContainer}>
      <div className={styles.sliderWrapper}>
        <div
          className={styles.slider}
          style={{
            transform: `translateX(-${currentCard * cardWidth}px)`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className={
                type === "catalogItems"
                  ? styles.cardWrapperCatalogItems
                  : styles.cardWrapperEvents
              }
              ref={index === 0 ? cardRef : null}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          type === "catalogItems"
            ? styles.paginationControlsCatalogItems
            : styles.paginationControlsEvents
        }
      >
        <SmallPaginationIndicator
          numResults={children.length}
          currentPage={currentCard}
          onIndicatorClick={handleIndicatorClick}
          variant="default"
          className={styles.paginationIndicator}
        />

        <div className={styles.paginationBtns}>
          <SmallPaginationBtn
            type="backward"
            onClickBackward={handleBackward}
            variant="default"
            className={styles.paginationBtn}
          />
          <SmallPaginationBtn
            type="forward"
            onClickForward={handleForward}
            variant="default"
            className={styles.paginationBtn}
          />
        </div>

        {button}
      </div>
    </div>
  );
}
