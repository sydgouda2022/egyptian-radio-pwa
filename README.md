# Egyptian Radio — iPhone-first PWA (Maspero Dailymotion Experiment v0.4)

**Live app:** https://sydgouda2022.github.io/egyptian-radio-pwa/

Standalone, installable iPhone-first radio prototype; the PWA source is separate from the previous Cloudflare radio gateway.

## Stations
- Three independent direct-stream candidates: Radio 9090 (90.9 FM), Nogoum FM (100.6 FM), Nile FM (104.2 FM).
- **Maspero/ERTU catalogue: 15 stations**: Holy Quran, Radio Masr, Voice of the Arabs, General Programme, Youth & Sports, Cultural Programme, Songs, Greater Cairo, Middle East, European Programme, External Services 1/2/8, Educational Radio and Music Programme.
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


## Experimental in-app Dailymotion Maspero broadcasts (v0.4)

The Maspero catalogue now includes *official* Dailymotion live video IDs (not scraped HLS):

| Station | Dailymotion live ID |
| --- | --- |
| General Programme | `x8n6dt3` |
| Cultural Programme / Drama FM | `x8n6eci` |
| Youth & Sports | `x8n6dzo` |
| Middle East | `x8n6drt` |
| Radio Masr | `x8n6dpk` |
| Holy Quran | `x84wyku` |
| Voice of the Arabs | `x8n6dqq` |
| Songs | `x8n6dyz` |
| Greater Cairo | `x8n6ebs` |
| European Programme | `x8n6e6w` |

Selecting one of these stations and pressing **Play** opens the official Dailymotion video embed in a dedicated testing sheet. The user must tap Play within the video; this is deliberate because iOS often blocks automatic audio playback. There are two integration options: **Standard embed**, the Dailymotion historical embed (redirected by Dailymotion to its default player), and **Alternate player**, the new `geo.dailymotion.com/player/x8lr5.html?video=...` documented endpoint (using Dailymotion's example Player ID; suitability on the broadcaster's content is not guaranteed). If neither embed works, tap **Open on Dailymotion** to compare with the original source.

The PWA NEVER claims Playing merely because an iframe loads. The embedded player is third-party, cannot be accurately observed by our HTML5 audio diagnostics, and is **not expected to offer the same lock-screen reliability as direct MP3 radio**. Closing the testing sheet destroys the iframe to stop its sound. Switching from browser-audio to Dailymotion explicitly stops the old audio first. The Quran direct-audio source remains the primary playback path, with Dailymotion as an optional test.

**Required iPhone field test:** Install/update the PWA, select General Programme on FM 107.4, press Play, tap Play *inside Dailymotion*, confirm audible programme, then lock the iPhone. Repeat for Cultural FM 91.5 and Radio Masr FM 88.7. Record whether audio continues, whether the new/standard embed works, and whether it resumes after unlocking. Do not assume ten-minute acceptance has passed.

## Testing priorities
1. Ensure existing Nogoum FM audio still works after updating the PWA.
2. Search for General Programme, Cultural Programme, Songs and Radio Masr; use Official broadcast link for unavailable in-app streams.
3. Tune FM 107.4 (General), FM 91.5 (Cultural), FM 105.8 (Songs), AM 819 (General), and AM 621 (Voice of the Arabs).
4. Add a Maspero station to Favorites and relaunch; ensure the station remains.
5. Test Quran audio candidate for **actual Maspero broadcast**, not just generic Quran audio.
6. Perform uninterrupted 10-minute screen-lock audio test on physical iPhone using a successfully playing direct stream.
