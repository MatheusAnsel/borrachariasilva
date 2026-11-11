import { Animacoes } from "@/components/Animacoes";
import { Avaliacoes } from "@/components/Avaliacoes";
import { BarraFixa } from "@/components/BarraFixa";
import { Bases } from "@/components/Bases";
import { Duvidas } from "@/components/Duvidas";
import { Hero } from "@/components/Hero";
import { Rodape } from "@/components/Rodape";
import { Servicos } from "@/components/Servicos";
import { Topo } from "@/components/Topo";
import { buscarResumoGoogle } from "@/lib/google";

export default async function Pagina() {
  const resumo = await buscarResumoGoogle();
  return (
    <>
      <Topo />
      <main>
        <Hero resumo={resumo} />
        <div className="banda" aria-hidden="true" />
        <Servicos />
        <Bases />
        <Avaliacoes resumo={resumo} />
        <Duvidas />
      </main>
      <Rodape />
      <BarraFixa />
      <Animacoes />
    </>
  );
}
