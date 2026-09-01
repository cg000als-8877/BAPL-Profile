import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Byzid Apparels Profile",
  description:
    "Delivering Quality Apparel Worldwide Since 1995. Ready Made Garments (RMG) Manufacturer in Chattogram, Bangladesh.",
  keywords: [
    "Byzid Apparels",
    "RMG Bangladesh",
    "Apparel Manufacturer",
    "Woven",
    "Knit",
    "Denim",
    "Garments Exporter",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="day"
      className={`h-full w-full day-mode light bg-[#f8fafc] text-[#0f172a] ${plusJakartaSans.className}`}
    >
      <body className="h-full w-full overflow-hidden day-mode light bg-[#f8fafc] select-none text-[#0f172a]">
        {children}
      </body>
    </html>
  );
}
