// Favicons from the tire mark: svg, 64/180 png, and a PNG-based favicon.ico, in a brand colour.
// CLI (project root): node tooling/favicon.js            writes public/ (and app/favicon.ico) for the default brand
//                     NEXT_PUBLIC_BRAND=brons node tooling/favicon.js   previews another brand into public/
// tooling/post-export.js calls writeFavicons(dir, colour) to put another brand's icons into the export.
const fs = require('fs'); const path = require('path'); const sharp = require('sharp');
/** The mark at a given stroke: small sizes get a heavier ring and no tread gaps so the shape survives at 16 px. */
const svg = (sw, colour, gaps = true) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><circle cx="20" cy="20" r="15.4" fill="none" stroke="${colour}" stroke-width="${sw}"${gaps ? ' stroke-dasharray="6.9 1.16" transform="rotate(-6 20 20)"' : ''}/><circle cx="20" cy="20" r="9" fill="none" stroke="${colour}" stroke-width="2.2"/><circle cx="20" cy="20" r="2.6" fill="${colour}"/></svg>`);
const iconSvg = (colour) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><circle cx="20" cy="20" r="15.4" fill="none" stroke="${colour}" stroke-width="6.6" stroke-dasharray="6.9 1.16" transform="rotate(-6 20 20)"/><circle cx="20" cy="20" r="9" fill="none" stroke="${colour}" stroke-width="2"/><circle cx="20" cy="20" r="2.3" fill="${colour}"/></svg>\n`;
const png = (size, sw, colour, gaps) => sharp(svg(sw, colour, gaps), { density: 600 }).resize(size, size).png().toBuffer();

async function writeFavicons(dir, colour) {
  fs.writeFileSync(path.join(dir, 'icon.svg'), iconSvg(colour));
  fs.writeFileSync(path.join(dir, 'icon.png'), await png(64, 6.6, colour, true));
  fs.writeFileSync(path.join(dir, 'apple-icon.png'), await sharp({ create: { width: 180, height: 180, channels: 4, background: '#ffffff' } }).composite([{ input: await png(140, 6.6, colour, true), gravity: 'centre' }]).png().toBuffer());
  const p32 = await png(32, 7, colour, true), p16 = await png(16, 7.5, colour, false);
  // ICO container with two PNG entries
  const entries = [[16, p16], [32, p32]]; const hdr = Buffer.alloc(6); hdr.writeUInt16LE(0, 0); hdr.writeUInt16LE(1, 2); hdr.writeUInt16LE(entries.length, 4);
  const d = Buffer.alloc(16 * entries.length); let off = 6 + d.length;
  entries.forEach(([s, b], i) => { const o = i * 16; d.writeUInt8(s, o); d.writeUInt8(s, o + 1); d.writeUInt8(0, o + 2); d.writeUInt8(0, o + 3); d.writeUInt16LE(1, o + 4); d.writeUInt16LE(32, o + 6); d.writeUInt32LE(b.length, o + 8); d.writeUInt32LE(off, o + 12); off += b.length; });
  fs.writeFileSync(path.join(dir, 'favicon.ico'), Buffer.concat([hdr, d, ...entries.map((e) => e[1])]));
}
module.exports = { writeFavicons };

if (require.main === module) {
  const brand = require('./brands').current();
  (async () => {
    await writeFavicons('public', brand.primary);
    if (brand.key === 'nekaf') fs.copyFileSync('public/favicon.ico', 'app/favicon.ico');
    console.log('favicons ok', brand.name, brand.primary);
  })();
}
