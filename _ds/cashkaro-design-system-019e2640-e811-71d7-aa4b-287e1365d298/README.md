# CashKaro Design System

> India's largest cashback & coupons platform — recreated as a working design system from the official Figma DLS.

CashKaro is a Mumbai-headquartered cashback affiliate platform (part of **Pouring Pounds India Pvt. Ltd.**, also owners of **BuyKaro**, **EarnKaro** and **NotebookKaro**). Shoppers visit a brand store via the CashKaro app or website, complete a purchase at the partner (Amazon, Flipkart, Myntra, Ajio, Nykaa, MakeMyTrip, etc.), and CashKaro pays a share of the affiliate commission back as real cash that can be withdrawn to a bank account or used inside the network.

The brand voice is **retail-popular**: punchy Hindi-English ("CashKaro", "BuyKaro", "EarnKaro" — verb-stems in Devanagari grammar treated as English brand names), confident pricing typography, ₹ rupee signs everywhere, and a two-colour identity — **CashKaro Blue** for trust/structure and **CashKaro Orange** for offers/CTAs.

---

## Sources

Everything here was reconstructed from one input:

- **Figma file**: `uploads/CashKaro DLS.fig` — the official CashKaro Design Language System ("DLS") by the UX/UI team (cover credit: *Shadman*). 31 pages, 371 frames, including a complete `/Colors`, `/Typography`, `/Buttons`, `/Icons` (100 frames), `/Logos` (27 frames of partner-retailer marks), and full mobile-app surfaces — `/Headers`, `/Bottom-Nav-Bar`, `/Cards`, `/Product-Card`, `/Product-Details`, `/Store`, `/My-order-details`, `/Note-Karo`.
- **Logo**: `uploads/logo-cashkaro-*.png` — the canonical CASHKARO.com wordmark (orange + blue split).

There is **no codebase, no public website crawl, no slide deck** — only the Figma. All product copy, spacing, type and colour values come from there directly.

---

## Content fundamentals

**Voice — friendly, hindi-english, transactional.** CashKaro's copy reads like an Indian retail conversation translated to UI. Words like "Karo" (Hindi imperative for "do") are stitched onto English nouns (CashKaro = "Get Cashback", BuyKaro = "Buy it", EarnKaro = "Earn"). No formal "kindly" or "please" — direct verbs.

**Casing.** Sentence case across the board for UI strings — *"Refer and earn ₹250"*, *"No code required"*, *"Place order"*. ALL CAPS is reserved for two things: large hero wordmarks (the "EARNKARO" hero) and small exclusivity tags ("EXCLUSIVE", "HOT", "NEW"). Never for body copy.

**Numbers and currency.**
- The ₹ symbol always precedes the number with no space: `₹1295`, `₹12,102.4`, `₹1,799`.
- Discounts are double-bumped: `50%—90% off + Extra 30% Off` (em-dash for ranges, "+ Extra" for stacking).
- Slashed list-price comes alongside the discounted price: `₹2999  ~~₹3799~~`.
- "Cashback" amounts are usually green and prefixed with "Upto" or "Flat" — *Flat 8% Cashback*, *Upto ₹500 back*.

**Tone keywords.** Confident, helpful, urgency-light. Common copy phrases lifted directly from the Figma:
- "Ajiomania sale" / "(Starts 7th Feb)"
- "On orders over ₹1799"
- "No code required"
- "Refer and earn ₹250"
- "Missing cashback?"
- "Place order", "Apply", "View all stores"

**I vs you.** Always second-person ("**Your** earnings", "**Your** cart") or product-first ("**Refer** and earn"). Never first-person.

**Emoji.** Not used in product UI. The brand expresses emotion through **3D illustrations** (the `/3D-icos` page — 24 rendered emojis/objects) and bright iconography, not unicode emoji. Avoid `🎉` / `🔥` etc. in new designs.

**Hindi script.** Latinised, not Devanagari. Never write कैशकरो; always *CashKaro*.

---

## Visual foundations

**Two-colour identity.** Everything balances against:
- `--ck-blue` `#0036DA` — the trust/structure colour. Used for primary CTAs (filled rectangles, radius 8px), text links, the "K" in the wordmark, brand surfaces.
- `--ck-orange` `#FF6D1D` — the offer/excitement colour. Used for sale headlines, the "CASH" in the wordmark, "EXCLUSIVE"-style cap tags, accent strokes on coupon cards.
The pairing is high-contrast and complementary; CK rarely mixes a third hue at full saturation — the rest of the palette is muted tints (`#FFF5ED` peach for hero offer cards, `#F7F9FF` ice-blue for tinted backgrounds, `#F5F7F9` cool grey for screen backgrounds).

