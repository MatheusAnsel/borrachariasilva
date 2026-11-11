import { Avaliacoes } from "@/components/Avaliacoes";
import { BarraFixa } from "@/components/BarraFixa";
import { Bases } from "@/components/Bases";
import { Duvidas } from "@/components/Duvidas";
import { Hero } from "@/components/Hero";
import { Rodape } from "@/components/Rodape";
import { Servicos } from "@/components/Servicos";
import { Topo } from "@/components/Topo";

export default function Pagina() {
  return (
    <>
      <Topo />
      <main>
        <Hero />
        <div className="banda" aria-hidden="true" />
        <Servicos />
        <Bases />
        <Avaliacoes />
        <Duvidas />
      </main>
      <Rodape />
      <BarraFixa />
    </>
  );
}
