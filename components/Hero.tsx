/* eslint-disable @next/next/no-img-element */
import { WHATSAPP_URL } from "@/lib/constants";
import { PillButton } from "./ui/PillButton";
import { Foto } from "./ui/Foto";
import { RingWord } from "./ui/RingWord";

const TAG = "absolute z-[5] whitespace-nowrap rounded-full px-[14px] py-2.5 text-[10px] font-extrabold sm:px-[18px] sm:py-3 sm:text-[13px]";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-blue pt-[86px] text-white">
      <span
        aria-hidden
        className="ghost -bottom-[4vw] -left-[3vw] text-[27vw] leading-[0.72] text-white/[0.055]"
      >
        CECAB
      </span>
      <div
        aria-hidden
        className="absolute -right-[150px] -top-[190px] h-[300px] w-[300px] rounded-full bg-orange md:-right-[330px] md:-top-[310px] md:h-[600px] md:w-[600px]"
      />
      <div
        aria-hidden
        className="absolute -left-[130px] top-[130px] h-[280px] w-[280px] rounded-full border-[55px] border-white/[0.09]"
      />

      <div className="wrap relative z-10 grid items-center gap-6 pb-10 pt-12 lg:min-h-[734px] lg:grid-cols-[0.88fr_1.12fr] lg:py-0">
        <div>
          <p className="eyebrow rise">CECAB · 4 unidades</p>
          <h1
            className="rise mb-[26px] mt-[25px] max-w-[690px] font-display text-[clamp(54px,9vw,132px)] font-semibold uppercase leading-[0.82] tracking-[-0.055em]"
            style={{ animationDelay: "120ms" }}
          >
            Novo <RingWord id="orbita-rumo">rumo</RingWord>
            <br />
            no saber.
          </h1>
          <p
            className="rise max-w-[500px] text-base leading-relaxed text-[#dbe9f8]"
            style={{ animationDelay: "240ms" }}
          >
            Escola particular da Educação Infantil ao Ensino Médio, com ensino
            bilíngue e formação em valores cristãos. Conhecimento e caráter
            crescendo juntos.
          </p>
          <div
            className="rise mt-[30px] flex flex-wrap gap-3"
            style={{ animationDelay: "360ms" }}
          >
            <PillButton href={WHATSAPP_URL}>Agendar uma visita ↘</PillButton>
            <PillButton href="#proposta" variant="outline">
              Conhecer a escola
            </PillButton>
          </div>
        </div>

        <div
          className="rise relative h-[450px] sm:h-[530px] lg:h-[640px]"
          style={{ animationDelay: "300ms" }}
        >
          <Foto
            src="/fotos/hero-leitura.webp"
            alt="Duas alunas do CECAB sorrindo enquanto leem juntas sentadas na grama"
            position="50% 38%"
            priority
            className="absolute bottom-0 right-[-3%] h-[91%] w-[91%] rounded-[46%_46%_40px_40px] bg-soft [clip-path:polygon(8%_0,100%_7%,95%_100%,0_100%,0_16%)]"
          />
          <img
            src="/cube.png"
            alt=""
            aria-hidden
            width={512}
            height={512}
            className="float absolute -left-2 top-0 z-[6] w-[96px] drop-shadow-[0_28px_30px_rgba(5,46,99,0.5)] sm:w-[130px] lg:-left-6 lg:top-4 lg:w-[150px]"
          />
          <span className={`${TAG} right-0 top-[95px] rotate-[7deg] bg-orange text-deep`}>
            #EducaçãoComPropósito
          </span>
          <span className={`${TAG} -left-2 top-[235px] -rotate-[8deg] bg-white text-blue`}>
            #ValoresQueTransformam
          </span>
          <span className={`${TAG} bottom-[55px] right-[10px] -rotate-[4deg] bg-yellow text-deep`}>
            Matrículas 2027 ✦
          </span>
          <div className="absolute bottom-[55px] left-[-18px] z-[5] hidden w-[205px] rounded-[24px] bg-white/[0.92] px-[22px] py-5 text-deep shadow-[0_22px_50px_#052e6340] sm:block">
            <strong className="block font-display text-[45px] font-bold leading-none text-blue">
              4
            </strong>
            <small className="mt-2 block text-[13px] leading-snug">
              unidades conectadas pelo mesmo propósito.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
