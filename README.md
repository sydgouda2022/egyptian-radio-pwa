# Egyptian Radio — Phase 0 (Public iPhone PWA Prototype)

**Test deployment:** https://sydgouda2022.github.io/egyptian-radio-pwa/

A standalone, installable Phase 0 feasibility prototype, not yet an approved release.

## Functions
- Adaptive iPhone-first interface, analog FM 87.5–108.0 MHz / AM 531–1602 kHz (9 kHz steps).
- Drag or keyboard the frequency dial; Scan moves to next/previous registered frequency.
- Search by English/Arabic station name, alias, or frequency; locally saved favorites.
- Three **candidate direct-audio streams**: Radio 9090 (90.9), Nogoum FM (100.6), Nile FM (104.2).
- A single HTML audio engine, Play/Pause, Media Session lock-screen actions, bounded retries, status display.
- Restore the most recently observed *media-progressing* station, **without automatic playback on startup**.
- English default, optional Arabic RTL, light/dark, offline shell (live sound requires internet).
- Settings → Audio diagnostics to start and record the mandatory real-device test.

## iPhone acceptance — NOT YET VERIFIED
1. Open in **Safari on a physical iPhone**. Share → Add to Home Screen; open the installed app.
2. Tap Play for each of the three stations; confirm sound is **audible**, not just that the UI reads Playing.
3. Start 10-minute test in Settings, lock the phone and listen **10 continuous minutes**; record dropout times.
4. Test lock-screen Play/Pause controls, Bluetooth headphones, Wi-Fi/cellular switch and recovery.
5. Completely close the installed PWA, relaunch, Play again; confirm the same station still produces sound.
6. Compare installed PWA against Safari tab playback separately. Record iPhone model, iOS version, network, date and audio observations.

**Mandatory gate:** Real audible playback on three stations + 10 minutes reliably audible in locked-screen installed PWA. If the PWA fails, the project will need a native background-audio engine. Media Session API does not itself guarantee sustained background playback.

AM currently has no fictitious stations. The historical Cloudflare gateway is a separate project and no longer proxies these direct streams. Sources should be validated on target devices and comply with provider conditions.

## Deployment
Static project with no build dependency. GitHub Pages serves the root of main over HTTPS. For local development: python -m http.server 4173, then open http://localhost:4173/.

**Version:** Phase 0, public deployment build. User Requirements and QA matrix exist separately (UR-01 through UR-28; 131 test cases).
