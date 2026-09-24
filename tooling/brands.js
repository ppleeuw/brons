// Brand definitions. The source, the stylesheet and the committed assets use the Nekaf palette and name; another brand is
// produced at export time by tooling/post-export.js (colour and name substitution, path renames, favicons), while its social
// images are rendered ahead of time by tooling/og.js into public/og-<brand>. Select a brand with NEXT_PUBLIC_BRAND.
const NEKAF = { key: 'nekaf', name: 'Nekaf', domain: 'www.nekaf.ai', primary: '#006838', dark: '#05351d', accent: '#4faf62', palette: {} };
const BRONS = {
  key: 'brons', name: 'Brons', domain: 'www.brons.ai', primary: '#0d4bb5', dark: '#071d45', accent: '#4f86e0',
  /* every green of the design system and its shades, mapped to a blue of the same depth */
  palette: {
    '#006838': '#0d4bb5', // green-500: buttons, links, icons, logo
    '#05351d': '#071d45', // green-800: footer, demo block, dark bands
    '#00913c': '#1560d4', // green-600
    '#4faf62': '#4f86e0', // green-300: accents, waveforms, glow
    '#4aa45c': '#467bd0', // green-350: active states
    '#7ed185': '#93b7f2', // green-200
    '#e4eee6': '#e6edf8', // green-50
    '#f4fffa': '#f3f7ff', // green-100
    '#00522c': '#0a3d96', // Cal.com brand emphasis
    '#e6f3ea': '#e6edf8', // bento mint gradient start
    '#c4e3cf': '#c4d5f0', // bento mint gradient end
  },
};
const BRANDS = { nekaf: NEKAF, brons: BRONS };
const current = () => BRANDS[process.env.NEXT_PUBLIC_BRAND || 'nekaf'] || NEKAF;
module.exports = { BRANDS, NEKAF, BRONS, current };
