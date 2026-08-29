import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Byzid Apparels (Pvt) Ltd. | Corporate Presentation Profile",
  description: "Delivering Quality Apparel Worldwide Since 1995. Ready Made Garments (RMG) Manufacturer in Chattogram, Bangladesh.",
  keywords: ["Byzid Apparels", "RMG Bangladesh", "Apparel Manufacturer", "Woven", "Knit", "Denim", "Garments Exporter"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full bg-slate-950 text-slate-900">
      <body className="h-full w-full overflow-hidden bg-[#070b14] select-none">
        {children}
      </body>
    </html>
  );
}
