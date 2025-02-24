import FooterElement from "./footer-element";

export default function FooterWebsite({ className }: { className?: string }) {
  return (
    <FooterElement className={className}>
      <FooterElement.FooterTitle>Strona</FooterElement.FooterTitle>
      <FooterElement.FooterList>
        <FooterElement.FooterListItem href="/">
          Strona główna
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/katalog-glowny">
          Katalog główny
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/legimi">
          Legimi
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/academica">
          Academica
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/ibuk-libra">
          Ibuk Libra
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/aktualnosci">
          Aktualności
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/wydarzenia">
          Wydarzenia
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/filie">
          Filie
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/galeria">
          Galeria
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/faq">
          FAQ
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/kontakty">
          Kontakt
        </FooterElement.FooterListItem>
        <FooterElement.FooterListItem href="/konto">
          Konto
        </FooterElement.FooterListItem>
      </FooterElement.FooterList>
    </FooterElement>
  );
}
