import type { Site, SpecialtyPage, Story } from "./types";
import { LEGAL } from "./legal";
import { COOKIES, SAFETY } from "./policies";
import { BADGES, CALENDLY, CUSTOMER_LOGOS, EMAIL, INTEGRATION_LOGOS, LINKEDIN, PEOPLE, PHOTOS, SIGN_IN, TEL_NL as TEL, TEL_NL_DISPLAY as TEL_DISPLAY, VIDEOS } from "./shared";

const callDemo = { label: "Bel de demolijn", href: TEL };
const contactSales = { label: "Neem contact op", href: "/demo" };
const bookDemo = { label: "Demo aanvragen", href: "/demo" };
const logos = CUSTOMER_LOGOS(["/customers/van-nuland", "/customers/broekema", "/customers/legacy-auto-clinic"]);

const TRUST_BADGES = [
  { src: BADGES.soc1, alt: "SOC 1 geauditeerde controles" },
  { src: BADGES.iso27001, alt: "ISO 27001 informatiebeveiliging" },
  { src: BADGES.gdpr, alt: "AVG / GDPR" },
  { src: BADGES.euai, alt: "Klaar voor de EU AI Act" },
];

const trust = {
  title: "Gebouwd voor verantwoording in de werkplaats",
  text: "Elke regel, elke beslissing en elke overdracht is gedocumenteerd en controleerbaar.",
  badges: TRUST_BADGES,
};

const cta = {
  title: "Zie hoeveel meer oproepen u kunt beantwoorden",
  text: "We rekenen teruggewonnen afspraken en personeelsuren door op uw eigen belvolume.",
  primary: bookDemo,
  secondary: callDemo,
  note: "Spreek met een oprichter. Vrijblijvend.",
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
    logos: { title: "Handelt dagelijks honderden gesprekken af bij:", logos },
    cards: { title: s.cardsTitle, tabs: s.tabs },
    journey: { title: s.journeyTitle, features: s.journey, media: { kind: "image", src: s.photo, alt: s.photoAlt }, mediaSide: "right", tone: "product" },
    quote: s.quote,
    agents: { title: "Agents voor " + s.short, cta: { label: "Alle agents", href: "/product/agents" }, tiles: s.agents },
    trust: { ...trust, title: "Gebouwd voor " + s.short + ": vertrouwen en privacy" },
    cta,
  };
}

