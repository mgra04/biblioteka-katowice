import FooterElement from "./footer-element";

export default function FooterAboutUs({ className }: { className?: string }) {
  return (
    <FooterElement className={className}>
      <FooterElement.FooterTitle>O nas</FooterElement.FooterTitle>
      <FooterElement.FooterList>
        <FooterElement.FooterListItem href="/">
          Historia
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/">
          O katalogach
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/">
          Zbiory
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/">
          Współpraca
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/">
          Sponsorzy
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/">
          Budżet Obywatelski
        </FooterElement.FooterListItem>
      </FooterElement.FooterList>
    </FooterElement>
  );
}
