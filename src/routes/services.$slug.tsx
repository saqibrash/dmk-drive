import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCTABar } from "@/components/site/MobileCTABar";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/site/Reveal";
import { areas, business, services } from "@/lib/business";
import { serviceExtras } from "@/lib/service-extras";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service unavailable | DMK Plumbing" }, { name: "robots", content: "noindex" }] };
    const extra = serviceExtras[s.slug];
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        { rel: "canonical", href: `/services/${params.slug}` },
        ...(extra ? [{ rel: "preload", as: "image", href: extra.image }] : []),
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.h1,
            serviceType: s.title,
            areaServed: areas.map((a) => ({ "@type": "Place", name: a })),
            provider: { "@type": "Plumber", name: business.name, telephone: "+44 7868 470791" },
          }),
        },
        ...(extra
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: extra.faqs.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                  })),
                }),
              },
            ]
          : []),
      ],
    };
  },
  component: ServicePage,
});

const trust = ["Gas Safe registered", "Which? Trusted Trader", `${business.rating} on Checkatrade`, "Local Cardiff engineers"];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1z" />
    </svg>
  );
}

function CTAButtons({ dark = false }: { dark?: boolean }) {
  return (
    <div className="grid gap-2.5 sm:flex sm:flex-wrap">
      <a
        href={business.phoneHref}
        className="inline-flex items-center justify-center gap-2 bg-accent px-6 py-4 font-display text-[18px] font-semibold tracking-[0.04em] text-ink uppercase transition-colors hover:bg-accent-deep"
      >
        <PhoneIcon /> Call {business.phoneDisplay}
      </a>
      <a
        href={business.whatsapp}
        className="inline-flex items-center justify-center gap-2 bg-wa px-6 py-4 font-display text-[18px] font-semibold tracking-[0.04em] text-paper uppercase transition-opacity hover:opacity-90"
      >
        WhatsApp us
      </a>
      <a
        href="#quote"
        className={`hidden items-center justify-center border px-6 py-4 font-display text-[17px] font-semibold tracking-[0.04em] uppercase transition-colors sm:inline-flex ${
          dark ? "border-paper/40 text-paper hover:bg-paper hover:text-ink" : "border-ink text-ink hover:bg-ink hover:text-paper"
        }`}
      >
        Request a quote
      </a>
    </div>
  );
}

