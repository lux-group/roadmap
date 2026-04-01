You are building a product roadmap website for Luxury Escapes (lux-group). The repo is already cloned locally at the current directory. Build the entire project from scratch.

---

## Stack
- Vite + React + React Router
- Tailwind CSS (install as a dependency, it is required)
- Decap CMS for content editing
- GitHub Pages for hosting via the gh-pages branch
- GitHub Actions for build and deploy on push to main

---

## Repo details
- GitHub org: lux-group
- Repo name: roadmap
- Vite base URL must be set to /roadmap/ in vite.config.js to match GitHub Pages subdirectory

---

## Fonts
The design uses two custom fonts. you can find them here: design-system/fonts
- "Suisse Works" - used for all large headings (42px, 64px). 
- "Suisse Int'l" - used for all body text and UI. 

---

## Design tokens (extract from Figma)
- Background white: #FFFFFF
- Beige / warm background: #f3f1ea
- Primary text / dark: #363a45
- Border colour: rgba(0,0,0,0.1)
- Card shadow: 0px 0.7px 1.4px rgba(0,0,0,0.07), 0px 1.9px 4px rgba(0,0,0,0.05), 0px 4.5px 10px rgba(0,0,0,0.05)
- Card border radius: 8px
- Navigation width: 250px (desktop sidebar, sticky)
- Section heading font size: 42px, font-weight: 450 (use 400), letter-spacing: -0.42px, line-height: 1.1
- Hero heading: 64px

---

## Layout
### Figma mcp links
- Use the following Figma mcp links: 
- Homepage: @https://www.figma.com/design/I7vITNoFvV6JDFORcuwpq2/Nicholas-Playground-%C2%B7-Accommodation?node-id=14394-4158&m=dev
- Product page: @https://www.figma.com/design/I7vITNoFvV6JDFORcuwpq2/Nicholas-Playground-%C2%B7-Accommodation?node-id=14394-3693&m=dev

## MCP layout descriptions:

### Global layout
- Desktop: sticky left sidebar navigation (250px wide, white, border-right rgba(0,0,0,0.1)), main content fills remaining width
- The sidebar has the Luxury Escapes logo + "2026 Roadmap" label at the top
- Below the logo: vertical list of nav links to each product group section (scroll-to on homepage, route links on directory)
- Nav link font: Suisse Int'l Semi Bold 12px, colour #363a45

---

## Page 1: Homepage (/)

