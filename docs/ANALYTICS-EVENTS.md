# Eventos preparados para GA4 / GTM

O site **não instala Analytics automaticamente**. Os atributos `data-track` servem como pontos de integração.

Eventos prioritários:
- `visita-header`
- `visita-hero`
- `visita-menu`
- `visita-mobile`
- `visita-final`
- `whatsapp-hero`
- `whatsapp-contato`
- `whatsapp-footer`
- `formulario-visita`
- `coc-video-play`
- `coc-video-youtube`
- `visita-coc-video`

O `site.js` envia `perini_cta_click` para `window.dataLayer` somente quando um `dataLayer` já tiver sido instalado externamente.
