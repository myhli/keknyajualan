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
    <div className="min-h-screen bg-white text-[#0b2b51] flex flex-col justify-between selection:bg-[#c5a8a1] selection:text-[#0b2b51]">
      <a
        href="#catalog"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0b2b51] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#c5a8a1]"
      >
        Lewati ke katalog produk
      </a>

      <header className="w-full border-b border-[#7a7b8f]/20 py-4 sm:py-5 bg-white sticky top-0 z-40">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a
            href="#catalog"
            className="inline-flex items-center text-decoration-none group select-none rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3c4d70] focus-visible:ring-offset-2"
          >
            <div className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl tracking-normal text-[#0b2b51] leading-none uppercase">
                keknya<span className="text-[#3c4d70]">Jualan</span>
              </span>
              <span className="text-[11px] font-medium text-[#7a7b8f] tracking-wide mt-1">
                Katalog &amp; Stok Langganan
              </span>
            </div>
          </a>

          <a
            href="https://wa.me/6283144569056"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#0b2b51] hover:bg-[#3c4d70] text-white rounded-lg px-4 sm:px-5 py-2 font-medium text-xs sm:text-sm tracking-tight transition-[background-color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b2b51] focus-visible:ring-offset-2"
          >
            Chat WhatsApp
          </a>
        </div>
      </header>

      <main className="max-w-[1120px] w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 flex flex-col justify-start">
        <section className="mb-10 sm:mb-14 flex flex-col items-center sm:items-start">
          <div className="w-64 sm:w-80 md:w-96 mb-6 transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src="/logo.png"
              alt="keknyaJualan Logo"
              width={384}
              height={384}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="w-full pt-4 border-t border-[#7a7b8f]/20 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#7a7b8f]">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3c4d70]"></span>
              <span>Aktivasi 1–5&nbsp;Menit via WhatsApp</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3c4d70]"></span>
              <span>Garansi Penggantian Penuh</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3c4d70]"></span>
              <span>Pembayaran QRIS &amp; Transfer Bank</span>
            </div>
          </div>
        </section>

        <section id="catalog" className="mb-14 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 pb-3 border-b border-[#7a7b8f]/20 gap-2">
            <div>
              <h1 className="font-display text-2xl sm:text-4xl uppercase tracking-normal text-[#0b2b51] text-balance">
                Daftar Produk &amp; Stok
              </h1>
              <p className="text-xs text-[#7a7b8f] mt-1">
                Arahkan kursor atau sentuh produk untuk melihat rincian paket dan pemesanan WhatsApp
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {stockEntries.length === 0 ? (
              <div className="py-16 text-center bg-[#fafbfc] rounded-2xl border border-[#7a7b8f]/20">
                <p className="text-base font-semibold text-[#0b2b51]">Katalog sedang diperbarui</p>
                <p className="text-xs text-[#7a7b8f] mt-1">Silakan hubungi WhatsApp admin untuk informasi stok terkini.</p>
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
                    tabIndex={0}
                    role="region"
                    aria-label={`Detail produk ${item}`}
                    className={`group bg-white rounded-2xl border transition-[border-color,box-shadow] duration-300 overflow-hidden outline-none ${
                      isOut
                        ? "border-[#7a7b8f]/20 opacity-75"
                        : "border-[#7a7b8f]/30 hover:border-[#0b2b51] focus-within:border-[#0b2b51] hover:shadow-[0_12px_36px_rgba(11,43,81,0.08)] focus-within:shadow-[0_12px_36px_rgba(11,43,81,0.08)]"
                    }`}
                  >
                    <div className="p-6 sm:p-8 cursor-pointer select-none flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start md:items-baseline gap-4 sm:gap-6 flex-1 min-w-0">
                        <span className="font-display text-2xl sm:text-3xl text-[#7a7b8f]/60 tracking-normal flex-shrink-0 group-hover:text-[#3c4d70] group-focus-within:text-[#3c4d70] transition-colors">
                          {details.code}
                        </span>

                        <div className="flex-1 min-w-0">
                          <div className="text-[11px] font-bold text-[#7a7b8f] uppercase tracking-wider mb-1">
                            {details.category}
                          </div>
                          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl uppercase tracking-normal text-[#0b2b51] leading-tight group-hover:text-[#3c4d70] group-focus-within:text-[#3c4d70] transition-colors break-words">
                            {item}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between md:justify-end gap-3.5 sm:gap-4 flex-shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#7a7b8f]/10">
                        {isOut ? (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#f1f5f9] text-[#7a7b8f] border border-[#7a7b8f]/20">
                            Stok Habis
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0b2b51] text-white tabular-nums shadow-sm">
                            {status.toLowerCase() === "ready" ? "Ready" : `Sisa ${status}\u00A0Unit`}
                          </span>
                        )}

                        <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#7a7b8f]/30 flex items-center justify-center text-[#0b2b51] group-hover:rotate-45 group-focus-within:rotate-45 group-hover:bg-[#0b2b51] group-focus-within:bg-[#0b2b51] group-hover:text-white group-focus-within:text-white group-hover:border-[#0b2b51] group-focus-within:border-[#0b2b51] transition-[transform,background-color,color,border-color] duration-300 flex-shrink-0">
                          <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-3 border-t border-[#7a7b8f]/15 bg-[#fafbfc]/50">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                            <div className="md:col-span-2">
                              <div className="text-xs font-bold uppercase tracking-wider text-[#3c4d70] mb-2">
                                Deskripsi Layanan
                              </div>
                              <p className="text-sm sm:text-base text-[#0b2b51]/85 leading-relaxed mb-6 font-normal">
                                {details.desc}
                              </p>

                              <div className="text-xs font-bold uppercase tracking-wider text-[#3c4d70] mb-3">
                                Spesifikasi &amp; Keunggulan Akun
                              </div>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#0b2b51]/90 font-medium">
                                {details.specs.map((spec) => (
                                  <li key={spec} className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-[#7a7b8f]/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#3c4d70] flex-shrink-0"></span>
                                    <span>{spec}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-[#7a7b8f]/20 flex flex-col justify-between gap-6 shadow-sm">
                              <div>
                                <div className="text-xs font-bold uppercase tracking-wider text-[#7a7b8f] mb-1">
                                  Status Pemesanan
                                </div>
                                <div className="text-lg font-bold text-[#0b2b51] mb-2">
                                  {isOut ? "Stok Habis Sementara" : "Tersedia & Siap Kirim"}
                                </div>
                                <p className="text-xs text-[#7a7b8f] leading-relaxed">
                                  Proses verifikasi dan aktivasi dilakukan langsung oleh admin setelah transfer pembayaran terkonfirmasi.
                                </p>
                              </div>

                              <div>
                                {isOut ? (
                                  <div
                                    role="status"
                                    aria-label={`${item} stok kosong`}
                                    className="w-full text-center py-3.5 px-4 rounded-xl bg-[#f8fafc] text-[#7a7b8f]/60 border border-[#7a7b8f]/20 font-medium text-sm cursor-not-allowed select-none"
                                  >
                                    Stok Sedang Kosong
                                  </div>
                                ) : (
                                  <a
                                    href={waUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center bg-[#0b2b51] hover:bg-[#3c4d70] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-[0_4px_16px_rgba(11,43,81,0.15)] transition-[background-color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3c4d70] focus-visible:ring-offset-2"
                                  >
                                    Pesan Sekarang via WhatsApp
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>

        <section className="bg-[#fafbfc] rounded-2xl p-6 sm:p-10 border border-[#7a7b8f]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-normal text-[#0b2b51] mb-2 text-balance">
              Kebutuhan Langganan Lain atau Akun Tim?
            </h2>
            <p className="text-xs sm:text-sm text-[#7a7b8f] leading-relaxed font-normal">
              Kami juga melayani permintaan akun khusus, lisensi perangkat lunak tambahan, dan paket langganan tim. Hubungi kami langsung melalui WhatsApp untuk konsultasi cepat.
            </p>
          </div>

          <a
            href="https://wa.me/6283144569056?text=Halo%20Admin%20keknyaJualan%2C%20saya%20ingin%20tanya-tanya%20seputar%20produk%20digital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#0b2b51] hover:bg-[#3c4d70] text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-xl transition-[background-color] duration-150 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b2b51] focus-visible:ring-offset-2"
          >
            Konsultasi WhatsApp
          </a>
        </section>
      </main>

      <footer className="w-full py-8 border-t border-[#7a7b8f]/20 mt-12 bg-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7a7b8f] font-medium">
          <div className="flex items-center gap-2">
            <span className="font-display text-base uppercase tracking-normal text-[#0b2b51]">keknyaJualan</span>
            <span>·</span>
            <span>Katalog &amp; Stok Terverifikasi</span>
          </div>

          <a
            href="https://wa.me/6283144569056"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0b2b51] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3c4d70]"
          >
            WhatsApp (+62 831-4456-9056)
          </a>
        </div>
      </footer>
    </div>
  );
}
