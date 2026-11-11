import { empresa } from "@/lib/dados";
import { formatarNota, type ResumoGoogle } from "@/lib/google";
import { ordem } from "@/lib/animacao";

export function Avaliacoes({ resumo }: { resumo: ResumoGoogle }) {
  return (
    <section id="avaliacoes" className="mx-auto max-w-6xl scroll-mt-4 px-4 py-14 sm:px-6 md:py-20">
      <h2 data-revelar="" className="largo text-3xl font-extrabold tracking-tight text-balance md:text-5xl">O que dizem no Google</h2>
      <p data-revelar="" style={ordem(1)} className="mt-3 text-lg text-asfalto">
        Nota {formatarNota(resumo.nota)} com {resumo.total} avaliações nas três bases.
      </p>
      <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
        {resumo.avaliacoes.map((a, i) => (
          <figure key={`${a.autor}-${a.texto.slice(0, 20)}`} data-revelar="" style={ordem(i * 2)} className="border-l-[3px] border-tinta pl-5">
            <span className="tracking-[2px] text-[#e8a400]" aria-label="5 estrelas">★★★★★</span>
            <blockquote className="mt-2 line-clamp-6 text-xl leading-snug font-medium">“{a.texto}”</blockquote>
            <figcaption className="mt-3 text-[15px] text-asfalto">
              {a.autorUrl ? (
                <a href={a.autorUrl} target="_blank" rel="noopener" className="font-semibold text-tinta hover:underline">
                  {a.autor}
                </a>
              ) : (
                <span className="font-semibold text-tinta">{a.autor}</span>
              )}
              , base {a.base}
              {a.quando ? `, ${a.quando}` : ""}
              {a.link && (
                <>
                  {" "}
                  <a href={a.link} target="_blank" rel="noopener" className="underline underline-offset-4 hover:text-vermelho-escuro">
                    Ler no Google
                  </a>
                </>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
      <a
        href={empresa.google}
        target="_blank"
        rel="noopener"
        className="mt-10 inline-block font-semibold underline underline-offset-4 hover:text-vermelho-escuro"
      >
        Ver todas as avaliações no Google
      </a>
      {resumo.fonte === "google" && (
        <p className="mt-3 text-sm text-asfalto">Avaliações e nota exibidas a partir do Google.</p>
      )}
    </section>
  );
}
