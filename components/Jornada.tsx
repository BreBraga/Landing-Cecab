import Link from "next/link";
import { ETAPAS } from "@/lib/etapas";
import { InView } from "./ui/InView";
import { Foto } from "./ui/Foto";
import { Reveal } from "./ui/Reveal";

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
            {ETAPAS.map((etapa, i) => (
              <li key={etapa.slug} className="relative pl-20 lg:pl-0">
                <span
                  aria-hidden
                  className={`absolute left-0 top-0 block h-[49px] w-[49px] scale-0 rounded-full transition-transform duration-500 group-data-[inview=true]:scale-100 motion-reduce:scale-100 lg:static ${etapa.marcador}`}
                  style={{ transitionDelay: `${300 + i * 350}ms` }}
                />
                <Link href={`/etapas/${etapa.slug}`} className="group/card block">
                  <span className="block text-xs font-extrabold uppercase tracking-[0.14em] text-blue lg:mt-8">
                    {etapa.fase}
                  </span>
                  <span className="mt-2 block font-display text-5xl font-semibold uppercase leading-none tracking-[-0.03em] text-deep transition-colors group-hover/card:text-orange">
                    {etapa.verbo}
                  </span>
                  <span className="mt-4 block text-[15px] leading-relaxed text-muted">
                    {etapa.texto}
                  </span>
                  <Foto
                    src={etapa.foto}
                    alt={etapa.alt}
                    className={`mt-6 aspect-[4/3] rounded-[24px] bg-soft transition-transform duration-300 group-hover/card:scale-[1.02] ${i % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
                  />
                  <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-soft px-4 py-2 text-[13px] font-extrabold text-blue transition-colors group-hover/card:bg-orange group-hover/card:text-deep">
                    Saiba mais
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover/card:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </InView>
      </div>
    </section>
  );
}
