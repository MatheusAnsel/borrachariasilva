import { empresa } from "@/lib/dados";

export function Topo() {
  return (
    <header className="border-b-2 border-tinta bg-placa">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <a href="#" aria-label="Silva Pneus, início">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo.png" alt="Silva Pneus" width={437} height={177} className="h-12 w-auto md:h-14" />
        </a>
        <nav aria-label="Seções" className="hidden gap-7 text-[15px] font-semibold md:flex">
          <a href="#servicos" className="hover:text-vermelho-escuro">Serviços</a>
          <a href="#bases" className="hover:text-vermelho-escuro">Onde atendemos</a>
          <a href="#avaliacoes" className="hover:text-vermelho-escuro">Avaliações</a>
          <a href="#duvidas" className="hover:text-vermelho-escuro">Dúvidas</a>
        </nav>
        <a href={empresa.telefoneLink} className="bg-tinta px-4 py-2.5 text-sm font-bold text-placa md:hidden">
          Ligar
        </a>
      </div>
    </header>
  );
}
