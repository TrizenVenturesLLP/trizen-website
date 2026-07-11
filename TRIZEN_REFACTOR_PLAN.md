# Trizen Ventures — Enterprise Pivot Refactor Plan

> **Status:** Blueprint only. No implementation has started.  
> **Generated:** July 11, 2026  
> **Business goal:** Reposition Trizen Ventures from a multi-division community/education site into a **high-ticket enterprise AI consulting firm** — structurally credible like Quantiphi / Fractal / Tredence, visually premium like Cursor / Linear / Vercel, with existing products reframed as **Proprietary Accelerators**.

---

## Phase 1 Audit (Read-Only Findings)

### 1. Tech Stack

| Layer | Current State |
|-------|---------------|
| **Framework** | React 18 + TypeScript |
| **Build** | Vite 5 (`@vitejs/plugin-react-swc`) |
| **Routing** | `react-router-dom` v6 — client-side SPA |
| **Styling** | Tailwind CSS 3 + CSS variables in `src/index.css` |
| **UI Kit** | shadcn/ui (Radix primitives, `components.json` style: `default`, base: `slate`) |
| **Animation** | Framer Motion 12 |
| **Forms** | react-hook-form + zod |
| **Data fetching** | TanStack Query wired in `App.tsx` but barely used |
| **Backend** | None. All content is static/mock. Certificate system uses IndexedDB + optional Supabase Storage |
| **Deploy** | Docker multi-stage (Node build → Nginx), `nginx.conf` with SPA fallback |
| **Origin** | Lovable scaffold (`lovable-tagger`, `/lovable-uploads/` assets) |

**Indexing note:** `.gitignore` excludes `node_modules` and `dist`, but there is **no `.cursorignore`**. Consider adding one mirroring `.gitignore` for faster, more accurate Cursor indexing.

---

### 2. Styling & Theme

**Global theme (`src/index.css`):**
- Light-mode only. `:root` tokens are white backgrounds, slate foregrounds.
- No `.dark` class variant defined despite `darkMode: ["class"]` in `tailwind.config.ts`.
- Custom brand tokens in Tailwind: `trizen-purple` (`#3D2F83`), `trizen-blue`, `trizen-light`, `trizen-gray`, `trizen-dark`.
- Font: `Segoe UI, sans-serif` — functional but not premium/AI-tool aesthetic.
- Component classes: `.navbar-link`, `.navbar-dropdown`, `.tab-button` — all light-mode, white dropdowns.

**Per-page inconsistency:**
- Home: light lavender navbar (`bg-[#f0effc]`), purple brand accents.
- Research: `#f0effc` page bg, purple/indigo palette, some glass (`backdrop-blur-sm`).
- Consulting: dark hero (`gray-900`) but **teal** CTAs — different accent from rest of site.
- Ventures: violet gradient hero — third accent family.
- Training: purple SaaS-style cards on white/gray-50.
- Certificate pages: standard shadcn light theme.

**Visual language today:** Edtech/community nonprofit meets generic consulting template. Not dark-first, not glassmorphic, not unified.

---

### 3. Routing & Architecture

```
src/main.tsx
  └── App.tsx (QueryClient, Router, Toaster — Navbar/Footer commented out)
        └── Routes (per-page layout responsibility)
```

**Active routes (25+):**

| Route | Page | Role |
|-------|------|------|
| `/` | `Index.tsx` | Home — Hero carousel + Our Wings |
| `/research`, `/research/*` | `Research.tsx`, `ResearchAreaTemplate.tsx` | Research hub + area detail |
| `/project/:projectId` | `research/components/ProjectOverview.tsx` | Project detail |
| `/consulting`, `/consulting/*` | `Consulting.tsx` | Single page, hash anchors |
| `/training`, `/training/*` | `Training.tsx` | Full LMS-style catalog (local) |
| `/ventures`, `/ventures/*` | `Ventures.tsx` | VC portfolio page |
| `/contribute` | `Contribute.tsx` | Community contribution |
| `/events` | `Events.tsx` | Public workshops/bootcamps |
| `/gallery` | `Gallery.tsx` | Photo gallery |
| `/about-us` | `AboutUs.tsx` | Team/mission |
| `/ongoing-project/:id` | `OngoingProjectDetails.tsx` | Research project detail (alt) |
| `/verify/:id` | `CertificateVerify.tsx` | Certificate verification |
| `/certificate-manager` | `CertificateManager.tsx` | Internal cert tool |
| `/certificate-test` | `CertificateTest.tsx` | Dev/test utility |
| `*` | `NotFound.tsx` | 404 |

