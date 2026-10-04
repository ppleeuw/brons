/* Brons-only illustrations in the Brons visual language: translucent glass cards on soft lavender and peach light.
   RulesCard replaces the animated wheel; GlassAgent replaces the waveform agent tiles. Selected in Mock.tsx. */
import { Symbol } from "@/components/Logo";

export const IS_BRONS = process.env.NEXT_PUBLIC_BRAND === "brons";

const RULES = [
  "Confirm the license plate and where the car is.",
  "Ask whether the car can still be driven.",
  "Red warning light: transfer to the mechanic on duty.",
  "Otherwise book the first free diagnostic slot.",
  "Send the confirmation by text.",
];

/** A workshop rule set on a tilted glass card, with the rule logic as a faint layer underneath and a violet glow. */
export function RulesCard() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden" style={{ background: "#f4f4f5" }}>
      <div aria-hidden="true" className="absolute" style={{ width: "62%", height: "62%", left: "22%", top: "26%", borderRadius: "50%", background: "radial-gradient(closest-side, rgba(115,112,255,.55), rgba(215,112,255,.25) 55%, rgba(255,162,112,0) 100%)", filter: "blur(28px)" }} />
      <div className="relative" style={{ width: "62%", aspectRatio: "1 / 1", transform: "rotateX(52deg) rotateZ(-38deg)", transformStyle: "preserve-3d" }}>
        <div aria-hidden="true" className="absolute inset-0 rounded-[22px]" style={{ transform: "translateZ(-46px)", background: "linear-gradient(135deg, rgba(215,214,255,.75), rgba(255,228,214,.6))", border: "1px solid rgba(255,255,255,.7)" }}>
          <div className="flex h-full flex-col justify-end gap-2 p-[9%] font-mono text-[11px] leading-snug text-[#5754ff]/60">
            <span>if warning_light == red:</span>
            <span>&nbsp;&nbsp;transfer(on_duty_mechanic)</span>
            <span>else: book(first_slot("diagnostic"))</span>
            <span>send_sms(confirmation)</span>
          </div>
        </div>
        <div className="absolute inset-0 rounded-[22px] p-[9%]" style={{ transform: "translateZ(0)", background: "rgba(255,255,255,.82)", border: "1px solid rgba(255,255,255,.95)", boxShadow: "0 40px 80px -30px rgba(87,84,255,.55)", backdropFilter: "blur(8px)" }}>
          <p className="mb-4 text-[17px] font-medium tracking-tight text-[#3f3cd6]">Rules for a breakdown call</p>
          <ol className="flex flex-col gap-2.5 text-[13px] leading-snug text-[#2f2c7a]">
            {RULES.map((r, i) => (
              <li key={r} className="flex gap-2"><span className="text-[#7370ff]">{i + 1}.</span><span>{r}</span></li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

const AGENT_BG: Record<string, string> = {
  "#4faf62": "linear-gradient(225deg,#ffe4d6,#d7d6ff)",
  "#4584c6": "linear-gradient(135deg,#eeeeff,#c9c8ff)",
  "#f96205": "linear-gradient(135deg,#fff2eb,#ffd1b8)",
  "#7644a6": "linear-gradient(135deg,#f3e8ff,#d7d6ff)",
  "#e94e2a": "linear-gradient(135deg,#ffe8e3,#ffd6cc)",
};

/** An agent at work: a glass card with the agent name, a live status, the caller request and the agent reply. */
export function GlassAgent({ accent, caption }: { accent: string; caption: string }) {
  const m = caption.match(/^\[([^\]]+)\]:\s*(.*)$/);
  const label = m ? m[1] : "Agent";
  const reply = m ? m[2] : caption;
  const bars = [4, 7, 11, 6, 13, 9, 15, 8, 12, 5, 10, 14, 7, 9, 5, 11, 6, 8];
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden" style={{ background: AGENT_BG[accent] || AGENT_BG["#4faf62"] }}>
      <div aria-hidden="true" className="absolute" style={{ width: "70%", height: "55%", top: "30%", borderRadius: "50%", background: "radial-gradient(closest-side, rgba(87,84,255,.35), rgba(87,84,255,0))", filter: "blur(18px)" }} />
      <div className="relative flex w-[88%] flex-col gap-3 rounded-[18px] p-5" style={{ background: "rgba(255,255,255,.72)", border: "1px solid rgba(255,255,255,.9)", boxShadow: "0 24px 48px -24px rgba(87,84,255,.5)", backdropFilter: "blur(10px)" }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full text-white" style={{ background: "linear-gradient(160deg,#7370ff,#5754ff)" }}><Symbol className="h-4 w-4" /></span>
            <span className="text-[14px] font-medium text-[#131313]">{label}</span>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[10px] text-[#4e4e56]"><span className="h-1.5 w-1.5 rounded-full bg-[#1ec677]" />Live</span>
        </div>
        <div className="flex h-6 items-end gap-[3px]" aria-hidden="true">
          {bars.map((h, i) => <span key={i} className="voice-bar block w-[3px] rounded-full" style={{ height: h + 6, background: "linear-gradient(#7370ff,#cb47ff)", animationDelay: `${i * 0.07}s` }} />)}
        </div>
        <p className="rounded-[12px] rounded-tl-[4px] px-3 py-2.5 text-[14px] leading-snug text-white" style={{ background: "linear-gradient(160deg,#7370ff,#5754ff)" }}>{reply}</p>
      </div>
    </div>
  );
}
