import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCTABar } from "@/components/site/MobileCTABar";
import { Reveal } from "@/components/site/Reveal";
import { business, services } from "@/lib/business";
import teamPhoto from "@/assets/photo-boiler-engineer.jpg";
import pipePhoto from "@/assets/photo-pipework.jpg";
import certificate from "@/assets/Certificate-uai-720x957.png";

const title = "About DMK Plumbing & Heating | Gas Safe Engineers Cardiff";
const description =
  "DMK Plumbing & Heating is a local Cardiff plumbing and heating company with Gas Safe registered engineers covering Cardiff and surrounding areas.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <section className="border-b border-line">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pt-10 pb-10 md:px-6 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="font-mono text-[15px] tracking-[0.22em] text-muted uppercase">About us</p>
              <h1 className="mt-3 max-w-[18ch] font-display text-[36px] leading-[1.05] font-semibold md:text-[52px]">
                A local Cardiff plumbing &amp; heating company
              </h1>
              <div className="mt-4 h-1 w-20 bg-accent" aria-hidden="true" />
              <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-muted">
                We are a Cardiff based team of Gas Safe registered engineers handling emergency plumbing, boiler work
                and central heating for homeowners, landlords and letting agents across the city and the surrounding
                areas.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center bg-accent px-6 py-4 font-display text-[17px] font-semibold tracking-[0.06em] text-ink uppercase"
                >
                  Call {business.phoneDisplay}
                </a>
                <a
                  href={business.whatsapp}
                  className="inline-flex items-center bg-ink px-6 py-4 font-display text-[17px] font-semibold tracking-[0.06em] text-paper uppercase"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
            <img
              src={teamPhoto}
              alt="DMK Plumbing & Heating engineer working on a boiler in a Cardiff home"
              width={1280}
              height={960}
              loading="eager"
              decoding="async"
              className="w-full object-cover lg:max-h-[380px]"
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <Reveal>
              <img
                src={pipePhoto}
                alt="Copper pipework installed by a Cardiff heating engineer"
                width={1280}
                height={960}
                loading="lazy"
                decoding="async"
                className="w-full object-cover"
              />
            </Reveal>
            <Reveal delay={80}>
              <p className="font-mono text-[15px] tracking-[0.22em] text-muted uppercase">How we work</p>
              <h2 className="mt-3 font-display text-[28px] leading-tight font-semibold md:text-[38px]">
                Proper repairs, clear prices, no mess left behind
              </h2>
              <div className="mt-4 h-1 w-16 bg-accent" aria-hidden="true" />
              <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-muted">
                <p>
                  Most of our work comes from people who have already had us out once, or from a neighbour who has.
                  That only happens if the job is done properly the first time, so we diagnose the actual fault rather
                  than swapping parts and hoping.
                </p>
                <p>
                  You get told what is wrong, what it costs and how long it takes before we start. Boots off, dust
                  sheets down, and the place left tidy when we finish.
                </p>
                <p>
                  We cover the whole of Cardiff and out towards Penarth, Barry, Caerphilly and Pontypridd, so we know
                  the housing stock, from Victorian terraces in Roath to new builds on the edge of the city.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-line bg-paper-2">
          <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
            <div className="grid gap-px bg-line md:grid-cols-3">
              {[
                {
                  n: "01",
                  h: "Experienced engineers",
                  p: "Time-served plumbers and heating engineers who fix the fault properly rather than patching over it.",
                },
                {
                  n: "02",
                  h: "Gas Safe registered",
                  p: "All gas work is carried out by Gas Safe registered engineers, from boiler repairs to landlord certificates.",
                },
                {
                  n: "03",
                  h: "Rated 9.9 on Checkatrade",
                  p: `${business.reviewCount} customer reviews from homes and rental properties across Cardiff and the surrounding areas.`,
                },
              ].map((c, i) => (
                <Reveal key={c.h} delay={i * 70} className="bg-paper p-6 md:p-8">
                  <p className="font-mono text-[15px] text-accent-deep">{c.n}</p>
                  <h3 className="mt-3 font-display text-[21px] font-semibold">{c.h}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-muted">{c.p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink text-paper">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <p className="font-mono text-[15px] tracking-[0.22em] text-accent uppercase">Certification</p>
              <h2 className="mt-3 font-display text-[28px] leading-tight font-semibold md:text-[38px]">
                Gas Safe registered engineers
              </h2>
              <div className="mt-4 h-1 w-16 bg-accent" aria-hidden="true" />
              <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-paper/70">
                Every gas job is signed off by a Gas Safe registered engineer, and landlords get their certificate sent
                over as soon as the work is complete. If you would like to see the registration before we start, just
                ask on the phone.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <Link
                  to="/services/$slug"
                  params={{ slug: "gas-safety-certificates" }}
                  className="inline-flex items-center bg-accent px-6 py-4 font-display text-[17px] font-semibold tracking-[0.06em] text-ink uppercase"
                >
                  Gas safety certificates
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center border border-paper/40 px-6 py-4 font-display text-[17px] font-semibold tracking-[0.06em] text-paper uppercase"
                >
                  Contact us
                </Link>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <img
                src={certificate}
                alt="Example gas safety certificate issued by DMK Plumbing & Heating"
                width={720}
                height={957}
                loading="lazy"
                decoding="async"
                className="mx-auto w-full max-w-sm"
              />
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="font-display text-[24px] font-semibold md:text-[30px]">What we do</h2>
          <div className="mt-6 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group bg-paper p-5 hover:bg-paper-2"
              >
                <p className="font-mono text-[14px] text-muted">{s.n}</p>
                <p className="mt-2 font-display text-[19px] font-semibold group-hover:text-accent-deep">{s.title}</p>
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
