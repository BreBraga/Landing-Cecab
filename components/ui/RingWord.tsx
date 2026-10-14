const ORBITA = "M10,50 a215,40 0 1,0 430,0 a215,40 0 1,0 -430,0";

function Anel({ frente, id }: { frente: boolean; id: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 450 100"
      className={`pointer-events-none absolute left-[-10%] top-[55%] w-[120%] -translate-y-1/2 -rotate-6 overflow-visible ${
        frente ? "z-[1]" : "-z-10"
      }`}
    >
      {frente && (
        <defs>
          <clipPath id={id}>
            <rect x="-20" y="50" width="490" height="80" />
          </clipPath>
        </defs>
      )}
      <g clipPath={frente ? `url(#${id})` : undefined}>
        <ellipse
          cx="225"
          cy="50"
          rx="215"
          ry="40"
          fill="none"
          stroke="#FF6413"
          strokeWidth="5"
          vectorEffect="non-scaling-stroke"
        />
        <circle r="11" fill="#FF6413" className="orbit-dot">
          <animateMotion dur="4.5s" repeatCount="indefinite" path={ORBITA} />
        </circle>
      </g>
    </svg>
  );
}

export function RingWord({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <span className="relative isolate inline-block">
      <Anel frente={false} id={id} />
      {children}
      <Anel frente id={id} />
    </span>
  );
}
