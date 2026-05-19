# Tata Nikhil Dharma Sai — Portfolio (Next.js 14)

A modern, high-performance single-page portfolio focused on:

- **Enterprise Workflow Automation** (ServiceNow: CSA/CAD-aligned profile)
- **Modern Full-Stack Engineering** (React/Next.js/Node/MongoDB)

---

## 1) Prerequisites

Install these first:

- **Node.js 20 LTS** (recommended)
- **npm 10+**
- **Git**
- A **GitHub** account
- Optional: **Vercel** and/or **Netlify** account

Check tools:

```bash
node -v
npm -v
git --version
```

---

## 2) Local Setup (Development)

### Clone and install

```bash
git clone <your-repository-url>
cd Portfolio
npm install
```

### Add environment variables

Create `.env.local`:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

> The contact form uses Web3Forms (`components/ContactForm.tsx`) and requires this key at runtime.

### Start development server

```bash
npm run dev
```

Open:

- `http://localhost:3000`

---

## 3) Project Structure

```txt
app/
  globals.css
  layout.tsx
  page.tsx
components/
  Navbar.tsx
  Hero.tsx
  TechStack.tsx
  ProjectsGrid.tsx
  ProjectCard.tsx
  Timeline.tsx
  ContactForm.tsx
data/
  portfolio.ts
```

---

## 4) Update Content Quickly

Edit `data/portfolio.ts` to update:

- Profile headline and summary
- Certifications (CSA/CAD)
- Skills grouped by domain
- Projects with GitHub repo paths
- Timeline milestones
- Contact metadata

All key sections render from this single data source.

---

## 5) Quality Checks Before Hosting

Run these before every deployment:

```bash
npm run lint
npm run build
```

If both pass, production deployment is usually safe.

---

## 6) Optimized Hosting Path (Recommended: Vercel)

Vercel is the most optimized default for Next.js App Router.

### A. Push code to GitHub

```bash
git add .
git commit -m "Prepare portfolio for deployment"
git push origin <branch-name>
```

### B. Import repo in Vercel

1. Login to [https://vercel.com](https://vercel.com)
2. Click **Add New → Project**
3. Import your GitHub repository
4. Framework preset should auto-detect as **Next.js**
5. Add Environment Variable:
   - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
6. Click **Deploy**

### C. Post-deploy checks

- Open deployed URL
- Test navbar anchors
- Test project GitHub links
- Submit contact form once and verify delivery

### D. Auto deployments

Every new push to your production branch (e.g., `main` or `master`) triggers a fresh deployment automatically.

---

## 7) Netlify Hosting Path (Alternative)

Use this if your workflow prefers Netlify.

1. Login to [https://app.netlify.com](https://app.netlify.com)
2. **Add new site → Import an existing project**
3. Connect GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Add environment variable:
   - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
6. Deploy

> Netlify may auto-configure Next.js runtime behavior. Keep defaults unless you have custom infra requirements.

---

## 8) Manual VPS / Self-Host (Further Scaling Option)

For a custom server (Ubuntu + Nginx + PM2):

### A. Build app on server

```bash
npm install
npm run build
```

### B. Start with PM2

```bash
npm install -g pm2
pm2 start npm --name portfolio -- start
pm2 save
pm2 startup
```

### C. Reverse proxy with Nginx

Use Nginx to proxy domain traffic to `localhost:3000`.

Minimal server block (example):

```nginx
server {
  listen 80;
  server_name yourdomain.com www.yourdomain.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

Then enable HTTPS with Certbot.

---

## 9) Production Optimization Checklist

- Use compressed images (`webp/avif`) in `public/`
- Keep third-party scripts minimal
- Re-run `npm run build` after major UI updates
- Keep dependencies updated monthly
- Verify mobile responsiveness at `sm`, `md`, `lg` breakpoints
- Monitor Lighthouse score after each major release

---

## 10) Recommended Ongoing Workflow (Further Development)

1. Create feature branch
2. Update `data/portfolio.ts` / components
3. Run lint + build
4. Open PR
5. Merge after review
6. Auto-deploy via Vercel/Netlify
7. Smoke-test production URL

---

## 11) Common Issues & Fixes

### Contact form not sending

- Ensure `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` exists in:
  - local `.env.local`
  - hosting dashboard env vars
- Re-deploy after adding env vars

### Build fails on deployment

- Run locally:

```bash
npm run lint
npm run build
```

Fix errors locally, then push again.

### Wrong GitHub project links

- Verify `githubRepo` values in `data/portfolio.ts`
- Format must be: `owner/repo`

---

## 12) Commands Quick Reference

```bash
# local dev
npm install
npm run dev

# checks
npm run lint
npm run build

# production start (local simulation)
npm run start
```
