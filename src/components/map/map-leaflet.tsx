"use client";

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from "leaflet";
import { useEffect } from "react";
import { useMapContext } from "@/hooks/use-map-context";

type Branch = {
  id: string;
  branchName: string;
  branchLatitude: number;
  branchLongitude: number;
};

type MapLeafletProps = {
  branches: Branch[];
  center: [number, number];
  zoom: number;
  onSetView?: (center: [number, number], zoom: number) => void;
};

function ChangeView({
  center,
  zoom,
}: {
  center: [number, number];
  zoom: number;
}) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [map, center, zoom]);
  return null;
}

const customIcon = L.icon({
  iconUrl: "/map/map-icon.webp",
  iconRetinaUrl: "/map/map-icon-x2.webp",
  iconSize: [39, 54],
  iconAnchor: [19.5, 105],
});

export default function MapLeaflet({
  branches,
  center,
  zoom,
}: MapLeafletProps) {
  const { setSelectedBranchId, setMapCenter, setMapZoom } = useMapContext();

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ width: "100%", height: "100%" }}
      scrollWheelZoom
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />

      <ChangeView center={center} zoom={zoom} />

      <MarkerClusterGroup>
        {branches.map((branch) => (
          <Marker
            key={branch.id}
            position={[branch.branchLatitude, branch.branchLongitude]}
            icon={customIcon}
            eventHandlers={{
              click: () => {
                setSelectedBranchId(branch.id);
                setMapCenter([branch.branchLatitude, branch.branchLongitude]);
                setMapZoom(18);
              },
            }}
          />
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
