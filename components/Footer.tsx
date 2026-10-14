import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  UNIDADES,
  WHATSAPP_URL,
} from "@/lib/constants";
import { Logo } from "./ui/Logo";

const LINKS = [
  { href: "/#proposta", label: "Proposta" },
  { href: "/#valores", label: "Valores" },
  { href: "/#jornada", label: "Jornada" },
  { href: "/#estrutura", label: "Estrutura" },
  { href: "/#vida", label: "Vida escolar" },
  { href: "/#unidades", label: "Unidades" },
];

const ROTULO = "text-xs font-extrabold uppercase tracking-[0.14em]";

export function Footer() {
  return (
    <footer className="bg-orange py-12 text-deep md:py-16">
      <div className="wrap grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo className="w-[200px]" />
          <p className="mt-6 max-w-[260px] font-heading text-[22px] font-extrabold leading-tight">
            Valores que transformam vidas.
          </p>
        </div>

        <div>
          <p className={ROTULO}>Unidades</p>
          <ul className="mt-4 space-y-2 text-sm font-semibold">
            {UNIDADES.map((unidade) => (
              <li key={unidade}>{unidade}</li>
            ))}
          </ul>
        </div>

        <nav aria-label="Rodapé">
          <p className={ROTULO}>Navegar</p>
          <ul className="mt-4 space-y-2 text-sm font-semibold">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className={ROTULO}>Contato</p>
          <ul className="mt-4 space-y-2 text-sm font-semibold">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {INSTAGRAM_HANDLE}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap mt-12 flex flex-col justify-between gap-2 border-t border-deep/20 pt-6 text-sm font-semibold sm:flex-row">
        <span>CECAB · Centro Educacional Carvalho Braga</span>
        <span>Novo rumo no saber.</span>
      </div>
    </footer>
  );
}
