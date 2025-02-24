import styles from "./account-page.module.css";
import SignOutBtn from "@/components/sign-out-btn";
import H2 from "@/components/ui/h2";
import Paragraph from "@/components/ui/paragraph";
import {
  checkAuth,
  getFavouriteCatalogItems,
  getFavouriteEvents,
  getFavouriteNews,
} from "@/lib/server-utils";
import AccountEventsSection from "@/components/account/account-events-section";
import AccountNewsSection from "@/components/account/acount-news-section";
import AccountCatalogItemsSection from "@/components/account/account-catalog-items-section";

export default async function page() {
  const session = await checkAuth();
  const userId = session.user.id;

  const favouriteEvents = await getFavouriteEvents(userId);
  const favouriteNews = await getFavouriteNews(userId);
  const favouriteCatalogItems = await getFavouriteCatalogItems(userId);

  return (
    <>
      <div className={styles.container}>
        <H2 className={styles.heading}>
          Zalogowano jako: {session.user.email}
        </H2>
        <Paragraph className={styles.paragraph}>
          Tutaj później obsługa akcji związanych z kontem, wypożyczonych rzeczy
          z katalogu itp.
        </Paragraph>
        <SignOutBtn />
      </div>
      <section className={styles.savedItems}>
        {favouriteEvents.length > 0 && (
          <AccountEventsSection events={favouriteEvents} />
        )}

        {favouriteNews.length > 0 && (
          <AccountNewsSection news={favouriteNews} />
        )}

        {favouriteCatalogItems.length > 0 && (
          <AccountCatalogItemsSection catalogItems={favouriteCatalogItems} />
        )}
      </section>
    </>
  );
}
