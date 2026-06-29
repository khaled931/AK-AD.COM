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
RESEND_API_KEY=replace-with-your-resend-api-key
CONTACT_TO_EMAIL=contact@ak-ad.com
CONTACT_FROM_EMAIL=AK-AD media <onboarding@resend.dev>
```

## 3. Email Sending

The contact form sends every submitted request to:

```txt
contact@ak-ad.com
```

Email sending is handled through Resend.

Production setup:

1. Create a Resend account.
2. Create an API key.
3. Add `RESEND_API_KEY` in Vercel.
4. Keep `CONTACT_TO_EMAIL=contact@ak-ad.com`.
5. For testing, `CONTACT_FROM_EMAIL=AK-AD media <onboarding@resend.dev>` can be used.
6. For production with the real domain, verify `ak-ad.com` in Resend and then use a sender like:

```txt
CONTACT_FROM_EMAIL=AK-AD media <noreply@ak-ad.com>
```

After changing environment variables in Vercel, redeploy the project.

## 4. Optional Persistent Storage

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

## 5. Domain

After deployment:

1. Go to **Settings → Domains**.
2. Add `ak-ad.com`.
3. Follow Vercel DNS instructions.
4. Add `www.ak-ad.com` if needed.
5. Set one domain as the primary domain.

## 6. Production Checklist

- [ ] Site builds successfully.
- [ ] Arabic RTL layout works.
- [ ] English language switch works.
- [ ] Contact form sends email to `contact@ak-ad.com`.
- [ ] Digital presence test works.
- [ ] Admin login works.
- [ ] Vercel KV is configured if production lead storage is required.
- [ ] `ADMIN_PASSWORD` is strong.
- [ ] `JWT_SECRET` is long and random.
- [ ] `RESEND_API_KEY` is configured.
- [ ] No secrets are committed to GitHub.
- [ ] Domain is connected.
- [ ] Placeholder portfolio items are replaced when real work is available.