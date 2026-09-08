import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCTABar } from "@/components/site/MobileCTABar";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/site/Reveal";
import { Van } from "@/components/site/Van";
import certificate from "@/assets/Certificate-uai-720x957.png";
import photoEngineer from "@/assets/photo-boiler-engineer.jpg";
import photoPipework from "@/assets/photo-pipework.jpg";
import photoRadiator from "@/assets/photo-radiator.jpg";
import photoBoiler from "@/assets/photo-boiler-fitted.jpg";
import { areas, business, faqSchema, faqs, localBusinessSchema, services } from "@/lib/business";

const title = "Emergency Plumber Cardiff | Boiler Repair & Heating | DMK Plumbing";
const description =
  "Emergency plumber and boiler engineers in Cardiff. Gas Safe registered boiler repair, servicing, installation, heating and drainage. Call 07868 470 791.";

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

const problems = [
  "Burst pipe",
  "Water leak",
  "No hot water",
  "Boiler breakdown",
  "Heating failure",
  "Blocked drain",
  "Leaking tap",
  "Toilet problem",
];

const btnPrimary =
  "inline-flex items-center justify-center bg-accent px-6 py-4 font-display text-[17px] font-semibold tracking-[0.06em] text-ink uppercase transition-colors hover:bg-accent-deep";
const btnDark =
  "inline-flex items-center justify-center bg-ink px-6 py-4 font-display text-[17px] font-semibold tracking-[0.06em] text-paper uppercase transition-colors hover:bg-ink-2";
const btnOutline =
  "inline-flex items-center justify-center border border-ink px-6 py-4 font-display text-[17px] font-semibold tracking-[0.06em] text-ink uppercase transition-colors hover:bg-ink hover:text-paper";
const kicker = "font-mono text-[15px] tracking-[0.22em] text-muted uppercase";

