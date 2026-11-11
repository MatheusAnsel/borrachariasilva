import { avaliacoes, empresa } from "@/lib/dados";

export function Avaliacoes() {
  return (
    <section id="avaliacoes" className="mx-auto max-w-6xl scroll-mt-4 px-4 py-14 sm:px-6 md:py-20">
      <h2 className="largo text-3xl font-extrabold tracking-tight md:text-5xl">O que dizem no Google</h2>
      <p className="mt-3 text-lg text-asfalto">
        Nota {empresa.notaGoogle} com mais de 270 avaliações nas três bases.
      </p>
      <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
        {avaliacoes.map((a) => (
          <figure key={a.autor} className="border-l-[3px] border-tinta pl-5">
            <span className="tracking-[2px] text-[#e8a400]" aria-label="5 estrelas">★★★★★</span>
            <blockquote className="mt-2 text-xl leading-snug font-medium">“{a.texto}”</blockquote>
            <figcaption className="mt-3 text-[15px] text-asfalto">
              {a.autor}, cliente da base {a.base}
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
    </section>
  );
}
