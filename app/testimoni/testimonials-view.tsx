"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { WhatsAppTrigger } from "../whatsapp-contact";

export type ScreenshotCardItem = {
  id: number;
  title: string;
  imageSrc: string | null;
  expectedFilename: string;
};

export function TestimonialsView({
  screenshots,
}: {
  screenshots: ScreenshotCardItem[];
}) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIdx(null);
      } else if (e.key === "ArrowRight") {
        setActiveIdx((prev) =>
          prev !== null ? (prev + 1) % screenshots.length : 0
        );
      } else if (e.key === "ArrowLeft") {
        setActiveIdx((prev) =>
          prev !== null
            ? (prev - 1 + screenshots.length) % screenshots.length
            : 0
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIdx, screenshots.length]);

  return (
    <div className="w-full">
      {/* Screenshot Cards Grid */}
      {screenshots.length === 0 ? (
        <div className="py-16 text-center bg-[#fafbfc] rounded-2xl border border-[#7a7b8f]/20">
          <p className="text-base font-semibold text-[#0b2b51]">Bukti transaksi sedang disiapkan</p>
          <p className="text-xs text-[#7a7b8f] mt-1">Silakan hubungi WhatsApp admin untuk informasi bukti pemesanan.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {screenshots.map((item, idx) => {
          const isUploaded = Boolean(item.imageSrc);

          return (
            <div
              key={item.id}
              tabIndex={0}
              role={isUploaded ? "button" : "region"}
              aria-label={
                isUploaded
                  ? `Buka ${item.title}`
                  : `${item.title} belum diunggah`
              }
              onClick={() => {
                if (isUploaded) setActiveIdx(idx);
              }}
              onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && isUploaded) {
                  e.preventDefault();
                  setActiveIdx(idx);
                }
              }}
              className={`group rounded-2xl border bg-white overflow-hidden transition-[border-color,box-shadow,transform] duration-200 flex flex-col justify-between ${
                isUploaded
                  ? "border-[#7a7b8f]/25 hover:border-[#0b2b51] hover:shadow-[0_12px_32px_rgba(11,43,81,0.08)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3c4d70]"
                  : "border-dashed border-[#7a7b8f]/35 bg-[#fafbfc]"
              }`}
            >
              {/* Image Frame or Placeholder Frame */}
              <div className="relative w-full aspect-[9/16] bg-[#f8fafc] flex items-center justify-center overflow-hidden">
                {isUploaded && item.imageSrc ? (
                  <>
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-[#0b2b51]/0 group-hover:bg-[#0b2b51]/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#0b2b51] text-xs font-bold shadow-md flex items-center gap-1.5 backdrop-blur-xs">
                        <svg
                          aria-hidden="true"
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0zM10 8v6m3-3H7"
                          />
                        </svg>
                        <span>Perbesar</span>
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="p-6 text-center flex flex-col items-center justify-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#0b2b51]/5 text-[#3c4d70] border border-[#7a7b8f]/20 flex items-center justify-center">
                      <svg
                        aria-hidden="true"
                        className="w-6 h-6 text-[#7a7b8f]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-xs text-[#0b2b51]">
                        Slot Screenshot
                      </div>
                      <div className="text-[11px] text-[#7a7b8f] mt-1 font-mono leading-tight">
                        public/testimoni/{item.expectedFilename}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Meta Footer */}
              <div className="p-4 border-t border-[#7a7b8f]/15 bg-white flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-xs text-[#0b2b51]">
                    {item.title}
                  </h3>
                  <div className="text-[10px] text-[#7a7b8f] mt-0.5 font-mono">
                    {isUploaded ? "Terverifikasi" : "Menunggu File"}
                  </div>
                </div>

                {isUploaded ? (
                  <span className="text-xs text-[#3c4d70] group-hover:text-[#0b2b51] font-bold">
                    Lihat ↗
                  </span>
                ) : (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#7a7b8f]/10 text-[#7a7b8f] font-mono">
                    Slot #{item.id}
                  </span>
                )}
              </div>
            </div>
          );
        })}
        </div>
      )}

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={screenshots[activeIdx]?.title || "Preview Bukti"}
          onClick={() => setActiveIdx(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0b2b51]/75 backdrop-blur-sm select-none"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full max-h-[92vh] bg-white rounded-2xl border border-[#7a7b8f]/30 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#7a7b8f]/20 flex items-center justify-between gap-4 bg-white">
              <div className="flex items-center gap-3">
                <span className="font-display text-lg sm:text-xl uppercase text-[#0b2b51]">
                  {screenshots[activeIdx]?.title}
                </span>
                <span className="text-xs text-[#7a7b8f] font-mono tabular-nums">
                  ({activeIdx + 1} dari {screenshots.length})
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIdx(
                      (activeIdx - 1 + screenshots.length) % screenshots.length
                    )
                  }
                  aria-label="Foto sebelumnya"
                  className="w-8 h-8 rounded-full border border-[#7a7b8f]/25 hover:border-[#0b2b51] text-[#0b2b51] flex items-center justify-center transition-colors cursor-pointer"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIdx((activeIdx + 1) % screenshots.length)
                  }
                  aria-label="Foto selanjutnya"
                  className="w-8 h-8 rounded-full border border-[#7a7b8f]/25 hover:border-[#0b2b51] text-[#0b2b51] flex items-center justify-center transition-colors cursor-pointer"
                >
                  ›
                </button>
                <button
                  type="button"
                  onClick={() => setActiveIdx(null)}
                  aria-label="Tutup jendela"
                  className="w-8 h-8 rounded-full border border-[#7a7b8f]/25 hover:border-[#0b2b51] hover:bg-[#fafbfc] text-[#0b2b51] flex items-center justify-center transition-colors cursor-pointer ml-1"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Image Area */}
            <div className="relative flex-1 min-h-[50vh] sm:min-h-[65vh] bg-[#f8fafc] p-2 flex items-center justify-center overflow-auto">
              {screenshots[activeIdx]?.imageSrc && (
                <div className="relative max-w-full max-h-[75vh] w-auto h-auto flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={screenshots[activeIdx].imageSrc!}
                    alt={screenshots[activeIdx].title}
                    className="max-h-[75vh] max-w-full w-auto h-auto object-contain rounded-lg shadow-sm"
                  />
                </div>
              )}
            </div>

            {/* Modal Footer with WhatsApp Trigger */}
            <div className="p-4 border-t border-[#7a7b8f]/20 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-[#7a7b8f]">
                Gunakan panah keyboard (← / →) untuk berpindah foto, atau tekan Esc untuk keluar.
              </span>

              <WhatsAppTrigger
                message="Halo Admin keknyaJualan, saya lihat bukti transaksi di web dan mau tanya ketersediaan produk"
                className="inline-flex items-center gap-1.5 bg-[#0b2b51] hover:bg-[#3c4d70] text-white font-semibold px-4 py-2 rounded-xl transition-colors cursor-pointer flex-shrink-0"
              >
                <i className="fa-brands fa-whatsapp text-sm"></i>
                <span>Tanya Admin via WhatsApp</span>
              </WhatsAppTrigger>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Consultation Banner */}
      <section className="mt-14 bg-[#fafbfc] rounded-2xl p-6 sm:p-10 border border-[#7a7b8f]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
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
    </div>
  );
}
