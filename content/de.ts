import type { Site, SpecialtyPage, Story } from "./types";
import { LEGAL } from "./legal";
import { COOKIES, SAFETY } from "./policies";
import { BADGES, CALENDLY, CUSTOMER_LOGOS, EMAIL, INTEGRATION_LOGOS, LINKEDIN, PEOPLE, PHOTOS, SIGN_IN, TEL, TEL_DISPLAY, VIDEOS } from "./shared";

const callDemo = { label: "Demo-Hotline anrufen", href: TEL };
const contactSales = { label: "Vertrieb kontaktieren", href: "/demo" };
const bookDemo = { label: "Demo buchen", href: "/demo" };
const logos = CUSTOMER_LOGOS(["/customers/van-nuland", "/customers/broekema", "/customers/legacy-auto-clinic"]);

const TRUST_BADGES = [
  { src: BADGES.soc1, alt: "SOC 1 geprüfte Kontrollen" },
  { src: BADGES.iso27001, alt: "ISO 27001 Informationssicherheit" },
  { src: BADGES.gdpr, alt: "DSGVO" },
  { src: BADGES.euai, alt: "Bereit für den EU AI Act" },
];

const trust = {
  title: "Gebaut für Verantwortung in der Werkstatt",
  text: "Jede Regel, jede Entscheidung und jede Übergabe ist dokumentiert und prüfbar.",
  badges: TRUST_BADGES,
};

const cta = {
  title: "Sehen Sie, wie viele Anrufe mehr Sie beantworten könnten",
  text: "Wir rechnen zurückgewonnene Termine und Personalstunden auf Ihr eigenes Anrufvolumen um.",
  primary: bookDemo,
  secondary: callDemo,
  note: "Mit einem Gründer sprechen. Unverbindlich.",
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
    logos: { title: "Bearbeitet täglich Hunderte Gespräche bei:", logos },
    cards: { title: s.cardsTitle, tabs: s.tabs },
    journey: { title: s.journeyTitle, features: s.journey, media: { kind: "image", src: s.photo, alt: s.photoAlt }, mediaSide: "right", tone: "product" },
    quote: s.quote,
    agents: { title: "Agenten für " + s.short, cta: { label: "Alle Agenten", href: "/product/agents" }, tiles: s.agents },
    trust: { ...trust, title: "Gebaut für " + s.short + ": Vertrauen und Datenschutz" },
    cta,
  };
}