const specialties: SpecialtyPage[] = [
  specialty({
    slug: "garages", name: "Onafhankelijke garages", short: "onafhankelijke garages",
    subtitle: "Elke oproep beantwoord. Elke brug volgeboekt.",
    description: "AI voice agents voor onafhankelijke garages. Beantwoord elke oproep, plan de juiste klus op de juiste brug en routeer pechgevallen volgens uw eigen regels.",
    media: VIDEOS.garage,
    overlay: [
      { side: "start", kind: "user", name: "Beller", text: "Mijn motorstoringslampje brandt sinds vanochtend en de auto trekt slecht op." },
      { side: "end", kind: "agent", text: "Laten we er vandaag naar kijken. Ik kan om 14:40 een diagnose inplannen bij Marco. Zal ik dat doen?" },
    ],
    cardsTitle: "Vertrouwd voor de meest voorkomende oproepen bij een garage",
    tabs: [
      { label: "Automobilisten", cards: [
        { title: "Onderhoud en APK inplannen", text: "Onderhoudsbeurten, APK-keuringen, remmen en distributieriemen, ingepland met de juiste duur en de juiste monteur." },
        { title: "Waarschuwingslampjes en pech", text: "Motorstoringslampjes, oververhitting en pech onderweg volgen uw regels en bereiken in seconden de juiste persoon." },
        { title: "Is mijn auto klaar?", text: "Gelezen uit uw werkplaatsplanning: op de brug, wachtend op onderdelen of klaar om op te halen, met de tijd erbij." },
        { title: "Offertes en prijzen", text: "Wat een klus kost, wat er in de offerte zat en wat er veranderde, uit uw eigen prijslijst." },
        { title: "Leenauto's en ophalen", text: "Leenauto's, brengtijden en ophaalmomenten, afgesproken in het gesprek." },
        { title: "Route en openingstijden", text: "Locaties, parkeren, openingstijden en feestdagen, direct beantwoord." },
      ] },
      { label: "Balie", cards: [
        { title: "Overloop en buiten openingstijden", text: "Oproepen gaan naar Nekaf als de balie bezet of gesloten is. Niets gaat naar de voicemail." },
        { title: "Warme doorverbinding", text: "Complexe of boze bellers bereiken een medewerker met het transcript en een samenvatting." },
        { title: "Herinneringen en oproepen", text: "Bevestigingen, herinneringen en APK-oproepen gaan automatisch en landen in de planning." },
        { title: "No-show herstel", text: "Gemiste afspraken worden binnen twee uur teruggebeld en opnieuw ingepland." },
        { title: "Wachtlijst vullen", text: "Een vrijgekomen plek wordt aan de wachtlijst aangeboden tot hij gevuld is." },
        { title: "Gesprekssamenvattingen", text: "Elk gesprek wordt getranscribeerd, getagd en in de klantkaart geschreven." },
      ] },
      { label: "Eigenaren", cards: [
        { title: "Eén standaard per vestiging", text: "Elke vestiging klinkt hetzelfde en volgt dezelfde regels." },
        { title: "Live dashboard", text: "Beantwoordpercentage, afspraken, doorgezette pechgevallen en gespreksduur, per vestiging en per dag." },
        { title: "Audittrail", text: "Elke beslissing gelogd, met de regelversie die haar produceerde." },
        { title: "Uw regels, door u goedgekeurd", text: "Klusduren, vaardigheden van monteurs en escalatieregels, goedgekeurd door de werkplaatschef voordat ze live gaan." },
        { title: "Planningskoppeling", text: "Afspraken geschreven naar Autoflex, Autotaal, WinCar, Tekmetric, Shopmonkey of uw systeem." },
        { title: "Meertalig", text: "Nederlands, Engels, Duits en Spaans, per vestiging." },
      ] },
    ],
    journeyTitle: "Betere uitkomsten tijdens het hele werkplaatsbezoek",
    journey: [
      { title: "Krijg auto's sneller op de juiste brug", text: "Direct opnemen, de reden van de oproep herkennen en het juiste type werkzaamheden bij de juiste monteur inplannen." },
      { title: "Routeer wat ertoe doet", text: "Pech en waarschuwingslampjes volgen de regels die uw werkplaatschef heeft goedgekeurd. Nooit een gok." },
      { title: "Houd de planning vol", text: "Herinneringen, oproepen, no-show herstel en wachtlijstvulling beschermen elk uur op de brug." },
      { title: "Geef de balie haar tijd terug", text: "Routinevragen worden zonder medewerker beantwoord. Complexe vragen komen met context binnen." },
      { title: "Rapporteert als een teamlid", text: "Elke oproep, uitkomst en overdracht op één dashboard." },
    ],
    photo: PHOTOS.lift, photoAlt: "Monteur vervangt een remschijf onder een auto op de brug",
    quote: { quote: "Het kent het verschil tussen een APK-afspraak en de vraag of een auto klaar is. Onze mensen aan de balie hebben eindelijk tijd voor de klant die voor hen staat.", name: "Bas", role: "Eigenaar, Autobedrijf van Nuland" },
    agents: [
      { mock: "agent-frontdesk", title: "Balie", text: "Beantwoordt, plant in en verzet, 24/7." },
      { mock: "agent-urgent", title: "Pechroutering", text: "Past uw pechregels toe en verbindt door met een samenvatting." },
      { mock: "agent-orders", title: "Status van de auto", text: "Vertelt bellers hoe het staat met hun auto en onderdelen." },
      { mock: "agent-noshow", title: "No-show herstel", text: "Plant gemiste bezoeken opnieuw in en rapporteert de teruggewonnen brugtijd." },
    ],
  }),
  specialty({
    slug: "dealerships", name: "Dealers", short: "dealers",
    subtitle: "Eén standaard voor verkoop, service en onderdelen.",
    description: "AI voice agents voor autodealers. Beantwoord elke service-, onderdelen- en verkoopoproep, plan in uw dealersysteem en houd elke vestiging consistent.",
    media: VIDEOS.dealer,
    overlay: [
      { side: "start", kind: "user", name: "Beller", text: "Is mijn auto klaar? Ik heb hem vanochtend gebracht voor de 60.000 km-beurt." },
      { side: "end", kind: "agent", text: "Hij wordt nu gewassen, meneer Okafor. Klaar vanaf 16:00. We zijn vandaag open tot 18:00 en zaterdag van 9 tot 13." },
    ],
    cardsTitle: "Vertrouwd voor de meest voorkomende oproepen bij een dealer",
    tabs: [
      { label: "Automobilisten", cards: [
        { title: "Onderhoud inplannen", text: "Onderhoudsbeurten, terugroepacties, garantiewerk en seizoensbandenwissels, ingepland met de juiste duur en serviceadviseur." },
        { title: "Is mijn auto klaar?", text: "In de werkplaats, wachtend op onderdelen, in de wasstraat of klaar, gelezen uit uw dealersysteem." },
        { title: "Onderdelen en accessoires", text: "Beschikbaarheid, prijzen en bestellen van onderdelen en accessoires, met de afhaaltijd." },
        { title: "Verkoopvragen", text: "Voorraad, proefritten en inruilvragen vastgelegd en doorgezet naar de juiste verkoper." },
        { title: "Leenauto's en ophalen", text: "Leenauto's, haal- en brengservice en bezorgmomenten, afgesproken in het gesprek." },
        { title: "Openingstijden en vestigingen", text: "Openingstijden, route en parkeren voor elke vestiging." },
      ] },
      { label: "Balie", cards: [
        { title: "Overloop op piekuren", text: "Maandagochtenden en het bandenwisselseizoen kosten u geen bellers meer." },
        { title: "Klaarmeldingen", text: "Klanten horen het zodra hun auto klaar is, dus ze bellen niet meer om het te vragen." },
        { title: "Terugroepacties en campagnes", text: "Terugroepacties van de fabrikant en servicecampagnes ingepland zonder bellijst." },
        { title: "Warme doorverbinding", text: "Garantiediscussies, klachten en alles wat onduidelijk is, bereiken een medewerker met context." },
        { title: "No-show herstel", text: "Gemiste afspraken worden teruggebeld en opnieuw ingepland." },
        { title: "Gesprekssamenvattingen", text: "Elk gesprek getranscribeerd en in de klantkaart geschreven." },
      ] },
      { label: "Directie", cards: [
        { title: "Elke vestiging, één standaard", text: "Dezelfde begroeting, dezelfde regels, één dashboard voor de groep." },
        { title: "DMS-koppeling", text: "Afspraken en status gelezen uit Keyloop, CDK, Reynolds and Reynolds, Dealertrack of Xtime." },
        { title: "Standaarden van de fabrikant", text: "Scripts die de klantstandaarden van het merk en uw CSI-doelen respecteren." },
        { title: "Rapportage", text: "Beantwoorde oproepen, afspraken en onderdelenbestellingen per vestiging, per dag." },
        { title: "Audittrail", text: "Elke beslissing gelogd met haar regelversie." },
        { title: "Meertalig", text: "Nederlands, Engels, Duits en Spaans, per vestiging." },
      ] },
    ],
    journeyTitle: "Van eerste telefoontje tot tevreden eigenaar",
    journey: [
      { title: "Vul de werkplaatsplanning", text: "Beantwoord elke oproep, plan de juiste beurt in en bevestig per sms." },
      { title: "Stop de statusvragen", text: "Vertel klanten dat hun auto klaar is voordat ze het vragen." },
      { title: "Laat onderdelen en accessoires groeien", text: "Bestellingen per telefoon geplaatst, beschikbaarheid gecontroleerd, afhalen bevestigd." },
      { title: "Ontlast de serviceadviseurs", text: "Minder telefoononderbrekingen betekent meer tijd voor de klant aan de balie." },
      { title: "Zie elke vestiging in één overzicht", text: "Eén dashboard voor oproepen, afspraken en bestellingen over alle vestigingen." },
    ],
    photo: PHOTOS.dealer, photoAlt: "Serviceadviseur loopt met een tablet om de auto van een klant",
    quote: { quote: "'Is mijn auto al klaar?' vulde vroeger onze middagen. Nu vertelt de telefoon mensen dat hun auto klaar is voordat ze eraan denken te vragen.", name: "Marieke", role: "Servicemanager, Broekema" },
    agents: [
      { mock: "agent-frontdesk", title: "Balie", text: "Plant beurten in en beantwoordt vragen, 24/7." },
      { mock: "agent-orders", title: "Status van de auto", text: "Vertelt bellers hoe het staat met hun auto en onderdelen." },
      { mock: "agent-reorder", title: "Onderdelenbestellingen", text: "Controleert de beschikbaarheid en plaatst de bestelling om af te halen." },
      { mock: "agent-recall", title: "Oproepen en herinneringen", text: "Vindt elke auto die aan onderhoud toe is en plant hem in." },
    ],
  }),
  specialty({
    slug: "body-shops", name: "Schadeherstelbedrijven", short: "schadeherstelbedrijven",
    subtitle: "Schadeclaims, offertes en herstelstatus zonder telefonische wachtrij.",
    description: "AI voice agents voor schadeherstel- en spuitbedrijven. Beantwoord elke oproep, neem schadeclaims aan, geef de herstelstatus en plan de schadecalculatie volgens uw eigen regels.",
    media: VIDEOS.bodyshop,
    overlay: [
      { side: "start", kind: "user", name: "Beller", text: "Iemand heeft mijn geparkeerde auto aangereden. Mijn verzekeraar zei dat ik jullie moest bellen voor het herstel." },
      { side: "end", kind: "agent", text: "Wat vervelend. Ik heb uw schadenummer al in het systeem. Ik kan de schadecalculatie donderdag om 10:20 inplannen. Zal ik dat doen?" },
    ],
    cardsTitle: "Vertrouwd voor de meest voorkomende oproepen bij een schadeherstelbedrijf",
    tabs: [
      { label: "Automobilisten", cards: [
        { title: "Calculatie inplannen", text: "Schadebeoordelingen, fotoverzoeken en brengtijden, ingepland met de juiste duur." },
        { title: "Herstelstatus", text: "Wachtend op de verzekeraar, onderdelen besteld, in de spuiterij of klaar, gelezen uit uw managementsysteem." },
        { title: "Verzekering en schadeclaims", text: "Met welke verzekeraars u werkt, wat een claim nodig heeft en wat het eigen risico is." },
        { title: "Huur- en leenauto's", text: "Vervangend vervoer, ophalen en terugbrengen, afgesproken in het gesprek." },
        { title: "Offertes en prijzen", text: "Wat een herstel kost, wat de offerte dekt en hoe lang het duurt." },
        { title: "Openingstijden en vestigingen", text: "Openingstijden, route en parkeren voor elke vestiging." },
      ] },
      { label: "Receptie", cards: [
        { title: "Overloop en buiten openingstijden", text: "Oproepen bereiken Nekaf als de receptie bezet of gesloten is." },
        { title: "Schade-intake", text: "Schadenummer, verzekeraar, schadeomschrijving en foto's verzameld vóór de calculatie." },
        { title: "Statusupdates", text: "Klanten horen wanneer onderdelen binnen zijn en wanneer de auto klaar is, zonder bellijst." },
        { title: "Warme doorverbinding", text: "Geschillen, klachten en alles wat onduidelijk is, bereiken een medewerker met context." },
        { title: "No-show herstel", text: "Gemiste calculatieafspraken binnen twee uur teruggebeld." },
        { title: "Gesprekssamenvattingen", text: "Elk gesprek getranscribeerd en in het schadedossier geschreven." },
      ] },
      { label: "Eigenaren", cards: [
        { title: "Eén standaard per vestiging", text: "Dezelfde regels en toon op elke vestiging." },
        { title: "Live dashboard", text: "Beantwoordpercentage, ingeplande calculaties en bespaarde statusgesprekken, per vestiging." },
        { title: "Audittrail", text: "Elke beslissing gelogd met haar regelversie." },
        { title: "Verzekeraarsregels", text: "Scripts die het proces van elke verzekeraar en uw eigen goedkeuringsregels volgen." },
        { title: "Calculatiekoppeling", text: "Status gelezen uit CCC, Audatex, Mitchell of uw systeem." },
        { title: "Meertalig", text: "Nederlands, Engels, Duits en Spaans, per vestiging." },
      ] },
    ],
    journeyTitle: "Betere uitkomsten tijdens het hele herstel",
    journey: [
      { title: "Verkort de wachttijd tot de eerste calculatie", text: "Claims gelezen, automobilisten gebeld en de juiste plek ingepland." },
      { title: "Routeer wat ertoe doet", text: "Onrijdbare auto's en deadlines van verzekeraars volgen uw regels en bereiken de juiste persoon." },
      { title: "Houd de spuitcabine vol", text: "Herinneringen, no-show herstel en wachtlijstvulling." },
      { title: "Geef de receptie haar tijd terug", text: "Statusvragen beantwoord zonder medewerker." },
      { title: "Rapporteert als een teamlid", text: "Elke oproep en uitkomst op één dashboard." },
    ],
    photo: PHOTOS.bodyshop, photoAlt: "Spuiter spuit een autoportier in een spuitcabine",
    quote: { quote: "Klanten zeggen dat de telefoon eindelijk makkelijk is. Onze monteurs zeggen hetzelfde.", name: "Dave", role: "Servicemanager, Legacy Auto Clinic" },
    agents: [
      { mock: "agent-frontdesk", title: "Receptie", text: "Beantwoordt, plant in en verzet, 24/7." },
      { mock: "agent-referral", title: "Schade-intake", text: "Leest de claim, vraagt na wat ontbreekt en bereidt de calculatie voor." },
      { mock: "agent-orders", title: "Herstelstatus", text: "Vertelt bellers hoe het staat met hun auto en onderdelen." },
      { mock: "agent-noshow", title: "No-show herstel", text: "Plant gemiste calculaties opnieuw in en rapporteert wat het terugwon." },
    ],
  }),
  specialty({
    slug: "tire-centers", name: "Bandenspecialisten", short: "bandenspecialisten en fast-fitters",
    subtitle: "Seizoenspieken beantwoord. Elke plek gevuld.",
    description: "AI voice agents voor bandenspecialisten en fast-fitters. Beantwoord elke oproep in de seizoenspiek, plan bandenwissels en snelle services in en check de voorraad per telefoon.",
    media: VIDEOS.tire,
    overlay: [
      { side: "start", kind: "user", name: "Beller", text: "Ik wil voor het weekend mijn winterbanden eronder." },
      { side: "end", kind: "agent", text: "Uw winterset ligt bij ons in opslag. Vrijdag om 9:20 kan, het duurt ongeveer 45 minuten. Zal ik het inplannen?" },
    ],
    cardsTitle: "Vertrouwd voor de meest voorkomende oproepen bij een bandenspecialist",
    tabs: [
      { label: "Automobilisten", cards: [
        { title: "Bandenwissel inplannen", text: "Seizoenswissels, nieuwe sets en reparaties, ingepland met de juiste duur en brug." },
        { title: "Voorraad en prijzen", text: "Welke maten en merken op voorraad zijn, wat ze kosten en wanneer ze gemonteerd kunnen worden." },
        { title: "Bandenopslag", text: "Waar een opgeslagen set ligt, wanneer hij voor het laatst gemonteerd is en wanneer het tijd is om te wisselen." },
        { title: "Snelle services", text: "Olie verversen, remmen, accu's, ruitenwissers en uitlijnen, in minuten ingepland." },
        { title: "Lekke band en pech onderweg", text: "Lekke banden en pechgevallen volgen uw regels en bereiken de juiste persoon." },
        { title: "Openingstijden en vestigingen", text: "Openingstijden, route en de wachtruimte van elke vestiging." },
      ] },
      { label: "Balie", cards: [
        { title: "Overloop in het seizoen", text: "De pieken van oktober en april beantwoord zonder voicemail." },
        { title: "Klaarmeldingen", text: "Klanten horen het zodra hun auto klaar is, dus ze bellen niet meer om het te vragen." },
        { title: "Herinneringen", text: "Seizoenswissels en opvolging bij versleten profiel ingepland zonder bellijst." },
        { title: "Warme doorverbinding", text: "Klachten en alles wat onduidelijk is, bereiken een medewerker met context." },
        { title: "No-show herstel", text: "Gemiste afspraken teruggebeld en opnieuw ingepland." },
        { title: "Gesprekssamenvattingen", text: "Elk gesprek getranscribeerd en in de klantkaart geschreven." },
      ] },
      { label: "Vestigingsmanagers", cards: [
        { title: "Eén standaard per vestiging", text: "Dezelfde begroeting en regels in de hele keten." },
        { title: "Live dashboard", text: "Beantwoordpercentage, afspraken en voorraadvragen per vestiging." },
        { title: "Audittrail", text: "Elke beslissing gelogd met haar regelversie." },
        { title: "Voorraadkoppeling", text: "Beschikbaarheid en opslag gelezen uit uw bandenbeheersysteem." },
        { title: "Marketingopvolging", text: "Bevestigingen en herinneringen houden de seizoensplanning vol." },
        { title: "Meertalig", text: "Nederlands, Engels, Duits en Spaans, per vestiging." },
      ] },
    ],
    journeyTitle: "Betere uitkomsten voor automobilisten, vestigingen en uw team",
    journey: [
      { title: "Beantwoord elke automobilist direct", text: "Geen wachtmuziek, geen voicemail, ook niet op de eerste koude zaterdag van oktober." },
      { title: "Routeer echte spoedgevallen", text: "Uw regels bepalen wat de dienstdoende monteur bereikt, en hoe snel." },
      { title: "Houd de bruggen vol", text: "Herinneringen, oproepen en no-show herstel beschermen elke plek." },
      { title: "Ontlast de balie", text: "Voorraad- en opslagvragen beantwoord zonder medewerker." },
      { title: "Zie elke vestiging in één overzicht", text: "Eén dashboard voor oproepen en afspraken over alle vestigingen." },
    ],
    photo: PHOTOS.tireshop, photoAlt: "Bandenmonteur laat een klant twee bandenopties zien",
    quote: { quote: "De implementatie ging snel. We hebben op dinsdag het nummer doorgeschakeld en misten op donderdag geen oproepen meer.", name: "Dave", role: "Servicemanager, Legacy Auto Clinic" },
    agents: [
      { mock: "agent-frontdesk", title: "Balie", text: "Beantwoordt, plant in en verzet, 24/7." },
      { mock: "agent-reorder", title: "Bandenopslag en wissel", text: "Vindt de opgeslagen set en plant de seizoenswissel in." },
      { mock: "agent-recall", title: "Herinneringen", text: "Seizoenswissels ingepland zonder bellijst." },
      { mock: "agent-noshow", title: "No-show herstel", text: "Plant gemiste bezoeken opnieuw in en rapporteert wat het terugwon." },
    ],
  }),
];

