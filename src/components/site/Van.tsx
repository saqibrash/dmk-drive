import logo from "@/assets/dmk-logo.png";

export function Van() {
  return (
    <div className="relative">
      <div className="absolute right-0 bottom-[9%] left-0 h-px bg-line" />
      <div className="van-drive w-full">
        <svg
          viewBox="0 0 640 300"
          className="h-auto w-full"
          role="img"
          aria-label="DMK Plumbing & Heating branded work van: emergency plumbing, boiler repairs, heating engineers, Gas Safe registered, Cardiff and surrounding areas, 07868 470 791"
        >
          <polygon
            className="beam-pulse"
            points="60,150 150,120 150,180 60,170"
            fill="color-mix(in srgb, var(--color-accent) 20%, transparent)"
          />
          <ellipse cx="320" cy="252" rx="268" ry="12" fill="#000" opacity="0.5" />
          <path
            d="M40 150 Q40 120 70 118 L150 118 L188 60 Q198 44 222 44 L560 44 Q584 44 584 70 L584 200 Q584 214 570 214 L54 214 Q40 214 40 200 Z"
            fill="color-mix(in srgb, var(--color-ink) 7%, transparent)"
            stroke="color-mix(in srgb, var(--color-brand) 55%, transparent)"
            strokeWidth="2.5"
          />
          <rect
            x="250"
            y="66"
            width="304"
            height="126"
            rx="8"
            fill="color-mix(in srgb, var(--color-brand) 12%, transparent)"
            stroke="color-mix(in srgb, var(--color-ink) 30%, transparent)"
            strokeWidth="1.4"
          />
          <path
            d="M196 66 Q205 54 224 54 L262 54 L262 118 L188 118 L188 108 Z"
            fill="color-mix(in srgb, var(--color-ink) 20%, transparent)"
            stroke="color-mix(in srgb, var(--color-ink) 30%, transparent)"
            strokeWidth="1.4"
          />
          <line
            x1="226"
            y1="54"
            x2="226"
            y2="118"
            stroke="color-mix(in srgb, var(--color-ink) 30%, transparent)"
            strokeWidth="1.4"
          />

          <image href={logo} x="262" y="72" width="186" height="66" preserveAspectRatio="xMinYMid meet" />

          <text
            x="262"
            y="158"
            fontSize="13"
            fill="var(--color-brand)"
            style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.06em" }}
          >
            EMERGENCY PLUMBING · BOILER REPAIRS
          </text>
          <text
            x="262"
            y="176"
            fontSize="13"
            fill="var(--color-brand)"
            style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.06em" }}
          >
            HEATING ENGINEERS · GAS SAFE REGISTERED
          </text>
          <text
            x="464"
            y="112"
            fontSize="12"
            fill="var(--color-muted)"
            style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.06em" }}
          >
            CARDIFF &amp; SURROUNDING
          </text>
          <rect x="40" y="186" width="544" height="10" fill="var(--color-accent)" opacity="0.9" />
          <text
            x="262"
            y="210"
            fontSize="21"
            fill="var(--color-ink)"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            07868 470 791
          </text>

          <g className="wheel-spin">
            <circle
              cx="150"
              cy="214"
              r="34"
              fill="var(--color-paper)"
              stroke="color-mix(in srgb, var(--color-ink) 55%, transparent)"
              strokeWidth="3"
            />
            <circle cx="150" cy="214" r="12" fill="var(--color-panel)" />
            <line x1="150" y1="184" x2="150" y2="244" stroke="color-mix(in srgb, var(--color-ink) 45%, transparent)" strokeWidth="2" />
            <line x1="120" y1="214" x2="180" y2="214" stroke="color-mix(in srgb, var(--color-ink) 45%, transparent)" strokeWidth="2" />
          </g>
          <g className="wheel-spin">
            <circle
              cx="500"
              cy="214"
              r="34"
              fill="var(--color-paper)"
              stroke="color-mix(in srgb, var(--color-ink) 55%, transparent)"
              strokeWidth="3"
            />
            <circle cx="500" cy="214" r="12" fill="var(--color-panel)" />
            <line x1="500" y1="184" x2="500" y2="244" stroke="color-mix(in srgb, var(--color-ink) 45%, transparent)" strokeWidth="2" />
            <line x1="470" y1="214" x2="530" y2="214" stroke="color-mix(in srgb, var(--color-ink) 45%, transparent)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}
