# QA Report — V3.2 Pré-produção

## Resultado estático
- 0 erros de estrutura detectados.
- 1 H1 por página.
- 0 IDs duplicados.
- 0 links vazios.
- 0 assets locais ausentes.
- 0 imagens sem `width` e `height`.
- JavaScript válido em `config.js`, `content.js`, `images.js` e `site.js`.
- 7 URLs presentes no sitemap.
- metadata essencial presente nas 7 páginas indexáveis.
- breadcrumb estruturado nas 6 páginas internas.
- evento `formulario-visita` preparado.
- fotografia do Fundamental II usa crop de produção sem a sinalização histórica no topo.

## QA visual
A validação visual final deve ser executada no Preview da Vercel nos breakpoints:
320, 360, 375, 390, 430, 768, 1024, 1280, 1440 e 1920 px.

A etapa visual em ambiente real permanece necessária antes de classificar a versão como `PRODUCTION FINAL`.

## Rotas para homologação
- /
- /fundamental-1
- /fundamental-2
- /ensino-medio
- /sistema-de-ensino
- /estrutura-e-vida-escolar
- /contato

## Testes de produção pendentes
- HTTP 200 nas rotas;
- mapa;
- WhatsApp;
- telefone;
- e-mail;
- Portal do Aluno;
- formulário -> WhatsApp;
- favicon;
- robots;
- sitemap;
- canonical;
- Open Graph;
- 404;
- console sem erros.
