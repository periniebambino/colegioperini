(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const cfg = window.PERINI_CONFIG;
  const content = window.PERINI_CONTENT;
  const images = window.PERINI_IMAGES;

  if (!cfg || !content || !images) return;

  const setText = (selector, value) => $$(selector).forEach((el) => {
    if (value != null) el.textContent = value;
  });
  const setHref = (selector, value) => $$(selector).forEach((el) => {
    if (value) el.href = value;
  });
  const whatsAppUrl = (message) => `https://wa.me/${cfg.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
  const visitHref = whatsAppUrl(cfg.links.visitMessage);
  const defaultWhatsAppHref = whatsAppUrl('Olá! Conheci o Colégio Perini pelo site e gostaria de mais informações.');

  // Dados e links globais — uma única fonte para facilitar manutenção.
  setHref('[data-visit-link]', visitHref);
  setHref('[data-whatsapp]', defaultWhatsAppHref);
  setHref('[data-phone]', cfg.contact.phoneHref);
  setHref('[data-email]', cfg.contact.emailHref);
  setHref('[data-maps]', cfg.contact.mapsHref);
  setHref('[data-portal]', cfg.links.portalAluno);
  setText('[data-address]', cfg.contact.address);
  setText('[data-phone-text]', cfg.contact.phoneDisplay);
  setText('[data-whatsapp-text]', cfg.contact.whatsappDisplay);
  setText('[data-email-text]', cfg.contact.email);
  setText('[data-year]', String(new Date().getFullYear()));

  const logo = $('#brand-logo');
  if (logo) logo.src = images.logo;

  const heroImage = $('#hero-image');
  if (heroImage) {
    heroImage.src = images.hero.fallback;
    heroImage.srcset = images.hero.srcset;
  }

  setText('[data-hero-eyebrow]', content.hero.eyebrow);
  setText('[data-hero-text]', content.hero.text);
  const heroTitle = $('[data-hero-title]');
  if (heroTitle) heroTitle.innerHTML = content.hero.title.map((line) => `<span>${line}</span>`).join('');

  const pillars = $('#pillars-grid');
  if (pillars) {
    pillars.innerHTML = content.pillars.map((item, index) => `
      <article class="pillar ${item.key}" data-reveal>
        <span class="num">${String(index + 1).padStart(2, '0')}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>`).join('');
  }

  const stages = $('#stages-grid');
  if (stages) {
    stages.innerHTML = content.stages.map((stage, index) => {
      const image = images[stage.imageKey];
      const stageMessage = `Olá! Conheci o Colégio Perini pelo site e gostaria de informações sobre ${stage.label}.`;
      const stageHref = whatsAppUrl(stageMessage);
      return `
        <article class="stage-card" data-reveal>
          <div class="stage-media">
            <img src="${image.fallback}" srcset="${image.srcset}" sizes="(max-width:1080px) 92vw, 55vw" width="1586" height="992" alt="${stage.label} no Colégio Perini" loading="${index === 0 ? 'eager' : 'lazy'}" decoding="async">
          </div>
          <div class="stage-copy">
            <span>${stage.years}</span>
            <h3>${stage.label}</h3>
            <p>${stage.text}</p>
            <a href="${stageHref}" target="_blank" rel="noopener noreferrer" data-track="etapa-${stage.id}" aria-label="Pedir informações sobre ${stage.label}">Quero conhecer esta etapa <span aria-hidden="true">→</span></a>
          </div>
        </article>`;
    }).join('');
  }

  $$('[data-stage-visit]').forEach((link) => {
    const stage = link.dataset.stageVisit;
    link.href = whatsAppUrl(`Olá! Conheci o Colégio Perini pelo site e gostaria de informações sobre ${stage}.`);
  });

  setText('[data-history-title]', content.history.title);
  setText('[data-history-text]', content.history.text);
  setText('[data-coc-title]', content.coc.title);
  setText('[data-coc-text]', content.coc.text);

  const cocItems = $('#coc-items');
  if (cocItems) {
    cocItems.innerHTML = content.coc.items.map((item, index) => `
      <div class="coc-item"><b>${String(index + 1).padStart(2, '0')}</b><span>${item}</span></div>`).join('');
  }

  const projects = $('#projects-grid');
  if (projects) {
    projects.innerHTML = content.projects.map((project, index) => `
      <article class="project-card" data-reveal>
        <span class="project-num">${String(index + 1).padStart(2, '0')}</span>
        <h3>${project.title}</h3>
        <p>${project.text}</p>
      </article>`).join('');
  }

  setText('[data-highschool-text]', content.highSchool.text);
  setText('[data-highschool-phase1]', content.highSchool.phase1Text);
  setText('[data-highschool-phase2]', content.highSchool.phase2Text);
  const stats = $('#hs-stats');
  if (stats) {
    stats.innerHTML = content.highSchool.stats.map((stat) => `
      <div class="hs-stat"><strong>${stat.value}</strong><span>${stat.label}</span></div>`).join('');
  }

  setText('[data-teachers-title]', content.teachers.title);
  setText('[data-teachers-text]', content.teachers.text);
  const teacherItems = $('#teacher-items');
  if (teacherItems) teacherItems.innerHTML = content.teachers.items.map((item) => `<div class="teacher-item">${item}</div>`).join('');

  setText('[data-family-text]', content.family.text);
  setText('[data-structure-title]', content.structure.title);
  setText('[data-structure-text]', content.structure.text);
  const structureList = $('#structure-list');
  if (structureList) {
    structureList.innerHTML = content.structure.items.map((item, index) => `
      <article class="structure-item" data-reveal>
        <span class="structure-index">${String(index + 1).padStart(2, '0')}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>`).join('');
  }

  const faq = $('#faq-list');
  if (faq) {
    faq.innerHTML = content.faq.map((item) => `
      <details class="faq-item">
        <summary>${item.question}</summary>
        <div class="faq-answer">${item.answer}</div>
      </details>`).join('');
  }

  setText('[data-finalcta-title]', content.finalCta.title);
  setText('[data-finalcta-text]', content.finalCta.text);

  const map = $('#school-map');
  if (map) map.src = cfg.contact.mapsEmbed;

  // Schema.org é montado com os mesmos dados do config.js para evitar divergências.
  const schema = $('#org-schema');
  if (schema) {
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: cfg.school.name,
      url: cfg.school.baseUrl,
      logo: `${cfg.school.baseUrl}assets/brand/logo-colegio-perini-cropped.png`,
      telephone: cfg.contact.phoneDisplay,
      email: cfg.contact.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'R. Adão Gonçalves da Costa, 127',
        addressLocality: 'Carapicuíba',
        addressRegion: 'SP',
        postalCode: '06321-040',
        addressCountry: 'BR'
      }
    });
  }

  // Campanha opcional.
  const campaign = $('#campaign-bar');
  const header = $('#site-header');
  if (campaign && cfg.campaign.active) {
    const campaignHref = whatsAppUrl(cfg.campaign.message);
    campaign.hidden = false;
    campaign.innerHTML = `<strong>${cfg.campaign.label}</strong> · ${cfg.campaign.text} <a href="${campaignHref}" target="_blank" rel="noopener noreferrer" data-track="campanha">Saiba mais →</a>`;
    document.body.classList.add('campaign-active');
    header?.classList.add('campaign-offset');
  }

  // Menu mobile acessível com retorno de foco e contenção do teclado.
  const menu = $('#mobile-menu');
  const toggle = $('#menu-toggle');
  const close = $('#mobile-close');
  let previousFocus = null;
  if (menu) menu.inert = true;

  const focusables = () => $$('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])', menu).filter((el) => !el.hasAttribute('hidden'));
  const setMenu = (open) => {
    if (!menu || !toggle) return;
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    menu.inert = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.classList.toggle('menu-open', open);
    if (open) {
      previousFocus = document.activeElement;
      setTimeout(() => close?.focus({ preventScroll: true }), 80);
    } else if (previousFocus instanceof HTMLElement) {
      previousFocus.focus();
    }
  };

  toggle?.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));
  close?.addEventListener('click', () => setMenu(false));
  $$('.mobile-link', menu).forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (!menu?.classList.contains('is-open')) return;
    if (event.key === 'Escape') {
      setMenu(false);
      return;
    }
    if (event.key === 'Tab') {
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  // CTA fixo no mobile aparece somente quando o CTA principal do hero sai da tela.
  const mobileAction = $('.mobile-action');
  const heroPrimary = $('.hero-actions [data-visit-link]');
  if (mobileAction && heroPrimary && 'IntersectionObserver' in window) {
    const actionObserver = new IntersectionObserver(([entry]) => {
      mobileAction.classList.toggle('is-visible', !entry.isIntersecting);
    }, { threshold: 0.05 });
    actionObserver.observe(heroPrimary);
  } else if (mobileAction) {
    const syncMobileAction = () => mobileAction.classList.toggle('is-visible', window.scrollY > 520);
    syncMobileAction();
    addEventListener('scroll', syncMobileAction, { passive: true });
  }

  // Header compacto após o início da rolagem.
  const syncHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 18);
  syncHeader();
  addEventListener('scroll', syncHeader, { passive: true });

  // Revelação progressiva com fallback completo para reduced motion.
  const reveal = () => {
    const elements = $$('[data-reveal]');
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
    elements.forEach((el) => observer.observe(el));
  };
  reveal();

  // Estado atual do menu desktop sem interferir na navegação.
  if ('IntersectionObserver' in window) {
    const navLinks = $$('.desktop-nav a[href^="#"]');
    const sections = navLinks.map((link) => $(link.getAttribute('href'))).filter(Boolean);
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${visible.target.id}`;
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.1, 0.4] });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  // Hooks prontos para Analytics/GTM no futuro, sem instalar rastreamento agora.
  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-track]');
    if (!target || !Array.isArray(window.dataLayer)) return;
    window.dataLayer.push({ event: 'perini_cta_click', cta: target.dataset.track });
  });
})();
