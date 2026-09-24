// List (and with --delete remove) files in public/ that nothing in the site references. Run from the project root:
//   node tooling/prune-public.js            lists candidates, deletes nothing
//   node tooling/prune-public.js --delete   removes them
// References are collected from every source file as full paths (/assets/...) and as bare file names, so assets that are
// assembled at runtime (`${G}/spec2-garage-video.mp4`, `demo-call-${lang}.mp3`, `-720.mp4` variants) still count as used.
// Generated media (public/assets/gen), the hero clips (public/media), the demo recordings, fonts, social images and the
// site files (robots, manifest, llms.txt, .nojekyll, favicons) are never removed.
const fs = require("fs"), path = require("path");
const del = process.argv.includes("--delete");
const walk = (d, skip, out = []) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) { if (!skip.includes(e.name)) walk(p, skip, out); } else out.push(p); } return out; };
const srcs = walk(".", ["node_modules", ".next", ".git", "public", "tooling", "out"]).filter((f) => /\.(ts|tsx|json|css|mjs|md)$/.test(f));
const refs = new Set(), names = new Set();
const re = /\/(media|assets|fonts|og)[A-Za-z0-9_\-./%]*/g, nameRe = /[A-Za-z0-9_\-]+\.(webp|png|jpe?g|svg|mp4|mp3|ico|woff2)/g;
for (const f of srcs) {
  const s = fs.readFileSync(f, "utf8"); let m;
  while ((m = re.exec(s))) refs.add(decodeURIComponent(m[0]).replace(/[.,]$/, ""));
  while ((m = nameRe.exec(s))) names.add(m[0]);
}
const keepAlways = /^public[\\/](\.nojekyll|favicon\.ico|icon\.svg|icon\.png|apple-icon\.png|robots\.txt|llms\.txt|site\.webmanifest|og[\\/]|fonts[\\/]|media[\\/]|assets[\\/]gen[\\/]|assets[\\/]demo-call-)/;
let kept = 0, removed = 0, bytes = 0;
for (const f of walk("public", [])) {
  const rel = "/" + f.split(path.sep).join("/").replace(/^public\//, "");
  const keep = keepAlways.test(f) || refs.has(rel) || names.has(path.basename(f));
  if (keep) { kept++; continue; }
  bytes += fs.statSync(f).size; removed++;
  console.log(del ? "removed" : "unreferenced", rel);
  if (del) fs.unlinkSync(f);
}
if (del) { const prune = (d) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) if (e.isDirectory()) { const p = path.join(d, e.name); prune(p); if (fs.readdirSync(p).length === 0) fs.rmdirSync(p); } }; prune("public"); }
console.log("kept", kept, del ? "removed" : "unreferenced", removed, "MB", (bytes / 1048576).toFixed(1), del ? "" : "(dry run, add --delete to remove)");
