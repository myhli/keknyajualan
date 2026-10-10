import fs from "fs";
import path from "path";
import Link from "next/link";
import type { Metadata } from "next";
import { WhatsAppTrigger } from "../whatsapp-contact";
import { TestimonialsView, ScreenshotCardItem } from "./testimonials-view";

export const metadata: Metadata = {
  title: "Bukti Transaksi & Testimoni — keknyaJualan",
  description:
    "Tangkapan layar riil bukti transaksi dan pengiriman langganan resmi di keknyaJualan.",
};

const VALID_EXTS = [".png", ".jpg", ".jpeg", ".webp"];

function getScreenshots(): ScreenshotCardItem[] {
  const dirPath = path.join(process.cwd(), "public", "testimoni");
  const result: ScreenshotCardItem[] = [];

  let existingFiles: string[] = [];
  if (fs.existsSync(dirPath)) {
    try {
      existingFiles = fs.readdirSync(dirPath).filter((f) => {
        const ext = path.extname(f).toLowerCase();
        return VALID_EXTS.includes(ext);
      });
    } catch {
      existingFiles = [];
    }
  }

  // Sort files numerically if numbers, else alphabetically
  existingFiles.sort((a, b) => {
    const numA = parseInt(path.basename(a, path.extname(a)), 10);
    const numB = parseInt(path.basename(b, path.extname(b)), 10);
    if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
    return a.localeCompare(b);
  });

  existingFiles.forEach((f, idx) => {
    result.push({
      id: idx + 1,
      title: `Bukti Transaksi #${String(idx + 1).padStart(2, "0")}`,
      imageSrc: `/testimoni/${f}`,
      expectedFilename: f,
    });
  });

  return result;
}

export default function TestimoniPage() {
  const screenshots = getScreenshots();

  return (
    <div className="min-h-screen bg-white text-[#0b2b51] flex flex-col justify-between selection:bg-[#c5a8a1] selection:text-[#0b2b51]">
      <a
        href="#testimoni"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0b2b51] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#c5a8a1]"
      >
        Lewati ke daftar bukti transaksi
      </a>

      {/* Header */}
      <header className="w-full border-b border-[#7a7b8f]/20 py-4 sm:py-5 bg-white sticky top-0 z-40">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center text-decoration-none group select-none rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3c4d70] focus-visible:ring-offset-2"
          >
            <div className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl tracking-normal text-[#0b2b51] leading-none uppercase">
                keknya<span className="text-[#3c4d70]">Jualan</span>
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3 sm:gap-6">
            <nav className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold">
              <Link
                href="/"
                className="text-[#7a7b8f] hover:text-[#0b2b51] transition-colors py-1 px-2 rounded-md"
              >
                Katalog
              </Link>
              <Link
                href="/testimoni"
                className="text-[#0b2b51] font-bold py-1 px-2 rounded-md bg-[#fafbfc] border border-[#7a7b8f]/20"
                aria-current="page"
              >
                Testimoni
              </Link>
            </nav>

            <WhatsAppTrigger
              message="Halo Admin keknyaJualan, saya ingin tanya-tanya seputar produk digital"
              className="inline-flex items-center gap-2 justify-center bg-[#0b2b51] hover:bg-[#3c4d70] text-white rounded-lg px-3.5 sm:px-5 py-2 font-medium text-xs sm:text-sm tracking-tight transition-[background-color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b2b51] focus-visible:ring-offset-2 cursor-pointer flex-shrink-0"
            >
              <i className="fa-brands fa-whatsapp text-base sm:text-lg"></i>
              <span className="hidden sm:inline">Chat WhatsApp</span>
              <span className="sm:hidden">Chat</span>
            </WhatsAppTrigger>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1120px] w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 flex flex-col justify-start">
        <section id="testimoni" className="mb-10 sm:mb-14 scroll-mt-20">
          <div className="text-center mb-8 pb-4 border-b border-[#7a7b8f]/20">
            <h1 className="font-display text-2xl sm:text-4xl uppercase tracking-normal text-[#0b2b51] text-balance">
              Bukti Transaksi
            </h1>
            <p className="text-xs text-[#7a7b8f] mt-1">
              Sentuh atau klik tangkapan layar untuk melihat rincian bukti transaksi
            </p>
          </div>

          <TestimonialsView screenshots={screenshots} />
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-[#7a7b8f]/20 mt-12 bg-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7a7b8f] font-medium">
          <div className="flex items-center gap-2">
            <span className="font-display text-base uppercase tracking-normal text-[#0b2b51]">
              keknyaJualan
            </span>
            <span>·</span>
            <Link href="/" className="hover:text-[#0b2b51] transition-colors">
              Katalog Produk
            </Link>
            <span>·</span>
            <span>Made by Myhli_</span>
          </div>

          <WhatsAppTrigger
            message="Halo Admin keknyaJualan, saya ingin tanya-tanya seputar produk digital"
            className="inline-flex items-center gap-1.5 hover:text-[#0b2b51] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3c4d70] cursor-pointer"
          >
            <i className="fa-brands fa-whatsapp text-black text-base"></i>
            <span>WhatsApp (Ilham / Miftakh)</span>
          </WhatsAppTrigger>
        </div>
      </footer>
    </div>
  );
}
