"use client";

import { useMapContext } from "@/hooks/use-map-context";
import styles from "./map-container.module.css";
import dynamic from "next/dynamic";
import { TBranchMap } from "@/lib/types";

const MapLeaflet = dynamic(() => import("./map-leaflet"), {
  ssr: false,
});

type MapContainerProps = {
  branches: TBranchMap[];
};

export default function MapContainer({ branches }: MapContainerProps) {
  const { mapCenter, mapZoom, setMapCenter, setMapZoom } = useMapContext();

  return (
    <div className={styles.mapContainer}>
      <MapLeaflet
        branches={branches}
        center={mapCenter}
        zoom={mapZoom}
        onSetView={(newCenter, newZoom) => {
          setMapCenter(newCenter);
          setMapZoom(newZoom);
        }}
      />
      <div className={styles.absoluteRectangle} />
    </div>
  );
}
