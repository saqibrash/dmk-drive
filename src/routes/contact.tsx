import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCTABar } from "@/components/site/MobileCTABar";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/site/Reveal";
import { areas, business } from "@/lib/business";

const title = "Contact DMK Plumbing & Heating Cardiff | 07868 470 791";
const description =
  "Contact DMK Plumbing & Heating in Cardiff. Call or WhatsApp 07868 470 791, or send a short enquiry for emergency plumbing, boiler and heating work.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <section className="border-b border-line bg-ink text-paper">
          <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
            <p className="font-mono text-[15px] tracking-[0.22em] text-accent uppercase">Get in touch</p>
            <h1 className="mt-3 max-w-[16ch] font-display text-[36px] leading-[1.05] font-semibold md:text-[52px]">
              Contact DMK Plumbing &amp; Heating
            </h1>
            <div className="mt-4 h-1 w-20 bg-accent" aria-hidden="true" />
            <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-paper/70">
              The fastest way to reach us is a phone call, day or night. For anything that is not urgent, WhatsApp or
              the enquiry form works just as well.
            </p>
          </div>
        </section>

        <section id="quote" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="content-start">
              <a
                href={business.phoneHref}
                className="block bg-accent px-6 py-6 text-center font-display text-[24px] font-semibold text-ink md:text-[28px]"
              >
                {business.phoneDisplay}
                <span className="mt-1 block font-mono text-[13px] tracking-[0.2em] uppercase">
                  24 hour emergency call out
                </span>
              </a>
              <a
                href={business.whatsapp}
                className="mt-2.5 block bg-ink px-6 py-4 text-center font-display text-[17px] font-semibold tracking-[0.06em] text-paper uppercase"
              >
                WhatsApp us
              </a>
              <a
                href={`mailto:${business.email}`}
                className="mt-2.5 block border border-line px-6 py-4 text-center text-[16px] font-medium hover:bg-paper-2"
              >
                {business.email}
              </a>

              <dl className="mt-8 divide-y divide-line border-y border-line">
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="font-mono text-[14px] tracking-[0.16em] text-muted uppercase">Emergencies</dt>
                  <dd className="text-[16px] font-medium">24 hours, 7 days</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="font-mono text-[14px] tracking-[0.16em] text-muted uppercase">Booked work</dt>
                  <dd className="text-[16px] font-medium">Mon–Sat</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="font-mono text-[14px] tracking-[0.16em] text-muted uppercase">Based in</dt>
                  <dd className="text-[16px] font-medium">Cardiff</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="font-mono text-[14px] tracking-[0.16em] text-muted uppercase">Gas Safe</dt>
                  <dd className="text-[16px] font-medium">Registered engineers</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={80} className="border border-line bg-paper-2 p-6 md:p-8">
              <h2 className="font-display text-[22px] font-semibold md:text-[26px]">Send an enquiry</h2>
              <p className="mt-2 text-[16px] text-muted">
                Tell us your postcode and what needs doing. We come back to you with a price and the next available
                slot.
              </p>
              <div className="mt-6">
                <QuoteForm />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-line bg-paper-2">
          <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
            <p className="font-mono text-[15px] tracking-[0.22em] text-muted uppercase">Where we work</p>
            <h2 className="mt-3 font-display text-[24px] font-semibold md:text-[30px]">
              Cardiff and the surrounding areas
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">
              {areas.join(" · ")}
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTABar />
    </div>
  );
}
