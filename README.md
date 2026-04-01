# Luxury Escapes — 2026 Roadmap

Internal product roadmap site built with Vite + React + Tailwind CSS, hosted on GitHub Pages at [lux-group.github.io/roadmap](https://lux-group.github.io/roadmap).

---

## Local development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173/roadmap/`.

---

## Enabling GitHub Pages

1. Go to **repo Settings → Pages**
2. Set **Source branch** to `gh-pages`, folder `/` (root)
3. Save — your site URL will appear (e.g. `https://lux-group.github.io/roadmap`)

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys on every push to `main`.

---

## Adding content

Each team page lives at `src/content/teams/[slug].md`. Edit the markdown files directly in GitHub and push to `main` — the site redeploys automatically.

### Content schema

```yaml
---
title: "Team Name"
slug: "team-slug"
product_group: "Product Group Name"
hero_image: "/uploads/team-hero.jpg"   # optional — uses placeholder if empty
team_members:
  - name: "First Last"
    title: "Role"
gantt_section_title: "2026 Roadmap"
gantt_items:              # max 6
  - title: "Initiative title"
    start_date: "2026-01-01"
    end_date: "2026-04-30"
    status: Planning      # Planning | In Progress | Shipped
goals_section_title: "Goals"
goals:                    # max 8
  - headline: "Increase conversion by 20%"
    from_value: "Current: 3.2%"
    to_value: "Target: 3.8%"
initiatives_section_title: "Key Initiatives"
key_initiatives:          # max 3
  - heading: "Initiative heading"
    description: "Initiative description paragraph."
---
```

---

## Replacing placeholder images

All images currently use Unsplash placeholders. To replace them:

1. Export your images and place them in `public/images/`
2. Update the relevant component or frontmatter field:
   - **Homepage hero**: edit `MALDIVES_URL` in `src/components/HeroBanner.jsx`
   - **CEO photo**: edit `ADAM_PHOTO` in `src/components/CEOSection.jsx`
   - **Team hero**: set `hero_image` in the team's markdown frontmatter
   - **Team member photos**: currently placeholder circles — add `photo` field to `team_members` schema and update `ProductPage.jsx`

---

## Tech stack

| Tool | Purpose |
|------|---------|
| Vite | Build tool |
| React 18 | UI framework |
| React Router 6 | Client-side routing |
| Tailwind CSS 3 | Utility-first styling |
| gray-matter | Markdown frontmatter parsing |
| react-markdown | Markdown body rendering |
| GitHub Actions | CI/CD |
| GitHub Pages | Hosting (gh-pages branch) |