function ServicePage() {
  const { service } = Route.useLoaderData();
  const extra = serviceExtras[service.slug];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 6);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      <main>
        {/* Hero */}
        <section className="warm-wash relative border-b border-line">
          <div className="mx-auto grid max-w-6xl items-center gap-7 px-4 pt-7 pb-9 md:px-6 md:pt-12 md:pb-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
            <div>
              <nav aria-label="Breadcrumb" className="font-mono text-[13px] tracking-[0.12em] text-muted uppercase">
                <Link to="/" className="hover:text-ink">Home</Link> <span aria-hidden="true">/</span> {service.title}
              </nav>
              <h1 className="mt-3 font-display text-[34px] leading-[1.06] font-semibold md:text-[50px]">{service.h1}</h1>
              <div className="mt-4 h-1 w-16 bg-accent" aria-hidden="true" />
              <p className="mt-4 max-w-[46ch] text-[18px] leading-relaxed font-medium text-ink-2">
                {extra?.lede ?? service.intro}
              </p>
              <p className="mt-2 max-w-[50ch] text-[16px] leading-relaxed text-muted">{service.intro}</p>
              <div className="mt-6">
                <CTAButtons />
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-[15px] text-ink-2">
                {trust.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <svg viewBox="0 0 20 20" className="size-4 shrink-0 text-accent-deep" fill="currentColor" aria-hidden="true">
                      <path d="M8 13.6 4.4 10l-1.4 1.4L8 16.4 17 7.4 15.6 6z" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            {extra && (
              <div className="relative">
                <img
                  src={extra.image}
                  alt={extra.alt}
                  width={1280}
                  height={960}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover shadow-[0_24px_60px_-30px_rgba(23,23,23,0.45)]"
                />
                <div className="absolute -bottom-3 left-4 bg-ink px-4 py-2.5 text-paper md:left-6">
                  <p className="font-mono text-[12px] tracking-[0.16em] text-accent uppercase">Cardiff &amp; surrounding areas</p>
                  <p className="font-display text-[16px] font-semibold">24 hour emergency call-out</p>
                </div>
                <div className="absolute -top-3 -right-1 hidden h-16 w-16 border-t-4 border-r-4 border-accent md:block" aria-hidden="true" />
              </div>
            )}
          </div>
        </section>

        {/* Points */}
        <section className="bg-paper">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <p className="font-mono text-[14px] tracking-[0.18em] text-muted uppercase">{service.title}</p>
              <h2 className="mt-2 font-display text-[26px] leading-tight font-semibold md:text-[34px]">
                {extra?.pointsTitle ?? "What we cover"}
              </h2>
              <p className="mt-4 max-w-[52ch] text-[16px] leading-relaxed text-muted">{service.body}</p>
            </Reveal>
            <Reveal delay={60}>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {service.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 border border-line bg-paper-2 px-4 py-3.5 text-[16px] font-medium">
                    <span className="mt-2 size-2 shrink-0 bg-accent" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Steps */}
        {extra && (
          <section className="cream-wash border-y border-line">
            <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
              <h2 className="font-display text-[26px] font-semibold md:text-[34px]">How it works</h2>
              <ol className="mt-7 grid gap-4 md:grid-cols-3">
                {extra.steps.map((s, i) => (
                  <Reveal key={s.t} delay={i * 60} className="border-t-4 border-accent bg-paper p-5 md:p-6">
                    <p className="font-mono text-[14px] text-muted">0{i + 1}</p>
                    <h3 className="mt-2 font-display text-[20px] font-semibold">{s.t}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.d}</p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* Mid CTA */}
        <section className="bg-ink text-paper">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
            <div>
              <h2 className="font-display text-[24px] font-semibold md:text-[30px]">Need {service.title.toLowerCase()} in Cardiff?</h2>
              <p className="mt-1 text-[16px] text-paper/70">Speak directly with a local engineer.</p>
            </div>
            <CTAButtons dark />
          </div>
        </section>

        {/* FAQ + Quote */}
        <section id="quote" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            {extra && (
              <div>
                <h2 className="font-display text-[26px] font-semibold md:text-[32px]">Common questions</h2>
                <div className="mt-5 divide-y divide-line border-y border-line">
                  {extra.faqs.map((f) => (
                    <details key={f.q} className="group py-4">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-[18px] font-semibold">
                        {f.q}
                        <span className="mt-1 text-accent-deep transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                      </summary>
                      <p className="mt-2 text-[16px] leading-relaxed text-muted">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
            <Reveal delay={60} className="border border-line bg-paper-2 p-5 md:p-7">
              <h2 className="font-display text-[22px] font-semibold md:text-[26px]">Request a callback</h2>
              <p className="mt-1.5 text-[15px] text-muted">
                Not urgent? Send your postcode and what needs doing. For emergencies, call {business.phoneDisplay}.
              </p>
              <div className="mt-5">
                <QuoteForm />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Areas */}
        <section className="border-t border-line bg-paper-2">
          <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
            <h2 className="font-display text-[22px] font-semibold">
              {service.title} across Cardiff &amp; nearby
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">{areas.join(" · ")}</p>
            <Link to="/areas-we-cover" className="mt-3 inline-block text-[15px] font-semibold underline decoration-accent decoration-2 underline-offset-4">
              See all areas we cover
            </Link>
          </div>
        </section>

        {/* Other services */}
        <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
          <h2 className="font-display text-[22px] font-semibold">Other services</h2>
          <div className="mt-4 grid grid-cols-2 gap-2.5 md:grid-cols-3">
            {others.map((s) => {
              const e = serviceExtras[s.slug];
              return (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group overflow-hidden border border-line bg-paper transition-transform duration-300 hover:-translate-y-1"
                >
                  {e && (
                    <img src={e.image} alt="" width={1280} height={960} loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover" />
                  )}
                  <div className="p-3.5">
                    <p className="font-display text-[17px] font-semibold">{s.title}</p>
                    <p className="mt-0.5 text-[14px] text-muted">{s.short}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
      <MobileCTABar />
    </div>
  );
}
