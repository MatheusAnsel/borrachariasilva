import { empresa } from "@/lib/dados";
import { BotaoTema } from "./BotaoTema";
import { IconeInstagram } from "./IconeInstagram";

export function Topo() {
  return (
    <header className="border-b-2 border-tinta bg-placa">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo com letra clara no modo escuro e o original no modo claro. */}
        <a href="#" aria-label="Silva Pneus, início">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo-escuro.png" alt="Silva Pneus" width={437} height={177} className="block h-12 w-auto claro:hidden md:h-14" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo.png" alt="" aria-hidden="true" width={437} height={177} className="hidden h-12 w-auto claro:block md:h-14" />
        </a>
        <div className="flex items-center gap-7">
          <nav aria-label="Seções" className="hidden gap-7 text-[15px] font-semibold md:flex">
            <a href="#servicos" className="hover:text-vermelho-escuro">Serviços</a>
            <a href="#bases" className="hover:text-vermelho-escuro">Onde atendemos</a>
            <a href="#avaliacoes" className="hover:text-vermelho-escuro">Avaliações</a>
            <a href="#duvidas" className="hover:text-vermelho-escuro">Dúvidas</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={empresa.instagram}
              target="_blank"
              rel="noopener"
              aria-label={`Instagram da Silva Pneus (${empresa.instagramUsuario})`}
              title="Instagram"
              className="grid size-10 place-items-center rounded-md border-2 border-tinta text-tinta hover:bg-concreto"
            >
              <IconeInstagram />
            </a>
            <BotaoTema />
            <a href={empresa.telefoneLink} className="rounded-md bg-tinta px-4 py-2.5 text-sm font-bold text-placa md:hidden">
              Ligar
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
