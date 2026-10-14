/* eslint-disable @next/next/no-img-element */
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
      </div>
    </section>
  );
}
