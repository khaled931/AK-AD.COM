# Deployment Guide — Vercel

## 1. Import the Repository

In Vercel:

1. Choose **Add New Project**.
2. Import the GitHub repository: `khaled931/AK-AD.COM`
3. Keep the framework preset as **Next.js**.
4. Deploy.

## 2. Environment Variables

Add these variables in Vercel Project Settings → Environment Variables:

```txt
NEXT_PUBLIC_SITE_URL=https://ak-ad.com
ADMIN_EMAIL=admin@ak-ad.com
ADMIN_PASSWORD=replace-with-a-strong-password
JWT_SECRET=replace-with-a-long-random-secret
```

## 3. Optional Persistent Storage

The contact form and digital presence test support Vercel KV.

To enable persistence:

1. Open the Vercel project.
2. Go to **Storage**.
3. Create or connect a **Vercel KV** database.
4. Pull/add the KV environment variables to the project.

Expected variables:

```txt
KV_REST_API_URL=
KV_REST_API_TOKEN=
KV_REST_API_READ_ONLY_TOKEN=
KV_URL=
```

Without KV, the site can still run, but submitted messages are stored only in memory and are not reliable in production serverless environments.

## 4. Domain

After deployment:

1. Go to **Settings → Domains**.
2. Add `ak-ad.com`.
3. Follow Vercel DNS instructions.
4. Add `www.ak-ad.com` if needed.
5. Set one domain as the primary domain.

## 5. Production Checklist

- [ ] Site builds successfully.
- [ ] Arabic RTL layout works.
- [ ] English language switch works.
- [ ] Contact form works.
- [ ] Digital presence test works.
- [ ] Admin login works.
- [ ] Vercel KV is configured if production lead storage is required.
- [ ] `ADMIN_PASSWORD` is strong.
- [ ] `JWT_SECRET` is long and random.
- [ ] No secrets are committed to GitHub.
- [ ] Domain is connected.
- [ ] Placeholder portfolio items are replaced when real work is available.