# Fatherkitchen

Website for **Siva Guru Father Kitchen** — home-style South Indian meals, tiffin and parcels in Veppampattu.

- Menu with categories and a veg-only filter (English + Tamil names)
- Order basket that sends the order straight to the kitchen on WhatsApp (pickup or delivery)
- Story, address, timings, call and directions
- Mobile-first, keyboard accessible, respects reduced motion

Built with React + TypeScript + Vite.

## Edit content

Everything editable lives in `src/config.ts`: kitchen name, **WhatsApp number**, phone, address, hours and the full menu with prices.

> Set `whatsapp` and `phoneDisplay` to the real number before going live.

## Run locally

```bash
npm install
npm run dev
```

## Deploy on Vercel

1. Go to https://vercel.com/new and import `poopraveen/Fatherkitchen`.
2. Vercel detects Vite automatically (`vercel.json` is included) — click **Deploy**.
3. Every push to `main` redeploys.

Or with the CLI: `npx vercel --prod`.
