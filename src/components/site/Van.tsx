import logo from "@/assets/dmk-logo.png";

export function Van() {
  return (
    <div className="relative select-none">
      <svg
        viewBox="0 0 880 330"
        className="h-auto w-full"
        role="img"
        aria-label="DMK Plumbing & Heating branded work van with engineer and tools: emergency plumbing, boiler repairs, heating engineers, Gas Safe registered, Cardiff and surrounding areas, 07868 470 791"
      >
        {/* ground shadows */}
        <ellipse cx="370" cy="300" rx="300" ry="13" fill="#000" opacity="0.16" />
        <ellipse className="van-engineer" cx="716" cy="298" rx="34" ry="7" fill="#000" opacity="0.14" />
        <ellipse className="van-tools" cx="800" cy="298" rx="48" ry="7" fill="#000" opacity="0.12" />

        {/* rear doorway interior (revealed once the door opens) */}
        <g className="van-doorway">
          <rect x="614" y="86" width="52" height="152" fill="#0a0a0a" />
          <rect x="622" y="120" width="36" height="10" fill="#1e1e1e" />
          <rect x="622" y="150" width="36" height="10" fill="#1e1e1e" />
        </g>

        {/* engineer stepping out */}
        <g className="van-engineer">
          {/* legs */}
          <path d="M700 232 L700 288 L710 288 L714 244 L722 288 L732 288 L730 232 Z" fill="#20242a" />
          {/* boots */}
          <rect x="696" y="286" width="18" height="8" rx="2" fill="#0d0d0d" />
          <rect x="720" y="286" width="18" height="8" rx="2" fill="#0d0d0d" />
          {/* torso */}
          <path d="M700 176 Q715 170 730 176 L734 234 L696 234 Z" fill="#17191d" />
          {/* hi-vis DMK stripe */}
          <rect x="697" y="192" width="36" height="7" fill="var(--color-accent)" opacity="0.9" />
          <text
            x="715"
            y="212"
            fontSize="9"
            textAnchor="middle"
            fill="var(--color-accent)"
            style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}
          >
            DMK
          </text>
          {/* arms */}
          <path d="M700 180 L690 214 L696 234" stroke="#17191d" strokeWidth="9" fill="none" strokeLinecap="round" />
          <path d="M730 180 L742 212 L740 232" stroke="#17191d" strokeWidth="9" fill="none" strokeLinecap="round" />
          {/* head */}
          <circle cx="715" cy="163" r="13" fill="#c99a76" />
          <path d="M702 160 Q715 148 728 160 L728 156 Q715 144 702 156 Z" fill="#1b1b1b" />
        </g>

        {/* tools taken from the van */}
        <g className="van-tools">
          {/* toolbox */}
          <rect x="762" y="258" width="62" height="36" rx="3" fill="#1a1a1a" />
          <rect x="762" y="258" width="62" height="7" fill="var(--color-accent)" />
          <path d="M782 258 q11 -14 22 0" stroke="#3a3a3a" strokeWidth="4" fill="none" />
          {/* tool bag */}
          <path d="M828 268 q16 -6 32 0 l-4 26 h-24 Z" fill="#20242a" />
          <path d="M836 268 q8 -10 16 0" stroke="var(--color-accent)" strokeWidth="3" fill="none" />
          {/* pipe wrench leaning */}
          <g transform="rotate(-16 752 292)">
            <rect x="746" y="240" width="7" height="54" rx="2" fill="#8d949c" />
            <path d="M742 236 h16 v10 h-6 v8 h-10 Z" fill="#b3bac2" />
          </g>
          {/* pipe offcuts */}
          <rect x="736" y="288" width="26" height="6" rx="3" fill="#a8b0b8" />
          <rect x="742" y="280" width="20" height="6" rx="3" fill="#8d949c" />
        </g>

        {/* rear door, hinged at the rear edge */}
        <g className="van-door">
          <rect x="620" y="86" width="46" height="152" fill="#141414" />
          <rect x="620" y="222" width="46" height="16" fill="var(--color-accent)" />
          <rect x="626" y="96" width="34" height="30" rx="2" fill="#2b2f33" />
          <circle cx="628" cy="170" r="3" fill="#7d7d7d" />
        </g>

        <g className="van-drive van-bob will-change-transform">
          {/* headlight beam */}
          <polygon className="lamp-on" points="52,196 4,178 4,236 52,222" fill="var(--color-accent)" opacity="0.35" />

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
            fontSize="14"
            fill="#ffffff"
            style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.1em" }}
          >
            EMERGENCY PLUMBING · BOILER REPAIRS
          </text>
          <text
            x="330"
            y="202"
            fontSize="14"
            fill="var(--color-accent)"
            style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.1em" }}
          >
            GAS SAFE REGISTERED · HEATING ENGINEERS
          </text>

          {/* phone block */}
          <rect x="510" y="94" width="160" height="40" rx="2" fill="var(--color-accent)" />
          <text
            x="590"
            y="121"
            fontSize="22"
            fill="#101010"
            textAnchor="middle"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            07868 470 791
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
        </g>
      </svg>

      <div className="road-move mt-1 h-0.5 w-full opacity-30" aria-hidden="true" />

      <p className="pin-drop mt-3 inline-flex items-center gap-2 border border-ink bg-paper px-3 py-1.5">
        <span className="size-2 bg-accent" aria-hidden="true" />
        <span className="font-mono text-[13px] tracking-[0.14em] uppercase">Cardiff &amp; surrounding areas</span>
      </p>
    </div>
  );
}
