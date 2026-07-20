# Paytm × CashKaro — Web Journey Prototype

Interactive, clickable product prototype (the "proto") for the **Paytm × CashKaro Cashback & Offers (CBO)** partnership pitch — the live "Shop → Track → Earn" walkthrough that is embedded as the demo inside the pitch deck. This is the **current** version (CBO Integration · V2), matching the demo shown in the deck.

## Live demo
Hosted on GitHub Pages: **https://hpk22.github.io/ck_paytm_proto/**

## Files
- `index.html` — the prototype (Claude Design source, `<x-dc>` document). Opens in the **business** audience view (matches the pitch); a "Tech view" toggle is available in-app.
- `support.js` — the Claude Design runtime. Loads React from the unpkg CDN at runtime, then mounts the prototype. **Needs an internet connection.**
- `_ds/` — the CashKaro design system (CSS + bundle) used by the prototype.
- `assets/` — images (logos, store cards, 3D icons).
- `.nojekyll` — **required.** Tells GitHub Pages to serve files as-is; without it, Jekyll would skip the underscore-prefixed `_ds/` folder and the page would break.

Only the prototype is deployed here. The pitch deck (`Paytm × CashKaro Pitch`) is intentionally not deployed.

## Updating
Re-export or re-copy the current `Paytm × CashKaro Web Journey.dc.html` as `index.html`, re-apply the business-view tweak (`data-props` audience default → `business`), then `git commit` + `git push`.
