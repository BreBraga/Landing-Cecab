import { Reveal } from "./ui/Reveal";

const PILARES = [
  {
    titulo: "Ensino bilíngue",
    texto:
      "Comunicar-se em outra língua abre portas para novas culturas e novas possibilidades.",
    estilo: "bg-blue text-white",
  },
  {
    titulo: "Valores cristãos",
    texto:
      "Respeito, honestidade e cuidado com o outro fazem parte da rotina da escola.",
    estilo: "bg-orange text-deep",
  },
  {
    titulo: "Família por perto",
    texto:
      "Escola e família acompanham juntas cada etapa da vida escolar do aluno.",
    estilo: "bg-soft text-deep",
  },
];

export function Pilares() {
  return (
    <section className="bg-cream py-20 md:py-[110px]">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-blue">Diferenciais</p>
          <h2 className="ds-h2 my-6 text-deep">
            O jeito CECAB
            <br />
            de <span className="text-orange">educar.</span>
          </h2>
        </Reveal>
        <div className="mt-[50px] grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {PILARES.map((pilar, i) => (
            <article
              key={pilar.titulo}
              className={`group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[32px] p-7 transition-transform duration-300 hover:-translate-y-1.5 lg:min-h-[350px] ${i === PILARES.length - 1 ? "md:col-span-2 lg:col-span-1" : ""} ${pilar.estilo}`}
            >
              <span
                aria-hidden
                className="absolute left-[35px] top-[45px] h-[95px] w-[95px] rounded-full border-[6px] border-current opacity-75 transition-transform duration-500 group-hover:rotate-[20deg] group-hover:scale-110"
              >
                <span className="absolute -bottom-[30px] -right-[50px] text-[42px] leading-none">
                  ✦
                </span>
              </span>
              <h3 className="font-heading text-[26px] font-extrabold leading-none">
                {pilar.titulo}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed opacity-90">
                {pilar.texto}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
