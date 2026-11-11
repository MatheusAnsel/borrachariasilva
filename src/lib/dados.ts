// Todo o conteúdo do site fica aqui. Para trocar telefone, horário, bairros ou textos,
// altere este arquivo e publique; os componentes não precisam mudar.

export const SITE_URL = "https://borrachariasilva.vercel.app";

export const empresa = {
  nome: "Silva Pneus",
  razaoSocial: "Borracharia Silva Pneus",
  telefoneExibicao: "(21) 96016-6562",
  telefoneLink: "tel:+5521960166562",
  whatsapp: "5521960166562",
  mensagemWhatsapp: "Olá, preciso de socorro de borracharia!",
  horario: "Todos os dias até 22h",
  instagram: "https://www.instagram.com/borracharia_silvapneus021/",
  instagramUsuario: "@borracharia_silvapneus021",
  google:
    "https://www.google.com/maps/search/?api=1&query=BORRACHARIA+M%C3%93VEL+SILVA+PNEUS",
  notaGoogle: "5,0",
  totalAvaliacoes: 271,
} as const;

export const linkWhatsapp = (texto: string = empresa.mensagemWhatsapp) =>
  `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(texto)}`;

export type Servico = { nome: string; descricao: string };

export const servicos: Servico[] = [
  {
    nome: "Troca de pneu",
    descricao: "Colocamos o estepe ou o pneu novo onde você estiver, com o aperto certo das porcas.",
  },
  {
    nome: "Conserto de furo",
    descricao: "Reparo do pneu furado no local, para você seguir sem precisar trocar.",
  },
  {
    nome: "Troca de válvula",
    descricao: "Bico da roda vazando ou quebrado? Trocamos ali mesmo.",
  },
  {
    nome: "Carga de bateria",
    descricao: "Carro não pega? Fazemos a carga rápida da bateria no local.",
  },
  {
    nome: "Reboque leve e pesado",
    descricao: "Quando não dá para resolver na hora, levamos o veículo, do carro ao caminhão.",
  },
  {
    nome: "Pesados e máquinas",
    descricao: "Caminhões, carretas, retroescavadeiras e guindastes, em obra, pátio ou porto.",
  },
];

export const veiculos = "carro, moto, van, caminhão, carreta e máquina pesada";

export type Base = {
  nome: string;
  // Nome exato da ficha no Google Maps, usado para achar as avaliações dela.
  nomeNoGoogle: string;
  // Opcional: ID da ficha no Google (ChIJ...). Se ficar vazio, o build descobre pelo nome.
  placeId?: string;
  regiao: string;
  endereco: string;
  lat: number;
  lng: number;
  bairros: string[];
};

export const bases: Base[] = [
  {
    nome: "Parada de Lucas",
    nomeNoGoogle: "BORRACHARIA MÓVEL SILVA PNEUS",
    regiao: "Zona Norte",
    endereco: "Av. Brasil, 13709, Parada de Lucas, Rio de Janeiro, RJ, 21010-075",
    lat: -22.8148742,
    lng: -43.293838,
    bairros: [
      "Parada de Lucas", "Vigário Geral", "Cordovil", "Brás de Pina", "Penha", "Penha Circular",
      "Vila da Penha", "Olaria", "Ramos", "Bonsucesso", "Maré", "Manguinhos", "Vista Alegre",
      "Irajá", "Vila Kosmos", "Jardim América", "Colégio", "Ilha do Governador",
      "Duque de Caxias", "São João de Meriti",
    ],
  },
  {
    nome: "Padre Miguel",
    nomeNoGoogle: "Silva Borracharia Móvel",
    regiao: "Zona Oeste",
    endereco: "Av. Brasil, Padre Miguel, Rio de Janeiro, RJ, 21852-000",
    lat: -22.8609655,
    lng: -43.4508,
    bairros: [
      "Padre Miguel", "Bangu", "Realengo", "Senador Camará", "Vila Kennedy", "Magalhães Bastos",
      "Deodoro", "Vila Militar", "Jardim Sulacap", "Campo dos Afonsos", "Marechal Hermes",
      "Guadalupe", "Ricardo de Albuquerque", "Anchieta", "Santíssimo", "Senador Vasconcelos",
      "Campo Grande", "Vila Valqueire", "Nilópolis", "Mesquita",
    ],
  },
  {
    nome: "Barra da Tijuca",
    nomeNoGoogle: "BORRACHARIA MÓVEL SILVA PNEUS 24H",
    regiao: "Barra e Jacarepaguá",
    endereco: "Av. das Américas, Barra da Tijuca, Rio de Janeiro, RJ, 22640-100",
    lat: -22.9996969,
    lng: -43.3519577,
    bairros: [
      "Barra da Tijuca", "Barra Olímpica", "Recreio dos Bandeirantes", "Jacarepaguá", "Freguesia",
      "Pechincha", "Taquara", "Tanque", "Praça Seca", "Anil", "Gardênia Azul", "Cidade de Deus",
      "Curicica", "Camorim", "Vargem Pequena", "Vargem Grande", "Itanhangá", "Joá",
      "São Conrado", "Grumari",
    ],
  },
];

