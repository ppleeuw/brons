import type { Metadata } from "next";
import { BASE, SITE_URL } from "@/lib/base";
import { readFileSync } from "fs";
import { join } from "path";
import "./styles/fonts.css";
import "./styles/site.css";
import "./styles/extra.css";
import "./styles/mockups.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "AI voice agents for garages and dealerships | Nekaf",
  description: "AI voice agents for garages, dealerships, body shops and tire centers that answer questions, book service appointments and handle routine requests, 24/7.",
  icons: { icon: [{ url: `${BASE}/favicon.ico`, sizes: "32x32" }, { url: `${BASE}/icon.svg`, type: "image/svg+xml" }], apple: `${BASE}/apple-icon.png` },
  manifest: `${BASE}/site.webmanifest`,
  robots: { index: true, follow: true, "max-image-preview": "large" },
};

export const viewport = { themeColor: "#006838" };

/* The Brons brand gets its own theme layer (app/styles/brons.css), inlined at build time so it paints with the page.
   Font URLs in it point at public/fonts and are rewritten to the served path here. */
const BRAND = process.env.NEXT_PUBLIC_BRAND || "nekaf";
const BRAND_CSS = BRAND === "brons" ? readFileSync(join(process.cwd(), "app/styles/brons.css"), "utf8").replace(/url\(\.\.\/\.\.\/public\/fonts\//g, `url(${BASE}/fonts/`) : "";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-brand={BRAND}
      className="gtamerica_6d0b17ea-module__xVsKFa__variable gtamericamono_7f09841-module__x8mR4a__variable"
      style={{ "--sticky-navigation-height": "72px" } as React.CSSProperties}
    >
      {BRAND_CSS && <head><link rel="preload" href={`${BASE}/fonts/figtree-latin.woff2`} as="font" type="font/woff2" crossOrigin="" /><style dangerouslySetInnerHTML={{ __html: BRAND_CSS }} /></head>}
      <body className="flex min-h-screen flex-col text-primary antialiased">{children}</body>
    </html>
  );
}
