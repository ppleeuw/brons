// Brand definitions. The source, the stylesheet and the committed assets use the Nekaf palette and name; another brand is
// produced at export time by tooling/post-export.js (colour and name substitution, path renames, favicons), while its social
// images are rendered ahead of time by tooling/og.js into public/og-<brand>. Select a brand with NEXT_PUBLIC_BRAND.
const NEKAF = { key: 'nekaf', name: 'Nekaf', domain: 'www.nekaf.ai', primary: '#006838', dark: '#05351d', accent: '#4faf62', palette: {} };
const BRONS = {
  key: 'brons', name: 'Brons', domain: 'www.brons.ai', primary: '#5754ff', dark: '#0a0a0b', accent: '#7370ff',
  /* every green of the design system and its shades, mapped to a blue of the same depth */
  palette: {
    '#006838': '#5754ff', // green-500: buttons, links, icons, logo
    '#05351d': '#0a0a0b', // green-800: footer, demo block, dark bands
    '#00913c': '#4845e6', // green-600
    '#4faf62': '#7370ff', // green-300: accents, waveforms, glow
    '#4aa45c': '#6461ff', // green-350: active states
    '#7ed185': '#b9b8ff', // green-200
    '#e4eee6': '#ecebff', // green-50
    '#f4fffa': '#f5f5ff', // green-100
    '#00522c': '#3f3cd6', // Cal.com brand emphasis
    '#e6f3ea': '#fff2eb', // bento mint gradient start
    '#c4e3cf': '#d7d6ff', // bento mint gradient end
  },
};
const BRANDS = { nekaf: NEKAF, brons: BRONS };
const current = () => BRANDS[process.env.NEXT_PUBLIC_BRAND || 'nekaf'] || NEKAF;
module.exports = { BRANDS, NEKAF, BRONS, current };
