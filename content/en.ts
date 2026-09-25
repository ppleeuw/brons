import type { Site, SpecialtyPage, Story } from "./types";
import { LEGAL } from "./legal";
import { COOKIES, SAFETY } from "./policies";
import { BADGES, CALENDLY, CUSTOMER_LOGOS, EMAIL, INTEGRATION_LOGOS, LINKEDIN, PEOPLE, PHOTOS, SIGN_IN, TEL, TEL_DISPLAY, VIDEOS } from "./shared";

const callDemo = { label: "Call the demo line", href: TEL };
const contactSales = { label: "Contact sales", href: "/demo" };
const bookDemo = { label: "Book a demo", href: "/demo" };
const logos = CUSTOMER_LOGOS(["/customers/van-nuland", "/customers/broekema", "/customers/legacy-auto-clinic"]);

const TRUST_BADGES = [
  { src: BADGES.soc1, alt: "SOC 1 audited controls" },
  { src: BADGES.iso27001, alt: "ISO 27001 information security" },
  { src: BADGES.gdpr, alt: "GDPR" },
  { src: BADGES.euai, alt: "EU AI Act ready" },
];

const trust = {
  title: "Built for workshop accountability",
  text: "Every rule, every decision and every hand-off is documented and auditable.",
  badges: TRUST_BADGES,
};

const cta = {
  title: "See how many more calls you could answer",
  text: "We'll model recovered bookings and staff hours on your own call volume.",
  primary: bookDemo,
  secondary: callDemo,
  note: "Talk to a founder. No obligations.",
};

/* ---------- specialties ---------- */
function specialty(s: {
  slug: string; name: string; short: string; subtitle: string; description: string; media: typeof VIDEOS.garage; overlay: SpecialtyPage["hero"]["overlay"];
  cardsTitle: string; tabs: SpecialtyPage["cards"]["tabs"]; journeyTitle: string; journey: { title: string; text: string }[]; photo: string; photoAlt: string;
  quote: SpecialtyPage["quote"]; agents: SpecialtyPage["agents"]["tiles"];
}): SpecialtyPage {
  return {
    slug: s.slug,
    name: s.name,
    short: s.short,
    meta: { title: `${s.name} | Nekaf`, description: s.description },
    hero: { title: s.name, subtitle: s.subtitle, media: { kind: "video", src: s.media.video, poster: s.media.poster }, overlay: s.overlay },
    logos: { title: "Handling hundreds of conversations daily at:", logos },
    cards: { title: s.cardsTitle, tabs: s.tabs },
    journey: { title: s.journeyTitle, features: s.journey, media: { kind: "image", src: s.photo, alt: s.photoAlt }, mediaSide: "right", tone: "product" },
    quote: s.quote,
    agents: { title: "Agents for " + s.short, cta: { label: "All agents", href: "/product/agents" }, tiles: s.agents },
    trust: { ...trust, title: "Built for " + s.short + ": trust and privacy" },
    cta,
  };
}

