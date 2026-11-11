import { empresa, linkWhatsapp } from "@/lib/dados";
import { formatarNota, type ResumoGoogle } from "@/lib/google";
import { SeloSocorro } from "./Arte";
import { IconeTelefone } from "./IconeTelefone";
import { ordem } from "@/lib/animacao";
import { IconeWhatsapp } from "./IconeWhatsapp";

const TEMA_ESCURO = {
  "--placa": "#121212",
  "--tinta": "#f4f4f2",
  "--asfalto": "#d6d6d2",
  "--vermelho": "#ff2b1c",
  "--vermelho-hover": "#ff6a5e",
  "--concreto": "#1d1d1d",
} as React.CSSProperties;

export function Hero({ resumo }: { resumo: ResumoGoogle }) {
  const [ddd, numero] = empresa.telefoneExibicao.split(" ");
  return (
    // O topo fica sempre escuro (mesmo no modo claro) para o texto ler bem sobre a foto.
    <div className="relative isolate overflow-hidden bg-[#121212]" style={TEMA_ESCURO}>
      <picture>
        <source media="(max-width: 767px)" srcSet="/img/atendimentos/fundo-viaturas-celular.jpg" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/atendimentos/fundo-viaturas.jpg"
          alt=""
          aria-hidden="true"
          width={1568}
          height={621}
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center] saturate-[.55] contrast-[1.05] md:object-center"
        />
      </picture>
      {/* Tratamento: escuro atrás do texto, abrindo para a direita onde aparece a van. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[rgba(12,12,12,.8)] md:bg-[linear-gradient(90deg,rgba(12,12,12,.94)_0%,rgba(12,12,12,.82)_42%,rgba(12,12,12,.35)_72%,rgba(12,12,12,.18)_100%)]"
      />
    <section className="relative mx-auto max-w-6xl px-4 pt-10 pb-12 text-tinta sm:px-6 md:pt-16 md:pb-24">
      <div data-revelar="" style={ordem(3)} className="absolute top-14 right-6 hidden w-[clamp(150px,14vw,200px)] md:block">
        <SeloSocorro className="h-auto w-full -rotate-6 drop-shadow-[0_8px_24px_rgba(0,0,0,.5)]" />
      </div>
      <h1 data-revelar="" style={ordem(0)} className="largo max-w-[62%] max-md:max-w-none text-[clamp(1.9rem,5.4vw,3.8rem)] leading-[1.02] font-extrabold tracking-tight">
        Pneu furou?
        <br />
        A gente vai até você.
      </h1>

      <a
        data-revelar="entrar"
        style={ordem(2)}
        href={empresa.telefoneLink}
        aria-label={`Ligar para ${empresa.telefoneExibicao}`}
        className="mt-6 block w-fit whitespace-nowrap text-vermelho hover:text-vermelho-escuro md:mt-8"
      >
        <span className="block text-[clamp(1.6rem,7vw,2.2rem)] leading-none font-black md:inline md:mr-[.22em] md:text-[clamp(3rem,6.1vw,5.8rem)] md:largo">
          {ddd}
        </span>
        <span className="block estreito whitespace-nowrap text-[clamp(3rem,16vw,6rem)] leading-[.92] font-black tracking-tight md:inline md:text-[clamp(3rem,6.1vw,5.8rem)] md:largo">
          {numero}
        </span>
      </a>

      <p data-revelar="" style={ordem(4)} className="mt-6 max-w-[62ch] text-lg leading-relaxed text-asfalto md:mt-8 md:text-xl">
        Borracharia móvel com bases em Parada de Lucas, Padre Miguel e Barra da Tijuca. Troca e
        conserto de pneu no local, carga de bateria e reboque. {empresa.horario}.
      </p>

      <div data-revelar="" style={ordem(5)} className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={linkWhatsapp()}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center gap-2.5 rounded-md bg-zap px-6 py-4 text-[17px] font-bold text-zap-texto hover:brightness-95"
        >
          <IconeWhatsapp />
          Chamar no WhatsApp
        </a>
        <a
          href={empresa.telefoneLink}
          className="inline-flex items-center justify-center gap-2.5 rounded-md bg-tinta px-6 py-4 text-[17px] font-bold text-placa hover:bg-asfalto"
        >
          <IconeTelefone />
          Ligar agora
        </a>
      </div>

      <p data-revelar="" style={ordem(6)} className="mt-8 text-[15px] text-asfalto">
        <span className="mr-2 tracking-[2px] text-[#e8a400]" aria-hidden="true">★★★★★</span>
        Nota {formatarNota(resumo.nota)} no Google, com {resumo.total} avaliações.{" "}
        <a href="#avaliacoes" className="font-semibold text-tinta underline underline-offset-4">
          Ler avaliações
        </a>
      </p>
    </section>
    </div>
  );
}
