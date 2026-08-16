# QA — V3.4 Produção

## Escopo
Rodada congelada sobre a versão editorial corrente. A única intervenção de produto foi a criação da dobra Perini + Sistema COC com vídeo, além de documentação e configuração necessárias para mantê-la editável e segura.

## Resultado estático
- 8 arquivos HTML públicos verificados;
- 7 URLs indexáveis no sitemap;
- 1 H1 por página indexável;
- 0 IDs duplicados;
- 0 links vazios ou `href="#"`;
- 0 imagens sem `width`/`height`;
- 0 assets locais inexistentes;
- 0 `<br>` usados como remendo de diagramação;
- 0 `&nbsp;`, `<br><br>` ou parágrafos vazios usados como espaçamento;
- 4 arquivos JavaScript aprovados em `node --check`;
- `vercel.json` válido;
- chaves CSS balanceadas;
- sem pasta de backup dentro do pacote de produção;
- claims não validados (1980, COC by Pearson, Programa Bilíngue, Projeto de Vida formal) ausentes do conteúdo público.

## Dobra de vídeo COC
- posição: depois da seção Sistema COC e antes de Projetos;
- ID do vídeo: `LLUYrDn4aXA`;
- URL de fallback: `https://www.youtube.com/watch?v=LLUYrDn4aXA`;
- player: `youtube-nocookie.com`;
- carregamento do iframe: somente após clique explícito em Play;
- fallback externo permanece disponível;
- CTA pós-prova: `Agende uma visita`;
- eventos preparados: `coc-video-play`, `coc-video-youtube`, `visita-coc-video`.

## Observação de homologação online
A disponibilidade e permissão de incorporação do vídeo são controladas pelo YouTube. O pacote mantém link de fallback para o URL exato fornecido caso a plataforma impeça reprodução incorporada. Testar Play e fallback no Preview Vercel antes da promoção de domínio.
