import type { CSSProperties, ReactNode } from "react";
import PhoneChat, { type Msg } from "./PhoneChat";
import VoiceWave from "./VoiceWave";
import { DashboardFull, DataCards, ReportingCard, RetentionCard } from "./Dashboard";
import * as C from "./Cards";
import * as H from "./Home";
import { Fill } from "./Fit";
import Wheel from "./Wheel";
import { AgentAvatar, Bubble, Card, Pill, WrenchIcon, dottedBg } from "./ui";

/** Blurred photographic-looking gradient backgrounds (replace blurred stills behind UI). */
const BG: Record<string, CSSProperties> = {
  teal: { background: "radial-gradient(120% 90% at 20% 20%, #9fb9c4 0%, #5f7d8c 45%, #2f4551 100%)" },
  sand: { background: "radial-gradient(120% 90% at 30% 30%, #d8c3a5 0%, #a68b6a 50%, #5c4a38 100%)" },
  olive: { background: "radial-gradient(120% 90% at 70% 20%, #b7b58f 0%, #7c7a55 50%, #3e3f2c 100%)" },
  grey: { background: "radial-gradient(120% 90% at 40% 30%, #cfd0cc 0%, #8d8f8a 55%, #4b4d49 100%)" },
  green: { background: "radial-gradient(120% 90% at 30% 20%, #a8c9a6 0%, #5f8a5f 50%, #2b4a33 100%)" },
  forest: { background: "radial-gradient(120% 90% at 30% 20%, #3f5a44 0%, #1f2f26 60%, #101915 100%)" },
  sunset: { background: "radial-gradient(120% 90% at 30% 20%, #f2b28c 0%, #c8673f 50%, #6b2d1f 100%)" },
  rose: { background: "radial-gradient(120% 90% at 30% 20%, #f3c2c9 0%, #cf7f8f 50%, #7a3a4a 100%)" },
  sky: { background: "linear-gradient(180deg, #f4d9d2 0%, #d8dbe6 45%, #7f9bb8 100%)" },
  blue: { background: "linear-gradient(180deg, #6b8fd6 0%, #4f74c2 100%)" },
  desk: { background: "radial-gradient(120% 100% at 50% 0%, #d9b98f 0%, #b8925f 55%, #7d5d38 100%)" },
  meadow: { background: "radial-gradient(120% 90% at 20% 20%, #cfe0a8 0%, #8fb06a 50%, #46633a 100%)" },
  navy: { background: "radial-gradient(120% 90% at 30% 30%, #3b5a86 0%, #22375a 55%, #0f1a2e 100%)" },
  dark: { background: "#1b2624" },
};

const MSG = {
  wealth: [
    { side: "user", text: "Is a brake job covered by my service plan?" },
    { side: "agent", text: "Yes, your plan covers pads and discs. I can book the next open slot with Marco.", widget: "quote" },
  ],
  banking: [
    { side: "user", text: "I need new front brake pads before my trip." },
    { side: "agent", text: "Done. An OEM set for your plate arrives tomorrow, fitting at 8:30.", widget: "order" },
  ],
  insurance: [
    { side: "user", text: "How much of my service plan balance is left?" },
    { side: "agent", text: "You’ve used $122 of your $180 balance, so $58 is still available this year.", widget: "plan" },
  ],
  mortgage: [
    { side: "user", text: "My car will be in the shop all day. Can I get a loaner?" },
    { side: "agent", text: "Of course. Loaners are free with a service; here is what we can hand you today.", widget: "loaner" },
  ],
  exam: [
    { side: "user", text: "Can I book a service this Thursday?" },
    { side: "agent", text: "Yes! Thursday morning is open. I’ve held the 9:40 slot for you.", widget: "slots" },
  ],
  reminder: [
    { side: "user", text: "When is my next inspection due?" },
    { side: "agent", text: "Your last inspection was May 2025, so you’re due next month. I set a reminder.", widget: "reminder" },
  ],
  family: [
    { side: "user", text: "I’d like to add my daughter’s car to my service plan. It’s her first car." },
    { side: "agent", text: "Great. A family plan covers both cars for service and inspection. Shall I add it now?" },
  ],
  hotel: [
    { side: "user", text: "My brake pads are worn and I’m staying at a hotel nearby." },
    { side: "agent", text: "No problem. Our branch near your hotel has the set in stock and can fit it by 6pm.", widget: "order" },
  ],
} satisfies Record<string, Msg[]>;

