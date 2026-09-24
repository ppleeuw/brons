"use client";
import { useEffect, useRef } from "react";

/**
 * The Nekaf wheel: thousands of points arranged as a tire (a dense tread band cut into 12 tread blocks by grooves,
 * a lighter sidewall), a rim ring, five spokes and a hub with lug nuts. The wheel turns slowly and tilts slightly
 * toward the cursor. Dependency-free 2D canvas in the site's green palette; the turn stops under prefers-reduced-motion.
 */
export default function Wheel({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const N = window.innerWidth < 700 ? 4500 : 8000, TAU = Math.PI * 2, SPOKES = 5, BLOCKS = 12;
    const rad = new Float32Array(N), ang = new Float32Array(N), dep = new Float32Array(N), sz = new Float32Array(N), jit = new Float32Array(N);
    const colors: string[] = [];
    const rnd = Math.random;
    const lerp = (a: number[], b: number[], t: number) => a.map((x, i) => Math.round(x + (b[i] - x) * t));
    /* brand colours come from the stylesheet tokens, so a brand with another palette recolours the wheel too */
    const css = getComputedStyle(document.documentElement);
    const tok = (name: string, fallback: number[]) => { const m = css.getPropertyValue(name).trim().match(/^#([0-9a-f]{6})$/i); return m ? [0, 2, 4].map((i) => parseInt(m[1].slice(i, i + 2), 16)) : fallback; };
    const p500 = tok("--color-green-500", [0, 104, 56]), p300 = tok("--color-green-300", [79, 175, 98]), p200 = tok("--color-green-200", [126, 209, 133]);
    const cIn = dark ? [255, 255, 255] : p500, cMid = dark ? p200 : p300, cOut = dark ? p300 : p200, cHi = dark ? [235, 194, 71] : [48, 46, 45];
    let n = 0;
    const push = (r: number, a: number, z: number, size: number, c: number[]) => {
      rad[n] = r; ang[n] = a; dep[n] = z; sz[n] = size; jit[n] = rnd();
      colors.push(`rgb(${c[0]},${c[1]},${c[2]})`);
      n++;
    };
    while (n < N) {
      const u = rnd();
      if (u < 0.46) {
        // tread band: 12 blocks separated by grooves, plus one circumferential groove
        const r = 0.76 + rnd() * 0.24, a = rnd() * TAU;
        const seg = (a / (TAU / BLOCKS)) % 1;
        const groove = seg > 0.84 || Math.abs(r - 0.885) < 0.014;
        if (groove && rnd() < 0.9) continue;
        const edge = (r - 0.76) / 0.24;
        push(r, a, 0.09 * Math.cos((edge - 0.5) * Math.PI), 1.25 + rnd() * 0.4, groove ? cIn : lerp(cIn, cMid, 0.1 + (1 - Math.abs(edge - 0.5) * 2) * 0.3));
      } else if (u < 0.6) {
        // sidewall: lighter, slightly recessed
        const r = 0.62 + rnd() * 0.14, a = rnd() * TAU;
        push(r, a, 0.04, 0.9 + rnd() * 0.4, lerp(cIn, cMid, 0.15 + rnd() * 0.2));
      } else if (u < 0.74) {
        // rim ring
        const r = 0.53 + rnd() * 0.08, a = rnd() * TAU;
        let c = lerp(cMid, cOut, (r - 0.53) / 0.08);
        if (rnd() < 0.06) c = lerp(c, cHi, 0.5);
        push(r, a, -0.03, 1 + rnd() * 0.4, c);
      } else if (u < 0.92) {
        // five spokes of constant width
        const k = Math.floor(rnd() * SPOKES), r = 0.16 + rnd() * 0.38;
        const a = k * (TAU / SPOKES) + (rnd() - 0.5) * (0.11 / r);
        push(r, a, -0.05, 1 + rnd() * 0.3, lerp(cMid, cOut, rnd() * 0.5));
      } else if (u < 0.965) {
        // hub disc
        const r = Math.sqrt(rnd()) * 0.15, a = rnd() * TAU;
        push(r, a, 0.02, 1.1 + rnd() * 0.3, lerp(cIn, cMid, r / 0.15 * 0.5));
      } else {
        // lug nuts, one per spoke
        const k = Math.floor(rnd() * SPOKES), t = k * (TAU / SPOKES), rr = Math.sqrt(rnd()) * 0.022, aa = rnd() * TAU;
        const x = 0.095 * Math.cos(t) + rr * Math.cos(aa), y = 0.095 * Math.sin(t) + rr * Math.sin(aa);
        push(Math.hypot(x, y), Math.atan2(y, x), 0.05, 1.2, lerp(cOut, cHi, 0.3));
      }
    }
    let tx = 0, ty = 0, mx = 0, my = 0, raf = 0, visible = true, W = 0, H = 0, dpr = 1;
    const resize = () => { dpr = Math.min(devicePixelRatio || 1, 2); W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; };
    resize();
    const onMove = (e: MouseEvent | TouchEvent) => { const p = "touches" in e ? e.touches[0] : e; if (!p) return; tx = p.clientX / innerWidth - 0.5; ty = p.clientY / innerHeight - 0.5; };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("resize", resize);
    const io = new IntersectionObserver((en) => { visible = en[0].isIntersecting; }, { threshold: 0 });
    io.observe(cv);
    const frame = (t: number) => {
      raf = requestAnimationFrame(frame);
      if (!visible || !W) return;
      const s = t * 0.001;
      mx += (tx - mx) * 0.04; my += (ty - my) * 0.04;
      // slow turn (one revolution in about 25 s) and a small tilt toward the cursor
      const rz = reduce ? 0 : s * 0.25, ry = mx * 0.5, rx = my * 0.35;
      const scale = (Math.min(W, H) / 2) * 0.9;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      ctx.translate(W / 2, H / 2);
      for (let i = 0; i < N; i++) {
        const a = ang[i] + rz, r = rad[i];
        let x = Math.cos(a) * r, y = Math.sin(a) * r;
        const z = dep[i] + (reduce ? 0 : Math.sin(s * 1.3 + jit[i] * 6.28) * 0.008);
        // small 3D tilt: rotate around y then x, then perspective
        const x2 = x * Math.cos(ry) + z * Math.sin(ry), z2 = -x * Math.sin(ry) + z * Math.cos(ry);
        const y2 = y * Math.cos(rx) - z2 * Math.sin(rx), z3 = y * Math.sin(rx) + z2 * Math.cos(rx);
        const p = 1 / (1 - z3 * 0.18);
        x = x2 * p; y = y2 * p;
        const size = sz[i] * p * (scale / 160);
        ctx.fillStyle = colors[i];
        ctx.globalAlpha = 0.6 + jit[i] * 0.4;
        ctx.beginPath();
        ctx.arc(x * scale, y * scale, size, 0, 6.283);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); window.removeEventListener("resize", resize); io.disconnect(); };
  }, [dark]);
  return <canvas ref={ref} className={"block h-full w-full " + className} aria-hidden="true" />;
}