const specialties: SpecialtyPage[] = [
  specialty({
    slug: "garages", name: "Freie Werkstätten", short: "freie Werkstätten",
    subtitle: "Jeder Anruf beantwortet. Jede Hebebühne belegt.",
    description: "KI-Sprachagenten für freie Werkstätten. Jeden Anruf beantworten, den richtigen Auftrag auf die richtige Hebebühne buchen und Pannen nach Ihren eigenen Regeln weiterleiten.",
    media: VIDEOS.garage,
    overlay: [
      { side: "start", kind: "user", name: "Anrufer", text: "Seit heute Morgen leuchtet die Motorkontrollleuchte, und der Wagen zieht nicht mehr richtig." },
      { side: "end", kind: "agent", text: "Das sollten wir uns heute noch ansehen. Um 14:40 Uhr hat Marco Zeit für eine Diagnose. Soll ich das buchen?" },
    ],
    cardsTitle: "Bewährt für die häufigsten Anrufe in einer Werkstatt",
    tabs: [
      { label: "Autofahrer", cards: [
        { title: "Service- und HU-Termine", text: "Ölservice, Hauptuntersuchung, Bremsen und Zahnriemen, mit der richtigen Dauer und beim richtigen Mechatroniker gebucht." },
        { title: "Warnleuchten und Pannen", text: "Motorkontrollleuchte, Überhitzung und Anrufe von der Straße folgen Ihren Regeln und erreichen in Sekunden die richtige Person." },
        { title: "Ist mein Auto fertig?", text: "Aus Ihrem Werkstattplaner gelesen: auf der Hebebühne, wartet auf Teile oder abholbereit, mit Uhrzeit." },
        { title: "Kostenvoranschläge und Preise", text: "Was ein Auftrag kostet, was der Kostenvoranschlag enthielt und was sich geändert hat, aus Ihrer eigenen Preisliste." },
        { title: "Ersatzwagen und Abholung", text: "Ersatzwagen, Abgabezeiten und Abholfenster, im Gespräch vereinbart." },
        { title: "Anfahrt und Öffnungszeiten", text: "Standorte, Parken, Öffnungszeiten und Feiertage, sofort beantwortet." },
      ] },
      { label: "Serviceannahme", cards: [
        { title: "Überlauf und außerhalb der Öffnungszeiten", text: "Anrufe gehen an Nekaf, wenn die Theke besetzt oder geschlossen ist. Nichts landet auf der Mailbox." },
        { title: "Warme Weiterleitung", text: "Komplexe oder verärgerte Anrufer erreichen einen Menschen, mit Transkript und Zusammenfassung." },
        { title: "Erinnerungen und Fälligkeiten", text: "Bestätigungen, Erinnerungen und HU-Aufrufe gehen automatisch raus und landen im Werkstattplaner." },
        { title: "No-Show-Rückgewinnung", text: "Versäumte Termine werden innerhalb von zwei Stunden zurückgerufen und neu gebucht." },
        { title: "Warteliste füllen", text: "Ein freigewordener Termin wird der Warteliste angeboten, bis er besetzt ist." },
        { title: "Gesprächszusammenfassungen", text: "Jedes Gespräch wird transkribiert, verschlagwortet und in die Kundenakte geschrieben." },
      ] },
      { label: "Inhaber", cards: [
        { title: "Ein Standard pro Standort", text: "Jeder Standort klingt gleich und folgt denselben Regeln." },
        { title: "Live-Dashboard", text: "Annahmequote, Buchungen, weitergeleitete Pannen und Gesprächsdauer, pro Standort und Tag." },
        { title: "Prüfpfad", text: "Jede Entscheidung protokolliert, mit der Regelversion, die sie erzeugt hat." },
        { title: "Ihre Regeln, von Ihnen freigegeben", text: "Auftragsdauern, Qualifikationen der Mechatroniker und Eskalationsregeln werden von der Werkstattleitung freigegeben, bevor sie live gehen." },
        { title: "Werkstattplaner-Anbindung", text: "Buchungen werden in Autoflex, Autotaal, WinCar, Tekmetric, Shopmonkey oder Ihr System geschrieben." },
        { title: "Mehrsprachig", text: "Deutsch, Englisch, Niederländisch und Spanisch, pro Standort." },
      ] },
    ],
    journeyTitle: "Bessere Ergebnisse entlang des gesamten Werkstattbesuchs",
    journey: [
      { title: "Autos schneller auf die richtige Hebebühne", text: "Sofort annehmen, den Anrufgrund erkennen und die richtige Auftragsart beim richtigen Mechatroniker buchen." },
      { title: "Weiterleiten, was zählt", text: "Pannen und Warnleuchten folgen den Regeln, die Ihre Werkstattleitung freigegeben hat. Nie ein Ratespiel." },
      { title: "Den Werkstattplaner voll halten", text: "Erinnerungen, Fälligkeiten, No-Show-Rückgewinnung und Wartelistenfüllung schützen jede Stunde an der Hebebühne." },
      { title: "Der Theke ihre Zeit zurückgeben", text: "Routinefragen werden ohne Personal beantwortet. Komplexe kommen mit Kontext an." },
      { title: "Berichtet wie ein Teammitglied", text: "Jeder Anruf, jedes Ergebnis und jede Übergabe auf einem Dashboard." },
    ],
    photo: PHOTOS.lift, photoAlt: "Mechaniker wechselt eine Bremsscheibe unter einem Auto auf der Hebebühne",
    quote: { quote: "Es kennt den Unterschied zwischen einem HU-Termin und der Frage, ob das Auto fertig ist. Unsere Theke hat endlich Zeit für den Kunden, der davor steht.", name: "Bas", role: "Inhaber, Autobedrijf van Nuland" },
    agents: [
      { mock: "agent-frontdesk", title: "Serviceannahme", text: "Beantwortet, bucht und verschiebt, rund um die Uhr." },
      { mock: "agent-urgent", title: "Pannen-Routing", text: "Wendet Ihre Pannenregeln an und leitet mit Zusammenfassung weiter." },
      { mock: "agent-orders", title: "Fahrzeugstatus", text: "Sagt Anrufern, wo ihr Auto und ihre Teile stehen." },
      { mock: "agent-noshow", title: "No-Show-Rückgewinnung", text: "Bucht versäumte Termine neu und berichtet die zurückgewonnene Werkstattzeit." },
    ],
  }),
  specialty({
    slug: "dealerships", name: "Autohäuser", short: "Autohäuser",
    subtitle: "Ein Standard für Verkauf, Service und Teile.",
    description: "KI-Sprachagenten für Autohäuser. Jeden Service-, Teile- und Verkaufsanruf beantworten, in Ihr Dealer-Management-System buchen und jeden Standort einheitlich halten.",
    media: VIDEOS.dealer,
    overlay: [
      { side: "start", kind: "user", name: "Anrufer", text: "Ist mein Auto fertig? Ich habe es heute Morgen zur 60.000-km-Inspektion gebracht." },
      { side: "end", kind: "agent", text: "Es wird gerade gewaschen, Herr Okafor. Ab 16 Uhr abholbereit. Wir haben heute bis 18 Uhr und samstags von 9 bis 13 Uhr geöffnet." },
    ],
    cardsTitle: "Bewährt für die häufigsten Anrufe in einem Autohaus",
    tabs: [
      { label: "Autofahrer", cards: [
        { title: "Servicetermine", text: "Inspektionen, Rückrufe, Garantiearbeiten und saisonale Reifenwechsel, mit der richtigen Dauer und beim richtigen Serviceberater gebucht." },
        { title: "Fahrzeugstatus", text: "In der Werkstatt, wartet auf Teile, in der Wäsche oder abholbereit, aus Ihrem Dealer-Management-System gelesen." },
        { title: "Teile und Zubehör", text: "Verfügbarkeit, Preise und Bestellung von Teilen und Zubehör, mit Abholzeit." },
        { title: "Verkaufsanfragen", text: "Bestand, Probefahrten und Inzahlungnahme erfasst und an den richtigen Verkäufer weitergeleitet." },
        { title: "Ersatzwagen und Abholung", text: "Ersatzwagen, Hol- und Bringservice und Lieferfenster, im Gespräch vereinbart." },
        { title: "Öffnungszeiten und Standorte", text: "Öffnungszeiten, Anfahrt und Parken für jeden Standort." },
      ] },
      { label: "Serviceannahme", cards: [
        { title: "Überlauf zu Stoßzeiten", text: "Montagmorgen und die Reifenwechselsaison kosten Sie keine Anrufer mehr." },
        { title: "Abholbereit-Anrufe", text: "Kunden erfahren sofort, wenn ihr Auto fertig ist, und rufen nicht mehr nach." },
        { title: "Rückrufe und Serviceaktionen", text: "Herstellerrückrufe und Serviceaktionen ohne Anrufliste gebucht." },
        { title: "Warme Weiterleitung", text: "Garantiestreitigkeiten, Beschwerden und alles Unklare erreichen einen Menschen mit Kontext." },
        { title: "No-Show-Rückgewinnung", text: "Versäumte Termine werden zurückgerufen und neu gebucht." },
        { title: "Gesprächszusammenfassungen", text: "Jedes Gespräch transkribiert und in die Kundenakte geschrieben." },
      ] },
      { label: "Geschäftsführung", cards: [
        { title: "Jeder Standort, ein Standard", text: "Gleiche Begrüßung, gleiche Regeln, ein Dashboard für die Gruppe." },
        { title: "DMS-Anbindung", text: "Buchungen und Status aus Keyloop, CDK, Reynolds and Reynolds, Dealertrack oder Xtime gelesen." },
        { title: "Herstellerstandards", text: "Skripte, die die Kundenstandards der Marke und Ihre CSI-Ziele respektieren." },
        { title: "Reporting", text: "Beantwortete Anrufe, Buchungen und Teilebestellungen pro Standort und Tag." },
        { title: "Prüfpfad", text: "Jede Entscheidung mit ihrer Regelversion protokolliert." },
        { title: "Mehrsprachig", text: "Deutsch, Englisch, Niederländisch und Spanisch, pro Standort." },
      ] },
    ],
    journeyTitle: "Vom ersten Anruf bis zum zufriedenen Fahrzeughalter",
    journey: [
      { title: "Den Serviceplan füllen", text: "Jeden Anruf beantworten, den richtigen Service buchen und per SMS bestätigen." },
      { title: "Die Statusanrufe beenden", text: "Kunden erfahren, dass ihr Auto fertig ist, bevor sie fragen." },
      { title: "Teile und Zubehör ausbauen", text: "Bestellungen per Telefon aufgegeben, Verfügbarkeit geprüft, Abholung bestätigt." },
      { title: "Die Serviceberater entlasten", text: "Weniger Telefonunterbrechungen bedeuten mehr Zeit für den Kunden an der Theke." },
      { title: "Jeden Standort auf einen Blick", text: "Ein Dashboard für Anrufe, Buchungen und Bestellungen über alle Standorte." },
    ],
    photo: PHOTOS.dealer, photoAlt: "Serviceberater geht mit einem Tablet um das Auto eines Kunden",
    quote: { quote: "Anrufe, ob das Auto fertig ist, haben früher unsere Nachmittage gefressen. Jetzt sagt das Telefon den Leuten, dass ihr Auto fertig ist, bevor sie daran denken zu fragen.", name: "Marieke", role: "Serviceleiterin, Broekema" },
    agents: [
      { mock: "agent-frontdesk", title: "Serviceannahme", text: "Bucht Servicetermine und beantwortet Fragen, rund um die Uhr." },
      { mock: "agent-orders", title: "Fahrzeugstatus", text: "Sagt Anrufern, wo ihr Auto und ihre Teile stehen." },
      { mock: "agent-reorder", title: "Teilebestellungen", text: "Prüft die Verfügbarkeit und gibt die Bestellung zur Abholung auf." },
      { mock: "agent-recall", title: "Rückrufe und Erinnerungen", text: "Findet jedes Auto, bei dem ein Service fällig ist, und bucht es." },
    ],
  }),
  specialty({
    slug: "body-shops", name: "Karosserie- und Lackierbetriebe", short: "Karosserie- und Lackierbetriebe",
    subtitle: "Schadensfälle, Kostenvoranschläge und Reparaturstatus ohne Warteschleife.",
    description: "KI-Sprachagenten für Karosserie- und Lackierbetriebe. Jeden Anruf beantworten, Schadensfälle aufnehmen, Reparaturstatus geben und die Besichtigung nach Ihren eigenen Regeln buchen.",
    media: VIDEOS.bodyshop,
    overlay: [
      { side: "start", kind: "user", name: "Anrufer", text: "Jemand hat mein geparktes Auto angefahren. Meine Versicherung sagt, ich soll Sie für die Reparatur anrufen." },
      { side: "end", kind: "agent", text: "Das tut mir leid. Ihre Schadensnummer liegt mir vor. Ich kann die Besichtigung für Donnerstag um 10:20 Uhr eintragen. Soll ich?" },
    ],
    cardsTitle: "Bewährt für die häufigsten Anrufe in einem Karosseriebetrieb",
    tabs: [
      { label: "Autofahrer", cards: [
        { title: "Besichtigungstermin", text: "Schadensbegutachtung, Fotoanfragen und Abgabezeiten, mit der richtigen Dauer gebucht." },
        { title: "Reparaturstatus", text: "Wartet auf den Versicherer, Teile bestellt, in der Lackierung oder fertig, aus Ihrer Betriebssoftware gelesen." },
        { title: "Versicherung und Schadensfälle", text: "Mit welchen Versicherern Sie arbeiten, was ein Schadensfall braucht und wie hoch die Selbstbeteiligung ist." },
        { title: "Miet- und Ersatzwagen", text: "Ersatzfahrzeuge, Abholung und Rückgabe, im Gespräch vereinbart." },
        { title: "Kostenvoranschläge und Preise", text: "Was eine Reparatur kostet, was der Kostenvoranschlag abdeckt und wie lange sie dauert." },
        { title: "Öffnungszeiten und Standorte", text: "Öffnungszeiten, Anfahrt und Parken für jeden Standort." },
      ] },
      { label: "Büro", cards: [
        { title: "Überlauf und außerhalb der Öffnungszeiten", text: "Anrufe erreichen Nekaf, wenn das Büro besetzt oder geschlossen ist." },
        { title: "Schadensaufnahme", text: "Schadensnummer, Versicherer, Schadensbeschreibung und Fotos vor der Besichtigung erfasst." },
        { title: "Statusmeldungen", text: "Kunden erfahren, wenn Teile eintreffen und wenn das Auto fertig ist, ohne Anrufliste." },
        { title: "Warme Weiterleitung", text: "Streitfälle, Beschwerden und alles Unklare erreichen einen Menschen mit Kontext." },
        { title: "No-Show-Rückgewinnung", text: "Versäumte Besichtigungen innerhalb von zwei Stunden zurückgerufen." },
        { title: "Gesprächszusammenfassungen", text: "Jedes Gespräch transkribiert und in die Auftragsakte geschrieben." },
      ] },
      { label: "Inhaber", cards: [
        { title: "Ein Standard pro Standort", text: "Gleiche Regeln und gleicher Ton an jedem Standort." },
        { title: "Live-Dashboard", text: "Annahmequote, gebuchte Besichtigungen und eingesparte Statusanrufe, pro Standort." },
        { title: "Prüfpfad", text: "Jede Entscheidung mit ihrer Regelversion protokolliert." },
        { title: "Versichererregeln", text: "Skripte, die dem Prozess jedes Versicherers und Ihren eigenen Freigaberegeln folgen." },
        { title: "Kalkulationsanbindung", text: "Status aus CCC, Audatex, Mitchell oder Ihrem System gelesen." },
        { title: "Mehrsprachig", text: "Deutsch, Englisch, Niederländisch und Spanisch, pro Standort." },
      ] },
    ],
    journeyTitle: "Bessere Ergebnisse entlang der gesamten Reparatur",
    journey: [
      { title: "Die Wartezeit bis zur Besichtigung verkürzen", text: "Schadensfälle gelesen, Fahrer angerufen und der richtige Termin gebucht." },
      { title: "Weiterleiten, was zählt", text: "Nicht fahrbereite Fahrzeuge und Fristen der Versicherer folgen Ihren Regeln und erreichen die richtige Person." },
      { title: "Die Lackierkabine voll halten", text: "Erinnerungen, No-Show-Rückgewinnung und Wartelistenfüllung." },
      { title: "Dem Büro seine Zeit zurückgeben", text: "Statusfragen ohne Personal beantwortet." },
      { title: "Berichtet wie ein Teammitglied", text: "Jeder Anruf und jedes Ergebnis auf einem Dashboard." },
    ],
    photo: PHOTOS.bodyshop, photoAlt: "Lackierer lackiert eine Autotür in der Lackierkabine",
    quote: { quote: "Kunden sagen uns, das Telefon sei endlich einfach. Unsere Mechaniker sagen dasselbe.", name: "Dave", role: "Serviceleiter, Legacy Auto Clinic" },
    agents: [
      { mock: "agent-frontdesk", title: "Büro", text: "Beantwortet, bucht und verschiebt, rund um die Uhr." },
      { mock: "agent-referral", title: "Schadensaufnahme", text: "Liest den Schadensfall, fragt Fehlendes nach und bereitet den Kostenvoranschlag vor." },
      { mock: "agent-orders", title: "Reparaturstatus", text: "Sagt Anrufern, wo ihr Auto und ihre Teile stehen." },
      { mock: "agent-noshow", title: "No-Show-Rückgewinnung", text: "Bucht versäumte Besichtigungen neu und berichtet, was zurückgewonnen wurde." },
    ],
  }),
  specialty({
    slug: "tire-centers", name: "Reifenservice", short: "Reifen- und Schnellservicebetriebe",
    subtitle: "Saisonspitzen beantwortet. Jeder Termin belegt.",
    description: "KI-Sprachagenten für Reifen- und Schnellservicebetriebe. Jeden Anruf in der Saisonspitze beantworten, Reifenwechsel und Schnellservice buchen und den Lagerbestand telefonisch prüfen.",
    media: VIDEOS.tire,
    overlay: [
      { side: "start", kind: "user", name: "Anrufer", text: "Ich muss vor dem Wochenende auf Winterreifen wechseln." },
      { side: "end", kind: "agent", text: "Ihr Wintersatz ist bei uns eingelagert. Freitag um 9:20 Uhr passt, es dauert etwa 45 Minuten. Soll ich das buchen?" },
    ],
    cardsTitle: "Bewährt für die häufigsten Anrufe in einem Reifenservice",
    tabs: [
      { label: "Autofahrer", cards: [
        { title: "Reifenwechsel buchen", text: "Saisonwechsel, neue Sätze und Reparaturen, mit der richtigen Dauer und der richtigen Hebebühne gebucht." },
        { title: "Lagerbestand und Preise", text: "Welche Größen und Marken vorrätig sind, was sie kosten und wann sie montiert werden können." },
        { title: "Reifeneinlagerung", text: "Wo ein eingelagerter Satz liegt, wann er zuletzt montiert wurde und wann gewechselt werden sollte." },
        { title: "Schnellservice", text: "Ölwechsel, Bremsen, Batterien, Wischerblätter und Achsvermessung, in Minuten gebucht." },
        { title: "Reifenpanne und Pannenhilfe", text: "Platte Reifen und Anrufe von der Straße folgen Ihren Regeln und erreichen die richtige Person." },
        { title: "Öffnungszeiten und Standorte", text: "Öffnungszeiten, Anfahrt und Wartebereich für jede Filiale." },
      ] },
      { label: "Empfang", cards: [
        { title: "Saisonaler Überlauf", text: "Die Spitzen im Oktober und April ohne Mailbox beantwortet." },
        { title: "Abholbereit-Anrufe", text: "Kunden erfahren sofort, wenn ihr Auto fertig ist, und rufen nicht mehr nach." },
        { title: "Erinnerungen", text: "Saisonwechsel und Nachfassen bei abgefahrenem Profil ohne Anrufliste gebucht." },
        { title: "Warme Weiterleitung", text: "Beschwerden und alles Unklare erreichen einen Menschen mit Kontext." },
        { title: "No-Show-Rückgewinnung", text: "Versäumte Termine zurückgerufen und neu gebucht." },
        { title: "Gesprächszusammenfassungen", text: "Jedes Gespräch transkribiert und in die Kundenakte geschrieben." },
      ] },
      { label: "Filialleiter", cards: [
        { title: "Ein Standard pro Filiale", text: "Gleiche Begrüßung und Regeln in der gesamten Kette." },
        { title: "Live-Dashboard", text: "Annahmequote, Buchungen und Bestandsfragen pro Filiale." },
        { title: "Prüfpfad", text: "Jede Entscheidung mit ihrer Regelversion protokolliert." },
        { title: "Bestandsanbindung", text: "Verfügbarkeit und Einlagerung aus Ihrem Reifenverwaltungssystem gelesen." },
        { title: "Marketing-Nachfassen", text: "Bestätigungen und Erinnerungen halten den Saisonkalender voll." },
        { title: "Mehrsprachig", text: "Deutsch, Englisch, Niederländisch und Spanisch, pro Filiale." },
      ] },
    ],
    journeyTitle: "Bessere Ergebnisse für Autofahrer, Filialen und Ihr Team",
    journey: [
      { title: "Jeden Autofahrer sofort beantworten", text: "Keine Warteschleife, keine Mailbox, auch nicht am ersten kalten Samstag im Oktober." },
      { title: "Echte Notfälle weiterleiten", text: "Ihre Regeln entscheiden, was den diensthabenden Monteur erreicht, und wie schnell." },
      { title: "Die Hebebühnen voll halten", text: "Erinnerungen, Fälligkeiten und No-Show-Rückgewinnung schützen jeden Termin." },
      { title: "Den Empfang entlasten", text: "Bestands- und Einlagerungsfragen ohne Personal beantwortet." },
      { title: "Jede Filiale auf einen Blick", text: "Ein Dashboard für Anrufe und Buchungen über alle Standorte." },
    ],
    photo: PHOTOS.tireshop, photoAlt: "Reifenmonteur zeigt einem Kunden zwei Reifenoptionen",
    quote: { quote: "Die Einführung ging schnell. Wir haben die Nummer an einem Dienstag weitergeleitet und am Donnerstag keine Anrufe mehr verpasst.", name: "Dave", role: "Serviceleiter, Legacy Auto Clinic" },
    agents: [
      { mock: "agent-frontdesk", title: "Empfang", text: "Beantwortet, bucht und verschiebt, rund um die Uhr." },
      { mock: "agent-reorder", title: "Reifeneinlagerung und Wechsel", text: "Findet den eingelagerten Satz und bucht den Saisonwechsel." },
      { mock: "agent-recall", title: "Erinnerungen", text: "Saisonwechsel ohne Anrufliste gebucht." },
      { mock: "agent-noshow", title: "No-Show-Rückgewinnung", text: "Bucht versäumte Termine neu und berichtet, was zurückgewonnen wurde." },
    ],
  }),
];