**Type.** A single typeface — **Metropolis** — across the whole UI, in five weights:
| Weight | Use |
|---|---|
| Regular 400 | Slashed/strike-through prices, rare body |
| Medium 500 | Default body copy (14px / 20px lh) |
| Semibold 600 | Product titles, captions, text links |
| Bold 700 | Section titles, prices, numbers |
| Extrabold 800 | H1/H2/Headers — *"Missing cashback?"* hero, sale headlines |

Metropolis is geometric, near-rectangular at heavy weights, with subtly humanist details. Letter-spacing is **negative on headings** (`-3%` on H1, `-2%` on H3) — tight stacking is part of the look. **Montserrat ExtraBold 9pt** is used inside small "EXCLUSIVE" tag pills only; **Racing Sans One** appears in race/sale banners; **Gotham Rounded** in the EarnKaro logotype.

**Layout.** Mobile-first (392px frame width is the design canvas). Inner padding is `16px`. Components live on a clean white screen with `8/12/16px` radii — never sharp 0px, never round-pill except on small CTAs and tag chips. Cards sit on white with a faint shadow (`0 2px 8px rgba(0,0,0,0.06)`); offer cards swap to the peach `#FFF5ED` background and drop their shadow.

**Cards.** Three distinct card patterns:
1. **Plain card** — white bg, 12px radius, light shadow. Product cards, list rows.
2. **Hero offer card** — peach `#FFF5ED` bg, 8px radius, no shadow, with a tail-pointed orange "EXCLUSIVE" tag bleeding off the right edge.
3. **Bordered/flat** — white bg, 1px `#E5E5E5` border, no shadow. Used for "Get help", "My earnings" service tiles.

**Borders & dividers.** Hairline `1px` in `#D9E3EC` (cool blue-grey) for default. Dashed magenta `1px dashed #9747FF` is the Figma editor convention — not used in production. Inactive states drop borders entirely and rely on opacity instead.

**Shadows.** Soft and short — designed for mobile. `rgba(0,0,0,0.06)` to `rgba(0,0,0,0.10)` blacks; the brand blue gets its own shadow `rgba(44,64,170,0.28)` on big CTAs for a subtle halo. No neumorphism, no glassmorphism — flat with depth.

**Backgrounds.** No gradients. No textures. No noise. CashKaro screens are **flat colour blocks**: white for content, `#F5F7F9` for screen, `#FFF5ED` for hero offers, full-bleed `#0036DA` blue for promotional headers ("Missing cashback?"). When an image is full-bleed it carries product photography in a soft peach studio set (the recurring `1ea0ea948881.png` headline image).

**Animation.** Minimal. The DLS only specifies loader spinners — a 24×24 conic-gradient ring in white-on-blue inside CTAs (LoaderText / OnlyLoader button variants). No bounces, no shimmer, no parallax. Expect tap-to-fade transitions (~150ms ease-out) and 8% darken on press.

**Hover / press states.** Mobile-first, so press is primary:
- Primary CTA press → background darkens to `#002fbf` (CK blue −5% L), 0.985× scale shrink.
- Secondary/outline → fill flashes to 8% blue tint.
- Cards → 95% opacity tap state, no scale.
- Toggles → snap to the brand orange when on.

**Transparency / blur.** Almost never. The only translucent surface in the DLS is sticky bottom bars sitting on white at `rgba(255,255,255,0.95)` with the page content visible faintly behind. No backdrop-filter blur effects.

**Corner radii.**
- `4px` — tag chips, small inputs.
- `8px` — primary buttons, hero offer cards, form fields.
- `12px` — content cards, product cards.
- `16px` — bottom sheets (top corners only), large container cards.
- `24px` — header pill containers (refer-and-earn pill).
- `999px` — small CTAs (Primary/Small), filter chips, "EXCLUSIVE"-style tags.

**Imagery.** Studio-bright, warm peach backgrounds (`#FFF5ED`). Cut-out products on flat colour, no shadows. Photography is incidental — the brand leans on **iconography and price typography** for visual hierarchy, not photo-heavy hero blocks. The `/3D-icos` set provides 24 stylised 3D renders (hands, gift boxes, coin stacks, badge ribbons) used for empty states and benefit grids.

**Fixed elements.** The bottom-nav bar (BNB) is fixed across all main app surfaces — 5 tabs: Home, Stores, Deals, Earnings, Profile. Header is sticky on most screens with a back-icon + logo + earnings-balance pill on the right.

