import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AgendarVisita } from "@/components/AgendarVisita";
import { Foto } from "@/components/ui/Foto";
import { PillButton } from "@/components/ui/PillButton";
import { whatsappLink } from "@/lib/constants";
import { ETAPAS } from "@/lib/etapas";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return ETAPAS.map((etapa) => ({ slug: etapa.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const etapa = ETAPAS.find((e) => e.slug === params.slug);
  if (!etapa) return {};
  return {
    title: `${etapa.fase} | CECAB`,
    description: etapa.intro,
  };
}

export default function EtapaPage({ params }: Props) {
  const indice = ETAPAS.findIndex((e) => e.slug === params.slug);
  if (indice === -1) notFound();
  const etapa = ETAPAS[indice];
  const anterior = ETAPAS[indice - 1];
  const proxima = ETAPAS[indice + 1];

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-blue pt-[86px] text-white">
          <span
            aria-hidden
            className="ghost -bottom-[3vw] -left-[2vw] text-[22vw] leading-[0.72] text-white/[0.055]"
          >
            {etapa.verbo}
          </span>
          <div
            aria-hidden
            className="absolute -right-[150px] -top-[190px] h-[300px] w-[300px] rounded-full bg-orange md:-right-[330px] md:-top-[310px] md:h-[600px] md:w-[600px]"
          />

          <div className="wrap relative z-10 grid items-center gap-12 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-16">
            <div>
              <div className="rise relative z-10">
                <Link
                  href="/#jornada"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-[13px] font-bold text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <span aria-hidden>←</span> Voltar para a jornada
                </Link>
              </div>
              <div className="rise mt-8" style={{ animationDelay: "80ms" }}>
                <p className="eyebrow">
                  Etapa {indice + 1} de {ETAPAS.length} · {etapa.fase}
                </p>
              </div>
              <h1
                className="rise mt-6 font-display text-[clamp(64px,10vw,140px)] font-semibold uppercase leading-[0.82] tracking-[-0.055em]"
                style={{ animationDelay: "160ms" }}
              >
                {etapa.verbo}
                <span className="text-orange">.</span>
              </h1>
              <p
                className="rise mt-6 max-w-xl font-heading text-[clamp(22px,2.6vw,32px)] font-extrabold leading-tight"
                style={{ animationDelay: "240ms" }}
              >
                {etapa.titulo}
              </p>
              <p
                className="rise mt-5 max-w-xl text-[17px] leading-relaxed text-[#dbe9f8]"
                style={{ animationDelay: "320ms" }}
              >
                {etapa.intro}
              </p>
              <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "400ms" }}>
                <PillButton
                  href={whatsappLink(`Olá! Quero saber mais sobre: ${etapa.fase}, no CECAB.`)}
                >
                  Falar no WhatsApp ↗
                </PillButton>
                <PillButton href="#agendar" variant="outline">
                  Agendar uma visita
                </PillButton>
              </div>
            </div>

            <div className="rise relative" style={{ animationDelay: "300ms" }}>
              <div className="rotate-2 rounded-[32px] bg-cream p-3 shadow-[0_30px_60px_rgba(5,46,99,0.45)]">
                <Foto
                  src={etapa.foto}
                  alt={etapa.alt}
                  priority
                  className="aspect-[4/3] rounded-[24px] bg-soft lg:aspect-[5/4]"
                />
              </div>
              <span className="absolute -bottom-4 left-4 -rotate-6 rounded-full bg-orange px-5 py-3 text-[13px] font-extrabold text-deep shadow-lg">
                {etapa.fase}
              </span>
            </div>
          </div>
        </section>

        <section className="bg-cream py-20 md:py-[110px]">
          <div className="wrap">
            <p className="eyebrow text-blue">O que o aluno vive</p>
            <h2 className="ds-h2 my-6 text-deep">
              Nesta <span className="text-orange">fase.</span>
            </h2>
            <ul className="mt-12 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
              {etapa.destaques.map((d, i) => (
                <li
                  key={d.titulo}
                  className={`flex flex-col rounded-[28px] p-7 ${
                    ["bg-blue text-white", "bg-orange text-deep", "bg-deep text-white", "bg-white text-deep"][i % 4]
                  }`}
                >
                  <span
                    aria-hidden
                    className="grid h-11 w-11 place-items-center rounded-full border-[3px] border-current text-lg font-black"
                  >
                    ✓
                  </span>
                  <h3 className="mt-10 font-heading text-[22px] font-extrabold leading-tight">
                    {d.titulo}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed opacity-90">{d.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="agendar" className="bg-white py-20 md:py-[110px]">
          <div className="wrap grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow text-blue">Venha conhecer</p>
              <h2 className="ds-h2 my-6 text-deep">
                Agende sua
                <br />
                <span className="text-orange">visita.</span>
              </h2>
              <p className="max-w-lg text-lg leading-relaxed text-muted">
                Escolha a unidade mais perto de você e converse com a equipe
                sobre esta fase: {etapa.fase}.
              </p>
            </div>
            <div className="rounded-[32px] bg-soft p-7 md:p-10">
              <AgendarVisita />
              <p className="mt-3 text-sm text-muted">
                Você será direcionado ao WhatsApp da escola.
              </p>
            </div>
          </div>
        </section>

        <nav aria-label="Outras fases" className="bg-deep text-white">
          <div className="wrap grid gap-px sm:grid-cols-2">
            {anterior ? (
              <Link
                href={`/etapas/${anterior.slug}`}
                className="group py-10 pr-6 transition-colors hover:text-orange2"
              >
                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#8eacd0]">
                  ← Fase anterior
                </span>
                <span className="mt-2 block font-display text-[clamp(36px,5vw,56px)] font-semibold uppercase leading-none tracking-[-0.03em]">
                  {anterior.verbo}
                </span>
                <span className="mt-1 block text-sm text-[#d8e3ef]">{anterior.fase}</span>
              </Link>
            ) : (
              <Link href="/#jornada" className="group py-10 pr-6 transition-colors hover:text-orange2">
                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#8eacd0]">
                  ← Voltar
                </span>
                <span className="mt-2 block font-display text-[clamp(36px,5vw,56px)] font-semibold uppercase leading-none tracking-[-0.03em]">
                  Jornada
                </span>
                <span className="mt-1 block text-sm text-[#d8e3ef]">Todas as fases</span>
              </Link>
            )}
            {proxima ? (
              <Link
                href={`/etapas/${proxima.slug}`}
                className="group border-t border-white/10 py-10 transition-colors hover:text-orange2 sm:border-l sm:border-t-0 sm:pl-10 sm:text-right"
              >
                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#8eacd0]">
                  Próxima fase →
                </span>
                <span className="mt-2 block font-display text-[clamp(36px,5vw,56px)] font-semibold uppercase leading-none tracking-[-0.03em]">
                  {proxima.verbo}
                </span>
                <span className="mt-1 block text-sm text-[#d8e3ef]">{proxima.fase}</span>
              </Link>
            ) : (
              <Link
                href="/#jornada"
                className="group border-t border-white/10 py-10 transition-colors hover:text-orange2 sm:border-l sm:border-t-0 sm:pl-10 sm:text-right"
              >
                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#8eacd0]">
                  Voltar →
                </span>
                <span className="mt-2 block font-display text-[clamp(36px,5vw,56px)] font-semibold uppercase leading-none tracking-[-0.03em]">
                  Jornada
                </span>
                <span className="mt-1 block text-sm text-[#d8e3ef]">Todas as fases</span>
              </Link>
            )}
          </div>
        </nav>
      </main>
      <Footer />
    </>
  );
}
