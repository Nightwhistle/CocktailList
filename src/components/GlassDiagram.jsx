import { useId } from "react";

/**
 * Jedna univerzalna čaša za sve koktele.
 * `BODY` je oblik čaše i ujedno okvir u koji se sipa tečnost.
 */
const BODY = "M24 26 H96 L89 170 H31 Z";
const TOP = 26;
const BOTTOM = 170;

export default function GlassDiagram({ ingredients, label }) {
  const rawId = useId();
  const clipId = `glass-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;

  const liquids = ingredients.filter(
    (ingredient) => ingredient.unit === "ml" && ingredient.amount > 0,
  );
  const total = liquids.reduce((sum, ingredient) => sum + ingredient.amount, 0);

  // Ostavi malo prostora do ivice čaše; do dna ide do samog ruba.
  const fillTop = TOP + (BOTTOM - TOP) * 0.1;
  const fillBottom = BOTTOM;
  const fillHeight = fillBottom - fillTop;

  // U konfiguraciji su žestine prve, mešeri poslednji => slažemo odozdo nagore.
  let cursor = fillBottom;
  const layers = liquids.map((ingredient, index) => {
    const share = total > 0 ? ingredient.amount / total : 0;
    const height = Math.max(2, share * fillHeight);
    const y = cursor - height;
    cursor = y;

    return { ...ingredient, key: `${ingredient.name}-${index}`, y, height };
  });

  return (
    <svg viewBox="0 0 120 190" role="img" aria-label={label}>
      <defs>
        <clipPath id={clipId}>
          <path d={BODY} />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        <rect x="0" y="0" width="120" height="190" fill="#FFFDF6" />
        {layers.map((layer) => (
          <rect
            key={layer.key}
            x="0"
            y={layer.y}
            width="120"
            height={layer.height}
            fill={layer.color}
            stroke="#111111"
            strokeWidth="1.2"
          />
        ))}
      </g>

      <path
        d={BODY}
        fill="none"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