**Layout rules.**
- Mobile design canvas: 392 × variable (typically 800–1200 tall scrolls).
- All content lives in a 360px-wide centred column with 16px gutters on the 392px canvas.
- 8-pt vertical rhythm with occasional 12pt jumps; no fractional spacing.

---

## Iconography

CashKaro uses a **two-tier** icon system that maps cleanly onto **Material Symbols** — the Figma icon set is named after Google's Material Symbols (`account_balance`, `arrow_back`, `shopping_bag`, `local_shipping`, `support_agent`, `manage_accounts`, `verified`, `lock`, `payments`, etc.). 100 frames in `/Icons` are direct one-to-one Material renderings at 24px.

**Approach.** All icons are flat, monoline, 2px stroke (when stroked) or solid fill, 24×24px viewport. Two tones: the active tone follows brand colour (blue or orange depending on context), inactive tones use `--fg-2` (`#5C5C5C`). The bottom-nav uses filled icons when selected, outline when not.

**This system uses Material Symbols via CDN** (`Material Symbols Outlined` font, Google) as a stand-in for the Figma sprites. This is a near-perfect match because the Figma references the same Material name registry. Custom CashKaro marks (the orange-blue "CK" lozenge; the BuyKaro "BK" mark) are PNGs in `assets/`.

**Emoji.** Never used in product UI. The CashKaro DLS replaces emoji with the `/3D-icos` set — 24 photoreal 3D renders for empty states, success screens, and benefit grids. We don't have those rendered out, so the UI kit substitutes Material Symbols with a flagged note.

**Unicode glyphs in copy.** `₹` (rupee), `~` (strike), `—` (em-dash in price ranges), `&` in feature lists, `·` in metadata rows. No arrows-in-text (`→`), no checkmarks-in-text (`✓`) — those are always icons.

**Logos.** Partner-retailer logos are PNG, 88×32 logo-mark in a 104×48 white container with 8px padding. The CashKaro orange-blue wordmark and the standalone "CK" / "BK" two-letter marks are the primary brand stamps; see `assets/logo-cashkaro.png` and `assets/logos/` for the retailer set (Amazon, Flipkart, Myntra, Ajio, Nykaa, TataCliq, Mamaearth, FirstCry, Tata 1mg, PharmEasy, WOW, mCaffeine, SBI, Axis, IDFC, Beardo, Uniqlo, Dyson, Plum, Derma Co, The Man Co, Happilo, HealthGlow — 23 partner marks total).

---

## Index

- `README.md` — this file
- `SKILL.md` — instructions for AI agents working with the brand
- `colors_and_type.css` — CSS variables + semantic classes
- `assets/` — logos and partner brand marks
  - `logo-cashkaro.png` — full wordmark (canonical, large)
  - `cashkaro-logo-full.png` — Figma export of the same mark
  - `logo-amazon.png`, `logo-flipkart.png`, `logo-ajio.png` — top retailers
  - `logos/` — 20 more partner retailer marks (myntra, nykaa, tatacliq, mamaearth, …)
  - `3d/` — 19 official 3D illustrations from the DLS `/3D-icos` page (wallets, coins, success ticks, coupons, category icons)
- `preview/` — Design System tab cards (palette, type, components, etc.)
- `ui_kits/cashkaro_app/` — interactive mobile-app recreation
  - `index.html` — clickable demo (Home → Store → Cart flow)
  - `*.jsx` — component files (`Header.jsx`, `BottomNav.jsx`, `HeroOfferCard.jsx`, `ProductCard.jsx`, `StoreScreen.jsx`, `HomeScreen.jsx`, …)

---

## Caveats & substitutions

- **Metropolis is the real brand face**, loaded from jsDelivr (it mirrors the canonical SIL-OFL release on github.com/chrismsimpson/Metropolis). Manrope is configured as a graceful fallback. No substitution needed.
- **Material Symbols stands in for the icon sprite.** The Figma icons are Material Symbols by name; we render them live via CDN. If CashKaro ships a curated subset / custom variants, drop the SVG sprite into `assets/icons/` and we'll wire it up.
- **No `/3D-icos` renders extracted.** ~~The 24 3D illustration renders in the Figma `/3D-icos` page are embedded as bitmap fills; we've left them out of `assets/` to keep the system lean. They appear as Material icon placeholders in the UI kit.~~ **Updated:** 19 of the 24 illustrations are now extracted into `assets/3d/` and wired into category tiles, the Refer & Earn strip, and the "Did You Know" card.
- **No production website / app source.** Everything is reconstructed from the Figma design source — copy, spacing and colours are accurate; interaction details (real route names, real loading sequences, real error states) are inferred.
