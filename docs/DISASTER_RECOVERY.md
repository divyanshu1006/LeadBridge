# Disaster Recovery & Safeguards
# LeadBridge Website

> **Version:** 1.0  
> **Date:** 2026-08-26  
> **Purpose:** Ensure the project can recover from any failure — AI errors, code corruption, accidental deletions, or service outages.

---

## 1. Golden Rules

> **Rule 1:** Never put all your eggs in one basket.  
> **Rule 2:** Every decision should be documented.  
> **Rule 3:** If something can break, have a plan for when it does.

---

## 2. Source Code Protection

### 2.1 Version Control (Git)

**Setup:**
```bash
git init
git remote add origin https://github.com/YOUR_USERNAME/leadbridge-website.git
```

**Branch Strategy:**
```
main          → Production code (protected, no direct pushes)
staging       → Testing before production
develop       → Active development
feature/*     → Individual features
hotfix/*      → Emergency fixes
```

**Commit Rules:**
- Commit after every meaningful change
- Use conventional commit messages:
  - `feat:` new feature
  - `fix:` bug fix
  - `docs:` documentation
  - `style:` formatting
  - `refactor:` code restructuring
  - `chore:` maintenance

**Protection:**
- Enable branch protection on `main`
- Require pull request reviews before merging
- Never force push to `main`

### 2.2 Backup Strategy

| What | Where | Frequency |
|------|-------|-----------|
| Source code | GitHub (remote) | Every commit |
| Source code | Local machine | Continuous |
| Documentation | In repo (`/docs`) | With code |
| Environment vars | Password manager (NOT in repo) | On change |
| Design assets | Google Drive / local backup | Weekly |

---

## 3. AI Code Recovery Plan

### 3.1 If AI Generates Bad Code

**Immediate Actions:**
1. **Don't panic** — Git has your back
2. Check what changed: `git diff`
3. If not committed: `git checkout -- .` (discard all changes)
4. If committed: `git revert HEAD` (undo last commit)
5. If multiple commits: `git log` → find the good commit → `git reset --hard <commit-hash>`

**Prevention:**
- Always review AI-generated code before committing
- Run the dev server (`pnpm dev`) and check visually
- Run `pnpm build` before pushing — catches errors
- Run `pnpm lint` to check code quality

### 3.2 If AI Deletes Important Files

1. Check git status: `git status`
2. Restore from git: `git checkout -- path/to/file`
3. If committed: `git log -- path/to/file` → find last good version → restore

### 3.3 If AI Breaks the Build

1. Check the error message in terminal
2. Run `git stash` to set aside changes
3. Verify `pnpm dev` works with clean code
4. Apply changes back: `git stash pop`
5. Fix the specific issue

### 3.4 Recovery Commands Cheat Sheet

```bash
# See what changed
git status
git diff

# Undo uncommitted changes (ALL files)
git checkout -- .

# Undo uncommitted changes (specific file)
git checkout -- src/app/page.tsx

# Undo last commit (keep changes in working directory)
git reset --soft HEAD~1

# Undo last commit (discard changes completely)
git reset --hard HEAD~1

# View commit history
git log --oneline -20

# Restore a deleted file from history
git checkout HEAD~1 -- path/to/deleted/file

# Create a safety snapshot before risky changes
git stash save "before-risky-ai-change"

# Restore from safety snapshot
git stash pop
```

---

## 4. Project File Map

### 4.1 Critical Files (NEVER delete these)

| File | Purpose | If Lost |
|------|---------|---------|
| `package.json` | Dependencies & scripts | Run `pnpm init` + re-add deps |
| `pnpm-lock.yaml` | Exact dependency versions | Run `pnpm install` (may get different versions) |
| `next.config.ts` | Next.js configuration | Recreate from docs |
| `tailwind.config.ts` | Tailwind + brand colors | Recreate from Brand Guidelines |
| `tsconfig.json` | TypeScript settings | Copy from Next.js defaults |
| `.env.local` | API keys & secrets | Retrieve from password manager |
| `src/app/layout.tsx` | Root layout (nav, footer, fonts) | Critical — always backed up in git |
| `src/lib/constants.ts` | Site-wide config values | Recreate from docs |

### 4.2 Documentation Files (The "Insurance")

| File | Purpose |
|------|---------|
| `docs/PRD.md` | What to build and why |
| `docs/BRAND_GUIDELINES.md` | How it should look (colors, fonts, tone) |
| `docs/TECHNICAL_ARCHITECTURE.md` | How it's built (stack, structure, APIs) |
| `docs/CONTENT_COPY.md` | What it says (all page copy) |
| `docs/DISASTER_RECOVERY.md` | How to recover (this file) |

