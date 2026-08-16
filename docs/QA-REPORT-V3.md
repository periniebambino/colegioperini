# QA técnico — V3 Homologação

## Arquitetura
- Home preservada e evoluída a partir da v1.2.
- URLs públicas existentes preservadas: `/fundamental-1`, `/fundamental-2`, `/ensino-medio`, `/sistema-de-ensino`, `/estrutura-e-vida-escolar` e `/contato`.
- Sitemap atualizado com 7 URLs indexáveis.
- Canonical e meta description próprios nas páginas internas.

## Conteúdo
- Marco histórico público: 1987.
- Não há `1980`, `COC by Pearson`, Programa Bilíngue ou Projeto de Vida formal nas páginas públicas da V3.
- Ensino Médio mantém 5 Simulados ENEM e 4 Simulados COC conforme conteúdo institucional fornecido.
- Estrutura limita-se a salas equipadas, laboratório de ciências, biblioteca e quadra poliesportiva.

## Conversão
- CTA principal `Agende uma visita` direciona para `/contato#agendar`.
- WhatsApp permanece disponível como ação secundária.
- Formulário de visita não envia dados para servidor: gera a mensagem e abre o WhatsApp para confirmação do usuário.

## Verificações estáticas executadas
- `node --check` em todos os arquivos JavaScript.
- Um único H1 por página indexável.
- Sem IDs duplicados.
- Sem links `<a>` sem `href` após progressive enhancement.
- Todos os assets locais referenciados existem.
- Sem `href="#"` ou `href=""`.
- Imagens principais têm dimensões declaradas para reduzir CLS.

## Responsividade
A base responsiva da v1.2, anteriormente testada em 320, 360, 375, 390, 430, 768, 1024, 1280, 1440 e 1920 px, foi preservada. A V3 adiciona regras específicas para páginas internas, jornada, diferenciais, projetos agrupados e formulário nos mesmos breakpoints de 1080 px e 720 px.

## Homologação obrigatória em Preview
O ambiente Chromium disponível nesta sessão não concluiu captura visual da V3 por limitação do processo headless/DBus. Portanto, antes de promover para produção, validar no Preview da Vercel:
- desktop real;
- iPhone/Safari;
- Android/Chrome;
- menu mobile;
- mapa Google;
- envio do formulário para WhatsApp;
- previews sociais/Open Graph.

Nenhuma validação visual em Preview foi inventada neste relatório.
