"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/constants";
import { InView } from "./ui/InView";
import { Foto } from "./ui/Foto";
import { PillButton } from "./ui/PillButton";
import { Reveal } from "./ui/Reveal";

type Etapa = {
  id: string;
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

const ETAPAS: Etapa[] = [
  {
    id: "infantil",
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
    cta: "Conhecer a Educação Infantil",
  },
  {
    id: "fundamental",
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
    cta: "Conhecer o Ensino Fundamental",
  },
  {
    id: "medio",
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
    cta: "Conhecer o Ensino Médio",
  },
  {
    id: "proximos",
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

function Detalhe({ etapa }: { etapa: Etapa }) {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-deep p-7 text-white md:p-11">
      <span
        aria-hidden
        className="absolute -right-16 -top-16 h-[220px] w-[220px] rounded-full border-[40px] border-white/[0.06]"
      />
      <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">{etapa.fase}</p>
          <p className="mt-5 font-display text-[clamp(34px,4.4vw,60px)] font-semibold uppercase leading-[0.92] tracking-[-0.03em]">
            {etapa.titulo}
          </p>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-[#d8e3ef]">
            {etapa.intro}
          </p>
          <PillButton
            href={whatsappLink(`Olá! Quero saber mais sobre: ${etapa.fase}, no CECAB.`)}
            className="mt-8"
          >
            {etapa.cta} ↗
          </PillButton>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {etapa.destaques.map((d) => (
            <li key={d.titulo} className="rounded-[24px] bg-white/[0.07] p-6">
              <span
                aria-hidden
                className="grid h-9 w-9 place-items-center rounded-full bg-orange text-sm font-black text-deep"
              >
                ✓
              </span>
              <p className="mt-4 font-heading text-lg font-extrabold leading-tight">
                {d.titulo}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-[#d8e3ef]">
                {d.texto}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Jornada() {
  const [aberta, setAberta] = useState<string | null>(null);
  const etapaAberta = ETAPAS.find((e) => e.id === aberta);

  return (
    <section id="jornada" className="bg-white py-20 md:py-[110px]">
      <div className="wrap">
        <Reveal className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow text-blue">Jornada</p>
            <h2 className="ds-h2 mt-6 text-deep">
              Um rumo para
              <br />
              <span className="text-orange">cada fase.</span>
            </h2>
          </div>
          <p className="max-w-lg text-lg leading-relaxed text-muted">
            Da primeira sala de aula às escolhas depois da escola, o CECAB
            acompanha o aluno em cada etapa da formação. Clique em uma fase para
            saber mais.
          </p>
        </Reveal>

        <InView className="relative mt-20">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[23px] hidden h-1 origin-left scale-x-0 rounded-full bg-soft transition-transform duration-[1600ms] ease-out group-data-[inview=true]:scale-x-100 motion-reduce:scale-x-100 lg:block"
          />
          <div
            aria-hidden
            className="absolute bottom-6 left-[22px] top-0 w-1 origin-top scale-y-0 rounded-full bg-soft transition-transform duration-[1600ms] ease-out group-data-[inview=true]:scale-y-100 motion-reduce:scale-y-100 lg:hidden"
          />

          <ol className="relative grid gap-14 lg:grid-cols-4 lg:gap-8">
            {ETAPAS.map((etapa, i) => {
              const ativa = aberta === etapa.id;
              return (
                <li key={etapa.id} className="relative pl-20 lg:pl-0">
                  <span
                    aria-hidden
                    className={`absolute left-0 top-0 block h-[49px] w-[49px] scale-0 rounded-full transition-transform duration-500 group-data-[inview=true]:scale-100 motion-reduce:scale-100 lg:static ${etapa.marcador} ${ativa ? "ring-4 ring-orange/30 ring-offset-4" : ""}`}
                    style={{ transitionDelay: `${300 + i * 350}ms` }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const abrir = !ativa;
                      setAberta(abrir ? etapa.id : null);
                      if (abrir && window.matchMedia("(min-width: 1024px)").matches) {
                        requestAnimationFrame(() =>
                          document
                            .getElementById(`jornada-${etapa.id}`)
                            ?.scrollIntoView({ behavior: "smooth", block: "nearest" })
                        );
                      }
                    }}
                    aria-expanded={ativa}
                    className="group/card block w-full text-left"
                  >
                    <span className="block text-xs font-extrabold uppercase tracking-[0.14em] text-blue lg:mt-8">
                      {etapa.fase}
                    </span>
                    <span
                      className={`mt-2 block font-display text-5xl font-semibold uppercase leading-none tracking-[-0.03em] transition-colors ${ativa ? "text-orange" : "text-deep group-hover/card:text-orange"}`}
                    >
                      {etapa.verbo}
                    </span>
                    <span className="mt-4 block text-[15px] leading-relaxed text-muted">
                      {etapa.texto}
                    </span>
                    <Foto
                      src={etapa.foto}
                      alt={etapa.alt}
                      className={`mt-6 aspect-[4/3] rounded-[24px] bg-soft transition-transform duration-300 group-hover/card:scale-[1.02] ${i % 2 === 0 ? "-rotate-1" : "rotate-1"} ${ativa ? "ring-4 ring-orange" : ""}`}
                    />
                    <span
                      className={`mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-extrabold transition-colors ${ativa ? "bg-orange text-deep" : "bg-soft text-blue group-hover/card:bg-orange group-hover/card:text-deep"}`}
                    >
                      {ativa ? "Fechar" : "Saiba mais"}
                      <span
                        aria-hidden
                        className={`text-base leading-none transition-transform duration-300 ${ativa ? "rotate-45" : ""}`}
                      >
                        +
                      </span>
                    </span>
                  </button>

                  {ativa && (
                    <div
                      id={`jornada-${etapa.id}-mobile`}
                      role="region"
                      aria-label={etapa.fase}
                      className="rise mt-6 lg:hidden"
                    >
                      <Detalhe etapa={etapa} />
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </InView>

        {etapaAberta && (
          <div
            id={`jornada-${etapaAberta.id}`}
            role="region"
            aria-label={etapaAberta.fase}
            className="rise mt-12 hidden lg:block"
            key={etapaAberta.id}
          >
            <Detalhe etapa={etapaAberta} />
          </div>
        )}
      </div>
    </section>
  );
}