/* ---------- customer stories ---------- */
const stories: Story[] = [
  {
    slug: "van-nuland",
    meta: { title: "Autobedrijf van Nuland | Nekaf", description: "Wie eine Familienwerkstatt in Volkel im ersten Monat von 30 % verpassten Anrufen auf null kam." },
    customer: "Autobedrijf van Nuland", logo: logos[0].src, logoAlt: "Autobedrijf van Nuland",
    title: "Von 30 % verpassten Anrufen auf null, im ersten Monat.",
    hero: { image: PHOTOS.storyVannuland, alt: "Empfang einer Familienwerkstatt" },
    stats: [{ value: "0%", label: "Anrufe unbeantwortet" }, { value: ">60%", label: "Ohne Personal erledigt" }, { value: "+23%", label: "Termine gebucht" }],
    industry: "Freie Werkstätten",
    body: [
      { type: "h2", text: "Eine Theke, eine Telefonleitung, sechzig Jahre Kunden." },
      { type: "p", text: "Autobedrijf van Nuland ist eine Familienwerkstatt in Volkel im Süden der Niederlande, die seit 1962 alle Marken wartet. Die Theke nimmt auch Fahrzeuge an und gibt Schlüssel zurück. Zu Stoßzeiten und nach 17 Uhr blieb ein Drittel der Anrufe unbeantwortet, und die Hälfte der Anrufer, die auf der Mailbox landeten, rief nie zurück." },
      { type: "p", text: "Die Werkstatt leitete ihre bestehende Nummer an Nekaf weiter. Buchen, Verschieben, Fahrzeugstatus und Öffnungszeiten wurden in der ersten Woche eingerichtet, zusammen mit Pannenregeln, die der Inhaber freigab. Nekaf war in unter zwei Wochen live." },
      { type: "media", media: { kind: "mock", name: "story-vannuland" } },
      { type: "h2", text: "Was sich geändert hat." },
      { type: "p", text: "Jeder Anruf wird jetzt beim ersten Klingeln angenommen, auch fünfzig gleichzeitig. Mehr als sechs von zehn Anrufen werden vollständig ohne Personal erledigt: Auskünfte, Fahrzeugstatus und Buchungen. Pannen erreichen den diensthabenden Mechaniker in Sekunden, mit Zusammenfassung." },
      { type: "p", text: "Die Zahlen stammen aus 8.420 eingehenden Anrufen im Mai und Juni 2026. Anrufer, die früher auflegten, buchen jetzt, ebenso Anrufer außerhalb der Öffnungszeiten. Die Buchungen stiegen um 23 Prozent, und die Theke gewann rund 170 Stunden im Monat zurück." },
      { type: "quote", quote: "Es kennt den Unterschied zwischen einem HU-Termin und der Frage, ob das Auto fertig ist. Unsere Theke hat endlich Zeit für den Kunden, der davor steht.", name: "Bas", role: "Inhaber, Autobedrijf van Nuland" },
    ],
    card: { image: PHOTOS.frontdesk, alt: "Theke einer Werkstatt", stat: { value: "0%", label: "Anrufe unbeantwortet" } },
  },
  {
    slug: "broekema",
    meta: { title: "Broekema | Nekaf", description: "Wie eine Werkstatt mit zwei Standorten in Drenthe und Groningen aufhörte, Anrufer außerhalb der Öffnungszeiten zu verlieren." },
    customer: "Broekema", logo: logos[1].src, logoAlt: "Broekema",
    title: "Jeder Anruf außerhalb der Öffnungszeiten beantwortet, an zwei Standorten.",
    hero: { image: PHOTOS.storyBroekema, alt: "Werkstatt mit vier Hebebühnen" },
    stats: [{ value: "24/7", label: "Erreichbarkeit" }, { value: "2 Sek.", label: "Durchschnittliche Reaktionszeit" }, { value: "48 Std.", label: "Zeit bis live" }],
    industry: "Freie Werkstätten",
    body: [
      { type: "h2", text: "Zwei Standorte, die schneller wuchsen als ihre Telefonanlage." },
      { type: "p", text: "Broekema betreibt markenfreie Werkstätten in Zweeloo und Schildwolde im Norden der Niederlande. Jeder Standort hatte seine eigene Leitung, seine eigene Begrüßung und seine eigenen Lücken. Nach 17 Uhr und samstags gingen Anrufe an eine Mailbox, die nur Nachrichten aufnahm." },
      { type: "p", text: "Nekaf beantwortet jetzt beide Standorte mit einem Standard. Es bucht Inspektionen, HU-Termine und Reifenwechsel auf die richtige Hebebühne, liest die Pannenregeln der Gruppe und leitet mit Zusammenfassung an den diensthabenden Mechaniker weiter." },
      { type: "media", media: { kind: "mock", name: "story-broekema" } },
      { type: "h2", text: "Live in 48 Stunden." },
      { type: "p", text: "Die Werkstatt leitete ihre Nummern an einem Dienstag weiter. Nekaf wurde am selben Tag mit Mechatronikern, Öffnungszeiten und Regeln eingerichtet und ging am Donnerstag live. Die Anbindung des Werkstattplaners folgte später, ohne das Telefon zu unterbrechen." },
      { type: "quote", quote: "Anrufe, ob das Auto fertig ist, haben früher unsere Nachmittage gefressen. Jetzt sagt das Telefon den Leuten, dass ihr Auto fertig ist, bevor sie daran denken zu fragen.", name: "Marieke", role: "Serviceleiterin, Broekema" },
    ],
    card: { image: PHOTOS.lift, alt: "Mechaniker unter einem Auto auf der Hebebühne", stat: { value: "24/7", label: "Erreichbarkeit" } },
  },
  {
    slug: "legacy-auto-clinic",
    meta: { title: "Legacy Auto Clinic | Nekaf", description: "Wie ein Familienbetrieb in Castle Rock, Colorado, Status- und Kostenvoranschlagsanrufe aus der Werkstatt holte." },
    customer: "Legacy Auto Clinic", logo: logos[2].src, logoAlt: "Legacy Auto Clinic",
    title: "Status- und Kostenvoranschlagsanrufe, erledigt bevor die Werkstatt öffnet.",
    hero: { image: PHOTOS.storyLegacy, alt: "Kfz-Werkstatt mit offenen Toren" },
    stats: [{ value: ">60%", label: "Anrufe ohne Personal erledigt" }, { value: "≈170 Std.", label: "Eingesparte Personalstunden pro Monat" }],
    industry: "Freie Werkstätten",
    body: [
      { type: "h2", text: "Volle Hebebühnen, vollere Telefone." },
      { type: "p", text: "Legacy Auto Clinic ist eine familiengeführte Werkstatt in Castle Rock, Colorado, mit ASE-zertifizierten Mechanikern und einem treuen Kundenstamm vor Ort. Die meisten Anrufe drehten sich um dieselben drei Dinge: Ist mein Auto fertig, was kostet es und wann habt ihr geöffnet. Jeder davon holte einen Mechaniker von der Hebebühne oder den Serviceberater von einem Kunden weg." },
      { type: "p", text: "Nekaf beantwortet diese Anrufe aus der Werkstattsoftware und dem Werkstattplaner. Abholbereit-Anrufe gehen raus, sobald ein Auftrag abgeschlossen ist, sodass Kunden nicht mehr nachfragen. Kostenvoranschläge werden vorgelesen, mit dem, was sie enthalten und was sich geändert hat, und Freigaben werden im Gespräch erfasst." },
      { type: "media", media: { kind: "mock", name: "story-legacy" } },
      { type: "h2", text: "Was die Mechaniker bemerkten." },
      { type: "p", text: "Weniger Unterbrechungen und ruhigere Montage. Alles, was der Agent nicht beantworten kann, etwa eine Garantiefrage oder eine Reklamation, erreicht einen Menschen mit dem Transkript." },
      { type: "quote", quote: "Kunden sagen uns, das Telefon sei endlich einfach. Unsere Mechaniker sagen dasselbe.", name: "Dave", role: "Serviceleiter, Legacy Auto Clinic" },
    ],
    card: { image: PHOTOS.tireshop, alt: "Kunde wählt Reifen an der Theke", stat: { value: ">60%", label: "Ohne Personal erledigt" } },
  },
];