**Dead / orphaned code:**
- `ProjectDetails.tsx` — imported in `App.tsx` but **no route**.
- `pages/ProjectOverview.tsx` — duplicate of research version, **not routed**.
- `FloatingCard.tsx` — placeholder component, commented out on home.
- Multiple route aliases point to the same component (e.g. `/training/courses`, `/consulting/services`) with no sub-view logic.

**Layout pattern:** Each page manually imports `<Navbar />` and `<Footer />`. Global shell in `App.tsx` is disabled — easy to miss on new pages.

**Data pattern:** Hardcoded arrays duplicated across files. `src/lib/researchAreas.ts` exists but `Research.tsx` defines its own inline `researchAreas`. No CMS, no content layer.

---

### 4. Component Inventory

**Layout / Shell**
- `Navbar.tsx` — sticky nav, external links (LMS, Connect, Careers), non-functional Search/Help/Login/Register
- `Footer.tsx` — secondary links (Contribute, Events, Gallery, About), newsletter subscribe

**Home**
- `HeroSection.tsx` — auto-rotating tab carousel (Research, Consulting, Training, Ventures)
- `OurWingsSection.tsx` — four division cards

**Section components (reused across pages)**
- `AboutUsSection.tsx`, `ContributeSection.tsx`, `EventsSection.tsx`, `GallerySection.tsx`
- `HexagonBackground.tsx` — decorative

**Certificate system**
- `CertificateGenerator.tsx`, `certificateStorage.ts`, `certificateUtils.ts`, `qrCodeGenerator.ts`

**UI primitives**
- Full shadcn/ui kit (~40 components in `src/components/ui/`) — many likely unused

**Research sub-tree**
- `research/ResearchAreaTemplate.tsx`, `research/components/ProjectOverview.tsx`, `ProjectRequestForm.tsx`
- Area-specific pages: `artificial-intelligence/`, `cybersecurity/` (partial)

---

### 5. B2C / SaaS Elements That Conflict With Enterprise Positioning

These patterns signal **self-serve consumer product** or **community edtech**, not high-ticket enterprise consulting:

#### Critical conflicts (remove or radically reframe)

| Element | Location | Why it conflicts |
|---------|----------|------------------|
| **Course catalog with search/filter** | `Training.tsx` | Full LMS UX: course cards, "popular" badges, learning paths, "Start Learning" — classic B2C edtech |
| **"Register Now" event CTAs** | `Training.tsx`, `Ventures.tsx`, `EventsSection.tsx` | Self-serve registration funnels, not "Request a briefing" |
| **Login / Register in navbar** | `Navbar.tsx` | Implies SaaS product accounts; enterprise sites use "Contact" / "Book a call" |
| **"My Trizen" user dropdown** | `Navbar.tsx` | Consumer account portal branding |
| **Newsletter subscribe** | `Footer.tsx` | Fine for insights, but current copy is generic community updates |
| **"Get Certified" / career advancement copy** | `Training.tsx` | Individual upskilling, not enterprise capability building |
| **FAQ for course delivery** | `Training.tsx` | LMS support content |
| **Contribute / Volunteer / Open Source** | `Contribute.tsx`, `ContributeSection.tsx` | Community/nonprofit positioning |
| **Gallery page** | `Gallery.tsx` | Event photo wall — not enterprise credibility |
| **WhatsApp project interest links** | Research pages, `ProjectRequestForm.tsx` | Informal B2C lead capture; enterprise uses structured discovery calls |
| **Certificate self-service manager** | `/certificate-manager` | Internal tool exposed publicly — should be admin-only or reframed |
| **Placeholder Search / Help icons** | `Navbar.tsx` | Broken UX signals immaturity to enterprise buyers |

