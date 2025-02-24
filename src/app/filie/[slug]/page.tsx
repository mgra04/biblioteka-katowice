import styles from "./branch-page.module.css";
import Button from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import BranchSectionWithMargin from "@/components/branch/branch-section-with-margin";
import BranchHeader from "@/components/branch/branch-header";
import BranchInfoContainer from "@/components/branch/branch-info-container";
import BranchOpeningHoursContainer from "@/components/branch/branch-opening-hours-container";
import BranchOfferContainer from "@/components/branch/branch-offer-container";
import BranchGalleryContainer from "@/components/branch/branch-gallery-container";
import BranchUpcomingEventsContainer from "@/components/branch/branch-upcoming-events-container";
import { getBranch } from "@/lib/server-utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function page({ params }: Props) {
  const { slug } = await params;
  const branch = await getBranch(slug);

  return (
    <>
      <BranchSectionWithMargin>
        <Button
          style={{ fontSize: "1.4rem" }}
          link="yes"
          href="/filie"
          className={styles.backBtn}
          variant="primary"
          size="lg"
        >
          <MoveLeft size={18} /> Wróć do listy filii
        </Button>

        <section className={styles.branchDetailsSection}>
          <BranchHeader
            branchImageUrl={branch.branchImageUrl}
            branchImageAlt={branch.branchImageAlt}
            branchNumber={branch.branchNumber}
          />

          <BranchInfoContainer
            directorName={branch.branchDirector}
            number={branch.branchPhone}
            email={branch.branchEmail}
            addressArea={branch.branchAddressArea}
            addressCode={branch.branchAddressCode}
            addressStreet={branch.branchAddressStreet}
            googleMapLink={branch.branchGoogleMapLink}
          />

          <BranchOpeningHoursContainer
            openingHours={branch.branchOpeningHours}
          />

          <BranchOfferContainer
            branchOfferItems={branch.branchOffer[0].items}
          />

          <BranchGalleryContainer />
        </section>
      </BranchSectionWithMargin>

      {branch.branchEvents.length > 0 && (
        <BranchUpcomingEventsContainer events={branch.branchEvents} />
      )}
    </>
  );
}