/* ---------- product pages ---------- */
const related = (exclude: string) =>
  [
    { key: "console", title: "Console", text: "Ihr Tag, schon sortiert. Das Morgenbriefing, was Sie braucht, und jeder Anruf an einem Ort.", href: "/product/console", mock: "briefing", zoom: 1.1, linkLabel: "Mehr entdecken" },
    { key: "ask", title: "Ask Nekaf", text: "Verbinden Sie Ihre Systeme und fragen Sie alles zu Ihrer eigenen Werkstatt. 90 Tage kostenlos.", href: "/product/ask-nekaf", mock: "insights-query", linkLabel: "Mehr entdecken" },
    { key: "agents", title: "Agenten", text: "Eine Aufgabe, ein Preis, ein Dashboard. Starten Sie mit der Serviceannahme und fügen Sie den nächsten Agenten per Klick hinzu.", href: "/product/agents", mock: "agent-frontdesk", linkLabel: "Mehr entdecken" },
    { key: "integrations", title: "Integrationen", text: "Funktioniert mit Ihrer Telefonanlage, Ihrem Kalender und Ihrer Werkstattsoftware. Standalone starten, verbinden, wenn Sie bereit sind.", href: "/product/integrations", mock: "hz-context", linkLabel: "Mehr entdecken" },
  ].filter((c) => c.key !== exclude);