// Trechos copiados das avaliações públicas no Google, sem alteração de texto.
// Só aparecem quando o build roda sem a chave da API do Google (veja src/lib/google.ts).
export type Avaliacao = { texto: string; autor: string; base: string };

export const avaliacoes: Avaliacao[] = [
  {
    texto: "Chegaram em um domingo em menos de 30 minutos. Pneu resolvido e voltamos ao trabalho.",
    autor: "Alex",
    base: "Parada de Lucas",
  },
  {
    texto:
      "Super eficientes! Pedi a noite e chegaram em menos de meia hora e resolveram o problema em 15 minutos!",
    autor: "Carlos Gustavo",
    base: "Parada de Lucas",
  },
  {
    texto:
      "Na semana passada o pneu do meu carro furou, chamei o Silva e em menos de 10 minutos ele chegou…",
    autor: "Fernando",
    base: "Barra da Tijuca",
  },
];

export type Pergunta = { pergunta: string; resposta: string };

export const perguntas: Pergunta[] = [
  {
    pergunta: "Qual o horário de atendimento?",
    resposta: "Todos os dias, inclusive fim de semana, até as 22h, nas três bases.",
  },
  {
    pergunta: "Quanto tempo vocês levam para chegar?",
    resposta:
      "Depende de onde você está e do trânsito. Mande sua localização pelo WhatsApp e a gente passa a previsão na hora.",
  },
  {
    pergunta: "Quanto custa?",
    resposta:
      "Depende do serviço e da distância. Conte no WhatsApp o que aconteceu e passamos o valor antes de sair.",
  },
  {
    pergunta: "Não tenho estepe. Vocês resolvem?",
    resposta:
      "Na maioria dos casos dá para consertar o furo no local. Se o pneu não tiver conserto, explicamos as opções antes.",
  },
  {
    pergunta: "Meu bairro não está na lista. Vocês vão?",
    resposta: "Chame no WhatsApp e confirme. Muitas vezes dá para ir, dependendo do horário.",
  },
];

// Fotos publicadas pelo dono na ficha do Google. Rostos e placas de clientes desfocados.
export type Foto = { src: string; alt: string; legenda: string; largura: number; altura: number };

export const fotos: Foto[] = [
  {
    src: "/img/atendimentos/socorro-avenida.jpg",
    alt: "Picape da Silva Pneus com compressor na caçamba, estacionada na beira da Avenida Brasil",
    legenda: "Socorro na Avenida Brasil",
    largura: 1140,
    altura: 855,
  },
  {
    src: "/img/atendimentos/guindaste.jpg",
    alt: "Carro da Silva Pneus ao lado de um guindaste em um canteiro de obra",
    legenda: "Guindaste em obra",
    largura: 1140,
    altura: 640,
  },
  {
    src: "/img/atendimentos/caminhao-caxias.jpg",
    alt: "Picape da Silva Pneus atendendo um caminhão em Duque de Caxias",
    legenda: "Caminhão em Caxias",
    largura: 482,
    altura: 520,
  },
  {
    src: "/img/atendimentos/patio-empresa.jpg",
    alt: "Carro da Silva Pneus no pátio de uma empresa com caminhões e vans",
    legenda: "Pátio de empresa",
    largura: 1140,
    altura: 390,
  },
  {
    src: "/img/atendimentos/viaturas.jpg",
    alt: "As duas viaturas da Silva Pneus estacionadas lado a lado",
    legenda: "Nossas viaturas",
    largura: 1140,
    altura: 280,
  },
];
