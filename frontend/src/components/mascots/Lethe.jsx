// LETHE — the Eritrean Blind Snake (Letheobia erythraea).
// Strategic speed: sage-green cylindrical body, cream underbelly,
// playful forked tongue, glowing neon-green tail tip (a friendly stylus).
export default function Lethe({ size = 220, className = '', float = false }) {
  return (
    <svg
      viewBox="0 0 240 240"
      width={size}
      height={size}
      className={`${className} ${float ? 'animate-float' : ''}`}
      role="img"
      aria-label="Lethe the blind snake"
    >
      <defs>
        <linearGradient id="l-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a8bf94" />
          <stop offset="100%" stopColor="#7c9a6a" />
        </linearGradient>
        <radialGradient id="l-neon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#39ff88" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#39ff88" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* neon tail glow */}
      <circle cx="52" cy="176" r="26" fill="url(#l-neon)" />

      {/* coiled cylindrical body (drawn as a thick rounded path) */}
      <path
        d="M52 176
           C 40 150, 70 132, 100 140
           C 138 150, 150 120, 132 100
           C 116 82, 138 60, 168 66"
        fill="none"
        stroke="#5f7a4f"
        strokeWidth="34"
        strokeLinecap="round"
      />
      <path
        d="M52 176
           C 40 150, 70 132, 100 140
           C 138 150, 150 120, 132 100
           C 116 82, 138 60, 168 66"
        fill="none"
        stroke="url(#l-body)"
        strokeWidth="28"
        strokeLinecap="round"
      />
      {/* cream underbelly stripe */}
      <path
        d="M52 176
           C 40 150, 70 132, 100 140
           C 138 150, 150 120, 132 100
           C 116 82, 138 60, 168 66"
        fill="none"
        stroke="#f3ecd8"
        strokeWidth="9"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* subtle scale ticks */}
      <g stroke="#5f7a4f" strokeWidth="2" opacity="0.4">
        <line x1="92" y1="128" x2="98" y2="152" />
        <line x1="118" y1="132" x2="126" y2="154" />
        <line x1="132" y1="86" x2="146" y2="96" />
      </g>

      {/* glowing neon tail tip (stylus) */}
      <circle cx="52" cy="176" r="11" fill="#39ff88" stroke="#1fae5c" strokeWidth="2" />
      <circle cx="49" cy="173" r="3" fill="#eafff2" />

      {/* head */}
      <g>
        <ellipse cx="176" cy="64" rx="30" ry="24" fill="url(#l-body)" stroke="#5f7a4f" strokeWidth="3" transform="rotate(12 176 64)" />
        {/* gentle friendly smile */}
        <path d="M182 74 q10 6 18 1" stroke="#4c6340" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* tiny vestigial eye spots (subtle dots) */}
        <circle cx="178" cy="56" r="3.4" fill="#2b3a24" />
        <circle cx="192" cy="60" r="3" fill="#2b3a24" />
        <circle cx="177" cy="55" r="1" fill="#cfe0bf" />
        {/* rosy cheek */}
        <circle cx="170" cy="70" r="4.5" fill="#ff9d9d" opacity="0.5" />
        {/* playful forked tongue flicking to the right */}
        <path d="M204 68 q14 -2 20 -8 M204 68 q14 4 20 10 M204 68 h14"
          stroke="#ff5a7a" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}
