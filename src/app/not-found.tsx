import "./globals.css";
import Button from "@/components/ui/button";
import H2 from "@/components/ui/h2";

export default function NotFound() {
  return (
    <main className="notFoundContainer">
      <H2 className="notFoundHeading">Nie znaleziono strony</H2>
      <Button variant="primary" size="lg" link="yes" href="/">
        Wróć na stronę główną
      </Button>
    </main>
  );
}
