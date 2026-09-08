import { business } from "@/lib/business";

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-ink bg-paper md:hidden">
      <a
        href={business.phoneHref}
        className="flex flex-col items-center justify-center gap-0.5 bg-accent py-2.5 font-mono text-[13px] tracking-[0.12em] text-ink uppercase"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
          <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1z" />
        </svg>
        Call
      </a>
      <a
        href={business.whatsapp}
        className="flex flex-col items-center justify-center gap-0.5 border-x border-ink py-2.5 font-mono text-[13px] tracking-[0.12em] uppercase"
      >
        <svg viewBox="0 0 24 24" className="size-5 text-wa" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2m0 2a8 8 0 1 1-4.1 14.8l-.4-.2-2.6.7.7-2.5-.2-.4A8 8 0 0 1 12 4m-3 4c-.3 0-.6.1-.8.4-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.5.7 3 .6.5-.1 1.5-.6 1.7-1.3.2-.6.2-1.2.1-1.3l-.7-.4-1.5-.7c-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.3.1-.4l.4-.5.3-.5v-.4L9.6 8.4C9.4 8 9.2 8 9 8" />
        </svg>
        WhatsApp
      </a>
      <a
        href="#quote"
        className="flex flex-col items-center justify-center gap-0.5 py-2.5 font-mono text-[13px] tracking-[0.12em] uppercase"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
          <path d="M5 3h9l5 5v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 2v4h4zM7 12h10v2H7zm0 4h7v2H7z" />
        </svg>
        Quote
      </a>
    </div>
  );
}
