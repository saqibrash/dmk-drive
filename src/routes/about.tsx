import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCTABar } from "@/components/site/MobileCTABar";
import { Reveal } from "@/components/site/Reveal";
import { business } from "@/lib/business";

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
        <section className="relative border-b border-line">
          <div className="mx-auto max-w-6xl px-4 pt-10 pb-8">
            <p className="font-mono text-[14px] tracking-[0.16em] text-muted uppercase">About us</p>
            <h1 className="mt-3 max-w-[20ch] font-display text-[34px] leading-[1.03] font-bold tracking-tight md:text-[52px]">
              A Local Cardiff Plumbing &amp; Heating Company
            </h1>
            <p className="mt-4 max-w-[54ch] text-[17px] text-muted md:text-[19px]">
              We are a Cardiff based team of Gas Safe registered engineers handling emergency plumbing, boiler work
              and central heating for homeowners and landlords across the city and surrounding areas.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <div className="grid gap-2 md:grid-cols-3">
            {[
              {
                h: "Experienced engineers",
                p: "Time-served plumbers and heating engineers who fix the fault properly rather than patching it.",
              },
              {
                h: "Gas Safe registered",
                p: "All gas work is carried out by Gas Safe registered engineers, from repairs to landlord certificates.",
              },
              {
                h: "Reliable service",
                p: "Clear prices, honest advice, and we tidy up before we leave. That is how we get repeat customers.",
              },
            ].map((c, i) => (
              <Reveal key={c.h} delay={i * 70} className="border border-line bg-paper-2 p-5">
                <h2 className="font-display text-[19px] font-bold tracking-tight">{c.h}</h2>
                <p className="mt-2 text-[16px] text-muted">{c.p}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <Reveal className="border border-line bg-paper-2 p-6 text-center md:p-10">
            <h2 className="font-display text-[24px] font-bold tracking-tight md:text-[32px]">
              Speak to a local engineer
            </h2>
            <div className="mx-auto mt-5 grid max-w-md gap-2">
              <a
                href={business.phoneHref}
                className="bg-accent px-4 py-3.5 font-display text-[17px] font-bold text-ink"
              >
                Call {business.phoneDisplay}
              </a>
              <a
                href={business.whatsapp}
                className="flex items-center justify-center gap-2 bg-wa/15 px-4 py-3 text-[16px] font-medium ring-1 ring-wa/40"
              >
                <span className="size-2 bg-wa" aria-hidden="true" />
                WhatsApp Now
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
      <MobileCTABar />
    </div>
  );
}
