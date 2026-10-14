"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { UNIDADES } from "@/lib/constants";
import { Logo } from "./ui/Logo";

const LINKS = [
  { id: "proposta", label: "Proposta" },
  { id: "valores", label: "Valores" },
  { id: "jornada", label: "Jornada" },
  { id: "estrutura", label: "Estrutura" },
  { id: "vida", label: "Vida escolar" },
  { id: "unidades", label: "Unidades" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    for (const { id } of LINKS) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[padding] duration-300 ${scrolled ? "pt-3" : "pt-0"}`}
      >
        <div
          className={`wrap flex items-center justify-between gap-4 rounded-full transition-all duration-300 ${
            scrolled
              ? "h-16 bg-deep/85 pl-3 pr-2 shadow-[0_18px_40px_rgba(5,46,99,0.35)] ring-1 ring-white/15 backdrop-blur-md"
              : "h-[86px]"
          }`}
        >
          <a href="/#topo" aria-label="CECAB, voltar ao início" className="flex shrink-0 items-center">
            {scrolled ? (
              <span className="flex items-center gap-2">
                <img src="/cube.png" alt="" width={44} height={44} className="h-11 w-11" />
                <span className="font-heading text-lg font-black tracking-tight text-white">
                  CECAB
                </span>
              </span>
            ) : (
              <Logo className="w-[124px] md:w-[150px]" />
            )}
          </a>

          <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={`rounded-full px-4 py-2 text-[13px] font-bold transition-colors ${
                  active === link.id ? "bg-white/15 text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/#contato"
              className={`hidden rounded-full px-5 py-3 text-[13px] font-extrabold transition-all hover:scale-[1.04] sm:inline-flex ${
                scrolled ? "bg-orange text-deep" : "bg-white text-deep"
              }`}
            >
              Agendar visita
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label="Abrir menu"
              className="grid h-11 w-11 place-items-center rounded-full bg-white text-deep lg:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h10" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        id="menu-mobile"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-0 z-[60] flex flex-col overflow-y-auto overflow-x-hidden bg-deep text-white transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <span aria-hidden className="ghost -bottom-[6vw] -left-[4vw] text-[60vw] text-white/[0.04]">
          CB
        </span>
        <div className="wrap relative flex h-[86px] shrink-0 items-center justify-between">
          <Logo className="w-[124px]" />
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="grid h-11 w-11 place-items-center rounded-full bg-white text-deep"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav aria-label="Menu" className="wrap relative mt-4 flex flex-col">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`/#${link.id}`}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-white/10 py-3 font-display text-[clamp(38px,11vw,60px)] font-semibold uppercase leading-none tracking-[-0.03em] transition-colors hover:text-orange2"
            >
              {link.label}
              <span aria-hidden className="font-sans text-lg text-orange2">↗</span>
            </a>
          ))}
        </nav>

        <div className="wrap relative mt-auto pb-8 pt-10">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/60">
            Unidades: {UNIDADES.join(" · ")}
          </p>
          <a
            href="/#contato"
            onClick={() => setOpen(false)}
            className="mt-4 flex w-full justify-center rounded-full bg-orange py-4 text-[15px] font-extrabold text-deep"
          >
            Agendar uma visita
          </a>
        </div>
      </div>
    </>
  );
}
