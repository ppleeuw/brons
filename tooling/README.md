# Tooling

Optional scripts. None of them run during the build except `post-export.js` and `purge-css.js`. Media scripts talk to fal.ai
and need `FAL_KEY` in the environment (and credit on the account); screenshot scripts need Playwright
(`npx playwright install chromium`). Downloads and intermediates go to a temp folder (`MEDIA_TMP`, default
`<os temp>/nekaf-media`). Run everything from the project root.

## Build helpers

- `post-export.js`: sets the html `lang` attribute on the Dutch and German pages after `next build` and defers the framework
  scripts and secondary fonts (part of `npm run build:static`).
- `purge-css.js`: drops unused rules from the design-system stylesheet in `out/` (part of `npm run build:static`);
  `purge-check.js out/<page>/index.html` lists classes a page uses that the purged stylesheet no longer has.
- `serve-out.js out /nekaf 3300`: serves the exported site locally under a base path (`npm run preview`).
- `image-sizes.js`: rebuilds `content/image-sizes.json` (intrinsic width and height for every image in `public/`).
- `webp.js`: converts JPEG photos under `public/assets/` to WebP and updates the paths in `content/shared.ts`.
- `prune-public.js`: lists and removes files in `public/` that no page references.
- `og.js`: renders the social images in `public/og/` (needs the preview server on port 3300).
- `favicon.js`: renders the favicon set from the tire mark.

## Checks

- `opsweep.js`: opens every page on the preview server and reports console errors, failed requests and broken images
  (`npm run check`).
- `opshots.js`: full-page screenshots of every page.
- `seo-audit.js`: titles, descriptions, canonicals, H1 count, word counts and structured data types per page, as a CSV.

## Media (fal.ai)

- `fal.js`: helpers (queue submit and poll, upload, image edit with FLUX Kontext, image-to-video).
- `gen-nekaf.js images|videos|all [key ...]`: the automotive stills (FLUX 1.1 ultra, raw mode, 16:9 and 3:4 portraits) and the
  Veo 3.1 clips for the product, Ask Nekaf and specialty pages. Prompts live in the script; finished keys are recorded in
  `public/assets/gen/done-nekaf.json`, delete a key there to regenerate it. Veo returns 8 s 1080p clips of 5 to 20 MB;
  re-encode them with ffmpeg (`-c:v libx264 -preset slow -crf 25 -an -movflags +faststart`) before committing.
- `transcribe.js`: ElevenLabs speech-to-text with speaker labels for the demo call recordings (needs `ELEVENLABS_KEY`).

## The hero clips

The three hero clips in `public/media/` (callers at home) are unchanged. Each is a 4 s wide shot cut to a 5.8 s close-up of
the same person, 24 fps, no audio, encoded twice: 1920x1080 (`-crf 24`) and 1280x720 (`-crf 27`) for phones. When replacing a
clip, keep it 9.8 s, keep the person in the right third of the frame so the headline stays clear, and regenerate
`public/media/heroN-poster.jpg` (first frame, 1280 wide) and the inline thumbnail in `content/shared.ts` (`lqip`: first frame
at 32 px wide, blurred, base64 JPEG).
