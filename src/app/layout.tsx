import type { Metadata, Viewport } from "next";
import { DM_Sans, Great_Vibes, Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["200", "400", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Himachal 2026 | Wanderworld Holidays",
  description:
    "10 Nights 11 Days Himachal itinerary — Mumbai to Manali, Kasol, Dharamshala, Amritsar and back. Dec 15–25, 2026.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#ffda15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${mulish.variable} ${dmSans.variable} ${greatVibes.variable} h-full`}
    >
      <body className="min-h-full overflow-x-hidden bg-[#f4f1ea] font-sans text-[#121212] antialiased">
        {children}
      </body>
    </html>
  );
}