const specialties: SpecialtyPage[] = [
  specialty({
    slug: "garages", name: "Independent garages", short: "independent garages",
    subtitle: "Every call answered. Every bay booked.",
    description: "AI voice agents for independent garages. Answer every call, book the right job in the right bay and route breakdowns by your own rules.",
    media: VIDEOS.garage,
    overlay: [
      { side: "start", kind: "user", name: "Caller", text: "My check engine light came on this morning and the car feels sluggish." },
      { side: "end", kind: "agent", text: "Let's have it looked at today. I can fit a diagnostic in at 2:40 PM with Marco. Shall I book it?" },
    ],
    cardsTitle: "Trusted for a garage's most common calls",
    tabs: [
      { label: "Drivers", cards: [
        { title: "Service and inspection booking", text: "Oil services, annual inspections, brakes and timing belts, booked with the right duration and the right technician." },
        { title: "Warning lights and breakdowns", text: "Check engine lights, overheating and roadside calls follow your rules and reach the right person in seconds." },
        { title: "Is my car ready?", text: "Read from your planner: in the bay, waiting on parts or ready for pickup, with the time." },
        { title: "Quotes and prices", text: "What a job costs, what the quote included and what changed, from your own price list." },
        { title: "Loaner cars and pickup", text: "Courtesy cars, drop-off times and pickup windows, agreed on the call." },
        { title: "Directions and hours", text: "Locations, parking, opening hours and holiday schedules, answered instantly." },
      ] },
      { label: "Service desk", cards: [
        { title: "Overflow and after hours", text: "Calls ring to Nekaf when the counter is busy or closed. Nothing goes to voicemail." },
        { title: "Warm transfers", text: "Complex or upset callers reach a person with the transcript and a summary." },
        { title: "Reminders and recalls", text: "Confirmations, reminders and inspection recalls go out automatically and land in the planner." },
        { title: "No-show recovery", text: "Missed appointments are called back within two hours and rebooked." },
        { title: "Waitlist fills", text: "A cancelled slot is offered to the waitlist until it's filled." },
        { title: "Call summaries", text: "Every call is transcribed, tagged and written to the customer record." },
      ] },
      { label: "Owners", cards: [
        { title: "One standard per location", text: "Every site sounds the same and follows the same rules." },
        { title: "Live dashboard", text: "Answer rate, bookings, breakdowns routed and handle time, per site and per day." },
        { title: "Audit trail", text: "Every decision logged, with the rule version that produced it." },
        { title: "Your rules, approved by you", text: "Job durations, technician skills and escalation rules approved by the workshop manager before they go live." },
        { title: "Planner sync", text: "Bookings written to Autoflex, Autotaal, WinCar, Tekmetric, Shopmonkey or your system." },
        { title: "Multi-language", text: "English, Dutch, German and Spanish, per location." },
      ] },
    ],
    journeyTitle: "Better outcomes across the whole workshop visit",
    journey: [
      { title: "Get cars into the right bay faster", text: "Answer at once, recognise the reason for the call and book the right job type with the right technician." },
      { title: "Route what matters", text: "Breakdowns and warning lights follow the rules your workshop manager approved. Never a guess." },
      { title: "Keep the planner full", text: "Reminders, recalls, no-show recovery and waitlist fills protect every hour of bay time." },
      { title: "Give the counter its time back", text: "Routine questions are answered without staff. Complex ones arrive with context." },
      { title: "Report like a team member", text: "Every call, outcome and hand-off on one dashboard." },
    ],
    photo: PHOTOS.lift, photoAlt: "Mechanic replacing a brake disc under a car on a lift",
    quote: { quote: "It knows the difference between an inspection booking and a car-ready question. Our counter finally has time for the customer standing in front of it.", name: "Bas", role: "Owner, Autobedrijf van Nuland" },
    agents: [
      { mock: "agent-frontdesk", title: "Service desk", text: "Answers, books and reschedules, 24/7." },
      { mock: "agent-urgent", title: "Breakdown routing", text: "Applies your breakdown rules and transfers with a summary." },
      { mock: "agent-orders", title: "Car-ready status", text: "Tells callers where their car and parts stand." },
      { mock: "agent-noshow", title: "No-show recovery", text: "Rebooks missed visits and reports the bay time it recovered." },
    ],
  }),
  specialty({
    slug: "dealerships", name: "Dealerships", short: "dealerships",
    subtitle: "One standard across sales, service and parts.",
    description: "AI voice agents for car dealerships. Answer every service, parts and sales call, book into your dealer system and keep every location consistent.",
    media: VIDEOS.dealer,
    overlay: [
      { side: "start", kind: "user", name: "Caller", text: "Is my car ready? I dropped it off this morning for the 60,000 km service." },
      { side: "end", kind: "agent", text: "It's being washed now, Mr. Okafor. Ready from 4 PM. We're open until 6 today and 9 to 1 on Saturday." },
    ],
    cardsTitle: "Trusted for a dealership's most common calls",
    tabs: [
      { label: "Drivers", cards: [
        { title: "Service booking", text: "Scheduled services, recalls, warranty work and seasonal tire changes, booked with the right duration and advisor." },
        { title: "Car-ready status", text: "In the shop, waiting on parts, being washed or ready, read from your dealer system." },
        { title: "Parts and accessories", text: "Availability, prices and ordering for parts and accessories, with the pickup time." },
        { title: "Sales enquiries", text: "Stock, test drives and trade-in questions captured and routed to the right salesperson." },
        { title: "Loaner cars and pickup", text: "Courtesy cars, valet pickup and delivery windows, agreed on the call." },
        { title: "Hours and locations", text: "Opening hours, directions and parking for every site." },
      ] },
      { label: "Service desk", cards: [
        { title: "Peak-hour overflow", text: "Monday mornings and the tire-change season no longer cost you callers." },
        { title: "Car-ready calls", text: "Customers are told the moment their car is ready, so they stop calling to ask." },
        { title: "Recalls and campaigns", text: "Manufacturer recalls and service campaigns booked without a call list." },
        { title: "Warm transfers", text: "Warranty disputes, complaints and anything unclear reach a person with context." },
        { title: "No-show recovery", text: "Missed appointments are called back and rebooked." },
        { title: "Call summaries", text: "Every conversation transcribed and written to the customer record." },
      ] },
      { label: "General managers", cards: [
        { title: "Every site, one standard", text: "Same greeting, same rules, one dashboard for the group." },
        { title: "DMS sync", text: "Bookings and status read from Keyloop, CDK, Reynolds and Reynolds, Dealertrack or Xtime." },
        { title: "Manufacturer standards", text: "Scripts that respect the brand's customer standards and your CSI targets." },
        { title: "Reporting", text: "Calls answered, bookings and parts orders per site, per day." },
        { title: "Audit trail", text: "Every decision logged with its rule version." },
        { title: "Multi-language", text: "English, Dutch, German and Spanish, per site." },
      ] },
    ],
    journeyTitle: "From first call to happy owner",
    journey: [
      { title: "Fill the service schedule", text: "Answer every call, book the right service and confirm it by text." },
      { title: "Stop the status calls", text: "Tell customers when their car is ready before they ask." },
      { title: "Grow parts and accessories", text: "Orders placed by phone, availability checked, pickup confirmed." },
      { title: "Free the advisors", text: "Fewer phone interruptions means more time for the customer at the counter." },
      { title: "See every site at a glance", text: "One dashboard for calls, bookings and orders across locations." },
    ],
    photo: PHOTOS.dealer, photoAlt: "Service advisor walking around a customer's car with a tablet",
    quote: { quote: "Car-ready calls used to eat our afternoons. Now the phone tells people their car is done before they think to ask.", name: "Marieke", role: "Service manager, Broekema" },
    agents: [
      { mock: "agent-frontdesk", title: "Service desk", text: "Books services and answers questions, 24/7." },
      { mock: "agent-orders", title: "Car-ready status", text: "Tells callers where their car and parts stand." },
      { mock: "agent-reorder", title: "Parts orders", text: "Checks availability and places the order for pickup." },
      { mock: "agent-recall", title: "Recalls and reminders", text: "Finds every car due for service and books it." },
    ],
  }),
  specialty({
    slug: "body-shops", name: "Body shops", short: "body shops",
    subtitle: "Claims, quotes and repair status without the phone queue.",
    description: "AI voice agents for body and paint shops. Answer every call, take in claims, give repair status and book the estimate by your own rules.",
    media: VIDEOS.bodyshop,
    overlay: [
      { side: "start", kind: "user", name: "Caller", text: "Someone hit my parked car. My insurer said to call you for the repair." },
      { side: "end", kind: "agent", text: "I'm sorry to hear that. I have your claim number on file. I can book the estimate Thursday at 10:20. Shall I?" },
    ],
    cardsTitle: "Trusted for a body shop's most common calls",
    tabs: [
      { label: "Drivers", cards: [
        { title: "Estimate booking", text: "Damage assessments, photo requests and drop-off times, booked with the right duration." },
        { title: "Repair status", text: "Waiting on the insurer, parts on order, in paint or ready, read from your management system." },
        { title: "Insurance and claims", text: "Which insurers you work with, what a claim needs and what the excess is." },
        { title: "Rental and courtesy cars", text: "Replacement cars, pickup and return, agreed on the call." },
        { title: "Quotes and prices", text: "What a repair costs, what the quote covers and how long it takes." },
        { title: "Hours and locations", text: "Opening hours, directions and parking for every site." },
      ] },
      { label: "Front office", cards: [
        { title: "Overflow and after hours", text: "Calls reach Nekaf when the office is busy or closed." },
        { title: "Claim intake", text: "Claim number, insurer, damage description and photos collected before the estimate." },
        { title: "Status updates", text: "Customers are told when parts arrive and when the car is ready, without a call list." },
        { title: "Warm transfers", text: "Disputes, complaints and anything unclear reach a person with context." },
        { title: "No-show recovery", text: "Missed estimates called back within two hours." },
        { title: "Call summaries", text: "Every call transcribed and written to the job file." },
      ] },
      { label: "Owners", cards: [
        { title: "One standard per location", text: "Same rules and tone at every site." },
        { title: "Live dashboard", text: "Answer rate, estimates booked and status calls saved, per site." },
        { title: "Audit trail", text: "Every decision logged with its rule version." },
        { title: "Insurer rules", text: "Scripts that follow each insurer's process and your own approval rules." },
        { title: "Estimating sync", text: "Status read from CCC, Audatex, Mitchell or your system." },
        { title: "Multi-language", text: "English, Dutch, German and Spanish, per location." },
      ] },
    ],
    journeyTitle: "Better outcomes across the whole repair",
    journey: [
      { title: "Cut the wait to first estimate", text: "Claims read, drivers called and the right slot booked." },
      { title: "Route what matters", text: "Undriveable cars and insurer deadlines follow your rules and reach the right person." },
      { title: "Keep the paint booth full", text: "Reminders, no-show recovery and waitlist fills." },
      { title: "Give the front office its time back", text: "Status questions answered without staff." },
      { title: "Report like a team member", text: "Every call and outcome on one dashboard." },
    ],
    photo: PHOTOS.bodyshop, photoAlt: "Painter spraying a car door in a paint booth",
    quote: { quote: "Customers tell us the phone is finally easy. Our techs tell us the same.", name: "Dave", role: "Service manager, Legacy Auto Clinic" },
    agents: [
      { mock: "agent-frontdesk", title: "Front office", text: "Answers, books and reschedules, 24/7." },
      { mock: "agent-referral", title: "Claim intake", text: "Reads the claim, chases what's missing and prepares the estimate." },
      { mock: "agent-orders", title: "Repair status", text: "Tells callers where their car and parts stand." },
      { mock: "agent-noshow", title: "No-show recovery", text: "Rebooks missed estimates and reports what it recovered." },
    ],
  }),
  specialty({
    slug: "tire-centers", name: "Tire centers", short: "tire and fast-fit centers",
    subtitle: "Seasonal peaks answered. Every slot filled.",
    description: "AI voice agents for tire and fast-fit centers. Answer every call in the seasonal peak, book tire changes and quick services and check stock by phone.",
    media: VIDEOS.tire,
    overlay: [
      { side: "start", kind: "user", name: "Caller", text: "I need to switch to winter tires before the weekend." },
      { side: "end", kind: "agent", text: "Your winter set is in storage with us. Friday at 9:20 works, it takes about 45 minutes. Shall I book it?" },
    ],
    cardsTitle: "Trusted for a tire center's most common calls",
    tabs: [
      { label: "Drivers", cards: [
        { title: "Tire change booking", text: "Seasonal swaps, new sets and repairs, booked with the right duration and bay." },
        { title: "Stock and prices", text: "Which sizes and brands are in stock, what they cost and when they can be fitted." },
        { title: "Tire storage", text: "Where a stored set is, when it was last fitted and when to swap." },
        { title: "Quick services", text: "Oil changes, brakes, batteries, wipers and alignment, booked in minutes." },
        { title: "Puncture and roadside", text: "Flat tires and roadside calls follow your rules and reach the right person." },
        { title: "Hours and locations", text: "Opening hours, directions and waiting-room facilities for every branch." },
      ] },
      { label: "Front desk", cards: [
        { title: "Seasonal overflow", text: "The October and April peaks answered without voicemail." },
        { title: "Ready-for-pickup calls", text: "Customers are told the moment their car is done, so they stop calling to ask." },
        { title: "Reminders", text: "Seasonal swaps and worn-tread follow-ups booked without a call list." },
        { title: "Warm transfers", text: "Complaints and anything unclear reach a person with context." },
        { title: "No-show recovery", text: "Missed appointments called back and rebooked." },
        { title: "Call summaries", text: "Every call transcribed and written to the customer record." },
      ] },
      { label: "Branch managers", cards: [
        { title: "One standard per branch", text: "Same greeting and rules across the chain." },
        { title: "Live dashboard", text: "Answer rate, bookings and stock questions per branch." },
        { title: "Audit trail", text: "Every decision logged with its rule version." },
        { title: "Stock sync", text: "Availability and storage read from your tire management system." },
        { title: "Marketing follow-up", text: "Confirmations and reminders keep the seasonal calendar full." },
        { title: "Multi-language", text: "English, Dutch, German and Spanish, per branch." },
      ] },
    ],
    journeyTitle: "Better outcomes for drivers, branches and your team",
    journey: [
      { title: "Answer every driver at once", text: "No hold music, no voicemail, even on the first cold Saturday of October." },
      { title: "Route real emergencies", text: "Your rules decide what reaches the on-duty technician, and how fast." },
      { title: "Keep the bays full", text: "Reminders, recalls and no-show recovery protect every slot." },
      { title: "Free the front desk", text: "Stock and storage questions answered without staff." },
      { title: "See every branch at a glance", text: "One dashboard for calls and bookings across sites." },
    ],
    photo: PHOTOS.tireshop, photoAlt: "Tire technician showing a customer two tire options",
    quote: { quote: "Implementation was fast. We forwarded the number on a Tuesday and stopped missing calls on Thursday.", name: "Dave", role: "Service manager, Legacy Auto Clinic" },
    agents: [
      { mock: "agent-frontdesk", title: "Front desk", text: "Answers, books and reschedules, 24/7." },
      { mock: "agent-reorder", title: "Tire storage and swap", text: "Finds the stored set and books the seasonal change." },
      { mock: "agent-recall", title: "Reminders", text: "Seasonal swaps booked without a call list." },
      { mock: "agent-noshow", title: "No-show recovery", text: "Rebooks missed visits and reports what it recovered." },
    ],
  }),
];

