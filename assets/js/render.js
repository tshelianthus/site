let currentLang = localStorage.getItem('site_lang') || 'zh';

document.addEventListener('DOMContentLoaded', () => {
  if (window.siteContent) {
    renderLanguageVersion();
  } else {
    console.error('Copywriting data (window.siteContent) not found. Please make sure assets/js/content.js is loaded.');
  }
});

function renderLanguageVersion() {
  const data = window.siteContent[currentLang] || window.siteContent.zh;
  // Update html lang attribute
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  renderContent(data);
  initLanguageSwitcher();
  initThemeToggle();
}

function initLanguageSwitcher() {
  const navUtils = document.querySelector('.nav-utilities');
  if (!navUtils) return;

  let switcher = document.getElementById('lang-switcher');
  if (!switcher) {
    switcher = document.createElement('button');
    switcher.id = 'lang-switcher';
    switcher.className = 'lang-switcher';
    switcher.setAttribute('aria-label', 'Switch language');
    
    switcher.addEventListener('click', () => {
      currentLang = currentLang === 'zh' ? 'en' : 'zh';
      localStorage.setItem('site_lang', currentLang);
      renderLanguageVersion();
    });
  }

  navUtils.appendChild(switcher);
  updateSwitcherText(switcher);
}

function updateSwitcherText(btn) {
  const zhActive = currentLang === 'zh' ? 'active' : '';
  const enActive = currentLang === 'en' ? 'active' : '';
  btn.innerHTML = `
    <span class="lang-opt ${zhActive}">中</span>
    <span class="lang-divider">/</span>
    <span class="lang-opt ${enActive}">EN</span>
  `;
}

function initThemeToggle() {
  const navUtils = document.querySelector('.nav-utilities');
  if (!navUtils) return;

  let toggle = document.getElementById('theme-toggle');
  if (!toggle) {
    toggle = document.createElement('button');
    toggle.id = 'theme-toggle';
    toggle.className = 'theme-toggle';
    
    toggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('site_theme', nextTheme);
      updateThemeToggleIcon(toggle, nextTheme);
    });
  }

  navUtils.appendChild(toggle);
  const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  updateThemeToggleIcon(toggle, activeTheme);
}

function updateThemeToggleIcon(btn, theme) {
  if (theme === 'light') {
    btn.setAttribute('aria-label', currentLang === 'zh' ? '切换至深色模式' : 'Switch to dark mode');
    btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>
    `;
  } else {
    btn.setAttribute('aria-label', currentLang === 'zh' ? '切换至浅色模式' : 'Switch to light mode');
    btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
      </svg>
    `;
  }
}

