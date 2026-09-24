// Nekaf media: photoreal automotive stills (FLUX 1.1 ultra, raw) and Veo 3.1 image-to-video clips.
// Run from the project root with FAL_KEY set: node tooling/gen-nekaf.js images|videos|all [key ...]
const fs = require('fs');
const { falRun, download, upload } = require('./fal');
const sharp = require('sharp');
const P = 'public/assets'; const G = P + '/gen';
const TMP = (process.env.MEDIA_TMP || require('os').tmpdir() + '/nekaf-media'); fs.mkdirSync(TMP, { recursive: true }); fs.mkdirSync(G, { recursive: true });
const DONE = G + '/done-nekaf.json'; const done = fs.existsSync(DONE) ? JSON.parse(fs.readFileSync(DONE, 'utf8')) : {};
const mark = (k) => { done[k] = true; fs.writeFileSync(DONE, JSON.stringify(done)); };

const STYLE = 'Candid documentary photograph, shot on a 35mm lens, soft natural light, real skin texture, natural imperfect details, muted realistic colours, slight film grain, not staged, no text, no logos, no brand badges, no watermark.';
const PORTRAIT = 'Candid environmental portrait, 50mm lens, shallow depth of field, soft daylight, looking just past the camera with a small natural smile, real skin texture, muted realistic colours, slight film grain, no text, no logos, no watermark.';

/** key: [where, aspect, prompt]. where = gen (poster + optional clip), img (site photo), person (portrait). */
const STILLS = {
  'product-frontdesk': ['gen', '16:9', 'Service reception of a modern independent garage. A service advisor in her forties in a dark polo shirt hands car keys to a customer at the counter, both relaxed and smiling. Through the glass wall behind them the workshop with a car on a lift. A desk phone sits quiet in the foreground.'],
  'spec2-garage': ['gen', '16:9', 'Independent garage workshop: a mechanic in his fifties in navy overalls looks up at the underside of a hatchback raised on a lift, torch in hand. A second bay with another car, tool cabinets along the wall, daylight through the open roller door.'],
  'spec2-dealer': ['gen', '16:9', 'Service reception of a car dealership: a service advisor in a white shirt talks with a customer at a tall counter, tablet in hand. The bright showroom with new cars behind them, out of focus. Clean, calm, morning light.'],
  'spec2-bodyshop': ['gen', '16:9', 'Body and paint shop: a technician in a grey work jacket runs a hand over the freshly sanded rear wing of a car in grey primer, checking the surface. A paint booth glows behind him, masking paper on the windows.'],
  'spec2-tire': ['gen', '16:9', 'Tire and fast-fit centre: a technician lifts a new tire onto a wheel balancing machine. Stacks of tires along the wall, a car on a lift in the next bay, bright workshop light.'],
  'insights': ['gen', '16:9', 'A garage owner in his forties stands at a high table in a small workshop office, looking at a laptop that shows a simple dashboard, coffee mug next to it. Through the window behind him, the workshop with a car on a lift.'],
  'story-vannuland': ['gen', '16:9', 'Small family-run garage in a Dutch village on a sunny morning: a reception with a counter and a coffee machine, the workshop visible through an open door, a customer handing over car keys to the owner, wide shot.'],
  'story-broekema': ['gen', '16:9', 'Modern all-makes garage in the flat Dutch countryside: a wide workshop with four bays, two cars on lifts, a mechanic walking with a tablet, large windows, wide shot.'],
  'story-legacy': ['gen', '16:9', 'American independent auto repair shop in a small Colorado town: open bay doors, a pickup truck on a lift, a technician talking with a customer near the office door, mountains faint in the background, morning light, wide shot.'],
  'img-frontdesk': ['img', '16:9', 'Garage reception counter: a service advisor in his thirties takes a call on a headset while typing on a keyboard, a customer with car keys waits beside the counter, calm and everyday, workshop out of focus behind glass.'],
  'img-workshop': ['img', '16:9', 'A clean, bright modern workshop bay with a car raised on a lift, tools ordered on a wall board, a rolling tool cabinet, no people, daylight from high windows.'],
  'img-lift': ['img', '16:9', 'A mechanic in her thirties under a car on a lift, replacing a brake disc, seen from the side, work light on the wheel hub, everyday workshop.'],
  'img-tireshop': ['img', '16:9', 'A tire technician shows a customer two tire options in a tire centre, a wall of tires behind them, both looking at the tread, natural light.'],
  'img-team': ['img', '16:9', 'The team of a small garage, five people in matching dark work polos and overalls, standing and laughing together in front of the open workshop, candid, wide shot, morning light.'],
  'img-dealer': ['img', '16:9', 'Dealership service lane: a service advisor with a tablet walks around a customer car with its owner, noting a scratch, bright showroom windows behind.'],
  'img-bodyshop': ['img', '16:9', 'Inside a body shop: a painter in a white suit and mask sprays a car door in a lit paint booth, seen through the booth window, colour mist in the air.'],
  'person-bas': ['person', '3:4', 'A Dutch garage owner in his fifties with short grey hair and a weathered friendly face, wearing a dark blue work polo, standing in his workshop with a car on a lift behind him.'],
  'person-marieke': ['person', '3:4', 'A Dutch service manager in her early forties with shoulder-length brown hair, wearing a grey blouse, standing at the reception of a modern garage, workshop behind glass.'],
  'person-dave': ['person', '3:4', 'An American auto shop manager in his forties with a short beard, wearing a red work shirt, standing in front of open bay doors with a pickup truck on a lift behind him.'],
};
const VIDEOS = ['product-frontdesk', 'spec2-garage', 'spec2-dealer', 'spec2-bodyshop', 'spec2-tire', 'insights'];
const MOTION = 'Subtle documentary motion. The people move naturally and slightly, small hand gestures and glances, one person speaks briefly. The camera is almost still with a very slow handheld drift. Natural light, realistic, no zoom, no dramatic movement, nobody else enters.';

