# Silva Pneus - Borracharia Móvel

Site da Borracharia Silva Pneus, borracharia móvel com três bases no Rio de Janeiro (Parada de Lucas, Padre Miguel e Barra da Tijuca), com atendimento todos os dias até 22h.

Demo: [borrachariasilva.vercel.app](https://borrachariasilva.vercel.app)

## Objetivo

Levar quem está com o pneu furado direto para o atendimento, com o menor número de toques possível:

- telefone em destaque no topo, com toque para ligar
- botão de WhatsApp e barra fixa no celular
- botão "Mandar minha localização", que pega a geolocalização do navegador e abre o WhatsApp com o link do Google Maps na mensagem
- as três bases com endereço e bairros atendidos
- avaliações reais do Google
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

## Deploy

O build gera HTML estático na pasta `out/`, então roda em qualquer hospedagem estática.

- **Cloudflare Pages:** build command `npm run build`, output directory `out`.
- **Vercel:** preset Next.js, sem configuração extra.

## Autor

Desenvolvido por [Matheus Ansel](https://matheusansel-dev.vercel.app).
