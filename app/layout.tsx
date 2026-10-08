import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "keknyaJualan Official: Instagram | Linktree",
  description: "keknyaJualan Official catalog and ordering portal",
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
    <html lang="id">
      <body
        className={`${ibmPlexSans.variable} font-sans min-h-screen bg-[#A6BDC0] text-[#010101] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
