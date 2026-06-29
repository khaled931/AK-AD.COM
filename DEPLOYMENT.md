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

Optional, after FormSubmit sends a hidden endpoint following email activation:

```txt
NEXT_PUBLIC_FORMSUBMIT_ENDPOINT=https://formsubmit.co/your-hidden-endpoint
```

After changing environment variables in Vercel, redeploy the project.

## 3. Contact Form

The contact form is handled through FormSubmit and redirects users to:

```txt
/thank-you
```

The thank-you page displays a confirmation message and automatically returns the visitor to the homepage after a few seconds.

If FormSubmit keeps sending repeated activation emails, use the hidden/random endpoint that FormSubmit sends after activation and set it as:

```txt
NEXT_PUBLIC_FORMSUBMIT_ENDPOINT=https://formsubmit.co/your-hidden-endpoint
```

## 4. Persistent CMS Storage

The admin CMS, digital presence test, and fallback internal messages support Vercel KV.

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

Without Vercel KV, the site can still run, but CMS changes may only persist temporarily in server memory and can disappear after redeploys or serverless cold starts.

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
- [ ] Dark/light theme toggle keeps all text readable.
- [ ] Contact form sends email to `contact@ak-ad.com`.
- [ ] Thank-you page appears and redirects automatically.
- [ ] Digital presence test works.
- [ ] Admin login works.
- [ ] Admin CMS creates, edits, publishes, and deletes posts.
- [ ] Published posts appear on `/blog`.
- [ ] Vercel KV is configured for production CMS persistence.
- [ ] `ADMIN_PASSWORD` is strong.
- [ ] `JWT_SECRET` is long and random.
- [ ] No secrets are committed to GitHub.
- [ ] Domain is connected.
- [ ] Placeholder portfolio items are replaced when real work is available.
