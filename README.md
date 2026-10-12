# Egyptian Radio — iPhone-first PWA (Maspero Catalogue v0.2)

**Live app:** https://sydgouda2022.github.io/egyptian-radio-pwa/

Standalone, installable iPhone-first radio prototype; the PWA source is separate from the previous Cloudflare radio gateway.

## Stations
- Three independent direct-stream candidates: Radio 9090 (90.9 FM), Nogoum FM (100.6 FM), Nile FM (104.2 FM).
- **Maspero/ERTU catalogue: 14 stations**: Holy Quran, Radio Masr, Voice of the Arabs, General Programme, Youth & Sports, Cultural Programme, Songs, Greater Cairo, Middle East, European Programme, External Services 1/2, Educational Radio and Music Programme.
- FM tuner uses published **Cairo-area** frequencies; General Programme (AM 819) and Voice of the Arabs (AM 621) are also discoverable on the AM tuning dial. Frequencies are not a promise of local reception everywhere.
- Some channels have no confirmed cross-browser direct stream. For these, the app provides a clearly identified **Official broadcast** link to Maspero; **in-app Play is disabled**, not falsely marked as working.
- The Holy Quran Radio third-party MP3 URL is **only a candidate**; verify identity/content and sound on a real device before declaring it reliable. No Dailymotion HLS scraping or Cloudflare rebroadcasting is required.

## User features
- Classic analog-style FM and AM tuning, swipe or drag dial, next/previous station scan.
- Instant Arabic/English name, alias, and frequency search.
- Locally saved favorites and most recently **media-progressing** station; no unrequested autoplay on launch.
- English UI by default; Arabic optional; adaptive iPhone/iPad UI and light/dark display.
- Single browser audio element, compatible system Media Session controls, bounded reconnection.
- Installable standalone PWA with offline application shell (live audio always requires internet).
- External official Maspero pages may not keep playing with the screen locked; only playable direct streams use the application's audio-session logic.

## Known limits — not an approved release
- **Maspero discovery is not the same as successful audio playback.** The official pages are confirmed, but working HTTPS browser-audio sources have NOT been verified for most Maspero stations.
- Old ERTU/OnlineHorizons HLS endpoints were tried and found unreachable from the test environment; they are intentionally *not* presented as working.
- iPhone listener confirmed playback continued during a **short** locked-screen test on the earlier three-station build; the mandatory uninterrupted **10-minute** locked test has not yet passed.
- Do not assert stream success based on an HTTP response or player widget alone.
- FM and AM are simulated station-selection mechanisms; smartphones are not receiving over-the-air signals.
- The project retains all 28 initial requirements and the 131-case QA matrix.

## Deployment and updates
Static GitHub Pages from `main`, served over HTTPS. There is no build step.
Locally serve with `python -m http.server 4173` from the project root.
Upon PWA update, reload once and reopen from the Home Screen so the newest service worker controls the app.

## Testing priorities
1. Ensure existing Nogoum FM audio still works after updating the PWA.
2. Search for General Programme, Cultural Programme, Songs and Radio Masr; use Official broadcast link for unavailable in-app streams.
3. Tune FM 107.4 (General), FM 91.5 (Cultural), FM 105.8 (Songs), AM 819 (General), and AM 621 (Voice of the Arabs).
4. Add a Maspero station to Favorites and relaunch; ensure the station remains.
5. Test Quran audio candidate for **actual Maspero broadcast**, not just generic Quran audio.
6. Perform uninterrupted 10-minute screen-lock audio test on physical iPhone using a successfully playing direct stream.