/* ---------- customer stories ---------- */
const stories: Story[] = [
  {
    slug: "van-nuland",
    meta: { title: "Autobedrijf van Nuland | Nekaf", description: "How a family garage in Volkel went from 30% missed calls to none in the first month." },
    customer: "Autobedrijf van Nuland", logo: logos[0].src, logoAlt: "Autobedrijf van Nuland",
    title: "From 30% missed calls to none, in the first month.",
    hero: { image: PHOTOS.storyVannuland, alt: "Family garage reception" },
    stats: [{ value: "0%", label: "Calls unanswered" }, { value: ">60%", label: "Resolved without staff" }, { value: "+23%", label: "Bookings made" }],
    industry: "Independent garages",
    body: [
      { type: "h2", text: "One counter, one phone line, sixty years of customers." },
      { type: "p", text: "Autobedrijf van Nuland is a family garage in Volkel, in the south of the Netherlands, that has serviced all makes since 1962. The counter also checks cars in and hands keys back. At peak times and after 5 PM, a third of calls went unanswered, and half of the people who reached voicemail never called back." },
      { type: "p", text: "The garage forwarded its existing number to Nekaf. Booking, rescheduling, car-ready status and opening hours were configured in the first week, together with breakdown rules approved by the owner. Nekaf was live in under two weeks." },
      { type: "media", media: { kind: "mock", name: "story-vannuland" } },
      { type: "h2", text: "What changed." },
      { type: "p", text: "Every call is now answered on the first ring, even fifty at once. More than six in ten calls are completed end to end without staff: information, car-ready status and bookings. Breakdowns reach the mechanic on duty in seconds, with a summary." },
      { type: "p", text: "The numbers come from 8,420 incoming calls during May and June 2026. Callers who used to hang up now book, and after-hours callers book too. Bookings rose by 23 percent, and the counter got back around 170 hours a month." },
      { type: "quote", quote: "It knows the difference between an inspection booking and a car-ready question. Our counter finally has time for the customer standing in front of it.", name: "Bas", role: "Owner, Autobedrijf van Nuland" },
    ],
    card: { image: PHOTOS.frontdesk, alt: "Garage reception counter", stat: { value: "0%", label: "Calls unanswered" } },
  },
  {
    slug: "broekema",
    meta: { title: "Broekema | Nekaf", description: "How a two-location garage in Drenthe and Groningen stopped losing after-hours callers." },
    customer: "Broekema", logo: logos[1].src, logoAlt: "Broekema",
    title: "Answering every after-hours call across two locations.",
    hero: { image: PHOTOS.storyBroekema, alt: "Workshop with four bays" },
    stats: [{ value: "24/7", label: "Call coverage" }, { value: "2 sec", label: "Average response time" }, { value: "48 h", label: "Time to go live" }],
    industry: "Independent garages",
    body: [
      { type: "h2", text: "Two locations that grew faster than their phone system." },
      { type: "p", text: "Broekema runs all-makes garages in Zweeloo and Schildwolde, in the north of the Netherlands. Each site had its own line, its own greeting and its own gaps. After 5 PM and on Saturdays, calls went to a voicemail that only took messages." },
      { type: "p", text: "Nekaf now answers both locations with one standard. It books services, inspections and tire changes into the right bay, reads the group's breakdown rules and warm-transfers to the mechanic on duty with a summary." },
      { type: "media", media: { kind: "mock", name: "story-broekema" } },
      { type: "h2", text: "Live in 48 hours." },
      { type: "p", text: "The garage forwarded its numbers on a Tuesday. Nekaf was configured with the technicians, opening hours and rules the same day and went live on Thursday. The planner integration followed later, without interrupting the phones." },
      { type: "quote", quote: "Car-ready calls used to eat our afternoons. Now the phone tells people their car is done before they think to ask.", name: "Marieke", role: "Service manager, Broekema" },
    ],
    card: { image: PHOTOS.lift, alt: "Mechanic under a car on a lift", stat: { value: "24/7", label: "Call coverage" } },
  },
  {
    slug: "legacy-auto-clinic",
    meta: { title: "Legacy Auto Clinic | Nekaf", description: "How a family-owned shop in Castle Rock, Colorado took status and quote calls off the shop floor." },
    customer: "Legacy Auto Clinic", logo: logos[2].src, logoAlt: "Legacy Auto Clinic",
    title: "Status and quote calls, handled before the shop opens.",
    hero: { image: PHOTOS.storyLegacy, alt: "Auto repair shop with open bay doors" },
    stats: [{ value: ">60%", label: "Calls resolved without staff" }, { value: "≈170 h", label: "Staff hours saved per month" }],
    industry: "Independent garages",
    body: [
      { type: "h2", text: "Busy bays, busier phones." },
      { type: "p", text: "Legacy Auto Clinic is a family-owned repair shop in Castle Rock, Colorado, with ASE-certified technicians and a loyal local customer base. Most calls were about the same three things: is my car ready, what will it cost and when are you open. Every one of them pulled a technician off the lift or the service advisor away from a customer." },
      { type: "p", text: "Nekaf answers those calls from the shop management system and the schedule. Ready-for-pickup calls go out the moment a job is closed, so customers stop calling to ask. Quotes are read back with what they cover and what changed, and approvals are captured on the call." },
      { type: "media", media: { kind: "mock", name: "story-legacy" } },
      { type: "h2", text: "What the technicians noticed." },
      { type: "p", text: "Fewer interruptions, and calmer Mondays. Anything the agent can't answer, such as a warranty question or a complaint, reaches a person with the transcript attached." },
      { type: "quote", quote: "Customers tell us the phone is finally easy. Our techs tell us the same.", name: "Dave", role: "Service manager, Legacy Auto Clinic" },
    ],
    card: { image: PHOTOS.tireshop, alt: "Customer choosing tires at the counter", stat: { value: ">60%", label: "Resolved without staff" } },
  },
];

