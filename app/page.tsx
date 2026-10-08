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

function getProductMeta(name: string) {
  const lower = name.toLowerCase();
  if (lower.includes("google") || lower.includes("ai pro")) {
    return {
      code: "LIC-GOOG-AI",
      badge: "Private Subscription",
      specs: ["Gemini 1.5 Pro & Ultra", "2TB Cloud Storage", "Garansi Penuh 18 Bulan"],
      iconType: "gemini",
    };
  }
  if (lower.includes("gemini")) {
    return {
      code: "LIC-GEM-ADV",
      badge: "Model Access",
      specs: ["Akses Model 1.5 Pro", "Riset Dokumen & Kode", "2TB Google One"],
      iconType: "gemini",
    };
  }
  if (lower.includes("canva")) {
    return {
      code: "LIC-CNV-PRO",
      badge: "Design Suite",
      specs: ["100M+ Aset & Elemen", "Background Remover", "Magic Studio AI"],
      iconType: "canva",
    };
  }
  return {
    code: "LIC-DIG-SUBS",
    badge: "Official Digital",
    specs: ["Aktivasi Cepat", "Akun Terverifikasi", "Garansi Seller"],
    iconType: "default",
  };
}

export default function Home() {
  const stock = getStock();

  return (
    <main className="min-h-screen bg-[#090a0f] text-[#f4f4f6] flex flex-col justify-between items-center px-4 py-8 sm:py-16 selection:bg-emerald-500 selection:text-black">
      <div className="w-full max-w-[540px] mx-auto flex flex-col items-center">
        <header className="w-full flex flex-col items-center text-center mb-8 sm:mb-10">
          <div className="relative mb-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-1 bg-[#12151d] border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <Image
                src="/avatar.png"
                alt="keknyaJualan"
                width={96}
                height={96}
                priority
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-black p-1 rounded-full ring-4 ring-[#090a0f]" title="Verified Seller">
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1.5 mb-1">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              keknyaJualan
            </h1>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-zinc-300">
              OFFICIAL
            </span>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 font-normal max-w-sm mb-4">
            Katalog lisensi resmi AI & productivity software dengan inventaris terverifikasi real-time.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121620] border border-white/[0.08] text-xs font-mono text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wide text-[11px] text-zinc-300">
              TELEGRAM MTPROTO LIVE SYNC
            </span>
          </div>
        </header>

        <section className="w-full grid grid-cols-3 gap-2 mb-8">
          <div className="p-3 rounded-xl bg-[#111319] border border-white/[0.06] text-center flex flex-col items-center justify-center">
            <span className="text-[11px] font-mono text-zinc-400 block mb-0.5">AKTIVASI</span>
            <span className="text-xs sm:text-sm font-semibold text-white">1–5 Menit</span>
          </div>
          <div className="p-3 rounded-xl bg-[#111319] border border-white/[0.06] text-center flex flex-col items-center justify-center">
            <span className="text-[11px] font-mono text-zinc-400 block mb-0.5">PROTEKSI</span>
            <span className="text-xs sm:text-sm font-semibold text-white">Full Garansi</span>
          </div>
          <div className="p-3 rounded-xl bg-[#111319] border border-white/[0.06] text-center flex flex-col items-center justify-center">
            <span className="text-[11px] font-mono text-zinc-400 block mb-0.5">METODE</span>
            <span className="text-xs sm:text-sm font-semibold text-white">QRIS / Bank</span>
          </div>
        </section>

        <div className="w-full flex flex-col gap-4">
          {Object.entries(stock).map(([item, status]) => {
            const normalized = status.trim().toLowerCase();
            const isOut =
              normalized === "habis" ||
              normalized === "kosong" ||
              normalized === "0" ||
              normalized === "out of stock";

            const meta = getProductMeta(item);
            const waUrl = getOrderUrl(item);

            return (
              <div
                key={item}
                className={`relative w-full rounded-2xl border transition-all duration-150 overflow-hidden ${
                  isOut
                    ? "bg-[#0d0f14] border-white/[0.04] opacity-50"
                    : "bg-[#12141c] border-white/[0.08] hover:border-emerald-500/40 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
                }`}
              >
                <div className="p-5 sm:p-6 flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center flex-shrink-0 text-white">
                        {meta.iconType === "gemini" ? (
                          <svg className="w-5 h-5 text-zinc-200" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C12 7.523 7.523 12 2 12C7.523 12 12 16.477 12 22C12 16.477 16.477 12 22 12C16.477 12 12 7.523 12 2Z" />
                          </svg>
                        ) : meta.iconType === "canva" ? (
                          <svg className="w-5 h-5 text-zinc-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="9" />
                            <path d="M15 9.5C14.2 8.6 13.2 8 12 8C9.8 8 8 9.8 8 12C8 14.2 9.8 16 12 16C13.2 16 14.2 15.4 15 14.5" strokeLinecap="round" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-zinc-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 7h1a2 2 0 0 1 2 2m4 0a6 6 0 0 1-7.743 5.743L11 17H9v2H7v2H4a1 1 0 0 1-1-1v-2.586a1 1 0 0 1 .293-.707l5.964-5.964A6 6 0 1 1 21 9Z" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">
                            {meta.code}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-500">•</span>
                          <span className="text-[10px] font-mono text-zinc-400">
                            {meta.badge}
                          </span>
                        </div>
                        <h2 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
                          {item}
                        </h2>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      {isOut ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/50 text-[11px] font-mono font-medium text-zinc-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
                          HABIS
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono font-semibold text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.12)]">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                          </span>
                          {status.toLowerCase() === "ready" ? "READY" : `${status} UNIT`}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {meta.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-zinc-300 font-mono"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-zinc-400">
                      {isOut ? "Estimasi restock 1x24 jam" : "Order instan langsung chat"}
                    </span>

                    {isOut ? (
                      <span className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.06] text-xs font-mono text-zinc-500 cursor-not-allowed select-none">
                        STOK KOSONG
                      </span>
                    ) : (
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-black font-semibold text-xs sm:text-sm transition-all duration-150 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                        <span>Beli Sekarang</span>
                        <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full mt-6">
          <a
            href="https://wa.me/6283144569056?text=Halo%20Admin%20keknyaJualan%2C%20saya%20ingin%20konsultasi%20mengenai%20produk%20digital"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-[#12141c] hover:bg-[#181a24] border border-white/[0.08] hover:border-white/[0.16] text-zinc-300 hover:text-white font-medium text-xs sm:text-sm transition-all duration-150 shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
          >
            <svg className="w-4 h-4 text-emerald-400 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>Tanya Admin / Custom Request</span>
          </a>
        </div>
      </div>

      <footer className="w-full max-w-[540px] mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-2 text-center">
        <span>keknyaJualan © 2026</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          Direct WhatsApp Integration
        </span>
      </footer>
    </main>
  );
}
