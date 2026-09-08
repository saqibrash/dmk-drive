import { useState, type FormEvent } from "react";
import { business, services } from "@/lib/business";

export function QuoteForm({ dark = false }: { dark?: boolean }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Postcode: ${data.get("postcode")}`,
      `Service required: ${data.get("service")}`,
      `Message: ${data.get("message")}`,
    ].join("\n");
    setSent(true);
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
      "Website enquiry - DMK Plumbing",
    )}&body=${encodeURIComponent(body)}`;
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
        <input id="qf-name" name="name" required autoComplete="name" className={`${field} mt-1`} placeholder="Your name" />
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
          className={`${field} mt-1`}
          placeholder="What needs doing?"
        />
      </div>
      <button
        type="submit"
        className="mt-1 bg-accent px-4 py-3.5 font-display text-[17px] font-semibold tracking-[0.06em] text-ink uppercase transition-colors hover:bg-accent-deep"
      >
        Request a callback
      </button>
      <p aria-live="polite" className={`font-mono text-[14px] ${dark ? "text-paper/60" : "text-muted"}`}>
        {sent
          ? "Opening your email app with the details filled in."
          : `Need someone now? Call ${business.phoneDisplay}.`}
      </p>
    </form>
  );
}