/* ---------- product pages ---------- */
const related = (exclude: string) =>
  [
    { key: "console", title: "Console", text: "Your day, already sorted. The morning brief, what needs you and every call in one place.", href: "/product/console", mock: "briefing", zoom: 1.1, linkLabel: "Discover more" },
    { key: "ask", title: "Ask Nekaf", text: "Connect your systems and ask anything about your own workshop. Free for 90 days.", href: "/product/ask-nekaf", mock: "insights-query", linkLabel: "Discover more" },
    { key: "agents", title: "Agents", text: "One job, one price, one dashboard. Start with the service desk and add the next agent in a click.", href: "/product/agents", mock: "agent-frontdesk", linkLabel: "Discover more" },
    { key: "integrations", title: "Integrations", text: "Works with your phone system, calendar and garage software. Start standalone, connect when ready.", href: "/product/integrations", mock: "hz-context", linkLabel: "Discover more" },
  ].filter((c) => c.key !== exclude);

const en: Site = {
  lang: "en",
  meta: {
    name: "Nekaf",
    titleSuffix: " | Nekaf",
    description: "AI voice agents for garages, dealerships, body shops and tire centers. Every customer call answered, every service appointment booked, 24/7.",
    tel: TEL, telDisplay: TEL_DISPLAY, email: EMAIL, calendly: CALENDLY, linkedin: LINKEDIN, signIn: SIGN_IN,
  },
  ui: {
    nav: {
      product: "Product", specialties: "Specialties", customers: "Customers", company: "Company", signIn: "Sign in", cta: bookDemo,
      productOverview: { title: "Product overview", text: "AI voice agents that answer, book and follow up, in one console.", button: "Meet Nekaf" },
      productGroups: [
        { label: "Operate", items: [
          { label: "Console", text: "Your day, already sorted.", href: "/product/console" },
          { label: "Ask Nekaf", text: "Free answers over your own workshop data.", href: "/product/ask-nekaf" },
        ] },
        { label: "Grow", items: [
          { label: "Agents", text: "Service desk, reminders, car-ready status and more.", href: "/product/agents" },
          { label: "Integrations", text: "Phone system, calendar and garage software.", href: "/product/integrations" },
        ] },
        { label: "Plans", items: [
          { label: "Pricing", text: "Simple monthly plans. No contracts.", href: "/pricing" },
        ] },
      ],
      specialtyItems: [
        { label: "Independent garages", text: "Every call answered, every bay booked.", href: "/specialties/garages" },
        { label: "Dealerships", text: "One standard across sales, service and parts.", href: "/specialties/dealerships" },
        { label: "Body shops", text: "Claims, quotes and repair status without the queue.", href: "/specialties/body-shops" },
        { label: "Tire centers", text: "Seasonal peaks answered, every slot filled.", href: "/specialties/tire-centers" },
      ],
      companyItems: [
        { label: "About", text: "Who builds Nekaf, and why.", href: "/about" },
        { label: "Careers", text: "Help the automotive aftermarket answer every call.", href: "/careers" },
        { label: "Resources", text: "Guides, comparisons and customer stories.", href: "/resources" },
        { label: "Book a demo", text: "Pick a time with a founder.", href: "/demo" },
      ],
      language: "Language", menu: "Menu", close: "Close",
    },
    footer: {
      tagline: "AI voice agents for the automotive aftermarket. Your workshop, running. Even when you aren't.",
      groups: [
        { title: "Product", items: [
          { label: "Product overview", href: "/product" }, { label: "Console", href: "/product/console" }, { label: "Ask Nekaf", href: "/product/ask-nekaf" }, { label: "Agents", href: "/product/agents" }, { label: "Integrations", href: "/product/integrations" }, { label: "Pricing", href: "/pricing" },
        ] },
        { title: "Specialties", items: [
          { label: "All specialties", href: "/specialties" }, { label: "Independent garages", href: "/specialties/garages" }, { label: "Dealerships", href: "/specialties/dealerships" }, { label: "Body shops", href: "/specialties/body-shops" }, { label: "Tire centers", href: "/specialties/tire-centers" },
        ] },
        { title: "Customers", items: [{ label: "Customer stories", href: "/customers" }, { label: "Autobedrijf van Nuland", href: "/customers/van-nuland" }, { label: "Broekema", href: "/customers/broekema" }, { label: "Legacy Auto Clinic", href: "/customers/legacy-auto-clinic" }] },
        { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Safety & Compliance", href: "/safety-compliance" }, { label: "Resources", href: "/resources" }, { label: "Careers", href: "/careers" }, { label: "Book a demo", href: "/demo" }, { label: "Sign in", href: SIGN_IN, external: true }] },
      ],
      legal: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms & Conditions", href: "/terms" }, { label: "Cookie Policy", href: "/cookies" }],
      copyright: "© 2026 Nekaf",
    },
    consent: {"text":"We use one analytics tool (PostHog, hosted in the EU) to see which pages help visitors. It runs only if you agree. No advertising cookies.","accept":"Accept analytics","decline":"Decline","policy":"Cookie policy"},
    common: {
      bookDemo: "Book a demo", callDemo: "Call the demo line", demoNote: "Talk to a founder. No obligations.", learnMore: "Learn more", readStory: "Read the story", readMore: "Read more", discoverMore: "Discover more", fullStory: "Full story", getStarted: "Get started", contactSales: "Contact sales", mostPopular: "Most popular", perMonth: "/month", playVideo: "Play video", pauseVideo: "Pause video", customerStories: "Customer stories", allSpecialties: "All specialties", openRoles: "Open roles", search: "Search", skip: "Skip to main content",
    },
  },

  home: {
    meta: { title: "AI voice agents for garages and dealerships | Nekaf", description: "AI voice agents for garages, dealerships, body shops and tire centers that answer questions, book service appointments and handle routine requests, 24/7." },
    hero: {
      title: "Every customer call answered.\nEvery bay booked.",
      subtitle: "AI voice agents for garages, dealerships, body shops and tire centers that answer questions, book service appointments and handle routine requests, 24/7.",
      primary: bookDemo, secondary: callDemo, note: "Talk to a founder. No obligations.",
      slides: [
        { ...VIDEOS.fold1, bubbles: [
          { side: "end", kind: "agent", text: "Thank you for calling Ridgeline Auto Care. This is Nekaf. How can I help?" },
          { side: "start", kind: "user", name: "Sarah", text: "My check engine light came on this morning and the car feels sluggish." },
          { side: "end", kind: "agent", text: "Let's have it looked at today. I can fit a diagnostic in at 2:40 PM with Marco. Shall I book it?" },
          { side: "start", kind: "user", name: "Sarah", text: "Yes, please." },
          { side: "end", kind: "agent", text: "Done. You're booked for 2:40 today. I've sent a confirmation by text." },
        ] },
        { ...VIDEOS.fold2, bubbles: [
          { side: "end", kind: "agent", text: "Thanks for calling Legacy Auto Clinic. This is Nekaf. How can I help?" },
          { side: "start", kind: "user", name: "Daniel", text: "I dropped my truck off this morning for brakes. Is it ready?" },
          { side: "end", kind: "agent", text: "Let me check. Can I have your license plate?" },
          { side: "start", kind: "user", name: "Daniel", text: "Colorado, 4-7-2 K-L-M." },
          { side: "end", kind: "agent", text: "The brakes are done and it's on its test drive now. Ready from 4 PM, Mr. Okafor. We're open until 6 today." },
        ] },
        { ...VIDEOS.fold3, bubbles: [
          { side: "end", kind: "agent", text: "Autobedrijf van Nuland, this is Nekaf. How can I help?" },
          { side: "start", kind: "user", name: "Lena", text: "I need to switch to winter tires before the weekend." },
          { side: "end", kind: "agent", text: "Your winter set is in storage with us. Friday at 9:20 works, it takes about 45 minutes. Shall I book it?" },
          { side: "start", kind: "user", name: "Lena", text: "Yes, Friday is fine." },
          { side: "end", kind: "agent", text: "Booked. You'll get a text reminder on Thursday. Anything else?" },
        ] },
      ],
    },
    logos: { title: "Handling hundreds of conversations daily at:", logos },
    demo: {
      title: "Hear Nekaf take a real call",
      lede: "Press play, or call the demo line and try it yourself.",
      sampleLabel: "Sample call · booking a checkup and a tire pressure question",
      duration: "1:42", play: "Play the sample call", stop: "Stop", hint: "The transcript follows the call.",
      call: callDemo, note: "It's Nekaf that answers.",
      transcript: [
        { who: "agent", at: 0, text: "Hi, I'm Alex, Brons Cars' digital assistant. This call may be recorded. How can I help?" },
        { who: "caller", at: 6.4, text: "Hi Alex, this is Peter speaking. I was wondering whether I could come in for a checkup on my car sometime next week." },
        { who: "agent", at: 15.5, text: "I understand you're looking to schedule a checkup for your car next week. I can help you with that. I've found your details on the number you're calling from. Could you confirm your name for me, Peter?" },
        { who: "caller", at: 25.6, text: "Yeah, that's Peter Johnson." },
        { who: "agent", at: 28.8, text: "Thanks, Peter Johnson. To get your checkup booked, what day and time next week works best for you?" },
        { who: "caller", at: 34.3, text: "Let me see. Maybe Tuesday afternoon." },
        { who: "agent", at: 40.4, text: "Tuesday afternoon works well. I've booked your service checkup for Tuesday at 2 PM, and I'll send you a confirmation text message to the number you're calling from. Is there anything else you need help with today?" },
        { who: "caller", at: 52.2, text: "Yeah, I was also wondering, because I forgot, what the tire pressure for my 2001 Mercedes C-Class should be." },
        { who: "agent", at: 62.5, text: "That's a great question, Peter. For a 2001 Mercedes C-Class the recommended tire pressure is typically around 32 to 35 psi for normal driving, but it can vary slightly with the specific model and tire size. You can usually find the exact specification on a sticker inside the driver's door jamb or in your owner's manual. Would you like me to check if we have that information in our records for your vehicle?" },
        { who: "caller", at: 88.3, text: "No, this is good. Thanks, I'll work with this. That's all." },
        { who: "agent", at: 93.4, text: "You're very welcome, Peter. We'll see you Tuesday afternoon for your checkup, and don't hesitate to call if you need anything else. Have a great day." },
      ],
    },
    bento: {
      title: "Your workshop, running.\nEven when you aren't.",
      lede: "Nekaf answers, books and follows up, so your team can focus on the car on the lift and the customer at the counter.",
      cards: [
        { id: "green", title: "Turn every call into a booked job", body: "Answer every call, day and night, and book straight into your workshop planner.", sr: "Animation showing calls from different garages being answered and booked." },
        { id: "blue", title: "Give every team its time back", body: "Service desk, technicians and managers stop working the phone and start working on cars.", sr: "Animation showing a service slot being picked and a tire change being booked." },
        { id: "pink", title: "One agent across every channel", body: "Voice first, with web chat, email, SMS and WhatsApp under the same rules.", sr: "Animation showing one conversation moving across voice, chat, email and SMS." },
        { id: "orange", title: "Pay for a job well done", body: "Simple monthly plans. No contracts. Cancel anytime.", sr: "Animation showing ratings and a completed outcome." },
      ],
    },
    console: { title: "Meet the console", lede: "Every call, booking and hand-off in one place. Ask anything in plain language." },
    proof: {
      title: "What changed when Nekaf took the phones",
      lede: "Measured at Broekema, before and after Nekaf took the phones.",
      outcomes: [
        { after: "+23%", label: "More service appointments booked", text: "After-hours callers and callers who used to hang up now book." },
        { after: "≈170 h", label: "Staff hours saved per month", text: "2,526 calls a month resolved without staff, at four minutes each." },
        { before: "4 min", after: "2 sec", label: "Average response time", text: "From four minutes on hold at peak times to an answer on the first ring." },
        { before: "0%", after: ">60%", label: "Resolved without staff", text: "More than six in ten calls are completed end to end: opening hours, car-ready status, bookings." },
        { before: "50%", after: "0%", label: "Missed callers never heard again", text: "Half the people who reached voicemail never called back. There is no voicemail anymore." },
        { before: "30%", after: "0%", label: "Calls never answered", text: "Nearly a third of calls went unanswered. Now every call is picked up, even 50 at once." },
      ],
      source: "Results from 8,420 incoming calls during May and June 2026 at Broekema.",
    },
    agents: {
      title: "Meet the agents",
      lede: "Each one does a job, end to end, and reports to you every day.",
      cta: { label: "All agents", href: "/product/agents" },
      tiles: [
        { mock: "agent-frontdesk", title: "Service desk", text: "Answers every call, books, reschedules and cancels, 24/7." },
        { mock: "agent-orders", title: "Car-ready status", text: "Tells callers where their car, parts or claim stand." },
        { mock: "agent-recall", title: "Reminders and recalls", text: "Finds every car due for service, inspection or a tire change and books it." },
        { mock: "agent-noshow", title: "No-show recovery", text: "Calls every no-show within two hours and rebooks." },
      ],
    },
    live: {
      title: "Live in 48 hours. Not 48 days.",
      lede: "Nothing to install, nothing to replace. Nekaf works standalone from day one.",
      steps: [
        { mock: "hz-proactive", title: "Forward your number", text: "Calls are routed to Nekaf: all of them, overflow or after hours. Your number stays the same." },
        { mock: "journeys", title: "We set up your rules", text: "Bays, technicians, opening hours, job durations and breakdown rules, configured with your team. You approve every response." },
        { mock: "ins-observability", title: "Go live", text: "Watch the first calls in your dashboard. Connect your garage software when you're ready." },
      ],
    },
    quotes: {
      title: "The results speak for themselves",
      lede: "Workshops that answer every call, in their own words.",
      items: [
        { quote: "It knows the difference between an inspection booking and a car-ready question. Our counter finally has time for the customer standing in front of it.", name: "Bas", role: "Owner, Autobedrijf van Nuland", logo: logos[0].src, logoAlt: "Autobedrijf van Nuland", ...PEOPLE.bas, href: "/customers/van-nuland" },
        { quote: "Customers tell us the phone is finally easy. Our techs tell us the same.", name: "Dave", role: "Service manager, Legacy Auto Clinic", logo: logos[2].src, logoAlt: "Legacy Auto Clinic", ...PEOPLE.dave, href: "/customers/legacy-auto-clinic" },
        { quote: "Car-ready calls used to eat our afternoons. Now the phone tells people their car is done before they think to ask.", name: "Marieke", role: "Service manager, Broekema", logo: logos[1].src, logoAlt: "Broekema", ...PEOPLE.marieke, href: "/customers/broekema" },
      ],
    },
    trust: { title: "Trust and reliability", text: "Nekaf is built for workshop accountability. Every rule, decision and hand-off is documented and auditable.", badges: TRUST_BADGES },
    cta,
  },

  product: {
    meta: { title: "Product overview | Nekaf", description: "AI voice agents that answer every call, book service appointments and route what matters. Voice first, with every channel in one console." },
    hero: {
      title: "Meet Nekaf",
      subtitle: "The voice agent that speaks workshop, answers on the first ring and never keeps a customer waiting",
      media: { kind: "video", src: VIDEOS.product.video, poster: VIDEOS.product.poster },
      overlay: [
        { side: "start", kind: "user", name: "Caller", text: "Can I move my service to Thursday?" },
        { side: "end", kind: "agent", text: "Done. Thursday 9:40 with Marco. Bring the key and the service book." },
      ],
      cta: { label: "Hear a sample call", href: "/#demo" },
    },
    sections: [
      { key: "voice", title: "Your voice agent", lede: "Natural conversation, not a phone menu. It listens, understands the request and completes the task.", mediaSide: "right", media: { kind: "mock", name: "agent-frontdesk" }, features: [
        { icon: "phone", title: "Answers every call, 24/7", text: "One caller or fifty at once. Day, night and weekend, with no hold time and no voicemail." },
        { icon: "calendar", title: "Books straight into your planner", text: "The right job type, the right technician, the right duration, confirmed by text." },
        { icon: "shield", title: "Routes what matters", text: "Breakdowns, warning lights and roadside calls: your rules decide, and the right person gets a summary in seconds." },
      ] },
      { key: "automotive", title: "The only voice agent purpose-built for the workshop", lede: "Built for independent garages and dealerships first, now also for body shops and tire centers. Trained on more than 10,000 automotive terms, part names and job types.", mediaSide: "left", media: { kind: "mock", name: "wheel" }, features: [
        { icon: "checklist", title: "Speaks your trade", text: "Knows a timing belt from a tire swap, quotes the right duration and books each job correctly." },
        { icon: "shield", title: "Follows your rules", text: "Job durations, technician skills, loaner cars and breakdown rules approved by your workshop manager." },
        { icon: "reverse", title: "Learns from every correction", text: "Mark any call as wrong in one click. The fix is tested before it goes live." },
      ] },
      { key: "channels", title: "One agent across every channel", lede: "Voice first. Web chat, email, SMS and WhatsApp follow the same rules and the same oversight.", mediaSide: "right", media: { kind: "mock", name: "channels-hero" }, features: [
        { icon: "phone", title: "Voice", text: "Inbound and outbound calls on your existing number." },
        { icon: "chat", title: "Web chat and email", text: "Questions from your website and shared inbox, answered from the same scripts." },
        { icon: "sms", title: "SMS and WhatsApp", text: "Confirmations, reminders and car-ready messages where customers already are." },
      ] },
      { key: "trust", title: "Trust and safety", lede: "Every agent is checked. Every decision that matters is yours.", mediaSide: "left", media: { kind: "mock", name: "ins-observability" }, features: [
        { icon: "eye", title: "The Reviewer", text: "A supervising agent scores sampled conversations on accuracy, tone and your rules. You see the scores." },
        { icon: "user", title: "Human handoff", text: "Warranty disputes, complaints, complex diagnoses and doubt go to your team with the transcript." },
        { icon: "lock", title: "Full audit trail", text: "Every call, message and booking logged and sourced. GDPR, EU data residency." },
      ] },
    ],
    quote: { logo: logos[0].src, logoAlt: "Autobedrijf van Nuland", quote: "It knows the difference between an inspection booking and a car-ready question. Our counter finally has time for the customer standing in front of it.", name: "Bas", role: "Owner, Autobedrijf van Nuland", link: { label: "Full story", href: "/customers/van-nuland" } },
    trust,
    pricingTeaser: { title: "Pricing that follows results", text: "Starting from $299 a month. No setup fees, no contracts. If Nekaf delivers no results, you pay nothing.", link: { label: "See pricing", href: "/pricing" }, mock: "pricing-card" },
    related: { title: "Explore the platform", cards: related("") },
    cta,
  },

  consolePage: {
    meta: { title: "Console | Nekaf", description: "The Nekaf console: the morning brief, what needs you, every call and booking, and a command bar that understands plain language." },
    hero: { title: "Console", subtitle: "Your day, already sorted", media: { kind: "mock", name: "dashboard-full" } },
    sections: [
      { key: "today", title: "Start with the brief", lede: "The console opens on what happened overnight and what needs you today. No typing required.", mediaSide: "right", media: { kind: "mock", name: "briefing", zoom: 1.15 }, features: [
        { icon: "sun", title: "Morning brief", text: "Calls answered, bookings made, breakdowns routed and anything unusual, written for you each morning." },
        { icon: "inbox", title: "Needs you", text: "Approvals, transfers and flagged calls in one queue, with full context attached." },
        { icon: "status", title: "Agent status", text: "Every agent's work count and state in the left rail, per location." },
      ] },
      { key: "dashboards", title: "Dashboards that read like a team member's report", lede: "Click an agent and see its work: answer rate, bookings, handle time, hand-offs and quality scores.", mediaSide: "left", media: { kind: "mock", name: "reporting", zoom: 1.15 }, features: [
        { icon: "chart", title: "Outcomes, not sends", text: "Bookings made, bay hours recovered and call hours absorbed, next to what the agent costs." },
        { icon: "eye", title: "Reviewer panel", text: "Sampled-call pass rate and flagged runs, visible on every dashboard." },
        { icon: "pause", title: "Pause in one click", text: "Any agent, any location, any time." },
      ] },
      { key: "command", title: "Run the day from one bar", lede: "One bar at the bottom of every screen. Pause an agent, change a rule or approve a transfer in a sentence, in English, Dutch or German.", mediaSide: "right", media: { kind: "mock", name: "insights-query", zoom: 1.15 }, features: [
        { icon: "search", title: "Sourced answers", text: "Every answer cites the system and sync time it came from." },
        { icon: "undo", title: "Actions with an audit line", text: "Every change carries a reference and, where possible, an undo." },
        { icon: "phone", title: "On your phone too", text: "The same console as an app, with push for approvals and the brief." },
      ] },
    ],
    quote: { logo: logos[2].src, logoAlt: "Legacy Auto Clinic", quote: "Customers tell us the phone is finally easy. Our techs tell us the same.", name: "Dave", role: "Service manager, Legacy Auto Clinic", link: { label: "Full story", href: "/customers/legacy-auto-clinic" } },
    related: { title: "Related products", cards: related("console") },
    cta,
  },

  askNekaf: {
    meta: { title: "Ask Nekaf | Nekaf", description: "Connect your planner, call log and documents, then ask anything about your own workshop. Free for 90 days, included with every live agent." },
    hero: { title: "Ask Nekaf", subtitle: "Free answers over your own workshop data", media: { kind: "video", src: VIDEOS.insights.video, poster: VIDEOS.insights.poster } },
    sections: [
      { key: "connect", title: "Connect, then ask", lede: "Read-only access to your planner, call log and shared mailbox. Unlimited users. Free for 90 days.", mediaSide: "right", media: { kind: "mock", name: "explorer-table", zoom: 1.15 }, features: [
        { icon: "plug", title: "Standard connectors", text: "Calendar, phone system, garage software export and the shared mailbox, connected in a day." },
        { icon: "search", title: "Ask anything", text: "No-shows per location, unanswered calls last week, cars waiting on parts, revenue booked next month." },
        { icon: "doc", title: "Answers with sources", text: "Prose plus tables, with the system and sync time behind every number." },
      ] },
      { key: "baseline", title: "Your baseline, in your own numbers", lede: "Week one produces a standing report on the six numbers you already report upward.", mediaSide: "left", media: { kind: "mock", name: "briefing", zoom: 1.15 }, features: [
        { icon: "chart", title: "Six access metrics", text: "Speed of answer, abandonment rate, booking accuracy, calls per service advisor, after-hours volume and bay utilisation." },
        { icon: "trend", title: "Plus what you're losing", text: "Recovered bookings and the parts backlog, so the case for the first agent is your own data." },
        { icon: "reverse", title: "Re-reported monthly", text: "The delta is always your number, not ours." },
      ] },
      { key: "next", title: "The wedge for the next agent", lede: "When the free layer shows what you're missing, hire the agent that fixes it. Included with every live agent after the trial.", mediaSide: "right", media: { kind: "mock", name: "recommendations", zoom: 1.15 }, features: [
        { icon: "sparkles", title: "Insights that point somewhere", text: "Every finding links to the agent that would change it." },
        { icon: "lock", title: "Read-only by design", text: "The free layer never writes to your systems." },
        { icon: "calendar", title: "An end date on every trial", text: "90 days, then included with any live agent. No surprises." },
      ] },
    ],
    related: { title: "Related products", cards: related("ask") },
    cta: { ...cta, title: "Connect your data this week", text: "Free for 90 days. See your own baseline before you decide anything.", primary: { label: "Start free", href: "/demo" } },
  },

  agentsPage: {
    meta: { title: "Agents | Nekaf", description: "Hire AI agents for the service desk, car-ready status, reminders, no-show recovery and more. One job, one price, one dashboard." },
    hero: { title: "Agents", subtitle: "Hired like staff. Proven before trusted.", media: { kind: "mock", name: "agent-studio-hero" } },
    sections: [
      { key: "hire", title: "Hire an agent in a click", lede: "Start with one. Add the next in a click. Switch any of them off whenever you want.", mediaSide: "right", media: { kind: "mock", name: "simulations", zoom: 1.15 }, features: [
        { icon: "chat", title: "Conversational setup", text: "The agent proposes rules from your workshop data. You amend them in plain language and approve." },
        { icon: "eye", title: "Shadow mode", text: "A week on real calls without acting. You see everything it would have done, scored by the Reviewer." },
        { icon: "check", title: "Sign-off, then live", text: "Billing starts the day you flip the switch. Not before." },
      ] },
      { key: "journeys", title: "Agents that finish the job", lede: "Quote out, car booked, customer informed, no-show recovered. Each agent owns one outcome end to end.", mediaSide: "left", media: { kind: "mock", name: "hz-optimization" }, features: [
        { icon: "flag", title: "Quote to booking", text: "Follows up every open quote, answers the questions and books the job." },
        { icon: "calendar", title: "Reminders and recalls", text: "Finds every car due for service, inspection or a seasonal tire change, calls until booked and cuts no-shows before they happen." },
        { icon: "reverse", title: "No-show recovery and waitlist", text: "Calls within two hours, rebooks, and fills cancelled slots from the waitlist." },
      ] },
    ],
    library: {
      title: "The agent library",
      lede: "Every agent has one job. Start with one, add the next in a click.",
      classes: { voice: "Voice", digital: "Digital" },
      items: [
        { name: "Service desk", job: "Answers routine questions 24/7 from your approved scripts and routes breakdowns by your rules.", cls: "voice", from: "Included in every plan" },
        { name: "Booking, reschedule and cancel", job: "Books, moves and cancels service appointments on every call, straight into your planner.", cls: "voice", from: "Included in every plan" },
        { name: "Car-ready status", job: "Tells callers where their car, parts or claim stand, without a queue.", cls: "voice", from: "Professional plan" },
        { name: "Reminders and recalls", job: "Finds every car due for service, inspection or a tire change and calls until it's booked.", cls: "voice", from: "Professional plan" },
        { name: "No-show recovery", job: "Calls every no-show within two hours and rebooks into the first suitable slot.", cls: "voice", from: "Professional plan" },
        { name: "Waitlist auto-fill", job: "When a slot opens, works down your waitlist until it's filled.", cls: "voice", from: "Professional plan" },
        { name: "Quote follow-up", job: "Chases every open quote, answers the questions and turns approvals into bookings.", cls: "digital", from: "Professional plan" },
        { name: "Intake and check-in", job: "Collects mileage, symptoms and photos before the visit and confirms the drop-off.", cls: "digital", from: "Professional plan" },
        { name: "Web chat and email", job: "Answers questions from your website and inbox with the same rules as the phone.", cls: "digital", from: "Professional plan" },
        { name: "Post-repair follow-up", job: "Calls every customer after a repair, asks your questions and flags problems to your team.", cls: "voice", from: "Enterprise" },
        { name: "Claim and estimate review", job: "Checks claims and estimates for missing photos, parts and approvals before they reach the insurer.", cls: "digital", from: "Enterprise" },
        { name: "Customer billing", job: "Answers invoice questions and sends payment links. Disputes go to your team.", cls: "digital", from: "Enterprise" },
      ],
    },
    quote: { logo: logos[1].src, logoAlt: "Broekema", quote: "Car-ready calls used to eat our afternoons. Now the phone tells people their car is done before they think to ask.", name: "Marieke", role: "Service manager, Broekema", link: { label: "Full story", href: "/customers/broekema" } },
    related: { title: "Related products", cards: related("agents") },
    cta,
  },

  integrations: {
    meta: { title: "Integrations | Nekaf", description: "Nekaf works with your phone system, calendar, workshop planner and dealer management system. Start standalone, connect when ready." },
    hero: { title: "Integrations", subtitle: "Works with the systems you already use", media: { kind: "mock", name: "integrations" } },
    sections: [
      { key: "phone", title: "Your number stays the same", lede: "VoIP, landline or cloud. Calls are forwarded to Nekaf. Nothing is replaced.", mediaSide: "right", media: { kind: "mock", name: "voice-green" }, features: [
        { icon: "phone", title: "Any phone system", text: "RingCentral, Zoom Phone, Twilio, Vonage, a PBX or a SIP trunk." },
        { icon: "reverse", title: "Ring-through fallback", text: "If Nekaf can't take a call, it rings your team. Tested in every go-live." },
        { icon: "clock", title: "Overflow and after hours", text: "Forward all calls, only overflow, or only when you're closed." },
      ] },
      { key: "dms", title: "Bookings written where they belong", lede: "Two-way sync with your calendar, workshop planner or dealer management system, when you're ready.", mediaSide: "left", media: { kind: "mock", name: "hz-context" }, features: [
        { icon: "calendar", title: "Calendar first", text: "Google, Outlook and Cal.com connected on day one, so every booking finishes in your own system." },
        { icon: "doc", title: "Garage and dealer software", text: "Autoflex, Autotaal, WinCar, CarSys, Werbas, Loco-Soft, Tekmetric, Shopmonkey, Keyloop, CDK and more, via API." },
        { icon: "check", title: "Verified writes", text: "Every booking is read back before it's confirmed to the customer. No double bookings, no manual entry." },
      ] },
      { key: "data", title: "Built to hold customer and vehicle data", lede: "Structured around plate, VIN and customer from the first day, so every record is already in the shape your systems expect.", mediaSide: "right", media: { kind: "mock", name: "governance" }, features: [
        { icon: "lock", title: "Encrypted and in-region", text: "AES-256 at rest, TLS 1.3 in transit, EU or US data residency." },
        { icon: "shield", title: "Least privilege", text: "Read-only first. Write access per agent, per action, logged and reversible." },
        { icon: "plug", title: "API and MCP", text: "Any system with an open API or MCP server, scoped per deal." },
      ] },
    ],
    logos: {
      title: "Works with what you have",
      lede: "Start standalone. Connect your planner, dealer system and phone system when ready.",
      more: "+20 integration partners",
      groups: [
        { label: "Garage management, Netherlands and Germany", items: INTEGRATION_LOGOS.garage },
        { label: "Shop management, United States", items: INTEGRATION_LOGOS.shop },
        { label: "Dealer management systems", items: INTEGRATION_LOGOS.dealer },
        { label: "Body shop and estimating", items: INTEGRATION_LOGOS.body },
        { label: "Phone systems", items: INTEGRATION_LOGOS.phone },
        { label: "Calendar and CRM", items: INTEGRATION_LOGOS.tools },
      ],
    },
    related: { title: "Related products", cards: related("integrations") },
    cta,
  },

  pricing: {
    meta: { title: "Pricing | Nekaf", description: "Outcome-based pricing for AI voice agents. Starting from $299 per month. If Nekaf delivers no results, you pay nothing." },
    title: "Pricing that follows results",
    lede: "You pay for what Nekaf delivers, not for seats or minutes.",
    from: "Starting from $299 per month",
    how: {
      title: "How outcome-based pricing works",
      lede: "One monthly amount, tied to what the agent actually does for your workshop.",
      items: [
        { icon: "phone", title: "A monthly fee from $299", text: "Covers the agent, the console, unlimited users, setup and support. No per-seat or per-minute charges." },
        { icon: "chart", title: "Tied to results", text: "The fee follows the outcomes Nekaf delivers: calls answered, jobs booked, no-shows recovered. We agree the targets with you up front." },
        { icon: "shield", title: "No results, no cost", text: "In a month where Nekaf books nothing and resolves nothing, you pay nothing. We take that risk, not you." },
      ],
    },
    stats: { title: "The math makes sense", items: [{ value: "~$0/day", label: "if no results are made" }, { value: "$10K+", label: "typical monthly savings" }, { value: "20%", label: "average revenue increase" }] },
    calc: { title: "What the phone is costing you", text: "Move the sliders to your own numbers. The math is deliberately conservative.", calls: "Incoming calls per month", missed: "Calls missed today", value: "Value of one workshop job", recovered: "jobs recovered per month", revenue: "revenue recovered per month", typical: "We typically see 20 to 30% at workshops before they start.", note: "Recovered jobs = missed calls × 50% who never call back × 35% who wanted to book. Figures from actual clients.", currency: "$" },
    faq: {
      title: "Pricing questions",
      items: [
        { q: "What counts as a result?", a: "An outcome the agent completes end to end: a call answered and resolved, a service appointment booked or moved, a no-show rebooked, a car-ready status confirmed. You see every one of them in the console." },
        { q: "What do I pay in a month with no results?", a: "Nothing. The monthly fee only applies when Nekaf delivers the outcomes we agreed on." },
        { q: "How is the fee set for my workshop?", a: "We look at your call volume and the outcomes that matter to you, then agree a monthly fee and targets before you start. Multi-location groups get a group agreement." },
        { q: "Are there per-minute or per-user charges?", a: "No. Minutes and users are unlimited. The fee is tied to outcomes, not usage." },
        { q: "Are there setup fees?", a: "No. Setup, configuration and onboarding are included." },
        { q: "Can I cancel?", a: "Yes, monthly. There are no long contracts." },
        { q: "Is there a trial?", a: "Yes. Ask Nekaf is free for 90 days, and every agent runs a week in shadow mode before it goes live." },
      ],
    },
    cta: { title: "Get a quote for your workshop", text: "We model recovered bookings and staff hours on your own call volume, then agree the targets with you.", primary: contactSales, secondary: callDemo, note: "Talk to a founder. No obligations." },
  },

  specialties: {
    meta: { title: "Specialties | Nekaf", description: "AI voice agents for independent garages, dealerships, body shops and tire centers." },
    title: "Your voice agent for the automotive aftermarket.",
    lede: "Built for the calls your workshop actually gets. Independent garages, dealerships, body shops and tire centers.",
    logos: { title: "", logos },
    quote: { logo: logos[0].src, logoAlt: "Autobedrijf van Nuland", quote: "It knows the difference between an inspection booking and a car-ready question. Our counter finally has time for the customer standing in front of it.", name: "Bas", role: "Owner, Autobedrijf van Nuland", link: { label: "Full story", href: "/customers/van-nuland" } },
    cta,
    pages: specialties,
  },

  customers: {
    meta: { title: "Customer stories | Nekaf", description: "Workshops that answer every call, in their own words." },
    title: "Our customers\nin their own words",
    heroImage: { src: PHOTOS.team, alt: "Garage team in front of the workshop", logo: logos[0].src, logoAlt: "Autobedrijf van Nuland" },
    storiesTitle: "These are their stories",
    featuredTitle: "Featured stories",
    gridTitle: "Leaders in\nautomotive service",
    stories,
    moreTitle: "More customer stories",
    cta,
  },

  about: {
    meta: { title: "About | Nekaf", description: "Nekaf reduces friction in automotive service: for drivers, for service advisors and for technicians." },
    title: "Who we are\nand why we're here.",
    lede: "AI voice agents for the automotive aftermarket, built in Amsterdam.",
    image: { src: PHOTOS.workshop, alt: "Modern workshop bay" },
    statement: { title: "Nekaf reduces friction in automotive service: for drivers, for service advisors and for technicians.", text: "The front end of every workshop visit is often the most frustrating part. Phones ringing at the counter, cars waiting on a call-back and technicians pulled off the lift to answer questions. We built Nekaf to fix that, starting with the phone." },
    values: [
      { icon: "shield", title: "Your rules first", text: "Every feature, every rule and every hand-off is designed so that your team stays in control. Nekaf never promises a repair it cannot see and never overrides your workshop's judgment. That's a design principle, not a disclaimer." },
      { icon: "bolt", title: "Speed to value", text: "Live in days, not months. A workshop forwards its number, approves its rules and sees the first calls in its dashboard the same week." },
      { icon: "chart", title: "Proof over promises", text: "We measure everything and show you the numbers. If something isn't working, we tell you and fix it." },
    ],
    founders: {
      title: "Our founders",
      lede: "Nekaf was founded by Peter-Paul de Leeuw and Thomas Brits, who bring fifteen years of building and selling software companies in Europe to the workshop counter.",
      people: [
        { name: "Peter-Paul de Leeuw", role: "Co-founder and CEO", image: PHOTOS.peterpaul, text: "Peter-Paul co-founded Amberscript, the Amsterdam speech-to-text company, in 2017 and led it as CEO for seven years, growing it into a European business and acquiring two competitors along the way. Speech recognition, language models and customers who need them to work every day have been his job since. At Nekaf he leads product and the customer side." },
        { name: "Thomas Brits", role: "Co-founder and CCO", image: PHOTOS.thomas, text: "Thomas has spent his career selling and scaling developer and enterprise software. At GitHub he built the enterprise business for the Benelux and went on to lead regional sales for Northern Europe, working with the largest companies in the region on how they adopt AI. At Nekaf he owns go-to-market and partnerships." },
      ],
    },
    offices: { title: "Our office", text: "Based in {cities}, we work with workshops in the Netherlands, Germany and the United States.", cities: ["Amsterdam"] },
    cta: { ...cta, title: "Want to know more?", text: "Tell us about your workshop and we'll show you what Nekaf would do with your calls." },
  },

  resources: {
    meta: { title: "Resources | Nekaf", description: "Guides, comparisons and customer stories on AI voice agents for garages, dealerships, body shops and tire centers." },
    title: "Resources",
    filters: [{ key: "all", label: "Featured" }, { key: "learn", label: "Guides" }, { key: "compare", label: "Comparisons" }, { key: "case", label: "Customer stories" }, { key: "blog", label: "Blog" }],
    readTime: "min read",
    backLabel: "All resources",
    cta,
  },

  careers: {
    meta: { title: "Careers | Nekaf", description: "Help the automotive aftermarket answer every call. Open roles at Nekaf." },
    title: "Hi, we're Nekaf.\nWe'd love for you to join us.",
    lede: "Build the agents that answer the phone for the automotive aftermarket.",
    cta: { label: "Open roles", href: "#open-roles" },
    image: { src: PHOTOS.team, alt: "Garage team at work" },
    statement: "We're a small team building AI agents that workshops hire, supervise and pay for like staff. Our work sits between drivers and technicians, so we take accuracy and proof seriously and we ship every week. If you like real customers, real data and hard problems, come and build with us.",
    culture: [
      { icon: "marker", title: "Amsterdam", text: "We work from Amsterdam and spend most of our time in workshops. Remote works when the job allows it." },
      { icon: "heart", title: "Customer zero", text: "We run Nekaf on Nekaf. Our own finance, sales ops and support run on the agents we sell." },
      { icon: "sparkles", title: "Small team, big leverage", text: "Two founders, a hands-on tech lead and agentic tooling. You'll own whole outcomes, not tickets." },
      { icon: "users", title: "Workshop partners", text: "Design partners in the Netherlands and Colorado review what we build before it reaches a customer." },
    ],
    interviewing: { title: "Interviewing at Nekaf", paragraphs: ["We hire for judgment and pace. You'll meet the founders, work through a real problem from our backlog and talk to a customer.", "Interviews take place in Amsterdam or on a call. Either way, you'll see how we work before you decide."] },
    roles: {
      title: "Open roles", lede: "We're looking for people who want to build something workshops rely on every day.",
      groups: [
        { name: "Go to market", roles: [
          { title: "Founding account executive, US", location: "Remote, US", href: "mailto:" + EMAIL + "?subject=Account%20executive" },
          { title: "Customer success, automotive", location: "Amsterdam", href: "mailto:" + EMAIL + "?subject=Customer%20success" },
        ] },
        { name: "Engineering", roles: [
          { title: "Founding engineer, voice agents", location: "Amsterdam", href: "mailto:" + EMAIL + "?subject=Founding%20engineer" },
        ] },
      ],
    },
    finalCta: { title: "Don't see your role?", text: "Tell us what you'd build. We read every message.", primary: { label: "Email us", href: "mailto:" + EMAIL }, note: "" },
  },

  demo: {
    meta: { title: "Book a demo | Nekaf", description: "Pick a time with a founder and hear Nekaf take a call for your workshop. No obligations." },
    title: "Pick a time with a founder.",
    points: [
      { icon: "phone", text: "Every customer call answered, 24/7, on your existing number." },
      { icon: "calendar", text: "Service appointments booked straight into your planner or dealer system." },
      { icon: "shield", text: "Breakdowns and warning lights routed by your rules, with a summary." },
    ],
    trustedTitle: "Trusted by",
    booking: { title: "Choose a slot", text: "30 minutes with Peter-Paul. We hear your call volume and show what Nekaf would do with your calls.", fallback: { label: "Send a demo request", href: CALENDLY, external: true }, note: "No obligations." },
  },

  legal: { ...LEGAL.en, cookies: COOKIES.en, safety: SAFETY.en },
};

export default en;
