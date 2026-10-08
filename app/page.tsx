import fs from "fs";
import path from "path";

type StockData = Record<string, string>;

function getStock(): StockData {
  const filePath = path.join(process.cwd(), "stock.json");
  if (!fs.existsSync(filePath)) {
    return {
      "Google One Pro 18 Bulan": "12",
      "Gemini Advanced": "Ready",
      "Canva Pro": "Habis",
    };
  }
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return {
      "Google One Pro 18 Bulan": "12",
      "Gemini Advanced": "Ready",
      "Canva Pro": "Habis",
    };
  }
}

export default function Home() {
  const stock = getStock();
  const contactUrl = "https://t.me/BerryGrowAI_Bot";

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-start px-4 py-12 selection:bg-cyan-500 selection:text-white">
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-700 border border-slate-700/80 shadow-xl flex items-center justify-center text-3xl mb-4 select-none">
          📦
        </div>
        <h1 className="text-xl font-bold tracking-tight text-white">
          Digital Store Hub
        </h1>
        <p className="text-sm text-slate-400 mt-1 mb-8 text-center">
          Katalog Stok & Link Pemesanan
        </p>

        <div className="w-full flex flex-col gap-3">
          {Object.entries(stock).map(([item, status]) => {
            const normalized = status.trim().toLowerCase();
            const isOut =
              normalized === "habis" ||
              normalized === "kosong" ||
              normalized === "0" ||
              normalized === "out of stock";

            return (
              <a
                key={item}
                href={isOut ? undefined : contactUrl}
                target={isOut ? undefined : "_blank"}
                rel={isOut ? undefined : "noopener noreferrer"}
                className={`group flex items-center justify-between p-4 rounded-xl border transition-all duration-200 ${
                  isOut
                    ? "bg-slate-900/40 border-slate-800/80 text-slate-500 cursor-not-allowed opacity-60"
                    : "bg-slate-900/90 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-850 hover:shadow-md cursor-pointer"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isOut ? "bg-rose-500" : "bg-emerald-400 shadow-sm shadow-emerald-400/50"
                    }`}
                  />
                  <span className="font-medium text-sm sm:text-base text-slate-200 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                      isOut
                        ? "bg-rose-950/60 text-rose-300 border-rose-800/50"
                        : "bg-emerald-950/60 text-emerald-300 border-emerald-800/50"
                    }`}
                  >
                    {status}
                  </span>
                  {!isOut && (
                    <svg
                      className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
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

        <div className="mt-10 pt-6 border-t border-slate-800/80 w-full text-center">
          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold transition-colors shadow-lg shadow-cyan-950/50"
          >
            <span>Hubungi Bot Pemesanan</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
          <p className="text-xs text-slate-500 mt-3">
            Pembaruan stok otomatis setiap hari
          </p>
        </div>
      </div>
    </main>
  );
}
