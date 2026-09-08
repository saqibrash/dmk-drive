import { useState, type FormEvent } from "react";
import { business, services } from "@/lib/business";

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Postcode: ${data.get("postcode")}`,
      `Service needed: ${data.get("service")}`,
      `Message: ${data.get("message")}`,
    ].join("\n");
    setSent(true);
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
      "Website enquiry - DMK Plumbing",
    )}&body=${encodeURIComponent(body)}`;
  }

  const field =
    "w-full rounded-xl border border-line bg-paper/60 px-3 py-3 text-[14px] text-ink placeholder:text-muted/70";

  return (
    <form onSubmit={onSubmit} className="grid gap-2.5">
      <div>
        <label htmlFor="qf-name" className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
          Name
        </label>
        <input id="qf-name" name="name" required autoComplete="name" className={`${field} mt-1`} placeholder="Your name" />
      </div>
      <div className="grid gap-2.5 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-phone" className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
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
          <label htmlFor="qf-postcode" className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
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
        <label htmlFor="qf-service" className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
          Service needed
        </label>
        <select id="qf-service" name="service" required defaultValue="" className={`${field} mt-1`}>
          <option value="" disabled>
            Choose a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="qf-message" className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
          Message
        </label>
        <textarea id="qf-message" name="message" rows={3} className={`${field} mt-1`} placeholder="What's the problem?" />
      </div>
      <button
        type="submit"
        className="mt-1 rounded-xl bg-accent px-4 py-3.5 font-display text-[15px] font-bold text-paper ring-1 ring-black/5"
      >
        Send Enquiry
      </button>
      <p aria-live="polite" className="font-mono text-[10px] text-muted">
        {sent
          ? "Opening your email app with the details filled in."
          : `Urgent? Call ${business.phoneDisplay} for a faster answer.`}
      </p>
    </form>
  );
}
