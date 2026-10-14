import { AgendarVisita } from "./AgendarVisita";
import { Foto } from "./ui/Foto";
import { Reveal } from "./ui/Reveal";

export function Contato() {
  return (
    <section id="contato" className="bg-blue py-20 text-white md:py-[110px]">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Família e escola</p>
          <h2 className="ds-h2 my-6">
            Educar é
            <br />
            caminhar <span className="text-orange2">junto.</span>
          </h2>
        </Reveal>

        <div className="relative mt-[45px] overflow-hidden rounded-[40px] bg-cream p-[30px] text-deep md:p-[55px] lg:min-h-[620px]">
          <span aria-hidden className="ghost -bottom-5 -left-[15px] text-[17vw] text-[#e8eef5]">
            FUTURO
          </span>

          <span className="relative z-[5] mb-8 inline-block rotate-[7deg] rounded-full bg-orange px-[21px] py-3.5 text-sm font-extrabold text-deep lg:absolute lg:right-[34%] lg:top-[45px] lg:mb-0">
            Matrículas 2027 ↗
          </span>

          <div className="relative z-10 max-w-[560px]">
            <p className="font-display text-[clamp(60px,9vw,118px)] font-semibold uppercase leading-[0.84] tracking-[-0.05em]">
              O futuro
              <br />
              começa
              <br />
              <em className="not-italic text-orange">aqui.</em>
            </p>
            <p className="mt-6 max-w-[420px] text-[17px] leading-relaxed text-ink">
              Escola e família são parceiras na formação de cada aluno. Escolha
              a unidade e agende uma visita para conhecer o CECAB de perto.
            </p>
            <AgendarVisita className="mt-8 max-w-[500px]" />
          </div>

          <Foto
            src="/fotos/familia-reuniao.webp"
            alt="Professora do CECAB e uma mãe sorrindo durante reunião na escola"
            position="40% 50%"
            className="absolute -bottom-[30px] right-[3%] hidden h-[520px] w-[400px] rounded-[220px_220px_35px_35px] border-[10px] border-blue bg-soft lg:flex xl:w-[430px]"
          />
        </div>
      </div>
    </section>
  );
}
