import fs from "fs";
import path from "path";
import Image from "next/image";

type StockData = Record<string, string>;

function getStock(): StockData {
  const filePath = path.join(process.cwd(), "stock.json");
  if (!fs.existsSync(filePath)) {
    return {
      "Google AI PRO 18 Bulan": "12",
      "Gemini Advanced": "Ready",
      "Canva Pro": "Habis",
    };
  }
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return {
      "Google AI PRO 18 Bulan": "12",
      "Gemini Advanced": "Ready",
      "Canva Pro": "Habis",
    };
  }
}

function getOrderUrl(item: string): string {
  const message = `Halo, Saya mau membeli ${item}. Apakah stock tersedia?`;
  return `https://wa.me/6283144569056?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const stock = getStock();

  return (
    <main className="min-h-screen bg-[#A6BDC0] text-[#010101] flex flex-col items-center justify-between px-4 py-8 sm:py-12 selection:bg-black selection:text-[#A6BDC0]">
      <div className="w-full max-w-[580px] mx-auto flex flex-col items-center">
        <div className="w-full flex justify-end mb-4">
          <div className="w-10 h-10 rounded-full bg-[#799BA0] border-2 border-black shadow-[2px_2px_0px_#000000] flex items-center justify-center cursor-pointer hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#000000] transition-all">
            <svg
              className="w-5 h-5 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="5" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="19" r="2" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col items-center mb-8">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-black shadow-[3px_3px_0px_#000000] bg-[#799BA0]">
            <Image
              src="/avatar.png"
              alt="keknyaJualan"
              fill
              priority
              className="object-cover"
            />
          </div>
          <h1 className="text-lg sm:text-xl font-bold tracking-tight text-[#010101] mt-4">
            @keknyaJualan
          </h1>
          <p className="text-xs sm:text-sm font-medium text-slate-800 mt-1">
            Katalog Stok & Pemesanan Resmi
          </p>
        </div>

        <div className="w-full flex flex-col gap-4">
          {Object.entries(stock).map(([item, status]) => {
            const normalized = status.trim().toLowerCase();
            const isOut =
              normalized === "habis" ||
              normalized === "kosong" ||
              normalized === "0" ||
              normalized === "out of stock";

            const waUrl = getOrderUrl(item);

            return (
              <a
                key={item}
                href={isOut ? undefined : waUrl}
                target={isOut ? undefined : "_blank"}
                rel={isOut ? undefined : "noopener noreferrer"}
                className={`w-full group flex items-center justify-between py-4 px-5 rounded-xl border-2 border-black bg-[#799BA0] transition-all duration-150 ${
                  isOut
                    ? "opacity-60 cursor-not-allowed shadow-[2px_2px_0px_#000000]"
                    : "shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none cursor-pointer"
                }`}
              >
                <div className="flex items-center gap-3 pr-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full border border-black ${
                      isOut ? "bg-rose-500" : "bg-emerald-400"
                    }`}
                  />
                  <span className="font-bold text-sm sm:text-base text-black uppercase tracking-wide">
                    {item}
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border border-black shadow-[1px_1px_0px_#000000] ${
                      isOut
                        ? "bg-[#7f1d1d] text-[#fca5a5]"
                        : "bg-[#064e3b] text-[#6ee7b7]"
                    }`}
                  >
                    {status}
                  </span>
                  {!isOut && (
                    <svg
                      className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </div>
              </a>
            );
          })}
        </div>

        <div className="w-full mt-6">
          <a
            href="https://wa.me/6283144569056"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-black bg-emerald-700 text-white font-bold text-sm shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all"
          >
            <span>Hubungi Admin WhatsApp</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>

      <footer className="mt-12 text-center text-xs font-medium text-slate-800 flex items-center justify-center gap-1.5 select-none">
        <span className="font-bold">keknyaJualan</span>
        <span>•</span>
        <span>Katalog Terverifikasi</span>
      </footer>
    </main>
  );
}
