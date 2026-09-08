import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCTABar } from "@/components/site/MobileCTABar";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/site/Reveal";
import { business } from "@/lib/business";

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
        <section className="relative border-b border-line">
          <div className="mx-auto max-w-6xl px-4 pt-10 pb-8">
            <p className="font-mono text-[14px] tracking-[0.16em] text-muted uppercase">Get in touch</p>
            <h1 className="mt-3 max-w-[18ch] font-display text-[34px] leading-[1.03] font-bold tracking-tight md:text-[52px]">
              Contact DMK Plumbing &amp; Heating
            </h1>
            <p className="mt-4 max-w-[50ch] text-[17px] text-muted">
              Fastest way to reach us is a phone call. For anything non-urgent, WhatsApp or the form below is fine.
            </p>
          </div>
        </section>

        <section id="quote" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal className="grid content-start gap-2">
              <a
                href={business.phoneHref}
                className="bg-accent px-4 py-4 text-center font-display text-[18px] font-bold text-ink"
              >
                Call {business.phoneDisplay}
              </a>
              <a
                href={business.whatsapp}
                className="flex items-center justify-center gap-2 bg-wa/15 px-4 py-3.5 text-[16px] font-medium ring-1 ring-wa/40"
              >
                <span className="size-2 bg-wa" aria-hidden="true" />
                WhatsApp Us
              </a>
              <a
                href={`mailto:${business.email}`}
                className="border border-line bg-panel px-4 py-3.5 text-center text-[16px] font-medium"
              >
                {business.email}
              </a>
              <p className="mt-2 font-mono text-[14px] text-muted">
                Serving Cardiff &amp; surrounding areas · Gas Safe registered
              </p>
            </Reveal>
            <Reveal delay={80} className="border border-line bg-paper-2 p-5">
              <h2 className="font-display text-[18px] font-bold tracking-tight">Send an enquiry</h2>
              <div className="mt-4">
                <QuoteForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTABar />
    </div>
  );
}
