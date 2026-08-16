# Colégio Perini — Production Final para GitHub Pages

Site institucional/comercial estático, responsivo e multipágina do Colégio Perini.

## URL de produção
https://periniebambino.github.io/colegioperini/

## Rotas
- `/colegioperini/`
- `/colegioperini/fundamental-1/`
- `/colegioperini/fundamental-2/`
- `/colegioperini/ensino-medio/`
- `/colegioperini/sistema-de-ensino/`
- `/colegioperini/estrutura-e-vida-escolar/`
- `/colegioperini/contato/`

A navegação foi preparada para funcionar em GitHub Pages dentro da subpasta `/colegioperini/`, evitando os 404 causados por links absolutos de raiz.

## Conversão
Os CTAs “Agende uma visita” abrem diretamente o WhatsApp oficial do Colégio Perini com mensagem pronta. A página `/contato/` continua disponível para quem quiser preencher os dados da visita antes de abrir o WhatsApp.

## Imagens
As artes antigas de Fundamental I e Fundamental II com texto incorporado foram substituídas, no site, por versões editoriais limpas: fotografia sem painel lateral, headline, ícones ou card embutidos. O HTML/CSS fica responsável por títulos e CTAs.

## Sistema COC
O player do vídeo é carregado sob demanda: o iframe do YouTube só é criado após o clique em Play. Há fallback para abrir o vídeo diretamente no YouTube.

## Onde editar
- contatos, WhatsApp, Portal e vídeo COC: `js/config.js`
- textos compartilhados: `js/content.js`
- imagens principais: `js/images.js`
- identidade visual: `css/tokens.css`
- páginas internas: `*/index.html`

## Publicação no GitHub Pages
1. Extraia o ZIP.
2. Envie o conteúdo extraído para a raiz do repositório `periniebambino/colegioperini`.
3. Mantenha `.nojekyll` na raiz.
4. Em Settings > Pages, publique a branch do projeto a partir de `/(root)`.

Não existe etapa de build.
