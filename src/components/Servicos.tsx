import { servicos, veiculos } from "@/lib/dados";

export function Servicos() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl scroll-mt-4 px-4 py-14 sm:px-6 md:py-20">
      <h2 className="largo text-3xl font-extrabold tracking-tight md:text-5xl">O que a gente resolve na rua</h2>
      <p className="mt-3 max-w-[60ch] text-lg text-asfalto">
        Atendemos {veiculos}. A gente vai equipado e resolve ali mesmo.
      </p>
      <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
        {servicos.map((s) => (
          <li key={s.nome} className="border-t-[3px] border-tinta py-5">
            <h3 className="text-xl font-bold">{s.nome}</h3>
            <p className="mt-1 text-asfalto">{s.descricao}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
