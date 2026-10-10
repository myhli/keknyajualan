import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppTrigger } from "./whatsapp-contact";

type ProductInput = {
  name: string;
  category?: string;
  desc?: string;
  specs?: string[];
  warranty?: string;
};

function getProducts() {
  const productsPath = path.join(process.cwd(), "products.json");

  let baseProducts: ProductInput[] = [];

  if (fs.existsSync(productsPath)) {
    try {
      baseProducts = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
    } catch {
      baseProducts = [];
    }
  }

  return baseProducts.map((prod, idx) => {
    const code = String(idx + 1).padStart(2, "0");
    return {
      ...prod,
      code,
    };
  });
}

export default function Home() {
  const products = getProducts();

  return (
    <div className="min-h-screen bg-white text-[#0b2b51] flex flex-col justify-between selection:bg-[#c5a8a1] selection:text-[#0b2b51]">
      <a
        href="#catalog"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0b2b51] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#c5a8a1]"
      >
        Lewati ke katalog produk
      </a>

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
                className="text-[#0b2b51] font-bold py-1 px-2 rounded-md bg-[#fafbfc] border border-[#7a7b8f]/20"
                aria-current="page"
              >
                Katalog
              </Link>
              <Link
                href="/testimoni"
                className="text-[#7a7b8f] hover:text-[#0b2b51] transition-colors py-1 px-2 rounded-md"
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

      <main className="max-w-[1120px] w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 flex flex-col justify-start">
        <section className="mb-10 sm:mb-14 flex flex-col items-center text-center">
          <div className="w-64 sm:w-80 md:w-96 mb-6 transition-transform duration-300 hover:scale-[1.02] mx-auto">
            <Image
              src="/avatar.png"
              alt="keknyaJualan Logo"
              width={384}
              height={384}
              priority
              className="w-full h-auto object-contain mx-auto"
            />
          </div>

          <div className="w-full pt-4 border-t border-[#7a7b8f]/20 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-[#7a7b8f]">
            <div className="flex items-center gap-2">
              <i className="fa-brands fa-whatsapp text-black text-sm"></i>
              <span>Aktivasi 1–5&nbsp;Menit via WhatsApp</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3c4d70]"></span>
              <span>Garansi 24 Jam</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-qrcode text-black text-sm"></i>
              <span>Pembayaran QRIS</span>
            </div>
          </div>
        </section>

        <section id="catalog" className="mb-14 scroll-mt-20">
          <div className="text-center mb-8 pb-4 border-b border-[#7a7b8f]/20">
            <h1 className="font-display text-2xl sm:text-4xl uppercase tracking-normal text-[#0b2b51] text-balance">
              Daftar Produk
            </h1>
            <p className="text-xs text-[#7a7b8f] mt-1">
              Arahkan kursor atau sentuh produk untuk melihat rincian paket dan pemesanan WhatsApp
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {products.length === 0 ? (
              <div className="py-16 text-center bg-[#fafbfc] rounded-2xl border border-[#7a7b8f]/20">
                <p className="text-base font-semibold text-[#0b2b51]">Katalog sedang diperbarui</p>
                <p className="text-xs text-[#7a7b8f] mt-1">Silakan hubungi WhatsApp admin untuk informasi pemesanan.</p>
              </div>
            ) : (
              products.map((item) => {
                const specs = item.specs || [
                  "Aktivasi 1–5 Menit",
                  "Akun Terverifikasi",
                  "Garansi Penuh",
                ];

                return (
                  <div
                    key={item.name}
                    tabIndex={0}
                    role="region"
                    aria-label={`Detail produk ${item.name}`}
                    className="group bg-white rounded-2xl border border-[#7a7b8f]/30 hover:border-[#0b2b51] focus-within:border-[#0b2b51] hover:shadow-[0_12px_36px_rgba(11,43,81,0.08)] focus-within:shadow-[0_12px_36px_rgba(11,43,81,0.08)] transition-[border-color,box-shadow] duration-300 overflow-hidden outline-none"
                  >
                    <div className="p-6 sm:p-8 cursor-pointer select-none flex flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                        <span className="font-display text-2xl sm:text-3xl text-[#7a7b8f]/60 tracking-normal flex-shrink-0 group-hover:text-[#3c4d70] group-focus-within:text-[#3c4d70] transition-colors">
                          {item.code}
                        </span>

                        <div className="flex-1 min-w-0">
                          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl uppercase tracking-normal text-[#0b2b51] leading-tight group-hover:text-[#3c4d70] group-focus-within:text-[#3c4d70] transition-colors break-words">
                            {item.name}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-end flex-shrink-0">
                        <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#7a7b8f]/30 flex items-center justify-center text-[#0b2b51] group-hover:rotate-45 group-focus-within:rotate-45 group-hover:bg-[#0b2b51] group-focus-within:bg-[#0b2b51] group-hover:text-white group-focus-within:text-white group-hover:border-[#0b2b51] group-focus-within:border-[#0b2b51] transition-[transform,background-color,color,border-color] duration-300 flex-shrink-0">
                          <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-4 border-t border-[#7a7b8f]/15 bg-[#fafbfc]/40">
                          <div className="mb-6">
                            <div className="text-xs font-bold uppercase tracking-wider text-[#3c4d70] mb-2">
                              Deskripsi Layanan
                            </div>
                            <p className="text-sm sm:text-base text-[#0b2b51]/85 leading-relaxed font-normal">
                              {item.desc || `Paket langganan resmi ${item.name} dengan aktivasi instan.`}
                            </p>
                          </div>

                          <div className="mb-6">
                            <div className="text-xs font-bold uppercase tracking-wider text-[#3c4d70] mb-3">
                              Spesifikasi &amp; Keunggulan Akun
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs sm:text-sm text-[#0b2b51]/90 font-medium">
                              {specs.map((spec) => (
                                <li key={spec} className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-[#7a7b8f]/20">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#3c4d70] flex-shrink-0"></span>
                                  <span>{spec}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {item.warranty && (
                            <div className="mb-6 p-4 rounded-xl bg-white border border-[#c5a8a1]/70 text-xs text-[#0b2b51]/85 leading-relaxed flex items-start gap-3">
                              <span className="inline-block w-2 h-2 rounded-full bg-[#807073] mt-1 flex-shrink-0"></span>
                              <div>
                                <span className="font-bold text-[#0b2b51]">Ketentuan Garansi: </span>
                                {item.warranty}
                              </div>
                            </div>
                          )}

                          <div className="pt-4 border-t border-[#7a7b8f]/15 flex items-center justify-end">
                            <WhatsAppTrigger
                              message={`Halo, Saya mau membeli ${item.name}.`}
                              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0b2b51] hover:bg-[#3c4d70] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-[0_4px_16px_rgba(11,43,81,0.15)] transition-[background-color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3c4d70] cursor-pointer"
                            >
                              <i className="fa-brands fa-whatsapp text-lg"></i>
                              <span>Pesan Sekarang via WhatsApp</span>
                            </WhatsAppTrigger>
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

        {/* Transaction Proof Teaser Callout */}
        <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#fafbfc] border border-[#7a7b8f]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-2xs">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0b2b51] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <i className="fa-solid fa-camera text-lg"></i>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#3c4d70] mb-0.5">
                Bukti Transaksi Riil
              </div>
              <h2 className="font-display text-xl sm:text-2xl uppercase tracking-normal text-[#0b2b51]">
                Lihat Bukti Transaksi &amp; Chat
              </h2>
              <p className="text-xs text-[#7a7b8f] mt-1">
                Tangkapan layar asli percakapan WhatsApp dan bukti penyerahan akun maupun lisensi.
              </p>
            </div>
          </div>

          <Link
            href="/testimoni"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#7a7b8f]/30 hover:border-[#0b2b51] text-[#0b2b51] hover:text-[#3c4d70] text-xs sm:text-sm font-bold shadow-2xs hover:shadow-xs transition-all flex-shrink-0 w-full sm:w-auto justify-center"
          >
            <span>Lihat Bukti Transaksi</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </Link>
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

          <WhatsAppTrigger
            message="Halo Admin keknyaJualan, saya ingin tanya-tanya seputar produk digital atau akun kustom"
            className="inline-flex items-center gap-2 justify-center bg-[#0b2b51] hover:bg-[#3c4d70] text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-xl transition-[background-color] duration-150 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b2b51] focus-visible:ring-offset-2 cursor-pointer"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            <span>Konsultasi WhatsApp</span>
          </WhatsAppTrigger>
        </section>
      </main>

      <footer className="w-full py-8 border-t border-[#7a7b8f]/20 mt-12 bg-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7a7b8f] font-medium">
          <div className="flex items-center gap-2">
            <span className="font-display text-base uppercase tracking-normal text-[#0b2b51]">keknyaJualan</span>
            <span>·</span>
            <Link href="/testimoni" className="hover:text-[#0b2b51] transition-colors">
              Testimoni
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