function renderContent(data) {
  // 1. Meta Description & Title
  if (data.meta) {
    if (data.meta.title) document.title = data.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && data.meta.description) {
      metaDesc.setAttribute('content', data.meta.description);
    }
  }

  // 2. Navigation
  const navContainer = document.querySelector('.nav-links');
  if (navContainer && data.nav) {
    navContainer.innerHTML = '';
    
    // Create menu wrapper for anchor links
    const navMenu = document.createElement('div');
    navMenu.className = 'nav-menu';
    
    data.nav.forEach(item => {
      const a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.text;
      navMenu.appendChild(a);
    });
    
    navContainer.appendChild(navMenu);
    
    // Create utility wrapper for settings/switchers
    const navUtils = document.createElement('div');
    navUtils.className = 'nav-utilities';
    navContainer.appendChild(navUtils);
  }

  // 3. Simple Text Injection (data-text)
  const textElements = document.querySelectorAll('[data-text]');
  textElements.forEach(el => {
    const key = el.getAttribute('data-text');
    const val = getValueByPath(data, key);
    if (val !== undefined) {
      el.textContent = val;
    }
  });

  // 4. HTML Injection (data-html)
  const htmlElements = document.querySelectorAll('[data-html]');
  htmlElements.forEach(el => {
    const key = el.getAttribute('data-html');
    const val = getValueByPath(data, key);
    if (val !== undefined) {
      el.innerHTML = val;
    }
  });

  // 5. Hero Actions
  const heroActionsContainer = document.querySelector('.hero-actions');
  if (heroActionsContainer && data.hero && data.hero.actions) {
    heroActionsContainer.innerHTML = '';
    data.hero.actions.forEach(action => {
      const a = document.createElement('a');
      a.className = action.primary ? 'button primary' : 'button';
      a.href = action.href;
      a.textContent = action.text;
      if (action.href.startsWith('http')) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
      heroActionsContainer.appendChild(a);
    });
  }

  // 6. Hero Focus list
  const focusListContainer = document.querySelector('.focus-list');
  if (focusListContainer && data.hero && data.hero.focus && data.hero.focus.items) {
    focusListContainer.innerHTML = '';
    data.hero.focus.items.forEach((item, idx) => {
      const li = document.createElement('li');
      const prefix = String(idx + 1).padStart(2, '0');
      li.innerHTML = `<span>${prefix}</span> ${item}`;
      focusListContainer.appendChild(li);
    });
  }

  // 7. Timeline rendering
  const timelineContainer = document.querySelector('.timeline-container');
  if (timelineContainer && data.about && data.about.timeline) {
    timelineContainer.innerHTML = '';
    data.about.timeline.forEach(item => {
      const div = document.createElement('div');
      div.className = 'timeline-item';
      div.innerHTML = `
        <div class="timeline-meta">
          <span class="timeline-year">${item.year}</span>
          <span class="timeline-role">${item.role}</span>
        </div>
        <div class="timeline-content">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      `;
      timelineContainer.appendChild(div);
    });
  }

  // 8. Outcomes grid rendering
  const outcomesGrid = document.querySelector('.outcomes-grid');
  if (outcomesGrid && data.outcomes && data.outcomes.items) {
    outcomesGrid.innerHTML = '';
    data.outcomes.items.forEach(item => {
      const article = document.createElement('article');
      article.className = 'outcome-card';
      article.innerHTML = `
        <div class="outcome-meta">
          <span>${item.meta}</span>
          <span class="badge font-mono">${item.badge}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      `;
      outcomesGrid.appendChild(article);
    });
  }

  // 9. Skill panel rendering
  const skillPanel = document.querySelector('.skill-panel');
  if (skillPanel && data.skills && data.skills.items) {
    skillPanel.innerHTML = '';
    data.skills.items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'skill-row';
      div.innerHTML = `
        <span>${item.label}</span>
        <strong>${item.value}</strong>
      `;
      skillPanel.appendChild(div);
    });
  }

  // 10. OSS grid rendering
  const ossGrid = document.querySelector('.oss-grid');
  if (ossGrid && data.oss && data.oss.items) {
    ossGrid.innerHTML = '';
    data.oss.items.forEach(item => {
      const isLink = !!item.url;
      const card = document.createElement(isLink ? 'a' : 'div');
      card.className = 'oss-card' + (isLink ? '' : ' oss-card-static');
      if (isLink) {
        card.href = item.url;
        card.target = '_blank';
        card.rel = 'noopener';
      }
      
      const statusBadge = item.status 
        ? `<span class="badge font-mono status-badge" style="opacity: 0.6; font-size: 0.75rem;">${item.status}</span>` 
        : '';
        
      card.innerHTML = `
        <div class="oss-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <strong>${item.name}</strong>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <span class="tech-tag">${item.tech}</span>
            ${statusBadge}
          </div>
        </div>
        <p>${item.desc}</p>
      `;
      ossGrid.appendChild(card);
    });
  }

  // 11. Notes grid rendering
  const notesGrid = document.querySelector('.notes-grid');
  if (notesGrid && data.notes && data.notes.items) {
    notesGrid.innerHTML = '';
    data.notes.items.forEach(item => {
      const card = document.createElement('a');
      card.className = 'note-card';
      card.href = item.url;
      card.target = '_blank';
      card.rel = 'noopener';
      card.innerHTML = `
        <div class="note-card-meta">
          <span class="note-tag">${item.tag}</span>
          <span class="note-date">${item.date}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.excerpt}</p>
        <span class="note-read-more">Read on Hashnode →</span>
      `;
      notesGrid.appendChild(card);
    });
  }

  // Update notes "more" link text
  const notesMoreLink = document.getElementById('notes-more-link');
  if (notesMoreLink && data.notes && data.notes.more) {
    notesMoreLink.href = data.notes.more.href;
    notesMoreLink.textContent = data.notes.more.text;
  }

  // 12. Footer links
  const footerLinksContainer = document.querySelector('.footer-links');
  if (footerLinksContainer && data.footer && data.footer.links) {
    footerLinksContainer.innerHTML = '';
    data.footer.links.forEach(link => {
      const a = document.createElement('a');
      a.href = link.href;
      
      let iconSvg = '';
      if (link.href.startsWith('mailto:')) {
        iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="footer-link-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`;
      } else {
        iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="footer-link-icon"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
      }
      
      a.innerHTML = `${iconSvg}<span>${link.text}</span>`;
      footerLinksContainer.appendChild(a);
    });
  }

  // 13. Initialize Scroll Animations & Scroll Spy (once only to prevent listener duplication)
  if (!window.scrollInteractionsInitialized) {
    initScrollInteractions();
    window.scrollInteractionsInitialized = true;
  }
}

function initScrollInteractions() {
  // Scroll Reveal
  const revealElements = document.querySelectorAll('.section, .site-footer');
  revealElements.forEach(el => {
    el.classList.add('reveal-hidden');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));

  // Scroll Spy (Active nav links)
  const sections = document.querySelectorAll('section, footer');
  
  window.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('.nav-menu a');
    let currentSectionId = '';
    const scrollPos = window.scrollY + 200; // offset for header

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 80) {
      currentSectionId = 'contact';
    }

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (currentSectionId && link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

function getValueByPath(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}
