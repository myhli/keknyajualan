import type { Metadata } from "next";
import { Anton, Manrope } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
  title: "keknyaJualan",
  description: "Jual akun / Subscription / Family Subscription.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className="scroll-smooth motion-reduce:scroll-auto"
      suppressHydrationWarning
    >
      <body
        className={`${anton.variable} ${manrope.variable} font-sans min-h-screen bg-white text-[#0b2b51] antialiased selection:bg-[#c5a8a1] selection:text-[#0b2b51]`}
      >
        {children}
      </body>
    </html>
  );
}
