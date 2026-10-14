import { Foto } from "./ui/Foto";
import { Reveal } from "./ui/Reveal";

export function Proposta() {
  return (
    <section id="proposta" className="relative overflow-hidden bg-white py-20 md:py-[110px]">
      <span aria-hidden className="ghost -right-[2vw] top-[70px] text-[23vw] text-[#eef3f8]">
        SOBRE
      </span>
      <div className="wrap relative z-10 grid items-center gap-16 lg:grid-cols-2 lg:gap-[75px]">
        <Reveal>
          <p className="eyebrow text-blue">Nossa proposta</p>
          <h2 className="ds-h2 my-6 text-deep">
            Conhecimento.
            <br />
            <span className="text-orange">Caráter.</span>
            <br />
            Futuro.
          </h2>
          <p className="max-w-[550px] text-lg leading-relaxed">
            O CECAB vai além da transmissão de conteúdo. Da Educação Infantil ao
            Ensino Médio, o aluno aprende, convive e desenvolve autonomia,
            responsabilidade e os valores que vão acompanhá-lo pela vida.
          </p>
        </Reveal>

        <div className="relative h-[400px] md:h-[470px]">
          <div
            aria-hidden
            className="absolute inset-[25px_30px_10px_40px] rotate-3 rounded-[45%_45%_25px_25px] bg-soft"
          />
          <Foto
            src="/fotos/aula-pintura.webp"
            alt="Alunos do CECAB pintando em uma mesa colorida durante a aula"
            position="50% 45%"
            className="absolute inset-[0_10px_0_0] rounded-[160px_35px_160px_35px] border-[10px] border-cream bg-[#d5e3f2]"
          />
          <span className="absolute -left-2 bottom-[35px] -rotate-[8deg] rounded-full border-[3px] border-blue bg-white px-[18px] py-2.5 font-extrabold text-blue md:-left-5">
            #Acolhimento
          </span>
          <span className="absolute -right-1 top-[60px] rotate-[9deg] rounded-full border-[3px] border-blue bg-blue px-[18px] py-2.5 font-extrabold text-white md:-right-2.5">
            #FamíliaCECAB
          </span>
        </div>
      </div>
    </section>
  );
}
