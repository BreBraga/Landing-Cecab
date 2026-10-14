import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Tape } from "@/components/Tape";
import { Proposta } from "@/components/Proposta";
import { Pilares } from "@/components/Pilares";
import { Valores } from "@/components/Valores";
import { Jornada } from "@/components/Jornada";
import { Estrutura } from "@/components/Estrutura";
import { VidaEscolar } from "@/components/VidaEscolar";
import { Unidades } from "@/components/Unidades";
import { Contato } from "@/components/Contato";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Tape />
        <Proposta />
        <Pilares />
        <Valores />
        <Jornada />
        <Estrutura />
        <VidaEscolar />
        <Unidades />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
