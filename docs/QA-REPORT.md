# QA técnico — v1.2-production

## Responsividade automatizada

Testes executados em Chromium headless nos viewports: 320, 360, 375, 390, 430, 768, 1024, 1280, 1440 e 1920 px.

- Nenhum overflow horizontal detectado.
- Nenhum erro JavaScript/console detectado.
- Headline do hero permanece contida no layout em todos os viewports testados.
- Menu mobile validado com Escape, retorno de foco e focus trap.
- CTA fixo mobile fica oculto enquanto o CTA principal do hero está visível e aparece após a rolagem.
- Âncoras e links são preenchidos sem `href` vazio ou `#`.

## Verificações estáticas

- Scripts passaram em `node --check`.
- Nenhum asset local referenciado está ausente.
- Nenhum ID duplicado no `index.html`.
- Sitemap, robots, manifest, favicons, 404 e configuração Vercel presentes.
- Pacote público não contém o documento interno da Coordenação nem PNGs de trabalho pesados.

## Limite do ambiente de QA

O mapa externo do Google deve ser confirmado no Preview da Vercel, porque o ambiente local automatizado bloqueia navegação externa/localhost para renderização visual.