function Home() {
  const featured = services[0];
  const rest = services.slice(1);

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-line">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pt-8 pb-10 md:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:pt-14 lg:pb-16">
            <div>
              <p className={kicker}>Cardiff plumbing &amp; heating</p>
              <h1 className="mt-3 max-w-[15ch] font-display text-[38px] leading-[1.05] font-semibold md:text-[52px] lg:text-[58px]">
                Emergency Plumber &amp; Boiler Engineers in Cardiff
              </h1>
              <div className="mt-4 h-1 w-20 bg-accent" aria-hidden="true" />
              <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-muted">
                Local plumbing, boiler and heating specialists covering Cardiff and the surrounding areas. Fast
                response, experienced engineers and someone who answers the phone.
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                <a href={business.phoneHref} className={btnPrimary}>
                  Call now — {business.phoneDisplay}
                </a>
                <a href={business.whatsapp} className={btnDark}>
                  WhatsApp us
                </a>
                <a href="#quote" className={btnOutline}>
                  Request a quote
                </a>
              </div>

              <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-line pt-6 sm:grid-cols-4">
                {["Gas Safe Registered", "Which? Trusted Trader", `${business.rating} Checkatrade`, "Local Cardiff engineers"].map(
                  (t) => (
                    <li key={t} className="flex items-start gap-2 text-[14px] leading-snug">
                      <span className="mt-1 size-2 shrink-0 bg-accent" aria-hidden="true" />
                      {t}
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="lg:pl-4">
              <Van />
            </div>
          </div>
        </section>

        {/* EMERGENCY STRIP */}
        <section className="bg-accent">
          <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
            <div className="grid gap-6 md:grid-cols-[1fr_1.3fr] md:items-center">
              <div>
                <h2 className="font-display text-[30px] leading-tight font-semibold text-ink md:text-[38px]">
                  Need an emergency plumber?
                </h2>
                <p className="mt-2 max-w-[34ch] text-[16px] text-ink/80">
                  Call and speak to an engineer, not a call centre.
                </p>
                <a href={business.phoneHref} className={`${btnDark} mt-5`}>
                  Call DMK Plumbing now
                </a>
              </div>
              <ul className="grid grid-cols-2 gap-x-6 border-t border-ink/20 sm:grid-cols-2">
                {problems.map((p) => (
                  <li
                    key={p}
                    className="border-b border-ink/20 py-2.5 font-mono text-[17px] tracking-[0.06em] text-ink uppercase"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FEATURED SERVICE + LIST */}
        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <Reveal className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <img
              src={photoEngineer}
              alt="Gas Safe engineer servicing a combi boiler in a Cardiff kitchen"
              width={1280}
              height={960}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div>
              <p className={kicker}>{featured.n} · Our main call out</p>
              <h2 className="mt-3 font-display text-[30px] leading-tight font-semibold md:text-[40px]">
                {featured.title} across Cardiff
              </h2>
              <p className="mt-4 max-w-[48ch] text-[16px] leading-relaxed text-muted">{featured.intro}</p>
              <ul className="mt-5 space-y-2 text-[16px]">
                {featured.points.slice(0, 3).map((p) => (
                  <li key={p} className="flex gap-3 border-b border-line pb-2">
                    <span className="mt-2 size-2 shrink-0 bg-accent" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link to="/services/$slug" params={{ slug: featured.slug }} className={`${btnOutline} mt-6`}>
                Emergency plumbing
              </Link>
            </div>
          </Reveal>

          <div className="mt-16 border-t border-line">
            {rest.map((s, i) => (
              <Reveal key={s.slug} delay={i * 30}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-4 border-b border-line py-5 transition-colors hover:bg-panel md:gap-8"
                >
                  <span className="font-mono text-[15px] text-muted">{s.n}</span>
                  <span>
                    <span className="block font-display text-[22px] font-semibold md:text-[26px]">{s.title}</span>
                    <span className="block text-[15px] text-muted">{s.short}</span>
                  </span>
                  <span className="font-mono text-[15px] tracking-[0.14em] text-muted uppercase transition-colors group-hover:text-ink">
                    View →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* TRUST BAND */}
        <section className="bg-ink text-paper">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
            <div>
              <p className="font-display text-[40px] leading-none font-semibold text-accent">{business.rating}</p>
              <p className="mt-2 text-[15px] text-paper/70">
                Checkatrade rating from {business.reviewCount} customer reviews
              </p>
            </div>
            <div>
              <p className="font-display text-[40px] leading-none font-semibold text-accent">24/7</p>
              <p className="mt-2 text-[15px] text-paper/70">Emergency call out across Cardiff</p>
            </div>
            <div>
              <p className="font-display text-[40px] leading-none font-semibold text-accent">Gas Safe</p>
              <p className="mt-2 text-[15px] text-paper/70">All gas work by registered engineers</p>
            </div>
            <div>
              <p className="font-display text-[40px] leading-none font-semibold text-accent">Which?</p>
              <p className="mt-2 text-[15px] text-paper/70">Trusted Trader, and a local Cardiff business</p>
            </div>
          </div>
        </section>

        {/* BOILERS SPLIT */}
        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <Reveal className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-12">
            <img
              src={photoBoiler}
              alt="New combi boiler fitted with tidy copper pipework in a Cardiff home"
              width={1008}
              height={1264}
              loading="lazy"
              decoding="async"
              className="w-full object-cover md:max-h-[520px]"
            />
            <div>
              <p className={kicker}>Boiler work</p>
              <h2 className="mt-3 font-display text-[30px] leading-tight font-semibold md:text-[40px]">
                Boiler repair, servicing and installation
              </h2>
              <p className="mt-4 max-w-[46ch] text-[16px] leading-relaxed text-muted">
                Most breakdowns are diagnosed and sorted on the first visit. We carry common spares, work on all the
                main brands, and tell you straight if a boiler is worth repairing.
              </p>
              <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {[
                  ["Boiler repairs", "Same-day where we can"],
                  ["Boiler servicing", "Annual safety check"],
                  ["Boiler installation", "Combi, system, regular"],
                  ["Boiler breakdown", "Fault codes and pressure loss"],
                ].map(([t, d]) => (
                  <div key={t} className="border-l-2 border-accent pl-3">
                    <dt className="font-display text-[19px] font-semibold">{t}</dt>
                    <dd className="text-[15px] text-muted">{d}</dd>
                  </div>
                ))}
              </dl>
              <Link to="/services/$slug" params={{ slug: "boiler-repairs" }} className={`${btnPrimary} mt-7`}>
                Book a boiler engineer
              </Link>
            </div>
          </Reveal>
        </section>

        {/* RECENT WORK */}
        <section className="border-y border-line bg-paper-2 py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 className="font-display text-[30px] leading-tight font-semibold md:text-[40px]">
                Recent work across Cardiff
              </h2>
              <p className={kicker}>Boilers · Heating · Pipework</p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <figure className="overflow-hidden sm:col-span-2 sm:row-span-2">
                <img
                  src={photoEngineer}
                  alt="Engineer testing boiler pressure during a service in Cardiff"
                  width={1280}
                  height={960}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </figure>
              <figure className="overflow-hidden">
                <img
                  src={photoPipework}
                  alt="New copper pipework and valves fitted under a kitchen sink"
                  width={1008}
                  height={1008}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </figure>
              <figure className="overflow-hidden">
                <img
                  src={photoRadiator}
                  alt="Radiator being bled during a central heating repair"
                  width={1008}
                  height={1008}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <p className="text-[20px] tracking-[0.25em] text-accent-deep" aria-label="Five star rating">
                ★★★★★
              </p>
              <h2 className="mt-3 font-display text-[30px] leading-tight font-semibold md:text-[40px]">
                Rated {business.rating} on Checkatrade
              </h2>
              <p className="mt-4 max-w-[48ch] text-[16px] leading-relaxed text-muted">
                {business.reviewCount} customer reviews from homes and rental properties across Cardiff and the
                surrounding areas. Every review is published on our Checkatrade profile — we do not write our own.
              </p>
            </div>
            <div className="border-l-4 border-accent bg-panel p-6">
              <p className="font-mono text-[14px] tracking-[0.16em] text-muted uppercase">Score</p>
              <p className="font-display text-[64px] leading-none font-semibold">{business.rating}</p>
              <p className="mt-2 text-[15px] text-muted">out of 10 · {business.reviewCount} reviews</p>
            </div>
          </div>
        </section>

        {/* LANDLORDS */}
        <section className="bg-ink text-paper">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.2fr_0.8fr] md:items-center md:px-6 md:py-20">
            <div>
              <p className="font-mono text-[15px] tracking-[0.22em] text-accent uppercase">For landlords &amp; agents</p>
              <h2 className="mt-3 font-display text-[30px] leading-tight font-semibold md:text-[40px]">
                Landlord plumbing &amp; gas services
              </h2>
              <p className="mt-4 max-w-[48ch] text-[16px] leading-relaxed text-paper/70">
                One local team for certificates, servicing and repairs. We arrange access with tenants and send the
                paperwork over as soon as the job is signed off.
              </p>
              <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
                {[
                  "Gas Safety Certificates",
                  "Boiler Servicing",
                  "Emergency Repairs",
                  "Heating Maintenance",
                  "Property Plumbing",
                  "Ongoing Maintenance",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 border-b border-paper/15 py-2.5 text-[16px]">
                    <span className="mt-2 size-2 shrink-0 bg-accent" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link to="/services/$slug" params={{ slug: "landlord-services" }} className={`${btnPrimary} mt-7`}>
                Book landlord service
              </Link>
            </div>
            <img
              src={certificate}
              alt="Landlord gas safety certificate issued by DMK Plumbing & Heating"
              width={720}
              height={957}
              loading="lazy"
              decoding="async"
              className="w-full max-w-sm justify-self-center object-cover"
            />
          </div>
        </section>

        {/* AREAS */}
        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className={kicker}>Where we work</p>
              <h2 className="mt-3 font-display text-[30px] leading-tight font-semibold md:text-[40px]">
                Cardiff and the surrounding areas
              </h2>
              <p className="mt-4 max-w-[40ch] text-[16px] leading-relaxed text-muted">
                Based in Cardiff, so we know the roads and the housing stock — from Victorian terraces in Roath to new
                builds out towards Barry.
              </p>
              <Link to="/areas-we-cover" className={`${btnOutline} mt-6`}>
                All areas covered
              </Link>
            </div>
            <ul className="grid grid-cols-2 content-start gap-x-8 sm:grid-cols-3">
              {areas.map((a) => (
                <li key={a} className="border-b border-line py-2.5 text-[16px]">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ABOUT */}
        <section className="border-y border-line bg-paper-2">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2 md:items-center md:gap-12 md:px-6 md:py-20">
            <img
              src={photoPipework}
              alt="Plumber fitting new pipework in a Cardiff home"
              width={1008}
              height={1008}
              loading="lazy"
              decoding="async"
              className="w-full object-cover md:max-h-[420px]"
            />
            <div>
              <p className={kicker}>About DMK</p>
              <h2 className="mt-3 font-display text-[30px] leading-tight font-semibold md:text-[40px]">
                A Cardiff plumbing and heating firm
              </h2>
              <p className="mt-4 max-w-[48ch] text-[16px] leading-relaxed text-muted">
                DMK Plumbing &amp; Heating works across Cardiff on emergency plumbing, boilers and central heating.
                All gas work is carried out by Gas Safe registered engineers. We give you the price before we start,
                turn up when we say we will, and clear up after ourselves.
              </p>
              <p className="mt-3 max-w-[48ch] text-[16px] leading-relaxed text-muted">
                Most of our work comes from repeat customers, landlords and neighbours passing our number on.
              </p>
              <Link to="/about" className="rule-link mt-5 inline-block font-mono text-[16px] tracking-[0.14em] uppercase">
                More about us
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-4 py-14 md:px-6 md:py-20">
          <h2 className="font-display text-[30px] leading-tight font-semibold md:text-[40px]">Common questions</h2>
          <div className="mt-8 border-t border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-line py-4">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-[19px] font-semibold">
                  {f.q}
                  <span className="text-accent-deep transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[62ch] text-[16px] leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* FINAL CTA + FORM */}
        <section id="quote" className="scroll-mt-24 bg-accent">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
            <div>
              <h2 className="max-w-[18ch] font-display text-[32px] leading-tight font-semibold text-ink md:text-[44px]">
                Need a plumber or boiler engineer today?
              </h2>
              <p className="mt-4 max-w-[44ch] text-[17px] text-ink/80">
                Speak directly with DMK Plumbing for emergency repairs, boiler work and general plumbing across
                Cardiff.
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                <a href={business.phoneHref} className={btnDark}>
                  Call {business.phoneDisplay}
                </a>
                <a
                  href={business.whatsapp}
                  className="inline-flex items-center justify-center border border-ink px-6 py-4 font-display text-[17px] font-semibold tracking-[0.06em] text-ink uppercase hover:bg-ink hover:text-accent"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
            <div className="bg-paper p-6 md:p-8">
              <h3 className="font-display text-[22px] font-semibold">Request a callback</h3>
              <p className="mt-1 text-[15px] text-muted">Five details, and we will ring you back.</p>
              <div className="mt-5">
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
