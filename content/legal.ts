/** Privacy policy and customer terms, one document per language. Structured like the policies of comparable AI voice vendors,
 *  adjusted for a Dutch company that acts as processor and service provider for workshops, dealerships, body shops and tire centers in the EU and the US. */
export type LegalSection = { id: string; title: string; paragraphs: string[]; items?: string[] };
export type LegalDoc = { title: string; updated: string; intro: string; description?: string; sections: LegalSection[] };

const PRIVACY_EMAIL = "privacy@nekaf.ai";

export const LEGAL: Record<string, { privacy: LegalDoc; terms: LegalDoc }> = {
  en: {
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: 25 September 2026",
      intro: "Nekaf B.V. (\"Nekaf\", \"we\", \"us\") values the privacy of the people who visit nekaf.ai, use the Nekaf console at app.nekaf.ai, call our demo line or contact us. This policy explains what we collect, how we use it and the choices you have. By using our website or services you agree to the processing described here.",
      sections: [
        { id: "scope", title: "1. Two roles: controller and processor", paragraphs: [
          "For this website, the console accounts of our customers and our own marketing, Nekaf decides how and why personal data is processed. We are the controller under the GDPR and the responsible business under US state privacy laws.",
          "When a Nekaf agent answers calls, chats or messages for a garage, dealership, body shop or tire center (the \"Workshop\"), the Workshop decides how and why the data of its customers is processed. The Workshop is the controller under the GDPR and the business under US state privacy laws. Nekaf acts as processor under a data processing agreement and, for Workshops in the United States, as service provider under state privacy laws. The Workshop's own privacy notice applies to that data. We are not responsible for how our customers handle personal data.",
        ] },
        { id: "collect", title: "2. Information you give us", paragraphs: ["We collect the information you choose to provide."], items: [
          "Contact and demo requests: name, work email, company name, type of business (independent garage, dealership, body shop or tire center), number of locations, phone number and anything you write in a message or book through our scheduling tool.",
          "Demo line: when you call the demo number, the call is answered by a Nekaf agent and recorded and transcribed so you can hear how it works. The recording is deleted within 30 days unless you ask us to keep it.",
          "Console accounts: name, email address, role, company, location and the settings you change. The console logs who changed what, so your business has an audit trail.",
          "Careers: the details in your application and CV, including anything you share through a third-party service such as LinkedIn.",
          "Correspondence: the content of emails and messages you send us, and whether you opened our emails or clicked a link in them.",
        ] },
        { id: "auto", title: "3. Information we collect automatically", paragraphs: ["When you use the website or console we receive technical information from your device."], items: [
          "Device information: IP address, from which we can infer a general location, device type, browser and operating system.",
          "Usage information: pages viewed, the site you came from, dates and times of visits, and interactions with the console.",
          "Cookies and similar technologies: see section 7. We ask for your consent before setting analytics or marketing cookies in the EU and UK.",
        ] },
        { id: "drivers", title: "4. Customer and vehicle data handled for Workshops", paragraphs: [
          "Calls, transcripts, bookings, job status updates, quotes and messages that a Nekaf agent handles for a Workshop contain personal data about the Workshop's customers, the drivers who call: name, phone number, email address, license plate, VIN, mileage, service history, appointment details and the content of the call, including recordings and transcripts. We process this data only on the Workshop's documented instructions and only to deliver the agreed service: answering, booking, confirming status, escalating and reporting.",
          "Callers are informed at the start of a call that they are speaking with an AI assistant and that the call is recorded, in line with the Workshop's policy and local law. Recordings and transcripts are stored for the retention period agreed with the Workshop and are then deleted or returned.",
          "We do not sell customer or vehicle data. We do not use identifiable customer data to train general-purpose models. Where a Workshop agrees, we may use de-identified, aggregated data to improve call flows and measure quality. De-identified data never contains names, contact details, license plates, VINs or other identifiers.",
        ] },
        { id: "use", title: "5. How we use information", paragraphs: ["We use the information described in sections 2 and 3 to:"], items: [
          "provide, maintain and improve the website, the console and our services;",
          "respond to demo requests, schedule meetings and provide support;",
          "send administrative messages, and marketing messages you can opt out of at any time;",
          "understand how the website and console are used and develop new features;",
          "detect and prevent fraud, abuse and security incidents;",
          "comply with legal obligations, enforce our terms and protect our rights and those of others;",
          "produce aggregated, de-identified statistics that no longer identify anyone.",
        ] },
        { id: "share", title: "6. How we share information", paragraphs: ["We share personal data only as described here."], items: [
          "Service providers that host, transmit or process data on our behalf: cloud hosting in the EU and US, telephony carriers, speech and language model providers under contracts that prohibit training on your data, email and scheduling tools, analytics and customer support software. Each is bound by a data processing agreement.",
          "Our customers: information about calls and bookings is visible to the Workshop the agent works for, and bookings, status updates and notes are written to the calendar, workshop planner or dealer management system the Workshop has connected, on its instruction.",
          "Professional advisers such as lawyers, auditors and insurers, under confidentiality.",
          "Authorities, when required by law, a court order or a lawful request, or to protect the safety of a person.",
          "A buyer or successor in a merger, acquisition or sale of assets, under this policy.",
          "Anyone else, with your consent.",
        ] },
        { id: "cookies", title: "7. Cookies and analytics", paragraphs: [
          "The website uses strictly necessary cookies to work. With your consent we use analytics cookies to understand how the site is used and marketing cookies to measure campaigns. You can change your choice at any time through the cookie settings link in the footer. Blocking cookies in your browser also works but may affect how the console behaves.",
          "Our analytics and advertising partners may use cookies and similar technologies across services. You can opt out of personalised advertising through your browser settings and through industry opt-out pages such as youronlinechoices.eu and optout.aboutads.info.",
        ] },
        { id: "security", title: "8. Security", paragraphs: [
          "We protect data with encryption in transit and at rest, role-based access, multi-factor authentication for staff, logging of access to customer and vehicle data, regular backups and independent testing. Customer and vehicle data is hosted in the region of the Workshop: the EU for European Workshops, the US for American Workshops.",
          "No system is completely secure. If we become aware of a breach that affects your data we will inform you and, where required, the supervisory authority without undue delay.",
        ] },
        { id: "retention", title: "9. Retention", paragraphs: [
          "We keep contact and demo information for as long as we have a business relationship or a legitimate interest in staying in touch, and at most three years after our last contact. Console account data is kept for the life of the customer contract and deleted within 90 days after it ends, unless the law requires longer. Application data is deleted one year after a vacancy closes unless you ask us to keep it. Customer and vehicle data handled for a Workshop is kept for the period agreed with the Workshop.",
        ] },
        { id: "rights", title: "10. Your rights", paragraphs: [
          "If you are in the EU, the UK or Switzerland you can ask us to access, correct, delete or restrict your personal data, to receive a copy in a portable format, and to object to processing based on our legitimate interests, including direct marketing. You can withdraw consent at any time. You can also complain to your supervisory authority; in the Netherlands that is the Autoriteit Persoonsgegevens.",
          "If you are in a US state with a consumer privacy law, such as California or Texas, you have similar rights to know, access, correct and delete your personal data and to opt out of the sale or sharing of personal data. We do not sell personal data. We will not discriminate against you for exercising your rights.",
          "For customer and vehicle data handled on behalf of a Workshop, please contact the Workshop. We will help the Workshop respond within the legal deadlines.",
          "To exercise a right, email " + PRIVACY_EMAIL + ". We may ask you to verify your identity first.",
        ] },
        { id: "transfers", title: "11. International transfers", paragraphs: [
          "Nekaf operates from Amsterdam. Data may be processed in the EU and, for Workshops in the United States, in the US. Where personal data leaves the EU, the UK or Switzerland we rely on the EU-US Data Privacy Framework where the recipient is certified, and otherwise on the European Commission's Standard Contractual Clauses with additional safeguards.",
        ] },
        { id: "children", title: "12. Children", paragraphs: [
          "Our website and console are for professionals and are not directed to children. We do not knowingly collect personal data from anyone under 16 through the website. Data about a caller under 16 that an agent handles for a Workshop is processed under section 4.",
        ] },
        { id: "changes", title: "13. Changes to this policy", paragraphs: [
          "We post changes on this page with a new date at the top. If a change materially affects how we use personal data we already hold about you, we will tell you by email or in the console before it takes effect.",
        ] },
        { id: "contact", title: "14. Contact", paragraphs: [
          "Nekaf B.V., Amsterdam, the Netherlands. Questions, requests and complaints: " + PRIVACY_EMAIL + ".",
        ] },
      ],
    },
    terms: {
      title: "Terms and Conditions",
      updated: "Last updated: 25 September 2026",
      intro: "These terms govern the use of the Nekaf platform and services by garages, dealerships, body shops, tire centers and other organisations (\"Customer\", \"you\"). They apply together with each order form you sign with Nekaf B.V. (\"Nekaf\", \"we\"). Visitors to the website are also bound by section 3.",
      sections: [
        { id: "definitions", title: "1. Definitions", paragraphs: ["Capitalised terms have the following meaning."], items: [
          "Platform: the Nekaf software, including voice and digital agents, the console, Ask Nekaf, integrations, apps and documentation.",
          "Agent: a configured set of call flows, rules and connections that performs a defined job for the Customer, such as answering the service line.",
          "Order Form: the document that describes the Agents, targets, fees and term agreed with the Customer.",
          "Customer Data: all data submitted to the Platform by or for the Customer, including call recordings, transcripts, bookings, job and vehicle records and Driver Data.",
          "Driver Data: Customer Data that identifies a driver or other customer of the Customer, such as name, phone number, license plate, VIN, mileage, service history and appointment details. Driver Data is personal data under the GDPR and under US state privacy laws.",
          "Outcome: a task completed end to end by an Agent as defined in the Order Form, for example a call resolved, a service appointment booked or a no-show rebooked.",
        ] },
        { id: "services", title: "2. The services", paragraphs: [
          "We make the Platform available and provide the professional services described in each Order Form. You are responsible for the equipment, phone lines, internet access and third-party systems you use to reach the Platform, including your calendar, workshop planner and dealer management system.",
          "We may change the Platform to improve it, provided the changes do not materially reduce its security or performance. We provide support during business hours in the Netherlands and, for Customers in the United States, during US business hours, and an emergency line for outages that stop calls from being answered.",
          "All rights not expressly granted are reserved. Nothing in these terms transfers ownership of the Platform.",
        ] },
        { id: "use", title: "3. Accounts and acceptable use", paragraphs: [
          "You are responsible for the people you give access to the console and for keeping credentials confidential. You will notify us promptly of any unauthorised use.",
          "You will not copy, modify, reverse engineer or resell the Platform, use it to build a competing product, probe its security without written permission, upload malicious code, use it for unlawful purposes, or send unsolicited marketing calls or messages through it. You will not use the Platform to give repair diagnoses, decide warranty claims or issue binding quotes other than through a script you have approved under section 5.",
        ] },
        { id: "customer", title: "4. Your responsibilities", paragraphs: ["Because Agents speak with your customers, you agree to:"], items: [
          "review and approve every call flow, script and escalation rule before an Agent goes live, including any script under which an Agent states prices or reads back an estimate, and keep them current;",
          "designate a service manager or workshop lead who signs off on escalation rules for breakdowns, safety-related complaints and disputes, and a point of contact for operational questions;",
          "obtain any consents and provide any notices required by law for call recording, automated calls and messages, and AI use, including the announcement at the start of each call;",
          "keep your calendar, bay and technician capacity, opening hours, price lists and contact details accurate in the connected systems;",
          "maintain a working fallback so calls reach your team if the Platform is unavailable;",
          "comply with laws that apply to you, including the GDPR, US state privacy laws, telemarketing and consumer protection laws and the rules of your trade.",
        ] },
        { id: "safety", title: "5. No diagnoses, warranty decisions or binding quotes", paragraphs: [
          "Agents do not diagnose faults, decide warranty or goodwill claims or give binding quotes. They answer questions, book, confirm status, route and escalate according to the call flows you approve. An Agent states a price or reads back an estimate only from a script and price list you have approved, and says that the final price follows inspection of the vehicle. Technical judgement and every decision about a repair remain with you and your technicians.",
          "Agents tell callers who describe an unsafe situation, such as a breakdown on the road or a vehicle that should not be driven, to stop driving and to contact roadside assistance or, in an emergency, the local emergency number, and follow the escalation rules you approve. You acknowledge that automated systems can misunderstand a caller, and that your call flows, review and fallback are the safeguard. You remain responsible for what your business tells its customers and for the work you carry out.",
        ] },
        { id: "data", title: "6. Customer Data, privacy and Driver Data", paragraphs: [
          "You own Customer Data. You grant us the right to host, process, transmit and display Customer Data solely to provide the services, support you and comply with the law. We process Driver Data only on your instructions, as processor under our data processing agreement, which forms part of these terms, and, for Customers in the United States, as your service provider under state privacy laws.",
          "We do not sell Customer Data and do not use Driver Data to train general-purpose models. With your agreement we may create de-identified, aggregated data to improve call flows and measure quality. Improvements to the Platform that result from processing Customer Data belong to Nekaf and contain no Driver Data.",
          "You will make sure you have the right to share Customer Data with us, including data taken from your dealer management or workshop system, and that you have given the notices required for us to process it.",
        ] },
        { id: "fees", title: "7. Fees and payment", paragraphs: [
          "Fees are stated in the Order Form. Nekaf pricing is tied to Outcomes: the monthly fee applies only in months in which the Agents deliver the Outcomes agreed in the Order Form. There are no per-user or per-minute charges unless the Order Form says otherwise.",
          "We invoice monthly in arrears. Invoices are due within 14 days by card or direct debit. Fees exclude VAT and other taxes, which you pay where applicable. Overdue amounts may accrue statutory interest, and we may suspend the services after written notice if an invoice remains unpaid for 30 days.",
        ] },
        { id: "term", title: "8. Term and termination", paragraphs: [
          "The agreement starts on the date in the Order Form and runs month to month unless the Order Form states a fixed term. Either party may end it at the end of a month with 30 days' written notice.",
          "Either party may terminate immediately if the other materially breaches these terms and does not cure the breach within 15 days of notice, or becomes insolvent. On termination, Agents stop taking calls, your number is released back to you, and within 30 days you can export Customer Data. We delete Customer Data within 90 days after that, except where the law requires us to keep it.",
        ] },
        { id: "confidentiality", title: "9. Confidentiality", paragraphs: [
          "Each party will keep the other's non-public information confidential, use it only to perform this agreement, and protect it with at least reasonable care. This does not cover information that is public, already known, independently developed or lawfully received from a third party. A party may disclose confidential information when required by law, after notifying the other party where permitted. These duties last three years after the agreement ends, and indefinitely for Driver Data and trade secrets.",
        ] },
        { id: "ip", title: "10. Intellectual property", paragraphs: [
          "Nekaf owns the Platform and all related intellectual property. You own Customer Data and your call flows, scripts, price lists and brand. If you send us suggestions or feedback, we may use them without obligation to you. Your name and logo may be used to identify you as a customer only with your written permission.",
        ] },
        { id: "warranties", title: "11. Warranties and disclaimers", paragraphs: [
          "We warrant that the services will be provided with reasonable skill and care, that we have the rights needed to provide the Platform, and that we maintain the security measures described in our documentation. You warrant that you have the authority to enter this agreement and the rights and consents described in sections 4 and 6.",
          "Except as stated above, the Platform is provided as is. We do not guarantee uninterrupted or error-free operation, that Agents will understand every caller, or that a particular number of Outcomes will be achieved. AI output can be inaccurate; your call flows, review and fallback are part of the service design.",
        ] },
        { id: "liability", title: "12. Limitation of liability", paragraphs: [
          "To the extent permitted by law, neither party is liable for indirect, incidental, special or consequential damages, loss of profit or loss of data, however arising. Each party's total liability under this agreement is limited to the fees paid or payable by you in the twelve months before the event that gave rise to the claim.",
          "These limits do not apply to a party's indemnification obligations, breach of confidentiality, gross negligence or wilful misconduct, or to liability that cannot be limited by law. Neither party is liable for delays caused by events beyond its reasonable control, such as carrier outages, power failures or natural disasters.",
        ] },
        { id: "indemnity", title: "13. Indemnification", paragraphs: [
          "We will defend you against claims that the Platform, used as permitted, infringes a third party's intellectual property, and pay resulting damages and costs. We may modify or replace the Platform or, if that is not reasonable, end the affected service and refund prepaid fees.",
          "You will defend us against claims arising from Customer Data, your call flows, scripts, price lists and instructions, the work you carry out, your failure to obtain required consents or give required notices, or your use of the Platform in breach of these terms, and pay resulting damages and costs. The indemnified party must notify the other promptly, give control of the defence and cooperate reasonably.",
        ] },
        { id: "compliance", title: "14. Regulatory compliance", paragraphs: [
          "Each party will comply with the laws that apply to it, including the GDPR, US state privacy laws and the telecommunications and consumer protection laws that apply to automated calls and messages. Our data processing agreement sets out the parties' obligations for Driver Data and prevails over these terms in case of conflict on that subject.",
        ] },
        { id: "law", title: "15. Governing law and disputes", paragraphs: [
          "Dutch law applies to these terms and to every agreement with Nekaf B.V., including agreements with Customers in the United States, and the courts of Amsterdam have exclusive jurisdiction. The United Nations Convention on Contracts for the International Sale of Goods does not apply. The parties will first try to resolve any dispute through discussion between senior representatives for 30 days. Either party may seek injunctive relief to protect confidential information or intellectual property at any time.",
        ] },
        { id: "general", title: "16. General", paragraphs: [
          "These terms, the Order Form and the data processing agreement are the entire agreement and replace prior discussions. If a provision is unenforceable, the rest remains in force. Neither party may assign the agreement without the other's consent, except to a successor in a merger or sale of the business. We may use subcontractors and remain responsible for them. The parties are independent contractors. Notices must be in writing to the addresses in the Order Form. We may update these terms; material changes take effect 30 days after we notify you, and you may terminate before then if you do not accept them.",
        ] },
        { id: "contact", title: "17. Contact", paragraphs: ["Nekaf B.V., Amsterdam, the Netherlands. Questions about these terms: legal@nekaf.ai."] },
      ],
    },
  },
  nl: {
    privacy: {
      title: "Privacybeleid",
      updated: "Laatst bijgewerkt: 25 september 2026",
      intro: "Nekaf B.V. (\"Nekaf\", \"wij\", \"ons\") hecht waarde aan de privacy van mensen die nekaf.ai bezoeken, de Nekaf-console op app.nekaf.ai gebruiken, onze demolijn bellen of contact met ons opnemen. Dit beleid legt uit wat we verzamelen, hoe we het gebruiken en welke keuzes u heeft. Door onze website of diensten te gebruiken gaat u akkoord met de hier beschreven verwerking.",
      sections: [
        { id: "scope", title: "1. Twee rollen: verwerkingsverantwoordelijke en verwerker", paragraphs: [
          "Voor deze website, de consoleaccounts van onze klanten en onze eigen marketing bepaalt Nekaf hoe en waarom persoonsgegevens worden verwerkt. Wij zijn dan verwerkingsverantwoordelijke onder de AVG en de verantwoordelijke onderneming onder de privacywetten van Amerikaanse staten.",
          "Wanneer een Nekaf-agent oproepen, chats of berichten afhandelt voor een garagebedrijf, dealerbedrijf, schadeherstelbedrijf of bandenspecialist (de \"Werkplaats\"), bepaalt de Werkplaats hoe en waarom de gegevens van haar klanten worden verwerkt. De Werkplaats is verwerkingsverantwoordelijke onder de AVG en de verantwoordelijke onderneming onder de privacywetten van Amerikaanse staten. Nekaf is verwerker op grond van een verwerkersovereenkomst en, voor Werkplaatsen in de Verenigde Staten, dienstverlener (service provider) onder die staatswetten. Het privacybeleid van de Werkplaats is op die gegevens van toepassing. Wij zijn niet verantwoordelijk voor de manier waarop onze klanten met persoonsgegevens omgaan.",
        ] },
        { id: "collect", title: "2. Informatie die u ons geeft", paragraphs: ["We verzamelen de informatie die u zelf verstrekt."], items: [
          "Contact- en demoaanvragen: naam, zakelijk e-mailadres, bedrijfsnaam, soort bedrijf (onafhankelijk garagebedrijf, dealer, schadeherstelbedrijf of bandenspecialist), aantal vestigingen, telefoonnummer en wat u in een bericht schrijft of via onze planningstool boekt.",
          "Demolijn: als u het demonummer belt, wordt het gesprek door een Nekaf-agent beantwoord, opgenomen en uitgeschreven zodat u kunt horen hoe het werkt. De opname wordt binnen 30 dagen verwijderd, tenzij u vraagt om die te bewaren.",
          "Consoleaccounts: naam, e-mailadres, rol, bedrijf, vestiging en de instellingen die u wijzigt. De console legt vast wie wat heeft gewijzigd, zodat uw bedrijf een audittrail heeft.",
          "Sollicitaties: de gegevens in uw sollicitatie en cv, inclusief wat u deelt via een dienst als LinkedIn.",
          "Correspondentie: de inhoud van e-mails en berichten die u ons stuurt, en of u onze e-mails heeft geopend of op een link heeft geklikt.",
        ] },
        { id: "auto", title: "3. Informatie die we automatisch verzamelen", paragraphs: ["Als u de website of console gebruikt, ontvangen we technische informatie van uw apparaat."], items: [
          "Apparaatinformatie: IP-adres, waaruit we een globale locatie kunnen afleiden, apparaattype, browser en besturingssysteem.",
          "Gebruiksinformatie: bekeken pagina's, de site waar u vandaan kwam, datums en tijden van bezoek en interacties met de console.",
          "Cookies en vergelijkbare technieken: zie paragraaf 7. In de EU vragen we uw toestemming voordat we analytische of marketingcookies plaatsen.",
        ] },
        { id: "drivers", title: "4. Klant- en voertuiggegevens die we voor Werkplaatsen verwerken", paragraphs: [
          "Gesprekken, transcripties, afspraken, statusmeldingen, prijsopgaven en berichten die een Nekaf-agent voor een Werkplaats afhandelt, bevatten persoonsgegevens van de klanten van de Werkplaats, de automobilisten die bellen: naam, telefoonnummer, e-mailadres, kenteken, chassisnummer (VIN), kilometerstand, onderhoudshistorie, afspraakgegevens en de inhoud van het gesprek, inclusief opnames en transcripties. We verwerken deze gegevens uitsluitend volgens de schriftelijke instructies van de Werkplaats en alleen om de afgesproken dienst te leveren: beantwoorden, inplannen, status bevestigen, escaleren en rapporteren.",
          "Bellers horen aan het begin van het gesprek dat ze met een AI-assistent spreken en dat het gesprek wordt opgenomen, conform het beleid van de Werkplaats en de wet. Opnames en transcripties worden bewaard gedurende de met de Werkplaats afgesproken termijn en daarna verwijderd of teruggegeven.",
          "We verkopen geen klant- of voertuiggegevens. We gebruiken geen herleidbare klantgegevens om algemene modellen te trainen. Als een Werkplaats daarmee instemt, kunnen we geanonimiseerde, geaggregeerde gegevens gebruiken om gespreksroutes te verbeteren en kwaliteit te meten. Geanonimiseerde gegevens bevatten nooit namen, contactgegevens, kentekens, chassisnummers of andere identificerende kenmerken.",
        ] },
        { id: "use", title: "5. Hoe we informatie gebruiken", paragraphs: ["We gebruiken de informatie uit paragraaf 2 en 3 om:"], items: [
          "de website, de console en onze diensten te leveren, te onderhouden en te verbeteren;",
          "demoaanvragen te beantwoorden, afspraken in te plannen en ondersteuning te bieden;",
          "administratieve berichten te sturen, en marketingberichten waarvoor u zich op elk moment kunt afmelden;",
          "te begrijpen hoe de website en console worden gebruikt en nieuwe functies te ontwikkelen;",
          "fraude, misbruik en beveiligingsincidenten op te sporen en te voorkomen;",
          "aan wettelijke verplichtingen te voldoen, onze voorwaarden te handhaven en onze rechten en die van anderen te beschermen;",
          "geaggregeerde, geanonimiseerde statistieken te maken die niemand meer identificeren.",
        ] },
        { id: "share", title: "6. Hoe we informatie delen", paragraphs: ["We delen persoonsgegevens alleen zoals hier beschreven."], items: [
          "Dienstverleners die namens ons gegevens hosten, verzenden of verwerken: cloudhosting in de EU en VS, telefonieproviders, spraak- en taalmodelleveranciers onder contracten die trainen op uw gegevens verbieden, e-mail- en planningstools, analyse- en supportsoftware. Elk is gebonden aan een verwerkersovereenkomst.",
          "Onze klanten: informatie over gesprekken en afspraken is zichtbaar voor de Werkplaats waarvoor de agent werkt, en afspraken, statusmeldingen en notities worden op instructie van de Werkplaats weggeschreven in de agenda, de werkplaatsplanning of het dealermanagementsysteem dat zij heeft gekoppeld.",
          "Professionele adviseurs zoals advocaten, accountants en verzekeraars, onder geheimhouding.",
          "Autoriteiten, wanneer de wet, een rechterlijk bevel of een rechtmatig verzoek dat vereist, of om de veiligheid van een persoon te beschermen.",
          "Een koper of rechtsopvolger bij een fusie, overname of verkoop van activa, onder dit beleid.",
          "Anderen, met uw toestemming.",
        ] },
        { id: "cookies", title: "7. Cookies en analyse", paragraphs: [
          "De website gebruikt strikt noodzakelijke cookies om te werken. Met uw toestemming gebruiken we analytische cookies om te begrijpen hoe de site wordt gebruikt en marketingcookies om campagnes te meten. U kunt uw keuze op elk moment wijzigen via de link cookie-instellingen in de voettekst. Cookies blokkeren in uw browser kan ook, maar kan het gedrag van de console beïnvloeden.",
          "Onze analyse- en advertentiepartners kunnen cookies en vergelijkbare technieken gebruiken over diensten heen. U kunt zich afmelden voor gepersonaliseerde advertenties via uw browserinstellingen en via youronlinechoices.eu.",
        ] },
        { id: "security", title: "8. Beveiliging", paragraphs: [
          "We beschermen gegevens met versleuteling tijdens transport en in opslag, toegang op basis van rollen, tweestapsverificatie voor medewerkers, logging van toegang tot klant- en voertuiggegevens, regelmatige back-ups en onafhankelijke tests. Klant- en voertuiggegevens worden gehost in de regio van de Werkplaats: de EU voor Europese Werkplaatsen, de VS voor Amerikaanse Werkplaatsen.",
          "Geen enkel systeem is volledig veilig. Als we een inbreuk ontdekken die uw gegevens raakt, informeren we u en, waar vereist, de toezichthouder zonder onnodige vertraging.",
        ] },
        { id: "retention", title: "9. Bewaartermijnen", paragraphs: [
          "Contact- en demogegevens bewaren we zolang we een zakelijke relatie of een gerechtvaardigd belang hebben om contact te houden, en maximaal drie jaar na ons laatste contact. Consoleaccountgegevens bewaren we gedurende het klantcontract en verwijderen we binnen 90 dagen na afloop, tenzij de wet langer vereist. Sollicitatiegegevens verwijderen we een jaar na sluiting van een vacature, tenzij u vraagt om ze te bewaren. Klant- en voertuiggegevens die we voor een Werkplaats verwerken, bewaren we gedurende de met de Werkplaats afgesproken termijn.",
        ] },
        { id: "rights", title: "10. Uw rechten", paragraphs: [
          "U kunt ons vragen om inzage, correctie, verwijdering of beperking van uw persoonsgegevens, om een kopie in een overdraagbaar formaat, en u kunt bezwaar maken tegen verwerking op basis van ons gerechtvaardigd belang, waaronder direct marketing. Toestemming kunt u op elk moment intrekken. U kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.",
          "Voor klant- en voertuiggegevens die we namens een Werkplaats verwerken, kunt u contact opnemen met de Werkplaats. Wij helpen de Werkplaats binnen de wettelijke termijnen te reageren.",
          "Om een recht uit te oefenen mailt u naar " + PRIVACY_EMAIL + ". We kunnen u vragen eerst uw identiteit te bevestigen.",
        ] },
        { id: "transfers", title: "11. Internationale doorgifte", paragraphs: [
          "Nekaf werkt vanuit Amsterdam. Gegevens kunnen in de EU en, voor Werkplaatsen in de Verenigde Staten, in de VS worden verwerkt. Als persoonsgegevens de EU verlaten, steunen we op het EU-VS Data Privacy Framework als de ontvanger gecertificeerd is, en anders op de standaardcontractbepalingen van de Europese Commissie met aanvullende waarborgen.",
        ] },
        { id: "children", title: "12. Kinderen", paragraphs: [
          "Onze website en console zijn bedoeld voor professionals en niet gericht op kinderen. We verzamelen via de website niet bewust persoonsgegevens van personen jonger dan 16 jaar. Gegevens van een beller jonger dan 16 jaar die een agent voor een Werkplaats afhandelt, verwerken we volgens paragraaf 4.",
        ] },
        { id: "changes", title: "13. Wijzigingen in dit beleid", paragraphs: [
          "Wijzigingen plaatsen we op deze pagina met een nieuwe datum bovenaan. Als een wijziging wezenlijk verandert hoe we persoonsgegevens gebruiken die we al van u hebben, laten we u dat vooraf per e-mail of in de console weten.",
        ] },
        { id: "contact", title: "14. Contact", paragraphs: ["Nekaf B.V., Amsterdam. Vragen, verzoeken en klachten: " + PRIVACY_EMAIL + "."] },
      ],
    },
    terms: {
      title: "Algemene voorwaarden",
      updated: "Laatst bijgewerkt: 25 september 2026",
      intro: "Deze voorwaarden gelden voor het gebruik van het Nekaf-platform en de diensten door garagebedrijven, dealers, schadeherstelbedrijven, bandenspecialisten en andere organisaties (\"Klant\", \"u\"). Ze gelden samen met elk orderformulier dat u met Nekaf B.V. (\"Nekaf\", \"wij\") ondertekent. Bezoekers van de website zijn ook gebonden aan paragraaf 3.",
      sections: [
        { id: "definitions", title: "1. Definities", paragraphs: ["Begrippen met een hoofdletter hebben de volgende betekenis."], items: [
          "Platform: de Nekaf-software, inclusief spraak- en digitale agents, de console, Ask Nekaf, koppelingen, apps en documentatie.",
          "Agent: een ingerichte set gespreksroutes, regels en koppelingen die een afgebakende taak voor de Klant uitvoert, zoals de servicelijn beantwoorden.",
          "Orderformulier: het document met de Agents, doelen, vergoedingen en looptijd die met de Klant zijn afgesproken.",
          "Klantgegevens: alle gegevens die door of voor de Klant aan het Platform worden aangeleverd, inclusief gespreksopnames, transcripties, afspraken, werkorder- en voertuiggegevens en Berijdersgegevens.",
          "Berijdersgegevens: Klantgegevens die een berijder of andere klant van de Klant identificeren, zoals naam, telefoonnummer, kenteken, chassisnummer (VIN), kilometerstand, onderhoudshistorie en afspraakgegevens. Berijdersgegevens zijn persoonsgegevens onder de AVG en onder de privacywetten van Amerikaanse staten.",
          "Resultaat: een taak die een Agent van begin tot eind afrondt zoals omschreven in het Orderformulier, bijvoorbeeld een afgehandeld gesprek, een ingeplande onderhoudsafspraak of een opnieuw ingeplande no-show.",
        ] },
        { id: "services", title: "2. De diensten", paragraphs: [
          "Wij stellen het Platform beschikbaar en leveren de professionele diensten die in elk Orderformulier staan. U bent verantwoordelijk voor de apparatuur, telefoonlijnen, internettoegang en systemen van derden waarmee u het Platform gebruikt, inclusief uw agenda, werkplaatsplanning en dealermanagementsysteem.",
          "We mogen het Platform wijzigen om het te verbeteren, mits de beveiliging of prestaties niet wezenlijk verslechteren. We bieden ondersteuning tijdens kantooruren in Nederland en, voor Klanten in de Verenigde Staten, tijdens Amerikaanse kantooruren, en een noodlijn voor storingen waardoor oproepen niet worden beantwoord.",
          "Alle rechten die niet uitdrukkelijk zijn verleend, blijven voorbehouden. Niets in deze voorwaarden draagt eigendom van het Platform over.",
        ] },
        { id: "use", title: "3. Accounts en toegestaan gebruik", paragraphs: [
          "U bent verantwoordelijk voor de personen aan wie u toegang tot de console geeft en voor het vertrouwelijk houden van inloggegevens. U meldt ongeautoriseerd gebruik direct.",
          "U zult het Platform niet kopiëren, wijzigen, reverse-engineeren of doorverkopen, er geen concurrerend product mee bouwen, de beveiliging niet zonder schriftelijke toestemming testen, geen schadelijke code uploaden, het niet voor onrechtmatige doelen gebruiken en er geen ongevraagde marketingoproepen of -berichten mee versturen. U gebruikt het Platform niet om reparatiediagnoses te stellen, garantiebeslissingen te nemen of bindende prijsopgaven te doen, anders dan via een script dat u op grond van paragraaf 5 heeft goedgekeurd.",
        ] },
        { id: "customer", title: "4. Uw verantwoordelijkheden", paragraphs: ["Omdat Agents met uw klanten spreken, gaat u akkoord met het volgende:"], items: [
          "u beoordeelt en keurt elke gespreksroute, elk script en elke escalatieregel goed voordat een Agent live gaat, inclusief elk script waarmee een Agent prijzen noemt of een prijsopgave voorleest, en houdt ze actueel;",
          "u wijst een servicemanager of werkplaatschef aan die de escalatieregels voor pech, veiligheidsklachten en geschillen goedkeurt, en een contactpersoon voor operationele vragen;",
          "u verkrijgt de toestemmingen en geeft de mededelingen die de wet vereist voor gespreksopname, geautomatiseerde oproepen en berichten en AI-gebruik, inclusief de aankondiging aan het begin van elk gesprek;",
          "u houdt uw agenda, brug- en monteurscapaciteit, openingstijden, prijslijsten en contactgegevens actueel in de gekoppelde systemen;",
          "u zorgt voor een werkende terugvaloptie zodat oproepen uw team bereiken als het Platform niet beschikbaar is;",
          "u voldoet aan de wetten die op u van toepassing zijn, waaronder de AVG, de privacywetten van Amerikaanse staten, telemarketing- en consumentenwetgeving en de regels van uw branche.",
        ] },
        { id: "safety", title: "5. Geen diagnoses, garantiebeslissingen of bindende prijsopgaven", paragraphs: [
          "Agents stellen geen storingsdiagnoses, beslissen niet over garantie of coulance en doen geen bindende prijsopgaven. Ze beantwoorden vragen, plannen in, bevestigen de status, routeren en escaleren volgens de gespreksroutes die u goedkeurt. Een Agent noemt een prijs of leest een prijsopgave alleen voor op basis van een script en prijslijst die u heeft goedgekeurd, en zegt daarbij dat de definitieve prijs volgt na inspectie van het voertuig. Het technisch oordeel en elke beslissing over een reparatie blijven bij u en uw monteurs.",
          "Agents zeggen bellers die een onveilige situatie beschrijven, zoals pech onderweg of een voertuig waarmee niet meer gereden mag worden, om niet verder te rijden en pechhulp of, in een noodgeval, het alarmnummer te bellen, en volgen de escalatieregels die u goedkeurt. U erkent dat geautomatiseerde systemen een beller verkeerd kunnen begrijpen en dat uw gespreksroutes, beoordeling en terugvaloptie de waarborg zijn. U blijft verantwoordelijk voor wat uw bedrijf aan zijn klanten vertelt en voor het werk dat u uitvoert.",
        ] },
        { id: "data", title: "6. Klantgegevens, privacy en Berijdersgegevens", paragraphs: [
          "U bent eigenaar van de Klantgegevens. U verleent ons het recht om Klantgegevens te hosten, te verwerken, te verzenden en te tonen, uitsluitend om de diensten te leveren, u te ondersteunen en de wet na te leven. Berijdersgegevens verwerken we alleen op uw instructie, als verwerker onder onze verwerkersovereenkomst, die deel uitmaakt van deze voorwaarden, en, voor Klanten in de Verenigde Staten, als uw dienstverlener (service provider) onder de privacywetten van die staten.",
          "We verkopen geen Klantgegevens en gebruiken geen Berijdersgegevens om algemene modellen te trainen. Met uw instemming kunnen we geanonimiseerde, geaggregeerde gegevens maken om gespreksroutes te verbeteren en kwaliteit te meten. Verbeteringen aan het Platform die voortkomen uit de verwerking van Klantgegevens zijn eigendom van Nekaf en bevatten geen Berijdersgegevens.",
          "U zorgt ervoor dat u het recht heeft om Klantgegevens met ons te delen, inclusief gegevens uit uw dealermanagement- of werkplaatssysteem, en dat u de mededelingen heeft gedaan die nodig zijn om ze te verwerken.",
        ] },
        { id: "fees", title: "7. Vergoedingen en betaling", paragraphs: [
          "De vergoedingen staan in het Orderformulier. De prijs van Nekaf is gekoppeld aan Resultaten: het maandbedrag geldt alleen in maanden waarin de Agents de in het Orderformulier afgesproken Resultaten leveren. Er zijn geen kosten per gebruiker of per minuut, tenzij het Orderformulier anders bepaalt.",
          "We factureren maandelijks achteraf. Facturen zijn binnen 14 dagen te voldoen per kaart of automatische incasso. Bedragen zijn exclusief btw en andere belastingen, die u betaalt waar van toepassing. Over achterstallige bedragen kan wettelijke rente verschuldigd zijn, en na schriftelijke aanmaning kunnen we de diensten opschorten als een factuur 30 dagen onbetaald blijft.",
        ] },
        { id: "term", title: "8. Looptijd en beëindiging", paragraphs: [
          "De overeenkomst begint op de datum in het Orderformulier en loopt per maand, tenzij het Orderformulier een vaste looptijd noemt. Elke partij kan opzeggen tegen het einde van een maand met een opzegtermijn van 30 dagen.",
          "Elke partij kan direct beëindigen als de andere partij deze voorwaarden wezenlijk schendt en dat niet binnen 15 dagen na kennisgeving herstelt, of failliet gaat. Bij beëindiging stoppen de Agents met het aannemen van oproepen, krijgt u uw nummer terug en kunt u binnen 30 dagen de Klantgegevens exporteren. Daarna verwijderen we de Klantgegevens binnen 90 dagen, behalve waar de wet ons verplicht ze te bewaren.",
        ] },
        { id: "confidentiality", title: "9. Geheimhouding", paragraphs: [
          "Elke partij houdt de niet-openbare informatie van de ander geheim, gebruikt die alleen om deze overeenkomst uit te voeren en beschermt die met ten minste redelijke zorg. Dit geldt niet voor informatie die openbaar is, al bekend was, onafhankelijk is ontwikkeld of rechtmatig van een derde is ontvangen. Een partij mag vertrouwelijke informatie bekendmaken als de wet dat vereist, na kennisgeving aan de ander waar toegestaan. Deze verplichtingen gelden drie jaar na afloop van de overeenkomst, en onbeperkt voor Berijdersgegevens en bedrijfsgeheimen.",
        ] },
        { id: "ip", title: "10. Intellectueel eigendom", paragraphs: [
          "Nekaf is eigenaar van het Platform en alle bijbehorende intellectuele eigendomsrechten. U bent eigenaar van de Klantgegevens en van uw gespreksroutes, scripts, prijslijsten en merk. Suggesties of feedback die u ons stuurt, mogen we gebruiken zonder verplichting jegens u. Uw naam en logo gebruiken we alleen met uw schriftelijke toestemming om u als klant te noemen.",
        ] },
        { id: "warranties", title: "11. Garanties en uitsluitingen", paragraphs: [
          "Wij garanderen dat de diensten met redelijke vakbekwaamheid en zorg worden geleverd, dat we de rechten hebben die nodig zijn om het Platform te leveren, en dat we de beveiligingsmaatregelen uit onze documentatie in stand houden. U garandeert dat u bevoegd bent deze overeenkomst aan te gaan en beschikt over de rechten en toestemmingen uit paragraaf 4 en 6.",
          "Behoudens het bovenstaande wordt het Platform geleverd in de staat waarin het verkeert. We garanderen geen ononderbroken of foutloze werking, niet dat Agents elke beller begrijpen, en niet dat een bepaald aantal Resultaten wordt behaald. AI-uitvoer kan onjuist zijn; uw gespreksroutes, beoordeling en terugvaloptie maken deel uit van het ontwerp van de dienst.",
        ] },
        { id: "liability", title: "12. Beperking van aansprakelijkheid", paragraphs: [
          "Voor zover de wet dat toestaat, is geen van beide partijen aansprakelijk voor indirecte schade, gevolgschade, gederfde winst of verlies van gegevens, hoe ook ontstaan. De totale aansprakelijkheid van elke partij onder deze overeenkomst is beperkt tot de vergoedingen die u in de twaalf maanden vóór de schadeveroorzakende gebeurtenis heeft betaald of verschuldigd was.",
          "Deze beperkingen gelden niet voor vrijwaringsverplichtingen, schending van geheimhouding, grove nalatigheid of opzet, of voor aansprakelijkheid die wettelijk niet kan worden beperkt. Geen van beide partijen is aansprakelijk voor vertraging door omstandigheden buiten haar redelijke controle, zoals storingen bij telecomaanbieders, stroomuitval of natuurrampen.",
        ] },
        { id: "indemnity", title: "13. Vrijwaring", paragraphs: [
          "Wij verdedigen u tegen aanspraken dat het Platform, gebruikt zoals toegestaan, inbreuk maakt op intellectueel eigendom van een derde, en betalen de daaruit voortvloeiende schade en kosten. We mogen het Platform aanpassen of vervangen of, als dat niet redelijk is, de betreffende dienst beëindigen en vooruitbetaalde vergoedingen terugbetalen.",
          "U verdedigt ons tegen aanspraken die voortkomen uit Klantgegevens, uw gespreksroutes, scripts, prijslijsten en instructies, het werk dat u uitvoert, het niet verkrijgen van vereiste toestemmingen of het niet doen van vereiste mededelingen, of uw gebruik van het Platform in strijd met deze voorwaarden, en betaalt de daaruit voortvloeiende schade en kosten. De gevrijwaarde partij informeert de ander direct, laat de verdediging aan de ander over en werkt redelijk mee.",
        ] },
        { id: "compliance", title: "14. Naleving van regelgeving", paragraphs: [
          "Elke partij voldoet aan de wetten die op haar van toepassing zijn, waaronder de AVG, de privacywetten van Amerikaanse staten en de telecommunicatie- en consumentenwetgeving voor geautomatiseerde oproepen en berichten. Onze verwerkersovereenkomst bevat de verplichtingen van partijen voor Berijdersgegevens en gaat bij strijdigheid op dat onderwerp vóór deze voorwaarden.",
        ] },
        { id: "law", title: "15. Toepasselijk recht en geschillen", paragraphs: [
          "Op deze voorwaarden en op elke overeenkomst met Nekaf B.V., ook met Klanten in de Verenigde Staten, is Nederlands recht van toepassing en is de rechtbank Amsterdam exclusief bevoegd. Het Weens Koopverdrag is niet van toepassing. Partijen proberen een geschil eerst 30 dagen op te lossen in overleg tussen senior vertegenwoordigers. Elke partij kan op elk moment een voorlopige voorziening vragen om vertrouwelijke informatie of intellectueel eigendom te beschermen.",
        ] },
        { id: "general", title: "16. Overige bepalingen", paragraphs: [
          "Deze voorwaarden, het Orderformulier en de verwerkersovereenkomst vormen de volledige overeenkomst en vervangen eerdere afspraken. Als een bepaling niet afdwingbaar is, blijft de rest van kracht. Geen van beide partijen mag de overeenkomst overdragen zonder toestemming van de ander, behalve aan een rechtsopvolger bij een fusie of verkoop van de onderneming. We mogen onderaannemers inschakelen en blijven voor hen verantwoordelijk. Partijen zijn onafhankelijke contractspartijen. Kennisgevingen gebeuren schriftelijk aan de adressen in het Orderformulier. We mogen deze voorwaarden bijwerken; wezenlijke wijzigingen gaan 30 dagen na onze kennisgeving in, en u kunt vóór die tijd opzeggen als u ze niet accepteert.",
        ] },
        { id: "contact", title: "17. Contact", paragraphs: ["Nekaf B.V., Amsterdam. Vragen over deze voorwaarden: legal@nekaf.ai."] },
      ],
    },
  },
  de: {
    privacy: {
      title: "Datenschutzerklärung",
      updated: "Zuletzt aktualisiert: 25. September 2026",
      intro: "Nekaf B.V. (\"Nekaf\", \"wir\", \"uns\") legt Wert auf die Privatsphäre der Menschen, die nekaf.ai besuchen, die Nekaf-Konsole unter app.nekaf.ai nutzen, unsere Demo-Nummer anrufen oder uns kontaktieren. Diese Erklärung beschreibt, was wir erheben, wie wir es verwenden und welche Wahlmöglichkeiten Sie haben. Mit der Nutzung unserer Website oder Dienste stimmen Sie der hier beschriebenen Verarbeitung zu.",
      sections: [
        { id: "scope", title: "1. Zwei Rollen: Verantwortlicher und Auftragsverarbeiter", paragraphs: [
          "Für diese Website, die Konsolenkonten unserer Kunden und unser eigenes Marketing entscheidet Nekaf, wie und warum personenbezogene Daten verarbeitet werden. Wir sind dann Verantwortlicher im Sinne der DSGVO und das verantwortliche Unternehmen nach den Datenschutzgesetzen der US-Bundesstaaten.",
          "Wenn ein Nekaf-Agent Anrufe, Chats oder Nachrichten für eine Werkstatt, ein Autohaus, einen Karosserie- und Lackierbetrieb oder einen Reifenservice (die \"Werkstatt\") bearbeitet, entscheidet die Werkstatt, wie und warum die Daten ihrer Kunden verarbeitet werden. Die Werkstatt ist Verantwortlicher im Sinne der DSGVO und das verantwortliche Unternehmen nach den Datenschutzgesetzen der US-Bundesstaaten. Nekaf ist Auftragsverarbeiter auf Grundlage eines Auftragsverarbeitungsvertrags und, für Werkstätten in den Vereinigten Staaten, Dienstleister (service provider) nach diesen Gesetzen. Für diese Daten gilt die Datenschutzerklärung der Werkstatt. Für den Umgang unserer Kunden mit personenbezogenen Daten sind wir nicht verantwortlich.",
        ] },
        { id: "collect", title: "2. Informationen, die Sie uns geben", paragraphs: ["Wir erheben die Informationen, die Sie uns selbst mitteilen."], items: [
          "Kontakt- und Demoanfragen: Name, geschäftliche E-Mail-Adresse, Firmenname, Art des Betriebs (freie Werkstatt, Autohaus, Karosserie- und Lackierbetrieb oder Reifenservice), Anzahl der Standorte, Telefonnummer und alles, was Sie in einer Nachricht schreiben oder über unser Terminbuchungstool buchen.",
          "Demo-Nummer: Wenn Sie die Demo-Nummer anrufen, nimmt ein Nekaf-Agent den Anruf entgegen; er wird aufgezeichnet und transkribiert, damit Sie hören können, wie es funktioniert. Die Aufzeichnung wird innerhalb von 30 Tagen gelöscht, sofern Sie nicht um Aufbewahrung bitten.",
          "Konsolenkonten: Name, E-Mail-Adresse, Rolle, Unternehmen, Standort und die von Ihnen geänderten Einstellungen. Die Konsole protokolliert, wer was geändert hat, damit Ihr Betrieb einen Prüfpfad hat.",
          "Bewerbungen: die Angaben in Ihrer Bewerbung und Ihrem Lebenslauf, einschließlich dessen, was Sie über einen Dienst wie LinkedIn teilen.",
          "Korrespondenz: der Inhalt von E-Mails und Nachrichten, die Sie uns senden, sowie ob Sie unsere E-Mails geöffnet oder einen Link darin angeklickt haben.",
        ] },
        { id: "auto", title: "3. Automatisch erhobene Informationen", paragraphs: ["Wenn Sie die Website oder Konsole nutzen, erhalten wir technische Informationen von Ihrem Gerät."], items: [
          "Geräteinformationen: IP-Adresse, aus der sich ein ungefährer Standort ableiten lässt, Gerätetyp, Browser und Betriebssystem.",
          "Nutzungsinformationen: aufgerufene Seiten, die Website, von der Sie kamen, Datum und Uhrzeit der Besuche und Interaktionen mit der Konsole.",
          "Cookies und ähnliche Techniken: siehe Abschnitt 7. In der EU holen wir Ihre Einwilligung ein, bevor wir Analyse- oder Marketing-Cookies setzen.",
        ] },
        { id: "drivers", title: "4. Kunden- und Fahrzeugdaten, die wir für Werkstätten verarbeiten", paragraphs: [
          "Anrufe, Transkripte, Termine, Statusmeldungen, Kostenvoranschläge und Nachrichten, die ein Nekaf-Agent für eine Werkstatt bearbeitet, enthalten personenbezogene Daten der Kunden der Werkstatt, also der Fahrer, die anrufen: Name, Telefonnummer, E-Mail-Adresse, Kennzeichen, Fahrgestellnummer (FIN), Kilometerstand, Servicehistorie, Termindaten und den Inhalt des Gesprächs, einschließlich Aufzeichnungen und Transkripten. Wir verarbeiten diese Daten ausschließlich nach den dokumentierten Weisungen der Werkstatt und nur, um die vereinbarte Leistung zu erbringen: beantworten, buchen, Status bestätigen, weiterleiten und berichten.",
          "Anrufer werden zu Beginn des Gesprächs darüber informiert, dass sie mit einem KI-Assistenten sprechen und dass das Gespräch aufgezeichnet wird, entsprechend den Vorgaben der Werkstatt und dem geltenden Recht. Aufzeichnungen und Transkripte werden für die mit der Werkstatt vereinbarte Frist gespeichert und danach gelöscht oder zurückgegeben.",
          "Wir verkaufen keine Kunden- oder Fahrzeugdaten. Wir verwenden keine identifizierbaren Kundendaten, um allgemeine Modelle zu trainieren. Mit Zustimmung der Werkstatt können wir anonymisierte, aggregierte Daten nutzen, um Gesprächsabläufe zu verbessern und Qualität zu messen. Anonymisierte Daten enthalten niemals Namen, Kontaktdaten, Kennzeichen, Fahrgestellnummern oder andere identifizierende Merkmale.",
        ] },
        { id: "use", title: "5. Wie wir Informationen verwenden", paragraphs: ["Wir verwenden die Informationen aus Abschnitt 2 und 3, um:"], items: [
          "die Website, die Konsole und unsere Dienste bereitzustellen, zu pflegen und zu verbessern;",
          "Demoanfragen zu beantworten, Termine zu vereinbaren und Support zu leisten;",
          "administrative Nachrichten zu senden sowie Marketingnachrichten, die Sie jederzeit abbestellen können;",
          "zu verstehen, wie Website und Konsole genutzt werden, und neue Funktionen zu entwickeln;",
          "Betrug, Missbrauch und Sicherheitsvorfälle zu erkennen und zu verhindern;",
          "gesetzliche Pflichten zu erfüllen, unsere Bedingungen durchzusetzen und unsere Rechte und die anderer zu schützen;",
          "aggregierte, anonymisierte Statistiken zu erstellen, die niemanden mehr identifizieren.",
        ] },
        { id: "share", title: "6. Wie wir Informationen weitergeben", paragraphs: ["Wir geben personenbezogene Daten nur wie hier beschrieben weiter."], items: [
          "Dienstleister, die Daten in unserem Auftrag hosten, übertragen oder verarbeiten: Cloud-Hosting in der EU und den USA, Telefonieanbieter, Sprach- und Sprachmodellanbieter unter Verträgen, die ein Training mit Ihren Daten untersagen, E-Mail- und Terminplanungstools, Analyse- und Supportsoftware. Jeder ist an einen Auftragsverarbeitungsvertrag gebunden.",
          "Unsere Kunden: Informationen zu Anrufen und Terminen sind für die Werkstatt sichtbar, für die der Agent arbeitet, und Termine, Statusmeldungen und Notizen werden auf Weisung der Werkstatt in den Kalender, den Werkstattplaner oder das Dealer-Management-System geschrieben, das sie angebunden hat.",
          "Berufliche Berater wie Anwälte, Wirtschaftsprüfer und Versicherer, unter Vertraulichkeit.",
          "Behörden, wenn Gesetz, Gerichtsbeschluss oder ein rechtmäßiges Ersuchen dies verlangen oder um die Sicherheit einer Person zu schützen.",
          "Ein Käufer oder Rechtsnachfolger bei Fusion, Übernahme oder Verkauf von Vermögenswerten, unter dieser Erklärung.",
          "Andere, mit Ihrer Einwilligung.",
        ] },
        { id: "cookies", title: "7. Cookies und Analyse", paragraphs: [
          "Die Website verwendet unbedingt erforderliche Cookies, um zu funktionieren. Mit Ihrer Einwilligung verwenden wir Analyse-Cookies, um die Nutzung der Website zu verstehen, und Marketing-Cookies, um Kampagnen zu messen. Sie können Ihre Wahl jederzeit über den Link Cookie-Einstellungen in der Fußzeile ändern. Cookies im Browser zu blockieren ist ebenfalls möglich, kann aber das Verhalten der Konsole beeinflussen.",
          "Unsere Analyse- und Werbepartner können Cookies und ähnliche Techniken dienstübergreifend einsetzen. Personalisierte Werbung können Sie über Ihre Browsereinstellungen und über youronlinechoices.eu abwählen.",
        ] },
        { id: "security", title: "8. Sicherheit", paragraphs: [
          "Wir schützen Daten durch Verschlüsselung bei der Übertragung und im Ruhezustand, rollenbasierte Zugriffe, Zwei-Faktor-Authentifizierung für Mitarbeiter, Protokollierung des Zugriffs auf Kunden- und Fahrzeugdaten, regelmäßige Backups und unabhängige Tests. Kunden- und Fahrzeugdaten werden in der Region der Werkstatt gehostet: in der EU für europäische Werkstätten, in den USA für amerikanische Werkstätten.",
          "Kein System ist vollständig sicher. Wenn wir von einer Verletzung erfahren, die Ihre Daten betrifft, informieren wir Sie und, wo erforderlich, die Aufsichtsbehörde ohne unangemessene Verzögerung.",
        ] },
        { id: "retention", title: "9. Speicherdauer", paragraphs: [
          "Kontakt- und Demodaten bewahren wir auf, solange eine Geschäftsbeziehung oder ein berechtigtes Interesse am Kontakt besteht, höchstens jedoch drei Jahre nach unserem letzten Kontakt. Konsolenkontodaten bewahren wir für die Dauer des Kundenvertrags auf und löschen sie innerhalb von 90 Tagen nach dessen Ende, sofern das Gesetz nichts Längeres verlangt. Bewerbungsdaten löschen wir ein Jahr nach Schließung einer Stelle, sofern Sie nicht um Aufbewahrung bitten. Kunden- und Fahrzeugdaten, die wir für eine Werkstatt verarbeiten, bewahren wir für die mit der Werkstatt vereinbarte Frist auf.",
        ] },
        { id: "rights", title: "10. Ihre Rechte", paragraphs: [
          "Sie können von uns Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie eine Kopie in einem übertragbaren Format verlangen und der Verarbeitung auf Grundlage unseres berechtigten Interesses, einschließlich Direktwerbung, widersprechen. Eine Einwilligung können Sie jederzeit widerrufen. Sie können sich außerdem bei Ihrer Aufsichtsbehörde beschweren.",
          "Bei Kunden- und Fahrzeugdaten, die wir im Auftrag einer Werkstatt verarbeiten, wenden Sie sich bitte an die Werkstatt. Wir unterstützen die Werkstatt dabei, innerhalb der gesetzlichen Fristen zu antworten.",
          "Um ein Recht auszuüben, schreiben Sie an " + PRIVACY_EMAIL + ". Wir können Sie bitten, zunächst Ihre Identität zu bestätigen.",
        ] },
        { id: "transfers", title: "11. Internationale Übermittlungen", paragraphs: [
          "Nekaf arbeitet von Amsterdam aus. Daten können in der EU und, für Werkstätten in den Vereinigten Staaten, in den USA verarbeitet werden. Verlassen personenbezogene Daten die EU, stützen wir uns auf das EU-US Data Privacy Framework, sofern der Empfänger zertifiziert ist, und andernfalls auf die Standardvertragsklauseln der Europäischen Kommission mit zusätzlichen Schutzmaßnahmen.",
        ] },
        { id: "children", title: "12. Kinder", paragraphs: [
          "Unsere Website und Konsole richten sich an Fachleute und nicht an Kinder. Über die Website erheben wir wissentlich keine personenbezogenen Daten von Personen unter 16 Jahren. Daten eines Anrufers unter 16 Jahren, die ein Agent für eine Werkstatt bearbeitet, verarbeiten wir gemäß Abschnitt 4.",
        ] },
        { id: "changes", title: "13. Änderungen dieser Erklärung", paragraphs: [
          "Änderungen veröffentlichen wir auf dieser Seite mit einem neuen Datum oben. Ändert eine Anpassung wesentlich, wie wir bereits vorhandene personenbezogene Daten von Ihnen verwenden, informieren wir Sie vorab per E-Mail oder in der Konsole.",
        ] },
        { id: "contact", title: "14. Kontakt", paragraphs: ["Nekaf B.V., Amsterdam, Niederlande. Fragen, Anträge und Beschwerden: " + PRIVACY_EMAIL + "."] },
      ],
    },
    terms: {
      title: "Allgemeine Geschäftsbedingungen",
      updated: "Zuletzt aktualisiert: 25. September 2026",
      intro: "Diese Bedingungen regeln die Nutzung der Nekaf-Plattform und der Dienste durch Werkstätten, Autohäuser, Karosserie- und Lackierbetriebe, Reifenservices und andere Organisationen (\"Kunde\", \"Sie\"). Sie gelten zusammen mit jedem Auftragsformular, das Sie mit Nekaf B.V. (\"Nekaf\", \"wir\") unterzeichnen. Besucher der Website sind ebenfalls an Abschnitt 3 gebunden.",
      sections: [
        { id: "definitions", title: "1. Begriffsbestimmungen", paragraphs: ["Großgeschriebene Begriffe haben folgende Bedeutung."], items: [
          "Plattform: die Nekaf-Software einschließlich Sprach- und digitaler Agenten, der Konsole, Ask Nekaf, Integrationen, Apps und Dokumentation.",
          "Agent: ein konfigurierter Satz von Gesprächsabläufen, Regeln und Verbindungen, der eine definierte Aufgabe für den Kunden erledigt, etwa die Serviceannahme am Telefon.",
          "Auftragsformular: das Dokument, das die mit dem Kunden vereinbarten Agenten, Ziele, Vergütungen und Laufzeit beschreibt.",
          "Kundendaten: alle Daten, die vom oder für den Kunden an die Plattform übermittelt werden, einschließlich Gesprächsaufzeichnungen, Transkripten, Terminen, Auftrags- und Fahrzeugdaten und Fahrerdaten.",
          "Fahrerdaten: Kundendaten, die einen Fahrer oder anderen Kunden des Kunden identifizieren, etwa Name, Telefonnummer, Kennzeichen, Fahrgestellnummer (FIN), Kilometerstand, Servicehistorie und Termindaten. Fahrerdaten sind personenbezogene Daten nach der DSGVO und nach den Datenschutzgesetzen der US-Bundesstaaten.",
          "Ergebnis: eine von einem Agenten vollständig erledigte Aufgabe gemäß Auftragsformular, zum Beispiel ein erledigter Anruf, ein gebuchter Werkstatttermin oder ein neu gebuchter No-Show.",
        ] },
        { id: "services", title: "2. Die Leistungen", paragraphs: [
          "Wir stellen die Plattform bereit und erbringen die im jeweiligen Auftragsformular beschriebenen Dienstleistungen. Für Geräte, Telefonleitungen, Internetzugang und Drittsysteme, mit denen Sie die Plattform nutzen, einschließlich Kalender, Werkstattplaner und Dealer-Management-System, sind Sie verantwortlich.",
          "Wir dürfen die Plattform ändern, um sie zu verbessern, sofern Sicherheit oder Leistung nicht wesentlich beeinträchtigt werden. Wir bieten Support während der Geschäftszeiten in den Niederlanden und, für Kunden in den Vereinigten Staaten, während der US-Geschäftszeiten sowie eine Notfallnummer für Störungen, durch die Anrufe nicht beantwortet werden.",
          "Alle nicht ausdrücklich eingeräumten Rechte bleiben vorbehalten. Nichts in diesen Bedingungen überträgt Eigentum an der Plattform.",
        ] },
        { id: "use", title: "3. Konten und zulässige Nutzung", paragraphs: [
          "Sie sind verantwortlich für die Personen, denen Sie Zugang zur Konsole gewähren, und für die Vertraulichkeit der Zugangsdaten. Unbefugte Nutzung melden Sie uns unverzüglich.",
          "Sie werden die Plattform nicht kopieren, verändern, zurückentwickeln oder weiterverkaufen, kein konkurrierendes Produkt damit bauen, ihre Sicherheit nicht ohne schriftliche Erlaubnis prüfen, keinen schädlichen Code hochladen, sie nicht für rechtswidrige Zwecke nutzen und keine unerwünschten Werbeanrufe oder -nachrichten darüber versenden. Sie nutzen die Plattform nicht, um Reparaturdiagnosen zu stellen, Garantieentscheidungen zu treffen oder verbindliche Kostenvoranschläge abzugeben, außer über ein Skript, das Sie nach Abschnitt 5 freigegeben haben.",
        ] },
        { id: "customer", title: "4. Ihre Pflichten", paragraphs: ["Da Agenten mit Ihren Kunden sprechen, verpflichten Sie sich:"], items: [
          "jeden Gesprächsablauf, jedes Skript und jede Eskalationsregel zu prüfen und freizugeben, bevor ein Agent live geht, einschließlich jedes Skripts, mit dem ein Agent Preise nennt oder einen Kostenvoranschlag vorliest, und sie aktuell zu halten;",
          "einen Serviceleiter oder Werkstattleiter zu benennen, der die Eskalationsregeln für Pannen, sicherheitsrelevante Beschwerden und Streitfälle freigibt, sowie eine Ansprechperson für operative Fragen;",
          "alle gesetzlich erforderlichen Einwilligungen einzuholen und Hinweise zu geben für Gesprächsaufzeichnung, automatisierte Anrufe und Nachrichten sowie KI-Einsatz, einschließlich der Ansage zu Beginn jedes Gesprächs;",
          "Kalender, Bühnen- und Mechanikerkapazität, Öffnungszeiten, Preislisten und Kontaktdaten in den verbundenen Systemen aktuell zu halten;",
          "eine funktionierende Rückfalloption vorzuhalten, damit Anrufe Ihr Team erreichen, wenn die Plattform nicht verfügbar ist;",
          "die für Sie geltenden Gesetze einzuhalten, einschließlich DSGVO, der Datenschutzgesetze der US-Bundesstaaten, Telemarketing- und Verbraucherschutzrecht sowie der Regeln Ihres Gewerbes.",
        ] },
        { id: "safety", title: "5. Keine Diagnosen, Garantieentscheidungen oder verbindlichen Kostenvoranschläge", paragraphs: [
          "Agenten stellen keine Fehlerdiagnosen, entscheiden nicht über Garantie oder Kulanz und geben keine verbindlichen Kostenvoranschläge ab. Sie beantworten Fragen, buchen, bestätigen den Status, leiten weiter und eskalieren nach den von Ihnen freigegebenen Gesprächsabläufen. Ein Agent nennt einen Preis oder liest einen Kostenvoranschlag nur auf Grundlage eines Skripts und einer Preisliste vor, die Sie freigegeben haben, und weist darauf hin, dass der endgültige Preis nach Prüfung des Fahrzeugs folgt. Die technische Beurteilung und jede Entscheidung über eine Reparatur liegen bei Ihnen und Ihren Mechanikern.",
          "Agenten fordern Anrufer, die eine unsichere Situation schildern, etwa eine Panne unterwegs oder ein Fahrzeug, das nicht mehr gefahren werden sollte, auf, nicht weiterzufahren und die Pannenhilfe oder im Notfall die Notrufnummer zu kontaktieren, und folgen den von Ihnen freigegebenen Eskalationsregeln. Sie erkennen an, dass automatisierte Systeme einen Anrufer missverstehen können und dass Ihre Gesprächsabläufe, Ihre Prüfung und Ihre Rückfalloption die Absicherung sind. Sie bleiben verantwortlich für das, was Ihr Betrieb seinen Kunden mitteilt, und für die Arbeiten, die Sie ausführen.",
        ] },
        { id: "data", title: "6. Kundendaten, Datenschutz und Fahrerdaten", paragraphs: [
          "Die Kundendaten gehören Ihnen. Sie räumen uns das Recht ein, Kundendaten zu hosten, zu verarbeiten, zu übertragen und anzuzeigen, ausschließlich um die Leistungen zu erbringen, Sie zu unterstützen und das Gesetz einzuhalten. Fahrerdaten verarbeiten wir nur auf Ihre Weisung, als Auftragsverarbeiter auf Grundlage unseres Auftragsverarbeitungsvertrags, der Bestandteil dieser Bedingungen ist, und, für Kunden in den Vereinigten Staaten, als Ihr Dienstleister (service provider) nach den Datenschutzgesetzen der Bundesstaaten.",
          "Wir verkaufen keine Kundendaten und nutzen keine Fahrerdaten, um allgemeine Modelle zu trainieren. Mit Ihrer Zustimmung können wir anonymisierte, aggregierte Daten erstellen, um Gesprächsabläufe zu verbessern und Qualität zu messen. Verbesserungen der Plattform, die aus der Verarbeitung von Kundendaten entstehen, gehören Nekaf und enthalten keine Fahrerdaten.",
          "Sie stellen sicher, dass Sie berechtigt sind, Kundendaten mit uns zu teilen, einschließlich Daten aus Ihrem Dealer-Management- oder Werkstattsystem, und dass Sie die für die Verarbeitung erforderlichen Hinweise gegeben haben.",
        ] },
        { id: "fees", title: "7. Vergütung und Zahlung", paragraphs: [
          "Die Vergütung ergibt sich aus dem Auftragsformular. Die Preise von Nekaf sind an Ergebnisse gekoppelt: Der Monatsbetrag gilt nur in Monaten, in denen die Agenten die im Auftragsformular vereinbarten Ergebnisse liefern. Es fallen keine Kosten pro Nutzer oder pro Minute an, sofern das Auftragsformular nichts anderes bestimmt.",
          "Wir rechnen monatlich nachträglich ab. Rechnungen sind innerhalb von 14 Tagen per Karte oder Lastschrift fällig. Beträge verstehen sich ohne Umsatzsteuer und andere Steuern, die Sie gegebenenfalls tragen. Auf überfällige Beträge können gesetzliche Zinsen anfallen; nach schriftlicher Mahnung können wir die Leistungen aussetzen, wenn eine Rechnung 30 Tage unbezahlt bleibt.",
        ] },
        { id: "term", title: "8. Laufzeit und Kündigung", paragraphs: [
          "Der Vertrag beginnt an dem im Auftragsformular genannten Datum und läuft monatlich, sofern das Auftragsformular keine feste Laufzeit nennt. Jede Partei kann zum Monatsende mit einer Frist von 30 Tagen schriftlich kündigen.",
          "Jede Partei kann fristlos kündigen, wenn die andere diese Bedingungen wesentlich verletzt und den Verstoß nicht innerhalb von 15 Tagen nach Mitteilung behebt oder zahlungsunfähig wird. Bei Beendigung nehmen die Agenten keine Anrufe mehr an, Ihre Nummer wird an Sie zurückgegeben und Sie können innerhalb von 30 Tagen die Kundendaten exportieren. Danach löschen wir die Kundendaten innerhalb von 90 Tagen, außer wo das Gesetz eine Aufbewahrung verlangt.",
        ] },
        { id: "confidentiality", title: "9. Vertraulichkeit", paragraphs: [
          "Jede Partei behandelt die nicht öffentlichen Informationen der anderen vertraulich, nutzt sie nur zur Erfüllung dieses Vertrags und schützt sie mit mindestens angemessener Sorgfalt. Dies gilt nicht für Informationen, die öffentlich sind, bereits bekannt waren, unabhängig entwickelt oder rechtmäßig von Dritten erhalten wurden. Eine Partei darf vertrauliche Informationen offenlegen, wenn das Gesetz dies verlangt, nach Benachrichtigung der anderen Partei, soweit zulässig. Diese Pflichten gelten drei Jahre nach Vertragsende, für Fahrerdaten und Geschäftsgeheimnisse unbefristet.",
        ] },
        { id: "ip", title: "10. Geistiges Eigentum", paragraphs: [
          "Nekaf ist Eigentümer der Plattform und aller damit verbundenen Rechte des geistigen Eigentums. Ihnen gehören die Kundendaten sowie Ihre Gesprächsabläufe, Skripte, Preislisten und Ihre Marke. Vorschläge oder Feedback, die Sie uns senden, dürfen wir ohne Verpflichtung Ihnen gegenüber verwenden. Ihren Namen und Ihr Logo verwenden wir nur mit Ihrer schriftlichen Zustimmung, um Sie als Kunden zu nennen.",
        ] },
        { id: "warranties", title: "11. Gewährleistung und Haftungsausschluss", paragraphs: [
          "Wir gewährleisten, dass die Leistungen mit angemessener Fachkenntnis und Sorgfalt erbracht werden, dass wir über die zur Bereitstellung der Plattform erforderlichen Rechte verfügen und dass wir die in unserer Dokumentation beschriebenen Sicherheitsmaßnahmen aufrechterhalten. Sie gewährleisten, dass Sie befugt sind, diesen Vertrag zu schließen, und über die in Abschnitt 4 und 6 beschriebenen Rechte und Einwilligungen verfügen.",
          "Im Übrigen wird die Plattform wie besehen bereitgestellt. Wir garantieren keinen unterbrechungs- oder fehlerfreien Betrieb, nicht, dass Agenten jeden Anrufer verstehen, und nicht, dass eine bestimmte Anzahl von Ergebnissen erreicht wird. KI-Ausgaben können fehlerhaft sein; Ihre Gesprächsabläufe, Prüfung und Rückfalloption sind Teil des Leistungsdesigns.",
        ] },
        { id: "liability", title: "12. Haftungsbeschränkung", paragraphs: [
          "Soweit gesetzlich zulässig, haftet keine Partei für indirekte Schäden, Folgeschäden, entgangenen Gewinn oder Datenverlust, gleich aus welchem Rechtsgrund. Die Gesamthaftung jeder Partei aus diesem Vertrag ist auf die Vergütung beschränkt, die Sie in den zwölf Monaten vor dem schadensauslösenden Ereignis gezahlt haben oder schuldeten.",
          "Diese Beschränkungen gelten nicht für Freistellungspflichten, Verletzungen der Vertraulichkeit, grobe Fahrlässigkeit oder Vorsatz oder für Haftung, die gesetzlich nicht beschränkt werden kann. Keine Partei haftet für Verzögerungen durch Umstände außerhalb ihrer angemessenen Kontrolle, etwa Störungen bei Netzbetreibern, Stromausfälle oder Naturkatastrophen.",
        ] },
        { id: "indemnity", title: "13. Freistellung", paragraphs: [
          "Wir verteidigen Sie gegen Ansprüche, dass die Plattform bei zulässiger Nutzung geistiges Eigentum Dritter verletzt, und tragen den daraus entstehenden Schaden und die Kosten. Wir dürfen die Plattform ändern oder ersetzen oder, wenn das nicht zumutbar ist, die betroffene Leistung beenden und vorausbezahlte Vergütungen erstatten.",
          "Sie verteidigen uns gegen Ansprüche, die aus Kundendaten, Ihren Gesprächsabläufen, Skripten, Preislisten und Weisungen, den von Ihnen ausgeführten Arbeiten, dem Fehlen erforderlicher Einwilligungen oder Hinweise oder einer Nutzung der Plattform entgegen diesen Bedingungen entstehen, und tragen den daraus entstehenden Schaden und die Kosten. Die freigestellte Partei informiert die andere unverzüglich, überlässt ihr die Verteidigung und wirkt angemessen mit.",
        ] },
        { id: "compliance", title: "14. Einhaltung von Vorschriften", paragraphs: [
          "Jede Partei hält die für sie geltenden Gesetze ein, einschließlich DSGVO, der Datenschutzgesetze der US-Bundesstaaten sowie des Telekommunikations- und Verbraucherschutzrechts für automatisierte Anrufe und Nachrichten. Unser Auftragsverarbeitungsvertrag regelt die Pflichten der Parteien für Fahrerdaten und geht diesen Bedingungen bei Widersprüchen in diesem Punkt vor.",
        ] },
        { id: "law", title: "15. Anwendbares Recht und Streitigkeiten", paragraphs: [
          "Für diese Bedingungen und jeden Vertrag mit Nekaf B.V., auch mit Kunden in den Vereinigten Staaten, gilt niederländisches Recht; ausschließlich zuständig sind die Gerichte in Amsterdam. Das UN-Kaufrecht findet keine Anwendung. Die Parteien versuchen zunächst 30 Tage lang, eine Streitigkeit im Gespräch zwischen leitenden Vertretern beizulegen. Jede Partei kann jederzeit einstweiligen Rechtsschutz zum Schutz vertraulicher Informationen oder geistigen Eigentums beantragen.",
        ] },
        { id: "general", title: "16. Sonstiges", paragraphs: [
          "Diese Bedingungen, das Auftragsformular und der Auftragsverarbeitungsvertrag bilden die gesamte Vereinbarung und ersetzen frühere Absprachen. Ist eine Bestimmung nicht durchsetzbar, bleibt der Rest wirksam. Keine Partei darf den Vertrag ohne Zustimmung der anderen übertragen, außer an einen Rechtsnachfolger bei Fusion oder Verkauf des Unternehmens. Wir dürfen Unterauftragnehmer einsetzen und bleiben für sie verantwortlich. Die Parteien sind unabhängige Vertragspartner. Mitteilungen erfolgen schriftlich an die im Auftragsformular genannten Adressen. Wir dürfen diese Bedingungen aktualisieren; wesentliche Änderungen werden 30 Tage nach unserer Mitteilung wirksam, und Sie können vorher kündigen, wenn Sie sie nicht akzeptieren.",
        ] },
        { id: "contact", title: "17. Kontakt", paragraphs: ["Nekaf B.V., Amsterdam, Niederlande. Fragen zu diesen Bedingungen: legal@nekaf.ai."] },
      ],
    },
  },
};
