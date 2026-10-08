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
      code: "01",
      category: "Google One AI Pro",
      desc: "Langganan personal resmi berdurasi 18 bulan penuh dengan kapasitas 2TB Google One Cloud dan akses model Gemini Ultra.",
      specs: [
        "Akses Gemini 1.5 Pro dan Ultra",
        "Kapasitas 2TB Google One Storage",
        "Garansi akun penuh 18 bulan",
        "Akun privat personal",
      ],
    };
  }
  if (lower.includes("gemini")) {
    return {
      code: "02",
      category: "Gemini Workspace",
      desc: "Akses komputasi penalaran model tingkat lanjut untuk pemrograman, sintesis dokumen panjang, dan integrasi Google Workspace.",
      specs: [
        "Fitur penalaran tingkat lanjut",
        "Konteks dokumen panjang",
        "Cloud storage 2TB",
        "Prioritas server berkecepatan tinggi",
      ],
    };
  }
  if (lower.includes("canva")) {
    return {
      code: "03",
      category: "Canva Design Suite",
      desc: "Paket lengkap kreator konten dengan akses ke 100M+ aset visual, background remover instan, dan rangkaian Magic Studio.",
      specs: [
        "100M+ foto dan elemen grafis premium",
        "Penghapus latar belakang otomatis",
        "Alat kreasi Magic Studio",
        "Ekspor desain resolusi tinggi",
      ],
    };
  }
  return {
    code: "04",
    category: "Lisensi Digital",
    desc: "Lisensi aplikasi produktivitas dan AI resmi dengan aktivasi langsung via WhatsApp admin keknyaJualan.",
    specs: [
      "Aktivasi 1–5 Menit",
      "Akun terverifikasi",
      "Garansi seller penuh",
      "Bantuan teknis langsung",
    ],
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

      <header className="w-full border-b border-[#637d92]/15 py-5">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a
            href="#catalog"
            className="inline-flex items-center gap-3.5 text-decoration-none group select-none rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bc8909] focus-visible:ring-offset-2"
          >
            <div className="w-11 h-11 rounded-xl bg-white border border-[#1a3a63]/15 overflow-hidden flex items-center justify-center p-0.5">
              <Image
                src="/avatar.png"
                alt="keknyaJualan Logo"
                width={44}
                height={44}
                priority
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl tracking-normal text-[#132442] leading-none uppercase">
                keknya<span className="text-[#bc8909]">Jualan</span>
              </span>
              <span className="text-[11px] font-medium text-[#637d92] tracking-wide mt-0.5">
                Katalog &amp; Stok Langganan
              </span>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fafbfc] border border-[#637d92]/20 text-xs font-semibold text-[#1a3a63]">
              <span className="w-2 h-2 rounded-full bg-[#bc8909]"></span>
              <span>Pembaruan 07:00&nbsp;WIB</span>
            </div>

            <a
              href="https://wa.me/6283144569056"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#1a3a63] hover:bg-[#132442] text-white rounded-lg px-4 sm:px-5 py-2 font-medium text-xs sm:text-sm tracking-tight transition-[background-color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3a63] focus-visible:ring-offset-2"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-[1120px] w-full mx-auto px-4 sm:px-6 py-10 sm:py-16 flex-1 flex flex-col justify-start">
        <section className="mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#bc8909] mb-3">
              KATALOG RESMI
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-normal leading-[0.98] text-[#132442] mb-5 text-balance">
              Langganan Akun Digital &amp; AI
            </h1>
            <p className="text-base sm:text-lg text-[#132442]/80 leading-relaxed font-normal max-w-2xl">
              Inventaris lisensi Google AI Pro, Gemini Advanced, dan Canva Pro.
              Stok disinkronkan harian dari Telegram resmi untuk proses order langsung via WhatsApp tanpa antre.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#637d92]/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#637d92]">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bc8909]"></span>
              <span>Aktivasi 1–5&nbsp;Menit via WhatsApp</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bc8909]"></span>
              <span>Garansi Penggantian Penuh</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bc8909]"></span>
              <span>Pembayaran QRIS &amp; Transfer Bank</span>
            </div>
          </div>
        </section>

        <section id="catalog" className="mb-14 scroll-mt-12">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 pb-3 border-b border-[#637d92]/20 gap-2">
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-normal text-[#132442] text-balance">
              Daftar Stok Tersedia
            </h2>
            <p className="text-xs text-[#637d92] font-medium">
              Data sinkronisasi otomatis 07:00&nbsp;WIB
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stockEntries.length === 0 ? (
              <div className="col-span-full py-16 text-center bg-[#fafbfc] rounded-2xl border border-[#637d92]/20">
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
                    className={`bg-white rounded-2xl p-6 sm:p-7 border flex flex-col justify-between ${
                      isOut
                        ? "border-[#637d92]/20 opacity-60"
                        : "border-[#637d92]/25 shadow-[0_2px_12px_rgba(19,36,66,0.04)] hover:border-[#bc8909] transition-[border-color] duration-150"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[11px] font-bold text-[#637d92] uppercase tracking-wider">
                          {details.code} / {details.category}
                        </span>

                        {isOut ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#f1f5f9] text-[#637d92] border border-[#637d92]/20">
                            Stok Habis
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#1a3a63] text-white tabular-nums">
                            {status.toLowerCase() === "ready" ? "Ready" : `Sisa ${status}\u00A0Unit`}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold tracking-tight text-[#132442] mb-2 leading-snug text-balance">
                        {item}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#637d92] leading-relaxed mb-6">
                        {details.desc}
                      </p>

                      <ul className="space-y-2 mb-8 text-xs text-[#132442]/85 font-medium">
                        {details.specs.map((spec) => (
                          <li key={spec} className="flex items-baseline gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#bc8909] flex-shrink-0 self-center"></span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[#637d92]/15">
                      {isOut ? (
                        <div
                          role="status"
                          aria-label={`${item} stok kosong`}
                          className="w-full text-center py-3 px-4 rounded-lg bg-[#f8fafc] text-[#637d92]/60 border border-[#637d92]/20 font-medium text-sm cursor-not-allowed select-none"
                        >
                          Stok Kosong
                        </div>
                      ) : (
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center bg-[#bc8909] hover:bg-[#a57706] text-white font-semibold text-sm px-5 py-3 rounded-lg transition-[background-color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bc8909] focus-visible:ring-offset-2"
                        >
                          Pesan via WhatsApp
                        </a>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>

        <section className="bg-[#fafbfc] rounded-2xl p-6 sm:p-8 border border-[#637d92]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="max-w-xl">
            <h3 className="font-display text-xl sm:text-2xl uppercase tracking-normal text-[#132442] mb-1.5 text-balance">
              Kebutuhan Langganan Lain atau Akun Tim?
            </h3>
            <p className="text-xs sm:text-sm text-[#637d92] leading-relaxed font-normal">
              Kami juga melayani permintaan akun custom, durasi khusus, atau lisensi tim. Silakan chat admin untuk pengecekan stok langsung.
            </p>
          </div>

          <a
            href="https://wa.me/6283144569056?text=Halo%20Admin%20keknyaJualan%2C%20saya%20ingin%20tanya-tanya%20seputar%20produk%20digital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#1a3a63] hover:bg-[#132442] text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-lg transition-[background-color] duration-150 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3a63] focus-visible:ring-offset-2"
          >
            Konsultasi WhatsApp
          </a>
        </section>
      </main>

      <footer className="w-full py-8 border-t border-[#637d92]/20 mt-12 bg-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#637d92] font-medium">
          <div className="flex items-center gap-2">
            <span className="font-display text-base uppercase tracking-normal text-[#132442]">keknyaJualan</span>
            <span>·</span>
            <span>Katalog &amp; Stok Terverifikasi</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/6283144569056"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#bc8909] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bc8909]"
            >
              WhatsApp (+62 831-4456-9056)
            </a>
            <span>·</span>
            <span>Sinkronisasi 07:00&nbsp;WIB</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
