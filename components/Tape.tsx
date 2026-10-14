const PALAVRAS = ["Acolhimento", "Respeito", "Conhecimento", "Fé", "Propósito", "Futuro"];
const SEQUENCIA = [...PALAVRAS, ...PALAVRAS, ...PALAVRAS];

export function Tape() {
  return (
    <div className="relative z-20 -mt-[15px] overflow-x-clip">
      <div className="-mx-[2vw] -rotate-1 overflow-hidden bg-orange text-deep">
        <p className="sr-only">{PALAVRAS.join(", ")}</p>
        <div aria-hidden className="marquee flex w-max">
          {[0, 1].map((grupo) => (
            <div
              key={grupo}
              className="flex whitespace-nowrap py-4 font-heading text-sm font-extrabold uppercase tracking-[0.04em]"
            >
              {SEQUENCIA.map((palavra, i) => (
                <span key={i} className="px-3">
                  {palavra} •
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
