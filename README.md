# IRON ANCHOR STORE

React + Vite storefront and Cloudflare Worker starter.

## Local setup
1. Install Node.js (18+).
2. Run `npm install`.
3. Run `npm run dev`.

## Build
`npm run build` creates `dist/`. Cloudflare serves only that directory as static assets.

## Cloudflare setup
1. Create a D1 database named `iron-anchor-db`.
2. Replace `REPLACE_WITH_D1_DATABASE_ID` in `wrangler.jsonc` with its real ID.
3. Create an R2 bucket named `iron-anchor-artworks`.
4. Run `npx wrangler d1 migrations apply iron-anchor-db --remote`.
5. Deploy with `npm run deploy`.

## Payments
Checkout is intentionally disabled in this starter. Implement Stripe Checkout session creation and a verified webhook before accepting real orders. Add Stripe secrets with `npx wrangler secret put STRIPE_SECRET_KEY` and `npx wrangler secret put STRIPE_WEBHOOK_SECRET`. Never commit secrets.

## Demo content
Product cards and prices in `src/App.jsx` are placeholders, not real inventory or confirmed prices.
