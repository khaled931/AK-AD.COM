# AK-AD media — Admin CMS Guide

## Purpose

The admin CMS provides a protected dashboard for managing operational website content without editing code.

Current CMS areas:

| Area | Purpose |
|---|---|
| Posts | Create, edit, preview, publish, and delete blog/news posts |
| Pages | Manage page labels and internal editorial descriptions |
| Site info | Manage company name, slogan, email, WhatsApp, Facebook, and Instagram |
| Messages | Review contact messages stored through the internal fallback API when used |
| Digital tests | Review digital presence test submissions |

## Admin Routes

| Route | Purpose |
|---|---|
| `/admin/login` | Admin login |
| `/admin/dashboard` | Admin dashboard and CMS |

## Public Content Routes

| Route | Purpose |
|---|---|
| `/blog` | Public listing of published posts |
| `/blog/[id]` | Public single post page |

Only posts marked as `Published` appear publicly.

## Security

Admin APIs are protected by the existing admin session cookie.

Required production variables:

```txt
ADMIN_EMAIL=admin@ak-ad.com
ADMIN_PASSWORD=replace-with-a-strong-password
JWT_SECRET=replace-with-a-long-random-secret
```

The dashboard should not be used in production without a strong `ADMIN_PASSWORD` and a long random `JWT_SECRET`.

## Storage

CMS data is stored through the CMS storage layer in `lib/cms.ts`.

Production persistence requires Vercel KV:

```txt
KV_REST_API_URL=
KV_REST_API_TOKEN=
KV_REST_API_READ_ONLY_TOKEN=
KV_URL=
```

Without Vercel KV, CMS changes may only persist temporarily in server memory and can disappear after redeploys or serverless cold starts.

## Recommended Production Setup

1. Configure admin environment variables in Vercel.
2. Add Vercel KV storage.
3. Redeploy the project.
4. Visit `/admin/login`.
5. Create a test post.
6. Mark the post as `Published`.
7. Confirm it appears on `/blog`.

## Content Workflow

1. Open `/admin/dashboard`.
2. Go to the **Posts** tab.
3. Click **New post**.
4. Add Arabic and English title, excerpt, and content.
5. Change status from `Draft` to `Published`.
6. Click **Save CMS**.
7. Open `/blog` to verify the post.

## Notes

This CMS is intentionally lightweight and suitable for the MVP stage. Future upgrades can include:

- Rich text editor.
- Image upload.
- Slugs instead of IDs.
- SEO fields per post.
- Scheduled publishing.
- User roles.
