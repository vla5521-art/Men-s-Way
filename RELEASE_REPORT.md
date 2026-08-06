# Release report — Men-s-Way v2.0.0

## Source

- Repository: `vla5521-art/Men-s-Way`
- Branch: `main`
- Source commit: `65f8a22fc4ae18a43e2a9d202153aeca8b0f1c23`
- Source package version: `1.1.0`

## Result

- Archive: `Men-s-Way_v2.0.zip`
- Package version: `2.0.0`

## Changes

- Preserved the dark premium visual system, gold palette, approved logo, hero composition, path lines, cards and responsive principles.
- Implemented the approved v2.0 structure and copy across recognition, course idea, audience, program, results, format, community, values, donation, FAQ, registration steps, contacts and final CTA.
- Kept the approved hero slogan and added the approved hero details and CTA labels.
- Expanded all eight approved program topics, the final-month topics and both recommended films.
- Preserved the countdown and updated its completed state to «Обучение началось».
- Preserved the form payload and `VITE_FORM_ENDPOINT` integration; improved native validation, labels, focus behavior and status announcements.
- Preserved real Russian contacts without inventing missing data.
- Added configuration flags so teachers, testimonials and social networks remain hidden until verified data exists.
- Improved mobile menu behavior, keyboard support, focus visibility, reduced-motion support and 320 px layout safety.
- Added a lockfile so `npm ci` can be used consistently.
- Updated package metadata to `2.0.0`, README and SEO descriptions.

## Preserved functionality

- hero and approved logo;
- countdown to 20 September 2026;
- voluntary-donation section without a fixed amount;
- form handler, JSON contract and optional endpoint integration;
- real contact phone links;
- social-network configuration;
- navigation, anchors and mobile menu;
- local responsive images;
- SEO metadata, robots, sitemap and Vercel SPA rewrite.

## Hidden pending verified data

- teachers;
- testimonials;
- Kazakhstan contact placeholder;
- Telegram, Instagram, Rutube and YouTube links.

## Temporary limitations

- form submissions are simulated when `VITE_FORM_ENDPOINT` is not configured;
- the production domain is unknown, so `public/sitemap.xml` retains `https://example.com/`;
- no automated test suite is defined by the project.

## Verification

- `npm ci` — PASS, 70 packages installed from the generated lockfile.
- `npm run lint` — PASS.
- `npm run typecheck` — PASS.
- `npm run build` — PASS, Vite production bundle generated successfully.
- Automated tests — NOT RUN: the source project does not define a test suite or `npm test` script.
- Production preview — PASS, HTTP 200.
- Browser console and page errors — PASS, no errors across verified viewports.
- Responsive checks — PASS at 1440×900, 1024×768, 768×1024, 430×932, 390×844 and 320×720.
- Horizontal overflow — PASS, 0 px at every verified viewport.
- Images — PASS, no broken local images.
- Navigation and CTA anchors — PASS.
- Mobile menu — PASS, open/close, Escape, initial focus and focus wrapping.
- Form — PASS in the repository's endpoint-free demonstration mode.
- Countdown — PASS, no negative values.

Non-blocking environment warning: npm reports an external `http-proxy` config that will be unsupported in a future npm major release. It is not defined by this project and does not affect the build.
