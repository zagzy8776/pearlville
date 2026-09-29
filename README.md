# Pearlville International School

Premium public website and school management portal for Pearlville International School, Abuja, Nigeria.

## Current status

Phase 1 is implemented: the Next.js App Router scaffold, Tailwind v4 CSS setup, Pearlville design tokens, responsive navigation, dark-mode toggle, hero section, responsive homepage shell, footer, supplied school imagery, metadata, and mobile layout are in place.

The remaining phases will add the public inner pages, Prisma schema, Auth.js roles, CMS, portals, admissions, fees, Paystack, reporting, and deployment configuration.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS v4
- Auth.js / NextAuth v5 beta and PostgreSQL + Prisma will be added in Phase 3.
- The Phase 1 install intentionally contains only the packages required to run and validate the public shell.

## Local setup

Requires Node.js 20 or newer.

```bash
npm install --no-audit --no-fund
npm run dev
```

Open `http://localhost:3000`.

If npm appears to stall while extracting packages on Windows, use:

```bash
npm cache clean --force
npm config set registry https://registry.npmjs.org/
npm install --no-audit --no-fund
```

## Environment variables

The application will use environment variables for all secrets as backend modules are added:

```env
DATABASE_URL=
AUTH_SECRET=
AUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
PAYSTACK_SECRET_KEY=
PAYSTACK_PUBLIC_KEY=
PAYSTACK_WEBHOOK_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
RESEND_API_KEY=
```

## Project structure

```text
app/                  App Router pages and global styling
components/           Reusable site UI components
public/images/        Swappable school imagery
prisma/               Database schema and seed data (Phase 3)
```

## Deploy on Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the environment variables listed above.
4. Use `npm run build` as the production build command.
