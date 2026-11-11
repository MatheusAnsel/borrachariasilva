import { servicos, veiculos } from "@/lib/dados";
import { ordem } from "@/lib/animacao";
import { IconeDeServico } from "./Arte";

export function Servicos() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl scroll-mt-4 px-4 py-14 sm:px-6 md:py-20">
      <h2 data-revelar="" className="largo text-3xl font-extrabold tracking-tight text-balance md:text-5xl">O que a gente resolve na rua</h2>
      <p data-revelar="" style={ordem(1)} className="mt-3 max-w-[60ch] text-lg text-asfalto">
        Atendemos {veiculos}. A gente vai equipado e resolve ali mesmo.
      </p>
      <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
        {servicos.map((s, i) => (
          <li key={s.nome} data-revelar="linha" style={ordem(i)} className="border-t-[3px] border-tinta py-5">
            <div className="flex gap-4">
              <IconeDeServico icone={s.icone} className="size-11 shrink-0 text-tinta" />
              <div>
                <h3 className="text-xl font-bold">{s.nome}</h3>
                <p className="mt-1 text-asfalto">{s.descricao}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
