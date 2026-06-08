import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suit-Man | The Data Engineer Who Became A Superhero",
  description:
    "Meet Suit-Man — Dinesh, a regular data engineer who received a mysterious glowing red tie and became the world's most unlikely superhero. Discover the origin story, powers, and adventures of the hero children everywhere look up to.",
  keywords: [
    "Suit-Man",
    "superhero",
    "data engineer",
    "Dinesh",
    "animated hero",
    "comic",
  ],
  openGraph: {
    title: "Suit-Man | The Data Engineer Who Became A Superhero",
    description:
      "From SQL queries to saving the city — the incredible origin story of Suit-Man.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
