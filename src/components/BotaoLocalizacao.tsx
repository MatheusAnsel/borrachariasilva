"use client";

import { useState } from "react";
import { empresa, linkWhatsapp } from "@/lib/dados";

type Props = { className?: string; rotulo?: string };

// Pega a localização do navegador e abre o WhatsApp já com o link do Google Maps na mensagem.
export function BotaoLocalizacao({ className = "", rotulo = "Mandar minha localização" }: Props) {
  const [aviso, setAviso] = useState<string | null>(null);

  function abrir(texto: string) {
    window.open(linkWhatsapp(texto), "_blank", "noopener");
  }

  function enviar() {
    const base = empresa.mensagemWhatsapp;
    if (!("geolocation" in navigator)) {
      abrir(`${base} Vou te passar minha localização por aqui.`);
      return;
    }
    setAviso("Pegando sua localização…");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setAviso(null);
        const lat = coords.latitude.toFixed(6);
        const lng = coords.longitude.toFixed(6);
        abrir(`${base}\nMinha localização: https://maps.google.com/?q=${lat},${lng}`);
      },
      () => {
        setAviso("Não deu para pegar a localização. Abrindo o WhatsApp para você mandar por lá.");
        setTimeout(() => {
          setAviso(null);
          abrir(`${base} Vou te passar minha localização por aqui.`);
        }, 1400);
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  }

  return (
    <>
      <button type="button" onClick={enviar} className={className}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true" className="size-5 shrink-0">
          <path d="M12 22s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" />
          <circle cx="12" cy="10" r="2.6" />
        </svg>
        {rotulo}
      </button>
      <p
        role="status"
        aria-live="polite"
        className={`fixed inset-x-4 bottom-24 z-50 mx-auto max-w-sm bg-tinta px-4 py-3 text-center text-sm font-semibold text-placa transition-opacity ${aviso ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        {aviso}
      </p>
    </>
  );
}
