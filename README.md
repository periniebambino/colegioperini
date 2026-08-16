# Colégio Perini — Site Premium v1.2 Produção

Pacote estático pronto para publicação em Vercel ou GitHub Pages.

## Abrir no computador
Abra `index.html` no navegador. Para testar o mapa exatamente como em produção, prefira um servidor local simples ou o Preview da Vercel.

## Onde editar
- **Telefone, WhatsApp, endereço, e-mail, Portal do Aluno e campanha:** `js/config.js`
- **Textos institucionais, etapas, projetos, Ensino Médio, estrutura e FAQ:** `js/content.js`
- **Caminhos das imagens principais:** `js/images.js`
- **Cores da marca e tokens:** `css/tokens.css`

## Trocar uma foto
1. Coloque a nova imagem dentro de `assets/` na pasta correspondente.
2. Use WebP sempre que possível.
3. Atualize o caminho em `js/images.js`.
4. Se criar uma versão menor para celular, atualize também o `srcset`.

## Publicar na Vercel
1. Envie toda a pasta do projeto para o repositório conectado à Vercel.
2. Não é necessário comando de build.
3. O diretório de saída é a própria raiz do projeto.
4. Faça Preview antes de substituir a versão em produção.

## URL configurada
A versão atual está preparada para substituir `https://colegio-perini.vercel.app/`. Se o domínio mudar, atualize:
- `index.html`: canonical, Open Graph e Twitter Card;
- `js/config.js`: `school.baseUrl`;
- `robots.txt`;
- `sitemap.xml`.

## Antes de publicar
Confira `docs/CHECKLIST-PUBLICACAO.md`.

## Observação de conteúdo
O marco institucional adotado é **1987**, conforme o material mais recente da Coordenação. O site antigo foi usado apenas como fonte complementar para dados públicos e estrutura física já divulgada.
