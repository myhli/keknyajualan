# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Indonesian digital creators, developers, students, and professionals looking for verified AI and creative software subscriptions (Google AI Pro 18 Bulan, Gemini Advanced, Canva Pro) directly from a trusted seller via WhatsApp.

## Product Purpose

A fast, mobile-first live stock catalog and instant WhatsApp checkout portal for keknyaJualan digital subscriptions. It eliminates back-and-forth "ready kak?" questions by showing verified real-time stock directly on the link-in-bio page before initiating WhatsApp chat.

## Positioning

Transparent, live-synced inventory scraped directly from the seller's Telegram announcements via automated GitHub Actions MTProto jobs, with pre-filled product order messages for instant one-tap WhatsApp checkout.

## Operating Context

Mobile-first link-in-bio traffic from social media (Instagram @keknyaJualan, Telegram, TikTok). Visitors check stock on their phones in seconds, tap the available product, and are immediately routed to WhatsApp with their order pre-filled.

## Capabilities and Constraints

- Pure React Server Component (no client-side hydration waterfall, no "use client").
- Native Node.js `fs` reads `stock.json` on each request.
- Automated daily Telegram MTProto scraping via `check_stock.py` and GitHub Actions cron at 07:00 WIB.
- Dynamic WhatsApp URL formatted per product: `https://wa.me/6283144569056?text=Halo%2C%20Saya%20mau%20membeli%20<item>.%20Apakah%20stock%20tersedia%3F`.
- Strictly NO AI SLOP: avoid generic template cards, clunky oversized shapes, emojis pretending to be icons, and low-effort neobrutalist copies.

## Brand Commitments

- Brand Name: keknyaJualan
- Social Identity: @keknyaJualan
- Direct WhatsApp Contact: https://wa.me/6283144569056
- Official Products: Google AI PRO 18 Bulan, Gemini Advanced, Canva Pro

## Evidence on Hand

- `stock.json` inventory data
- `public/avatar.png` brand avatar
- GitHub repository `myhli/keknyajualan`
- Automated scraper `check_stock.py`

## Product Principles

1. Instant Clarity: Visitors know stock availability in under 2 seconds.
2. Zero Purchase Friction: One tap takes the user directly to a pre-filled WhatsApp conversation with the seller.
3. Boutique Trust: Visuals must look like a curated, high-end digital agency/kiosk, not an automated low-effort template or generic AI slop.
4. Data Integrity: Out-of-stock items are clearly marked and cannot mislead customers into ordering exhausted stock.
