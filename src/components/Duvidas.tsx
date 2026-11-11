import { perguntas } from "@/lib/dados";

export function Duvidas() {
  return (
    <section id="duvidas" className="mx-auto max-w-6xl scroll-mt-4 px-4 pb-16 sm:px-6 md:pb-24">
      <h2 className="largo text-3xl font-extrabold tracking-tight md:text-5xl">Perguntas comuns</h2>
      <div className="mt-8 max-w-3xl">
        {perguntas.map((p) => (
          <details key={p.pergunta} className="group border-t-2 border-tinta py-4 last:border-b-2">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
              {p.pergunta}
              <span aria-hidden="true" className="text-2xl leading-none font-normal text-vermelho group-open:hidden">+</span>
              <span aria-hidden="true" className="hidden text-2xl leading-none font-normal text-vermelho group-open:inline">−</span>
            </summary>
            <p className="mt-2 max-w-[62ch] text-asfalto">{p.resposta}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