#### Moderate conflicts (reframe, don't delete outright)

| Element | Location | Reframe as |
|---------|----------|------------|
| **Four "Wings" division cards** | `OurWingsSection.tsx`, `HeroSection.tsx` | Unified services narrative under one Trizen brand, not separate consumer products |
| **Research "Join a Project" / academic stats** | `Research.tsx` | Client co-innovation labs / R&D partnerships |
| **Ventures portfolio + "Submit Your Pitch"** | `Ventures.tsx` | Corporate innovation / accelerator arm (secondary to consulting) |
| **Training division** | Nav links to external LMS | "Trizen Academy" for **corporate upskilling engagements**, not public course store |
| **Events / Workshops** | `Events.tsx` | Executive roundtables, client summits, not public bootcamps |
| **Testimonials with stock photos** | `Research.tsx`, `Training.tsx`, `AboutUsSection.tsx` | Named enterprise client logos + case study quotes (with permission) |

#### Assets that undermine premium positioning

- Widespread **Unsplash stock photography** across heroes and team sections
- **Lovable-uploads** logo path — signals generated/scaffolded site
- Inconsistent accent colors: purple vs teal vs violet across pages
- Mock data with fake names ("Dr. Eliza Chen"), placeholder phone numbers (`wa.me/1234567890`)

---

## Current Architecture Summary (Honest Assessment)

**What we have:** A visually ambitious but strategically unfocused **multi-division marketing SPA** built on a solid modern stack (Vite/React/Tailwind/shadcn). It reads as four separate businesses (Research, Consulting, Training, Ventures) stapled together with a Lovable-generated scaffold. Content is 100% static mock data. There is no design system enforcement, no shared page shell, and no content architecture.

**What's working:**
- React + Vite + Tailwind is the right foundation for a fast, premium marketing site.
- shadcn/ui gives us accessible primitives to restyle for dark/glass aesthetic.
- Consulting page structure (hero → services → industries → case studies → contact) is closest to the target.
- Certificate verification system is a real differentiator — can become a **Proprietary Accelerator** story.
- Docker/Nginx deploy pipeline is production-ready.

**What's broken for the pivot:**
- Brand positioning is B2C edtech/community, not enterprise AI consulting.
- Visual identity is light, fragmented, and template-driven.
- Information architecture mirrors internal org chart ("Our Wings") instead of buyer journey (Problems → Solutions → Proof → Contact).
- ~30% of routes/pages should be deprecated, merged, or moved behind admin.
- Significant dead code and data duplication will slow refactors unless cleaned early.

---

## Visual & UI Gap Analysis

### Target aesthetic
Dark-first. High contrast. Subtle glassmorphism. Restrained motion. Monospace accents for technical credibility. Generous whitespace. Enterprise trust signals (logos, metrics, case studies) over decorative stock imagery.

Reference feel: **Cursor.sh** (dark bg, subtle borders, glow accents), **Linear** (typography hierarchy, minimal chrome), **Vercel** (clean grids, monochrome + one accent).

### Gap: Global CSS / Theme (`src/index.css` + `tailwind.config.ts`)

