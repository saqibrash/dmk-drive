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
    <header className="sticky top-0 z-50">
      <div className="hidden bg-ink lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1.5">
          <p className="font-mono text-[13px] tracking-[0.14em] text-paper/75 uppercase">
            Gas Safe registered · Cardiff &amp; surrounding areas
          </p>
          <p className="font-mono text-[13px] tracking-[0.14em] text-accent uppercase">24 hour emergency call out</p>
        </div>
      </div>

      <div
        className={`nav-wash border-b border-white/10 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_10px_28px_-20px_rgba(0,0,0,0.9)]" : ""
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between gap-5 px-4 transition-all duration-300 md:px-6 ${
            scrolled ? "py-2.5" : "py-4"
          }`}
        >
          <Link
            to="/"
            className="logo-backdrop shrink-0 rounded-xl px-3 py-1.5"
            aria-label={`${business.name} home`}
          >
            <img
              src={logo}
              alt="DMK Plumbing & Heating logo"
              width={1056}
              height={374}
              className={`w-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] transition-all duration-300 ${scrolled ? "h-11" : "h-14 md:h-16"}`}
            />
          </Link>


          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rule-link font-mono text-[16px] tracking-[0.05em] text-paper/75 uppercase transition-colors hover:text-accent [&.active]:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5">
            <a href={business.phoneHref} className="group hidden text-right md:block">
              <span className="block font-mono text-[13px] tracking-[0.14em] text-paper/50 uppercase">
                Emergency call out
              </span>
              <span className="block font-display text-[21px] leading-tight font-semibold text-paper transition-colors group-hover:text-accent">
                {business.phoneDisplay}
              </span>
            </a>
            <a
              href={business.phoneHref}
              className="rounded-xl border border-white/10 bg-accent-soft px-5 py-2.5 font-display text-[15px] font-semibold tracking-[0.06em] text-ink uppercase shadow-[0_2px_10px_-4px_rgba(0,0,0,0.7)] transition-all duration-200 hover:bg-accent active:scale-[0.97] md:hidden"
            >
              Call
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle navigation menu"
              className="flex size-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/10 transition-colors hover:bg-white/20 lg:hidden"
            >
              <span className={`h-0.5 w-5 bg-paper transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 bg-paper transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-paper transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="border-b border-white/10 bg-ink px-4 py-3 lg:hidden" aria-label="Mobile">
          <ul className="divide-y divide-white/10">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-mono text-[17px] tracking-[0.05em] text-paper/85 uppercase transition-colors hover:text-accent [&.active]:text-accent"
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
