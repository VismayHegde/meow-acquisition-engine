# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

## [1.1.0] - 2026-04-09

### Removed
- `components/ui/hero-shutter-text.tsx` — never imported after initial scaffold; only consumer of `lucide-react`

### Changed
- Enable `noUnusedLocals` and `noUnusedParameters` in `tsconfig.json` for build-time dead code enforcement

### Added
- `CHANGELOG.md` — project history in Keep a Changelog format
- `ROLLBACK.md` — documented rollback strategies for Vercel and git
- `db/` — forward-looking migration scaffolding (Supabase/PostgreSQL)
  - `db/migrations/0001_initial_schema.sql` — contacts + waitlist tables
  - `db/migrations/0002_leads_crm.sql` — leads table for acquisition funnel
  - `db/migrate.sh` — idempotent migration runner
  - `db/README.md` — migration workflow documentation

## [1.0.0] - 2026-04-07

### Added
- Comprehensive README with project documentation and deployment guide

### Changed
- Previous README replaced with full project overview

## [0.4.0] - 2026-03-05

### Added
- BergLabs.ai logo to client marquee
- Teal glow effect on logo hover

### Changed
- Logo marquee simplified to single row, right-to-left direction
- Increased logo sizes for Manipal Aerosports and Active Power (1.8×)
- Increased logo sizes for Asset Mantle and Mantle Works (1.4×); added background for Mantle Works

## [0.3.0] - 2026-02-27

### Added
- GitHub link in footer and mobile navigation

### Changed
- GitHub link updated to `merak3i`
- Logo marquee invert filter applied to remove white backgrounds

## [0.2.0] - 2026-02-25

### Added
- Vismay avatar in Authority section
- BackgroundPaths, GradientButton UI components from 21st.dev

### Changed
- Hero shutter text removed; scroll indicator repositioned to right-center
- Logo marquee fixed

## [0.1.0] - 2026-02-25

### Added
- Initial commit: Next.js 14 acquisition engine site
- Hero, Navigation, Footer, Offers, ClientMarquee, Authority, SubstackFeed sections
- `lib/data.ts` — siteConfig, clientLogos, offers, Substack feed fetcher