| Current | Target change |
|---------|---------------|
| Light `:root` tokens only | Add `.dark` as **default**; optional light mode later |
| `--background: 0 0% 100%` | `--background: 240 10% 4%` (near-black, ~`#09090b`) |
| `--foreground: 222.2 84% 4.9%` | `--foreground: 0 0% 95%` |
| `--card: 0 0% 100%` | `--card: 240 6% 10%` with subtle border |
| `--border: 214.3 31.8% 91.4%` | `--border: 240 4% 16%` (visible but quiet) |
| `--primary` dark slate | Single accent: electric violet or cyan (`#8B5CF6` or `#22D3EE`) |
| `trizen-purple #3D2F83` | Evolve to brighter accent for dark bg contrast |
| `Segoe UI` font | **Inter** or **Geist** for UI + optional **JetBrains Mono** for code/technical labels |
| No glass utilities | Add: `.glass-panel { @apply bg-white/5 backdrop-blur-xl border border-white/10 }` |
| No glow utilities | Add: `.glow-accent { box-shadow: 0 0 40px -10px hsl(var(--primary) / 0.4) }` |
| No grid background | Add subtle dot/grid pattern utility (CSS, not image) |
| `navbar-dropdown` white bg | Dark glass dropdowns |
| Per-page hex colors | Ban raw hex in pages; use semantic tokens only |

### Gap: Component patterns

| Component | Current | Target |
|-----------|---------|--------|
| **Navbar** | Light lavender, consumer login | Dark sticky glass, logo left, 5–6 enterprise nav items, single CTA: "Book a Consultation" |
| **Hero** | Rotating tab carousel, stock photos | Single authoritative headline, subhead, dual CTA (Talk to us / View work), optional subtle animated gradient mesh |
| **Cards** | White shadcn cards, shadows | Dark glass cards, 1px border, hover glow |
| **Buttons** | Mixed purple/teal/violet | One primary + one ghost; large touch targets |
| **Section backgrounds** | Alternating white/gray-50/light purple | Consistent dark with section dividers via border-top or gradient fade |
| **Typography** | Similar weight throughout | Strong h1/h2 hierarchy; muted body (`text-muted-foreground`); eyebrow labels in mono uppercase |
| **Social proof** | Text testimonials + Unsplash faces | Logo bar, metrics strip, case study cards |
| **Forms** | Toast-only submit | Enterprise lead form → CRM/webhook (HubSpot, Cal.com, etc.) |
| **Footer** | Community links + newsletter | Solutions, Industries, Company, Legal, LinkedIn — no volunteer links |

### Gap: Motion

- Current: aggressive tab auto-rotate (5s), shuffle image grids — feels marketing-flashy.
- Target: subtle fade/slide on scroll (Framer `whileInView`), no auto-rotating heroes, respect `prefers-reduced-motion`.

---

## Structural Roadmap

### Target sitemap (enterprise consulting)

```
/                           Home
/services                   AI Services overview
/services/[slug]            Service detail (e.g. gen-ai, ml-ops, data)
/industries                 Industry grid
/industries/[slug]          Industry detail (healthcare, finserv, etc.)
/accelerators               Proprietary Accelerators showcase
/accelerators/[slug]        Individual accelerator detail
/case-studies               Client success stories
/case-studies/[slug]        Case study detail
/insights                   Thought leadership (or external blog link)
/about                      Company, leadership, values
/careers                    → external or /careers
/contact                    Book a consultation
/verify/[id]                Certificate verification (keep, restyle)
```

### Pages to deprecate or merge

| Current | Action |
|---------|--------|
| `/training` (+ sub-routes) | Deprecate public catalog → redirect to `/services` or external corporate academy |
| `/contribute` | Remove from nav; archive or merge into `/about` partnerships |
| `/gallery` | Remove |
| `/events` (public bootcamp style) | Merge into `/insights` events or executive summit page |
| `/research` as academic hub | Reframe → `/services` innovation/R&D or `/accelerators` |
| `/ventures` | Demote to footer link or `/about` subsidiary section |
| `/certificate-manager`, `/certificate-test` | Move to admin route or remove from public sitemap |
| `/ongoing-project/:id`, duplicate ProjectOverview | Consolidate into one case study / accelerator template |

### New component architecture

