import { bases, empresa, linkWhatsapp } from "@/lib/dados";
import { ordem } from "@/lib/animacao";
import { IconeInstagram } from "./IconeInstagram";
import { IconeWhatsapp } from "./IconeWhatsapp";

export function Rodape() {
  return (
    <footer className="bg-black text-white">
      <div className="banda" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-32 sm:px-6 md:pt-20 md:pb-14">
        <h2 data-revelar="" className="largo text-3xl font-extrabold tracking-tight text-balance md:text-5xl">Parado com pneu furado?</h2>
        <a
          data-revelar="entrar"
          style={ordem(1)}
          href={empresa.telefoneLink}
          aria-label={`Ligar para ${empresa.telefoneExibicao}`}
          className="mt-4 block text-[clamp(2.3rem,10vw,5.5rem)] leading-none font-black tracking-tight hover:text-vermelho md:largo"
        >
          {empresa.telefoneExibicao}
        </a>
        <a
          href={linkWhatsapp()}
          target="_blank"
          rel="noopener"
          className="mt-8 inline-flex items-center gap-2.5 rounded-md bg-zap px-6 py-4 text-[17px] font-bold text-zap-texto hover:brightness-95"
        >
          <IconeWhatsapp />
          Chamar no WhatsApp
        </a>

        <div className="mt-14 grid gap-8 border-t border-white/25 pt-8 text-[15px] text-white/75 md:grid-cols-4">
          {bases.map((b) => (
            <div key={b.nome}>
              <p className="font-bold text-white">{b.nome}</p>
              <p className="mt-1">{b.endereco}</p>
            </div>
          ))}
          <div>
            <p className="font-bold text-white">{empresa.horario}</p>
            <a href={empresa.instagram} target="_blank" rel="noopener" className="mt-2 inline-flex items-center gap-2 font-semibold text-white underline underline-offset-4 hover:text-vermelho">
              <IconeInstagram />
              {empresa.instagramUsuario}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-3 text-sm text-white/60">
          <p>© {new Date().getFullYear()} {empresa.razaoSocial}, Rio de Janeiro, RJ</p>
          <p>
            Site feito por{" "}
            <a href="https://matheusansel.pages.dev" target="_blank" rel="noopener" className="underline underline-offset-4 hover:text-white">
              Matheus Ansel
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
