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

function getProductDetails(name: string) {
  const lower = name.toLowerCase();
  if (lower.includes("google") || lower.includes("ai pro")) {
    return {
      code: "PLAN // 01",
      badge: "Google One AI Pro",
      desc: "Langganan personal resmi berdurasi 18 bulan penuh dengan kapasitas 2TB Google One Cloud dan akses tak terbatas ke model Gemini Ultra.",
      specs: ["Akses Gemini 1.5 Pro & Ultra", "2TB Google One Cloud", "Garansi Penuh 18 Bulan", "Private Account"],
    };
  }
  if (lower.includes("gemini")) {
    return {
      code: "PLAN // 02",
      badge: "Gemini Workspace",
      desc: "Akses komputasi penalaran model tingkat lanjut untuk koding, sintesis dokumen besar, dan integrasi ekosistem Google Workspace.",
      specs: ["Fitur Penalaran Tingkat Lanjut", "Konteks Dokumen Panjang", "2TB Cloud Storage", "Prioritas Server"],
    };
  }
  if (lower.includes("canva")) {
    return {
      code: "PLAN // 03",
      badge: "Canva Design Suite",
      desc: "Paket lengkap kreator konten dengan akses ke 100M+ aset visual, background remover instan, dan tools Magic Studio AI.",
      specs: ["100M+ Foto & Elemen Vektor", "Background Remover Otomatis", "Magic Studio AI", "Export Kualitas Tinggi"],
    };
  }
  return {
    code: "PLAN // 04",
    badge: "Digital License",
    desc: "Lisensi aplikasi produktivitas dan AI resmi dengan aktivasi langsung via WhatsApp admin keknyaJualan.",
    specs: ["Aktivasi 1–5 Menit", "Akun Terverifikasi", "Garansi Seller", "Bantuan Teknis"],
  };
}