```
src/
├── layouts/
│   └── SiteLayout.tsx          # Navbar + Footer + dark bg wrapper (single source)
├── components/
│   ├── marketing/
│   │   ├── Hero.tsx            # Enterprise hero (headline, CTAs, optional mesh bg)
│   │   ├── LogoBar.tsx         # Client/partner logos
│   │   ├── MetricsStrip.tsx    # "50+ enterprises", "98% retention", etc.
│   │   ├── ServiceCard.tsx     # Service offering card
│   │   ├── ServiceGrid.tsx     # Grid wrapper
│   │   ├── IndustryCard.tsx    # Industry vertical card
│   │   ├── IndustryGrid.tsx
│   │   ├── AcceleratorCard.tsx # Proprietary tool showcase
│   │   ├── AcceleratorShowcase.tsx
│   │   ├── CaseStudyCard.tsx
│   │   ├── CaseStudyGrid.tsx
│   │   ├── TestimonialBlock.tsx
│   │   ├── CTABanner.tsx       # "Ready to transform?" full-width CTA
│   │   ├── ContactForm.tsx     # Enterprise lead capture
│   │   └── SectionHeader.tsx   # Eyebrow + title + description pattern
│   ├── shell/
│   │   ├── Navbar.tsx          # Rewritten
│   │   └── Footer.tsx          # Rewritten
│   └── ui/                     # shadcn (restyled for dark)
├── content/                    # NEW: centralized content
│   ├── services.ts
│   ├── industries.ts
│   ├── accelerators.ts
│   ├── caseStudies.ts
│   └── site.ts                 # nav, footer, company info
├── pages/
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── ServiceDetail.tsx
│   ├── Industries.tsx
│   ├── IndustryDetail.tsx
│   ├── Accelerators.tsx
│   ├── AcceleratorDetail.tsx
│   ├── CaseStudies.tsx
│   ├── CaseStudyDetail.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── CertificateVerify.tsx   # Keep, restyle
└── lib/
    └── utils.ts
```

### Proprietary Accelerators (product → narrative)

Reframe existing capabilities as internal tools that make Trizen faster/better for clients:

| Current asset | Accelerator narrative |
|---------------|----------------------|
| Certificate verification system | **Trizen Certify** — automated credentialing for enterprise training programs |
| Research project templates | **Trizen Labs** — rapid POC framework for client innovation sprints |
| QR / PDF generation pipeline | **Trizen Deploy** — client-ready deliverable automation |
| (Future) LMS integration | **Trizen Academy Engine** — corporate upskilling at scale |

Each accelerator page: Problem → How Trizen uses it → Client outcome → CTA to discuss.

---

## Execution Phases

### Phase 0 — Foundation & cleanup (prerequisite)
1. Add `.cursorignore` mirroring `.gitignore`.
2. Enable global `SiteLayout` in `App.tsx`; remove per-page Navbar/Footer imports.
3. Delete or archive dead routes/components (`ProjectDetails`, duplicate `ProjectOverview`, `FloatingCard`).
4. Create `src/content/` and migrate one data source as proof of pattern.
5. Remove `lovable-tagger` from production builds if not needed.

### Phase 1 — Design system & dark theme
1. Rewrite `src/index.css` with dark-default CSS variables.
2. Update `tailwind.config.ts`: new accent palette, font families, glass/glow utilities.
3. Restyle core shadcn primitives (`button`, `card`, `input`, `badge`) for dark glass.
4. Build `SectionHeader`, `CTABanner` as reusable marketing primitives.
5. Replace all hardcoded hex colors (`#f0effc`, `#393283`, etc.) with semantic tokens.

### Phase 2 — Shell & navigation
1. Rewrite `Navbar.tsx`: enterprise nav (Services, Industries, Accelerators, Case Studies, About, Contact).
2. Rewrite `Footer.tsx`: enterprise footer columns, remove community links.
3. Single primary CTA: "Book a Consultation" → `/contact`.
4. Remove Login/Register/Search/Help placeholders or wire properly.
5. External links (Careers, Insights blog) as secondary footer items only.

