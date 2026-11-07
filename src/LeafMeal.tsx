// A banana-leaf meal, laid out the traditional way: sides along the top edge,
// rice in the middle, and the sweet at the bottom-left.
export default function LeafMeal() {
  return (
    <svg className="leaf" viewBox="0 0 640 360" role="img" aria-label="A South Indian meal served on a banana leaf">
      <defs>
        <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3E8A4A" />
          <stop offset="1" stopColor="#24603A" />
        </linearGradient>
        <radialGradient id="rice" cx="0.45" cy="0.4" r="0.6">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E7E6DC" />
        </radialGradient>
        <clipPath id="leafClip"><path d="M20 182 C 60 70, 240 30, 420 40 C 540 46, 610 80, 628 120 L 628 250 C 610 288, 540 318, 420 324 C 240 334, 60 294, 20 182 Z" /></clipPath>
      </defs>

      {/* leaf */}
      <path
        className="leaf-body"
        d="M20 182 C 60 70, 240 30, 420 40 C 540 46, 610 80, 628 120 L 628 250 C 610 288, 540 318, 420 324 C 240 334, 60 294, 20 182 Z"
        fill="url(#leafGrad)"
      />
      <path d="M24 182 C 200 176, 420 178, 628 186" stroke="#1B4A2B" strokeWidth="3" fill="none" opacity="0.6" />
      <g clipPath="url(#leafClip)">
      {Array.from({ length: 13 }).map((_, i) => {
        const x = 80 + i * 42;
        return (
          <g key={i} stroke="#1B4A2B" strokeWidth="1" opacity="0.28" fill="none">
            <path d={`M${x} 180 C ${x + 18} 140, ${x + 30} 90, ${x + 40} 52`} />
            <path d={`M${x} 184 C ${x + 18} 224, ${x + 30} 274, ${x + 40} 312`} />
          </g>
        );
      })}
      </g>

      {/* top row of sides */}
      <g className="dish d1"><ellipse cx="150" cy="104" rx="26" ry="14" fill="#C9D86A" /><ellipse cx="146" cy="100" rx="9" ry="4" fill="#E9F0A8" /></g>
      <g className="dish d2"><ellipse cx="220" cy="92" rx="24" ry="13" fill="#E3A64A" /><circle cx="214" cy="90" r="4" fill="#F6D58A" /><circle cx="226" cy="95" r="3" fill="#2F6B35" /></g>
      <g className="dish d3"><path d="M272 78 q24 -10 48 2 q-6 22 -24 22 q-18 -2 -24 -24 z" fill="#B3261E" /></g>
      <g className="dish d4"><ellipse cx="370" cy="84" rx="28" ry="14" fill="#F2E3B8" /><circle cx="362" cy="82" r="3" fill="#2F6B35" /><circle cx="378" cy="86" r="3" fill="#E8A317" /></g>
      <g className="dish d5"><circle cx="438" cy="92" r="22" fill="#F4EBC9" stroke="#D9C893" strokeWidth="2" /></g>

      {/* rice, sambar on top */}
      <g className="dish d6">
        <ellipse cx="300" cy="206" rx="96" ry="54" fill="url(#rice)" />
        <path d="M240 200 q60 -40 120 0 q-20 26 -60 26 q-40 0 -60 -26 z" fill="#D9862B" opacity="0.92" />
        <circle cx="282" cy="198" r="4" fill="#2F6B35" />
        <circle cx="312" cy="206" r="3" fill="#B3261E" />
      </g>

      {/* vada and payasam */}
      <g className="dish d7"><circle cx="452" cy="210" r="30" fill="#B8742C" /><circle cx="452" cy="210" r="9" fill="#24603A" /></g>
      <g className="dish d8"><ellipse cx="140" cy="236" rx="30" ry="18" fill="#F1D9A6" /><circle cx="132" cy="232" r="3" fill="#8A5A2B" /><circle cx="146" cy="238" r="3" fill="#8A5A2B" /></g>

      {/* curd cup */}
      <g className="dish d9"><path d="M520 222 h50 l-6 40 h-38 z" fill="#F7F9F4" stroke="#C9CBC2" strokeWidth="2" /></g>
    </svg>
  );
}