/** A blurred scene with floating glass chat bubbles (used for specialty-style tab videos). */
function BubbleScene({ bg, lines }: { bg: CSSProperties; lines: { side: "agent" | "user"; text: string; name?: string }[] }) {
  return (
    <div className="relative h-full w-full overflow-hidden" style={bg}>
      <div className="absolute inset-0 backdrop-blur-[2px]" />
      <div className="absolute inset-x-[10%] top-1/2 flex -translate-y-1/2 flex-col gap-3">
        {lines.map((l, i) => (
          <div key={i} className={"bubble-in flex " + (l.side === "agent" ? "justify-start" : "justify-end")} style={{ animationDelay: `${i * 1.2}s` }}>
            <div className={"max-w-[80%] rounded-[20px] border border-white/25 bg-white/15 px-4 py-3 text-[13px] leading-snug text-white backdrop-blur-xl " + (l.side === "agent" ? "rounded-bl-[6px]" : "rounded-br-[6px]")}>
              <div className="mb-1 flex items-center gap-1.5 text-[10px] text-white/70">{l.side === "agent" ? <AgentAvatar size={13} /> : <span className="h-[13px] w-[13px] rounded-full bg-white/60" />}{l.name || (l.side === "agent" ? "Ridgeline Auto Care" : "Customer")}</div>
              {l.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneScene({ bg, msgs, dark = false, brand }: { bg: CSSProperties; msgs: Msg[]; dark?: boolean; brand?: string }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden" style={bg}>
      <PhoneChat messages={msgs} dark={dark} brand={brand} className="h-[86%] w-auto aspect-[9/19]" />
    </div>
  );
}

function ChannelsHero() {
  const icons = ["☎", "✉", "▦", "◎", "✆"];
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden" style={BG.green}>
      <div className="absolute inset-x-[12%] top-[16%] flex justify-between">
        {icons.map((ic, i) => (
          <span key={i} className="flex h-9 w-9 items-center justify-center rounded-[38%] bg-white/20 text-[14px] text-white ring-1 ring-white/30 backdrop-blur">{ic}</span>
        ))}
      </div>
      <PhoneChat messages={MSG.exam} className="mt-[6%] h-[80%] w-auto aspect-[9/19]" />
    </div>
  );
}

function ExplorerTable() {
  const rows = [["Bay wait time", "31% of callers mention waiting over two weeks for a slot", "Add same-week slots"], ["Parts", "Only 1 in 4 jobs has parts on site the day before", "Pre-order parts"], ["Quotes", "Quote questions drive 640 conversations a week", "Answer up front"]];
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden" style={BG.meadow}>
      <Card title="What the data says" accent="#4faf62" className="w-[78%]">
        <div className="grid grid-cols-[1fr_2fr_1.2fr] gap-2 text-[9.5px] uppercase tracking-widest text-gray-350"><span>Area</span><span>Evidence</span><span>Read</span></div>
        {rows.map(([a, b, c]) => (
          <div key={a} className="mt-1.5 grid grid-cols-[1fr_2fr_1.2fr] gap-2 rounded-[10px] bg-gray-100 px-2 py-1.5 text-[10.5px] text-gray-700"><span className="font-medium">{a}</span><span className="text-gray-400">{b}</span><span className="text-green-500">{c}</span></div>
        ))}
        <div className="mt-3 text-[10px] uppercase tracking-widest text-gray-350">Recommendations</div>
        <div className="mt-1 flex gap-2"><Pill tone="ghost">Open bay slots</Pill><Pill tone="ghost">Pre-order parts</Pill></div>
      </Card>
    </div>
  );
}

function AgentStudioHero() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-blue-50" style={dottedBg}>
      <div className="w-[52%] max-w-[420px]">
        <Bubble name="Ridgeline Auto Care" className="bubble-in">Hi Sarah! Your car is ready for pickup. Want to book a time to collect it?</Bubble>
        <div className="mt-3 flex justify-end"><Pill tone="green">Yes, book it</Pill></div>
      </div>
    </div>
  );
}

function DarkChat({ brand = "Garage De Vries", lines = ["Hey Remi, how can I help you today?", "Can I add a wheel alignment to my tire change?", "Absolutely. I’ve added the alignment and kept your Friday slot."] }: { brand?: string; lines?: string[] }) {
  return (
    <div className="flex h-full w-full flex-col justify-end p-[8%] text-white" style={BG.dark}>
      <div className="mb-3 flex items-center gap-2 text-[12px] text-white/70"><AgentAvatar size={16} />{brand}</div>
      <div className="flex flex-col gap-2">
        {lines.map((l, i) => (
          <Bubble key={i} dark side={i % 2 ? "user" : "agent"} className="bubble-in" style={{ animationDelay: `${i * 1.1}s` }}>{l}</Bubble>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between rounded-[16px] rounded-tr-[6px] bg-white/12 px-3 py-2 text-[11px] text-white/60"><span>Ask anything…</span><span className="h-5 w-5 rounded-full bg-green-300" /></div>
    </div>
  );
}

function ContextSky() {
  return (
    <div className="relative h-full w-full overflow-hidden" style={BG.sky}>
      <div className="absolute inset-x-[12%] top-[38%]">
        <Bubble name="Ridgeline Auto Care" className="bubble-in">Hi Megan, welcome back. Is the service for your car or for your daughter’s?</Bubble>
        <Bubble side="user" className="bubble-in mt-2" style={{ animationDelay: "1.2s" }}>It’s for my daughter Emma’s car.</Bubble>
      </div>
    </div>
  );
}

function Encrypted() {
  return (
    <div className="flex h-full w-full items-center justify-center" style={BG.blue}>
      <span className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[13px] text-white ring-1 ring-white/30"><span className="h-3.5 w-3 rounded-[3px] border-[1.5px] border-white" />Vehicle data encrypted</span>
    </div>
  );
}

function IconPillDark({ label, bg }: { label: string; bg: CSSProperties }) {
  return (
    <div className="flex h-full w-full items-center justify-center" style={bg}>
      <span className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[12px] text-white ring-1 ring-white/25 backdrop-blur"><span className="flex h-5 w-5 items-center justify-center rounded-[38%] bg-white/25"><WrenchIcon className="h-3 w-3" /></span>{label}</span>
    </div>
  );
}

const REGISTRY: Record<string, () => ReactNode> = {
  "wheel": () => <div className="flex h-full w-full items-center justify-center bg-white"><Wheel /></div>,
  "agent-frontdesk": () => <VoiceWave accent="#4faf62" caption="[Service desk]: you're booked for Thursday at 9:40" />,
  "agent-orders": () => <VoiceWave accent="#4584c6" caption="[Car-ready status]: your car is ready for pickup" />,
  "agent-recall": () => <VoiceWave accent="#f96205" caption="[Reminder]: your inspection is due next month, shall I book it?" />,
  "agent-noshow": () => <VoiceWave accent="#7644a6" caption="[No-show recovery]: I can move you to tomorrow at 10:20" />,
  "agent-urgent": () => <VoiceWave accent="#e94e2a" caption="[Breakdown]: transferring you to the mechanic on duty now" />,
  "agent-postop": () => <VoiceWave accent="#4faf62" caption="[Post-repair]: is the noise gone and is the car running fine?" />,
  "agent-reorder": () => <VoiceWave accent="#4584c6" caption="[Tire swap]: your winter set is in storage, Friday at 9:20?" />,
  "agent-referral": () => <VoiceWave accent="#7644a6" caption="[Claim intake]: the claim is complete, booking the estimate now" />,
  "story-vannuland": () => <BubbleScene bg={BG.green} lines={[{ side: "user", name: "Customer", text: "Is my car ready? I dropped it off this morning." }, { side: "agent", name: "Autobedrijf van Nuland", text: "It is on the test drive now, ready from 4 PM. We’re open until 6 today." }, { side: "user", name: "Customer", text: "Great, I’ll come by after work." }]} />,
  "story-broekema": () => <BubbleScene bg={BG.navy} lines={[{ side: "user", name: "Customer", text: "I need to move my inspection. Is there anything next week?" }, { side: "agent", name: "Broekema", text: "Yes. Sven has Tuesday at 10:20 in Zweeloo. Shall I move you there?" }]} />,
  "story-legacy": () => <BubbleScene bg={BG.grey} lines={[{ side: "user", name: "Customer", text: "What did the brake quote for my truck come to?" }, { side: "agent", name: "Legacy Auto Clinic", text: "$489 for front pads and discs, parts and labor included. Shall I book the fitting?" }]} />,
  "gw-build": () => <H.GwBuild />,
  "gw-optimize": () => <H.GwOptimize />,
  "ins-explorer": () => <H.InsExplorer />,
  "ins-monitors": () => <H.InsMonitors />,
  "ins-experiments": () => <H.InsExperiments />,
  "ins-observability": () => <H.InsObservability />,
  "hz-planning": () => <H.HzPlanning />,
  "hz-context": () => <H.HzContext />,
  "hz-optimization": () => <H.HzOptimization />,
  "hz-proactive": () => <H.HzProactive />,
  "dashboard-full": () => <Fill base={900} min={0.7} max={1.15}><div className="h-full w-full p-[3%]"><DashboardFull /></div></Fill>,
  "ghostwriter-build": () => <C.GhostwriterBuild />,
  "trace": () => <C.TraceTimeline />,
  "data-cards": () => <DataCards className="bg-blue-100" />,
  "report": () => <C.ReportCard />,
  "chat-bubbles": () => <C.ChatBubblesCard />,
  "reasoning": () => <C.ReasoningPanel />,
  "integrations": () => <C.IntegrationsCard />,
  "memory": () => <C.MemoryCard />,
  "memory-compact": () => <C.MemoryCard compact />,
  "phone-family": () => <PhoneScene bg={{ background: "#ecf6fe" }} msgs={MSG.family} />,
  "strategy": () => <C.StrategyCard />,
  "phone-street": () => <PhoneScene bg={BG.grey} msgs={MSG.exam} brand="Garage De Vries" />,
  "phone-wealth": () => <PhoneScene bg={BG.teal} msgs={MSG.wealth} />,
  "phone-banking": () => <PhoneScene bg={BG.sand} msgs={MSG.banking} />,
  "phone-insurance": () => <PhoneScene bg={BG.olive} msgs={MSG.insurance} />,
  "phone-mortgage": () => <PhoneScene bg={BG.grey} msgs={MSG.mortgage} />,
  "phone-desk": () => <PhoneScene bg={BG.desk} msgs={MSG.reminder} />,
  "phone-desk-2": () => <PhoneScene bg={BG.desk} msgs={MSG.banking} brand="Autobedrijf Bakker" />,
  "phone-desk-3": () => <PhoneScene bg={BG.desk} msgs={MSG.family} brand="Westside Motors" />,
  "phone-ota": () => <PhoneScene bg={BG.teal} msgs={MSG.hotel} brand="Ridgeline Auto Care" />,
  "phone-airlines": () => <PhoneScene bg={BG.navy} msgs={MSG.exam} brand="Lakeside Tire & Auto" dark />,
  "phone-hotels": () => <PhoneScene bg={BG.olive} msgs={MSG.insurance} brand="Autobedrijf Bakker" />,
  "voice-blue": () => <VoiceWave accent="#4584c6" caption="[Agent]: your parts order is on its way" />,
  "voice-orange": () => <VoiceWave accent="#f96205" caption="[Agent]: your service is booked for Thursday" />,
  "voice-green": () => <VoiceWave accent="#4faf62" caption="[Agent]: I’ve booked your inspection for Thursday" />,
  "voice-dark": () => <div className="h-full w-full" style={BG.forest}><VoiceWave accent="#ffffff" caption="[Agent]: Hi Georgia, your car is ready for pickup" className="!bg-transparent [&_span]:text-white" /></div>,
  "bubbles-forest": () => <BubbleScene bg={BG.forest} lines={[{ side: "agent", text: "The remaining $40 is your share: your service plan covers the rest of the job." }, { side: "user", text: "Perfect, thanks!" }]} />,
  "bubbles-green": () => <BubbleScene bg={BG.green} lines={[{ side: "user", text: "Okay, here’s the claim number from my insurer." }, { side: "agent", text: "Got it: claim 48-2210, approved for the estimate." }]} />,
  "bubbles-sunset": () => <BubbleScene bg={BG.sunset} lines={[{ side: "agent", text: "After the inspection, we’ll email you the report and the invoice." }]} />,
  "bubbles-rose": () => <BubbleScene bg={BG.rose} lines={[{ side: "user", text: "Yes, it’s Emma Parker, plate 472-KLM." }, { side: "agent", text: "Thanks, Emma’s car is on the family service plan." }]} />,
  "agent-studio-hero": () => <AgentStudioHero />,
  "journeys": () => <C.JourneyList />,
  "knowledge": () => <C.KnowledgeLookup />,
  "simulations": () => <C.SimulationsList />,
  "brand": () => <C.BrandSettings />,
  "channels-hero": () => <ChannelsHero />,
  "email": () => <C.EmailCard />,
  "service-ui": () => <C.ServiceUI />,
  "chat-app": () => <C.ChatAppCard />,
  "context-sky": () => <ContextSky />,
  "encrypted": () => <Encrypted />,
  "history": () => <C.HistoryCard />,
  "icon-ghost": () => <IconPillDark label="Ghostwriter" bg={BG.grey} />,
  "icon-horizon": () => <IconPillDark label="Horizon" bg={BG.teal} />,
  "icon-pricing": () => <IconPillDark label="Simple monthly pricing" bg={BG.grey} />,
  "pricing-card": () => <C.PricingCard />,
  "explorer-table": () => <ExplorerTable />,
  "briefing": () => <C.BriefingCard />,
  "briefing-compact": () => <C.BriefingCard compact />,
  "insights-query": () => <C.InsightsQuery />,
  "recommendations": () => <C.Recommendations />,
  "workflow": () => <C.WorkflowCard />,
  "workflow-memory": () => <C.MemoryCard />,
  "activity": () => <C.ActivityCard />,
  "reporting": () => <div className="h-full w-full bg-blue-100 p-[6%]"><ReportingCard /></div>,
  "retention": () => <div className="h-full w-full bg-blue-100 p-[6%]"><RetentionCard /></div>,
  "account-dark": () => <C.AccountCard />,
  "governance": () => <C.AccountCard light title="Data governance" lines={["Let me look into this for you. What was the date of your last service?", "It was in March. I’d like the service history sent to my new garage."]} />,
  "governance-dark": () => <C.AccountCard title="Data governance" lines={["Let me look into this for you. What was the date of your last service?", "It was in March. I’d like the service history sent to my new garage."]} />,
  "constellation": () => <C.Constellation />,
  "policies": () => <C.PoliciesDoc />,
  "dark-chat": () => <DarkChat />,
};

/** Renders a named workshop mockup filling its container (absolute inset). */
export default function Mock({ name, className = "", fill = true }: { name: string; className?: string; fill?: boolean }) {
  const render = REGISTRY[name];
  return (
    <div className={(fill ? "absolute inset-0 " : "") + "overflow-hidden " + className} data-mock={name}>
      {render ? (name.startsWith("gw-") || name.startsWith("ins-") || name.startsWith("hz-") || name === "wheel" || name === "dashboard-full" ? render() : <Fill>{render()}</Fill>) : <div className="flex h-full w-full items-center justify-center bg-blue-100 text-[11px] text-gray-350">{name}</div>}
    </div>
  );
}

export { BG, MSG, BubbleScene, PhoneScene };