/* ---------- customer stories ---------- */
const stories: Story[] = [
  {
    slug: "van-nuland",
    meta: { title: "Autobedrijf van Nuland | Nekaf", description: "Hoe een familiegarage in Volkel in de eerste maand van 30% gemiste oproepen naar nul ging." },
    customer: "Autobedrijf van Nuland", logo: logos[0].src, logoAlt: "Autobedrijf van Nuland",
    title: "Van 30% gemiste oproepen naar nul, in de eerste maand.",
    hero: { image: PHOTOS.storyVannuland, alt: "Receptie van een familiegarage" },
    stats: [{ value: "0%", label: "Oproepen onbeantwoord" }, { value: ">60%", label: "Afgehandeld zonder medewerker" }, { value: "+23%", label: "Afspraken ingepland" }],
    industry: "Onafhankelijke garages",
    body: [
      { type: "h2", text: "Eén balie, één telefoonlijn, zestig jaar klanten." },
      { type: "p", text: "Autobedrijf van Nuland is een familiegarage in Volkel, in het zuiden van Nederland, die sinds 1962 alle merken onderhoudt. De balie neemt ook auto's in ontvangst en geeft sleutels terug. Op piekmomenten en na 17:00 bleef een derde van de oproepen onbeantwoord, en de helft van de mensen die de voicemail kreeg, belde nooit terug." },
      { type: "p", text: "De garage schakelde haar bestaande nummer door naar Nekaf. Inplannen, verzetten, de status van de auto en openingstijden werden in de eerste week ingericht, samen met pechregels die de eigenaar goedkeurde. Nekaf was in minder dan twee weken live." },
      { type: "media", media: { kind: "mock", name: "story-vannuland" } },
      { type: "h2", text: "Wat er veranderde." },
      { type: "p", text: "Elke oproep wordt nu bij de eerste beltoon beantwoord, ook vijftig tegelijk. Meer dan zes op de tien oproepen worden volledig zonder medewerker afgehandeld: informatie, de status van de auto en afspraken. Pechgevallen bereiken de dienstdoende monteur in seconden, met een samenvatting." },
      { type: "p", text: "De cijfers komen uit 8.420 inkomende oproepen in mei en juni 2026. Bellers die vroeger ophingen, plannen nu een afspraak, net als bellers buiten openingstijden. Het aantal afspraken steeg met 23 procent, en de balie kreeg ongeveer 170 uur per maand terug." },
      { type: "quote", quote: "Het kent het verschil tussen een APK-afspraak en de vraag of een auto klaar is. Onze mensen aan de balie hebben eindelijk tijd voor de klant die voor hen staat.", name: "Bas", role: "Eigenaar, Autobedrijf van Nuland" },
    ],
    card: { image: PHOTOS.frontdesk, alt: "Balie van een garage", stat: { value: "0%", label: "Oproepen onbeantwoord" } },
  },
  {
    slug: "broekema",
    meta: { title: "Broekema | Nekaf", description: "Hoe een garage met twee vestigingen in Drenthe en Groningen stopte met het verliezen van bellers buiten openingstijden." },
    customer: "Broekema", logo: logos[1].src, logoAlt: "Broekema",
    title: "Elke oproep buiten openingstijden beantwoord, op twee vestigingen.",
    hero: { image: PHOTOS.storyBroekema, alt: "Werkplaats met vier bruggen" },
    stats: [{ value: "24/7", label: "Bereikbaar" }, { value: "2 sec", label: "Gemiddelde reactietijd" }, { value: "48 u", label: "Tijd tot live" }],
    industry: "Onafhankelijke garages",
    body: [
      { type: "h2", text: "Twee vestigingen die sneller groeiden dan hun telefoonsysteem." },
      { type: "p", text: "Broekema heeft universele garages in Zweeloo en Schildwolde, in het noorden van Nederland. Elke vestiging had een eigen lijn, een eigen begroeting en eigen gaten. Na 17:00 en op zaterdag gingen oproepen naar een voicemail die alleen berichten aannam." },
      { type: "p", text: "Nekaf beantwoordt nu beide vestigingen met één standaard. Het plant onderhoudsbeurten, APK's en bandenwissels in op de juiste brug, leest de pechregels van de groep en verbindt warm door naar de dienstdoende monteur met een samenvatting." },
      { type: "media", media: { kind: "mock", name: "story-broekema" } },
      { type: "h2", text: "Live in 48 uur." },
      { type: "p", text: "De garage schakelde haar nummers op een dinsdag door. Nekaf werd dezelfde dag ingericht met de monteurs, openingstijden en regels en ging op donderdag live. De koppeling met de werkplaatsplanning volgde later, zonder de telefoon te onderbreken." },
      { type: "quote", quote: "'Is mijn auto al klaar?' vulde vroeger onze middagen. Nu vertelt de telefoon mensen dat hun auto klaar is voordat ze eraan denken te vragen.", name: "Marieke", role: "Servicemanager, Broekema" },
    ],
    card: { image: PHOTOS.lift, alt: "Monteur onder een auto op de brug", stat: { value: "24/7", label: "Bereikbaar" } },
  },
  {
    slug: "legacy-auto-clinic",
    meta: { title: "Legacy Auto Clinic | Nekaf", description: "Hoe een familiebedrijf in Castle Rock, Colorado status- en offertevragen van de werkplaatsvloer haalde." },
    customer: "Legacy Auto Clinic", logo: logos[2].src, logoAlt: "Legacy Auto Clinic",
    title: "Status- en offertevragen, afgehandeld voordat de werkplaats opengaat.",
    hero: { image: PHOTOS.storyLegacy, alt: "Autogarage met open werkplaatsdeuren" },
    stats: [{ value: ">60%", label: "Oproepen afgehandeld zonder medewerker" }, { value: "≈170 u", label: "Bespaarde personeelsuren per maand" }],
    industry: "Onafhankelijke garages",
    body: [
      { type: "h2", text: "Drukke bruggen, nog drukkere telefoons." },
      { type: "p", text: "Legacy Auto Clinic is een familiebedrijf in Castle Rock, Colorado, met ASE-gecertificeerde monteurs en een trouwe lokale klantenkring. De meeste oproepen gingen over dezelfde drie dingen: is mijn auto klaar, wat gaat het kosten en wanneer zijn jullie open. Elke oproep haalde een monteur van de brug of de serviceadviseur weg bij een klant." },
      { type: "p", text: "Nekaf beantwoordt die oproepen vanuit het garagesysteem en de planning. Klaarmeldingen gaan uit zodra een werkorder is afgesloten, dus klanten bellen niet meer om het te vragen. Offertes worden voorgelezen met wat ze dekken en wat er veranderde, en akkoorden worden in het gesprek vastgelegd." },
      { type: "media", media: { kind: "mock", name: "story-legacy" } },
      { type: "h2", text: "Wat de monteurs merkten." },
      { type: "p", text: "Minder onderbrekingen en rustigere maandagen. Alles wat de agent niet kan beantwoorden, zoals een garantievraag of een klacht, bereikt een medewerker met het transcript erbij." },
      { type: "quote", quote: "Klanten zeggen dat de telefoon eindelijk makkelijk is. Onze monteurs zeggen hetzelfde.", name: "Dave", role: "Servicemanager, Legacy Auto Clinic" },
    ],
    card: { image: PHOTOS.tireshop, alt: "Klant kiest banden aan de balie", stat: { value: ">60%", label: "Afgehandeld zonder medewerker" } },
  },
];

