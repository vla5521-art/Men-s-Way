# Release report — put-muzhchiny-landing v1.1.0

## Source
- Archive: `put-muzhchiny-landing-ready.zip`
- Source package version: `1.0.0`

## Result
- Archive: `put-muzhchiny-landing-v1.1.0.zip`
- Package version: `1.1.0`

## Changes
- Replaced the hero slogan with: «ВРЕМЯ СТАНОВИТЬСЯ ТЕМ МУЖЧИНОЙ, КОТОРЫМ ТЫ СПОСОБЕН БЫТЬ».
- Added a responsive countdown to `20 September 2026, 08:00 Moscow time (UTC+3)`.
- Added a voluntary-donation section with no fixed participation fee.
- Added contact cards for Russia and Kazakhstan.
- Added clickable `tel:` links for Russian contacts.
- Valeriy Imaev's phone is intentionally deferred to a future release and is not presented as a working number.
- Added placeholder widgets for Telegram, Instagram, Rutube and YouTube. They are intentionally non-clickable until real URLs are supplied in a later release.
- Added responsive styles for desktop, tablet and mobile layouts.

## Changed files
- `package.json`
- `.env.example`
- `src/data/content.ts`
- `src/components/Hero.tsx`
- `src/components/Countdown.tsx` (new)
- `src/components/Sections.tsx`
- `src/styles/global.css`
- `RELEASE_REPORT.md` (new)

## Commands
- Local development: `npm run dev`
- Production build: `npm run build`
- Production preview: `npm run preview`

## Deferred data
- Valeriy Imaev's full phone number.
- Telegram URL.
- Instagram URL.
- Rutube URL.
- YouTube URL.

The social widgets are deliberate visual placeholders in this release.

## Verification results in this environment
- `npm ci`: not available because the source archive contains no `package-lock.json`.
- `npm install --no-audit --no-fund`: blocked by the execution environment's internal npm registry (`404` for `@types/react@^19.1.9`). No dependency versions were changed.
- `npm run lint`, `npm run typecheck`, `npm run build`: could not be completed because dependencies could not be installed.
- A global `tsc -b` attempt was made, but it cannot resolve React/Vite modules without installed dependencies; the resulting errors are environment/dependency-resolution errors rather than a completed project verification.

The archive preserves the original dependency declarations. Run `npm install` (or generate and commit a lockfile, then use `npm ci`) in a normal npm environment before deployment.
