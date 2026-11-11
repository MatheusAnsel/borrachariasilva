import { empresa } from "@/lib/dados";
import { ordem } from "@/lib/animacao";
import { IconeInstagram } from "./IconeInstagram";

export function Instagram() {
  return (
    <section id="instagram" className="scroll-mt-4 bg-concreto">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between md:py-16">
        <div data-revelar="">
          <h2 className="largo text-3xl font-extrabold tracking-tight text-balance md:text-5xl">
            Veja os atendimentos no Instagram
          </h2>
          <p className="mt-3 max-w-[56ch] text-lg text-asfalto">
            Fotos e vídeos dos socorros pelas ruas do Rio: carro, moto, caminhão e máquina, todos os dias.
          </p>
          <p className="mt-3 text-lg font-bold break-all">{empresa.instagramUsuario}</p>
        </div>
        <a
          data-revelar=""
          style={ordem(2)}
          href={empresa.instagram}
          target="_blank"
          rel="noopener"
          className="inline-flex shrink-0 items-center justify-center gap-3 rounded-md bg-tinta px-6 py-4 text-[17px] font-bold text-placa hover:bg-asfalto"
        >
          <IconeInstagram className="size-6" />
          Seguir no Instagram
        </a>
      </div>
    </section>
  );
}
