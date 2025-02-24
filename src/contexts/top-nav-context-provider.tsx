"use client";

import { createContext, useState } from "react";

type TopNavContextType = {
  handleMenuToggle: () => void;
  isOpenMenu: boolean;
  isAnimating: boolean;
};

type TopNavContextProviderProps = {
  children: React.ReactNode;
};

export const TopNavContext = createContext<TopNavContextType | null>(null);

export default function TopNavContextProvider({
  children,
}: TopNavContextProviderProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMenuToggle = () => {
    if (isOpenMenu) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpenMenu(false);
        setIsAnimating(false);
      }, 500);
    } else {
      setIsOpenMenu(true);
    }
  };

  return (
    <TopNavContext.Provider
      value={{ handleMenuToggle, isOpenMenu, isAnimating }}
    >
      {children}
    </TopNavContext.Provider>
  );
}
