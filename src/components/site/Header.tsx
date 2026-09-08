import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/dmk-logo.png";
import { business, navItems } from "@/lib/business";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-paper">
      <div className="hidden bg-ink lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1.5">
          <p className="font-mono text-[13px] tracking-[0.16em] text-paper/80 uppercase">
            Gas Safe registered · Cardiff &amp; surrounding areas
          </p>
          <p className="font-mono text-[13px] tracking-[0.16em] text-accent uppercase">24 hour emergency call out</p>
        </div>
      </div>

      <div
        className={`border-b border-line transition-all duration-300 ${scrolled ? "shadow-[0_1px_0_0_rgba(0,0,0,0.06)]" : ""}`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 transition-all duration-300 md:px-6 ${
            scrolled ? "py-2" : "py-3.5"
          }`}
        >
          <Link to="/" className="shrink-0" aria-label={`${business.name} home`}>
            <img
              src={logo}
              alt="DMK Plumbing & Heating logo"
              width={1056}
              height={374}
              className={`w-auto transition-all duration-300 ${scrolled ? "h-8" : "h-10"}`}
            />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rule-link font-mono text-[16px] tracking-[0.06em] text-ink uppercase transition-colors hover:text-ink [&.active]:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a href={business.phoneHref} className="group hidden text-right md:block">
              <span className="block font-mono text-[13px] tracking-[0.16em] text-muted uppercase">
                Emergency call out
              </span>
              <span className="block font-display text-[21px] leading-tight font-semibold group-hover:text-accent-deep">
                {business.phoneDisplay}
              </span>
            </a>
            <a
              href={business.phoneHref}
              className="bg-accent px-4 py-2.5 font-display text-[15px] font-semibold tracking-wide text-ink uppercase md:hidden"
            >
              Call
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle navigation menu"
              className="flex size-10 flex-col items-center justify-center gap-1.5 border border-ink lg:hidden"
            >
              <span className={`h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="border-b border-line bg-paper px-4 py-3 lg:hidden" aria-label="Mobile">
          <ul className="divide-y divide-line">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-mono text-[17px] tracking-[0.06em] uppercase"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
