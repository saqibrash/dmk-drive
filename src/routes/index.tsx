import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCTABar } from "@/components/site/MobileCTABar";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/site/Reveal";
import { Van } from "@/components/site/Van";
import certificate from "@/assets/Certificate-uai-720x957.png";
import {
  areas,
  business,
  emergencies,
  faqSchema,
  faqs,
  localBusinessSchema,
  services,
} from "@/lib/business";

const title = "Emergency Plumber Cardiff | Boiler Repair & Heating | DMK Plumbing";
const description =
  "Emergency plumber and heating engineers in Cardiff. Gas Safe registered boiler repair, servicing, installation and central heating. Call 07868 470 791.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: Home,
});

const trustBadges = [
  { k: "Certified", v: "Gas Safe Registered" },
  { k: "Vetted", v: "Which? Trusted Trader" },
  { k: "Rated", v: `${business.rating} Checkatrade` },
  { k: "Local", v: "Cardiff Engineers" },
];

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      <main>
        {/* 1. HERO */}
        <section className="relative">
          <div className="aurora pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl gap-6 px-4 pt-6 pb-4 lg:grid-cols-2 lg:items-center lg:gap-10 lg:pt-12">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-3 py-1">
                <span className="size-1.5 rounded-full bg-wa" aria-hidden="true" />
                <span className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                  Gas Safe Registered
                </span>
              </p>
              <h1 className="mt-4 max-w-[16ch] font-display text-[32px] leading-[1.02] font-bold tracking-tight text-balance md:text-[46px] lg:text-[54px]">
                Emergency Plumber &amp; Heating Engineers in Cardiff
              </h1>
              <p className="mt-3 max-w-[44ch] text-[15px] text-pretty text-muted md:text-[17px]">
                Fast, reliable plumbing, boiler and heating services across Cardiff and surrounding areas.
              </p>

              <div className="mt-5 grid max-w-lg grid-cols-2 gap-2">
                <a
                  href={business.phoneHref}
                  className="col-span-2 rounded-xl bg-accent px-4 py-3.5 text-center font-display text-[15px] font-bold text-paper ring-1 ring-black/5"
                >
                  CALL NOW — {business.phoneDisplay}
                </a>
                <a
                  href={business.whatsapp}
                  className="flex items-center justify-center gap-2 rounded-xl bg-wa/15 px-4 py-3 text-[14px] font-medium ring-1 ring-wa/40"
                >
                  <span className="size-2 rounded-full bg-wa" aria-hidden="true" />
                  WhatsApp Us
                </a>
                <a
                  href="#quote"
                  className="flex items-center justify-center rounded-xl border border-line bg-panel/50 px-4 py-3 text-[14px] font-medium"
                >
                  Get a Quote
                </a>
              </div>

              <ul className="mt-4 grid max-w-lg grid-cols-2 gap-2">
                {trustBadges.map((b) => (
                  <li key={b.v} className="rounded-xl border border-line/70 bg-panel/40 px-3 py-2">
                    <p className="font-mono text-[9px] tracking-[0.14em] text-muted uppercase">{b.k}</p>
                    <p className="text-[12px] font-medium">{b.v}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl p-3 ring-1 ring-line/70">
              <div className="flex items-center justify-between px-1 pb-2">
                <p className="font-mono text-[9px] tracking-[0.2em] text-muted uppercase">On call · Cardiff</p>
                <p className="font-mono text-[9px] tracking-[0.2em] text-brand uppercase">24 / 7</p>
              </div>
              <Van />
            </div>
          </div>
        </section>

        {/* 2. EMERGENCY STRIP */}
        <section className="mx-auto max-w-6xl px-4 pb-2">
          <div className="glass rounded-2xl p-4 ring-1 ring-line/70 md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-[18px] font-bold tracking-tight md:text-[24px]">
                Need a plumber urgently?
              </h2>
              <span className="font-mono text-[10px] tracking-[0.14em] text-accent uppercase">24/7</span>
            </div>
            <div className="mt-3 overflow-hidden">
              <div className="marq flex w-max gap-2 whitespace-nowrap">
                {[...emergencies, ...emergencies].map((e, i) => (
                  <span
                    key={`${e}-${i}`}
                    className="rounded-full border border-line bg-paper/50 px-3 py-1 text-[12px]"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={business.phoneHref}
              className="mt-4 flex items-center justify-center rounded-xl bg-accent px-4 py-3 font-display text-[14px] font-bold text-paper ring-1 ring-black/5"
            >
              Call DMK Plumbing Now
            </a>
          </div>
        </section>

        {/* 3. MAIN SERVICES */}
        <section className="mx-auto max-w-6xl px-4 py-6">
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-[22px] font-bold tracking-tight md:text-[30px]">Services</h2>
            <span className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">(a)</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 40}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="glass block h-full rounded-xl p-4 ring-1 ring-line/70 transition-transform duration-300 hover:-translate-y-1 hover:ring-brand/40"
                >
                  <p className="font-mono text-[9px] text-brand">{s.n}</p>
                  <p className="mt-2 font-display text-[15px] font-bold">{s.title}</p>
                  <p className="mt-1 text-[12px] text-muted">{s.short}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 4. WHY CHOOSE DMK */}
        <section className="mx-auto max-w-6xl px-4 py-4">
          <Reveal className="glass rounded-2xl p-5 ring-1 ring-line/70 md:p-8">
            <h2 className="font-display text-[20px] font-bold tracking-tight md:text-[28px]">
              Why Cardiff calls DMK
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div>
                <p className="font-display text-[28px] leading-none font-bold text-brand">24/7</p>
                <p className="mt-1 text-[12px] text-muted">Fast local response</p>
              </div>
              <div>
                <p className="font-display text-[28px] leading-none font-bold text-brand">{business.rating}</p>
                <p className="mt-1 text-[12px] text-muted">Checkatrade rating</p>
              </div>
              <div>
                <p className="font-display text-[28px] leading-none font-bold text-brand">100%</p>
                <p className="mt-1 text-[12px] text-muted">Gas Safe engineers</p>
              </div>
              <div>
                <p className="font-display text-[28px] leading-none font-bold text-brand">Cardiff</p>
                <p className="mt-1 text-[12px] text-muted">Local &amp; trusted</p>
              </div>
            </div>
            <ul className="mt-5 grid gap-2 text-[14px] md:grid-cols-3">
              {[
                "Experienced local team",
                "Transparent pricing",
                "Cardiff & surrounding areas",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* 5. RATING / REVIEWS */}
        <section className="mx-auto max-w-6xl px-4 py-4">
          <Reveal className="glass rounded-2xl p-5 ring-1 ring-line/70 md:p-8">
            <div className="flex items-center justify-between">
              <p className="text-[15px] tracking-[0.2em] text-accent" aria-label="Five star rating">
                ★★★★★
              </p>
              <p className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                {business.rating} Checkatrade
              </p>
            </div>
            <p className="mt-3 max-w-[52ch] text-[15px] text-pretty">
              Rated {business.rating} on Checkatrade from {business.reviewCount} customer reviews across Cardiff and
              the surrounding areas.
            </p>
            <p className="mt-3 font-mono text-[11px] text-muted">
              Verified reviews are published on our Checkatrade profile.
            </p>
          </Reveal>
        </section>

        {/* 7. BOILER SERVICES */}
        <section className="mx-auto max-w-6xl px-4 py-4">
          <Reveal className="glass rounded-2xl p-5 ring-1 ring-brand/25 md:p-8">
            <p className="font-mono text-[10px] tracking-[0.16em] text-brand uppercase">Boiler specialists</p>
            <h2 className="mt-2 font-display text-[22px] font-bold tracking-tight md:text-[30px]">
              Boiler repair, servicing and installation in Cardiff
            </h2>
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              <ul className="grid gap-2 text-[14px]">
                {[
                  "Emergency boiler repair",
                  "Boiler servicing",
                  "Boiler installation",
                  "Boiler breakdown diagnosis",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-wrap content-start gap-2">
                {["Same-day availability", "Gas Safe engineers", "Major boiler brands", "Fast diagnosis"].map(
                  (t) => (
                    <li
                      key={t}
                      className="h-fit rounded-full border border-line bg-paper/50 px-3 py-1 text-[12px] text-muted"
                    >
                      {t}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <Link
              to="/services/$slug"
              params={{ slug: "boiler-repairs" }}
              className="mt-5 inline-block rounded-xl bg-accent px-5 py-3 font-display text-[14px] font-bold text-paper ring-1 ring-black/5"
            >
              Book Boiler Engineer
            </Link>
          </Reveal>
        </section>

        {/* 8. LANDLORDS */}
        <section className="mx-auto max-w-6xl px-4 py-4">
          <Reveal className="glass grid gap-5 rounded-2xl p-5 ring-1 ring-line/70 md:grid-cols-[1.4fr_1fr] md:p-8">
            <div>
              <h2 className="font-display text-[22px] font-bold tracking-tight md:text-[30px]">
                Are You A Landlord?
              </h2>
              <ul className="mt-4 grid gap-2 text-[14px] sm:grid-cols-2">
                {[
                  "Gas Safety Certificates",
                  "Boiler Servicing",
                  "Emergency Repairs",
                  "Property Maintenance",
                  "Heating Repairs",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/services/$slug"
                params={{ slug: "landlord-services" }}
                className="mt-5 inline-block rounded-xl bg-accent px-5 py-3 font-display text-[14px] font-bold text-paper ring-1 ring-black/5"
              >
                Book Landlord Service
              </Link>
            </div>
            <img
              src={certificate}
              alt="Landlord gas safety certificate issued by DMK Plumbing & Heating"
              width={720}
              height={957}
              loading="lazy"
              decoding="async"
              className="w-full rounded-xl border border-line/70 object-cover"
            />
          </Reveal>
        </section>

        {/* 9. SERVICE AREA */}
        <section className="mx-auto max-w-6xl px-4 py-4">
          <h2 className="font-display text-[20px] font-bold tracking-tight md:text-[28px]">Areas we cover</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {areas.map((a) => (
              <li
                key={a}
                className="rounded-full border border-line bg-panel/40 px-3 py-1.5 text-[12px] text-muted"
              >
                {a}
              </li>
            ))}
          </ul>
          <Link to="/areas-we-cover" className="mt-4 inline-block font-mono text-[11px] text-brand">
            See all areas →
          </Link>
        </section>

        {/* 10. ABOUT */}
        <section className="mx-auto max-w-6xl px-4 py-6">
          <h2 className="font-display text-[20px] font-bold tracking-tight md:text-[28px]">
            Local, experienced, accountable
          </h2>
          <p className="mt-2 max-w-[54ch] text-[14px] text-pretty text-muted">
            DMK Plumbing &amp; Heating is a Cardiff based team of Gas Safe registered engineers, focused on reliable
            emergency plumbing, boiler and heating work for the city and surrounding areas.
          </p>
          <Link to="/about" className="mt-3 inline-block font-mono text-[11px] text-brand">
            More about us →
          </Link>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-4 py-4">
          <h2 className="font-display text-[20px] font-bold tracking-tight md:text-[28px]">
            Frequently asked questions
          </h2>
          <div className="mt-4 grid gap-2">
            {faqs.map((f) => (
              <details key={f.q} className="glass rounded-xl p-4 ring-1 ring-line/70">
                <summary className="cursor-pointer font-display text-[15px] font-bold">{f.q}</summary>
                <p className="mt-2 text-[14px] text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 11. FINAL CTA + FORM */}
        <section id="quote" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-8">
          <div className="glass grid gap-6 rounded-2xl p-6 ring-1 ring-brand/30 md:grid-cols-2 md:p-10">
            <div>
              <h2 className="font-display text-[26px] font-bold tracking-tight text-balance md:text-[34px]">
                Plumbing or heating emergency?
              </h2>
              <p className="mt-2 text-[14px] text-muted">Speak directly with a local engineer.</p>
              <div className="mt-5 grid max-w-md gap-2">
                <a
                  href={business.phoneHref}
                  className="rounded-xl bg-accent px-4 py-3.5 text-center font-display text-[15px] font-bold text-paper ring-1 ring-black/5"
                >
                  Call {business.phoneDisplay}
                </a>
                <a
                  href={business.whatsapp}
                  className="flex items-center justify-center gap-2 rounded-xl bg-wa/15 px-4 py-3 text-[14px] font-medium ring-1 ring-wa/40"
                >
                  <span className="size-2 rounded-full bg-wa" aria-hidden="true" />
                  WhatsApp Now
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-display text-[16px] font-bold">Get a quote</h3>
              <div className="mt-3">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileCTABar />
    </div>
  );
}
