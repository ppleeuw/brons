/** Nekaf wordmark: the tire mark (a thick ring with tread blocks, a rim and a hub) followed by "Nekaf" set in the logo face.
 *  The mark sits on the text baseline; its diameter matches the cap height so it reads as a glyph, not an icon. */
export const TIRE_PATHS = (
  <>
    <circle cx="20" cy="20" r="15.4" fill="none" stroke="currentColor" strokeWidth="6.6" strokeDasharray="6.9 1.16" transform="rotate(-6 20 20)" />
    <circle cx="20" cy="20" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="20" cy="20" r="2.3" fill="currentColor" />
  </>
);

export function Logo({ className = "h-9 xl:h-10" }: { className?: string }) {
  const big = /h-11/.test(className);
  return (
    <span className={"inline-flex items-baseline leading-none " + (big ? "text-[30px] xl:text-[34px]" : "text-[28px] xl:text-[31px]")} style={{ height: "1.25em" }}>
      <svg viewBox="0 0 40 40" aria-hidden="true" className="h-[0.78em] w-[0.78em] shrink-0 self-baseline overflow-visible" style={{ transform: "translateY(0.06em)" }}>
        {TIRE_PATHS}
      </svg>
      <span className="font-logo tracking-[-0.01em]" style={{ marginLeft: "0.14em" }}>Nekaf</span>
      <span className="sr-only">Nekaf</span>
    </span>
  );
}

/** The mark alone (agent avatar, favicon). */
export function Symbol({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      {TIRE_PATHS}
    </svg>
  );
}
