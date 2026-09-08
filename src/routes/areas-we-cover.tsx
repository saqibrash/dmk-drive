import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCTABar } from "@/components/site/MobileCTABar";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/site/Reveal";
import { areas, business } from "@/lib/business";

const title = "Areas We Cover | Plumber Cardiff & Surrounding | DMK Plumbing";
const description =
  "DMK Plumbing & Heating covers Cardiff, Penarth, Barry, Caerphilly, Pontypridd and surrounding areas for emergency plumbing, boiler repair and heating.";

export const Route = createFileRoute("/areas-we-cover")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/areas-we-cover" },
    ],
    links: [{ rel: "canonical", href: "/areas-we-cover" }],
  }),
  component: AreasPage,
});

function AreasPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <section className="aurora relative">
          <div className="mx-auto max-w-6xl px-4 pt-10 pb-8">
            <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">Local coverage</p>
            <h1 className="mt-3 max-w-[18ch] font-display text-[34px] leading-[1.03] font-bold tracking-tight md:text-[52px]">
              Plumbers Covering Cardiff &amp; Surrounding Areas
            </h1>
            <p className="mt-4 max-w-[52ch] text-[15px] text-muted">
              Our engineers are Cardiff based, so we know the roads and get to you quickly, whichever side of the
              city you are on.
            </p>
            <a
              href={business.phoneHref}
              className="mt-6 inline-block rounded-xl bg-accent px-5 py-3.5 font-display text-[15px] font-bold text-paper ring-1 ring-black/5"
            >
              CALL NOW — {business.phoneDisplay}
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
            {areas.map((a, i) => (
              <Reveal
                key={a}
                delay={i * 25}
                className="glass rounded-xl p-4 ring-1 ring-line/70 transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="font-mono text-[9px] text-brand">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-2 font-display text-[15px] font-bold">{a}</p>
                <p className="mt-1 text-[12px] text-muted">Plumbing &amp; heating</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="quote" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-[24px] font-bold tracking-tight md:text-[30px]">
                Not sure if we cover you?
              </h2>
              <p className="mt-2 max-w-[42ch] text-[14px] text-muted">
                Send your postcode and we will confirm straight away.
              </p>
            </Reveal>
            <Reveal delay={80} className="glass rounded-2xl p-5 ring-1 ring-line/70">
              <QuoteForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTABar />
    </div>
  );
}
