// Elementos visuais tirados da plotagem dos carros da Silva Pneus:
// a marca de pneu (banda de rodagem), o selo com seta circular e ícones de traço grosso.

import type { IconeServico } from "@/lib/dados";

// Trilha de pneu na diagonal, como a faixa preta das laterais dos carros.
export function TrilhaPneu({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 900" aria-hidden="true" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="banda-rodagem" width="140" height="64" patternUnits="userSpaceOnUse">
          <path d="M8 6 L62 22 L62 44 L8 28 Z M78 22 L132 6 L132 28 L78 44 Z" fill="currentColor" />
          <path d="M66 10 L74 10 L74 54 L66 54 Z" fill="currentColor" opacity=".55" />
        </pattern>
      </defs>
      <rect width="140" height="900" fill="url(#banda-rodagem)" />
    </svg>
  );
}

// Selo de socorro com a seta circular, no estilo do "24h socorro" dos carros.
export function SeloSocorro({ className = "", horario = "22h" }: { className?: string; horario?: string }) {
  return (
    <svg viewBox="0 0 220 220" role="img" aria-label={`Socorro todos os dias até ${horario}`} className={className}>
      <circle cx="110" cy="110" r="104" fill="var(--placa)" stroke="var(--tinta)" strokeWidth="6" />
      {/* seta circular passando por cima, aberta embaixo */}
      <path d="M70 152.5 A62 62 0 1 1 150 152.5" fill="none" stroke="var(--tinta)" strokeWidth="12" strokeLinecap="round" />
      <path d="M140.8 160.2 L161.6 157.1 L147.6 140.1 Z" fill="var(--tinta)" />
      <text x="110" y="82" textAnchor="middle" fontWeight="700" fontSize="20" fill="var(--tinta)" fontFamily="inherit">
        até
      </text>
      <text x="110" y="128" textAnchor="middle" fontWeight="900" fontSize="50" fill="var(--tinta)" fontFamily="inherit">
        {horario}
      </text>
      <rect x="38" y="164" width="144" height="34" rx="4" fill="var(--vermelho)" />
      <text x="110" y="189" textAnchor="middle" fontWeight="900" fontSize="22" letterSpacing="2" fill="#fff" fontFamily="inherit">
        SOCORRO
      </text>
    </svg>
  );
}

// Ícones dos serviços: traço grosso em cor do texto, com um detalhe em vermelho.
export function IconeDeServico({ icone, className = "size-11" }: { icone: IconeServico; className?: string }) {
  const traco = { fill: "none", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const vermelho = "var(--vermelho)";
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      {icone === "pneu" && (
        <>
          <circle cx="24" cy="24" r="19" {...traco} />
          <circle cx="24" cy="24" r="8" {...traco} />
          <path d="M24 5v6M24 37v6M5 24h6M37 24h6M10.6 10.6l4.2 4.2M33.2 33.2l4.2 4.2M10.6 37.4l4.2-4.2M33.2 14.8l4.2-4.2" {...traco} strokeWidth={2.4} />
          <circle cx="24" cy="24" r="3" fill={vermelho} />
        </>
      )}
      {icone === "furo" && (
        <>
          <path d="M8 34a16 16 0 1 1 32 0" {...traco} />
          <path d="M14 34a10 10 0 1 1 20 0" {...traco} />
          <path d="M4 34h40" {...traco} />
          <path d="M27 6l-6 16" stroke={vermelho} strokeWidth={4} strokeLinecap="round" />
          <circle cx="27.5" cy="5.5" r="3" fill={vermelho} />
        </>
      )}
      {icone === "valvula" && (
        <>
          <path d="M6 40a18 18 0 0 1 36 0" {...traco} />
          <rect x="19" y="10" width="10" height="22" rx="2" {...traco} />
          <rect x="17" y="4" width="14" height="7" rx="2" fill={vermelho} />
          <path d="M19 18h10M19 24h10" {...traco} strokeWidth={2.4} />
        </>
      )}
      {icone === "bateria" && (
        <>
          <rect x="5" y="13" width="38" height="27" rx="3" {...traco} />
          <path d="M12 13V8h7v5M29 13V8h7v5" {...traco} />
          <path d="M26 17l-7 11h7l-3 9 9-13h-7l3-7z" fill={vermelho} />
        </>
      )}
      {icone === "reboque" && (
        <>
          <path d="M3 33V20h14l5 7h6v6" {...traco} />
          <path d="M28 33h7l9-14" {...traco} />
          <path d="M44 19v8" {...traco} />
          <path d="M44 27a3 3 0 1 1-3 3" stroke={vermelho} strokeWidth={3} fill="none" strokeLinecap="round" />
          <circle cx="11" cy="35" r="4.5" {...traco} />
          <circle cx="27" cy="35" r="4.5" {...traco} />
        </>
      )}
      {icone === "pesados" && (
        <>
          <path d="M3 34V18h22v16M25 23h9l6 6v5" {...traco} />
          <path d="M3 34h40" {...traco} />
          <circle cx="11" cy="37" r="4.5" {...traco} />
          <circle cx="33" cy="37" r="4.5" {...traco} />
          <path d="M9 18l8-12h20" stroke={vermelho} strokeWidth={3.4} strokeLinecap="round" fill="none" />
        </>
      )}
    </svg>
  );
}
