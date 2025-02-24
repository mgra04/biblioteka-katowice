import styles from "./account-benefits-section.module.css";
import H2 from "../ui/h2";
import AccountBenefitsList from "./account-benefits-list";
import AccountBenefitsItem from "./account-benefits-item";

export default function AccountBenefitsSection() {
  return (
    <section className={styles.section}>
      <H2 className={styles.heading}>Dlaczego warto mieć konto?</H2>
      <AccountBenefitsList>
        <AccountBenefitsItem
          imgSrc="/sign/book.svg"
          imgAlt="Book icon"
          width={32}
          height={35}
          text="Rezerwuj ulubione książki i odbieraj
          w dogodnym momencie"
        />
        <AccountBenefitsItem
          imgSrc="/sign/bell.svg"
          imgAlt="Bell icon"
          width={32}
          height={36}
          text="Otrzymuj powiadomienia o 
          zbliżającym się terminie zwrotu"
        />
        <AccountBenefitsItem
          imgSrc="/sign/calendar.svg"
          imgAlt="Calendar icon"
          width={32}
          height={36}
          text="Przedłużaj terminy zwrotu jednym
          kliknięciem"
        />
        <AccountBenefitsItem
          imgSrc="/sign/heart.svg"
          imgAlt="Heart icon"
          width={32}
          height={35}
          text="Twórz listy ulubionych książek, postów i wydarzeń"
        />
      </AccountBenefitsList>
    </section>
  );
}
