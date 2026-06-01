# NexCard — Digital Business Card Platform

A web application for creating, viewing, sharing, and downloading virtual business cards (vCards). Built with Next.js 16, PostgreSQL, and Prisma.

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + shadcn/ui (New York style) |
| **Database** | PostgreSQL (Neon) |
| **ORM** | Prisma + @vercel/postgres |
| **Analytics** | Vercel Web Analytics |
| **Icons** | lucide-react, Radix Icons, react-icons |
| **Package Manager** | pnpm 10 |
| **Deployment** | Vercel |

## Architecture

### Routing (App Router)

| Route | Description |
|---|---|
| `/` | Landing page — hero, testimonials, pricing plans |
| `/login` | Login form (UI only) |
| `/register` | Registration form (UI only) |
| `/profile` | Profile editor with social links |
| `/admin` | Admin panel — user management table |
| `/user/[id]` | Public card view with vCard download |
| `/user/[id]/edit` | Edit card (placeholder) |
| `POST /seed` | API route to create a card via Prisma |

### Data Flow

- **Public card pages** (`/user/[id]`) fetch data via `@vercel/postgres` raw SQL
- **Seed API** (`POST /seed`) uses Prisma ORM for writes
- **UI-only pages** (login, register, admin, profile) are static with mock data

## Database

PostgreSQL hosted on **Neon**. 6 models:

- **card** — Digital business cards with contact info, social links, images
- **contacts** — Contact form submissions
- **users** — User accounts
- **customers**, **invoices**, **revenue** — Legacy tutorial models (unused)

## Integrations

- **Vercel Analytics** — Page view tracking via root layout
- **Vercel Postgres** — Serverless PostgreSQL connection pooling
- **Prisma** — Schema management, migrations, and client generation
- **shadcn/ui** — Component library with CSS variables and Radix primitives

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Create a `.env` file with your Neon/Vercel Postgres credentials:

```env
DATABASE_URL="postgres://..."
POSTGRES_URL="postgres://..."
POSTGRES_PRISMA_URL="postgres://..."
POSTGRES_URL_NO_SSL="postgres://..."
POSTGRES_URL_NON_POOLING="postgres://..."
POSTGRES_USER="..."
POSTGRES_HOST="..."
POSTGRES_PASSWORD="..."
POSTGRES_DATABASE="..."
```

### Commands

| Command | Description |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm prisma generate` | Generate Prisma client (runs automatically on install) |

## Project Structure

```
├── app/                      # Next.js App Router
│   ├── admin/                # Admin panel
│   ├── components/           # App-specific components
│   │   ├── ui/               # Local shadcn button
│   │   └── DownloadVCardButton.tsx
│   ├── lib/                  # Utilities and data fetching
│   ├── login/                # Login page
│   ├── profile/              # Profile editor
│   ├── register/             # Registration page
│   ├── seed/                 # Seed API route
│   └── user/[id]/            # Public card view + edit
├── components/ui/            # shadcn/ui components
├── prisma/                   # Schema and migrations
└── public/                   # Static assets
```

## Deployment

Deployed on **Vercel**. Standard Next.js build — no custom `vercel.json` needed.

```bash
# Requires pnpm 10 (set via packageManager field in package.json)
pnpm build
```
