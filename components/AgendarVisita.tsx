"use client";

import { useState, type FormEvent } from "react";
import { UNIDADES, whatsappLink } from "@/lib/constants";

export function AgendarVisita({ className = "" }: { className?: string }) {
  const [unidade, setUnidade] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const mensagem = unidade
      ? `Olá! Quero agendar uma visita na unidade ${unidade} do CECAB.`
      : "Olá! Quero agendar uma visita no CECAB.";
    window.open(whatsappLink(mensagem), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <label htmlFor="unidade" className="sr-only">
        Unidade
      </label>
      <div className="relative flex-1">
        <select
          id="unidade"
          value={unidade}
          onChange={(event) => setUnidade(event.target.value)}
          className="h-[52px] w-full cursor-pointer appearance-none rounded-full border-2 border-deep/15 bg-white pl-6 pr-12 text-[15px] font-semibold text-ink"
        >
          <option value="">Escolha a unidade</option>
          {UNIDADES.map((nome) => (
            <option key={nome} value={nome}>
              {nome}
            </option>
          ))}
        </select>
        <span
          aria-hidden
          className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-blue"
        >
          ▾
        </span>
      </div>
      <button
        type="submit"
        className="h-[52px] rounded-full bg-orange px-7 text-[13px] font-extrabold text-deep transition-transform hover:scale-[1.03]"
      >
        Agendar uma visita ↗
      </button>
    </form>
  );
}
