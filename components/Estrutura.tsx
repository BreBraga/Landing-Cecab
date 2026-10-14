import { Foto } from "./ui/Foto";
import { Reveal } from "./ui/Reveal";

const ESPACOS = [
  {
    nome: "Brinquedoteca",
    span: "col-span-2 row-span-2",
    src: "/fotos/mucaja-brinquedoteca.webp",
    alt: "Brinquedoteca colorida com escorregadores e piscina de bolinhas",
  },
  {
    nome: "Sala de cinema",
    span: "col-span-2",
    src: "/fotos/mucaja-cinema.webp",
    alt: "Sala de cinema com telão, almofadas laranja e cadeiras",
  },
  {
    nome: "Salas de aula",
    span: "",
    src: "/fotos/mucaja-sala-de-aula.webp",
    alt: "Sala de aula com carteiras verdes e murais pedagógicos",
  },
  {
    nome: "Secretaria",
    span: "",
    src: "/fotos/mucaja-secretaria.webp",
    alt: "Secretaria da escola com estantes laranja",
  },
  {
    nome: "Quadra coberta",
    span: "",
    src: "/fotos/quadra-futsal.webp",
    alt: "Alunos jogando futsal na quadra coberta",
  },
  {
    nome: "Cantinho da leitura",
    span: "",
    src: "/fotos/leitura-biblioteca.webp",
    alt: "Professora contando história para crianças ao lado da estante de livros",
  },
  {
    nome: "Pátio",
    span: "col-span-2",
    src: "/fotos/patio.webp",
    alt: "Alunos reunidos no pátio da escola",
  },
];

export function Estrutura() {
  return (
    <section id="estrutura" className="bg-cream py-20 md:py-[110px]">
      <div className="wrap">
        <Reveal className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow text-blue">Estrutura</p>
            <h2 className="ds-h2 mt-6 text-deep">
              Espaços para
              <br />
              <span className="text-orange">aprender e conviver.</span>
            </h2>
          </div>
          <p className="max-w-lg text-lg leading-relaxed text-muted">
            Ambientes pensados para cada idade, onde as aulas, os projetos e os
            momentos de convivência acontecem.
          </p>
        </Reveal>

        <ul className="mt-16 grid auto-rows-[150px] grid-cols-2 gap-3 md:auto-rows-[210px] md:grid-cols-4 md:gap-4">
          {ESPACOS.map((espaco) => (
            <li
              key={espaco.nome}
              className={`group relative overflow-hidden rounded-[28px] ${espaco.span}`}
            >
              <Foto
                src={espaco.src}
                alt={espaco.alt}
                label="Foto em breve"
                className="h-full bg-soft transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute bottom-3 left-3 rounded-full border-[3px] border-blue bg-cream px-3 py-1.5 text-[11px] font-extrabold text-blue transition-colors duration-300 group-hover:bg-blue group-hover:text-white md:bottom-4 md:left-4 md:px-3.5 md:text-xs">
                {espaco.nome}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
