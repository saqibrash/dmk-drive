import logo from "@/assets/dmk-logo.png";

export function Van() {
  return (
    <div className="relative select-none">
      <div className="van-drive van-bob w-full will-change-transform">
        <svg
          viewBox="0 0 720 330"
          className="h-auto w-full"
          role="img"
          aria-label="DMK Plumbing & Heating branded work van: emergency plumbing, boiler repairs, heating engineers, Gas Safe registered, Cardiff and surrounding areas, 07868 470 791"
        >
          {/* headlight beam */}
          <polygon className="lamp-on" points="52,196 4,178 4,236 52,222" fill="var(--color-accent)" opacity="0.35" />

          {/* ground shadow */}
          <ellipse cx="370" cy="300" rx="300" ry="13" fill="#000" opacity="0.16" />

          {/* body */}
          <path
            d="M52 196 Q52 158 92 154 L176 152 L214 74 Q226 54 256 54 L640 54 Q666 54 666 84 L666 246 Q666 262 650 262 L68 262 Q52 262 52 246 Z"
            fill="#141414"
          />
          {/* roof highlight */}
          <path d="M256 60 L640 60 Q660 60 660 86 L660 96 L216 96 Z" fill="#1f1f1f" />

          {/* windscreen + door glass */}
          <path d="M222 96 Q232 68 258 68 L300 68 L300 152 L182 152 L182 140 Z" fill="#2b2f33" />
          <line x1="262" y1="68" x2="262" y2="152" stroke="#0d0d0d" strokeWidth="4" />

          {/* yellow signature band */}
          <rect x="52" y="228" width="614" height="16" fill="var(--color-accent)" />
          <rect x="52" y="222" width="614" height="4" fill="#ffffff" opacity="0.25" />

          {/* livery panel */}
          <rect x="318" y="86" width="330" height="120" rx="4" fill="#191919" />
          <image href={logo} x="330" y="94" width="196" height="70" preserveAspectRatio="xMinYMid meet" />

          <text
            x="330"
            y="184"
            fontSize="15"
            fill="#ffffff"
            style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.1em" }}
          >
            EMERGENCY PLUMBING · BOILER REPAIRS · HEATING
          </text>
          <text
            x="330"
            y="202"
            fontSize="15"
            fill="var(--color-accent)"
            style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.1em" }}
          >
            GAS SAFE REGISTERED · CARDIFF &amp; SURROUNDING AREAS
          </text>

          {/* phone block */}
          <rect x="540" y="94" width="112" height="46" fill="var(--color-accent)" />
          <text
            x="552"
            y="126"
            fontSize="20"
            fill="#101010"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
          >
            07868
          </text>
          <text
            x="540"
            y="160"
            fontSize="20"
            fill="#ffffff"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
          >
            470 791
          </text>

          {/* wheel arches */}
          <circle cx="196" cy="258" r="46" fill="#141414" />
          <circle cx="556" cy="258" r="46" fill="#141414" />

          {/* wheels */}
          <g className="wheel-spin">
            <circle cx="196" cy="258" r="38" fill="#0b0b0b" stroke="#2a2a2a" strokeWidth="3" />
            <circle cx="196" cy="258" r="16" fill="#c9c9c9" />
            <line x1="196" y1="228" x2="196" y2="288" stroke="#7d7d7d" strokeWidth="3" />
            <line x1="166" y1="258" x2="226" y2="258" stroke="#7d7d7d" strokeWidth="3" />
          </g>
          <g className="wheel-spin">
            <circle cx="556" cy="258" r="38" fill="#0b0b0b" stroke="#2a2a2a" strokeWidth="3" />
            <circle cx="556" cy="258" r="16" fill="#c9c9c9" />
            <line x1="556" y1="228" x2="556" y2="288" stroke="#7d7d7d" strokeWidth="3" />
            <line x1="526" y1="258" x2="586" y2="258" stroke="#7d7d7d" strokeWidth="3" />
          </g>

          {/* headlight */}
          <rect className="lamp-on" x="52" y="196" width="16" height="22" rx="3" fill="var(--color-accent)" />
        </svg>
      </div>

      <div className="road-move mt-1 h-0.5 w-full" aria-hidden="true" />

      <p className="pin-drop mt-3 inline-flex items-center gap-2 border border-ink bg-paper px-3 py-1.5">
        <span className="size-2 bg-accent" aria-hidden="true" />
        <span className="font-mono text-[13px] tracking-[0.14em] uppercase">Cardiff &amp; surrounding areas</span>
      </p>
    </div>
  );
}
