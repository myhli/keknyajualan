import type { Metadata } from "next";
import { Anton, Manrope } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "keknyaJualan: Katalog Stok Akun & Langganan Digital",
  description: "Katalog stok akun dan langganan digital resmi dengan pemesanan langsung via WhatsApp.",
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
    <html lang="id" className="scroll-smooth motion-reduce:scroll-auto">
      <body
        className={`${anton.variable} ${manrope.variable} font-sans min-h-screen bg-white text-[#132442] antialiased selection:bg-[#bc8909] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
