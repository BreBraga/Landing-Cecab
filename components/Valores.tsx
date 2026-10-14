/* eslint-disable @next/next/no-img-element */
import { Foto } from "./ui/Foto";
import { Reveal } from "./ui/Reveal";

const VALORES = [
  { pt: "Amor", en: "Love", texto: "Cuidar de quem está ao lado, com atenção e afeto." },
  {
    pt: "Respeito",
    en: "Respect",
    texto: "Ouvir, esperar a vez e tratar bem colegas, professores e funcionários.",
  },
  {
    pt: "Honestidade",
    en: "Honesty",
    texto: "Falar a verdade e assumir o que fez, mesmo quando é difícil.",
  },
  {
    pt: "Responsabilidade",
    en: "Responsibility",
    texto: "Cumprir combinados e cuidar da própria aprendizagem.",
  },
  { pt: "Empatia", en: "Empathy", texto: "Pensar no que o outro sente antes de agir." },
  {
    pt: "Solidariedade",
    en: "Solidarity",
    texto: "Ajudar quem precisa e aprender a fazer junto.",
  },
];

export function Valores() {
  return (
    <section
      id="valores"
      className="relative overflow-hidden bg-deep py-20 text-white md:py-[110px]"
    >
      <div className="wrap relative">
        <img
          src="/cube.png"
          alt=""
          aria-hidden
          width={512}
          height={512}
          className="float pointer-events-none absolute right-0 top-[-20px] hidden w-[clamp(200px,24vw,330px)] drop-shadow-[0_40px_45px_rgba(0,0,0,0.45)] md:block lg:right-[4%]"
        />
        <Reveal>
          <p className="eyebrow">
            Valores · <span lang="en">Values</span>
          </p>
          <h2 className="ds-h2 my-6">
            Valores que
            <br />
            <span className="text-orange">transformam</span>
            <br />
            vidas.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-[#d8e3ef]">
            Nossa proposta é baseada em valores cristãos, vividos nas pequenas
            escolhas do dia a dia: na sala, no pátio e em casa.
          </p>
        </Reveal>

        <ul className="mt-[55px] border-b border-white/[0.14]">
          {VALORES.map((valor) => (
            <li
              key={valor.pt}
              className="group relative grid items-center gap-x-[30px] gap-y-2 border-t border-white/[0.14] py-6 transition-[padding] duration-300 md:grid-cols-[180px_1fr] md:py-7 md:hover:pl-6"
            >
              <span
                aria-hidden
                className="absolute left-0 top-1/2 hidden h-0 w-1.5 -translate-y-1/2 rounded-full bg-orange transition-all duration-300 group-hover:h-3/5 md:block"
              />
              <small
                lang="en"
                className="text-xs font-bold uppercase tracking-[0.14em] text-[#8eacd0]"
              >
                {valor.en}
              </small>
              <div className="grid gap-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center lg:gap-8">
                <span className="font-display text-[clamp(36px,6vw,68px)] font-semibold uppercase leading-[0.95] transition-colors duration-300 group-hover:text-orange2">
                  {valor.pt}
                </span>
                <p className="text-[17px] leading-relaxed text-[#d8e3ef]">
                  {valor.texto}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <Reveal className="mt-16 md:mt-20">
          <article className="relative grid items-center gap-10 overflow-hidden rounded-[32px] bg-orange p-7 text-deep md:p-12 lg:grid-cols-[1.1fr_1fr]">
            <span
              aria-hidden
              className="absolute -right-16 -top-16 h-[220px] w-[220px] rounded-full border-[40px] border-deep/10"
            />
            <div className="relative">
              <p className="inline-flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-[0.14em]">
                <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-deep">
                  <path d="M10 2h4v6h6v4h-6v10h-4V12H4V8h6z" />
                </svg>
                Momento de fé
              </p>
              <h3 className="mt-4 font-display text-[clamp(64px,10vw,128px)] font-semibold uppercase leading-[0.82] tracking-[-0.05em]">
                Chapel
              </h3>
              <p className="mt-4 font-heading text-[clamp(20px,2.4vw,28px)] font-extrabold leading-tight">
                Educação com princípios cristãos.
              </p>
              <p className="mt-5 max-w-md text-[17px] leading-relaxed">
                Um momento na rotina da escola para oração, reflexão e conversa
                sobre a fé, em que os alunos vivem na prática os valores que
                aprendem.
              </p>
            </div>

            <div className="relative mx-auto h-[300px] w-full max-w-[460px] sm:h-[360px]">
              <div className="absolute left-0 top-0 w-[68%] -rotate-[5deg] rounded-[22px] bg-cream p-2 shadow-[0_22px_40px_rgba(5,46,99,0.3)]">
                <Foto
                  src="/fotos/chapel-oracao.webp"
                  alt="Crianças sentadas em roda, de olhos fechados e mãos juntas, durante momento de oração"
                  className="aspect-square rounded-[16px] bg-soft"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[60%] rotate-[4deg] rounded-[22px] bg-cream p-2 shadow-[0_22px_40px_rgba(5,46,99,0.3)]">
                <Foto
                  src="/fotos/chapel-oracao-2.webp"
                  alt="Alunos orando juntos sentados no chão da escola"
                  className="aspect-square rounded-[16px] bg-soft"
                />
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
