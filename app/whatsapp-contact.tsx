"use client";

import { useEffect, useState } from "react";

type AdminInfo = {
  name: string;
  role: string;
  phone: string;
  waNumber: string;
  avatar: string;
  bgClass: string;
};

const ADMINS: AdminInfo[] = [
  {
    name: "Ilham",
    role: "Admin 1",
    phone: "+62 831-4456-9056",
    waNumber: "6283144569056",
    avatar: "IL",
    bgClass: "bg-[#0b2b51]",
  },
  {
    name: "Miftakh",
    role: "Admin 2",
    phone: "+62 822-2045-2910",
    waNumber: "6282220452910",
    avatar: "MF",
    bgClass: "bg-[#3c4d70]",
  },
];

export function WhatsAppTrigger({
  message,
  className,
  children,
}: {
  message: string;
  className: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
      >
        {children}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="wa-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b2b51]/40 backdrop-blur-xs"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-md bg-white rounded-2xl border border-[#7a7b8f]/20 shadow-[0_20px_50px_rgba(11,43,81,0.2)] p-6 sm:p-7 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="text-[11px] font-bold text-[#3c4d70] uppercase tracking-wider mb-1">
                  Pilih Kontak WhatsApp
                </div>
                <h3
                  id="wa-modal-title"
                  className="font-display text-2xl uppercase tracking-normal text-[#0b2b51]"
                >
                  Hubungi Admin
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup dialog"
                className="w-8 h-8 rounded-full border border-[#7a7b8f]/20 hover:border-[#0b2b51] hover:bg-[#fafbfc] text-[#0b2b51] flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <p className="text-xs text-[#7a7b8f] mb-5 leading-relaxed">
              Silakan pilih admin yang ingin Anda hubungi. Pesan otomatis sudah disiapkan untuk kelancaran transaksi.
            </p>

            <div className="flex flex-col gap-3 mb-5">
              {ADMINS.map((admin) => {
                const url = `https://wa.me/${admin.waNumber}?text=${encodeURIComponent(
                  message
                )}`;
                return (
                  <a
                    key={admin.name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between p-4 rounded-xl border border-[#7a7b8f]/20 hover:border-[#0b2b51] hover:bg-[#fafbfc] transition-[border-color,background-color] duration-150"
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-11 h-11 rounded-full ${admin.bgClass} text-white flex items-center justify-center font-display text-base`}
                      >
                        {admin.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-sm text-[#0b2b51] flex items-center gap-2">
                          <span>{admin.name}</span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                            {admin.role}
                          </span>
                        </div>
                        <div className="text-xs text-[#7a7b8f] mt-0.5 font-mono">
                          {admin.phone}
                        </div>
                      </div>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-[#fafbfc] border border-[#7a7b8f]/20 group-hover:border-[#0b2b51] group-hover:bg-[#0b2b51] flex items-center justify-center transition-colors">
                      <i className="fa-brands fa-whatsapp text-lg text-black group-hover:text-white transition-colors"></i>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="text-[11px] text-center text-[#7a7b8f]">
              Respons cepat setiap hari · Jam operasional aktif
            </div>
          </div>
        </div>
      )}
    </>
  );
}
