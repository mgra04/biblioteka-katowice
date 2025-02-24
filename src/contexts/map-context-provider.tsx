"use client";

import { createContext, useState } from "react";

type MapContextType = {
  mapCenter: [number, number];
  mapZoom: number;
  setMapCenter: (center: [number, number]) => void;
  setMapZoom: (zoom: number) => void;
  selectedBranchId: string | null;
  setSelectedBranchId: (id: string | null) => void;
  resetMap: () => void;
};

type MapContextProviderProps = {
  children: React.ReactNode;
};

export const MapContext = createContext<MapContextType | null>(null);

export default function MapContextProvider({
  children,
}: MapContextProviderProps) {
  const [mapCenter, setMapCenter] = useState<[number, number]>([
    50.253385, 19.0156471,
  ]);
  const [mapZoom, setMapZoom] = useState(13);
  const [selectedBranchId, setSelectedBranchId] = useState<string | null>(null);

  const resetMap = () => {
    setSelectedBranchId(null);
    setMapCenter([50.253385, 19.0156471]);
    setMapZoom(13);
  };

  return (
    <MapContext.Provider
      value={{
        mapCenter,
        mapZoom,
        selectedBranchId,
        setMapCenter,
        setMapZoom,
        setSelectedBranchId,
        resetMap,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}
