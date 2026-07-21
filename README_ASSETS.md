Hero media assets and how to swap them

- `assets/hero-loop.mp4` (optional): place a muted loop MP4 here. Browsers require `muted` to autoplay.
- `assets/hero-loop.webm` (optional): WebM fallback for better compression.
- `assets/hero-poster.svg`: a poster image used when the browser can't play the video.

Lottie
- The page includes `lottie-player` via CDN and references a public example JSON. To use your own Lottie:
  - Replace the `src` attribute on the `<lottie-player>` element in `index.html` with your JSON URL or local path (e.g. `assets/my-lottie.json`).

SVG
- The hero contains an inline SVG illustration (`media-svg`) which is visible by default. You can edit or replace the markup in `index.html`.

Preview tips
- Best preview approach: install VS Code Live Server and open `index.html` with it so external scripts (Lottie CDN) load correctly.
- If you prefer `file://` preview, the SVG will display; the Lottie player and external video may be blocked by browser policies.
