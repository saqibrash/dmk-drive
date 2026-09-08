import { createFileRoute, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCTABar } from "@/components/site/MobileCTABar";
import { business } from "@/lib/business";

const pages: Record<string, { title: string; description: string; sections: { h: string; p: string }[] }> = {
  "privacy-policy": {
    title: "Privacy Policy",
    description:
      "How DMK Plumbing & Heating collects, uses and protects the personal information you share when enquiring about plumbing or heating work in Cardiff.",
    sections: [
      {
        h: "Information we collect",
        p: "When you call, message or send an enquiry form we collect your name, phone number, postcode, email address and details of the work you need. We use this only to respond to your enquiry and carry out the work.",
      },
      {
        h: "How we use it",
        p: "To arrange appointments, provide quotes, complete work, issue certificates and invoices, and keep records required by Gas Safe and by law.",
      },
      {
        h: "Sharing",
        p: "We do not sell your information. We share it only where necessary to complete your job, such as with parts suppliers or Gas Safe for certificate registration.",
      },
      {
        h: "Your rights",
        p: `You can ask what information we hold, correct it, or ask us to delete it. Email ${business.email} or call ${business.phoneDisplay}.`,
      },
    ],
  },
  terms: {
    title: "Terms",
    description:
      "Terms of service for plumbing, boiler and heating work carried out by DMK Plumbing & Heating in Cardiff and surrounding areas.",
    sections: [
      {
        h: "Quotes and pricing",
        p: "Quotes are based on the information given at the time of enquiry. If additional work is found once we are on site, we explain it and agree the cost with you before continuing.",
      },
      {
        h: "Appointments",
        p: "We give a time window and keep you updated. Emergency call-outs are prioritised, which can occasionally move a non-urgent booking.",
      },
      {
        h: "Payment",
        p: "Payment is due on completion unless agreed otherwise in writing. Invoices and certificates are sent by email.",
      },
      {
        h: "Workmanship",
        p: "All gas work is carried out by Gas Safe registered engineers. Manufacturer warranties apply to installed parts and appliances.",
      },
    ],
  },
  "complaints-policy": {
    title: "Complaints Policy",
    description:
      "How to raise a complaint with DMK Plumbing & Heating and how we handle and resolve it.",
    sections: [
      {
        h: "Tell us",
        p: `Call ${business.phoneDisplay} or email ${business.email} with your name, address and what went wrong. The sooner we know, the sooner we can put it right.`,
      },
      {
        h: "What happens next",
        p: "We acknowledge your complaint and aim to give you a response within five working days, including what we will do and when.",
      },
      {
        h: "Putting it right",
        p: "Where the fault is ours we return and correct the work at no extra cost. If you are still unhappy we will set out the next steps available to you.",
      },
    ],
  },
};

export const Route = createFileRoute("/legal/$slug")({
  loader: ({ params }) => {
    const page = pages[params.slug];
    if (!page) throw notFound();
    return { page };
  },
  head: ({ params, loaderData }) => {
    const p = loaderData?.page;
    if (!p) return {};
    const title = `${p.title} | ${business.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: p.description },
        { property: "og:title", content: title },
        { property: "og:description", content: p.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/legal/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/legal/${params.slug}` }],
    };
  },
  component: LegalPage,
});

function LegalPage() {
  const { page } = Route.useLoaderData();
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-display text-[32px] font-bold tracking-tight md:text-[44px]">{page.title}</h1>
        <p className="mt-3 text-[17px] text-muted">{page.description}</p>
        <div className="mt-8 grid gap-6">
          {page.sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-display text-[18px] font-bold tracking-tight">{s.h}</h2>
              <p className="mt-2 text-[16px] leading-relaxed text-muted">{s.p}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
      <MobileCTABar />
    </div>
  );
}