> **Why this matters:** If the entire codebase is lost, these 5 docs contain everything needed to rebuild the website from scratch. They are the foundation that survives any AI error.

---

## 5. Dependency Management

### 5.1 Package Manager
- Use **pnpm** (faster, stricter, saves disk space)
- Lock file: `pnpm-lock.yaml` — commit this always

### 5.2 Core Dependencies (Record these)

```json
{
  "next": "^15.x",
  "react": "^19.x",
  "react-dom": "^19.x",
  "tailwindcss": "^4.x",
  "framer-motion": "^11.x",
  "react-hook-form": "^7.x",
  "zod": "^3.x",
  "@hookform/resolvers": "^3.x",
  "lucide-react": "^0.4x",
  "clsx": "^2.x",
  "tailwind-merge": "^2.x"
}
```

### 5.3 If `node_modules` Is Corrupted
```bash
rm -rf node_modules
rm pnpm-lock.yaml  # only if lock file is corrupted
pnpm install
```

---

## 6. Hosting Recovery (Vercel)

### 6.1 If Vercel Deploy Fails
1. Check Vercel dashboard → Deployments → View build log
2. Common fixes:
   - Build error → Fix code, push again
   - Env var missing → Add in Vercel dashboard → Redeploy
   - Timeout → Optimize build, reduce bundle size
3. Roll back: Vercel dashboard → Previous deployment → "Promote to Production"

### 6.2 If Vercel Account Issues
- Source code is on GitHub — deploy to any platform
- Alternatives: Netlify, Cloudflare Pages, Railway
- Just connect GitHub repo and deploy

### 6.3 If Domain Issues
- Domain DNS managed separately from hosting
- Keep domain registrar login credentials safe
- DNS propagation takes up to 48 hours

---

## 7. External Service Recovery

### 7.1 Service Dependency Map

```
LeadBridge Website
├── Vercel (hosting) ← if down, site is down
├── GitHub (code) ← if down, can't deploy new changes
├── Resend (email) ← if down, contact form emails don't send
├── Cal.com (calendar) ← if down, can't book calls
└── Google Analytics ← if down, lose tracking (not critical)
```

### 7.2 Fallback Plan

| Service Down | Fallback |
|-------------|----------|
| Vercel | Deploy to Netlify (takes 10 min) |
| Resend | Switch to EmailJS or Nodemailer |
| Cal.com | Embed Calendly or use a Google Form |
| Google Analytics | Use Vercel Analytics (built-in) |
| GitHub | Code exists locally; push to GitLab/Bitbucket |

---

## 8. Pre-Launch Checklist

### 8.1 Before Going Live
- [ ] All pages render correctly on mobile and desktop
- [ ] Contact form sends emails successfully
- [ ] WhatsApp button opens correct chat
- [ ] Calendar booking works
- [ ] All links work (no 404s)
- [ ] Meta tags and OG images set for all pages
- [ ] Favicon and apple-touch-icon set
- [ ] robots.txt allows indexing
- [ ] sitemap.xml generated
- [ ] HTTPS working (green lock)
- [ ] Google Analytics tracking
- [ ] Page speed < 3 seconds
- [ ] Lighthouse scores ≥ 90

### 8.2 After Going Live
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Analytics data flowing
- [ ] Test contact form from different devices
- [ ] Set up UptimeRobot monitoring
- [ ] Create Google Business Profile
- [ ] Share URL on LinkedIn and WhatsApp

---

## 9. Monthly Maintenance

| Task | Frequency |
|------|-----------|
| Check website loads correctly | Weekly |
| Review Google Analytics | Weekly |
| Update dependencies (`pnpm update`) | Monthly |
| Check for security vulnerabilities (`pnpm audit`) | Monthly |
| Backup `.env.local` to password manager | On change |
| Review and update content | Monthly |
| Check all external links still work | Monthly |
| Review Vercel usage/billing | Monthly |

---

## 10. Emergency Contacts & Credentials

> **IMPORTANT:** Store these in a password manager (e.g., Bitwarden, 1Password), NOT in this file.

| Service | What to Store |
|---------|--------------|
| GitHub | Username, password, 2FA recovery codes |
| Vercel | Account email, login method |
| Domain Registrar | Login credentials, transfer code |
| Resend | API key, account login |
| Cal.com | Account login |
| Google Analytics | Account email |
| Google Search Console | Account email |

---

> **Remember:** These docs are your safety net. As long as these 5 files exist, the entire website can be rebuilt from scratch in 1-2 days, regardless of what goes wrong with the code.
