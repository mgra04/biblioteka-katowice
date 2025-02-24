import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import "@/styles/styles.min.css";
import TopNav from "@/components/nav/top-nav";
import Footer from "@/components/footer/footer";
import TopNavContextProvider from "@/contexts/top-nav-context-provider";
import Newsletter from "@/components/newsletter/newsletter";
import MapContextProvider from "@/contexts/map-context-provider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Biblioteka Katowice",
  description: "Twoja biblioteka w Katowicach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <TopNavContextProvider>
          <TopNav />
        </TopNavContextProvider>

        <MapContextProvider>{children}</MapContextProvider>

        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
