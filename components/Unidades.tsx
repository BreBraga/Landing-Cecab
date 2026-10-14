import { UNIDADES, whatsappLink } from "@/lib/constants";
import { Foto } from "./ui/Foto";
import { Reveal } from "./ui/Reveal";

const FOTOS_UNIDADES: Record<string, string | undefined> = {
  Mucajá: "/fotos/mucaja-fachada.webp",
};

const ROTACOES = ["-rotate-[7deg]", "rotate-[6deg]", "-rotate-[4deg]", "rotate-[8deg]"];

export function Unidades() {
  return (
    <section id="unidades" className="bg-white py-20 md:py-[110px]">
      <div className="wrap">
        <Reveal className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow text-blue">Unidades</p>
            <h2 className="ds-h2 mt-6 text-deep">
              Quatro unidades,
              <br />
              <span className="text-orange">um propósito.</span>
            </h2>
          </div>
          <p className="max-w-lg text-lg leading-relaxed text-muted">
            Escolha a unidade mais perto de você e fale direto com a equipe pelo
            WhatsApp.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {UNIDADES.map((unidade, i) => (
            <li key={unidade}>
              <a
                href={whatsappLink(
                  `Olá! Quero saber mais sobre a unidade ${unidade} do CECAB.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-[28px] bg-cream p-3 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <Foto
                    src={FOTOS_UNIDADES[unidade]}
                    alt={`Fachada da unidade ${unidade} do CECAB`}
                    label="Foto da unidade em breve"
                    className="aspect-[4/3] rounded-[20px] bg-soft"
                  />
                  <span
                    aria-hidden
                    className={`absolute -bottom-6 left-4 grid h-[52px] w-[52px] place-items-center border-2 border-white bg-orange font-heading text-2xl font-black text-deep shadow-[3px_4px_0_#052E63] transition-transform duration-300 group-hover:rotate-0 ${ROTACOES[i % ROTACOES.length]}`}
                  >
                    {unidade[0]}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-4 pb-4 pt-10">
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-blue">
                    Unidade
                  </p>
                  <h3 className="mt-2 font-display text-[40px] font-semibold uppercase leading-none tracking-[-0.03em] text-deep">
                    {unidade}
                  </h3>
                  <span className="mt-auto pt-6 text-sm font-extrabold text-blue">
                    Falar com esta unidade ↗
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
