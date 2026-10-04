// Brons media in the Brons visual language: dreamy editorial film photographs, lavender-periwinkle sky, peach haze,
// pale moon, minimal composition, analog grain. Same keys as the Nekaf set, written to public/assets-brons and public/media-brons.
// Run from the project root with FAL_KEY set: node tooling/gen-brons.js images|videos|all [key ...]
const fs = require('fs');
const { falRun, download, upload } = require('./fal');
const sharp = require('sharp');
const P = 'public/assets-brons'; const G = P + '/gen'; const M = 'public/media-brons';
const TMP = (process.env.MEDIA_TMP || require('os').tmpdir() + '/brons-media'); for (const d of [TMP, G, M]) fs.mkdirSync(d, { recursive: true });
const DONE = G + '/done-brons.json'; const done = fs.existsSync(DONE) ? JSON.parse(fs.readFileSync(DONE, 'utf8')) : {};
const mark = (k) => { done[k] = true; fs.writeFileSync(DONE, JSON.stringify(done)); };

const STYLE = 'Dreamlike editorial photograph shot on medium-format analog film, soft lavender and periwinkle color grade with warm peach haze, pastel duotone feel, gentle film grain, calm surreal minimalism, lots of clean negative space, soft diffused light, quiet and elegant, no text, no logos, no brand badges, no watermark.';
const PORTRAIT = 'Editorial portrait on medium-format analog film, soft lavender and peach color grade, gentle film grain, soft diffused light, calm natural expression, looking just past the camera, plain softly lit background, no text, no logos, no watermark.';
const FRAME = 'Composition: the person is placed in the right third of the frame, the left two thirds are calm open space with nothing important in them. Horizontal 16:9.';

/** key: [where, aspect, prompt]. where = hero (home slide), gen (poster + optional clip), img (site photo), person (portrait). */
const STILLS = {
  hero1: ['hero', '16:9', 'A young woman in a long camel coat, seen from the knees up and filling the right third of the frame, stands beside a classic coupe on an empty pastel promenade, holding a phone to her ear and smiling. A large pale moon hangs low in a lavender sky on the left. ' + FRAME],
  hero2: ['hero', '16:9', 'A silver-haired man of about seventy, seen from the waist up and filling the right third of the frame, sits sideways in the open door of a vintage convertible, calm, talking on a phone held to his ear. An empty pastel desert road and a lavender dusk sky with a faint moon on the left. ' + FRAME],
  hero3: ['hero', '16:9', 'A young woman with short dark hair, seen from the waist up and filling the right third of the frame, leans against a car on the open top floor of a minimalist pastel parking structure, laughing while talking on a phone held to her ear. A wide lavender sky with a soft peach horizon on the left. ' + FRAME],
  'product-frontdesk': ['gen', '16:9', 'A service advisor in a dark polo shirt hands car keys to a customer across a minimal pale counter in a bright modern garage reception, a car on a lift visible through a glass wall, lavender light pouring in.'],
  'spec2-garage': ['gen', '16:9', 'A mechanic in navy overalls looks up at the underside of a car raised on a lift in a clean, minimal workshop with tall windows, soft lavender daylight, calm and still.'],
  'spec2-dealer': ['gen', '16:9', 'A car dealership showroom with tall glass walls at dusk, a service advisor with a tablet talks to a customer beside a new car, lavender sky outside, peach reflections on the floor.'],
  'spec2-bodyshop': ['gen', '16:9', 'A body shop technician in a light work jacket runs a hand over a freshly sanded car wing in grey primer, a glowing paint booth behind him, soft lavender and peach light.'],
  'spec2-tire': ['gen', '16:9', 'A tire technician lifts a new tire onto a balancing machine in a minimal tire center, neat stacks of tires along a pale wall, lavender daylight from a high window.'],
  insights: ['gen', '16:9', 'A garage owner stands at a high table in a quiet workshop office looking at a laptop, coffee mug beside it, a car on a lift visible through the window, lavender evening light.'],
  'story-vannuland': ['gen', '16:9', 'A small family garage in a quiet Dutch village at dawn, open workshop door, a car inside, an owner handing keys to a customer, lavender sky and a pale moon above the roof, wide shot.'],
  'story-broekema': ['gen', '16:9', 'A modern all-makes garage alone in flat Dutch countryside at dusk, wide workshop with two cars on lifts glowing inside, lavender sky, peach horizon, wide shot.'],
  'story-legacy': ['gen', '16:9', 'An American auto repair shop with open bay doors in a small Colorado town, a pickup truck on a lift inside, soft lavender mountains in the distance, pale moon, wide shot.'],
  'img-frontdesk': ['img', '16:9', 'A service advisor wearing a headset smiles while taking a call at a minimal pale counter in a garage reception, a customer with car keys stands across the counter, medium shot, lavender light.'],
  'img-workshop': ['img', '16:9', 'A clean, empty modern workshop bay with a car raised on a lift, tools ordered on a wall board, tall windows with lavender daylight, no people.'],
  'img-lift': ['img', '16:9', 'A mechanic replaces a brake disc on a car on a lift, seen from the side, soft lavender light on the wheel hub, calm workshop.'],
  'img-tireshop': ['img', '16:9', 'A tire technician shows a customer two tire options in a minimal tire center, a wall of tires behind them, soft lavender and peach light.'],
  'img-team': ['img', '16:9', 'Five garage employees in matching dark work clothes, seen from the knees up, stand together laughing in front of an open workshop door, lavender sky above the building, candid, medium shot.'],
  'img-dealer': ['img', '16:9', 'A service advisor with a tablet walks around a customer car with its owner in a bright dealership service lane, lavender light through glass walls.'],
  'img-bodyshop': ['img', '16:9', 'A painter in a white protective suit and mask sprays a car door inside a softly lit paint booth, lavender and peach mist in the air, seen from the side, medium shot.'],
  'bento-green': ['bento', '21:9', 'A quiet pastel workshop at dusk seen from outside through a wide open door, a car raised on a lift glowing softly inside, large lavender sky above, pale moon, lots of empty space on the left.'],
  'bento-blue': ['bento', '3:4', 'Close-up of a hand placing a car key on a pale minimal counter, soft lavender light, shallow depth of field, lots of empty space at the top.'],
  'bento-pink': ['bento', '3:4', 'A smartphone resting in the cupholder of a car interior, soft violet and pink light through the windscreen, dreamy, lots of empty space at the top.'],
  'bento-orange': ['bento', '3:4', 'A smiling driver seen through the side window of a car, warm peach and orange evening light, dreamy, lots of empty space at the top.'],
  'person-bas': ['person', '3:4', 'A Dutch garage owner in his fifties with short grey hair and a friendly weathered face, dark blue work polo, standing in his workshop.'],
  'person-marieke': ['person', '3:4', 'A Dutch service manager in her early forties with shoulder-length brown hair, grey blouse, standing in a bright modern garage reception with blank walls and no signs.'],
  'person-dave': ['person', '3:4', 'An American auto shop manager in his forties with a short beard, red work shirt, standing in front of open bay doors.'],
};
const VIDEOS = ['hero1', 'hero2', 'hero3', 'product-frontdesk', 'spec2-garage', 'spec2-dealer', 'spec2-bodyshop', 'spec2-tire', 'insights'];
const MOTION = 'Subtle, calm documentary motion. The people move naturally and slightly, small gestures and glances. The camera is almost still with a very slow drift. Dreamy soft light, realistic, no zoom, no dramatic movement, nobody else enters.';
const HERO_MOTION = 'Locked-off static camera: the framing stays exactly as in the first frame, no pan, no zoom. The person stays on the right side of the frame and keeps the phone at the ear the whole time, listening and speaking briefly, small natural head movement, a smile. Calm, dreamy, realistic, nobody else enters.';

