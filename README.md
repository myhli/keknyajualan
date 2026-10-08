# KeknyaJualan - Digital Store Hub

Katalog stok produk digital berbasis Next.js App Router dengan pembaruan otomatis via Telegram MTProto dan GitHub Actions.

## Fitur Utama

- **React Server Component murni**: Halaman katalog (`app/page.tsx`) membaca file `stock.json` langsung via native Node.js `fs` tanpa `'use client'`.
- **Responsive Mobile-First**: Tampilan tema dark mode dengan indikator ketersediaan stok produk dan direct link ke bot pemesanan Telegram.
- **Scraper Otomatis MTProto (`check_stock.py`)**: Mengambil pesan katalog/stok terkini dari Telegram menggunakan library `telethon`.
- **Scheduled GitHub Actions**: Workflow cron `.github/workflows/check-stock.yml` berjalan otomatis setiap pukul 07:00 WIB (00:00 UTC) untuk memperbarui `stock.json`.

## Konfigurasi GitHub Secrets

Tambahkan secret berikut di pengaturan repository GitHub (`Settings` -> `Secrets and variables` -> `Actions`):

- `TG_API_ID`: API ID dari my.telegram.org
- `TG_API_HASH`: API Hash dari my.telegram.org
- `TG_SESSION`: StringSession Telethon
- `TG_CHANNEL`: Username atau ID channel/grup Telegram sumber stok

## Menjalankan Aplikasi

Jalankan server pengembangan lokal:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) pada browser.

## Menjalankan Scraper Secara Manual

```bash
pip install -r requirements.txt
python check_stock.py
```
