import { useState, type FormEvent } from "react";
import { business, services } from "@/lib/business";

const FORMSPREE_URL = "https://formspree.io/f/mdeadqkn";

type Status = "idle" | "sending" | "sent" | "error";

export function QuoteForm({ dark = false }: { dark?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "Website enquiry - DMK Plumbing");
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const field = dark
    ? "w-full border border-paper/25 bg-transparent px-3 py-3 text-[15px] text-paper placeholder:text-paper/50"
    : "w-full border border-line bg-paper px-3 py-3 text-[15px] text-ink placeholder:text-muted/70";
  const label = `font-mono text-[13px] tracking-[0.14em] uppercase ${dark ? "text-paper/70" : "text-muted"}`;

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div>
        <label htmlFor="qf-name" className={label}>
          Name
        </label>
        <input id="qf-name" name="name" required maxLength={100} autoComplete="name" className={`${field} mt-1`} placeholder="Your name" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-phone" className={label}>
            Phone
          </label>
          <input
            id="qf-phone"
            name="phone"
            type="tel"
            required
            maxLength={30}
            autoComplete="tel"
            className={`${field} mt-1`}
            placeholder="07…"
          />
        </div>
        <div>
          <label htmlFor="qf-postcode" className={label}>
            Postcode
          </label>
          <input
            id="qf-postcode"
            name="postcode"
            required
            maxLength={10}
            autoComplete="postal-code"
            className={`${field} mt-1`}
            placeholder="CF…"
          />
        </div>
      </div>
      <div>
        <label htmlFor="qf-service" className={label}>
          Service required
        </label>
        <select id="qf-service" name="service" required defaultValue="" className={`${field} mt-1`}>
          <option value="" disabled>
            Choose a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title} className="text-ink">
              {s.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="qf-message" className={label}>
          Message
        </label>
        <textarea
          id="qf-message"
          name="message"
          rows={3}
          maxLength={1000}
          className={`${field} mt-1`}
          placeholder="What needs doing?"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 bg-accent px-4 py-3.5 font-display text-[17px] font-semibold tracking-[0.06em] text-ink uppercase transition-colors hover:bg-accent-deep disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request a callback"}
      </button>
      <p aria-live="polite" className={`font-mono text-[14px] ${dark ? "text-paper/60" : "text-muted"}`}>
        {status === "sent"
          ? "Thanks — your enquiry has been sent. We will be in touch shortly."
          : status === "error"
            ? `Sorry, that did not send. Please call ${business.phoneDisplay}.`
            : `Need someone now? Call ${business.phoneDisplay}.`}
      </p>
    </form>
  );
}
