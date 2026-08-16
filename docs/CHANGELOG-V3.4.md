# Changelog — V3.4 Produção

## Objetivo
Adicionar uma única dobra de vídeo para fortalecer a relação Perini + Sistema COC sem redesenhar o site.

## Posicionamento da dobra
A nova seção foi inserida imediatamente após a seção de benefícios do Sistema COC e antes de Projetos. A sequência fica: prova racional do sistema → vídeo institucional → experiências reais dos alunos.

## Implementação
- nova seção `#coc-video` na Home;
- copy centralizada em `js/content.js`;
- ID e URL do vídeo centralizados em `js/config.js`;
- player em modo de privacidade via `youtube-nocookie.com`;
- iframe carregado somente após o clique em Play;
- fallback permanente para abrir o vídeo diretamente no YouTube;
- CTA `Agende uma visita` após a prova em vídeo;
- eventos preparados: `coc-video-play`, `coc-video-youtube`, `visita-coc-video`;
- estilos isolados em `components.css` e `responsive.css`;
- nenhuma rota, página interna, fotografia, menu ou estrutura macro foi removida ou redesenhada.

## Performance e privacidade
O YouTube não é carregado na abertura da página. A conexão com o player ocorre somente após ação explícita do visitante.
