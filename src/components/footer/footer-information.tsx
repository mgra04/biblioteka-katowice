import FooterElement from "./footer-element";

export default function FooterInformation({
  className,
}: {
  className?: string;
}) {
  return (
    <FooterElement className={className}>
      <FooterElement.FooterTitle>Informacje</FooterElement.FooterTitle>
      <FooterElement.FooterList>
        <FooterElement.FooterListItem href="/">
          Regulamin Biblioteki
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/">
          Regulamin udostępniania gier planszowych
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/">
          Regulamin akcji Srebrna Książka
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/">
          Windykacja zbiorów
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/">
          Pliki cookies
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/">
          Dane osobowe
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/">
          Newsletter
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/">
          Deklaracja dostępności
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/">
          Standardy Ochrony Małoletnich
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/">
          Regulamin zgłoszeń wewnętrznych
        </FooterElement.FooterListItem>
      </FooterElement.FooterList>
    </FooterElement>
  );
}
