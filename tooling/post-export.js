// After `next build` (static export). Run from the project root: node tooling/post-export.js
//  1. sets the html lang attribute per language folder
//  2. defers the framework JavaScript until the page has loaded: the pages are complete static HTML, so nothing visible waits
//     for hydration, and the scripts no longer compete with the stylesheet and the headline for bandwidth on phones
//  3. moves the secondary web fonts (italic, medium, mono) into a stylesheet that is applied after load, so only the
//     embedded headline font is on the critical path
const fs = require("fs"), path = require("path");
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const walk = (d, out = []) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); e.isDirectory() ? walk(p, out) : out.push(p); } return out; };
const htmlFiles = walk("out").filter((f) => f.endsWith(".html"));

// 1. language
let n = 0;
for (const lang of ["nl", "de"]) {
  for (const f of htmlFiles.filter((f) => f.startsWith(path.join("out", lang) + path.sep))) {
    const s = fs.readFileSync(f, "utf8"); const t = s.replace(/<html([^>]*)\slang="en"/, `<html$1 lang="${lang}"`);
    if (t !== s) { fs.writeFileSync(f, t); n++; }
  }
}
console.log("lang set on", n, "pages");

// 3. late fonts: pull the external @font-face rules out of the CSS chunk
const cssDir = path.join("out", "_next", "static", "chunks");
const cssFiles = fs.existsSync(cssDir) ? fs.readdirSync(cssDir).filter((f) => f.endsWith(".css")).map((f) => path.join(cssDir, f)) : [];
let late = "";
for (const f of cssFiles) {
  let css = fs.readFileSync(f, "utf8"); const faces = css.match(/@font-face\{[^}]*url\([^)]*\/fonts\/[^}]*\}/g) || [];
  if (!faces.length) continue;
  /* the font URLs in the CSS are root-absolute; under a base path (GitHub Pages project site) they need the prefix */
  for (const face of faces) { css = css.replace(face, ""); late += face.replace(/url\(\/fonts\//g, `url(${BASE}/fonts/`) + "\n"; }
  fs.writeFileSync(f, css);
}
if (late) { fs.mkdirSync(path.join("out", "fonts"), { recursive: true }); fs.writeFileSync(path.join("out", "fonts", "late.css"), late); }
console.log("late font faces", (late.match(/@font-face/g) || []).length);

// 2. deferred scripts
let d = 0;
for (const f of htmlFiles) {
  let s = fs.readFileSync(f, "utf8"); const urls = [];
  s = s.replace(/<script src="([^"]*\/_next\/static\/chunks\/[^"]+\.js)"(?![^>]*noModule)[^>]*><\/script>/g, (_, u) => { urls.push(u); return ""; });
  s = s.replace(/<link rel="preload" as="script"[^>]*>/g, "");
  const lateCss = late ? `${BASE}/fonts/late.css` : "";
  // after the load event and after the browser has painted a frame (two animation frames), plus 1.2 s: attach the framework
  // scripts and the secondary fonts stylesheet. Waiting for a painted frame keeps the scripts behind the first paint even when
  // the browser is slow to produce it; the 6 s timer is the fallback for a tab that is not visible.
  const loader = `<script>(function(){var u=${JSON.stringify(urls)},c=${JSON.stringify(lateCss)},d=0;function go(){if(d)return;d=1;if(c){var l=document.createElement("link");l.rel="stylesheet";l.href=c;document.head.appendChild(l)}u.forEach(function(x){var e=document.createElement("script");e.src=x;e.async=true;document.body.appendChild(e)})}function after(){var n=0;function f(){if(++n<2)requestAnimationFrame(f);else setTimeout(go,1200)}requestAnimationFrame(f);setTimeout(go,6000)}if(document.readyState==="complete")after();else window.addEventListener("load",after)})()</script>`;
  s = s.replace("</body>", loader + (lateCss ? `<noscript><link rel="stylesheet" href="${lateCss}"></noscript>` : "") + "</body>");
  fs.writeFileSync(f, s); d++;
}
console.log("scripts deferred on", d, "pages");

// 4. brand: for a brand other than the default, substitute the palette and the name in every text file of the export,
//    rename the paths that carry the default brand's key (ask-nekaf, nekaf-vs-...), swap in the brand's social images and
//    favicons. Every replacement keeps the same length, so the framework's length-prefixed payloads stay valid.
const { current, NEKAF } = require("./brands");
const brand = current();
if (brand.key !== NEKAF.key) {
  const textRe = /\.(html|js|css|json|xml|txt|svg|webmanifest)$/;
  let touched = 0;
  for (const f of walk("out").filter((f) => textRe.test(f))) {
    let s = fs.readFileSync(f, "utf8"); const o = s;
    for (const [from, to] of Object.entries(brand.palette)) s = s.split(from).join(to).split(from.toUpperCase()).join(to);
    s = s.split(NEKAF.name).join(brand.name).split(NEKAF.key).join(brand.key).split(NEKAF.key.toUpperCase()).join(brand.key.toUpperCase());
    if (s !== o) { fs.writeFileSync(f, s); touched++; }
  }
  const rename = (p) => { const b = path.basename(p); if (!b.includes(NEKAF.key)) return; fs.renameSync(p, path.join(path.dirname(p), b.split(NEKAF.key).join(brand.key))); };
  const dirs = []; const collect = (dir) => { for (const e of fs.readdirSync(dir, { withFileTypes: true })) if (e.isDirectory()) { const p = path.join(dir, e.name); collect(p); dirs.push(p); } };
  collect("out"); dirs.forEach(rename); // deepest first, so parents rename after their children
  walk("out").forEach(rename);
  const ogDir = path.join("out", "og-" + brand.key);
  if (fs.existsSync(ogDir)) { fs.rmSync(path.join("out", "og"), { recursive: true, force: true }); fs.renameSync(ogDir, path.join("out", "og")); }
  console.log("brand", brand.name, "applied to", touched, "files");
}
for (const e of fs.readdirSync("out")) if (/^og-/.test(e)) fs.rmSync(path.join("out", e), { recursive: true, force: true });
if (process.env.CUSTOM_DOMAIN) fs.writeFileSync(path.join("out", "CNAME"), process.env.CUSTOM_DOMAIN.trim() + "\n");
if (brand.key !== NEKAF.key) require("./favicon").writeFavicons("out", brand.primary).then(() => console.log("favicons", brand.name));
