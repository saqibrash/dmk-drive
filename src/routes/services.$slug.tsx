import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCTABar } from "@/components/site/MobileCTABar";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/site/Reveal";
import { areas, business, services } from "@/lib/business";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    const s = loaderData?.service;
    if (!s) return {};
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
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
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 6);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      <main>
        <section className="relative border-b border-line">
          <div className="mx-auto max-w-6xl px-4 pt-10 pb-8">
            <p className="font-mono text-[14px] tracking-[0.16em] text-muted uppercase">
              {service.n} · Cardiff &amp; surrounding areas
            </p>
            <h1 className="mt-3 max-w-[18ch] font-display text-[34px] leading-[1.03] font-bold tracking-tight md:text-[52px]">
              {service.h1}
            </h1>
            <p className="mt-4 max-w-[52ch] text-[17px] text-muted md:text-[19px]">{service.intro}</p>
            <div className="mt-6 grid max-w-lg grid-cols-2 gap-2">
              <a
                href={business.phoneHref}
                className="col-span-2 bg-accent px-4 py-3.5 text-center font-display text-[17px] font-bold text-ink"
              >
                CALL NOW — {business.phoneDisplay}
              </a>
              <a
                href={business.whatsapp}
                className="flex items-center justify-center gap-2 bg-wa/15 px-4 py-3 text-[16px] font-medium ring-1 ring-wa/40"
              >
                <span className="size-2 bg-wa" aria-hidden="true" />
                WhatsApp Us
              </a>
              <a
                href="#quote"
                className="flex items-center justify-center border border-line bg-panel px-4 py-3 text-[16px] font-medium"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <Reveal className="border border-line bg-paper-2 p-5 md:p-8">
            <h2 className="font-display text-[20px] font-bold tracking-tight md:text-[26px]">What we cover</h2>
            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {service.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-[16px]">
                  <span className="mt-1.5 size-1.5 shrink-0 bg-accent" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-[62ch] text-[16px] text-muted">{service.body}</p>
          </Reveal>
        </section>

        <section id="quote" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-[24px] font-bold tracking-tight md:text-[30px]">
                Get a quick quote
              </h2>
              <p className="mt-2 max-w-[42ch] text-[16px] text-muted">
                Five short questions. We come back to you with a clear price and the next available slot.
              </p>
            </Reveal>
            <Reveal delay={80} className="border border-line bg-paper-2 p-5">
              <QuoteForm />
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="font-display text-[20px] font-bold tracking-tight">Other services</h2>
          <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="border border-line bg-paper-2 p-4 transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="font-mono text-[13px] text-muted">{s.n}</p>
                <p className="mt-2 font-display text-[17px] font-bold">{s.title}</p>
                <p className="mt-1 text-[15px] text-muted">{s.short}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <MobileCTABar />
    </div>
  );
}