### Phase 3 — Home page rebuild
1. Replace `HeroSection` tab carousel with static enterprise hero.
2. Add `LogoBar` + `MetricsStrip` for credibility.
3. Replace `OurWingsSection` with `ServiceGrid` (3–4 core AI services).
4. Add `AcceleratorShowcase` teaser section.
5. Add `CaseStudyGrid` (2–3 featured stories).
6. Add `CTABanner` before footer.
7. Remove stock Unsplash imagery; use gradient mesh or abstract SVG.

### Phase 4 — Core marketing pages
1. Build `/services` + `/services/[slug]` from `content/services.ts`.
2. Build `/industries` + `/industries/[slug]` from `content/industries.ts`.
3. Build `/accelerators` + `/accelerators/[slug]` — migrate certificate system as first accelerator story.
4. Build `/case-studies` + `/case-studies/[slug]` — migrate Consulting case studies as seed content.
5. Build `/about` — merge best of AboutUs + company narrative.
6. Build `/contact` — real form integration (start with Formspree/HubSpot/Cal.com embed).

### Phase 5 — Content migration & deprecation
1. Redirect `/consulting` → `/services`, `/research` → `/accelerators` or `/services`.
2. Redirect `/training` → external LMS or `/services/corporate-academ y`.
3. Remove `/contribute`, `/gallery` from routes (301 to `/about` or 404).
4. Demote `/ventures` to footer-only link.
5. Move `/certificate-manager` behind env-gated route or separate admin deploy.
6. Update `nginx.conf` / `public/_redirects` for redirects.

### Phase 6 — Polish & ship
1. SEO: per-page meta titles/descriptions (react-helmet-async or similar).
2. Performance: self-host fonts, optimize images, remove unused shadcn components.
3. Accessibility audit: contrast ratios on dark theme, focus states.
4. Analytics: add Plausible/GA4.
5. Final copy pass: enterprise tone, remove all mock/placeholder content.
6. Production deploy + smoke test all routes.

---

## Content Tone Shift (Copy Guidelines)

| From (current) | To (target) |
|----------------|-------------|
| "Empowering Future-Ready Talent" | "AI transformation for enterprise leaders" |
| "Join a Project" | "Start a co-innovation engagement" |
| "Register Now" | "Request a briefing" |
| "Start Learning" | "Explore our methodology" |
| "Our Wings" | "What we do" / "Capabilities" |
| "Contribute to our community" | "Partner with Trizen" |
| Individual career testimonials | Enterprise outcome metrics |

---

## Risk Register

| Risk | Mitigation |
|------|------------|
| Scope creep across 4 divisions | Single unified sitemap; demote Ventures/Training to secondary |
| Dark theme breaks shadcn components | Phase 1 focuses entirely on token + primitive restyle before page work |
| Mock content ships to production | Gate launch on content checklist; use `content/` TS files with clear `draft: true` flags |
| Certificate admin exposed | Env-gate or separate subdomain (`admin.trizenventures.com`) |
| SEO loss from route changes | 301 redirects in Phase 5 before DNS cutover |

---

## Recommended Starting Point

**Start with Phase 1 (Design system & dark theme)** if you want the visual pivot to feel real immediately.

**Start with Phase 0 (Foundation & cleanup)** if you want a clean codebase before any visual work — recommended for avoiding rework.

**Start with Phase 3 (Home page rebuild)** only after Phase 1 is complete, since the home page sets the tone for everything else.

---

## Next Step

**Which execution phase should we begin implementing first?**

- **Phase 0** — Foundation & cleanup (layout shell, dead code, content layer)
- **Phase 1** — Design system & dark theme (CSS tokens, typography, glass components)
- **Phase 2** — Shell & navigation (enterprise navbar/footer)
- **Phase 3** — Home page rebuild
- **Phase 4** — Core marketing pages (services, industries, accelerators, case studies, contact)

Reply with the phase number (or a combination, e.g. "Phase 0 then Phase 1") and we'll execute against this plan.
