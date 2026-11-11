import { empresa, linkWhatsapp } from "@/lib/dados";
import { formatarNota, type ResumoGoogle } from "@/lib/google";
import { BotaoLocalizacao } from "./BotaoLocalizacao";
import { IconeWhatsapp } from "./IconeWhatsapp";

export function Hero({ resumo }: { resumo: ResumoGoogle }) {
  const [ddd, numero] = empresa.telefoneExibicao.split(" ");
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 pb-12 sm:px-6 md:pt-16 md:pb-20">
      <h1 className="largo max-w-3xl text-[clamp(1.9rem,5.4vw,3.6rem)] leading-[1.02] font-extrabold tracking-tight">
        Pneu furou? A gente vai até você.
      </h1>

      <a
        href={empresa.telefoneLink}
        aria-label={`Ligar para ${empresa.telefoneExibicao}`}
        className="mt-6 block w-fit whitespace-nowrap text-vermelho hover:text-vermelho-escuro md:mt-8"
      >
        <span className="block text-[clamp(1.6rem,7vw,2.2rem)] leading-none font-black md:inline md:mr-[.22em] md:text-[clamp(3rem,7.4vw,7rem)] md:largo">
          {ddd}
        </span>
        <span className="block estreito whitespace-nowrap text-[clamp(3rem,16vw,6rem)] leading-[.92] font-black tracking-tight md:inline md:text-[clamp(3rem,7.4vw,7rem)] md:largo">
          {numero}
        </span>
      </a>

      <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-asfalto md:mt-8 md:text-xl">
        Borracharia móvel com bases em Parada de Lucas, Padre Miguel e Barra da Tijuca. Troca e
        conserto de pneu no local, carga de bateria e reboque. {empresa.horario}.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={linkWhatsapp()}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center gap-2.5 rounded-md bg-zap px-6 py-4 text-[17px] font-bold text-zap-texto hover:brightness-95"
        >
          <IconeWhatsapp />
          Chamar no WhatsApp
        </a>
        <BotaoLocalizacao className="inline-flex items-center justify-center gap-2.5 rounded-md bg-tinta px-6 py-4 text-[17px] font-bold text-placa hover:bg-asfalto" />
      </div>

      <p className="mt-8 text-[15px] text-asfalto">
        <span className="mr-2 tracking-[2px] text-[#e8a400]" aria-hidden="true">★★★★★</span>
        Nota {formatarNota(resumo.nota)} no Google, com {resumo.total} avaliações.{" "}
        <a href="#avaliacoes" className="font-semibold text-tinta underline underline-offset-4">
          Ler avaliações
        </a>
      </p>
    </section>
  );
}
