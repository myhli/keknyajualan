import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "keknyaJualan — Official Digital Store & Live Inventory",
  description: "Katalog lisensi resmi AI & productivity software dengan pembaruan stok live dan pemesanan WhatsApp.",
  icons: {
    icon: "/avatar.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-[#090a0f] text-[#f4f4f6] antialiased selection:bg-emerald-500 selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
