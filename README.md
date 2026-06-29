# AK-AD media

**Digital Presence. Real Growth.**

AK-AD media is a bilingual Arabic/English marketing website for a digital marketing and social media management platform focused on Syrian small and medium businesses.

## Project Goals

- Present AK-AD media professionally.
- Explain services clearly.
- Convert visitors into leads through free audit, free consultation, WhatsApp, contact form, and digital presence test.
- Provide a lightweight protected admin CMS for posts, page notes, and site information.
- Prepare the project for deployment on Vercel.

## Tech Stack

- **Framework:** Next.js App Router
- **Language:** TypeScript
- **Styling:** Custom CSS with dark/light theme support
- **Deployment:** Vercel
- **Optional storage:** Vercel KV
- **Admin auth:** Environment-variable password + signed HTTP-only cookie
- **Form delivery:** FormSubmit public form endpoint

## Pages

| Page | Route | Purpose |
|---|---|---|
| Home | `/` | Main landing page and conversion journey |
| Services | `/services` | Detailed service presentation |
| Portfolio | `/portfolio` | Placeholder portfolio examples |
| Posts | `/blog` | Published posts from the admin CMS |
| Single post | `/blog/[id]` | Public post page |
| About | `/about` | Trust-building company page |
| Contact | `/contact` | Lead capture and direct contact |
| Thank you | `/thank-you` | Post-submit confirmation and auto redirect |
| Admin Login | `/admin/login` | Admin authentication |
| Admin Dashboard | `/admin/dashboard` | Messages, test results, posts, pages, and site info |

## Main Features

- RTL Arabic-first design.
- English version using the language switcher.
- Dark and light theme toggle with readable text in both modes.
- Responsive mobile-first layout.
- Contact form with FormSubmit.
- Thank-you page with automatic redirect back to the website.
- Digital presence test with scoring.
- Protected admin dashboard.
- Lightweight CMS for posts, pages, and site information.
- Public blog generated from published CMS posts.
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

Optional FormSubmit hidden endpoint after first activation:

```txt
NEXT_PUBLIC_FORMSUBMIT_ENDPOINT=https://formsubmit.co/your-hidden-endpoint
```

For production CMS persistence, add Vercel KV variables from the Vercel dashboard.

## Admin CMS

Login page:

```txt
/admin/login
```

Dashboard:

```txt
/admin/dashboard
```

The dashboard supports:

- Viewing contact messages.
- Viewing digital presence test results.
- Creating, editing, previewing, publishing, and deleting posts.
- Managing page labels and internal descriptions.
- Managing company/site information.

See [`CMS.md`](./CMS.md) for the full CMS guide.

## Deployment

See [`DEPLOYMENT.md`](./DEPLOYMENT.md).

## Content Reference

See [`CONTENT.md`](./CONTENT.md) and [`PROJECT_BRIEF.md`](./PROJECT_BRIEF.md).

## License

Private project for AK-AD media.
