import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/dmk-logo.png";
import { business, navItems } from "@/lib/business";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="glass sticky top-0 z-50 border-b border-line/70">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <Link to="/" className="flex items-center gap-2" aria-label={`${business.name} home`}>
          <img
            src={logo}
            alt="DMK Plumbing & Heating logo"
            width={1056}
            height={374}
            className={`w-auto transition-all duration-300 ${scrolled ? "h-7" : "h-9"}`}
          />
        </Link>

        <nav className="hidden items-center gap-4 lg:flex" aria-label="Main">
          {navItems.slice(0, 9).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-body text-[13px] text-muted transition-colors hover:text-ink [&.active]:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 rounded-xl bg-accent px-3 py-2 font-mono text-[11px] font-medium text-paper ring-1 ring-black/5"
          >
            <span className="size-1.5 rounded-full bg-paper/70" aria-hidden="true" />
            <span className="hidden sm:inline">Emergency Call Out · </span>
            {business.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="rounded-xl border border-line bg-panel/50 px-3 py-2 font-mono text-[11px] lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line/70 bg-panel/95 px-4 py-3 lg:hidden" aria-label="Mobile">
          <ul className="grid grid-cols-2 gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2 text-[13px] text-muted hover:text-ink [&.active]:text-ink"
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
