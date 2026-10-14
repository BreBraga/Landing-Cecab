# Landing Page CECAB Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Next.js landing page for CECAB (Centro Educacional Carvalho Braga) following the brand style guide and institutional background, with no fabricated stats/testimonials/pricing.

**Architecture:** Next.js (App Router) + TypeScript + Tailwind CSS, single-page site (`app/page.tsx`) composed of section components under `components/`, shared visual primitives under `components/ui/`, brand tokens in `tailwind.config.ts`, contact constants in `lib/constants.ts`. Static export (`output: "export"`) since there is no backend/dynamic data in this phase.

**Tech Stack:** Next.js 14, React 18, TypeScript 5, Tailwind CSS 3, `next/font/google` (Anton, Montserrat, Caveat). No test framework — verification is `npm run build` (type-checks + statically renders) followed by grepping the generated `out/index.html` for expected content, plus a final manual visual pass in the browser.

All commands below run from the project root: `D:\LINKEED HUB\projetos\CECAB\LANDING PAGE CECAB`.

## Global Constraints

- Colors (exact hex, from `style-guide-cecab-v3.html`): `blue #222179`, `blue2 #064E91`, `orange #E8752F`, `orange2 #F05A0A`, `yellow #F9C906`, `graybrand #B8B8B8`, `cream #F7F6F2`, `ink #11112C`, `gray #6E6E7A`, `line #E8E7E3`. Blue+gray+white = institutional base; orange+yellow = accent, never all three accents at equal intensity in the same block.
- Typography: **Anton** for all headlines (uppercase, tight line-height ~0.88–0.92). **Montserrat** (weights 500–900) for everything else. **Caveat** only for the single quote "Educar é caminhar junto." — never for headlines or body copy.
- CTA pattern: pill shape (`rounded-full`), yellow background (`#F9C906`) with blue text (`#222179`) for primary CTAs; outline/transparent variant with white text for CTAs on dark backgrounds (nav, footer).
- Cards: white or cream background (inverted relative to the section's own background — white section → cream card, cream section → white card), `1px solid #E8E7E3` border, small border radius (5px), generous padding.
- No fabricated content: never add specific student counts, teacher names, tuition/pricing, testimonials, exam results, certifications, or partnerships anywhere on the page. Any section that would normally hold that kind of proof is omitted entirely (already reflected in this plan's section list — do not add new sections beyond what's listed here without checking back against `docs/superpowers/specs/2026-09-22-landing-page-cecab-design.md`).
- WhatsApp number is a placeholder (`5500000000000`) defined once in `lib/constants.ts` — never hardcode it elsewhere.
- Instagram handle is real: `@cecab.oficial` / `https://www.instagram.com/cecab.oficial/`.
- Photos are placeholders (no real images in this phase): diagonal-cut block with white frame and a text label describing what photo should go there, built with the shared `PlaceholderPhoto` component — never use external/stock image URLs.

---

### Task 1: Project scaffold (Next.js + Tailwind + fonts + constants)

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.js`
- Create: `postcss.config.js`
- Create: `tailwind.config.ts`
- Create: `app/globals.css`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `lib/constants.ts`
- Create: `.gitignore`

**Interfaces:**
- Consumes: nothing (first task).
- Produces: Tailwind color tokens (`blue`, `blue2`, `orange`, `orange2`, `yellow`, `graybrand`, `cream`, `ink`, `gray`, `line`) and font families (`font-anton`, `font-montserrat`, `font-caveat`) usable via Tailwind classes in every later task. `lib/constants.ts` exports `WHATSAPP_URL: string`, `INSTAGRAM_URL: string`, `INSTAGRAM_HANDLE: string` consumed by later tasks. Path alias `@/*` maps to the project root.

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "landing-page-cecab",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.5",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "@types/node": "20.14.2",
    "@types/react": "18.3.3",
    "@types/react-dom": "18.3.0",
    "autoprefixer": "10.4.19",
    "postcss": "8.4.38",
    "tailwindcss": "3.4.4",
    "typescript": "5.5.2"
  }
}
```

- [ ] **Step 2: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: Create `next.config.js`**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
};

module.exports = nextConfig;
```

- [ ] **Step 4: Create `postcss.config.js`**

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- [ ] **Step 5: Create `tailwind.config.ts`**

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#222179",
        blue2: "#064E91",
        orange: "#E8752F",
        orange2: "#F05A0A",
        yellow: "#F9C906",
        graybrand: "#B8B8B8",
        cream: "#F7F6F2",
        ink: "#11112C",
        gray: "#6E6E7A",
        line: "#E8E7E3",
      },
      fontFamily: {
        anton: ["var(--font-anton)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        caveat: ["var(--font-caveat)", "cursive"],
      },
      borderRadius: {
        card: "5px",
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 6: Create `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: #f7f6f2;
  color: #11112c;
}
```

- [ ] **Step 7: Create `lib/constants.ts`**

```ts
export const WHATSAPP_NUMBER = "5500000000000"; // placeholder — substituir pelo número real do CECAB
export const WHATSAPP_MESSAGE = "Olá! Quero saber mais sobre o CECAB.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const INSTAGRAM_URL = "https://www.instagram.com/cecab.oficial/";
export const INSTAGRAM_HANDLE = "@cecab.oficial";
```

- [ ] **Step 8: Create `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { Anton, Montserrat, Caveat } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "CECAB — Novo rumo no saber",
  description:
    "Centro Educacional Carvalho Braga: Educação Infantil, Ensino Fundamental e Médio, ensino bilíngue e formação em valores em Japeri/RJ.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${anton.variable} ${montserrat.variable} ${caveat.variable} font-montserrat`}
      >
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 9: Create minimal `app/page.tsx`**

```tsx
export default function Home() {
  return (
    <main>
      <h1 className="font-anton text-4xl text-blue">CECAB</h1>
    </main>
  );
}
```

- [ ] **Step 10: Create `.gitignore`**

```
node_modules
.next
out
next-env.d.ts
```

- [ ] **Step 11: Install dependencies**

Run: `npm install`
Expected: install completes with no errors (warnings about optional peer deps are fine).

- [ ] **Step 12: Build and verify**

Run: `npm run build`
Expected: build succeeds, ending with a route summary that lists `/`. Then run:

```bash
grep -o "CECAB" out/index.html
```

Expected: `CECAB` printed at least once.

- [ ] **Step 13: Commit**

```bash
git add package.json tsconfig.json next.config.js postcss.config.js tailwind.config.ts app/globals.css app/layout.tsx app/page.tsx lib/constants.ts .gitignore package-lock.json
git commit -m "chore: scaffold Next.js + Tailwind project for CECAB landing page"
```

---

### Task 2: Header + Hero (PillButton, Tag primitives)

**Files:**
- Create: `components/ui/PillButton.tsx`
- Create: `components/ui/Tag.tsx`
- Create: `components/Header.tsx`
- Create: `components/Hero.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `WHATSAPP_URL` from `lib/constants.ts` (Task 1).
- Produces: `PillButton({ href: string; children: React.ReactNode; variant?: "yellow" | "outline"; className?: string })` and `Tag({ children: React.ReactNode })`, both exported from `components/ui/`, reused by every later section that needs a CTA or a small label pill.

- [ ] **Step 1: Create `components/ui/PillButton.tsx`**

```tsx
type PillButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "yellow" | "outline";
  className?: string;
};

const VARIANTS: Record<string, string> = {
  yellow: "bg-yellow text-blue",
  outline: "border border-white/40 text-white",
};

export function PillButton({
  href,
  children,
  variant = "yellow",
  className = "",
}: PillButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-montserrat text-sm font-extrabold uppercase tracking-wide transition-transform hover:scale-105 ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
```

- [ ] **Step 2: Create `components/ui/Tag.tsx`**

```tsx
export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/25 px-3 py-2 font-montserrat text-xs font-bold text-white">
      {children}
    </span>
  );
}
```

- [ ] **Step 3: Create `components/Header.tsx`**

```tsx
import { WHATSAPP_URL } from "@/lib/constants";
import { PillButton } from "./ui/PillButton";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex w-[92%] max-w-[1180px] items-center justify-between py-6">
        <div className="-rotate-1 rounded-lg bg-white px-5 py-3 shadow-[0_24px_60px_rgba(0,0,0,0.24)]">
          <span className="font-anton text-xl text-blue">CECAB</span>
        </div>
        <PillButton href={WHATSAPP_URL} variant="outline">
          WhatsApp
        </PillButton>
      </div>
    </header>
  );
}
```

- [ ] **Step 4: Create `components/Hero.tsx`**

```tsx
import { WHATSAPP_URL } from "@/lib/constants";
import { PillButton } from "./ui/PillButton";
import { Tag } from "./ui/Tag";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-blue pb-24 pt-32">
      <div className="pointer-events-none absolute -right-16 -top-16 h-[500px] w-[500px] rounded-full bg-orange" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[330px] w-[330px] rounded-full border-[70px] border-yellow" />
      <div className="relative mx-auto w-[92%] max-w-[1180px]">
        <h1 className="max-w-3xl font-anton text-[clamp(48px,9vw,96px)] uppercase leading-[0.9] text-white">
          Novo rumo no saber.
        </h1>
        <p className="mt-6 max-w-xl font-montserrat text-lg leading-relaxed text-white/80">
          O CECAB combina conhecimento, valores e acompanhamento próximo da
          família para preparar cada aluno para o futuro — da Educação
          Infantil ao Ensino Médio.
        </p>
        <div className="mt-8">
          <PillButton href={WHATSAPP_URL}>Falar no WhatsApp →</PillButton>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Tag>Educação Infantil</Tag>
          <Tag>Ensino Fundamental</Tag>
          <Tag>Ensino Médio</Tag>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Wire into `app/page.tsx`**

```tsx
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
    </main>
  );
}
```

- [ ] **Step 6: Build and verify**

Run: `npm run build`
Expected: build succeeds. Then:

```bash
grep -o "Novo rumo no saber" out/index.html
grep -o "Falar no WhatsApp" out/index.html
```

Expected: both strings printed.

- [ ] **Step 7: Commit**

```bash
git add components/ui/PillButton.tsx components/ui/Tag.tsx components/Header.tsx components/Hero.tsx app/page.tsx
git commit -m "feat: add header and hero section"
```

---

### Task 3: Sobre / Posicionamento section

**Files:**
- Create: `components/Sobre.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: nothing new (plain Tailwind classes only).
- Produces: `Sobre()` component, rendered right after `Hero` in `app/page.tsx`.

- [ ] **Step 1: Create `components/Sobre.tsx`**

```tsx
export function Sobre() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <span className="font-montserrat text-[11px] font-black uppercase tracking-[0.16em] text-orange2">
          Sobre o CECAB
        </span>
        <h2 className="mt-3 max-w-2xl font-anton text-[42px] uppercase leading-tight text-blue">
          Educação que forma conhecimento e caráter
        </h2>
        <p className="mt-6 max-w-2xl font-montserrat text-base leading-relaxed text-gray">
          O Centro Educacional Carvalho Braga é uma escola particular em
          Japeri/RJ que vai além da transmissão de conteúdo: combina
          conhecimento, valores cristãos, autonomia e responsabilidade na
          formação de cada aluno, em parceria constante com a família.
        </p>
        <p className="mt-6 max-w-lg font-caveat text-4xl text-orange2">
          Educar é caminhar junto.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Wire into `app/page.tsx`**

```tsx
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Sobre />
    </main>
  );
}
```

- [ ] **Step 3: Build and verify**

Run: `npm run build`
Expected: build succeeds. Then:

```bash
grep -o "Educação que forma conhecimento e caráter" out/index.html
```

Expected: string printed once.

- [ ] **Step 4: Commit**

```bash
git add components/Sobre.tsx app/page.tsx
git commit -m "feat: add sobre section"
```

---

### Task 4: Jornada educacional section (PlaceholderPhoto primitive)

**Files:**
- Create: `components/ui/PlaceholderPhoto.tsx`
- Create: `components/Jornada.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: nothing new.
- Produces: `PlaceholderPhoto({ label: string; aspect?: "portrait" | "square" | "wide"; className?: string })`, exported from `components/ui/`, reused by the `Estrutura` section (Task 6).

- [ ] **Step 1: Create `components/ui/PlaceholderPhoto.tsx`**

```tsx
type PlaceholderPhotoProps = {
  label: string;
  aspect?: "portrait" | "square" | "wide";
  className?: string;
};

const ASPECT_CLASSES: Record<string, string> = {
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
};

export function PlaceholderPhoto({
  label,
  aspect = "portrait",
  className = "",
}: PlaceholderPhotoProps) {
  return (
    <div
      className={`bg-white p-2 ${ASPECT_CLASSES[aspect]} ${className}`}
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 92% 100%, 0 100%)" }}
    >
      <div className="flex h-full w-full items-center justify-center bg-graybrand/40">
        <span className="px-4 text-center font-montserrat text-xs font-bold uppercase tracking-wide text-ink/60">
          {label}
        </span>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create `components/Jornada.tsx`**

```tsx
import { PlaceholderPhoto } from "./ui/PlaceholderPhoto";

const ETAPAS = [
  {
    numero: "01",
    titulo: "Educação Infantil",
    texto:
      "Etapa de descoberta: as primeiras experiências de aprendizado, convivência e desenvolvimento.",
    foto: "Foto: turma da Educação Infantil",
  },
  {
    numero: "02",
    titulo: "Ensino Fundamental",
    texto:
      "Construção de conhecimento, autonomia e valores ao longo da jornada escolar.",
    foto: "Foto: alunos do Ensino Fundamental",
  },
  {
    numero: "03",
    titulo: "Ensino Médio",
    texto:
      "Aprofundamento, autonomia e preparação para as próximas possibilidades — acadêmicas e profissionais.",
    foto: "Foto: alunos do Ensino Médio",
  },
];

export function Jornada() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-montserrat text-[11px] font-black uppercase tracking-[0.16em] text-orange2">
              Jornada educacional
            </span>
            <h2 className="mt-3 font-anton text-[42px] uppercase leading-tight text-blue">
              Um percurso acompanhado
            </h2>
          </div>
          <p className="max-w-md font-montserrat text-base leading-relaxed text-gray">
            De descobrir a construir e preparar: cada etapa do CECAB acompanha
            o aluno em um novo momento de sua formação.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {ETAPAS.map((etapa) => (
            <div
              key={etapa.numero}
              className="rounded-card border border-line bg-cream p-7"
            >
              <PlaceholderPhoto
                label={etapa.foto}
                aspect="portrait"
                className="mb-5"
              />
              <span className="font-anton text-4xl text-orange2">
                {etapa.numero}
              </span>
              <h3 className="mt-3 font-montserrat text-lg font-extrabold text-ink">
                {etapa.titulo}
              </h3>
              <p className="mt-2 font-montserrat text-sm leading-relaxed text-gray">
                {etapa.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Wire into `app/page.tsx`**

```tsx
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { Jornada } from "@/components/Jornada";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Sobre />
      <Jornada />
    </main>
  );
}
```

- [ ] **Step 4: Build and verify**

Run: `npm run build`
Expected: build succeeds. Then:

```bash
grep -o "Um percurso acompanhado" out/index.html
grep -o "Ensino Médio" out/index.html
```

Expected: both printed (the second at least twice — once from the Hero tag, once from this section).

- [ ] **Step 5: Commit**

```bash
git add components/ui/PlaceholderPhoto.tsx components/Jornada.tsx app/page.tsx
git commit -m "feat: add jornada educacional section"
```

---

### Task 5: Diferenciais section (NumberedCard primitive)

**Files:**
- Create: `components/ui/NumberedCard.tsx`
- Create: `components/Diferenciais.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: nothing new.
- Produces: `NumberedCard({ number: string; title: string; children: React.ReactNode; className?: string })`, exported from `components/ui/`. Not reused elsewhere in this plan, but kept in `ui/` for consistency with other shared primitives.

- [ ] **Step 1: Create `components/ui/NumberedCard.tsx`**

```tsx
type NumberedCardProps = {
  number: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function NumberedCard({
  number,
  title,
  children,
  className = "",
}: NumberedCardProps) {
  return (
    <div className={`rounded-card border border-line bg-white p-7 ${className}`}>
      <span className="font-anton text-4xl text-orange2">{number}</span>
      <h3 className="mt-3 font-montserrat text-lg font-extrabold text-ink">
        {title}
      </h3>
      <p className="mt-2 font-montserrat text-sm leading-relaxed text-gray">
        {children}
      </p>
    </div>
  );
}
```

- [ ] **Step 2: Create `components/Diferenciais.tsx`**

```tsx
import { NumberedCard } from "./ui/NumberedCard";

const DIFERENCIAIS = [
  {
    numero: "01",
    titulo: "Ensino bilíngue",
    texto:
      "Preparo para se comunicar, conhecer novas culturas e se conectar com o mundo.",
  },
  {
    numero: "02",
    titulo: "Formação em valores",
    texto:
      "Uma proposta pedagógica baseada em valores como respeito, honestidade e responsabilidade.",
  },
  {
    numero: "03",
    titulo: "Parceria com a família",
    texto:
      "Acompanhamento próximo, porque educar é uma caminhada compartilhada.",
  },
  {
    numero: "04",
    titulo: "Estrutura completa",
    texto:
      "Ambientes pensados para aprender, conviver e se desenvolver em segurança.",
  },
];

export function Diferenciais() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <span className="font-montserrat text-[11px] font-black uppercase tracking-[0.16em] text-orange2">
          Diferenciais
        </span>
        <h2 className="mt-3 max-w-2xl font-anton text-[42px] uppercase leading-tight text-blue">
          O que forma o aluno CECAB
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DIFERENCIAIS.map((item) => (
            <NumberedCard key={item.numero} number={item.numero} title={item.titulo}>
              {item.texto}
            </NumberedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Wire into `app/page.tsx`**

```tsx
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { Jornada } from "@/components/Jornada";
import { Diferenciais } from "@/components/Diferenciais";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Sobre />
      <Jornada />
      <Diferenciais />
    </main>
  );
}
```

- [ ] **Step 4: Build and verify**

Run: `npm run build`
Expected: build succeeds. Then:

```bash
grep -o "O que forma o aluno CECAB" out/index.html
grep -o "Ensino bilíngue" out/index.html
```

Expected: both printed.

- [ ] **Step 5: Commit**

```bash
git add components/ui/NumberedCard.tsx components/Diferenciais.tsx app/page.tsx
git commit -m "feat: add diferenciais section"
```

---

### Task 6: Estrutura da escola section (gallery)

**Files:**
- Create: `components/Estrutura.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `PlaceholderPhoto` from `components/ui/PlaceholderPhoto.tsx` (Task 4).
- Produces: `Estrutura()` component, rendered after `Diferenciais` in `app/page.tsx`.

- [ ] **Step 1: Create `components/Estrutura.tsx`**

```tsx
import { PlaceholderPhoto } from "./ui/PlaceholderPhoto";

const AMBIENTES = [
  "Salas de aula",
  "Biblioteca",
  "Quadra esportiva coberta",
  "Pátio",
  "Refeitório",
  "Parquinho",
];

export function Estrutura() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <span className="font-montserrat text-[11px] font-black uppercase tracking-[0.16em] text-orange2">
          Estrutura
        </span>
        <h2 className="mt-3 max-w-2xl font-anton text-[42px] uppercase leading-tight text-blue">
          Um ambiente para aprender e conviver
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AMBIENTES.map((ambiente) => (
            <PlaceholderPhoto key={ambiente} label={ambiente} aspect="wide" />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Wire into `app/page.tsx`**

```tsx
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { Jornada } from "@/components/Jornada";
import { Diferenciais } from "@/components/Diferenciais";
import { Estrutura } from "@/components/Estrutura";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Sobre />
      <Jornada />
      <Diferenciais />
      <Estrutura />
    </main>
  );
}
```

- [ ] **Step 3: Build and verify**

Run: `npm run build`
Expected: build succeeds. Then:

```bash
grep -o "Um ambiente para aprender e conviver" out/index.html
grep -o "Quadra esportiva coberta" out/index.html
```

Expected: both printed.

- [ ] **Step 4: Commit**

```bash
git add components/Estrutura.tsx app/page.tsx
git commit -m "feat: add estrutura section"
```

---

### Task 7: Família e comunidade section

**Files:**
- Create: `components/Familia.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: nothing new.
- Produces: `Familia()` component, rendered after `Estrutura` in `app/page.tsx`.

- [ ] **Step 1: Create `components/Familia.tsx`**

```tsx
export function Familia() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto w-[92%] max-w-[1180px] text-center">
        <span className="font-montserrat text-[11px] font-black uppercase tracking-[0.16em] text-orange2">
          Família e comunidade
        </span>
        <p className="mx-auto mt-6 max-w-2xl font-caveat text-5xl text-blue">
          Educar é caminhar junto.
        </p>
        <p className="mx-auto mt-6 max-w-2xl font-montserrat text-base leading-relaxed text-gray">
          Acreditamos que escola e família são parceiras na formação de cada
          aluno. Comunicação próxima, segura e confiante em cada etapa da
          jornada escolar.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Wire into `app/page.tsx`**

```tsx
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { Jornada } from "@/components/Jornada";
import { Diferenciais } from "@/components/Diferenciais";
import { Estrutura } from "@/components/Estrutura";
import { Familia } from "@/components/Familia";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Sobre />
      <Jornada />
      <Diferenciais />
      <Estrutura />
      <Familia />
    </main>
  );
}
```

- [ ] **Step 3: Build and verify**

Run: `npm run build`
Expected: build succeeds. Then:

```bash
grep -o "Comunicação próxima, segura e confiante" out/index.html
```

Expected: string printed.

- [ ] **Step 4: Commit**

```bash
git add components/Familia.tsx app/page.tsx
git commit -m "feat: add familia section"
```

---

### Task 8: CTA final + Footer

**Files:**
- Create: `components/CtaFinal.tsx`
- Create: `components/Footer.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `PillButton` (Task 2), `WHATSAPP_URL`, `INSTAGRAM_URL`, `INSTAGRAM_HANDLE` (Task 1).
- Produces: `CtaFinal()` and `Footer()` components, rendered as the last two elements in `app/page.tsx`.

- [ ] **Step 1: Create `components/CtaFinal.tsx`**

```tsx
import { WHATSAPP_URL } from "@/lib/constants";
import { PillButton } from "./ui/PillButton";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-orange py-20">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-[330px] w-[330px] rounded-full border-[60px] border-yellow/60" />
      <div className="relative mx-auto w-[92%] max-w-[1180px] text-center">
        <h2 className="font-anton text-[clamp(32px,6vw,56px)] uppercase leading-tight text-white">
          Vamos conversar sobre o futuro do seu filho?
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-montserrat text-base text-white/85">
          Agende uma visita ou tire suas dúvidas diretamente com o CECAB.
        </p>
        <div className="mt-8 flex justify-center">
          <PillButton href={WHATSAPP_URL}>Falar no WhatsApp →</PillButton>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `components/Footer.tsx`**

```tsx
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/constants";
import { PillButton } from "./ui/PillButton";

export function Footer() {
  return (
    <footer className="bg-blue py-16">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <h2 className="font-anton text-[44px] uppercase text-white">CECAB</h2>
        <p className="mt-2 font-montserrat text-sm text-white/70">
          Centro Educacional Carvalho Braga — Japeri/RJ
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <PillButton href={WHATSAPP_URL} variant="outline">
            WhatsApp
          </PillButton>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat text-sm font-bold text-white/80 underline underline-offset-4"
          >
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Wire into `app/page.tsx`**

```tsx
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { Jornada } from "@/components/Jornada";
import { Diferenciais } from "@/components/Diferenciais";
import { Estrutura } from "@/components/Estrutura";
import { Familia } from "@/components/Familia";
import { CtaFinal } from "@/components/CtaFinal";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Sobre />
      <Jornada />
      <Diferenciais />
      <Estrutura />
      <Familia />
      <CtaFinal />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 4: Build and verify**

Run: `npm run build`
Expected: build succeeds. Then:

```bash
grep -o "Vamos conversar sobre o futuro do seu filho?" out/index.html
grep -o "@cecab.oficial" out/index.html
```

Expected: both printed.

- [ ] **Step 5: Commit**

```bash
git add components/CtaFinal.tsx components/Footer.tsx app/page.tsx
git commit -m "feat: add cta final and footer sections"
```

---

### Task 9: Manual visual and responsive verification

**Files:**
- Modify: none expected (fixes only if verification finds a visual bug — if so, fix in the relevant file from Tasks 2–8 and note it in the commit message).

**Interfaces:**
- Consumes: the fully assembled `app/page.tsx` from Task 8.
- Produces: nothing new — this task is a manual QA pass per the spec's "Testes" section (no automated test suite for this phase).

- [ ] **Step 1: Start the dev server**

Run: `npm run dev` (leave it running)
Expected: server starts on `http://localhost:3000` with no compile errors.

- [ ] **Step 2: Visual check in browser**

Open `http://localhost:3000` in a browser and check, top to bottom:
- Header logo card is visible and tilted, WhatsApp pill visible against the hero.
- Hero headline "NOVO RUMO NO SABER." renders in Anton, decorative circles bleed off the top-right (orange) and bottom-left (yellow ring) without causing horizontal scroll.
- The `Educar é caminhar junto.` line in Sobre renders in the handwritten Caveat font, distinctly different from body text.
- Jornada shows 3 cards with diagonal-cut placeholder photos, numbered 01–03.
- Diferenciais shows 4 cards in a responsive grid.
- Estrutura shows a 6-item photo placeholder grid.
- Familia's quote is large and centered.
- CtaFinal has an orange background with a visible decorative ring and a working-looking WhatsApp pill.
- Footer shows the CECAB wordmark, WhatsApp pill, and `@cecab.oficial` link.

- [ ] **Step 3: Responsive check**

Using the browser's device toolbar (or by resizing the window), check the layout at ~375px (mobile) and ~1440px (desktop) widths:
- No horizontal scrollbar appears at any width.
- Grids collapse to a single column on mobile (Jornada, Diferenciais, Estrutura).
- Hero headline font size shrinks smoothly (via the `clamp()` value) instead of overflowing.

If any of the above is broken, fix it in the relevant component file before proceeding (e.g., adjust a Tailwind breakpoint class), then repeat Step 1–3.

- [ ] **Step 4: Stop the dev server and do a final production build**

Run: `npm run build`
Expected: build succeeds with no warnings about unused imports or missing keys.

- [ ] **Step 5: Commit (only if Step 3 required fixes)**

```bash
git add -A
git commit -m "fix: responsive/visual adjustments from manual QA pass"
```

If no fixes were needed, skip this step — there is nothing to commit.

---

## Post-launch note (not a task — just context for whoever picks this up next)

Before this page goes live, three placeholders still need real values from the school: the WhatsApp number in `lib/constants.ts`, and the photo placeholders (in `Jornada.tsx` and `Estrutura.tsx`) need to be swapped for real photography per the style guide's "fotografia real" rule. Neither is part of this plan's scope — they depend on information the client has to supply.
