import { Link } from "@tanstack/react-router";
import logo from "@/assets/dmk-logo.png";
import { areas, business, services } from "@/lib/business";

export function Footer() {
  return (
    <footer className="border-t border-line px-4 pt-10 pb-28 md:pb-10">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
        <div>
          <img src={logo} alt="DMK Plumbing & Heating logo" width={1056} height={374} className="h-9 w-auto" loading="lazy" />
          <p className="mt-3 max-w-[34ch] text-[13px] text-muted">{business.strapline}</p>
          <p className="mt-3 font-mono text-[11px] text-muted">Gas Safe Registered engineers</p>
        </div>

        <div>
          <h2 className="font-display text-[13px] font-bold">Contact</h2>
          <ul className="mt-3 space-y-2 text-[13px]">
            <li>
              <a href={business.phoneHref} className="text-accent">
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="text-muted hover:text-ink">
                {business.email}
              </a>
            </li>
            <li>
              <a href={business.whatsapp} className="text-muted hover:text-ink">
                WhatsApp us
              </a>
            </li>
            <li className="text-muted">Cardiff &amp; surrounding areas</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-[13px] font-bold">Services</h2>
          <ul className="mt-3 space-y-1.5 text-[13px]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="text-muted hover:text-ink">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-[13px] font-bold">Areas we cover</h2>
          <p className="mt-3 text-[13px] leading-relaxed text-muted">{areas.join(" · ")}</p>
          <ul className="mt-4 space-y-1.5 text-[13px]">
            <li>
              <Link to="/legal/$slug" params={{ slug: "privacy-policy" }} className="text-muted hover:text-ink">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/legal/$slug" params={{ slug: "terms" }} className="text-muted hover:text-ink">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/legal/$slug" params={{ slug: "complaints-policy" }} className="text-muted hover:text-ink">
                Complaints Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-6xl font-mono text-[10px] text-muted">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </p>
    </footer>
  );
}
