# Colégio Perini — V3.4 Produção

Site institucional/comercial estático, responsivo e multipágina do Colégio Perini.

## Rotas
- `/` — Home institucional/comercial
- `/fundamental-1`
- `/fundamental-2`
- `/ensino-medio`
- `/sistema-de-ensino`
- `/estrutura-e-vida-escolar`
- `/contato`

## Onde editar
- Contatos, WhatsApp, Portal, campanha e vídeo COC: `js/config.js`
- Conteúdo da Home e dados compartilhados: `js/content.js`
- Imagens principais: `js/images.js`
- Cores/tokens: `css/tokens.css`
- Conteúdo aprofundado das páginas: `*/index.html`

## Vídeo COC
A Home possui uma dobra exclusiva logo após a seção do Sistema COC. O player não carrega o YouTube na abertura da página: o iframe em modo de privacidade (`youtube-nocookie.com`) é criado somente quando o visitante clica em Play. Existe também um link de fallback para abrir o mesmo vídeo diretamente no YouTube.

Para trocar o vídeo, altere em `js/config.js`:
- `cocVideoId`
- `cocVideoUrl`

## Agendamento
O formulário em `/contato` não possui backend e não armazena dados. Ele monta uma mensagem com responsável, aluno, etapa e contato e abre o WhatsApp oficial para confirmação do envio.

## Publicação
Não existe etapa de build. Publique a raiz desta pasta na Vercel. O projeto inclui `vercel.json`, `robots.txt`, `sitemap.xml`, manifest, favicon e página 404.

## Fotografias reais
Os registros reais ficam em `assets/real/`. A fotografia de convivência usada no Fundamental II possui crop de produção que evita conflito visual com sinalização histórica da marca.

## Observações institucionais
Antes da publicação pública definitiva, a escola deve manter confirmadas as autorizações de uso das fotografias de alunos e equipe e validar eventuais informações operacionais que mudem com o tempo.
