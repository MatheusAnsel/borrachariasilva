"use client";

import { useEffect, useState } from "react";

type Tema = "escuro" | "claro";

// Alterna entre o modo escuro (padrão) e o claro e lembra a escolha no navegador.
export function BotaoTema() {
  const [tema, setTema] = useState<Tema>("escuro");

  useEffect(() => {
    setTema(document.documentElement.dataset.tema === "claro" ? "claro" : "escuro");
  }, []);

  function alternar() {
    const novo: Tema = tema === "escuro" ? "claro" : "escuro";
    setTema(novo);
    if (novo === "claro") document.documentElement.dataset.tema = "claro";
    else delete document.documentElement.dataset.tema;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", novo === "claro" ? "#ffffff" : "#121212");
    try {
      localStorage.setItem("tema", novo);
    } catch {
      // navegador sem armazenamento: a troca vale só para esta visita
    }
  }

  const proximo = tema === "escuro" ? "claro" : "escuro";
  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={`Mudar para o modo ${proximo}`}
      title={`Mudar para o modo ${proximo}`}
      className="grid size-10 place-items-center rounded-md border-2 border-tinta text-tinta hover:bg-concreto"
    >
      {tema === "escuro" ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true" className="size-5">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" aria-hidden="true" className="size-5">
          <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z" />
        </svg>
      )}
    </button>
  );
}
