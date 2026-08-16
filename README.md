# Colégio Perini — V3 Homologação

Site estático premium, responsivo e multipágina, pronto para Preview na Vercel.

## Rotas
- `/` — Home institucional/comercial
- `/fundamental-1`
- `/fundamental-2`
- `/ensino-medio`
- `/sistema-de-ensino`
- `/estrutura-e-vida-escolar`
- `/contato`

## Onde editar
- Contatos, WhatsApp, Portal e campanha: `js/config.js`
- Conteúdo da Home e dados compartilhados: `js/content.js`
- Imagens principais: `js/images.js`
- Cores/tokens: `css/tokens.css`
- Conteúdo aprofundado das páginas: `*/index.html`

## Agendamento
O formulário em `/contato` não possui backend e não armazena dados. Ele monta uma mensagem com responsável, aluno, etapa e contato e abre o WhatsApp oficial para confirmação do envio.

## Publicação
Sem build. Publique a raiz do projeto na Vercel e valide todas as rotas no Preview antes de promover para produção.

## Pendências institucionais que NÃO bloqueiam a V3
- Fotografias reais e atuais de estrutura/professores/projetos para substituir ou ampliar o acervo.
- Confirmação de Programa Bilíngue, Projeto de Vida formal e atividades fixas antes de qualquer publicação desses itens.

## Fotografias reais — V3.1
A V3.1 integra registros reais da escola em `assets/real/`, mantendo as imagens editoriais já existentes. O uso foi distribuído por função narrativa: história, projetos, ciclos, vida escolar e contato.
