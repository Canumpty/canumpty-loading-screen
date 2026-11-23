# Canumpty Loading Screen

© 2026 Canumpty Digital Studios. All rights reserved except as expressly granted under this licence.

**Version:** 1.0.0  
**Developer:** Canumpty Digital Studios  
**Framework:** Standalone FiveM resource — no QBCore, ESX, database, inventory, or job dependency.

Canumpty Loading Screen is a dark, polished and fully configurable FiveM loading screen. It provides real FiveM loading progress, information tabs, a staff display, news, rules, support links, optional image/video backgrounds, and an optional local music playlist.

## Features

- Real progress bar driven by FiveM loading events.
- Home, News, Rules, Support, and Staff tabs.
- First-click-friendly navigation for FiveM's embedded browser.
- Editable server name, welcome text, colours, links, news, rules, and staff entries.
- Optional full-screen static image or video background.
- Optional playlist player with automatic playback attempt, play/pause, previous/next, volume control, and visible artist/title.
- Generic public defaults with no Goldcrest branding or staff details, plus an included Canumpty starter background and original music track.

## Requirements

- A current FiveM server.
- No framework or other resource dependency.
- OneSync is not required.

## Installation

1. Copy the `canumpty_loading_screen` folder into your server's `resources` directory.
2. Add this line to `server.cfg`:

   ```cfg
   ensure canumpty_loading_screen
   ```

3. Restart the resource or server.
4. Edit `html/config.js` to customise the screen.

## Configuration

All normal customisation is in `html/config.js`.

| Setting | What it changes |
| --- | --- |
| `serverName` | Large title on the left side. |
| `tagline` | Text below the title. |
| `welcomeTitle`, `welcomeText` | Home-tab heading and description. |
| `accent`, `accentSecondary` | Main interface colours. |
| `backgroundImage` | Local image path, for example `assets/background.jpg`. |
| `backgroundVideo` | Local video path, for example `assets/background.mp4`. A video takes priority over an image. |
| `supportUrl` | Support button destination. |
| `rulesUrl` | Reserved for your rules URL. |
| `staff` | Staff-card role, image and outline colour. |
| `news` | Latest-news entries and dates. |
| `rules` | Rules-tab bullet points. |
| `playlist` | Music title, artist and local file path. |

### Backgrounds, staff images and music

The package already includes a Canumpty starter background and original music track, so it works immediately after installation. Put your own files in `html/assets/` and reference them in `html/config.js` to replace them. See [`html/assets/README.md`](html/assets/README.md) for names and recommendations. Use only material you own or have permission to redistribute.

### Adding music tracks

Example playlist:

```js
playlist: [
  { title: 'City Nights', artist: 'Your Artist', file: 'assets/city-nights.mp3' },
  { title: 'Second Track', artist: 'Your Artist', file: 'assets/second-track.mp3' }
]
```

The player attempts to start the first configured track automatically. Some browser/security settings may require the player to press Play; the controls remain available in that case. Previous and Next wrap around the configured list.

## Player controls

- **Home / News / Rules / Support / Staff:** select a tab with the mouse.
- **Previous / Next:** move through the configured playlist.
- **Play/Pause:** start or pause the current track.
- **Volume slider:** adjust local loading-screen music volume.
- **Loading bar:** read-only; it follows FiveM's own loading progress.

## How the screen closes

The resource uses `loadscreen_manual_shutdown 'yes'` and closes when the player-spawn event is received. If another character-selection or spawn resource manages loading-screen shutdown itself, test the interaction on your server before release.

## Licence and credit

This project is free to use and customise under the included [LICENCE](LICENSE). Keep the copyright notice, licence, and original Canumpty Digital Studios credit. You may not claim the original resource as your own or sell it.

## Support and release notes

Read [RELEASE-CHECKLIST.md](RELEASE-CHECKLIST.md) before publishing. Add your GitHub repository link and issue tracker after you create the repository.
