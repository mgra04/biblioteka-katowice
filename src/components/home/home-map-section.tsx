import { getBranchesForMap } from "@/lib/server-utils";
import MapActions from "../map/map-actions";
import MapContainer from "../map/map-container";
import H1 from "../ui/h1";
import styles from "./home-map-section.module.css";

export default async function HomeMapSection() {
  const branches = await getBranchesForMap();

  return (
    <section className={styles.mapSection}>
      <H1
        withImage="yes"
        imageSize="var(--image-size)"
        imageUrl="/branches-icon.svg"
        imageAlt="book with glasses icon"
        className={styles.sectionHeading}
      >
        Znajdź filię
      </H1>

      <div className={styles.mapWithActions}>
        <MapContainer branches={branches} />
        <MapActions branches={branches} />
      </div>
    </section>
  );
}
