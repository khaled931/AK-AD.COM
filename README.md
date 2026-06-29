# AK-AD media

**Digital Presence. Real Growth.**

AK-AD media is a bilingual Arabic/English marketing website for a digital marketing and social media management platform focused on Syrian small and medium businesses.

## Project Goals

- Present AK-AD media professionally.
- Explain services clearly.
- Convert visitors into leads through free audit, free consultation, WhatsApp, contact form, and digital presence test.
- Prepare the project for deployment on Vercel.
- Keep the structure easy to extend with a future admin/content system.

## Tech Stack

- **Framework:** Next.js App Router
- **Language:** TypeScript
- **Styling:** Custom CSS
- **Deployment:** Vercel
- **Optional storage:** Vercel KV
- **Admin auth:** Environment-variable password + signed HTTP-only cookie

## Pages

| Page | Route | Purpose |
|---|---|---|
| Home | `/` | Main landing page and conversion journey |
| Services | `/services` | Detailed service presentation |
| Portfolio | `/portfolio` | Placeholder portfolio examples |
| About | `/about` | Trust-building company page |
| Contact | `/contact` | Lead capture and direct contact |
| Admin Login | `/admin/login` | Admin authentication |
| Admin Dashboard | `/admin/dashboard` | Messages and digital test results |

## Main Features

- RTL Arabic-first design.
- Basic English version using the language switcher.
- Premium dark visual identity.
- Responsive mobile-first layout.
- Contact form.
- Digital presence test with scoring.
- Admin dashboard.
- SEO metadata.
- Optional Vercel KV persistence.

## Local Development

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Set at minimum:

```txt
ADMIN_EMAIL=admin@ak-ad.com
ADMIN_PASSWORD=your-strong-password
JWT_SECRET=your-long-random-secret
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production storage, add Vercel KV variables from the Vercel dashboard.

## Admin

Login page:

```txt
/admin/login
```

Dashboard:

```txt
/admin/dashboard
```

The dashboard currently supports viewing:

- Contact messages
- Digital presence test results
- Service/package counts

Full editing of services, packages, portfolio, testimonials, and site content can be added in phase two.

## Deployment

See [`DEPLOYMENT.md`](./DEPLOYMENT.md).

## Content Reference

See [`CONTENT.md`](./CONTENT.md) and [`PROJECT_BRIEF.md`](./PROJECT_BRIEF.md).

## License

Private project for AK-AD media.