/* ---------- product pages ---------- */
const related = (exclude: string) =>
  [
    { key: "console", title: "Console", text: "Uw dag, al op orde. Het ochtendoverzicht, wat uw aandacht vraagt en elke oproep op één plek.", href: "/product/console", mock: "briefing", zoom: 1.1, linkLabel: "Ontdek meer" },
    { key: "ask", title: "Ask Nekaf", text: "Koppel uw systemen en vraag alles over uw eigen werkplaats. 90 dagen gratis.", href: "/product/ask-nekaf", mock: "insights-query", linkLabel: "Ontdek meer" },
    { key: "agents", title: "Agents", text: "Eén taak, één prijs, één dashboard. Begin met de balie en voeg de volgende agent toe met één klik.", href: "/product/agents", mock: "agent-frontdesk", linkLabel: "Ontdek meer" },
    { key: "integrations", title: "Koppelingen", text: "Werkt met uw telefooncentrale, agenda en garagesoftware. Begin standalone, koppel wanneer u er klaar voor bent.", href: "/product/integrations", mock: "hz-context", linkLabel: "Ontdek meer" },
  ].filter((c) => c.key !== exclude);

const nl: Site = {
  lang: "nl",
  meta: {
    name: "Nekaf",
    titleSuffix: " | Nekaf",
    description: "AI voice agents voor garages, dealers, schadeherstelbedrijven en bandenspecialisten. Elke klantoproep beantwoord, elke werkplaatsafspraak ingepland, 24/7.",
    tel: TEL, telDisplay: TEL_DISPLAY, email: EMAIL, calendly: CALENDLY, linkedin: LINKEDIN, signIn: SIGN_IN,
  },
  ui: {
    nav: {
      product: "Product", specialties: "Branches", customers: "Klanten", company: "Bedrijf", signIn: "Inloggen", cta: bookDemo,
      productOverview: { title: "Productoverzicht", text: "AI voice agents die opnemen, inplannen en opvolgen, in één console.", button: "Maak kennis met Nekaf" },
      productGroups: [
        { label: "Werken", items: [
          { label: "Console", text: "Uw dag, al op orde.", href: "/product/console" },
          { label: "Ask Nekaf", text: "Gratis antwoorden over uw eigen werkplaatsdata.", href: "/product/ask-nekaf" },
        ] },
        { label: "Groeien", items: [
          { label: "Agents", text: "Balie, herinneringen, status van de auto en meer.", href: "/product/agents" },
          { label: "Koppelingen", text: "Telefooncentrale, agenda en garagesoftware.", href: "/product/integrations" },
        ] },
        { label: "Abonnementen", items: [
          { label: "Prijzen", text: "Eenvoudige maandprijzen. Geen contracten.", href: "/pricing" },
        ] },
      ],
      specialtyItems: [
        { label: "Onafhankelijke garages", text: "Elke oproep beantwoord, elke brug volgeboekt.", href: "/specialties/garages" },
        { label: "Dealers", text: "Eén standaard voor verkoop, service en onderdelen.", href: "/specialties/dealerships" },
        { label: "Schadeherstelbedrijven", text: "Schadeclaims, offertes en herstelstatus zonder wachtrij.", href: "/specialties/body-shops" },
        { label: "Bandenspecialisten", text: "Seizoenspieken beantwoord, elke plek gevuld.", href: "/specialties/tire-centers" },
      ],
      companyItems: [
        { label: "Over ons", text: "Wie Nekaf bouwt, en waarom.", href: "/about" },
        { label: "Werken bij", text: "Help de autobranche elke oproep te beantwoorden.", href: "/careers" },
        { label: "Kennisbank", text: "Gidsen, vergelijkingen en klantverhalen.", href: "/resources" },
        { label: "Demo aanvragen", text: "Kies een moment met een oprichter.", href: "/demo" },
      ],
      language: "Taal", menu: "Menu", close: "Sluiten",
    },
    footer: {
      tagline: "AI voice agents voor de automotive aftermarket. Uw werkplaats draait door. Ook als u er niet bent.",
      groups: [
        { title: "Product", items: [
          { label: "Productoverzicht", href: "/product" }, { label: "Console", href: "/product/console" }, { label: "Ask Nekaf", href: "/product/ask-nekaf" }, { label: "Agents", href: "/product/agents" }, { label: "Koppelingen", href: "/product/integrations" }, { label: "Prijzen", href: "/pricing" },
        ] },
        { title: "Branches", items: [
          { label: "Alle branches", href: "/specialties" }, { label: "Onafhankelijke garages", href: "/specialties/garages" }, { label: "Dealers", href: "/specialties/dealerships" }, { label: "Schadeherstelbedrijven", href: "/specialties/body-shops" }, { label: "Bandenspecialisten", href: "/specialties/tire-centers" },
        ] },
        { title: "Klanten", items: [{ label: "Klantverhalen", href: "/customers" }, { label: "Autobedrijf van Nuland", href: "/customers/van-nuland" }, { label: "Broekema", href: "/customers/broekema" }, { label: "Legacy Auto Clinic", href: "/customers/legacy-auto-clinic" }] },
        { title: "Bedrijf", items: [{ label: "Over ons", href: "/about" }, { label: "Veiligheid en compliance", href: "/safety-compliance" }, { label: "Kennisbank", href: "/resources" }, { label: "Werken bij", href: "/careers" }, { label: "Demo aanvragen", href: "/demo" }, { label: "Inloggen", href: SIGN_IN, external: true }] },
      ],
      legal: [{ label: "Privacybeleid", href: "/privacy" }, { label: "Algemene voorwaarden", href: "/terms" }, { label: "Cookiebeleid", href: "/cookies" }],
      copyright: "© 2026 Nekaf",
    },
    consent: {"text":"We gebruiken één analysetool (PostHog, gehost in de EU) om te zien welke pagina's bezoekers helpen. Die draait alleen als u akkoord gaat. Geen advertentiecookies.","accept":"Analyse accepteren","decline":"Weigeren","policy":"Cookiebeleid"},
    common: {
      bookDemo: "Demo aanvragen", callDemo: "Bel de demolijn", demoNote: "Spreek met een oprichter. Vrijblijvend.", learnMore: "Meer informatie", readStory: "Lees het verhaal", readMore: "Lees meer", discoverMore: "Ontdek meer", fullStory: "Volledig verhaal", getStarted: "Aan de slag", contactSales: "Neem contact op", mostPopular: "Meest gekozen", perMonth: "/maand", playVideo: "Video afspelen", pauseVideo: "Video pauzeren", customerStories: "Klantverhalen", allSpecialties: "Alle branches", openRoles: "Vacatures", search: "Zoeken", skip: "Ga naar de inhoud",
    },
  },

  home: {
    meta: { title: "AI voice agents voor garages en dealers | Nekaf", description: "AI voice agents voor garages, dealers, schadeherstelbedrijven en bandenspecialisten die vragen beantwoorden, werkplaatsafspraken inplannen en routineverzoeken afhandelen, 24/7." },
    hero: {
      title: "Elke klantoproep beantwoord.\nElke brug volgeboekt.",
      subtitle: "AI voice agents voor garages, dealers, schadeherstelbedrijven en bandenspecialisten die vragen beantwoorden, werkplaatsafspraken inplannen en routineverzoeken afhandelen, 24/7.",
      primary: bookDemo, secondary: callDemo, note: "Spreek met een oprichter. Vrijblijvend.",
      slides: [
        { ...VIDEOS.fold1, bubbles: [
          { side: "end", kind: "agent", text: "Bedankt voor het bellen naar Autobedrijf Bergzicht. Dit is Nekaf. Waarmee kan ik helpen?" },
          { side: "start", kind: "user", name: "Sarah", text: "Mijn motorstoringslampje brandt sinds vanochtend en de auto trekt slecht op." },
          { side: "end", kind: "agent", text: "Laten we er vandaag naar kijken. Ik kan om 14:40 een diagnose inplannen bij Marco. Zal ik dat doen?" },
          { side: "start", kind: "user", name: "Sarah", text: "Ja, graag." },
          { side: "end", kind: "agent", text: "Gedaan. U staat vandaag om 14:40 ingepland. Ik heb een bevestiging per sms gestuurd." },
        ] },
        { ...VIDEOS.fold2, bubbles: [
          { side: "end", kind: "agent", text: "Bedankt voor het bellen naar Legacy Auto Clinic. Dit is Nekaf. Waarmee kan ik helpen?" },
          { side: "start", kind: "user", name: "Daniel", text: "Ik heb mijn auto vanochtend gebracht voor de remmen. Is hij klaar?" },
          { side: "end", kind: "agent", text: "Ik kijk even. Wat is uw kenteken?" },
          { side: "start", kind: "user", name: "Daniel", text: "H-472-KL." },
          { side: "end", kind: "agent", text: "De remmen zijn klaar en hij is nu op proefrit. Klaar vanaf 16:00, meneer Okafor. We zijn vandaag open tot 18:00." },
        ] },
        { ...VIDEOS.fold3, bubbles: [
          { side: "end", kind: "agent", text: "Autobedrijf van Nuland, dit is Nekaf. Waarmee kan ik helpen?" },
          { side: "start", kind: "user", name: "Lena", text: "Ik wil voor het weekend mijn winterbanden eronder." },
          { side: "end", kind: "agent", text: "Uw winterset ligt bij ons in opslag. Vrijdag om 9:20 kan, het duurt ongeveer 45 minuten. Zal ik het inplannen?" },
          { side: "start", kind: "user", name: "Lena", text: "Ja, vrijdag is prima." },
          { side: "end", kind: "agent", text: "Ingepland. U krijgt donderdag een herinnering per sms. Nog iets anders?" },
        ] },
      ],
    },
    logos: { title: "Handelt dagelijks honderden gesprekken af bij:", logos },
    demo: {
      title: "Hoor Nekaf een echt gesprek voeren",
      lede: "Druk op afspelen, of bel de demolijn en probeer het zelf.",
      sampleLabel: "Voorbeeldgesprek · een APK inplannen",
      duration: "0:30", play: "Beluister het voorbeeldgesprek", stop: "Stop", hint: "Het transcript volgt het gesprek.",
      call: callDemo, note: "Het is Nekaf die opneemt.",
      transcript: [
        { who: "agent", at: 0, text: "Hi, ik ben Alex, de digitale assistent van Nekaf. Dit gesprek kan worden opgenomen. Waarmee kan ik je helpen?" },
        { who: "caller", at: 6.5, text: "Hey Alex, je spreekt met Peter. Ik vroeg me af of ik een APK kon inplannen." },
        { who: "agent", at: 14, text: "Hallo Peter, leuk je te spreken. Ik help je daar graag mee. Ik zie dat je gegevens al gekoppeld zijn aan het nummer waarmee je belt. Op welke dag en welk tijdstip zou je graag langskomen?" },
      ],
    },
    bento: {
      title: "Uw werkplaats draait door.\nOok als u er niet bent.",
      lede: "Nekaf beantwoordt, plant in en volgt op, zodat uw team zich kan richten op de auto op de brug en de klant aan de balie.",
      cards: [
        { id: "green", title: "Maak van elke oproep een ingeplande klus", body: "Beantwoord elke oproep, dag en nacht, en plan direct in uw werkplaatsplanning.", sr: "Animatie van oproepen van verschillende garages die worden beantwoord en ingepland." },
        { id: "blue", title: "Geef elk team zijn tijd terug", body: "Balie, monteurs en managers stoppen met de telefoon en gaan weer aan auto's werken.", sr: "Animatie van het kiezen van een serviceplek en het inplannen van een bandenwissel." },
        { id: "pink", title: "Eén agent op elk kanaal", body: "Spraak eerst, met webchat, e-mail, sms en WhatsApp onder dezelfde regels.", sr: "Animatie van één gesprek dat over spraak, chat, e-mail en sms beweegt." },
        { id: "orange", title: "Betaal voor werk dat gedaan is", body: "Eenvoudige maandprijzen. Geen contracten. Op elk moment opzegbaar.", sr: "Animatie van beoordelingen en een afgeronde uitkomst." },
      ],
    },
    console: { title: "Maak kennis met de console", lede: "Elke oproep, afspraak en overdracht op één plek. Vraag alles in gewone taal." },
    proof: {
      title: "Wat er veranderde toen Nekaf de telefoon overnam",
      lede: "Gemeten bij Broekema, voor en nadat Nekaf de telefoon overnam.",
      outcomes: [
        { after: "+23%", label: "Meer werkplaatsafspraken ingepland", text: "Bellers buiten openingstijden en bellers die vroeger ophingen, plannen nu een afspraak." },
        { after: "≈170 u", label: "Bespaarde personeelsuren per maand", text: "2.526 oproepen per maand afgehandeld zonder medewerker, à vier minuten elk." },
        { before: "4 min", after: "2 sec", label: "Gemiddelde reactietijd", text: "Van vier minuten in de wacht op piekmomenten naar een antwoord bij de eerste beltoon." },
        { before: "0%", after: ">60%", label: "Afgehandeld zonder medewerker", text: "Meer dan zes op de tien oproepen worden volledig afgerond: openingstijden, status van de auto, afspraken." },
        { before: "50%", after: "0%", label: "Gemiste bellers nooit meer gehoord", text: "De helft van de mensen die de voicemail kreeg, belde nooit terug. Er is geen voicemail meer." },
        { before: "30%", after: "0%", label: "Oproepen nooit beantwoord", text: "Bijna een derde van de oproepen bleef onbeantwoord. Nu wordt elke oproep opgenomen, ook 50 tegelijk." },
      ],
      source: "Resultaten uit 8.420 inkomende oproepen in mei en juni 2026 bij Broekema.",
    },
    agents: {
      title: "Maak kennis met de agents",
      lede: "Elke agent doet één taak, van begin tot eind, en rapporteert elke dag aan u.",
      cta: { label: "Alle agents", href: "/product/agents" },
      tiles: [
        { mock: "agent-frontdesk", title: "Balie", text: "Beantwoordt elke oproep, plant in, verzet en annuleert, 24/7." },
        { mock: "agent-orders", title: "Status van de auto", text: "Vertelt bellers hoe het staat met hun auto, onderdelen of schadeclaim." },
        { mock: "agent-recall", title: "Herinneringen en oproepen", text: "Vindt elke auto die toe is aan onderhoud, APK of een bandenwissel en plant hem in." },
        { mock: "agent-noshow", title: "No-show herstel", text: "Belt elke no-show binnen twee uur en plant opnieuw in." },
      ],
    },
    live: {
      title: "Live in 48 uur. Niet in 48 dagen.",
      lede: "Niets te installeren, niets te vervangen. Nekaf werkt vanaf dag één standalone.",
      steps: [
        { mock: "hz-proactive", title: "Schakel uw nummer door", text: "Oproepen gaan naar Nekaf: allemaal, alleen de overloop of alleen buiten openingstijden. Uw nummer blijft hetzelfde." },
        { mock: "journeys", title: "Wij richten uw regels in", text: "Bruggen, monteurs, openingstijden, klusduren en pechregels, ingericht met uw team. U keurt elk antwoord goed." },
        { mock: "ins-observability", title: "Ga live", text: "Bekijk de eerste gesprekken in uw dashboard. Koppel uw garagesoftware wanneer u er klaar voor bent." },
      ],
    },
    quotes: {
      title: "De resultaten spreken voor zich",
      lede: "Werkplaatsen die elke oproep beantwoorden, in hun eigen woorden.",
      items: [
        { quote: "Het kent het verschil tussen een APK-afspraak en de vraag of een auto klaar is. Onze mensen aan de balie hebben eindelijk tijd voor de klant die voor hen staat.", name: "Bas", role: "Eigenaar, Autobedrijf van Nuland", logo: logos[0].src, logoAlt: "Autobedrijf van Nuland", ...PEOPLE.bas, href: "/customers/van-nuland" },
        { quote: "Klanten zeggen dat de telefoon eindelijk makkelijk is. Onze monteurs zeggen hetzelfde.", name: "Dave", role: "Servicemanager, Legacy Auto Clinic", logo: logos[2].src, logoAlt: "Legacy Auto Clinic", ...PEOPLE.dave, href: "/customers/legacy-auto-clinic" },
        { quote: "'Is mijn auto al klaar?' vulde vroeger onze middagen. Nu vertelt de telefoon mensen dat hun auto klaar is voordat ze eraan denken te vragen.", name: "Marieke", role: "Servicemanager, Broekema", logo: logos[1].src, logoAlt: "Broekema", ...PEOPLE.marieke, href: "/customers/broekema" },
      ],
    },
    trust: { title: "Vertrouwen en betrouwbaarheid", text: "Nekaf is gebouwd voor verantwoording in de werkplaats. Elke regel, beslissing en overdracht is gedocumenteerd en controleerbaar.", badges: TRUST_BADGES },
    cta,
  },

  product: {
    meta: { title: "Productoverzicht | Nekaf", description: "AI voice agents die elke oproep beantwoorden, werkplaatsafspraken inplannen en routeren wat ertoe doet. Spraak eerst, met elk kanaal in één console." },
    hero: {
      title: "Maak kennis met Nekaf",
      subtitle: "De voice agent die de taal van de werkplaats spreekt, bij de eerste beltoon opneemt en nooit een klant laat wachten",
      media: { kind: "video", src: VIDEOS.product.video, poster: VIDEOS.product.poster },
      overlay: [
        { side: "start", kind: "user", name: "Beller", text: "Kan ik mijn onderhoudsbeurt naar donderdag verzetten?" },
        { side: "end", kind: "agent", text: "Gedaan. Donderdag 9:40 bij Marco. Neem de sleutel en het onderhoudsboekje mee." },
      ],
      cta: { label: "Beluister een voorbeeldgesprek", href: "/#demo" },
    },
    sections: [
      { key: "voice", title: "Uw voice agent", lede: "Een natuurlijk gesprek, geen telefoonmenu. Hij luistert, begrijpt het verzoek en rondt de taak af.", mediaSide: "right", media: { kind: "mock", name: "agent-frontdesk" }, features: [
        { icon: "phone", title: "Beantwoordt elke oproep, 24/7", text: "Eén beller of vijftig tegelijk. Dag, nacht en weekend, zonder wachttijd en zonder voicemail." },
        { icon: "calendar", title: "Plant direct in uw werkplaatsplanning", text: "Het juiste type werkzaamheden, de juiste monteur, de juiste duur, bevestigd per sms." },
        { icon: "shield", title: "Routeert wat ertoe doet", text: "Pech, waarschuwingslampjes en bellers langs de weg: uw regels beslissen, en de juiste persoon krijgt in seconden een samenvatting." },
      ] },
      { key: "automotive", title: "De enige voice agent die speciaal voor de werkplaats is gebouwd", lede: "Eerst gebouwd voor onafhankelijke garages en dealers, nu ook voor schadeherstelbedrijven en bandenspecialisten. Getraind op meer dan 10.000 autotermen, onderdeelnamen en soorten werkzaamheden.", mediaSide: "left", media: { kind: "mock", name: "wheel" }, features: [
        { icon: "checklist", title: "Spreekt uw vak", text: "Kent het verschil tussen een distributieriem en een bandenwissel, noemt de juiste duur en plant elke klus correct in." },
        { icon: "shield", title: "Volgt uw regels", text: "Klusduren, vaardigheden van monteurs, leenauto's en pechregels, goedgekeurd door uw werkplaatschef." },
        { icon: "reverse", title: "Leert van elke correctie", text: "Markeer een gesprek als fout met één klik. De fix wordt getest voordat hij live gaat." },
      ] },
      { key: "channels", title: "Eén agent op elk kanaal", lede: "Spraak eerst. Webchat, e-mail, sms en WhatsApp volgen dezelfde regels en hetzelfde toezicht.", mediaSide: "right", media: { kind: "mock", name: "channels-hero" }, features: [
        { icon: "phone", title: "Spraak", text: "Inkomende en uitgaande gesprekken op uw bestaande nummer." },
        { icon: "chat", title: "Webchat en e-mail", text: "Vragen via uw website en gedeelde inbox, beantwoord uit dezelfde scripts." },
        { icon: "sms", title: "Sms en WhatsApp", text: "Bevestigingen, herinneringen en klaarmeldingen waar klanten al zijn." },
      ] },
      { key: "trust", title: "Vertrouwen en veiligheid", lede: "Elke agent wordt gecontroleerd. Elke beslissing die ertoe doet, is van u.", mediaSide: "left", media: { kind: "mock", name: "ins-observability" }, features: [
        { icon: "eye", title: "De Reviewer", text: "Een toezichthoudende agent beoordeelt steekproefgesprekken op juistheid, toon en uw regels. U ziet de scores." },
        { icon: "user", title: "Overdracht aan een mens", text: "Garantiediscussies, klachten, complexe diagnoses en twijfel gaan naar uw team, met het transcript." },
        { icon: "lock", title: "Volledige audittrail", text: "Elke oproep, elk bericht en elke afspraak gelogd en herleidbaar. AVG, dataopslag in de EU." },
      ] },
    ],
    quote: { logo: logos[0].src, logoAlt: "Autobedrijf van Nuland", quote: "Het kent het verschil tussen een APK-afspraak en de vraag of een auto klaar is. Onze mensen aan de balie hebben eindelijk tijd voor de klant die voor hen staat.", name: "Bas", role: "Eigenaar, Autobedrijf van Nuland", link: { label: "Volledig verhaal", href: "/customers/van-nuland" } },
    trust,
    pricingTeaser: { title: "Prijzen die de resultaten volgen", text: "Vanaf € 279 per maand. Geen opstartkosten, geen contracten. Levert Nekaf geen resultaat, dan betaalt u niets.", link: { label: "Bekijk prijzen", href: "/pricing" }, mock: "pricing-card" },
    related: { title: "Ontdek het platform", cards: related("") },
    cta,
  },

  consolePage: {
    meta: { title: "Console | Nekaf", description: "De Nekaf-console: het ochtendoverzicht, wat uw aandacht vraagt, elke oproep en afspraak, en een opdrachtbalk die gewone taal begrijpt." },
    hero: { title: "Console", subtitle: "Uw dag, al op orde", media: { kind: "mock", name: "dashboard-full" } },
    sections: [
      { key: "today", title: "Begin met het overzicht", lede: "De console opent met wat er vannacht gebeurde en wat vandaag uw aandacht vraagt. Typen is niet nodig.", mediaSide: "right", media: { kind: "mock", name: "briefing", zoom: 1.15 }, features: [
        { icon: "sun", title: "Ochtendoverzicht", text: "Beantwoorde oproepen, ingeplande afspraken, doorgezette pechgevallen en alles wat opviel, elke ochtend voor u geschreven." },
        { icon: "inbox", title: "Vraagt uw aandacht", text: "Goedkeuringen, doorverbindingen en gemarkeerde gesprekken in één wachtrij, met volledige context." },
        { icon: "status", title: "Agentstatus", text: "Het werk en de status van elke agent in de linkerbalk, per vestiging." },
      ] },
      { key: "dashboards", title: "Dashboards die lezen als het rapport van een teamlid", lede: "Klik op een agent en zie zijn werk: beantwoordpercentage, afspraken, gespreksduur, overdrachten en kwaliteitsscores.", mediaSide: "left", media: { kind: "mock", name: "reporting", zoom: 1.15 }, features: [
        { icon: "chart", title: "Uitkomsten, geen verzendingen", text: "Ingeplande afspraken, teruggewonnen bruguren en opgevangen beluren, naast wat de agent kost." },
        { icon: "eye", title: "Reviewer-paneel", text: "Slagingspercentage van steekproefgesprekken en gemarkeerde runs, zichtbaar op elk dashboard." },
        { icon: "pause", title: "Pauzeren met één klik", text: "Elke agent, elke vestiging, elk moment." },
      ] },
      { key: "command", title: "Stuur de dag vanuit één balk", lede: "Eén balk onderaan elk scherm. Pauzeer een agent, wijzig een regel of keur een doorverbinding goed in één zin, in het Nederlands, Engels of Duits.", mediaSide: "right", media: { kind: "mock", name: "insights-query", zoom: 1.15 }, features: [
        { icon: "search", title: "Antwoorden met bron", text: "Elk antwoord vermeldt het systeem en het synchronisatiemoment waar het vandaan komt." },
        { icon: "undo", title: "Acties met een auditregel", text: "Elke wijziging krijgt een referentie en, waar mogelijk, een ongedaan-maken." },
        { icon: "phone", title: "Ook op uw telefoon", text: "Dezelfde console als app, met pushmeldingen voor goedkeuringen en het overzicht." },
      ] },
    ],
    quote: { logo: logos[2].src, logoAlt: "Legacy Auto Clinic", quote: "Klanten zeggen dat de telefoon eindelijk makkelijk is. Onze monteurs zeggen hetzelfde.", name: "Dave", role: "Servicemanager, Legacy Auto Clinic", link: { label: "Volledig verhaal", href: "/customers/legacy-auto-clinic" } },
    related: { title: "Gerelateerde producten", cards: related("console") },
    cta,
  },

  askNekaf: {
    meta: { title: "Ask Nekaf | Nekaf", description: "Koppel uw werkplaatsplanning, bellog en documenten en vraag alles over uw eigen werkplaats. 90 dagen gratis, inbegrepen bij elke actieve agent." },
    hero: { title: "Ask Nekaf", subtitle: "Gratis antwoorden over uw eigen werkplaatsdata", media: { kind: "video", src: VIDEOS.insights.video, poster: VIDEOS.insights.poster } },
    sections: [
      { key: "connect", title: "Koppel, en vraag", lede: "Alleen-lezen toegang tot uw werkplaatsplanning, bellog en gedeelde mailbox. Onbeperkt aantal gebruikers. 90 dagen gratis.", mediaSide: "right", media: { kind: "mock", name: "explorer-table", zoom: 1.15 }, features: [
        { icon: "plug", title: "Standaardkoppelingen", text: "Agenda, telefooncentrale, export uit uw garagesoftware en de gedeelde mailbox, in één dag gekoppeld." },
        { icon: "search", title: "Vraag alles", text: "No-shows per vestiging, onbeantwoorde oproepen vorige week, auto's die op onderdelen wachten, omzet geboekt voor volgende maand." },
        { icon: "doc", title: "Antwoorden met bronnen", text: "Tekst plus tabellen, met het systeem en synchronisatiemoment achter elk getal." },
      ] },
      { key: "baseline", title: "Uw nulmeting, in uw eigen cijfers", lede: "Week één levert een vast rapport over de zes cijfers die u al naar boven rapporteert.", mediaSide: "left", media: { kind: "mock", name: "briefing", zoom: 1.15 }, features: [
        { icon: "chart", title: "Zes bereikbaarheidscijfers", text: "Opneemsnelheid, afhaakpercentage, planningsnauwkeurigheid, oproepen per serviceadviseur, volume buiten openingstijden en brugbezetting." },
        { icon: "trend", title: "Plus wat u misloopt", text: "Teruggewonnen afspraken en de onderdelenachterstand, zodat de businesscase voor de eerste agent uw eigen data is." },
        { icon: "reverse", title: "Maandelijks opnieuw gerapporteerd", text: "Het verschil is altijd uw cijfer, niet het onze." },
      ] },
      { key: "next", title: "De opstap naar de volgende agent", lede: "Als de gratis laag laat zien wat u mist, huurt u de agent die het oplost. Na de proefperiode inbegrepen bij elke actieve agent.", mediaSide: "right", media: { kind: "mock", name: "recommendations", zoom: 1.15 }, features: [
        { icon: "sparkles", title: "Inzichten die ergens naartoe wijzen", text: "Elke bevinding linkt naar de agent die haar zou veranderen." },
        { icon: "lock", title: "Alleen-lezen by design", text: "De gratis laag schrijft nooit naar uw systemen." },
        { icon: "calendar", title: "Een einddatum op elke proef", text: "90 dagen, daarna inbegrepen bij elke actieve agent. Geen verrassingen." },
      ] },
    ],
    related: { title: "Gerelateerde producten", cards: related("ask") },
    cta: { ...cta, title: "Koppel uw data deze week", text: "90 dagen gratis. Zie uw eigen nulmeting voordat u iets beslist.", primary: { label: "Gratis starten", href: "/demo" } },
  },

  agentsPage: {
    meta: { title: "Agents | Nekaf", description: "Neem AI-agents aan voor de balie, de status van de auto, herinneringen, no-show herstel en meer. Eén taak, één prijs, één dashboard." },
    hero: { title: "Agents", subtitle: "Aangenomen als personeel. Bewezen voordat ze vertrouwd worden.", media: { kind: "mock", name: "agent-studio-hero" } },
    sections: [
      { key: "hire", title: "Neem een agent aan met één klik", lede: "Begin met één. Voeg de volgende toe met één klik. Zet ze uit wanneer u wilt.", mediaSide: "right", media: { kind: "mock", name: "simulations", zoom: 1.15 }, features: [
        { icon: "chat", title: "Inrichten in gesprek", text: "De agent stelt regels voor op basis van uw werkplaatsdata. U past ze aan in gewone taal en keurt ze goed." },
        { icon: "eye", title: "Schaduwmodus", text: "Een week op echte gesprekken zonder te handelen. U ziet alles wat hij gedaan zou hebben, beoordeeld door de Reviewer." },
        { icon: "check", title: "Akkoord, dan live", text: "Facturatie begint op de dag dat u de schakelaar omzet. Niet eerder." },
      ] },
      { key: "journeys", title: "Agents die de taak afmaken", lede: "Offerte verstuurd, auto ingepland, klant geïnformeerd, no-show hersteld. Elke agent is eigenaar van één uitkomst, van begin tot eind.", mediaSide: "left", media: { kind: "mock", name: "hz-optimization" }, features: [
        { icon: "flag", title: "Van offerte naar afspraak", text: "Volgt elke openstaande offerte op, beantwoordt de vragen en plant de klus in." },
        { icon: "calendar", title: "Herinneringen en oproepen", text: "Vindt elke auto die toe is aan onderhoud, APK of een seizoensbandenwissel, belt tot hij is ingepland en voorkomt no-shows voordat ze gebeuren." },
        { icon: "reverse", title: "No-show herstel en wachtlijst", text: "Belt binnen twee uur, plant opnieuw in en vult vrijgekomen plekken vanaf de wachtlijst." },
      ] },
    ],
    library: {
      title: "De agentbibliotheek",
      lede: "Elke agent heeft één taak. Begin met één en voeg de volgende met één klik toe.",
      classes: { voice: "Spraak", digital: "Digitaal" },
      items: [
        { name: "Balie", job: "Beantwoordt routinevragen 24/7 uit uw goedgekeurde scripts en routeert pechgevallen volgens uw regels.", cls: "voice", from: "In elk abonnement" },
        { name: "Inplannen, verzetten en annuleren", job: "Plant, verzet en annuleert werkplaatsafspraken bij elk gesprek, direct in uw werkplaatsplanning.", cls: "voice", from: "In elk abonnement" },
        { name: "Status van de auto", job: "Vertelt bellers hoe het staat met hun auto, onderdelen of schadeclaim, zonder wachtrij.", cls: "voice", from: "Professional" },
        { name: "Herinneringen en oproepen", job: "Vindt elke auto die toe is aan onderhoud, APK of een bandenwissel en belt tot hij is ingepland.", cls: "voice", from: "Professional" },
        { name: "No-show herstel", job: "Belt elke no-show binnen twee uur en plant opnieuw in op de eerste geschikte plek.", cls: "voice", from: "Professional" },
        { name: "Wachtlijst vullen", job: "Werkt bij een vrijgekomen plek uw wachtlijst af tot de plek gevuld is.", cls: "voice", from: "Professional" },
        { name: "Offerteopvolging", job: "Volgt elke openstaande offerte op, beantwoordt de vragen en zet akkoorden om in afspraken.", cls: "digital", from: "Professional" },
        { name: "Intake en inname", job: "Verzamelt kilometerstand, klachten en foto's vóór het bezoek en bevestigt het brengmoment.", cls: "digital", from: "Professional" },
        { name: "Webchat en e-mail", job: "Beantwoordt vragen via uw website en inbox met dezelfde regels als de telefoon.", cls: "digital", from: "Professional" },
        { name: "Nazorg na reparatie", job: "Belt elke klant na een reparatie, stelt uw vragen en meldt problemen bij uw team.", cls: "voice", from: "Enterprise" },
        { name: "Controle van claims en calculaties", job: "Controleert schadeclaims en calculaties op ontbrekende foto's, onderdelen en akkoorden voordat ze naar de verzekeraar gaan.", cls: "digital", from: "Enterprise" },
        { name: "Klantfacturatie", job: "Beantwoordt factuurvragen en verstuurt betaallinks. Geschillen gaan naar uw team.", cls: "digital", from: "Enterprise" },
      ],
    },
    quote: { logo: logos[1].src, logoAlt: "Broekema", quote: "'Is mijn auto al klaar?' vulde vroeger onze middagen. Nu vertelt de telefoon mensen dat hun auto klaar is voordat ze eraan denken te vragen.", name: "Marieke", role: "Servicemanager, Broekema", link: { label: "Volledig verhaal", href: "/customers/broekema" } },
    related: { title: "Gerelateerde producten", cards: related("agents") },
    cta,
  },

  integrations: {
    meta: { title: "Koppelingen | Nekaf", description: "Nekaf werkt met uw telefooncentrale, agenda, werkplaatsplanning en dealer management systeem. Begin standalone, koppel wanneer u er klaar voor bent." },
    hero: { title: "Koppelingen", subtitle: "Werkt met de systemen die u al gebruikt", media: { kind: "mock", name: "integrations" } },
    sections: [
      { key: "phone", title: "Uw nummer blijft hetzelfde", lede: "VoIP, vaste lijn of cloud. Oproepen worden doorgeschakeld naar Nekaf. Niets wordt vervangen.", mediaSide: "right", media: { kind: "mock", name: "voice-green" }, features: [
        { icon: "phone", title: "Elke telefooncentrale", text: "RingCentral, Zoom Phone, Twilio, Vonage, een PBX of een SIP-trunk." },
        { icon: "reverse", title: "Doorschakelen als vangnet", text: "Als Nekaf een oproep niet kan aannemen, belt hij uw team. Getest bij elke livegang." },
        { icon: "clock", title: "Overloop en buiten openingstijden", text: "Schakel alle oproepen door, alleen de overloop, of alleen als u gesloten bent." },
      ] },
      { key: "dms", title: "Afspraken geschreven waar ze horen", lede: "Tweerichtingssynchronisatie met uw agenda, werkplaatsplanning of dealer management systeem, wanneer u er klaar voor bent.", mediaSide: "left", media: { kind: "mock", name: "hz-context" }, features: [
        { icon: "calendar", title: "Agenda eerst", text: "Google, Outlook en Cal.com op dag één gekoppeld, zodat elke afspraak in uw eigen systeem landt." },
        { icon: "doc", title: "Garage- en dealersoftware", text: "Autoflex, Autotaal, WinCar, CarSys, Werbas, Loco-Soft, Tekmetric, Shopmonkey, Keyloop, CDK en meer, via API." },
        { icon: "check", title: "Gecontroleerde schrijfacties", text: "Elke afspraak wordt teruggelezen voordat hij aan de klant wordt bevestigd. Geen dubbele boekingen, geen handmatige invoer." },
      ] },
      { key: "data", title: "Gebouwd om klant- en voertuigdata te dragen", lede: "Vanaf de eerste dag gestructureerd rond kenteken, VIN en klant, zodat elk record al de vorm heeft die uw systemen verwachten.", mediaSide: "right", media: { kind: "mock", name: "governance" }, features: [
        { icon: "lock", title: "Versleuteld en in de regio", text: "AES-256 in rust, TLS 1.3 onderweg, dataopslag in de EU of de VS." },
        { icon: "shield", title: "Minimale rechten", text: "Eerst alleen-lezen. Schrijfrechten per agent, per actie, gelogd en omkeerbaar." },
        { icon: "plug", title: "API en MCP", text: "Elk systeem met een open API of MCP-server, per klant afgebakend." },
      ] },
    ],
    logos: {
      title: "Werkt met wat u heeft",
      lede: "Begin standalone. Koppel uw werkplaatsplanning, dealersysteem en telefooncentrale wanneer u er klaar voor bent.",
      more: "+20 integratiepartners",
      groups: [
        { label: "Garagesoftware, Nederland en Duitsland", items: INTEGRATION_LOGOS.garage },
        { label: "Garagesoftware, Verenigde Staten", items: INTEGRATION_LOGOS.shop },
        { label: "Dealer management systemen", items: INTEGRATION_LOGOS.dealer },
        { label: "Schadeherstel en calculatie", items: INTEGRATION_LOGOS.body },
        { label: "Telefooncentrales", items: INTEGRATION_LOGOS.phone },
        { label: "Agenda en CRM", items: INTEGRATION_LOGOS.tools },
      ],
    },
    related: { title: "Gerelateerde producten", cards: related("integrations") },
    cta,
  },

  pricing: {
    meta: { title: "Prijzen | Nekaf", description: "Resultaatgerichte prijzen voor AI voice agents. Vanaf € 279 per maand. Levert Nekaf geen resultaat, dan betaalt u niets." },
    title: "Prijzen die de resultaten volgen",
    lede: "U betaalt voor wat Nekaf oplevert, niet voor gebruikers of minuten.",
    from: "Vanaf € 279 per maand",
    how: {
      title: "Zo werkt resultaatgerichte prijsstelling",
      lede: "Eén maandbedrag, gekoppeld aan wat de agent daadwerkelijk voor uw werkplaats doet.",
      items: [
        { icon: "phone", title: "Een maandbedrag vanaf € 279", text: "Inclusief de agent, de console, onbeperkt gebruikers, installatie en ondersteuning. Geen kosten per gebruiker of per minuut." },
        { icon: "chart", title: "Gekoppeld aan resultaten", text: "Het bedrag volgt wat Nekaf oplevert: beantwoorde oproepen, ingeplande werkorders, teruggewonnen no-shows. De doelen spreken we vooraf met u af." },
        { icon: "shield", title: "Geen resultaat, geen kosten", text: "In een maand waarin Nekaf niets inplant en niets afhandelt, betaalt u niets. Dat risico nemen wij, niet u." },
      ],
    },
    stats: { title: "De rekensom klopt", items: [{ value: "~€ 0/dag", label: "als er geen resultaten zijn" }, { value: "€ 10.000+", label: "gebruikelijke maandelijkse besparing" }, { value: "20%", label: "gemiddelde omzetstijging" }] },
    calc: { title: "Wat de telefoon u kost", text: "Zet de schuifjes op uw eigen cijfers. De rekensom is bewust voorzichtig.", calls: "Inkomende oproepen per maand", missed: "Gemiste oproepen nu", value: "Waarde van één werkorder", recovered: "teruggewonnen werkorders per maand", revenue: "teruggewonnen omzet per maand", typical: "Bij werkplaatsen zien we meestal 20 tot 30% voordat ze starten.", note: "Teruggewonnen werkorders = gemiste oproepen × 50% die nooit terugbelt × 35% die wilde boeken. Cijfers van bestaande klanten.", currency: "€" },
    faq: {
      title: "Vragen over prijzen",
      items: [
        { q: "Wat telt als resultaat?", a: "Een uitkomst die de agent van begin tot eind afrondt: een oproep beantwoord en afgehandeld, een werkplaatsafspraak ingepland of verzet, een no-show opnieuw ingepland, een klaarmelding bevestigd. U ziet ze allemaal in de console." },
        { q: "Wat betaal ik in een maand zonder resultaten?", a: "Niets. Het maandbedrag geldt alleen als Nekaf de afgesproken resultaten levert." },
        { q: "Hoe wordt het bedrag voor mijn werkplaats bepaald?", a: "We kijken naar uw belvolume en de resultaten die voor u tellen, en spreken vooraf een maandbedrag en doelen af. Groepen met meerdere vestigingen krijgen een groepsafspraak." },
        { q: "Zijn er kosten per minuut of per gebruiker?", a: "Nee. Minuten en gebruikers zijn onbeperkt. Het bedrag is gekoppeld aan resultaten, niet aan gebruik." },
        { q: "Zijn er opstartkosten?", a: "Nee. Installatie, configuratie en onboarding zijn inbegrepen." },
        { q: "Kan ik opzeggen?", a: "Ja, maandelijks. Er zijn geen lange contracten." },
        { q: "Is er een proefperiode?", a: "Ja. Ask Nekaf is 90 dagen gratis en elke agent draait een week in schaduwmodus voordat hij live gaat." },
      ],
    },
    cta: { title: "Vraag een offerte voor uw werkplaats", text: "We rekenen teruggewonnen afspraken en personeelsuren door op uw eigen belvolume en spreken de doelen met u af.", primary: contactSales, secondary: callDemo, note: "Spreek met een oprichter. Vrijblijvend." },
  },

  specialties: {
    meta: { title: "Branches | Nekaf", description: "AI voice agents voor onafhankelijke garages, dealers, schadeherstelbedrijven en bandenspecialisten." },
    title: "Uw voice agent voor de automotive aftermarket.",
    lede: "Gebouwd voor de oproepen die uw werkplaats echt krijgt. Onafhankelijke garages, dealers, schadeherstelbedrijven en bandenspecialisten.",
    logos: { title: "", logos },
    quote: { logo: logos[0].src, logoAlt: "Autobedrijf van Nuland", quote: "Het kent het verschil tussen een APK-afspraak en de vraag of een auto klaar is. Onze mensen aan de balie hebben eindelijk tijd voor de klant die voor hen staat.", name: "Bas", role: "Eigenaar, Autobedrijf van Nuland", link: { label: "Volledig verhaal", href: "/customers/van-nuland" } },
    cta,
    pages: specialties,
  },

  customers: {
    meta: { title: "Klantverhalen | Nekaf", description: "Werkplaatsen die elke oproep beantwoorden, in hun eigen woorden." },
    title: "Onze klanten\nin hun eigen woorden",
    heroImage: { src: PHOTOS.team, alt: "Garageteam voor de werkplaats", logo: logos[0].src, logoAlt: "Autobedrijf van Nuland" },
    storiesTitle: "Dit zijn hun verhalen",
    featuredTitle: "Uitgelichte verhalen",
    gridTitle: "Voorlopers in\nautoservice",
    stories,
    moreTitle: "Meer klantverhalen",
    cta,
  },

  about: {
    meta: { title: "Over ons | Nekaf", description: "Nekaf vermindert wrijving in autoservice: voor automobilisten, voor serviceadviseurs en voor monteurs." },
    title: "Wie we zijn\nen waarom we hier zijn.",
    lede: "AI voice agents voor de automotive aftermarket, gebouwd in Amsterdam.",
    image: { src: PHOTOS.workshop, alt: "Moderne werkplaats" },
    statement: { title: "Nekaf vermindert wrijving in autoservice: voor automobilisten, voor serviceadviseurs en voor monteurs.", text: "De voorkant van elk werkplaatsbezoek is vaak het meest frustrerende deel. Telefoons die rinkelen aan de balie, auto's die wachten op een terugbelletje en monteurs die van de brug worden gehaald om vragen te beantwoorden. We hebben Nekaf gebouwd om dat op te lossen, te beginnen bij de telefoon." },
    values: [
      { icon: "shield", title: "Uw regels eerst", text: "Elke functie, elke regel en elke overdracht is zo ontworpen dat uw team de controle houdt. Nekaf belooft nooit een reparatie die het niet kan zien en gaat nooit tegen het oordeel van uw werkplaats in. Dat is een ontwerpprincipe, geen disclaimer." },
      { icon: "bolt", title: "Snel resultaat", text: "Live in dagen, niet in maanden. Een werkplaats schakelt haar nummer door, keurt haar regels goed en ziet dezelfde week de eerste gesprekken in haar dashboard." },
      { icon: "chart", title: "Bewijs boven beloftes", text: "We meten alles en laten u de cijfers zien. Werkt iets niet, dan vertellen we het u en lossen we het op." },
    ],
    founders: {
      title: "Onze oprichters",
      lede: "Nekaf is opgericht door Peter-Paul de Leeuw en Thomas Brits, die vijftien jaar ervaring in het bouwen en verkopen van softwarebedrijven in Europa meebrengen naar de werkplaatsbalie.",
      people: [
        { name: "Peter-Paul de Leeuw", role: "Medeoprichter en CEO", image: PHOTOS.peterpaul, text: "Peter-Paul richtte in 2017 Amberscript mee op, het Amsterdamse speech-to-text-bedrijf, en leidde het zeven jaar als CEO. Hij liet het uitgroeien tot een Europees bedrijf en nam onderweg twee concurrenten over. Spraakherkenning, taalmodellen en klanten die erop moeten kunnen rekenen dat ze elke dag werken, zijn sindsdien zijn vak. Bij Nekaf leidt hij product en de klantkant." },
        { name: "Thomas Brits", role: "Medeoprichter en CCO", image: PHOTOS.thomas, text: "Thomas heeft zijn hele loopbaan developer- en enterprisesoftware verkocht en opgeschaald. Bij GitHub bouwde hij de enterprisetak voor de Benelux op en leidde daarna de regionale sales voor Noord-Europa, waarbij hij met de grootste bedrijven in de regio werkte aan hoe zij AI invoeren. Bij Nekaf is hij eigenaar van go-to-market en partnerships." },
      ],
    },
    offices: { title: "Ons kantoor", text: "Vanuit {cities} werken we met werkplaatsen in Nederland, Duitsland en de Verenigde Staten.", cities: ["Amsterdam"] },
    cta: { ...cta, title: "Meer weten?", text: "Vertel ons over uw werkplaats en we laten zien wat Nekaf met uw oproepen zou doen." },
  },

  resources: {
    meta: { title: "Kennisbank | Nekaf", description: "Gidsen, vergelijkingen en klantverhalen over AI voice agents voor garages, dealers, schadeherstelbedrijven en bandenspecialisten." },
    title: "Kennisbank",
    filters: [{ key: "all", label: "Uitgelicht" }, { key: "learn", label: "Gidsen" }, { key: "compare", label: "Vergelijkingen" }, { key: "case", label: "Klantverhalen" }, { key: "blog", label: "Blog" }],
    readTime: "min leestijd",
    backLabel: "Alle artikelen",
    cta,
  },

  careers: {
    meta: { title: "Werken bij | Nekaf", description: "Help de autobranche elke oproep te beantwoorden. Vacatures bij Nekaf." },
    title: "Hoi, wij zijn Nekaf.\nWe zien je graag komen.",
    lede: "Bouw de agents die de telefoon opnemen voor de autobranche.",
    cta: { label: "Vacatures", href: "#open-roles" },
    image: { src: PHOTOS.team, alt: "Garageteam aan het werk" },
    statement: "We zijn een klein team dat AI-agents bouwt die werkplaatsen aannemen, aansturen en betalen als personeel. Ons werk zit tussen automobilisten en monteurs, dus we nemen nauwkeurigheid en bewijs serieus en we leveren elke week. Hou je van echte klanten, echte data en moeilijke problemen, kom dan met ons bouwen.",
    culture: [
      { icon: "marker", title: "Amsterdam", text: "We werken vanuit Amsterdam en brengen de meeste tijd door in werkplaatsen. Op afstand werken kan als het werk het toelaat." },
      { icon: "heart", title: "Klant nul", text: "We draaien Nekaf op Nekaf. Onze eigen financiën, sales ops en support draaien op de agents die we verkopen." },
      { icon: "sparkles", title: "Klein team, grote hefboom", text: "Twee oprichters, een hands-on tech lead en agentische tooling. Je bent eigenaar van hele uitkomsten, niet van tickets." },
      { icon: "users", title: "Werkplaatspartners", text: "Designpartners in Nederland en Colorado beoordelen wat we bouwen voordat het een klant bereikt." },
    ],
    interviewing: { title: "Solliciteren bij Nekaf", paragraphs: ["We nemen aan op oordeelsvermogen en tempo. Je ontmoet de oprichters, werkt een echt probleem uit onze backlog uit en spreekt een klant.", "Gesprekken vinden plaats in Amsterdam of via een videocall. Hoe dan ook zie je hoe we werken voordat je beslist."] },
    roles: {
      title: "Vacatures", lede: "We zoeken mensen die iets willen bouwen waar werkplaatsen elke dag op vertrouwen.",
      groups: [
        { name: "Commercieel", roles: [
          { title: "Founding account executive, VS", location: "Remote, VS", href: "mailto:" + EMAIL + "?subject=Account%20executive" },
          { title: "Customer success, automotive", location: "Amsterdam", href: "mailto:" + EMAIL + "?subject=Customer%20success" },
        ] },
        { name: "Engineering", roles: [
          { title: "Founding engineer, voice agents", location: "Amsterdam", href: "mailto:" + EMAIL + "?subject=Founding%20engineer" },
        ] },
      ],
    },
    finalCta: { title: "Staat jouw rol er niet bij?", text: "Vertel ons wat je zou bouwen. We lezen elk bericht.", primary: { label: "Mail ons", href: "mailto:" + EMAIL }, note: "" },
  },

  demo: {
    meta: { title: "Demo aanvragen | Nekaf", description: "Kies een moment met een oprichter en hoor Nekaf een gesprek voeren voor uw werkplaats. Vrijblijvend." },
    title: "Kies een moment met een oprichter.",
    points: [
      { icon: "phone", text: "Elke klantoproep beantwoord, 24/7, op uw bestaande nummer." },
      { icon: "calendar", text: "Werkplaatsafspraken direct ingepland in uw planning of dealersysteem." },
      { icon: "shield", text: "Pech en waarschuwingslampjes doorgezet volgens uw regels, met een samenvatting." },
    ],
    trustedTitle: "Vertrouwd door",
    booking: { title: "Kies een tijdslot", text: "30 minuten met Peter-Paul. We horen uw belvolume en laten zien wat Nekaf met uw oproepen zou doen.", fallback: { label: "Stuur een demoverzoek", href: CALENDLY, external: true }, note: "Vrijblijvend." },
  },

  legal: { ...LEGAL.nl, cookies: COOKIES.nl, safety: SAFETY.nl },
};

export default nl;
