import { InView } from "./ui/InView";
import { Foto } from "./ui/Foto";
import { Reveal } from "./ui/Reveal";

const ETAPAS = [
  {
    fase: "Educação Infantil",
    verbo: "Descobrir",
    texto:
      "As primeiras experiências de aprendizado, convivência e descoberta do mundo.",
    marcador: "bg-orange",
    foto: "/fotos/infantil-pintura.webp",
    alt: "Crianças da Educação Infantil pintando juntas em uma mesa",
  },
  {
    fase: "Ensino Fundamental",
    verbo: "Construir",
    texto: "Conhecimento, autonomia e valores se consolidam a cada ano.",
    marcador: "bg-blue",
    foto: "/fotos/fundamental-quadro.webp",
    alt: "Alunos do Ensino Fundamental resolvendo contas no quadro branco",
  },
  {
    fase: "Ensino Médio",
    verbo: "Preparar",
    texto:
      "Aprofundamento e preparação para as escolhas que vêm depois da escola.",
    marcador: "bg-deep",
    foto: "/fotos/medio-arte.webp",
    alt: "Alunos mais velhos pintando sentados ao ar livre",
  },
  {
    fase: "Próximos passos",
    verbo: "Seguir",
    texto:
      "Faculdade, curso técnico ou trabalho: o aluno escolhe o próprio rumo, com base para decidir.",
    marcador: "border-[7px] border-orange bg-white",
    foto: "/fotos/proximos-passos.webp",
    alt: "Aluno sorrindo e fazendo sinal de positivo durante atividade",
  },
];

export function Jornada() {
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
            acompanha o aluno em cada etapa da formação.
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
            {ETAPAS.map((etapa, i) => (
              <li key={etapa.fase} className="relative pl-20 lg:pl-0">
                <span
                  aria-hidden
                  className={`absolute left-0 top-0 block h-[49px] w-[49px] scale-0 rounded-full transition-transform duration-500 group-data-[inview=true]:scale-100 motion-reduce:scale-100 lg:static ${etapa.marcador}`}
                  style={{ transitionDelay: `${300 + i * 350}ms` }}
                />
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-blue lg:mt-8">
                  {etapa.fase}
                </p>
                <h3 className="mt-2 font-display text-5xl font-semibold uppercase leading-none tracking-[-0.03em] text-deep">
                  {etapa.verbo}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  {etapa.texto}
                </p>
                <Foto
                  src={etapa.foto}
                  alt={etapa.alt}
                  className={`mt-6 aspect-[4/3] rounded-[24px] bg-soft ${i % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
                />
              </li>
            ))}
          </ol>
        </InView>
      </div>
    </section>
  );
}
