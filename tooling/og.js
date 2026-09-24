// Social preview images (1200x630). Home: the demo player block captured from the exported site. Other pages: a card with the page title.
// Run from the project root after a build of the brand you want, with the export served locally
// (node tooling/serve-out.js out "" 3300, or with a base path): ORIGIN=http://localhost:3300 node tooling/og.js
// The default brand writes public/og; another brand (NEXT_PUBLIC_BRAND=brons) writes public/og-brons, which post-export.js
// swaps in when that brand is exported.
const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path'); const sharp = require('sharp');
const brand = require('./brands').current();
const ROOT = path.resolve(__dirname, '..'); const OUT = path.join(ROOT, brand.key === 'nekaf' ? 'public/og' : 'public/og-' + brand.key); fs.mkdirSync(OUT, { recursive: true });
const ORIGIN = process.env.ORIGIN || 'http://localhost:3300';
const fontUrl = (f) => 'data:font/woff2;base64,' + fs.readFileSync(path.join(ROOT, 'public/fonts', f)).toString('base64');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const rgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)).join(',');
const card = (title, desc, site) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:GT;src:url(${fontUrl('GT_America_Standard_Regular-s.p.1zc5t_gvwny95.woff2')}) format('woff2');font-weight:400}
@font-face{font-family:Fraunces;src:url(${fontUrl('fraunces-500-latin.woff2')}) format('woff2');font-weight:500}
html,body{margin:0;width:1200px;height:630px;background:${brand.dark};color:#fff;font-family:GT,Arial,sans-serif;-webkit-font-smoothing:antialiased}
.wrap{position:relative;box-sizing:border-box;width:1200px;height:630px;padding:60px 72px;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden}
.dots{position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.12) 1px,transparent 1px);background-size:28px 28px;opacity:.5}
.glow{position:absolute;right:-220px;bottom:-260px;width:720px;height:720px;border-radius:50%;background:radial-gradient(circle,${brand.accent} 0%,rgba(${rgb(brand.accent)},0) 62%);opacity:.45}
.logo{position:relative;display:flex;align-items:baseline;font-size:44px;font-family:Fraunces,Georgia,serif;font-weight:500;letter-spacing:-.01em;line-height:1;font-variation-settings:"opsz" 144,"SOFT" 50}
.logo svg{width:.78em;height:.78em;margin-right:.14em;transform:translateY(.06em);overflow:visible}
h1{position:relative;margin:0;font-size:${title.length > 48 ? 58 : 72}px;font-weight:400;letter-spacing:-.02em;line-height:1.05;max-width:1000px;text-wrap:balance}
p{position:relative;margin:18px 0 0;font-size:26px;line-height:1.35;color:rgba(255,255,255,.78);max-width:900px}
.sub{position:relative;font-size:22px;color:rgba(255,255,255,.6)}
</style></head><body><div class="wrap"><div class="dots"></div><div class="glow"></div>
<div class="logo"><svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="15.4" fill="none" stroke="#fff" stroke-width="6.6" stroke-dasharray="6.9 1.16" transform="rotate(-6 20 20)"/><circle cx="20" cy="20" r="9" fill="none" stroke="#fff" stroke-width="2"/><circle cx="20" cy="20" r="2.3" fill="#fff"/></svg>${brand.name}</div>
<div><h1>${esc(title)}</h1>${desc ? `<p>${esc(desc)}</p>` : ''}</div>
<div class="sub">${site}</div></div></body></html>`;
const walk = (d, out = []) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); e.isDirectory() ? walk(p, out) : out.push(p); } return out; };
(async () => {
  const b = await chromium.launch();
  // 1. home: the demo player block
  const page = await b.newPage({ viewport: { width: 1500, height: 900 }, deviceScaleFactor: 2 });
  for (const lang of ['en', 'nl', 'de']) {
    await page.goto(`${ORIGIN}/${lang === 'en' ? '' : lang + '/'}`, { waitUntil: 'load' }); await page.waitForTimeout(800);
    await page.addStyleTag({ content: `body, #demo, #demo > div { background: ${brand.dark} !important; }` });
    const el = page.locator('#demo .bg-green-800').first(); await el.scrollIntoViewIfNeeded(); await page.waitForTimeout(600);
    const shot = await el.screenshot({ type: 'png' }); const meta = await sharp(shot).metadata();
    const w = 1120, h = Math.round((meta.height / meta.width) * w); const resized = await sharp(shot).resize(w, h).png().toBuffer();
    await sharp({ create: { width: 1200, height: 630, channels: 3, background: brand.dark } }).composite([{ input: await sharp(resized).extract({ left: 0, top: 0, width: w, height: Math.min(h, 630) }).toBuffer(), left: 40, top: Math.max(0, Math.round((630 - h) / 2)) }]).png().toFile(path.join(OUT, `${lang}.png`));
    console.log('og home', lang);
  }
  // 2. every other page: a title card from the exported HTML (articles use the resources card)
  const cardPage = await b.newPage({ viewport: { width: 1200, height: 630 } });
  const files = walk(path.join(ROOT, 'out')).filter((f) => f.endsWith('index.html') && !f.includes('_next') && !/[\/]resources[\/][^\/]+[\/]index\.html$/.test(f) && !/[\/](404|_not-found)/.test(f));
  let n = 0;
  for (const f of files) {
    const rel = path.relative(path.join(ROOT, 'out'), path.dirname(f)).split(path.sep).join('/');
    const parts = rel.split('/').filter(Boolean); let lang = 'en'; if (['nl', 'de'].includes(parts[0])) lang = parts.shift();
    const key = parts.length ? parts.join('/') : 'home'; if (key === 'home') continue;
    const html = fs.readFileSync(f, 'utf8');
    const title = (html.match(/<title>([^<]*)<\/title>/) || [, ''])[1].replace(new RegExp('\\s*\\|\\s*' + brand.name + '\\s*$'), '').trim();
    const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [, ''])[1].replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"');
    const dir = path.join(OUT, lang, path.dirname(key)); fs.mkdirSync(dir, { recursive: true });
    const tmp = path.join(OUT, `_${lang}-${key.replace(/\//g, '-')}.html`); fs.writeFileSync(tmp, card(title, desc, brand.domain));
    await cardPage.goto('file:///' + tmp.split(path.sep).join('/'), { waitUntil: 'load' }); await cardPage.evaluate(() => document.fonts.ready);
    await cardPage.screenshot({ path: path.join(OUT, lang, key + '.png'), type: 'png' }); fs.unlinkSync(tmp); n++;
  }
  console.log('og cards', n, 'for', brand.name);
  await b.close();
})();
