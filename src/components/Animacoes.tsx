"use client";

import { useEffect } from "react";

// Revela os blocos marcados com data-revelar quando entram na tela e faz a faixa de
// banda de rodagem "rodar" conforme a rolagem. Não faz nada com "reduzir movimento" ligado.
export function Animacoes() {
  useEffect(() => {
    const raiz = document.documentElement;
    (window as Window & { __animacoes?: boolean }).__animacoes = true;
    if (!raiz.classList.contains("anima")) return;

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (!entrada.isIntersecting) continue;
          (entrada.target as HTMLElement).dataset.visivel = "";
          observador.unobserve(entrada.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    document.querySelectorAll("[data-revelar]").forEach((el) => observador.observe(el));

    let agendado = false;
    const rolar = () => {
      if (agendado) return;
      agendado = true;
      requestAnimationFrame(() => {
        raiz.style.setProperty("--rolagem", String(Math.round(window.scrollY * 0.6)));
        agendado = false;
      });
    };
    window.addEventListener("scroll", rolar, { passive: true });
    rolar();

    return () => {
      observador.disconnect();
      window.removeEventListener("scroll", rolar);
    };
  }, []);

  return null;
}