### Section 1 - Hero banner
- Full width, 424px tall
- Background: a placeholder image (use a gradient of deep blue to teal as placeholder - the real image will be replaced later)
- Centered white card, border-radius 40px, box-shadow, padding 56px horizontal / 40px vertical
- Contains: Luxury Escapes logo (use text "LUXURY ESCAPES" in small caps as placeholder), "2026 Roadmap" heading in --font-heading 64px, and a "Watch presentation" button (pill shape, border #363a45, icon + text)

### Section 2 - CEO message
- Background: #f3f1ea
- Two column layout: left = circular photo (183px) + name "Adam Schwab" + title "Co-Founder & CEO", right = 4 paragraphs of text
- CEO copy (use exactly as written):
  Para 1: "At Luxury Escapes, we've always believed in dreaming big. What started as a curated travel platform is now evolving into something much more ambitious - a global travel ecosystem powered by intelligence, designed for growth, and built around every customer."
  Para 2: "We are entering a new chapter, one where AI, automation and personalisation are not buzzwords but building blocks. A chapter where the entire travel experience, from discovery to booking to the memories that follow, feels effortless and inspiring. Our teams are reimagining how we find customers, how we serve them, and how we earn their loyalty every day, in every market."
  Para 3: "The roadmap ahead is bold. We're scaling smarter, delivering faster, and aiming higher. Whether it's unlocking new value for our most loyal members or building secure platforms that can grow globally, every step we take is focused on creating more magical moments for our travellers."
  Para 4: "This is more than a plan. It's the future of travel, redefined. And we're just getting started."

### Section 3 - Themes for 2026
- White background, padding 64px vertical
- Section heading "Themes for 2026" in --font-heading 42px
- 3-column grid of theme cards, 2 rows (6 total)
- Each card: image placeholder (grey rectangle, rounded 8px, 211px tall) + title in 24px medium + description in 14px regular
- Themes (use these exact titles):
  1. AI as an Efficiency Driver
  2. Increase Supply & Improve Margin
  3. Loyalty & Continued Engagement
  4. Platform, AI Tools & Infrastructure for Scale
  5. AI as an International Growth Driver
  6. AI as a Growth Driver
- Theme descriptions: use a single sentence placeholder for each - "Descriptions to be updated by content owners."

### Section 4 - Team Directory
- Background: #f3f1ea
- Lists all product groups as sections
- Each product group: heading in --font-heading 42px, then a 2-column grid of team cards
- Each team card: white bg, rounded 8px, shadow, padding 20px horizontal / 12px vertical
- Card layout: circular photo placeholder (70px) + team name in 14px semi-bold + arrow-right icon on the right
- Card is clickable and routes to /product/:slug
- Product groups and their teams (use EXACTLY these names):

  GROWTH & CUSTOMER LIFECYCLE
  - Acquisition & Performance Marketing
  - Customer Lifecycle
  - Extranet (Partner Central)

  ONLINE CX
  - Engagement & Conversion
  - Trip Planner
  - LERE
  - Loyalty
  - Localisation
  - Business Traveller
  - Customer Payments
  - On-Site Search
  - Mobile App

  SUPPLY
  - Accommodation
  - Tours
  - Cruises
  - Flights
  - Experiences
  - Ancillaries
  - Commercial Ops / Extranet
  - Special Projects

  DISTRIBUTION & PARTNERSHIPS
  - Agent Hub
  - White Labels
  - Distribution APIs

  CUSTOMER SERVICE & SALES EXPERIENCE (CSX)
  - Self Service
  - Voice AI
  - Agent Experience

  COMMERCIAL PLATFORMS
  - Extranet (Partner Central)

  DATA & ANALYTICS
  - Data & Finance

  ENGINEERING EXCELLENCY & INFRASTRUCTURE
  - EngX

---

## Page 2: Directory (/directory)
- Same sidebar layout
- Lists all product groups with their sub-teams as clickable links
- Clean list layout, grouped by product group heading
- Each team name links to /product/:slug

---

## Page 3: Product page (/product/:slug)
- Same sidebar layout
- Reads content from markdown files in src/content/teams/

### Section 1 - Hero
- Team name as large heading
- Sub-heading with product group name

### Section 2 - Team members (Block/Team)
- Section heading "Team"
- 3-column grid of member cards (desktop), 2-column (tablet), 1-column (mobile)
- Each card: circular photo placeholder + member name + title
- Card: white bg, rounded 8px, shadow, 72px tall

### Section 3 - Roadmap Gantt chart
- Section heading from content
- Horizontal Gantt chart showing initiatives across months
- 9 month columns visible (Jan-Sep 2026 or similar)
- Each initiative renders as a coloured bar spanning its start to end date, positioned in the correct row
- Initiative label sits on the bar
- Month column headers at the top
- Alternating column background (white / very light grey)
- Max 6 initiatives

### Section 4 - Goals
- Section heading "Goals"
- 2-column grid of goal cards (desktop), 1-column (mobile)
- Each goal card: goal headline in semi-bold + from/to value in smaller text below
- Card: white bg, rounded 8px, shadow, 56px tall
- Max 8 goals

### Section 5 - Key Initiatives (Strategy sections)
- Up to 3 initiative blocks
- Each block: white background section with initiative heading in 24px medium + description paragraph
- Generous padding, clear visual separation between blocks

---

## Content schema (markdown frontmatter)

Each team page at src/content/teams/[slug].md should have:
```yaml
---
title: "Accommodation"
slug: "accommodation"
product_group: "Supply"
team_members:
  - name: "First Last"
    title: "Product Manager"
hero_image: ""
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Initiative title"
    start_date: "2026-01-01"
    end_date: "2026-04-30"
goals_section_title: "Goals"
goals:
  - headline: "Increase conversion by 20%"
    from_value: "Current: 3.2%"
    to_value: "Target: 3.8%"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "Initiative heading"
    description: "Initiative description paragraph."
---
```

---

## Decap CMS

Config at public/admin/config.yml:
- Backend: GitHub
- Repo: lux-group/roadmap
- Branch: main
- Media folder: public/uploads
- OAuth Client ID: OAUTH_CLIENT_ID_PLACEHOLDER  ← leave this placeholder and add a comment
- Collection name: "teams"
- Collection folder: src/content/teams
- Fields matching the frontmatter schema above exactly
- gantt_items: list widget, max 6
- goals: list widget, max 8
- key_initiatives: list widget, max 3
- status field on gantt items: select widget with options Planning, In Progress, Shipped

Admin entry point at public/admin/index.html.

---

## Sample content files

Create 3 sample markdown files with realistic placeholder content:

1. src/content/teams/accommodation.md (product_group: Supply)
2. src/content/teams/growth-customer-lifecycle.md (product_group: Growth & Customer Lifecycle)
3. src/content/teams/online-cx.md (product_group: Online CX)

Use believable initiative names, goal metrics, and team member names relevant to a luxury travel ecommerce company.

---

## GitHub Actions

File at .github/workflows/deploy.yml:
- Trigger: push to main
- Steps: checkout, setup Node 18, npm install, npm run build, deploy dist/ to gh-pages branch using peaceiris/actions-gh-pages@v3
- Set GITHUB_TOKEN permissions

---

## README

Include a README.md with:

### OAuth Setup (Required before CMS works)
1. Go to GitHub Settings > Developer Settings > OAuth Apps > New OAuth App
2. Homepage URL: your GitHub Pages URL (found in repo Settings > Pages after first deploy)
3. Authorization callback URL: https://api.netlify.com/auth/v1/callback
4. Copy the Client ID and replace OAUTH_CLIENT_ID_PLACEHOLDER in public/admin/config.yml
5. Commit and push

### Enabling GitHub Pages
1. Go to repo Settings > Pages
2. Set source branch to gh-pages
3. Your site URL will appear here - use this for the OAuth App homepage URL above

### Local development