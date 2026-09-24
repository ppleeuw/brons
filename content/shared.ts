import { asset } from "@/lib/base";
/** Language-independent assets and constants. */
export const TEL_EN = "tel:+19377292674";
export const TEL_EN_DISPLAY = "+1 937 729 2674";
export const TEL_NL = "tel:+3197006532689";
export const TEL_NL_DISPLAY = "+31 970 065 32689";
export const TEL = TEL_EN;
/** Display form of a demo-line tel: link, for buttons that show the number. */
export const telDisplay = (href: string) => (href === TEL_NL ? TEL_NL_DISPLAY : href === TEL_EN ? TEL_EN_DISPLAY : href.startsWith("tel:") ? href.slice(4) : "");
export const TEL_DISPLAY = TEL_EN_DISPLAY;
export const EMAIL = "hello@nekaf.ai";
/** Booking link used by the demo page until a Cal.com link is configured in CAL_LINKS. */
export const CALENDLY = "mailto:hello@nekaf.ai?subject=Demo%20request";
export const LINKEDIN = "https://www.linkedin.com/company/nekaf";
export const SIGN_IN = "https://app.nekaf.ai";

export const G = asset("/assets/gen");
export const LOGOS = {
  vannuland: { src: asset("/assets/logo-vannuland.png"), alt: "Autobedrijf van Nuland" },
  broekema: { src: asset("/assets/logo-broekema.png"), alt: "Broekema" },
  legacy: { src: asset("/assets/logo-legacy.png"), alt: "Legacy Auto Clinic" },
};
export const CUSTOMER_LOGOS = (hrefs: [string, string, string]) => [
  { ...LOGOS.vannuland, href: hrefs[0] },
  { ...LOGOS.broekema, href: hrefs[1] },
  { ...LOGOS.legacy, href: hrefs[2] },
];
export const VIDEOS = {
  /* the fold videos: callers at home, the same three clips as before */
  fold1: { video: asset("/media/hero1.mp4"), poster: asset("/media/hero1-poster.jpg"), lqip: "data:image/jpeg;base64,/9j/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAASACADASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUDBAYH/8QAJRAAAgICAQIGAwAAAAAAAAAAAQIDBAARBRIhBhMiMUFxFVGB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAbEQACAgMBAAAAAAAAAAAAAAAAAQIRAzEyQf/aAAwDAQACEQMRAD8A3FySONiX9tZmrvIeVbCICBvf8yP8huuFlmDyA9tHeVbMih45pDtchK7KeFjxBzE1OvEK0gV2HV9414y4L/Gw2AQSy+rX7znvO2Ws2+v1BV7AEZN4a5Saq7xByIz3IOUQ5Y6jY2lVQ0elA7/Ax7TjRq42in7GGGBdhfIs5SKM39GNNdHtrMyVVbzBVAHV8DDDEtjej//Z" },
  fold2: { video: asset("/media/hero2.mp4"), poster: asset("/media/hero2-poster.jpg"), lqip: "data:image/jpeg;base64,/9j/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAASACADASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUBAgQD/8QAJRAAAgIBAwIHAQAAAAAAAAAAAQIAAwQREiEFBhMiMTJBUYGR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECETEyUf/aAAwDAQACEQMRAD8AbdpuFxreARui/u2mk5VDhApZuYo6V3DZg1tVTUHLn5M69SyMzqora16ECHUANzMm60tJvDbbjJVUGLDZt1Jiq5Vtr3pyDK51eZkUpR41aVgc6N6zDhpkYjOh0ZD9mCcfSnF1hiq9/wCQQneOTCEZDApkuwtTRiP2QHbRvMf7CEFgvo//2Q==" },
  fold3: { video: asset("/media/hero3.mp4"), poster: asset("/media/hero3-poster.jpg"), lqip: "data:image/jpeg;base64,/9j/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAASACADASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAABAAFAQb/xAAjEAABAwQCAQUAAAAAAAAAAAABAAIDBAURITFBEwYSImGB/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAEDAv/EABwRAAIBBQEAAAAAAAAAAAAAAAABAhESMTJRQv/aAAwDAQACEQMRAD8AxoKc4HxKdDTcaKjcaeEgED9So7rGW5bDn7UbF0re+HHgU8JkdnA1hJbCySFkgds9LH9QVM8tLH4j7QDkgdrTskTp7dEHSt8jd75TUVSqByeGebqQDMzI6TItM0pSFqhemGv5IpYcEjaVZXOFNA4OIJPOVKWo6ilsf//Z" },
  insights: { video: `${G}/insights-video.mp4`, poster: `${G}/insights.webp` },
  product: { video: `${G}/product-frontdesk-video.mp4`, poster: `${G}/product-frontdesk.webp` },
  garage: { video: `${G}/spec2-garage-video.mp4`, poster: `${G}/spec2-garage.webp` },
  dealer: { video: `${G}/spec2-dealer-video.mp4`, poster: `${G}/spec2-dealer.webp` },
  bodyshop: { video: `${G}/spec2-bodyshop-video.mp4`, poster: `${G}/spec2-bodyshop.webp` },
  tire: { video: `${G}/spec2-tire-video.mp4`, poster: `${G}/spec2-tire.webp` },
};
/** Placeholder customer voices (generated portraits, first names only) until real customers agree to be quoted. */
export const PEOPLE = {
  bas: { poster: `${G}/person-bas.webp` },
  marieke: { poster: `${G}/person-marieke.webp` },
  dave: { poster: `${G}/person-dave.webp` },
};
export const PHOTOS = {
  frontdesk: asset("/assets/img-frontdesk.webp"),
  workshop: asset("/assets/img-workshop.webp"),
  lift: asset("/assets/img-lift.webp"),
  tireshop: asset("/assets/img-tireshop.webp"),
  team: asset("/assets/img-team.webp"),
  dealer: asset("/assets/img-dealer.webp"),
  bodyshop: asset("/assets/img-bodyshop.webp"),
  peterpaul: asset("/assets/img-peterpaul.webp"),
  thomas: asset("/assets/img-thomas.webp"),
  storyVannuland: `${G}/story-vannuland.webp`,
  storyBroekema: `${G}/story-broekema.webp`,
  storyLegacy: `${G}/story-legacy.webp`,
};
/** Trust badges: the generic certification marks that apply to an automotive service business. */
export const BADGES = {
  soc1: asset("/assets/badge-soc1.svg"),
  iso27001: asset("/assets/badge-iso27001.svg"),
  gdpr: asset("/assets/badge-gdpr.svg"),
  euai: asset("/assets/badge-euai.svg"),
};
export const INTEGRATION_LOGOS = {
  garage: [
    { name: "Autoflex", src: asset("/assets/int-autoflex.png") },
    { name: "Autotaal", src: asset("/assets/int-autotaal.png") },
    { name: "WinCar", src: asset("/assets/int-wincar.png") },
    { name: "CarSys", src: asset("/assets/int-carsys.png") },
    { name: "Werbas", src: asset("/assets/int-werbas.png") },
    { name: "Loco-Soft", src: asset("/assets/int-locosoft.png") },
  ],
  shop: [
    { name: "Tekmetric", src: asset("/assets/int-tekmetric.png") },
    { name: "Shopmonkey", src: asset("/assets/int-shopmonkey.png") },
    { name: "Shop-Ware", src: asset("/assets/int-shopware.png") },
    { name: "AutoLeap", src: asset("/assets/int-autoleap.png") },
    { name: "Mitchell 1", src: asset("/assets/int-mitchell1.png") },
    { name: "Protractor", src: asset("/assets/int-protractor.png") },
  ],
  dealer: [
    { name: "Keyloop", src: asset("/assets/int-keyloop.png") },
    { name: "CDK Global", src: asset("/assets/int-cdk.png") },
    { name: "Reynolds and Reynolds", src: asset("/assets/int-reynolds.png") },
    { name: "Dealertrack", src: asset("/assets/int-dealertrack.png") },
    { name: "Xtime", src: asset("/assets/int-xtime.png") },
    { name: "incadea", src: asset("/assets/int-incadea.png") },
  ],
  body: [
    { name: "CCC", src: asset("/assets/int-ccc.png") },
    { name: "Audatex", src: asset("/assets/int-audatex.png") },
    { name: "Mitchell", src: asset("/assets/int-mitchell.png") },
    { name: "ALLDATA", src: asset("/assets/int-alldata.png") },
  ],
  phone: [
    { name: "RingCentral", src: asset("/assets/int-ringcentral.png") },
    { name: "Zoom Phone", src: asset("/assets/int-zoom.svg") },
    { name: "Twilio", src: asset("/assets/int-twilio.svg") },
    { name: "Vonage", src: asset("/assets/int-vonage.svg") },
  ],
  tools: [
    { name: "Google Calendar", src: asset("/assets/int-googlecalendar.svg") },
    { name: "Salesforce", src: asset("/assets/int-salesforce.svg") },
    { name: "Slack", src: asset("/assets/int-slack.svg") },
  ],
};

/** Cal.com booking pages per language (the part after cal.com/). Empty until the links are supplied: buttons then open the demo page. */
export const CAL_LINKS: Record<string, string> = { en: "", nl: "", de: "" };
