# Silva Pneus - Borracharia Móvel

Site da Borracharia Silva Pneus, borracharia móvel com três bases no Rio de Janeiro (Parada de Lucas, Padre Miguel e Barra da Tijuca), com atendimento todos os dias até 22h.

Demo: [borrachariasilva.vercel.app](https://borrachariasilva.vercel.app)

## Objetivo

Levar quem está com o pneu furado direto para o atendimento, com o menor número de toques possível:

- telefone em destaque no topo, com toque para ligar
- botão de WhatsApp e barra fixa no celular
- botão "Mandar minha localização", que pega a geolocalização do navegador e abre o WhatsApp com o link do Google Maps na mensagem
- as três bases com endereço e bairros atendidos
- nota, total e avaliações sincronizados com as 3 fichas do Google (atualização diária)
- mapa de cada base
- SEO local com dados estruturados (schema.org `AutoRepair`), Open Graph e favicon

## Tecnologias

- Next.js (App Router) com exportação estática (`output: "export"`)
- React e TypeScript
- Tailwind CSS 4
- Fonte Archivo auto-hospedada via `@fontsource-variable/archivo` (sem chamada ao Google Fonts)

## Estrutura

```
src/
  app/          layout (metadados, SEO) e página
  components/   seções do site (Hero, Servicos, Bases, Avaliacoes, Duvidas, Rodape...)
  lib/dados.ts  todo o conteúdo: telefone, horário, serviços, bases, bairros, avaliações e perguntas
  lib/google.ts busca nota e avaliações no Google Places API (New) durante o build
public/img/     logo, favicon e imagem de compartilhamento
```

Para mudar telefone, horário, bairros ou textos, basta editar `src/lib/dados.ts`.

## Rodando localmente

```bash
npm install
npm run dev        # desenvolvimento em http://localhost:3000
npm run build      # gera o site estático na pasta out/
npm run typecheck  # checagem de tipos
```

## Avaliações do Google

No build, `src/lib/google.ts` consulta a API do Google Places (New): acha cada ficha pelo nome e pela coordenada da base e busca nota, total e avaliações. O site mostra as 3 avaliações mais recentes com o nome do autor e o link para o Google.

1. No Google Cloud, ative a **Places API (New)** e crie uma chave restrita a essa API.
2. Na hospedagem, crie a variável de ambiente `GOOGLE_PLACES_API_KEY` com a chave. Ela só é usada no build e não vai para o navegador.
3. Crie um deploy hook na hospedagem e salve a URL no segredo `DEPLOY_HOOK_URL` do repositório. O workflow `.github/workflows/atualizar-avaliacoes.yml` dispara um build por dia.

Sem a chave, ou se o Google falhar, o site usa as avaliações salvas em `src/lib/dados.ts` e o build não quebra.

## Deploy

O build gera HTML estático na pasta `out/`, então roda em qualquer hospedagem estática.

- **Cloudflare Pages:** build command `npm run build`, output directory `out`.
- **Vercel:** preset Next.js, sem configuração extra.

## Autor

Desenvolvido por [Matheus Ansel](https://matheusansel-dev.vercel.app).