async function still(key) {
  if (done[key]) return;
  const [where, aspect, scene] = STILLS[key];
  const res = await falRun('fal-ai/flux-pro/v1.1-ultra', { prompt: scene + ' ' + (where === 'person' ? PORTRAIT : STYLE), aspect_ratio: aspect, raw: true, num_images: 1, output_format: 'jpeg', safety_tolerance: '2', enable_safety_checker: true });
  const url = res.images?.[0]?.url; if (!url) throw new Error('no image ' + JSON.stringify(res).slice(0, 200));
  const raw = `${TMP}/${key}-raw.jpg`; await download(url, raw);
  if (where === 'person') {
    await sharp(raw).resize(1200, 1500, { fit: 'cover', position: 'attention' }).webp({ quality: 84 }).toFile(`${G}/${key}.webp`);
  } else {
    await sharp(raw).resize(1920, 1080, { fit: 'cover' }).jpeg({ quality: 90 }).toFile(`${TMP}/${key}.jpg`);
    const dest = where === 'gen' ? `${G}/${key}.webp` : `${P}/${key}.webp`;
    await sharp(`${TMP}/${key}.jpg`).resize(1600, 900).webp({ quality: 80 }).toFile(dest);
  }
  mark(key); console.log('img ok', key);
}
async function video(key) {
  const vk = key + '-video'; if (done[vk]) return;
  const src = `${TMP}/${key}.jpg`; if (!fs.existsSync(src)) throw new Error('still missing ' + src);
  const url = await upload(src);
  const res = await falRun('fal-ai/veo3.1/image-to-video', { prompt: MOTION, image_url: url, aspect_ratio: '16:9', duration: '8s', resolution: '1080p', generate_audio: false }, { timeoutMs: 1500000 });
  const out = res.video?.url; if (!out) throw new Error('no video ' + JSON.stringify(res).slice(0, 200));
  await download(out, `${TMP}/${key}.mp4`); fs.copyFileSync(`${TMP}/${key}.mp4`, `${G}/${key}-video.mp4`); mark(vk); console.log('video ok', key);
}
(async () => {
  const [job = 'all', ...keys] = process.argv.slice(2);
  const wrap = (fn, k) => fn(k).catch((e) => console.log('ERR', k, e.message.slice(0, 300)));
  if (job === 'all' || job === 'images') await Promise.all((keys.length ? keys : Object.keys(STILLS)).map((k) => wrap(still, k)));
  if (job === 'all' || job === 'videos') await Promise.all((keys.length ? keys : VIDEOS).map((k) => wrap(video, k)));
  console.log('done');
})();
