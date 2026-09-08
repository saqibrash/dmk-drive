import { business } from "@/lib/business";

export function MobileCTABar() {
  return (
    <div className="glass fixed inset-x-0 bottom-0 z-50 border-t border-line/70 px-3 py-2.5 md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={business.phoneHref}
          className="rounded-xl bg-accent py-2.5 text-center font-display text-[13px] font-bold text-paper ring-1 ring-black/5"
        >
          Call Now
        </a>
        <a
          href={business.whatsapp}
          className="flex items-center justify-center gap-1.5 rounded-xl bg-wa/15 py-2.5 text-center text-[13px] font-medium ring-1 ring-wa/40"
        >
          <span className="size-2 rounded-full bg-wa" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href="#quote"
          className="rounded-xl border border-line bg-paper/40 py-2.5 text-center text-[13px] font-medium"
        >
          Get Quote
        </a>
      </div>
    </div>
  );
}
