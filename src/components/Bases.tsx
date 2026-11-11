import { bases } from "@/lib/dados";

export function Bases() {
  return (
    <section id="bases" className="scroll-mt-4 bg-concreto">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <h2 className="largo text-3xl font-extrabold tracking-tight md:text-5xl">Onde a gente atende</h2>
        <p className="mt-3 max-w-[60ch] text-lg text-asfalto">
          São três bases. Cada uma cobre o próprio bairro e os vizinhos. Não achou o seu? Chame no
          WhatsApp e confirme.
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {bases.map((b) => (
            <article key={b.nome} className="border-t-[6px] border-vermelho pt-5">
              <p className="text-sm font-semibold text-asfalto">{b.regiao}</p>
              <h3 className="largo mt-1 text-[28px] leading-tight font-black">{b.nome}</h3>
              <p className="mt-3 text-[15px] text-asfalto">{b.endereco}</p>
              <h4 className="mt-5 text-[15px] font-bold">Bairros atendidos</h4>
              <p className="mt-1 text-[15px] leading-relaxed text-asfalto">{b.bairros.join(", ")}.</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${b.lat},${b.lng}`}
                target="_blank"
                rel="noopener"
                className="mt-4 inline-block text-[15px] font-semibold underline underline-offset-4 hover:text-vermelho-escuro"
              >
                Ver a base no mapa
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
