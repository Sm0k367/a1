# EPIC TECH AI OS

Next.js app with Stripe-hosted checkout, purchase verification, JWT-authenticated dashboard, and Intercom integration.

## Features

- Public marketing page (`/`)
- Redirect to Stripe-hosted Checkout
- Success (`/success`) & Cancel (`/cancel`) pages
- Purchase verification (`/api/verify`) issues JWT cookie
- Protected Dashboard (`/dashboard`) via `getServerSideProps`
- Stripe webhook handler (`/api/webhook`)
- Intercom boot on Dashboard
- Environment-based config

## Prerequisites

- Node.js ≥16
- npm or yarn
- A Stripe account with:
  - Secret Key
  - Publishable Key (for Buy Button or hosted Checkout)
  - Price ID
  - Webhook Signing Secret
- An Intercom App ID

## Setup

1. Clone this repo and `cd` into it:
   ```bash
   git clone <your-repo-url>
   cd epictech-ai
   npm install
   # or
   yarn
   cp .env.local.example .env.local
   STRIPE_SECRET_KEY=sk_live_...
   STRIPE_PRICE_ID=price_live_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   JWT_SECRET=<a_long_random_string>
   NEXT_PUBLIC_INTERCOM_APP_ID=v3z0dbav
   stripe login
   stripe listen --forward-to localhost:3000/api/webhook
  npm run dev
  # Visit http://localhost:3000
  npm run build
  npm run start
