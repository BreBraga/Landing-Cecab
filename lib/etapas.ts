export type Etapa = {
  slug: string;
  fase: string;
  verbo: string;
  texto: string;
  marcador: string;
  foto: string;
  alt: string;
  titulo: string;
  intro: string;
  destaques: { titulo: string; texto: string }[];
  cta: string;
};

export const ETAPAS: Etapa[] = [
  {
    slug: "educacao-infantil",
    fase: "Educação Infantil",
    verbo: "Descobrir",
    texto:
      "As primeiras experiências de aprendizado, convivência e descoberta do mundo.",
    marcador: "bg-orange",
    foto: "/fotos/infantil-pintura.webp",
    alt: "Crianças da Educação Infantil pintando juntas em uma mesa",
    titulo: "Aprender brincando, descobrir o mundo.",
    intro:
      "É na Educação Infantil que a criança vive as primeiras experiências na escola. Cada dia é feito de descobertas, brincadeiras e convivência, em um ambiente acolhedor e seguro.",
    destaques: [
      {
        titulo: "Aprender brincando",
        texto:
          "Pintura, música, histórias e brincadeiras desenvolvem a curiosidade e a criatividade.",
      },
      {
        titulo: "Primeiros passos no inglês",
        texto:
          "O ensino bilíngue começa cedo, de forma leve e natural, como parte da rotina.",
      },
      {
        titulo: "Convivência e valores",
        texto:
          "Dividir, esperar a vez, cuidar do colega: os valores são vividos desde os primeiros anos.",
      },
      {
        titulo: "Família por perto",
        texto: "Escola e família acompanham juntas cada conquista da criança.",
      },
    ],
    cta: "Agendar uma visita",
  },
  {
    slug: "ensino-fundamental",
    fase: "Ensino Fundamental",
    verbo: "Construir",
    texto: "Conhecimento, autonomia e valores se consolidam a cada ano.",
    marcador: "bg-blue",
    foto: "/fotos/fundamental-quadro.webp",
    alt: "Alunos do Ensino Fundamental resolvendo contas no quadro branco",
    titulo: "Base sólida para crescer com autonomia.",
    intro:
      "No Ensino Fundamental, o aluno constrói a base do conhecimento e ganha, ano a ano, mais autonomia e responsabilidade pela própria aprendizagem.",
    destaques: [
      {
        titulo: "Leitura, escrita e cálculo",
        texto:
          "Os fundamentos que acompanham o aluno em todas as áreas do conhecimento.",
      },
      {
        titulo: "Inglês no dia a dia",
        texto:
          "O ensino bilíngue amplia a comunicação e abre caminho para novas culturas.",
      },
      {
        titulo: "Projetos e eventos",
        texto:
          "Joginpe, Folclore, passeios e apresentações tornam o aprendizado vivo.",
      },
      {
        titulo: "Autonomia e responsabilidade",
        texto:
          "O aluno aprende a se organizar, cumprir combinados e trabalhar em equipe.",
      },
    ],
    cta: "Agendar uma visita",
  },
  {
    slug: "ensino-medio",
    fase: "Ensino Médio",
    verbo: "Preparar",
    texto:
      "Aprofundamento e preparação para as escolhas que vêm depois da escola.",
    marcador: "bg-deep",
    foto: "/fotos/medio-arte.webp",
    alt: "Alunos mais velhos pintando sentados ao ar livre",
    titulo: "Aprofundar e se preparar para o que vem depois.",
    intro:
      "No Ensino Médio, o aluno aprofunda os conteúdos e começa a desenhar o próprio caminho, com orientação para fazer escolhas conscientes.",
    destaques: [
      {
        titulo: "Aprofundamento",
        texto:
          "Conteúdos trabalhados com mais profundidade, preparando o aluno para novos desafios.",
      },
      {
        titulo: "ENEM e vestibulares",
        texto:
          "Preparação para as provas que dão acesso à faculdade e a outras oportunidades.",
      },
      {
        titulo: "Projeto de vida",
        texto:
          "Espaço para refletir sobre interesses, talentos e possibilidades de carreira.",
      },
      {
        titulo: "Protagonismo",
        texto:
          "Encenações, esportes e eventos em que o aluno assume a liderança.",
      },
    ],
    cta: "Agendar uma visita",
  },
  {
    slug: "proximos-passos",
    fase: "Próximos passos",
    verbo: "Seguir",
    texto:
      "Faculdade, curso técnico ou trabalho: o aluno escolhe o próprio rumo, com base para decidir.",
    marcador: "border-[7px] border-orange bg-white",
    foto: "/fotos/proximos-passos.webp",
    alt: "Aluno sorrindo e fazendo sinal de positivo durante atividade",
    titulo: "Escolher o próprio rumo, com base para decidir.",
    intro:
      "A formação no CECAB prepara o aluno para seguir o caminho que escolher depois da escola, levando conhecimento e valores para a vida.",
    destaques: [
      {
        titulo: "Faculdade",
        texto: "Base acadêmica para seguir para o ensino superior.",
      },
      {
        titulo: "Curso técnico",
        texto: "Preparação para começar uma formação profissional.",
      },
      {
        titulo: "Mercado de trabalho",
        texto:
          "Responsabilidade, comunicação e trabalho em equipe para os primeiros passos na carreira.",
      },
      {
        titulo: "Valores para a vida",
        texto:
          "Respeito, honestidade e empatia acompanham o aluno em qualquer caminho.",
      },
    ],
    cta: "Falar com a escola",
  },
];