export default function Home() {
  const stock = getStock();
  const stockEntries = Object.entries(stock);

  return (
    <div className="min-h-screen bg-white text-[#132442] flex flex-col justify-between selection:bg-[#bc8909] selection:text-white">
      <a
        href="#catalog"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1a3a63] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#bc8909]"
      >
        Lewati ke katalog produk
      </a>

      <header className="w-full pt-6 sm:pt-8 pb-4">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a
            href="#catalog"
            className="inline-flex items-center gap-3.5 text-decoration-none group select-none rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bc8909] focus-visible:ring-offset-2"
          >
            <div className="w-12 h-12 rounded-[14px] bg-white border border-[#1a3a63]/10 shadow-[0_2px_12px_rgba(19,36,66,0.06)] overflow-hidden flex items-center justify-center p-1 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2">
              <Image
                src="/avatar.png"
                alt="keknyaJualan Emblem"
                width={48}
                height={48}
                priority
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-[#132442] leading-tight">
                keknya<span className="text-[#bc8909]">Jualan</span>
              </span>
              <span className="text-[11px] font-medium text-[#637d92] uppercase tracking-wider">
                Official Hub ✦
              </span>
            </div>
          </a>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fafbfc] border border-[#637d92]/20 text-xs font-semibold text-[#1a3a63] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#bc8909] animate-pulse motion-reduce:animate-none"></span>
              <span>LIVE&nbsp;WIB&nbsp;SYNC</span>
            </div>

            <a
              href="https://wa.me/6283144569056"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#1a3a63] hover:bg-[#132442] text-white rounded-full px-4 sm:px-5 py-2 sm:py-2.5 font-semibold text-xs sm:text-sm tracking-tight shadow-sm hover:shadow transition-[background-color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3a63] focus-visible:ring-offset-2"
            >
              <span>Chat Admin</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-[1120px] w-full mx-auto px-4 sm:px-6 py-8 sm:py-14 flex-1 flex flex-col justify-start">
        <section className="mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-[-0.04em] leading-[0.94] text-[#132442] mb-4 text-balance">
              <span>Hey we&apos;re keknya</span>
              <br />
              <span className="text-[#637d92]/60 font-light">let&apos;s get your</span>
            </h1>

            <div className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#bc8909] mb-6 text-balance">
              verified subscriptions (•̀ᴗ•́)و ̑̑
            </div>

            <p className="text-base sm:text-lg text-[#132442]/75 leading-relaxed font-normal max-w-2xl">
              Katalog inventaris resmi lisensi Google AI, Gemini Advanced, dan Canva Pro.
              Stok tersinkronisasi otomatis via MTProto Telegram setiap hari untuk pemesanan langsung tanpa antre.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-8">
            <div className="bg-[#fafbfc] rounded-[20px] p-5 border border-[#637d92]/20 shadow-[0_2px_10px_rgba(19,36,66,0.03)]">
              <div className="text-[11px] font-bold text-[#bc8909] uppercase tracking-wider mb-1">
                PROTEKSI LISENSI
              </div>
              <div className="text-sm font-semibold text-[#132442]">Garansi Penggantian Penuh</div>
              <div className="text-xs text-[#637d92] mt-1">Jaminan ganti baru bila terjadi kendala akun selama masa aktif berlangganan.</div>
            </div>

            <div className="bg-[#fafbfc] rounded-[20px] p-5 border border-[#637d92]/20 shadow-[0_2px_10px_rgba(19,36,66,0.03)]">
              <div className="text-[11px] font-bold text-[#bc8909] uppercase tracking-wider mb-1">
                PENGIRIMAN INSTAN
              </div>
              <div className="text-sm font-semibold text-[#132442]">Aktivasi 1–5&nbsp;Menit</div>
              <div className="text-xs text-[#637d92] mt-1">Proses penyerahan akun dan instruksi aktivasi dikirim langsung via WhatsApp.</div>
            </div>

            <div className="bg-[#fafbfc] rounded-[20px] p-5 border border-[#637d92]/20 shadow-[0_2px_10px_rgba(19,36,66,0.03)]">
              <div className="text-[11px] font-bold text-[#bc8909] uppercase tracking-wider mb-1">
                PEMBAYARAN RESMI
              </div>
              <div className="text-sm font-semibold text-[#132442]">QRIS &amp; Transfer Bank</div>
              <div className="text-xs text-[#637d92] mt-1">Mendukung GoPay, OVO, ShopeePay, Dana, serta seluruh bank nasional.</div>
            </div>
          </div>
        </section>

        <section id="catalog" className="mb-12 scroll-mt-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-4 border-b border-[#637d92]/20 gap-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#bc8909] mb-1">
                LIVE INVENTORY
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#132442] text-balance">
                Katalog Stok Terkini
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#637d92] font-medium">
              Pembaruan otomatis 07:00&nbsp;WIB via MTProto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {stockEntries.length === 0 ? (
              <div className="col-span-full py-16 text-center bg-[#fafbfc] rounded-[24px] border border-[#637d92]/20">
                <p className="text-base font-semibold text-[#132442]">Katalog sedang diperbarui</p>
                <p className="text-xs text-[#637d92] mt-1">Silakan hubungi WhatsApp admin untuk informasi stok terkini.</p>
              </div>
            ) : (
              stockEntries.map(([item, status]) => {
                const normalized = status.trim().toLowerCase();
                const isOut =
                  normalized === "habis" ||
                  normalized === "kosong" ||
                  normalized === "0" ||
                  normalized === "out of stock";

                const details = getProductDetails(item);
                const waUrl = getOrderUrl(item);

                return (
                  <div
                    key={item}
                    className={`bg-white rounded-[24px] p-6 sm:p-7 border transition-[transform,box-shadow,border-color] duration-300 flex flex-col justify-between relative overflow-hidden group ${
                      isOut
                        ? "border-[#637d92]/20 opacity-65"
                        : "border-[#637d92]/25 shadow-[0_4px_20px_rgba(19,36,66,0.04)] hover:shadow-[0_12px_32px_-8px_rgba(19,36,66,0.1),0_0_24px_-4px_rgba(188,137,9,0.18)] hover:border-[#bc8909]/60 hover:-translate-y-1"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[11px] font-bold text-[#bc8909] uppercase tracking-wider">
                          {details.code}
                        </span>

                        {isOut ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f1f5f9] text-[#637d92] border border-[#637d92]/20 text-xs font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#637d92]"></span>
                            HABIS
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a3a63] text-white text-xs font-semibold shadow-sm tabular-nums">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#bc8909]"></span>
                            {status.toLowerCase() === "ready" ? "READY" : `${status}\u00A0UNIT`}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#132442] mb-2 leading-snug text-balance">
                        {item}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#637d92] leading-relaxed mb-6">
                        {details.desc}
                      </p>

                      <div className="space-y-2 mb-8">
                        {details.specs.map((spec) => (
                          <div key={spec} className="flex items-center gap-2 text-xs text-[#132442]/85 font-medium">
                            <svg aria-hidden="true" className="w-3.5 h-3.5 text-[#bc8909] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C12 7.523 7.523 12 2 12C7.523 12 12 16.477 12 22C12 16.477 16.477 12 22 12C16.477 12 12 7.523 12 2Z" />
                            </svg>
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#637d92]/20">
                      {isOut ? (
                        <div
                          role="status"
                          aria-label={`${item} stok kosong`}
                          className="w-full text-center py-3.5 px-4 rounded-full bg-[#f8fafc] text-[#637d92]/50 border border-[#637d92]/20 font-semibold text-sm cursor-not-allowed select-none"
                        >
                          Stok Kosong
                        </div>
                      ) : (
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 bg-[#bc8909] hover:bg-[#a57706] text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-[0_6px_18px_-4px_rgba(188,137,9,0.4)] hover:shadow-[0_10px_24px_-4px_rgba(188,137,9,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-[transform,box-shadow,background-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bc8909] focus-visible:ring-offset-2"
                        >
                          <span>Beli via WhatsApp</span>
                          <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>

        <section className="bg-[#fafbfc] rounded-[24px] p-6 sm:p-10 border border-[#637d92]/25 shadow-[0_4px_20px_rgba(19,36,66,0.03)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#132442] mb-2 text-balance">
              Butuh Langganan Lain atau Pembelian Tim?
            </h3>
            <p className="text-xs sm:text-sm text-[#637d92] leading-relaxed font-normal">
              Kami juga melayani permintaan khusus lisensi software, akun riset, dan paket langganan tim. Hubungi kami langsung melalui WhatsApp untuk konsultasi cepat.
            </p>
          </div>

          <a
            href="https://wa.me/6283144569056?text=Halo%20Admin%20keknyaJualan%2C%20saya%20ingin%20tanya-tanya%20seputar%20produk%20digital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#1a3a63] hover:bg-[#132442] text-white font-semibold text-sm px-7 py-4 rounded-full shadow-[0_4px_16px_rgba(19,36,66,0.15)] hover:-translate-y-0.5 transition-[transform,background-color,box-shadow] duration-200 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3a63] focus-visible:ring-offset-2"
          >
            <span>Konsultasi WhatsApp</span>
          </a>
        </section>
      </main>

      <footer className="w-full py-8 border-t border-[#637d92]/20 mt-12 bg-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#637d92] font-medium">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#132442]">keknyaJualan ✦</span>
            <span>•</span>
            <span>Digital Store &amp; Verified Stock Hub</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/6283144569056"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#bc8909] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bc8909]"
            >
              WhatsApp (+62 831-4456-9056)
            </a>
            <span>•</span>
            <span>Auto Sync 07:00&nbsp;WIB</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