async function still(key) {
  if (done[key]) return;
  const [where, aspect, scene] = STILLS[key];
  const res = await falRun('fal-ai/flux-pro/v1.1-ultra', { prompt: scene + ' ' + (where === 'person' ? PORTRAIT : STYLE), aspect_ratio: aspect, raw: true, num_images: 1, output_format: 'jpeg', safety_tolerance: '2', enable_safety_checker: true });
  const url = res.images?.[0]?.url; if (!url) throw new Error('no image ' + JSON.stringify(res).slice(0, 200));
  const raw = `${TMP}/${key}-raw.jpg`; await download(url, raw);
  if (where === 'person') await sharp(raw).resize(1200, 1500, { fit: 'cover', position: 'attention' }).webp({ quality: 84 }).toFile(`${G}/${key}.webp`);
  else {
    if (where !== 'bento') await sharp(raw).resize(1920, 1080, { fit: 'cover' }).jpeg({ quality: 90 }).toFile(`${TMP}/${key}.jpg`);
    if (where === 'bento') await sharp(raw).resize(key === 'bento-green' ? 2200 : 1000, key === 'bento-green' ? 990 : 1250, { fit: 'cover' }).webp({ quality: 78 }).toFile(`${P}/${key}.webp`);
    else if (where === 'hero') await sharp(`${TMP}/${key}.jpg`).resize(1280, 720).jpeg({ quality: 82 }).toFile(`${M}/${key}-poster.jpg`);
    else await sharp(`${TMP}/${key}.jpg`).resize(1600, 900).webp({ quality: 80 }).toFile(where === 'gen' ? `${G}/${key}.webp` : `${P}/${key}.webp`);
  }
  mark(key); console.log('img ok', key);
}
async function video(key) {
  const vk = key + '-video'; if (done[vk]) return;
  const src = `${TMP}/${key}.jpg`; if (!fs.existsSync(src)) throw new Error('still missing ' + src);
  const url = await upload(src);
  const res = await falRun('fal-ai/veo3.1/image-to-video', { prompt: key.startsWith('hero') ? HERO_MOTION : MOTION, image_url: url, aspect_ratio: '16:9', duration: '8s', resolution: '1080p', generate_audio: false }, { timeoutMs: 1500000 });
  const out = res.video?.url; if (!out) throw new Error('no video ' + JSON.stringify(res).slice(0, 200));
  await download(out, `${TMP}/${key}.mp4`); mark(vk); console.log('video ok', key);
}
(async () => {
  const [job = 'all', ...keys] = process.argv.slice(2);
  const wrap = (fn, k) => fn(k).catch((e) => console.log('ERR', k, e.message.slice(0, 300)));
  if (job === 'all' || job === 'images') await Promise.all((keys.length ? keys : Object.keys(STILLS)).map((k) => wrap(still, k)));
  if (job === 'all' || job === 'videos') await Promise.all((keys.length ? keys : VIDEOS).map((k) => wrap(video, k)));
  console.log('done');
})();
