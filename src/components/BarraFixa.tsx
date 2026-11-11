import { linkWhatsapp } from "@/lib/dados";
import { BotaoLocalizacao } from "./BotaoLocalizacao";
import { IconeWhatsapp } from "./IconeWhatsapp";

// Barra presa embaixo da tela no celular, para quem está parado na rua chamar com um toque.
export function BarraFixa() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t-2 border-tinta bg-placa p-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] md:hidden">
      <a
        href={linkWhatsapp()}
        target="_blank"
        rel="noopener"
        className="flex flex-1 items-center justify-center gap-2 rounded-md bg-zap py-3.5 text-[15px] font-bold text-zap-texto"
      >
        <IconeWhatsapp />
        WhatsApp
      </a>
      <BotaoLocalizacao
        rotulo="Localização"
        className="flex flex-1 items-center justify-center gap-2 rounded-md bg-tinta py-3.5 text-[15px] font-bold text-placa"
      />
    </div>
  );
}
