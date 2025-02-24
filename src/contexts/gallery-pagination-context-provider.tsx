"use client";

import { createContext, useState } from "react";

type GalleryPaginationContextType = {
  currentPage: number;
  handleNext: () => void;
  handlePrev: () => void;
  handleIndicatorClick: (index: number) => void;
  numResults: number;
};

type GalleryPaginationContextProviderProps = {
  children: React.ReactNode;
  images: string[];
};

export const GalleryPaginationContext =
  createContext<GalleryPaginationContextType | null>(null);

export default function GalleryPaginationContextProvider({
  children,
  images,
}: GalleryPaginationContextProviderProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const numResults = images.length;

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentPage(
      (prevPage) => (prevPage - 1 + images.length) % images.length
    );
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <GalleryPaginationContext.Provider
      value={{
        currentPage,
        handleNext,
        handlePrev,
        handleIndicatorClick,
        numResults,
      }}
    >
      {children}
    </GalleryPaginationContext.Provider>
  );
}
