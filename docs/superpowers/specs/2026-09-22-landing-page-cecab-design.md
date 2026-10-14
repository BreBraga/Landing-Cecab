# Landing Page CECAB — Design

## Contexto

Landing page institucional para o CECAB (Centro Educacional Carvalho Braga), escola particular em Japeri/RJ, com Educação Infantil, Ensino Fundamental e Ensino Médio, ensino bilíngue e proposta baseada em valores cristãos. Conceito central: **"Novo rumo no saber."**

Fontes de verdade:
- `style-guide-cecab-v3.html` — guia de marca/Instagram (@cecab.oficial): cores, tipografia, componentes, regras de composição.
- `CECAB_Background_Institucional.docx` — background institucional, público-alvo, tom de voz, e restrições de conteúdo.

## Restrição crítica de conteúdo

O documento institucional proíbe explicitamente inventar: número de alunos, número de professores, mensalidades/preços, bolsas, depoimentos, resultados (ENEM/vestibular), certificações, metodologias específicas, cargas horárias, nomes de professores, prêmios ou parcerias. **Nenhuma dessas informações aparece na página.** Onde uma prova social normalmente existiria, a seção é omitida — a página se apoia em diferenciais qualitativos (jornada educacional, bilíngue, valores, proximidade com a família) em vez de números.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS, projeto novo em `LANDING PAGE CECAB/`.
- Fontes via `next/font/google`: Anton (display/headline), Montserrat (corpo/UI, pesos 400–900), Caveat (acento manuscrito, uso raro).
- Sem backend/CMS nesta fase — conteúdo estático no código, imagens como placeholders.

## Design tokens (extraídos do guia de marca)

Cores (Tailwind `theme.extend.colors`):
- `blue: #222179` (principal/institucional)
- `blue2: #064E91` (fundos)
- `orange: #E8752F`, `orange2: #F05A0A` (assinatura/CTA texto, kickers)
- `yellow: #F9C906` (destaque/CTA fundo)
- `graybrand: #B8B8B8` (apoio — usar com frequência em fundos e blocos, não só como neutro)
- `cream: #F7F6F2` (fundo padrão das seções)
- `ink: #11112C` (texto principal)
- `gray: #6E6E7A` (corpo de texto sobre branco/cream)
- `line: #E8E7E3` (bordas hairline dos cards)

Regra de uso: azul + cinza + branco = base institucional; laranja + amarelo = energia/destaque, usados com moderação (nunca as três cores de acento na mesma intensidade ao mesmo tempo).

Tipografia:
- Headlines (h1/h2/números grandes): Anton, caixa alta, line-height apertado (~0.88–0.92), peso visual 900.
- Corpo/UI: Montserrat, pesos 500–800 para textos correntes, 900 para headings menores.
- Acento manuscrito (Caveat): só para a citação "Educar é caminhar junto." — nunca em headline ou corpo.

Componentes reaproveitados do guia:
- Cards: fundo branco/cream (invertido conforme seção), borda 1px `line`, radius 5px, padding generoso, numeração grande em Anton laranja (`orange2`) quando aplicável.
- CTA pill: fundo amarelo, texto azul, radius total (pill), peso 900, uppercase, com seta (ex: "FALAR NO WHATSAPP →").
- Tags/pills secundárias: borda 1px translúcida sobre fundo escuro, radius pill, texto pequeno em bold.
- Formas decorativas: círculos orgânicos sangrando nas bordas (laranja sólido, anel amarelo), reaproveitados no hero e no CTA final.
- Fotos: placeholders com recorte diagonal e moldura branca, mantendo a proporção 4:5 (referência de post do Instagram) quando fizer sentido, ou 16:9/quadrado conforme o grid da seção.
- Alternância de fundo cream/branco entre seções para dar ritmo vertical.

## Estrutura de seções

1. **Header** — logo (placeholder em card branco, leve rotação -1°/1°) + link de WhatsApp; fundo transparente sobre o hero, fixo ou não-fixo (decidir na implementação, sem necessidade de scroll-spy).
2. **Hero** — fundo azul (`blue`), círculos decorativos (laranja topo-direita, anel amarelo inferior-esquerdo), headline Anton "NOVO RUMO NO SABER.", subtítulo Montserrat explicando o posicionamento, CTA pill amarelo para WhatsApp, tags secundárias (Educação Infantil · Ensino Fundamental · Ensino Médio).
3. **Sobre / Posicionamento** — bloco institucional curto (quem é o CECAB, valores cristãos tratados com sutileza — cultura e formação, não proselitismo), citação-chave "Educar é caminhar junto." em destaque.
4. **Jornada educacional** — 3 cards numerados (01/02/03): Educação Infantil → Ensino Fundamental → Ensino Médio, cada um com foto placeholder recortada, título, descrição curta. Sem setas literais conectando os cards (usar alinhamento/linha sutil de fundo, não ícones de seta, por restrição do doc de marca).
5. **Diferenciais** — grid de cards qualitativos: ensino bilíngue, formação em valores, acompanhamento próximo da família, estrutura física — cada um com ícone/número Anton e texto curto, sem estatísticas.
6. **Estrutura da escola** — galeria de fotos placeholder (grid) representando ambientes citados no background (salas, biblioteca, quadra coberta, pátio, refeitório), tratados como infraestrutura geral.
7. **Família e comunidade** — seção com fundo alternado (branco ou cream), reforça a parceria escola-família, tom acolhedor.
8. **CTA final** — faixa de fundo forte (laranja ou azul), chamada direta para agendar visita/conversar no WhatsApp, reaproveitando o CTA pill.
9. **Footer** — fundo azul escuro, Anton para o título, dados institucionais (nome completo, Japeri/RJ, @cecab.oficial), link de WhatsApp repetido.

## Dados de contato

- WhatsApp: placeholder `+55 00 00000-0000` como constante única (`lib/constants.ts` ou similar), fácil de trocar depois.
- Instagram: `@cecab.oficial` (real, confirmado no background).

## Fora de escopo (esta fase)

- Formulário de contato com envio real (sem backend configurado).
- CMS ou conteúdo editável por não-programadores.
- Fotos reais (usar placeholders visuais respeitando proporções e tratamento do guia).
- Qualquer número, depoimento, preço ou resultado — mesmo como placeholder "[PENDENTE]" (decisão do usuário: omitir completamente em vez de mostrar placeholders de dado sensível).

## Testes

- Verificação visual manual (rodar `npm run dev`, abrir no navegador, conferir responsividade em mobile/desktop) — sem suíte de testes automatizados nesta fase (projeto novo, sem lógica de negócio para testar unitariamente).
