import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { TBranchMap } from "./types";
import { format } from "date-fns";
import { pl } from "date-fns/locale";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getCatalogItemTypeLabel(type: string): string {
  switch (type) {
    case "book":
      return "Książka";
    case "boardGame":
      return "Gra planszowa";
    case "eBook":
      return "Ebook";
    case "audiobook":
      return "Audiobook";
    default:
      return "Inny";
  }
}

export const formatDate = (date: Date) =>
  format(date, "EEEE, dd.MM.yyyy 'r.'", { locale: pl });

export const formatDateRange = (startDate: Date, endDate: Date) =>
  `${format(startDate, "dd.MM.yyyy 'r.'", { locale: pl })} - ${format(
    endDate,
    "dd.MM.yyyy 'r.'",
    { locale: pl }
  )}`;

export function getDistanceFromLatLonInKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export async function handleFindClosest(
  branches: TBranchMap[],
  setMapCenter: (center: [number, number]) => void,
  setMapZoom: (zoom: number) => void
): Promise<string | null> {
  if (!navigator.geolocation) {
    alert("Twoja przeglądarka nie wspiera geolokalizacji!");
    return null;
  }

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        let closestBranch = null;
        let minDistance = Infinity;

        for (const branch of branches) {
          const dist = getDistanceFromLatLonInKm(
            latitude,
            longitude,
            branch.branchLatitude,
            branch.branchLongitude
          );
          if (dist < minDistance) {
            minDistance = dist;
            closestBranch = branch;
          }
        }

        if (closestBranch) {
          setMapCenter([
            closestBranch.branchLatitude,
            closestBranch.branchLongitude,
          ]);
          setMapZoom(18);
          resolve(closestBranch.id);
        } else {
          resolve(null);
        }
      },
      (error) => {
        alert("Nie udało się pobrać lokalizacji użytkownika.");
        console.error(error);
        reject(error);
      }
    );
  });
}
