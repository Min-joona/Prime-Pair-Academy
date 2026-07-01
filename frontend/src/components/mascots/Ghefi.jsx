// GHEFI — a friendly turtle mascot, the patient foundation.
// Helmet-like shell, oversized brown eyes, glowing yellow belly.
export default function Ghefi({ size = 220, className = '', float = false }) {
  return (
    <svg
      viewBox="0 0 240 240"
      width={size}
      height={size}
      className={`${className} ${float ? 'animate-float' : ''}`}
      role="img"
      aria-label="Ghefi the friendly turtle mascot"
    >
      <defs>
        <radialGradient id="g-belly" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#fff2b0" />
          <stop offset="60%" stopColor="#ffd54a" />
          <stop offset="100%" stopColor="#f4b731" />
        </radialGradient>
        <linearGradient id="g-shell" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3fbf82" />
          <stop offset="100%" stopColor="#1e7a4d" />
        </linearGradient>
        <radialGradient id="g-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffe680" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffe680" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* soft glow behind the glowing plastron */}
      <ellipse cx="120" cy="150" rx="70" ry="55" fill="url(#g-glow)" />

      {/* back feet */}
      <ellipse cx="70" cy="188" rx="18" ry="13" fill="#2fa36b" />
      <ellipse cx="170" cy="188" rx="18" ry="13" fill="#2fa36b" />

      {/* front flippers */}
      <ellipse cx="58" cy="150" rx="16" ry="22" fill="#37b377" transform="rotate(-25 58 150)" />
      <ellipse cx="182" cy="150" rx="16" ry="22" fill="#37b377" transform="rotate(25 182 150)" />

      {/* body / plastron (glowing yellow belly) */}
      <ellipse cx="120" cy="150" rx="62" ry="52" fill="url(#g-belly)" stroke="#e8a51e" strokeWidth="3" />
      {/* plastron seams */}
      <path d="M120 100 V200 M78 150 H162 M92 120 L148 180 M148 120 L92 180" stroke="#f0be3a" strokeWidth="2" fill="none" opacity="0.7" />

      {/* helmet-like shell dome on top */}
      <path d="M64 132 a56 52 0 0 1 112 0 z" fill="url(#g-shell)" stroke="#155e3c" strokeWidth="3" />
      {/* shell scute pattern */}
      <path d="M120 82 V132 M92 92 L108 132 M148 92 L132 132 M74 118 L100 132 M166 118 L140 132" stroke="#155e3c" strokeWidth="2.5" fill="none" opacity="0.55" />
      <ellipse cx="120" cy="110" rx="14" ry="12" fill="#2a8f5e" stroke="#155e3c" strokeWidth="2" />
      {/* helmet shine */}
      <ellipse cx="98" cy="100" rx="16" ry="9" fill="#ffffff" opacity="0.25" />

      {/* head */}
      <g>
        <ellipse cx="120" cy="66" rx="34" ry="31" fill="#37b377" stroke="#1e7a4d" strokeWidth="3" />
        {/* cheeky confident smile */}
        <path d="M104 78 q16 12 32 0" stroke="#155e3c" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        {/* oversized expressive brown eyes */}
        <circle cx="108" cy="60" r="12" fill="#fff" stroke="#1e7a4d" strokeWidth="2" />
        <circle cx="132" cy="60" r="12" fill="#fff" stroke="#1e7a4d" strokeWidth="2" />
        <circle cx="110" cy="62" r="7" fill="#5b3a1a" />
        <circle cx="134" cy="62" r="7" fill="#5b3a1a" />
        <circle cx="112" cy="59" r="2.4" fill="#fff" />
        <circle cx="136" cy="59" r="2.4" fill="#fff" />
        {/* little nostrils + rosy cheeks */}
        <circle cx="116" cy="72" r="1.4" fill="#155e3c" />
        <circle cx="124" cy="72" r="1.4" fill="#155e3c" />
        <circle cx="93" cy="70" r="5" fill="#ff9d9d" opacity="0.6" />
        <circle cx="147" cy="70" r="5" fill="#ff9d9d" opacity="0.6" />
      </g>

      {/* tiny tail */}
      <path d="M120 200 q6 12 0 20" stroke="#2fa36b" strokeWidth="7" fill="none" strokeLinecap="round" />
    </svg>
  );
}
