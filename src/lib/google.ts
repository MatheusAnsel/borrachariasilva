import { cache } from "react";
import { avaliacoes as avaliacoesLocais, bases, empresa, type Base } from "./dados";

// Busca nota, total e avaliações das três fichas no Google Places API (New) durante o build.
// A chave fica só no servidor de build (GOOGLE_PLACES_API_KEY), nunca vai para o navegador.
// Sem chave ou com erro, o site usa as avaliações de src/lib/dados.ts e o build segue normal.

const API = "https://places.googleapis.com/v1";

export type AvaliacaoExibida = {
  texto: string;
  autor: string;
  autorUrl?: string;
  quando?: string;
  link?: string;
  base: string;
};

export type ResumoGoogle = {
  nota: number;
  total: number;
  avaliacoes: AvaliacaoExibida[];
  fonte: "google" | "local";
};

type ReviewApi = {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  publishTime?: string;
  googleMapsUri?: string;
  authorAttribution?: { displayName?: string; uri?: string };
};

type PlaceApi = {
  rating?: number;
  userRatingCount?: number;
  reviews?: ReviewApi[];
};

async function chamar<T>(caminho: string, chave: string, campos: string, init?: RequestInit): Promise<T> {
  const resposta = await fetch(`${API}${caminho}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": chave,
      "X-Goog-FieldMask": campos,
      ...init?.headers,
    },
    cache: "force-cache",
  });
  if (!resposta.ok) {
    throw new Error(`Google Places respondeu ${resposta.status}: ${await resposta.text()}`);
  }
  return resposta.json() as Promise<T>;
}

// Descobre o ID da ficha pelo nome e pela coordenada da base (consulta só de ID, sem custo).
async function idDaFicha(base: Base, chave: string): Promise<string | null> {
  if (base.placeId) return base.placeId;
  const dados = await chamar<{ places?: { id: string }[] }>("/places:searchText", chave, "places.id", {
    method: "POST",
    body: JSON.stringify({
      textQuery: base.nomeNoGoogle,
      languageCode: "pt-BR",
      maxResultCount: 1,
      locationBias: { circle: { center: { latitude: base.lat, longitude: base.lng }, radius: 500 } },
    }),
  });
  return dados.places?.[0]?.id ?? null;
}

function resumoLocal(): ResumoGoogle {
  return {
    nota: Number(empresa.notaGoogle.replace(",", ".")),
    total: empresa.totalAvaliacoes,
    avaliacoes: avaliacoesLocais,
    fonte: "local",
  };
}

export const buscarResumoGoogle = cache(async (): Promise<ResumoGoogle> => {
  const chave = process.env.GOOGLE_PLACES_API_KEY;
  if (!chave) {
    console.warn("[avaliações] GOOGLE_PLACES_API_KEY não definida: usando as avaliações de dados.ts");
    return resumoLocal();
  }

  try {
    const fichas = await Promise.all(
      bases.map(async (base) => {
        const id = await idDaFicha(base, chave);
        if (!id) return null;
        const place = await chamar<PlaceApi>(
          `/places/${id}?languageCode=pt-BR`,
          chave,
          "rating,userRatingCount,reviews",
        );
        return { base, place };
      }),
    );

    const validas = fichas.filter((f): f is { base: Base; place: PlaceApi } => f !== null);
    const total = validas.reduce((soma, f) => soma + (f.place.userRatingCount ?? 0), 0);
    if (total === 0) throw new Error("nenhuma ficha com avaliações encontrada");

    // Nota geral = média das três fichas, ponderada pela quantidade de avaliações de cada uma.
    const nota =
      validas.reduce((soma, f) => soma + (f.place.rating ?? 0) * (f.place.userRatingCount ?? 0), 0) / total;

    const avaliacoes = validas
      .flatMap(({ base, place }) =>
        (place.reviews ?? []).map((r) => ({
          texto: (r.originalText?.text ?? r.text?.text ?? "").trim(),
          autor: r.authorAttribution?.displayName ?? "Cliente",
          autorUrl: r.authorAttribution?.uri,
          quando: r.relativePublishTimeDescription,
          link: r.googleMapsUri,
          base: base.nome,
          publicada: r.publishTime ?? "",
        })),
      )
      .filter((a) => a.texto.length > 0)
      .sort((a, b) => b.publicada.localeCompare(a.publicada))
      .slice(0, 3)
      .map(({ publicada: _publicada, ...resto }) => resto);

    console.log(`[avaliações] Google: nota ${nota.toFixed(1)}, ${total} avaliações, ${avaliacoes.length} exibidas`);
    return {
      nota,
      total,
      avaliacoes: avaliacoes.length > 0 ? avaliacoes : avaliacoesLocais,
      fonte: "google",
    };
  } catch (erro) {
    console.warn("[avaliações] Falha ao buscar no Google, usando dados.ts:", erro);
    return resumoLocal();
  }
});

export const formatarNota = (nota: number) =>
  nota.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