const de: Site = {
  lang: "de",
  meta: {
    name: "Nekaf",
    titleSuffix: " | Nekaf",
    description: "KI-Sprachagenten für Werkstätten, Autohäuser, Karosseriebetriebe und Reifenservicebetriebe. Jeder Kundenanruf beantwortet, jeder Servicetermin gebucht, rund um die Uhr.",
    tel: TEL, telDisplay: TEL_DISPLAY, email: EMAIL, calendly: CALENDLY, linkedin: LINKEDIN, signIn: SIGN_IN,
  },
  ui: {
    nav: {
      product: "Produkt", specialties: "Branchen", customers: "Kunden", company: "Unternehmen", signIn: "Anmelden", cta: bookDemo,
      productOverview: { title: "Produktübersicht", text: "KI-Sprachagenten, die beantworten, buchen und nachfassen, in einer Console.", button: "Nekaf kennenlernen" },
      productGroups: [
        { label: "Betreiben", items: [
          { label: "Console", text: "Ihr Tag, schon sortiert.", href: "/product/console" },
          { label: "Ask Nekaf", text: "Kostenlose Antworten aus Ihren eigenen Werkstattdaten.", href: "/product/ask-nekaf" },
        ] },
        { label: "Wachsen", items: [
          { label: "Agenten", text: "Serviceannahme, Erinnerungen, Fahrzeugstatus und mehr.", href: "/product/agents" },
          { label: "Integrationen", text: "Telefonanlage, Kalender und Werkstattsoftware.", href: "/product/integrations" },
        ] },
        { label: "Tarife", items: [
          { label: "Preise", text: "Einfache Monatstarife. Keine Verträge.", href: "/pricing" },
        ] },
      ],
      specialtyItems: [
        { label: "Freie Werkstätten", text: "Jeder Anruf beantwortet, jede Hebebühne belegt.", href: "/specialties/garages" },
        { label: "Autohäuser", text: "Ein Standard für Verkauf, Service und Teile.", href: "/specialties/dealerships" },
        { label: "Karosserie- und Lackierbetriebe", text: "Schadensfälle, Kostenvoranschläge und Reparaturstatus ohne Warteschleife.", href: "/specialties/body-shops" },
        { label: "Reifenservice", text: "Saisonspitzen beantwortet, jeder Termin belegt.", href: "/specialties/tire-centers" },
      ],
      companyItems: [
        { label: "Über uns", text: "Wer Nekaf baut, und warum.", href: "/about" },
        { label: "Karriere", text: "Helfen Sie dem Kfz-Aftermarket, jeden Anruf zu beantworten.", href: "/careers" },
        { label: "Ressourcen", text: "Leitfäden, Vergleiche und Kundengeschichten.", href: "/resources" },
        { label: "Demo buchen", text: "Wählen Sie einen Termin mit einem Gründer.", href: "/demo" },
      ],
      language: "Sprache", menu: "Menü", close: "Schließen",
    },
    footer: {
      tagline: "KI-Sprachagenten für den Kfz-Aftermarket. Ihre Werkstatt läuft. Auch wenn Sie nicht da sind.",
      groups: [
        { title: "Produkt", items: [
          { label: "Produktübersicht", href: "/product" }, { label: "Console", href: "/product/console" }, { label: "Ask Nekaf", href: "/product/ask-nekaf" }, { label: "Agenten", href: "/product/agents" }, { label: "Integrationen", href: "/product/integrations" }, { label: "Preise", href: "/pricing" },
        ] },
        { title: "Branchen", items: [
          { label: "Alle Branchen", href: "/specialties" }, { label: "Freie Werkstätten", href: "/specialties/garages" }, { label: "Autohäuser", href: "/specialties/dealerships" }, { label: "Karosserie- und Lackierbetriebe", href: "/specialties/body-shops" }, { label: "Reifenservice", href: "/specialties/tire-centers" },
        ] },
        { title: "Kunden", items: [{ label: "Kundengeschichten", href: "/customers" }, { label: "Autobedrijf van Nuland", href: "/customers/van-nuland" }, { label: "Broekema", href: "/customers/broekema" }, { label: "Legacy Auto Clinic", href: "/customers/legacy-auto-clinic" }] },
        { title: "Unternehmen", items: [{ label: "Über uns", href: "/about" }, { label: "Sicherheit und Compliance", href: "/safety-compliance" }, { label: "Ressourcen", href: "/resources" }, { label: "Karriere", href: "/careers" }, { label: "Demo buchen", href: "/demo" }, { label: "Anmelden", href: SIGN_IN, external: true }] },
      ],
      legal: [{ label: "Datenschutz", href: "/privacy" }, { label: "AGB", href: "/terms" }, { label: "Cookie-Richtlinie", href: "/cookies" }],
      copyright: "© 2026 Nekaf",
    },
    consent: {"text":"Wir nutzen ein Analysetool (PostHog, in der EU gehostet), um zu sehen, welche Seiten Besuchern helfen. Es läuft nur, wenn Sie zustimmen. Keine Werbe-Cookies.","accept":"Analysen akzeptieren","decline":"Ablehnen","policy":"Cookie-Richtlinie"},
    common: {
      bookDemo: "Demo buchen", callDemo: "Demo-Hotline anrufen", demoNote: "Mit einem Gründer sprechen. Unverbindlich.", learnMore: "Mehr erfahren", readStory: "Geschichte lesen", readMore: "Mehr lesen", discoverMore: "Mehr entdecken", fullStory: "Ganze Geschichte", getStarted: "Jetzt starten", contactSales: "Vertrieb kontaktieren", mostPopular: "Am beliebtesten", perMonth: "/Monat", playVideo: "Video abspielen", pauseVideo: "Video pausieren", customerStories: "Kundengeschichten", allSpecialties: "Alle Branchen", openRoles: "Offene Stellen", search: "Suchen", skip: "Zum Inhalt springen",
    },
  },

  home: {
    meta: { title: "KI-Sprachagenten für Werkstätten und Autohäuser | Nekaf", description: "KI-Sprachagenten für Werkstätten, Autohäuser, Karosseriebetriebe und Reifenservicebetriebe, die Fragen beantworten, Servicetermine buchen und Routineanfragen erledigen, rund um die Uhr." },
    hero: {
      title: "Jeder Kundenanruf beantwortet.\nJede Hebebühne belegt.",
      subtitle: "KI-Sprachagenten für Werkstätten, Autohäuser, Karosseriebetriebe und Reifenservicebetriebe, die Fragen beantworten, Servicetermine buchen und Routineanfragen erledigen, rund um die Uhr.",
      primary: bookDemo, secondary: callDemo, note: "Mit einem Gründer sprechen. Unverbindlich.",
      slides: [
        { ...VIDEOS.fold1, bubbles: [
          { side: "end", kind: "agent", text: "Danke für Ihren Anruf bei Ridgeline Auto Care. Hier ist Nekaf. Wie kann ich helfen?" },
          { side: "start", kind: "user", name: "Sarah", text: "Seit heute Morgen leuchtet die Motorkontrollleuchte, und der Wagen zieht nicht mehr richtig." },
          { side: "end", kind: "agent", text: "Das sollten wir uns heute noch ansehen. Um 14:40 Uhr hat Marco Zeit für eine Diagnose. Soll ich das buchen?" },
          { side: "start", kind: "user", name: "Sarah", text: "Ja, bitte." },
          { side: "end", kind: "agent", text: "Erledigt. Sie sind heute um 14:40 Uhr eingetragen. Die Bestätigung habe ich per SMS geschickt." },
        ] },
        { ...VIDEOS.fold2, bubbles: [
          { side: "end", kind: "agent", text: "Danke für Ihren Anruf bei Legacy Auto Clinic. Hier ist Nekaf. Wie kann ich helfen?" },
          { side: "start", kind: "user", name: "Daniel", text: "Ich habe heute Morgen meinen Wagen wegen der Bremsen abgegeben. Ist er fertig?" },
          { side: "end", kind: "agent", text: "Ich schaue nach. Wie lautet Ihr Kennzeichen?" },
          { side: "start", kind: "user", name: "Daniel", text: "K-LM 4-7-2." },
          { side: "end", kind: "agent", text: "Die Bremsen sind fertig, der Wagen ist gerade auf Probefahrt. Ab 16 Uhr abholbereit, Herr Okafor. Wir haben heute bis 18 Uhr geöffnet." },
        ] },
        { ...VIDEOS.fold3, bubbles: [
          { side: "end", kind: "agent", text: "Autobedrijf van Nuland, hier ist Nekaf. Wie kann ich helfen?" },
          { side: "start", kind: "user", name: "Lena", text: "Ich muss vor dem Wochenende auf Winterreifen wechseln." },
          { side: "end", kind: "agent", text: "Ihr Wintersatz ist bei uns eingelagert. Freitag um 9:20 Uhr passt, es dauert etwa 45 Minuten. Soll ich das buchen?" },
          { side: "start", kind: "user", name: "Lena", text: "Ja, Freitag passt." },
          { side: "end", kind: "agent", text: "Gebucht. Am Donnerstag bekommen Sie eine Erinnerung per SMS. Noch etwas?" },
        ] },
      ],
    },
    logos: { title: "Bearbeitet täglich Hunderte Gespräche bei:", logos },
    demo: {
      title: "Hören Sie, wie Nekaf einen echten Anruf annimmt",
      lede: "Drücken Sie auf Play, oder rufen Sie die Demo-Hotline an und probieren Sie es selbst.",
      sampleLabel: "Beispielanruf (Englisch) · Augenuntersuchung verschieben",
      duration: "0:47", play: "Beispielanruf abspielen", stop: "Stopp", hint: "Das Transkript folgt dem Anruf.",
      call: callDemo, note: "Es ist Nekaf, das antwortet.",
      transcript: [
        { who: "agent", at: 0, text: "Hi, I'm Julia, Nekaf's digital assistant. This call may be recorded. How can I help?" },
        { who: "caller", at: 6, text: "Hey Julia, this is Peter. I have an eye exam scheduled. Can I reschedule it to next week?" },
        { who: "agent", at: 18, text: "Absolutely, Peter. I've found your details connected to the phone number you're calling from. What day and time next week would you prefer for your eye exam?" },
        { who: "caller", at: 26, text: "Tuesday, either 3:00 or 4:00 PM, if that's possible." },
        { who: "agent", at: 32, text: "I've moved your eye exam to Tuesday at 4:00 PM. You're all set, and I'll send a confirmation text message to the number you're calling from. Is there anything else I can help you with?" },
        { who: "caller", at: 41, text: "Amazing. That's it. Thank you." },
        { who: "agent", at: 46, text: "You're very welcome, Peter. Goodbye." },
      ],
    },
    bento: {
      title: "Ihre Werkstatt läuft.\nAuch wenn Sie nicht da sind.",
      lede: "Nekaf beantwortet, bucht und fasst nach, damit sich Ihr Team auf das Auto auf der Hebebühne und den Kunden an der Theke konzentrieren kann.",
      cards: [
        { id: "green", title: "Aus jedem Anruf einen gebuchten Auftrag machen", body: "Jeden Anruf beantworten, Tag und Nacht, und direkt in Ihren Werkstattplaner buchen.", sr: "Animation von Anrufen verschiedener Werkstätten, die beantwortet und gebucht werden." },
        { id: "blue", title: "Jedem Team seine Zeit zurückgeben", body: "Serviceannahme, Mechatroniker und Leitung hören auf zu telefonieren und kümmern sich um Autos.", sr: "Animation der Auswahl eines Servicetermins und einer Reifenwechsel-Buchung." },
        { id: "pink", title: "Ein Agent auf jedem Kanal", body: "Sprache zuerst, mit Webchat, E-Mail, SMS und WhatsApp unter denselben Regeln.", sr: "Animation eines Gesprächs, das sich über Sprache, Chat, E-Mail und SMS bewegt." },
        { id: "orange", title: "Für erledigte Arbeit bezahlen", body: "Einfache Monatstarife. Keine Verträge. Jederzeit kündbar.", sr: "Animation von Bewertungen und einem abgeschlossenen Ergebnis." },
      ],
    },
    console: { title: "Die Console kennenlernen", lede: "Jeder Anruf, jede Buchung und jede Übergabe an einem Ort. Fragen Sie alles in einfacher Sprache." },
    proof: {
      title: "Was sich änderte, als Nekaf das Telefon übernahm",
      lede: "Gemessen bei Broekema, vor und nachdem Nekaf das Telefon übernahm.",
      outcomes: [
        { after: "+23%", label: "Mehr gebuchte Servicetermine", text: "Anrufer außerhalb der Öffnungszeiten und Anrufer, die früher auflegten, buchen jetzt." },
        { after: "≈170 Std.", label: "Eingesparte Personalstunden pro Monat", text: "2.526 Anrufe im Monat ohne Personal erledigt, bei vier Minuten pro Anruf." },
        { before: "4 Min.", after: "2 Sek.", label: "Durchschnittliche Reaktionszeit", text: "Von vier Minuten Warteschleife zu Stoßzeiten zu einer Antwort beim ersten Klingeln." },
        { before: "0%", after: ">60%", label: "Ohne Personal erledigt", text: "Mehr als sechs von zehn Anrufen werden vollständig abgeschlossen: Öffnungszeiten, Fahrzeugstatus, Buchungen." },
        { before: "50%", after: "0%", label: "Verpasste Anrufer, die nie wieder anriefen", text: "Die Hälfte der Anrufer auf der Mailbox rief nie zurück. Es gibt keine Mailbox mehr." },
        { before: "30%", after: "0%", label: "Nie beantwortete Anrufe", text: "Fast ein Drittel der Anrufe blieb unbeantwortet. Jetzt wird jeder Anruf angenommen, auch 50 gleichzeitig." },
      ],
      source: "Ergebnisse aus 8.420 eingehenden Anrufen im Mai und Juni 2026 bei Broekema.",
    },
    agents: {
      title: "Die Agenten kennenlernen",
      lede: "Jeder erledigt eine Aufgabe, von Anfang bis Ende, und berichtet Ihnen jeden Tag.",
      cta: { label: "Alle Agenten", href: "/product/agents" },
      tiles: [
        { mock: "agent-frontdesk", title: "Serviceannahme", text: "Beantwortet jeden Anruf, bucht, verschiebt und storniert, rund um die Uhr." },
        { mock: "agent-orders", title: "Fahrzeugstatus", text: "Sagt Anrufern, wo ihr Auto, ihre Teile oder ihr Schadensfall stehen." },
        { mock: "agent-recall", title: "Erinnerungen und Fälligkeiten", text: "Findet jedes Auto, bei dem Inspektion, HU oder Reifenwechsel fällig ist, und bucht es." },
        { mock: "agent-noshow", title: "No-Show-Rückgewinnung", text: "Ruft jeden No-Show innerhalb von zwei Stunden an und bucht neu." },
      ],
    },
    live: {
      title: "Live in 48 Stunden. Nicht in 48 Tagen.",
      lede: "Nichts zu installieren, nichts zu ersetzen. Nekaf funktioniert vom ersten Tag an eigenständig.",
      steps: [
        { mock: "hz-proactive", title: "Nummer weiterleiten", text: "Anrufe gehen an Nekaf: alle, nur der Überlauf oder nur außerhalb der Öffnungszeiten. Ihre Nummer bleibt gleich." },
        { mock: "journeys", title: "Wir richten Ihre Regeln ein", text: "Hebebühnen, Mechatroniker, Öffnungszeiten, Auftragsdauern und Pannenregeln, mit Ihrem Team konfiguriert. Sie geben jede Antwort frei." },
        { mock: "ins-observability", title: "Live gehen", text: "Sehen Sie die ersten Anrufe in Ihrem Dashboard. Verbinden Sie Ihre Werkstattsoftware, wenn Sie bereit sind." },
      ],
    },
    quotes: {
      title: "Die Ergebnisse sprechen für sich",
      lede: "Werkstätten, die jeden Anruf beantworten, in ihren eigenen Worten.",
      items: [
        { quote: "Es kennt den Unterschied zwischen einem HU-Termin und der Frage, ob das Auto fertig ist. Unsere Theke hat endlich Zeit für den Kunden, der davor steht.", name: "Bas", role: "Inhaber, Autobedrijf van Nuland", logo: logos[0].src, logoAlt: "Autobedrijf van Nuland", ...PEOPLE.bas, href: "/customers/van-nuland" },
        { quote: "Kunden sagen uns, das Telefon sei endlich einfach. Unsere Mechaniker sagen dasselbe.", name: "Dave", role: "Serviceleiter, Legacy Auto Clinic", logo: logos[2].src, logoAlt: "Legacy Auto Clinic", ...PEOPLE.dave, href: "/customers/legacy-auto-clinic" },
        { quote: "Anrufe, ob das Auto fertig ist, haben früher unsere Nachmittage gefressen. Jetzt sagt das Telefon den Leuten, dass ihr Auto fertig ist, bevor sie daran denken zu fragen.", name: "Marieke", role: "Serviceleiterin, Broekema", logo: logos[1].src, logoAlt: "Broekema", ...PEOPLE.marieke, href: "/customers/broekema" },
      ],
    },
    trust: { title: "Vertrauen und Zuverlässigkeit", text: "Nekaf ist für Verantwortung in der Werkstatt gebaut. Jede Regel, jede Entscheidung und jede Übergabe ist dokumentiert und prüfbar.", badges: TRUST_BADGES },
    cta,
  },

  product: {
    meta: { title: "Produktübersicht | Nekaf", description: "KI-Sprachagenten, die jeden Anruf beantworten, Servicetermine buchen und weiterleiten, was zählt. Sprache zuerst, mit jedem Kanal in der Console." },
    hero: {
      title: "Nekaf kennenlernen",
      subtitle: "Der Sprachagent, der Werkstatt spricht, beim ersten Klingeln abnimmt und nie einen Kunden warten lässt",
      media: { kind: "video", src: VIDEOS.product.video, poster: VIDEOS.product.poster },
      overlay: [
        { side: "start", kind: "user", name: "Anrufer", text: "Kann ich meinen Servicetermin auf Donnerstag verschieben?" },
        { side: "end", kind: "agent", text: "Erledigt. Donnerstag 9:40 Uhr bei Marco. Bringen Sie Schlüssel und Serviceheft mit." },
      ],
      cta: { label: "Beispielanruf anhören", href: "/#demo" },
    },
    sections: [
      { key: "voice", title: "Ihr Sprachagent", lede: "Ein natürliches Gespräch, kein Sprachmenü. Er hört zu, versteht das Anliegen und erledigt die Aufgabe.", mediaSide: "right", media: { kind: "mock", name: "agent-frontdesk" }, features: [
        { icon: "phone", title: "Beantwortet jeden Anruf, rund um die Uhr", text: "Ein Anrufer oder fünfzig gleichzeitig. Tag, Nacht und Wochenende, ohne Warteschleife und ohne Mailbox." },
        { icon: "calendar", title: "Bucht direkt in Ihren Werkstattplaner", text: "Die richtige Auftragsart, der richtige Mechatroniker, die richtige Dauer, per SMS bestätigt." },
        { icon: "shield", title: "Leitet weiter, was zählt", text: "Pannen, Warnleuchten und Anrufe von der Straße: Ihre Regeln entscheiden, und die richtige Person bekommt in Sekunden eine Zusammenfassung." },
      ] },
      { key: "automotive", title: "Der einzige Sprachagent, der eigens für die Werkstatt gebaut wurde", lede: "Zuerst für freie Werkstätten und Autohäuser entwickelt, jetzt auch für Karosserie- und Lackierbetriebe und Reifenservicebetriebe. Trainiert auf mehr als 10.000 Kfz-Begriffe, Teilebezeichnungen und Auftragsarten.", mediaSide: "left", media: { kind: "mock", name: "wheel" }, features: [
        { icon: "checklist", title: "Spricht Ihr Handwerk", text: "Kennt den Unterschied zwischen Zahnriemen und Reifenwechsel, nennt die richtige Dauer und bucht jeden Auftrag korrekt." },
        { icon: "shield", title: "Folgt Ihren Regeln", text: "Auftragsdauern, Qualifikationen der Mechatroniker, Ersatzwagen und Pannenregeln, von Ihrer Werkstattleitung freigegeben." },
        { icon: "reverse", title: "Lernt aus jeder Korrektur", text: "Markieren Sie einen Anruf per Klick als falsch. Die Korrektur wird getestet, bevor sie live geht." },
      ] },
      { key: "channels", title: "Ein Agent auf jedem Kanal", lede: "Sprache zuerst. Webchat, E-Mail, SMS und WhatsApp folgen denselben Regeln und derselben Aufsicht.", mediaSide: "right", media: { kind: "mock", name: "channels-hero" }, features: [
        { icon: "phone", title: "Sprache", text: "Ein- und ausgehende Anrufe auf Ihrer bestehenden Nummer." },
        { icon: "chat", title: "Webchat und E-Mail", text: "Fragen von Ihrer Website und aus dem gemeinsamen Postfach, aus denselben Skripten beantwortet." },
        { icon: "sms", title: "SMS und WhatsApp", text: "Bestätigungen, Erinnerungen und Fertigmeldungen dort, wo Kunden ohnehin sind." },
      ] },
      { key: "trust", title: "Vertrauen und Sicherheit", lede: "Jeder Agent wird geprüft. Jede Entscheidung, die zählt, ist Ihre.", mediaSide: "left", media: { kind: "mock", name: "ins-observability" }, features: [
        { icon: "eye", title: "Der Reviewer", text: "Ein überwachender Agent bewertet Stichproben von Gesprächen auf Genauigkeit, Ton und Ihre Regeln. Sie sehen die Bewertungen." },
        { icon: "user", title: "Übergabe an Menschen", text: "Garantiestreitigkeiten, Beschwerden, komplexe Diagnosen und Zweifel gehen an Ihr Team, mit dem Transkript." },
        { icon: "lock", title: "Vollständiger Prüfpfad", text: "Jeder Anruf, jede Nachricht und jede Buchung protokolliert und belegt. DSGVO, Datenhaltung in der EU." },
      ] },
    ],
    quote: { logo: logos[0].src, logoAlt: "Autobedrijf van Nuland", quote: "Es kennt den Unterschied zwischen einem HU-Termin und der Frage, ob das Auto fertig ist. Unsere Theke hat endlich Zeit für den Kunden, der davor steht.", name: "Bas", role: "Inhaber, Autobedrijf van Nuland", link: { label: "Ganze Geschichte", href: "/customers/van-nuland" } },
    trust,
    pricingTeaser: { title: "Preise, die den Ergebnissen folgen", text: "Ab 279 € im Monat. Keine Einrichtungsgebühr, keine Verträge. Liefert Nekaf keine Ergebnisse, zahlen Sie nichts.", link: { label: "Preise ansehen", href: "/pricing" }, mock: "pricing-card" },
    related: { title: "Die Plattform entdecken", cards: related("") },
    cta,
  },

  consolePage: {
    meta: { title: "Console | Nekaf", description: "Die Nekaf Console: das Morgenbriefing, was Sie braucht, jeder Anruf und jede Buchung, und eine Befehlsleiste, die einfache Sprache versteht." },
    hero: { title: "Console", subtitle: "Ihr Tag, schon sortiert", media: { kind: "mock", name: "dashboard-full" } },
    sections: [
      { key: "today", title: "Mit dem Briefing beginnen", lede: "Die Console öffnet mit dem, was über Nacht passiert ist, und dem, was Sie heute braucht. Tippen ist nicht nötig.", mediaSide: "right", media: { kind: "mock", name: "briefing", zoom: 1.15 }, features: [
        { icon: "sun", title: "Morgenbriefing", text: "Beantwortete Anrufe, gebuchte Termine, weitergeleitete Pannen und alles Ungewöhnliche, jeden Morgen für Sie geschrieben." },
        { icon: "inbox", title: "Braucht Sie", text: "Freigaben, Weiterleitungen und markierte Anrufe in einer Warteschlange, mit vollem Kontext." },
        { icon: "status", title: "Agentenstatus", text: "Arbeit und Status jedes Agenten in der linken Leiste, pro Standort." },
      ] },
      { key: "dashboards", title: "Dashboards, die sich lesen wie der Bericht eines Teammitglieds", lede: "Klicken Sie auf einen Agenten und sehen Sie seine Arbeit: Annahmequote, Buchungen, Gesprächsdauer, Übergaben und Qualitätsbewertungen.", mediaSide: "left", media: { kind: "mock", name: "reporting", zoom: 1.15 }, features: [
        { icon: "chart", title: "Ergebnisse, nicht Versendungen", text: "Gebuchte Termine, zurückgewonnene Werkstattstunden und aufgefangene Telefonstunden, neben dem, was der Agent kostet." },
        { icon: "eye", title: "Reviewer-Panel", text: "Bestehensquote der Stichproben und markierte Läufe, auf jedem Dashboard sichtbar." },
        { icon: "pause", title: "Pausieren per Klick", text: "Jeder Agent, jeder Standort, jederzeit." },
      ] },
      { key: "command", title: "Den Tag aus einer Leiste steuern", lede: "Eine Leiste am unteren Rand jedes Bildschirms. Pausieren Sie einen Agenten, ändern Sie eine Regel oder geben Sie eine Weiterleitung frei, in einem Satz, auf Deutsch, Englisch oder Niederländisch.", mediaSide: "right", media: { kind: "mock", name: "insights-query", zoom: 1.15 }, features: [
        { icon: "search", title: "Belegte Antworten", text: "Jede Antwort nennt das System und den Synchronisationszeitpunkt, aus dem sie stammt." },
        { icon: "undo", title: "Aktionen mit Prüfzeile", text: "Jede Änderung trägt eine Referenz und, wo möglich, ein Rückgängig." },
        { icon: "phone", title: "Auch auf Ihrem Telefon", text: "Dieselbe Console als App, mit Push für Freigaben und das Briefing." },
      ] },
    ],
    quote: { logo: logos[2].src, logoAlt: "Legacy Auto Clinic", quote: "Kunden sagen uns, das Telefon sei endlich einfach. Unsere Mechaniker sagen dasselbe.", name: "Dave", role: "Serviceleiter, Legacy Auto Clinic", link: { label: "Ganze Geschichte", href: "/customers/legacy-auto-clinic" } },
    related: { title: "Verwandte Produkte", cards: related("console") },
    cta,
  },

  askNekaf: {
    meta: { title: "Ask Nekaf | Nekaf", description: "Verbinden Sie Werkstattplaner, Anrufprotokoll und Dokumente und fragen Sie alles zu Ihrer eigenen Werkstatt. 90 Tage kostenlos, bei jedem aktiven Agenten inklusive." },
    hero: { title: "Ask Nekaf", subtitle: "Kostenlose Antworten aus Ihren eigenen Werkstattdaten", media: { kind: "video", src: VIDEOS.insights.video, poster: VIDEOS.insights.poster } },
    sections: [
      { key: "connect", title: "Verbinden, dann fragen", lede: "Nur-Lese-Zugriff auf Ihren Werkstattplaner, Ihr Anrufprotokoll und Ihr gemeinsames Postfach. Unbegrenzte Nutzer. 90 Tage kostenlos.", mediaSide: "right", media: { kind: "mock", name: "explorer-table", zoom: 1.15 }, features: [
        { icon: "plug", title: "Standardanbindungen", text: "Kalender, Telefonanlage, Export aus der Werkstattsoftware und das gemeinsame Postfach, an einem Tag verbunden." },
        { icon: "search", title: "Fragen Sie alles", text: "No-Shows pro Standort, unbeantwortete Anrufe letzte Woche, Autos, die auf Teile warten, gebuchter Umsatz für nächsten Monat." },
        { icon: "doc", title: "Antworten mit Quellen", text: "Text plus Tabellen, mit System und Synchronisationszeitpunkt hinter jeder Zahl." },
      ] },
      { key: "baseline", title: "Ihre Ausgangslage, in Ihren eigenen Zahlen", lede: "Woche eins liefert einen festen Bericht zu den sechs Kennzahlen, die Sie ohnehin nach oben melden.", mediaSide: "left", media: { kind: "mock", name: "briefing", zoom: 1.15 }, features: [
        { icon: "chart", title: "Sechs Erreichbarkeitskennzahlen", text: "Annahmegeschwindigkeit, Abbruchquote, Buchungsgenauigkeit, Anrufe pro Serviceberater, Volumen außerhalb der Öffnungszeiten und Auslastung der Hebebühnen." },
        { icon: "trend", title: "Plus das, was Sie verlieren", text: "Zurückgewonnene Termine und der Teilerückstand, damit der Business Case für den ersten Agenten aus Ihren eigenen Daten kommt." },
        { icon: "reverse", title: "Monatlich neu berichtet", text: "Die Differenz ist immer Ihre Zahl, nicht unsere." },
      ] },
      { key: "next", title: "Der Einstieg für den nächsten Agenten", lede: "Wenn die kostenlose Ebene zeigt, was Sie verpassen, stellen Sie den Agenten ein, der es behebt. Nach der Testphase bei jedem aktiven Agenten inklusive.", mediaSide: "right", media: { kind: "mock", name: "recommendations", zoom: 1.15 }, features: [
        { icon: "sparkles", title: "Erkenntnisse, die irgendwohin zeigen", text: "Jede Erkenntnis verlinkt auf den Agenten, der sie ändern würde." },
        { icon: "lock", title: "Nur lesen, per Design", text: "Die kostenlose Ebene schreibt nie in Ihre Systeme." },
        { icon: "calendar", title: "Ein Enddatum für jede Testphase", text: "90 Tage, danach bei jedem aktiven Agenten inklusive. Keine Überraschungen." },
      ] },
    ],
    related: { title: "Verwandte Produkte", cards: related("ask") },
    cta: { ...cta, title: "Verbinden Sie Ihre Daten diese Woche", text: "90 Tage kostenlos. Sehen Sie Ihre eigene Ausgangslage, bevor Sie etwas entscheiden.", primary: { label: "Kostenlos starten", href: "/demo" } },
  },

  agentsPage: {
    meta: { title: "Agenten | Nekaf", description: "Stellen Sie KI-Agenten für Serviceannahme, Fahrzeugstatus, Erinnerungen, No-Show-Rückgewinnung und mehr ein. Eine Aufgabe, ein Preis, ein Dashboard." },
    hero: { title: "Agenten", subtitle: "Eingestellt wie Personal. Bewiesen, bevor vertraut wird.", media: { kind: "mock", name: "agent-studio-hero" } },
    sections: [
      { key: "hire", title: "Einen Agenten per Klick einstellen", lede: "Starten Sie mit einem. Fügen Sie den nächsten per Klick hinzu. Schalten Sie jeden ab, wann immer Sie wollen.", mediaSide: "right", media: { kind: "mock", name: "simulations", zoom: 1.15 }, features: [
        { icon: "chat", title: "Einrichtung im Gespräch", text: "Der Agent schlägt Regeln aus Ihren Werkstattdaten vor. Sie ändern sie in einfacher Sprache und geben frei." },
        { icon: "eye", title: "Schattenmodus", text: "Eine Woche mit echten Anrufen, ohne zu handeln. Sie sehen alles, was er getan hätte, vom Reviewer bewertet." },
        { icon: "check", title: "Freigabe, dann live", text: "Die Abrechnung beginnt an dem Tag, an dem Sie den Schalter umlegen. Nicht vorher." },
      ] },
      { key: "journeys", title: "Agenten, die die Aufgabe zu Ende bringen", lede: "Kostenvoranschlag raus, Auto gebucht, Kunde informiert, No-Show zurückgewonnen. Jeder Agent verantwortet ein Ergebnis von Anfang bis Ende.", mediaSide: "left", media: { kind: "mock", name: "hz-optimization" }, features: [
        { icon: "flag", title: "Vom Kostenvoranschlag zum Termin", text: "Fasst bei jedem offenen Kostenvoranschlag nach, beantwortet die Fragen und bucht den Auftrag." },
        { icon: "calendar", title: "Erinnerungen und Fälligkeiten", text: "Findet jedes Auto, bei dem Inspektion, HU oder der saisonale Reifenwechsel fällig ist, ruft an, bis gebucht ist, und verhindert No-Shows, bevor sie passieren." },
        { icon: "reverse", title: "No-Show-Rückgewinnung und Warteliste", text: "Ruft innerhalb von zwei Stunden an, bucht neu und füllt freigewordene Termine aus der Warteliste." },
      ] },
    ],
    library: {
      title: "Die Agentenbibliothek",
      lede: "Jeder Agent hat eine Aufgabe. Beginnen Sie mit einem und fügen Sie den nächsten mit einem Klick hinzu.",
      classes: { voice: "Sprache", digital: "Digital" },
      items: [
        { name: "Serviceannahme", job: "Beantwortet Routinefragen rund um die Uhr aus Ihren freigegebenen Skripten und leitet Pannen nach Ihren Regeln weiter.", cls: "voice", from: "In jedem Tarif" },
        { name: "Buchen, verschieben und stornieren", job: "Bucht, verschiebt und storniert Servicetermine bei jedem Anruf, direkt in Ihren Werkstattplaner.", cls: "voice", from: "In jedem Tarif" },
        { name: "Fahrzeugstatus", job: "Sagt Anrufern ohne Warteschlange, wo ihr Auto, ihre Teile oder ihr Schadensfall stehen.", cls: "voice", from: "Professional" },
        { name: "Erinnerungen und Fälligkeiten", job: "Findet jedes Auto, bei dem Inspektion, HU oder Reifenwechsel fällig ist, und ruft an, bis es gebucht ist.", cls: "voice", from: "Professional" },
        { name: "No-Show-Rückgewinnung", job: "Ruft jeden No-Show innerhalb von zwei Stunden an und bucht in den ersten passenden Termin.", cls: "voice", from: "Professional" },
        { name: "Warteliste füllen", job: "Arbeitet bei einem freigewordenen Termin Ihre Warteliste ab, bis er besetzt ist.", cls: "voice", from: "Professional" },
        { name: "Kostenvoranschläge nachfassen", job: "Fasst bei jedem offenen Kostenvoranschlag nach, beantwortet die Fragen und macht aus Freigaben Termine.", cls: "digital", from: "Professional" },
        { name: "Aufnahme und Check-in", job: "Erfasst Kilometerstand, Symptome und Fotos vor dem Besuch und bestätigt die Abgabe.", cls: "digital", from: "Professional" },
        { name: "Webchat und E-Mail", job: "Beantwortet Fragen von Ihrer Website und aus dem Postfach mit denselben Regeln wie am Telefon.", cls: "digital", from: "Professional" },
        { name: "Nachfassen nach der Reparatur", job: "Ruft jeden Kunden nach einer Reparatur an, stellt Ihre Fragen und meldet Probleme an Ihr Team.", cls: "voice", from: "Enterprise" },
        { name: "Schadens- und Kostenvoranschlagsprüfung", job: "Prüft Schadensfälle und Kostenvoranschläge auf fehlende Fotos, Teile und Freigaben, bevor sie zum Versicherer gehen.", cls: "digital", from: "Enterprise" },
        { name: "Kundenabrechnung", job: "Beantwortet Rechnungsfragen und sendet Zahlungslinks. Streitfälle gehen an Ihr Team.", cls: "digital", from: "Enterprise" },
      ],
    },
    quote: { logo: logos[1].src, logoAlt: "Broekema", quote: "Anrufe, ob das Auto fertig ist, haben früher unsere Nachmittage gefressen. Jetzt sagt das Telefon den Leuten, dass ihr Auto fertig ist, bevor sie daran denken zu fragen.", name: "Marieke", role: "Serviceleiterin, Broekema", link: { label: "Ganze Geschichte", href: "/customers/broekema" } },
    related: { title: "Verwandte Produkte", cards: related("agents") },
    cta,
  },

  integrations: {
    meta: { title: "Integrationen | Nekaf", description: "Nekaf funktioniert mit Ihrer Telefonanlage, Ihrem Kalender, Ihrem Werkstattplaner und Ihrem Dealer-Management-System. Standalone starten, verbinden, wenn Sie bereit sind." },
    hero: { title: "Integrationen", subtitle: "Funktioniert mit den Systemen, die Sie schon nutzen", media: { kind: "mock", name: "integrations" } },
    sections: [
      { key: "phone", title: "Ihre Nummer bleibt gleich", lede: "VoIP, Festnetz oder Cloud. Anrufe werden an Nekaf weitergeleitet. Nichts wird ersetzt.", mediaSide: "right", media: { kind: "mock", name: "voice-green" }, features: [
        { icon: "phone", title: "Jede Telefonanlage", text: "RingCentral, Zoom Phone, Twilio, Vonage, eine TK-Anlage oder ein SIP-Trunk." },
        { icon: "reverse", title: "Durchstellen als Auffangnetz", text: "Wenn Nekaf einen Anruf nicht annehmen kann, klingelt es bei Ihrem Team. Bei jedem Go-live getestet." },
        { icon: "clock", title: "Überlauf und außerhalb der Öffnungszeiten", text: "Alle Anrufe weiterleiten, nur den Überlauf oder nur bei geschlossener Werkstatt." },
      ] },
      { key: "dms", title: "Buchungen dort geschrieben, wo sie hingehören", lede: "Bidirektionale Synchronisation mit Ihrem Kalender, Werkstattplaner oder Dealer-Management-System, wenn Sie bereit sind.", mediaSide: "left", media: { kind: "mock", name: "hz-context" }, features: [
        { icon: "calendar", title: "Kalender zuerst", text: "Google, Outlook und Cal.com am ersten Tag verbunden, damit jede Buchung in Ihrem eigenen System landet." },
        { icon: "doc", title: "Werkstatt- und Autohaussoftware", text: "Autoflex, Autotaal, WinCar, CarSys, Werbas, Loco-Soft, Tekmetric, Shopmonkey, Keyloop, CDK und mehr, über API." },
        { icon: "check", title: "Geprüfte Schreibvorgänge", text: "Jede Buchung wird zurückgelesen, bevor sie dem Kunden bestätigt wird. Keine Doppelbuchungen, keine manuelle Eingabe." },
      ] },
      { key: "data", title: "Gebaut, um Kunden- und Fahrzeugdaten zu halten", lede: "Von Tag eins an nach Kennzeichen, FIN und Kunde strukturiert, sodass jeder Datensatz schon die Form hat, die Ihre Systeme erwarten.", mediaSide: "right", media: { kind: "mock", name: "governance" }, features: [
        { icon: "lock", title: "Verschlüsselt und in der Region", text: "AES-256 im Ruhezustand, TLS 1.3 bei der Übertragung, Datenhaltung in der EU oder den USA." },
        { icon: "shield", title: "Minimale Rechte", text: "Zuerst nur lesen. Schreibrechte pro Agent, pro Aktion, protokolliert und umkehrbar." },
        { icon: "plug", title: "API und MCP", text: "Jedes System mit offener API oder MCP-Server, pro Kunde abgegrenzt." },
      ] },
    ],
    logos: {
      title: "Funktioniert mit dem, was Sie haben",
      lede: "Standalone starten. Werkstattplaner, Dealer-Management-System und Telefonanlage verbinden, wenn Sie bereit sind.",
      more: "+20 Integrationspartner",
      groups: [
        { label: "Werkstattsoftware, Niederlande und Deutschland", items: INTEGRATION_LOGOS.garage },
        { label: "Werkstattsoftware, USA", items: INTEGRATION_LOGOS.shop },
        { label: "Dealer-Management-Systeme", items: INTEGRATION_LOGOS.dealer },
        { label: "Karosserie und Kalkulation", items: INTEGRATION_LOGOS.body },
        { label: "Telefonanlagen", items: INTEGRATION_LOGOS.phone },
        { label: "Kalender und CRM", items: INTEGRATION_LOGOS.tools },
      ],
    },
    related: { title: "Verwandte Produkte", cards: related("integrations") },
    cta,
  },

  pricing: {
    meta: { title: "Preise | Nekaf", description: "Ergebnisbasierte Preise für KI-Sprachagenten. Ab 279 € pro Monat. Liefert Nekaf keine Ergebnisse, zahlen Sie nichts." },
    title: "Preise, die den Ergebnissen folgen",
    lede: "Sie zahlen für das, was Nekaf liefert, nicht für Nutzer oder Minuten.",
    from: "Ab 279 € pro Monat",
    how: {
      title: "So funktioniert ergebnisbasierte Preisgestaltung",
      lede: "Ein Monatsbetrag, gekoppelt an das, was der Agent tatsächlich für Ihre Werkstatt leistet.",
      items: [
        { icon: "phone", title: "Ein Monatsbetrag ab 279 €", text: "Enthält den Agenten, die Console, unbegrenzt Nutzer, Einrichtung und Support. Keine Kosten pro Nutzer oder pro Minute." },
        { icon: "chart", title: "An Ergebnisse gekoppelt", text: "Der Betrag folgt dem, was Nekaf liefert: beantwortete Anrufe, gebuchte Aufträge, zurückgewonnene No-Shows. Die Ziele vereinbaren wir vorab mit Ihnen." },
        { icon: "shield", title: "Keine Ergebnisse, keine Kosten", text: "In einem Monat, in dem Nekaf nichts bucht und nichts erledigt, zahlen Sie nichts. Dieses Risiko tragen wir, nicht Sie." },
      ],
    },
    stats: { title: "Die Rechnung geht auf", items: [{ value: "~0 €/Tag", label: "wenn keine Ergebnisse erzielt werden" }, { value: "10.000 €+", label: "übliche monatliche Ersparnis" }, { value: "20%", label: "durchschnittliche Umsatzsteigerung" }] },
    calc: { title: "Was Sie das Telefon kostet", text: "Stellen Sie die Regler auf Ihre eigenen Zahlen. Die Rechnung ist bewusst vorsichtig.", calls: "Eingehende Anrufe pro Monat", missed: "Verpasste Anrufe heute", value: "Wert eines Werkstattauftrags", recovered: "zurückgewonnene Aufträge pro Monat", revenue: "zurückgewonnener Umsatz pro Monat", typical: "Bei Werkstätten sehen wir vor dem Start typischerweise 20 bis 30 %.", note: "Zurückgewonnene Aufträge = verpasste Anrufe × 50 %, die nie zurückrufen × 35 %, die buchen wollten. Zahlen von tatsächlichen Kunden.", currency: "€", currencyAfter: true },
    faq: {
      title: "Fragen zu den Preisen",
      items: [
        { q: "Was zählt als Ergebnis?", a: "Ein Vorgang, den der Agent vollständig abschließt: ein Anruf beantwortet und erledigt, ein Servicetermin gebucht oder verschoben, ein No-Show neu gebucht, ein Fahrzeugstatus bestätigt. Sie sehen jeden einzelnen in der Console." },
        { q: "Was zahle ich in einem Monat ohne Ergebnisse?", a: "Nichts. Der Monatsbetrag gilt nur, wenn Nekaf die vereinbarten Ergebnisse liefert." },
        { q: "Wie wird der Betrag für meine Werkstatt festgelegt?", a: "Wir betrachten Ihr Anrufvolumen und die Ergebnisse, die für Sie zählen, und vereinbaren vor dem Start einen Monatsbetrag und Ziele. Gruppen mit mehreren Standorten erhalten eine Gruppenvereinbarung." },
        { q: "Gibt es Kosten pro Minute oder pro Nutzer?", a: "Nein. Minuten und Nutzer sind unbegrenzt. Der Betrag ist an Ergebnisse gekoppelt, nicht an die Nutzung." },
        { q: "Gibt es Einrichtungsgebühren?", a: "Nein. Einrichtung, Konfiguration und Onboarding sind enthalten." },
        { q: "Kann ich kündigen?", a: "Ja, monatlich. Es gibt keine langen Verträge." },
        { q: "Gibt es eine Testphase?", a: "Ja. Ask Nekaf ist 90 Tage kostenlos, und jeder Agent läuft eine Woche im Schattenmodus, bevor er live geht." },
      ],
    },
    cta: { title: "Angebot für Ihre Werkstatt anfragen", text: "Wir rechnen zurückgewonnene Termine und Personalstunden auf Ihr eigenes Anrufvolumen um und vereinbaren die Ziele mit Ihnen.", primary: contactSales, secondary: callDemo, note: "Mit einem Gründer sprechen. Unverbindlich." },
  },

  specialties: {
    meta: { title: "Branchen | Nekaf", description: "KI-Sprachagenten für freie Werkstätten, Autohäuser, Karosserie- und Lackierbetriebe und Reifenservicebetriebe." },
    title: "Ihr Sprachagent für den Kfz-Aftermarket.",
    lede: "Gebaut für die Anrufe, die Ihre Werkstatt wirklich bekommt. Freie Werkstätten, Autohäuser, Karosserie- und Lackierbetriebe und Reifenservicebetriebe.",
    logos: { title: "", logos },
    quote: { logo: logos[0].src, logoAlt: "Autobedrijf van Nuland", quote: "Es kennt den Unterschied zwischen einem HU-Termin und der Frage, ob das Auto fertig ist. Unsere Theke hat endlich Zeit für den Kunden, der davor steht.", name: "Bas", role: "Inhaber, Autobedrijf van Nuland", link: { label: "Ganze Geschichte", href: "/customers/van-nuland" } },
    cta,
    pages: specialties,
  },

  customers: {
    meta: { title: "Kundengeschichten | Nekaf", description: "Werkstätten, die jeden Anruf beantworten, in ihren eigenen Worten." },
    title: "Unsere Kunden\nin ihren eigenen Worten",
    heroImage: { src: PHOTOS.team, alt: "Werkstattteam vor der Werkstatt", logo: logos[0].src, logoAlt: "Autobedrijf van Nuland" },
    storiesTitle: "Das sind ihre Geschichten",
    featuredTitle: "Ausgewählte Geschichten",
    gridTitle: "Vorreiter im\nKfz-Service",
    stories,
    moreTitle: "Weitere Kundengeschichten",
    cta,
  },

  about: {
    meta: { title: "Über uns | Nekaf", description: "Nekaf nimmt Reibung aus dem Kfz-Service: für Autofahrer, für Serviceberater und für Mechatroniker." },
    title: "Wer wir sind\nund warum wir hier sind.",
    lede: "KI-Sprachagenten für den Kfz-Aftermarket, entwickelt in Amsterdam.",
    image: { src: PHOTOS.workshop, alt: "Moderne Werkstatt mit Hebebühne" },
    statement: { title: "Nekaf nimmt Reibung aus dem Kfz-Service: für Autofahrer, für Serviceberater und für Mechatroniker.", text: "Der Anfang jedes Werkstattbesuchs ist oft der frustrierendste Teil. Telefone, die an der Theke klingeln, Autos, die auf einen Rückruf warten, und Mechatroniker, die von der Hebebühne geholt werden, um Fragen zu beantworten. Wir haben Nekaf gebaut, um das zu ändern, angefangen beim Telefon." },
    values: [
      { icon: "shield", title: "Ihre Regeln zuerst", text: "Jede Funktion, jede Regel und jede Übergabe ist so entworfen, dass Ihr Team die Kontrolle behält. Nekaf verspricht nie eine Reparatur, die es nicht sehen kann, und übergeht nie das Urteil Ihrer Werkstatt. Das ist ein Designprinzip, kein Haftungsausschluss." },
      { icon: "bolt", title: "Schnell zum Nutzen", text: "Live in Tagen, nicht Monaten. Eine Werkstatt leitet ihre Nummer weiter, gibt ihre Regeln frei und sieht in derselben Woche die ersten Anrufe in ihrem Dashboard." },
      { icon: "chart", title: "Beweise statt Versprechen", text: "Wir messen alles und zeigen Ihnen die Zahlen. Wenn etwas nicht funktioniert, sagen wir es Ihnen und beheben es." },
    ],
    founders: {
      title: "Unsere Gründer",
      lede: "Nekaf wurde von Peter-Paul de Leeuw und Thomas Brits gegründet, die fünfzehn Jahre Erfahrung im Aufbau und Verkauf von Softwareunternehmen in Europa an die Werkstatttheke bringen.",
      people: [
        { name: "Peter-Paul de Leeuw", role: "Mitgründer und CEO", image: PHOTOS.peterpaul, text: "Peter-Paul gründete 2017 Amberscript mit, das Amsterdamer Speech-to-Text-Unternehmen, und führte es sieben Jahre als CEO. Er baute es zu einem europäischen Unternehmen aus und übernahm dabei zwei Wettbewerber. Spracherkennung, Sprachmodelle und Kunden, bei denen sie jeden Tag funktionieren müssen, sind seitdem sein Geschäft. Bei Nekaf verantwortet er Produkt und Kundenseite." },
        { name: "Thomas Brits", role: "Mitgründer und CCO", image: PHOTOS.thomas, text: "Thomas hat seine Laufbahn mit dem Verkauf und der Skalierung von Entwickler- und Unternehmenssoftware verbracht. Bei GitHub baute er das Enterprise-Geschäft für die Benelux-Länder auf und leitete anschließend den regionalen Vertrieb für Nordeuropa, wo er mit den größten Unternehmen der Region daran arbeitete, wie sie KI einführen. Bei Nekaf verantwortet er Go-to-Market und Partnerschaften." },
      ],
    },
    offices: { title: "Unser Standort", text: "Von {cities} aus arbeiten wir mit Werkstätten in den Niederlanden, Deutschland und den USA.", cities: ["Amsterdam"] },
    cta: { ...cta, title: "Mehr erfahren?", text: "Erzählen Sie uns von Ihrer Werkstatt, und wir zeigen Ihnen, was Nekaf mit Ihren Anrufen machen würde." },
  },

  resources: {
    meta: { title: "Ressourcen | Nekaf", description: "Leitfäden, Vergleiche und Kundengeschichten zu KI-Sprachagenten für Werkstätten, Autohäuser, Karosseriebetriebe und Reifenservicebetriebe." },
    title: "Ressourcen",
    filters: [{ key: "all", label: "Empfohlen" }, { key: "learn", label: "Leitfäden" }, { key: "compare", label: "Vergleiche" }, { key: "case", label: "Kundengeschichten" }, { key: "blog", label: "Blog" }],
    readTime: "Min. Lesezeit",
    backLabel: "Alle Ressourcen",
    cta,
  },

  careers: {
    meta: { title: "Karriere | Nekaf", description: "Helfen Sie dem Kfz-Aftermarket, jeden Anruf zu beantworten. Offene Stellen bei Nekaf." },
    title: "Hallo, wir sind Nekaf.\nWir freuen uns auf dich.",
    lede: "Baue die Agenten, die für den Kfz-Aftermarket das Telefon abnehmen.",
    cta: { label: "Offene Stellen", href: "#open-roles" },
    image: { src: PHOTOS.team, alt: "Werkstattteam bei der Arbeit" },
    statement: "Wir sind ein kleines Team, das KI-Agenten baut, die Werkstätten wie Personal einstellen, beaufsichtigen und bezahlen. Unsere Arbeit sitzt zwischen Autofahrern und Mechatronikern, deshalb nehmen wir Genauigkeit und Beweise ernst und liefern jede Woche aus. Wenn du echte Kunden, echte Daten und harte Probleme magst, komm und baue mit uns.",
    culture: [
      { icon: "marker", title: "Amsterdam", text: "Wir arbeiten von Amsterdam aus und verbringen die meiste Zeit in Werkstätten. Remote geht, wenn die Aufgabe es zulässt." },
      { icon: "heart", title: "Kunde null", text: "Wir betreiben Nekaf mit Nekaf. Unsere eigene Buchhaltung, Sales Ops und Support laufen auf den Agenten, die wir verkaufen." },
      { icon: "sparkles", title: "Kleines Team, große Hebelwirkung", text: "Zwei Gründer, ein hands-on Tech Lead und agentische Werkzeuge. Du verantwortest ganze Ergebnisse, keine Tickets." },
      { icon: "users", title: "Werkstattpartner", text: "Designpartner in den Niederlanden und Colorado prüfen, was wir bauen, bevor es einen Kunden erreicht." },
    ],
    interviewing: { title: "Bewerben bei Nekaf", paragraphs: ["Wir stellen nach Urteilsvermögen und Tempo ein. Du triffst die Gründer, arbeitest ein echtes Problem aus unserem Backlog durch und sprichst mit einem Kunden.", "Gespräche finden in Amsterdam oder per Videocall statt. So oder so siehst du, wie wir arbeiten, bevor du dich entscheidest."] },
    roles: {
      title: "Offene Stellen", lede: "Wir suchen Menschen, die etwas bauen wollen, auf das sich Werkstätten jeden Tag verlassen.",
      groups: [
        { name: "Vertrieb", roles: [
          { title: "Founding Account Executive, USA", location: "Remote, USA", href: "mailto:" + EMAIL + "?subject=Account%20executive" },
          { title: "Customer Success, Automotive", location: "Amsterdam", href: "mailto:" + EMAIL + "?subject=Customer%20success" },
        ] },
        { name: "Engineering", roles: [
          { title: "Founding Engineer, Sprachagenten", location: "Amsterdam", href: "mailto:" + EMAIL + "?subject=Founding%20engineer" },
        ] },
      ],
    },
    finalCta: { title: "Deine Rolle ist nicht dabei?", text: "Sag uns, was du bauen würdest. Wir lesen jede Nachricht.", primary: { label: "Schreib uns", href: "mailto:" + EMAIL }, note: "" },
  },

  demo: {
    meta: { title: "Demo buchen | Nekaf", description: "Wählen Sie einen Termin mit einem Gründer und hören Sie, wie Nekaf einen Anruf für Ihre Werkstatt annimmt. Unverbindlich." },
    title: "Wählen Sie einen Termin mit einem Gründer.",
    points: [
      { icon: "phone", text: "Jeder Kundenanruf beantwortet, rund um die Uhr, auf Ihrer bestehenden Nummer." },
      { icon: "calendar", text: "Servicetermine direkt in Ihren Werkstattplaner oder Ihr Dealer-Management-System gebucht." },
      { icon: "shield", text: "Pannen und Warnleuchten nach Ihren Regeln weitergeleitet, mit Zusammenfassung." },
    ],
    trustedTitle: "Vertrauen von",
    booking: { title: "Zeitfenster wählen", text: "30 Minuten mit Peter-Paul. Wir hören uns Ihr Anrufvolumen an und zeigen, was Nekaf mit Ihren Anrufen tun würde.", fallback: { label: "Demo-Anfrage senden", href: CALENDLY, external: true }, note: "Unverbindlich." },
  },

  legal: { ...LEGAL.de, cookies: COOKIES.de, safety: SAFETY.de },
};

export default de;
