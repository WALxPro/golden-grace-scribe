export default function RidgeDivider() {
  return (
    <div className="ridge" aria-hidden>
      <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ridgeGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.55" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <path
          d="M0,120 L0,70 L80,55 L160,80 L240,40 L340,70 L440,25 L560,60 L680,35 L800,70 L920,45 L1040,75 L1160,40 L1280,68 L1360,50 L1440,72 L1440,140 L0,140 Z"
          fill="url(#ridgeGrad)"
        />
        <path
          d="M0,140 L0,105 L100,95 L200,110 L320,85 L440,105 L560,90 L680,110 L800,95 L920,115 L1040,95 L1160,110 L1280,90 L1440,108 L1440,140 Z"
          fill="currentColor"
          opacity="0.85"
        />
      </svg>
    </div>
  );
}
