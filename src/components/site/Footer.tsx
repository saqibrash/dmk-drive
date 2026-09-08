import { Link } from "@tanstack/react-router";
import logo from "@/assets/dmk-logo.png";
import { areas, business, services } from "@/lib/business";

export function Footer() {
  return (
    <footer className="bg-ink px-4 pt-14 pb-28 text-paper md:px-6 md:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <img
            src={logo}
            alt="DMK Plumbing & Heating logo"
            width={1056}
            height={374}
            className="h-10 w-auto"
            loading="lazy"
          />
          <p className="mt-4 max-w-[34ch] text-[15px] text-paper/70">{business.strapline}</p>
          <p className="mt-4 font-mono text-[14px] tracking-[0.14em] text-accent uppercase">
            Gas Safe registered engineers
          </p>
        </div>

        <div>
          <h2 className="font-mono text-[14px] tracking-[0.18em] text-paper/60 uppercase">Contact</h2>
          <ul className="mt-4 space-y-2 text-[15px]">
            <li>
              <a href={business.phoneHref} className="font-display text-[22px] font-semibold text-accent">
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="text-paper/70 hover:text-paper">
                {business.email}
              </a>
            </li>
            <li>
              <a href={business.whatsapp} className="text-paper/70 hover:text-paper">
                WhatsApp us
              </a>
            </li>
            <li className="text-paper/70">Cardiff &amp; surrounding areas</li>
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-[14px] tracking-[0.18em] text-paper/60 uppercase">Services</h2>
          <ul className="mt-4 space-y-1.5 text-[15px]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="text-paper/70 hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-[14px] tracking-[0.18em] text-paper/60 uppercase">Areas covered</h2>
          <p className="mt-4 text-[14px] leading-relaxed text-paper/70">{areas.join(" · ")}</p>
          <ul className="mt-5 space-y-1.5 text-[15px]">
            <li>
              <Link to="/legal/$slug" params={{ slug: "privacy-policy" }} className="text-paper/70 hover:text-accent">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/legal/$slug" params={{ slug: "terms" }} className="text-paper/70 hover:text-accent">
                Terms
              </Link>
            </li>
            <li>
              <Link
                to="/legal/$slug"
                params={{ slug: "complaints-policy" }}
                className="text-paper/70 hover:text-accent"
              >
                Complaints Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-2 border-t border-paper/15 pt-6">
        <p className="font-mono text-[13px] tracking-[0.14em] text-paper/50 uppercase">
          © {new Date().getFullYear()} {business.name}
        </p>
        <p className="font-mono text-[13px] tracking-[0.14em] text-paper/50 uppercase">
          Plumbing · Boilers · Heating · Cardiff
        </p>
      </div>
    </footer>
  );
}
