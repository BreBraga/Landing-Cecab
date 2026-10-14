import { Foto } from "./ui/Foto";
import { Reveal } from "./ui/Reveal";

const EVENTOS = [
  {
    nome: "Joginpe",
    tag: "#Joginpe",
    tagEstilo: "bg-orange text-deep -rotate-[6deg]",
    src: "/fotos/evento-joginpe.webp",
    alt: "Painel do Joginpe, Jogos e Gincana Pedagógicos, decorado com balões azuis",
    position: "50% 45%",
    texto:
      "Jogos e gincana pedagógicos: esporte, conhecimento e trabalho em equipe na mesma competição.",
  },
  {
    nome: "Geek Style",
    tag: "#GeekStyle",
    tagEstilo: "bg-white text-blue rotate-[5deg]",
    src: "/fotos/evento-geek-style.webp",
    alt: "Dois alunos caracterizados na festa Geek Style do CECAB",
    position: "50% 30%",
    texto:
      "Festa temática em que os alunos se caracterizam e celebram a cultura geek com criatividade.",
  },
  {
    nome: "Folclore",
    tag: "#FolcloreBrasileiro",
    tagEstilo: "bg-yellow text-deep -rotate-[4deg]",
    src: "/fotos/evento-folclore.webp",
    alt: "Crianças da Educação Infantil caracterizadas dançando de mãos dadas na festa do Folclore",
    position: "50% 55%",
    texto:
      "Danças, personagens e tradições brasileiras apresentados pelos pequenos.",
  },
  {
    nome: "Páscoa",
    tag: "#FéQueTransforma",
    tagEstilo: "bg-orange text-deep rotate-[5deg]",
    src: "/fotos/evento-pascoa.webp",
    alt: "Aluno com coroa de espinhos carregando a cruz na encenação da Páscoa",
    position: "50% 30%",
    texto:
      "Os alunos levam ao palco a história da Paixão de Cristo, vivendo na prática os valores da escola.",
  },
  {
    nome: "Culinária",
    tag: "#MãoNaMassa",
    tagEstilo: "bg-white text-blue -rotate-[5deg]",
    src: "/fotos/evento-culinaria.webp",
    alt: "Crianças de uniforme laranja montando o próprio lanche com pão e alface",
    position: "50% 40%",
    texto:
      "As crianças preparam o próprio lanche e aprendem sobre alimentação de um jeito divertido.",
  },
  {
    nome: "Esportes",
    tag: "#EspíritoDeEquipe",
    tagEstilo: "bg-yellow text-deep rotate-[4deg]",
    src: "/fotos/evento-esportes.webp",
    alt: "Time de alunos abraçado em roda antes de uma partida",
    position: "50% 40%",
    texto:
      "Futsal, torneios e o espírito de equipe dentro e fora da quadra.",
  },
];

const PASSEIOS = [
  {
    nome: "Parque dos Dinossauros",
    src: "/fotos/passeio-dinossauros.webp",
    alt: "Alunos escavando um esqueleto de dinossauro",
  },
  {
    nome: "Maracanã",
    src: "/fotos/passeio-maracana.webp",
    alt: "Turma do CECAB nas arquibancadas do Maracanã",
  },
  {
    nome: "Fazendinha",
    src: "/fotos/passeio-fazenda.webp",
    alt: "Crianças alimentando cabras no passeio à fazenda",
  },
];

export function VidaEscolar() {
  return (
    <section id="vida" className="relative overflow-hidden bg-blue py-20 text-white md:py-[110px]">
      <div
        aria-hidden
        className="absolute -left-[140px] top-[60px] h-[300px] w-[300px] rounded-full border-[55px] border-white/[0.07]"
      />
      <div className="wrap relative">
        <Reveal className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">Vida no CECAB</p>
            <h2 className="ds-h2 mt-6">
              Aprender também
              <br />é <span className="text-orange2">viver.</span>
            </h2>
          </div>
          <p className="max-w-lg text-lg leading-relaxed text-[#dbe9f8]">
            Eventos, festas e passeios que fazem parte da rotina da escola e
            ficam na memória dos alunos.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {EVENTOS.map((evento) => (
            <article
              key={evento.nome}
              className="group flex flex-col rounded-[28px] bg-cream p-3 text-deep transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="relative">
                <Foto
                  src={evento.src}
                  alt={evento.alt}
                  position={evento.position}
                  className="aspect-[4/3] rounded-[20px] bg-soft"
                />
                <span
                  className={`absolute -top-3 right-4 rounded-full px-4 py-2 text-[13px] font-extrabold shadow-lg transition-transform duration-300 group-hover:rotate-0 ${evento.tagEstilo}`}
                >
                  {evento.tag}
                </span>
              </div>
              <div className="px-4 pb-4 pt-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-blue">
                  Evento
                </p>
                <h3 className="mt-2 font-display text-[40px] font-semibold uppercase leading-none tracking-[-0.03em]">
                  {evento.nome}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink">
                  {evento.texto}
                </p>
              </div>
            </article>
          ))}

          <article className="relative grid gap-8 overflow-hidden rounded-[28px] bg-orange p-7 text-deep md:col-span-2 md:p-9 lg:col-span-3 lg:grid-cols-[0.8fr_1.6fr] lg:items-center">
            <span
              aria-hidden
              className="absolute -left-12 -top-12 h-[170px] w-[170px] rounded-full border-[6px] border-deep/20"
            />
            <div className="relative">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em]">
                Passeios
              </p>
              <h3 className="mt-2 font-display text-[clamp(40px,4.5vw,56px)] font-semibold uppercase leading-[0.95] tracking-[-0.03em]">
                Aprender fora da sala
              </h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed">
                Cada passeio vira conteúdo, conversa e lembrança para a turma.
              </p>
            </div>
            <ul className="relative grid gap-4 sm:grid-cols-3">
              {PASSEIOS.map((passeio, i) => (
                <li
                  key={passeio.nome}
                  className={`rounded-[22px] bg-cream p-2 shadow-[0_18px_30px_rgba(5,46,99,0.25)] transition-transform duration-300 hover:rotate-0 ${["-rotate-2", "rotate-2", "-rotate-1"][i]}`}
                >
                  <Foto
                    src={passeio.src}
                    alt={passeio.alt}
                    className="aspect-[4/3] rounded-[16px] bg-soft sm:aspect-square"
                  />
                  <p className="px-2 pb-1 pt-2.5 text-sm font-extrabold">
                    {passeio.nome}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
