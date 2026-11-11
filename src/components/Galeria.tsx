import { fotos } from "@/lib/dados";
import { ordem } from "@/lib/animacao";

// Posição de cada foto no mosaico (mesma ordem de `fotos` em dados.ts).
const posicoes = [
  "col-span-2 row-span-2",
  "col-span-2",
  "col-span-1",
  "col-span-1",
  "col-span-2 md:col-span-4",
];

export function Galeria() {
  return (
    <section id="atendimentos" className="mx-auto max-w-6xl scroll-mt-4 px-4 py-14 sm:px-6 md:py-20">
      <h2 data-revelar="" className="largo text-3xl font-extrabold tracking-tight text-balance md:text-5xl">
        Na rua, todo dia
      </h2>
      <p data-revelar="" style={ordem(1)} className="mt-3 max-w-[60ch] text-lg text-asfalto">
        Atendimentos de verdade da Silva Pneus: na avenida, em obra, em pátio de empresa e onde mais precisar.
      </p>
      <div className="mt-10 grid auto-rows-[150px] grid-cols-2 gap-2 sm:auto-rows-[200px] md:grid-cols-4 md:gap-3 md:auto-rows-[230px]">
        {fotos.map((f, i) => (
          <figure
            key={f.src}
            data-revelar=""
            style={ordem(i + 1)}
            className={`relative overflow-hidden bg-concreto ${posicoes[i] ?? "col-span-1"}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={f.src}
              alt={f.alt}
              width={f.largura}
              height={f.altura}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 bg-black/80 px-3 py-1.5 text-sm font-semibold text-white">
              {f.legenda}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
