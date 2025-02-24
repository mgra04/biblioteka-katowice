import FooterElement from "./footer-element";

export default function FooterCheckOut({ className }: { className?: string }) {
  return (
    <FooterElement className={className}>
      <FooterElement.FooterTitle>Zajrzyj</FooterElement.FooterTitle>
      <FooterElement.FooterList>
        <FooterElement.FooterListItem href="/">
          BIP
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/">
          UM Katowice
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/">
          Ogłoszenia UM Katowice
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/">
          Budżet Obywatelski
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/">
          Agenda 2030
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/">
          Pomoc Ukrainie
        </FooterElement.FooterListItem>
      </FooterElement.FooterList>
    </FooterElement>
  );
}
