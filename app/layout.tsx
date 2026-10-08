import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "keknyaJualan 挑 — Verified Digital Catalog & Stock",
  description: "Official stock catalog & direct WhatsApp ordering for AI and creative subscriptions.",
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
    <html lang="id" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} font-sans min-h-screen bg-[#f8f3e9] text-[#1a1a1a] antialiased selection:bg-[#ff3333] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
