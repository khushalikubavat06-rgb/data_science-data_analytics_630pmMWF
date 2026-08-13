/**
 * Core Application Controller
 * Khushali Kubavat Data Science Portfolio
 */

document.addEventListener('DOMContentLoaded', function () {
  const data = window.portfolioData;
  if (!data) return;

  // Initialize Lucide Icons
  if (window.lucide) window.lucide.createIcons();

  // Initialize Sections & Rendering
  renderHero(data.personalInfo);
  renderStats(data.stats);
  renderAbout(data.about);
  renderExperience(data.experienceTimeline);
  renderSkills(data.skillsCategorized);
  renderTools(data.tools);
  renderProjects(data.projects, 'All');
  renderAcademic(data.academicJourney, data.academicProjects);
  renderCertifications(data.certifications);
  renderServices(data.services);
  renderWorkflow(data.workflow);
  renderContact(data.personalInfo);
  renderFooter(data.personalInfo);

  // Initialize Navigation & Interactivity
  setupNavigation();
  setupMobileDrawer();
  setupScrollSpy();
  setupContactForm();
  setupScrollProgressAndTopBtn();

  // Initialize Charts & AOS
  setTimeout(() => {
    if (window.initPortfolioCharts) window.initPortfolioCharts();
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }, 100);
});

/* ---------------- Render Functions ---------------- */

function renderHero(info) {
  const badgeEl = document.getElementById('hero-badge');
  const headingEl = document.getElementById('hero-heading');
  const subheadlineEl = document.getElementById('hero-subheadline');
  const bioEl = document.getElementById('hero-bio');

  if (badgeEl) badgeEl.innerText = info.badge;
  if (headingEl) headingEl.innerText = info.heroHeading;
  if (subheadlineEl) subheadlineEl.innerText = info.heroSubheadline;
  if (bioEl) bioEl.innerText = info.heroDescription;
}

function renderStats(stats) {
  const container = document.getElementById('stats-grid');
  if (!container) return;

  container.innerHTML = stats.map(s => `
    <div class="glass-card p-6 rounded-2xl text-center border border-white/10 hover:border-blue-500/50 transition-all group" data-aos="zoom-in">
      <div class="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
        <i data-lucide="${s.icon}" class="w-6 h-6"></i>
      </div>
      <div class="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight">
        <span class="counter" data-target="${s.number}">0</span>${s.suffix}
      </div>
      <div class="text-xs md:text-sm font-medium text-slate-400 uppercase tracking-wider">${s.label}</div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
  animateCounters();
}

function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        const duration = 1500; // ms
        const step = Math.max(1, Math.floor(target / (duration / 16)));
        let current = 0;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            counter.innerText = target;
            clearInterval(timer);
          } else {
            counter.innerText = current;
          }
        }, 16);

        obs.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function renderAbout(about) {
  const p1 = document.getElementById('about-p1');
  const p2 = document.getElementById('about-p2');
  const tagsContainer = document.getElementById('about-focus-tags');

  if (p1) p1.innerText = about.paragraph1;
  if (p2) p2.innerText = about.paragraph2;
  if (tagsContainer) {
    tagsContainer.innerHTML = about.focusAreas.map(tag => `
      <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 transition">
        ${tag}
      </span>
    `).join('');
  }
}

function renderExperience(timeline) {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  container.innerHTML = timeline.map(exp => `
    <div class="relative pl-6 md:pl-10 border-l-2 border-blue-500/30 space-y-4" data-aos="fade-up">
      <!-- Glowing Node dot -->
      <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-slate-900 shadow-lg shadow-blue-500/50"></div>

      <div class="glass-card p-6 md:p-8 rounded-2xl border border-white/10 space-y-4">
        <div class="flex flex-wrap items-start justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
              ${exp.duration}
            </span>
            <h3 class="text-xl md:text-2xl font-bold text-white mt-2">${exp.role}</h3>
            <p class="text-sm font-medium text-slate-400">${exp.companyPlaceholder} • ${exp.location}</p>
          </div>
          <span class="text-xs text-slate-400 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
            ${exp.startDate} - ${exp.endDate}
          </span>
        </div>

        <p class="text-sm text-slate-300 leading-relaxed">${exp.description}</p>

        <div>
          <h4 class="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">Key Responsibilities</h4>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs md:text-sm text-slate-300">
            ${exp.responsibilities.map(r => `
              <li class="flex items-start gap-2">
                <i data-lucide="chevron-right" class="w-4 h-4 text-blue-400 shrink-0 mt-0.5"></i>
                <span>${r}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div>
          <h4 class="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">Key Accomplishments</h4>
          <div class="space-y-1.5 text-xs text-slate-300">
            ${exp.achievements.map(a => `
              <div class="flex items-center gap-2">
                <i data-lucide="award" class="w-4 h-4 text-purple-400 shrink-0"></i>
                <span>${a}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pt-2 flex flex-wrap gap-2">
          ${exp.techStack.map(t => `
            <span class="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700">
              ${t}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

function renderSkills(categorized) {
  const tabsContainer = document.getElementById('skills-category-tabs');
  const gridContainer = document.getElementById('skills-matrix-grid');
  if (!tabsContainer || !gridContainer) return;

  // Tabs Header
  tabsContainer.innerHTML = categorized.map((c, i) => `
    <button onclick="window.filterSkillsCategory(${i})" id="skill-tab-${i}" class="skill-tab-btn px-4 py-2 text-xs md:text-sm font-medium rounded-xl border transition ${i === 0 ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/20' : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'}">
      ${c.category}
    </button>
  `).join('');

  window.filterSkillsCategory = function (idx) {
    document.querySelectorAll('.skill-tab-btn').forEach((btn, i) => {
      if (i === idx) {
        btn.className = 'skill-tab-btn px-4 py-2 text-xs md:text-sm font-medium rounded-xl border transition bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/20';
      } else {
        btn.className = 'skill-tab-btn px-4 py-2 text-xs md:text-sm font-medium rounded-xl border transition bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700';
      }
    });

    const categoryObj = categorized[idx];
    gridContainer.innerHTML = `
      <div class="col-span-full mb-4">
        <p class="text-sm text-slate-400">${categoryObj.description}</p>
      </div>
      ${categoryObj.skills.map(s => `
        <div class="glass-card p-4 rounded-xl border border-white/10 space-y-2 hover:border-blue-500/40 transition">
          <div class="flex items-center justify-between text-sm">
            <span class="font-semibold text-white flex items-center gap-2">
              <i data-lucide="${s.icon}" class="w-4 h-4 text-blue-400"></i> ${s.name}
            </span>
            <span class="text-xs font-mono text-blue-400 font-bold">${s.level}%</span>
          </div>
          <div class="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
            <div class="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000" style="width: ${s.level}%"></div>
          </div>
        </div>
      `).join('')}
    `;
    if (window.lucide) window.lucide.createIcons();
  };

  // Render initial tab (Index 0)
  window.filterSkillsCategory(0);
}

function renderTools(tools) {
  const container = document.getElementById('tools-grid');
  if (!container) return;

  container.innerHTML = tools.map(t => `
    <div class="tool-card glass-card p-4 rounded-xl text-center border border-white/10 hover:border-blue-500/50 transition-all group hover:-translate-y-1" data-aos="fade-up">
      <div class="tool-icon-wrapper w-12 h-12 mx-auto mb-3 rounded-xl bg-slate-900/80 border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
        <i data-lucide="${t.svg}" class="w-6 h-6 text-blue-400 group-hover:text-cyan-400 transition-colors"></i>
      </div>
      <div class="text-sm font-bold text-white mb-0.5">${t.name}</div>
      <div class="text-[10px] text-slate-400 uppercase tracking-wider">${t.category}</div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

function renderProjects(projects, activeCategory = 'All') {
  const tabsContainer = document.getElementById('project-filter-tabs');
  const gridContainer = document.getElementById('projects-grid');
  if (!gridContainer) return;

  const categories = ['All', 'Data Analytics', 'Data Science', 'Machine Learning', 'AI', 'NLP'];

  if (tabsContainer) {
    tabsContainer.innerHTML = categories.map(cat => `
      <button onclick="window.filterProjects('${cat}')" class="proj-tab-btn px-4 py-2 text-xs md:text-sm font-medium rounded-xl border transition ${cat === activeCategory ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/20' : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'}">
        ${cat}
      </button>
    `).join('');
  }

  window.filterProjects = function (cat) {
    renderProjects(projects, cat);
  };

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category.toLowerCase().includes(cat.toLowerCase()) || (cat === 'NLP' && p.category.includes('AI')));

  gridContainer.innerHTML = filtered.map(p => `
    <div class="glass-card rounded-2xl border border-white/10 overflow-hidden flex flex-col hover:border-blue-500/40 transition group" data-aos="fade-up">
      <div class="p-6 border-b border-slate-800/60 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40">
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            ${p.category}
          </span>
          <div class="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
            <i data-lucide="${p.icon}" class="w-4 h-4"></i>
          </div>
        </div>
        <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">${p.title}</h3>
        <p class="text-xs text-slate-400 mt-2 line-clamp-2">${p.tagline}</p>
      </div>

      <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h4 class="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Key Problem & Solution</h4>
          <p class="text-xs text-slate-400 leading-relaxed line-clamp-3">${p.solution}</p>
        </div>

        <div>
          <h4 class="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Technologies</h4>
          <div class="flex flex-wrap gap-1.5">
            ${p.technologies.slice(0, 5).map(t => `
              <span class="px-2 py-0.5 text-[11px] rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                ${t}
              </span>
            `).join('')}
            ${p.technologies.length > 5 ? `<span class="px-2 py-0.5 text-[11px] rounded bg-slate-800 text-slate-400">+${p.technologies.length - 5}</span>` : ''}
          </div>
        </div>

        <div class="pt-4 border-t border-slate-800/60 flex items-center justify-between gap-3">
          <a href="${p.github}" target="_blank" class="px-3 py-2 text-xs font-medium rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition flex items-center gap-1.5">
            <i data-lucide="github" class="w-3.5 h-3.5"></i> GitHub
          </a>
          <button onclick="window.portfolioModal.showProjectDetails('${p.id}')" class="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-500/20 transition flex items-center gap-1.5">
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i> Live Demo & Specs
          </button>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

function renderAcademic(journey, projects) {
  const degEl = document.getElementById('academic-degree');
  const instEl = document.getElementById('academic-institution');
  const yrEl = document.getElementById('academic-year');
  const descEl = document.getElementById('academic-desc');
  const courseContainer = document.getElementById('academic-coursework');
  const acadProjectsContainer = document.getElementById('academic-projects-grid');

  if (degEl) degEl.innerText = journey.degree;
  if (instEl) instEl.innerText = journey.institution;
  if (yrEl) yrEl.innerText = journey.year;
  if (descEl) descEl.innerText = journey.description;

  if (courseContainer) {
    courseContainer.innerHTML = journey.coursework.map(c => `
      <span class="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700">
        ${c}
      </span>
    `).join('');
  }

  if (acadProjectsContainer) {
    acadProjectsContainer.innerHTML = projects.map(ap => `
      <div class="glass-card p-6 rounded-2xl border border-white/10 hover:border-purple-500/40 transition" data-aos="fade-up">
        <div class="flex items-center justify-between gap-2 mb-3">
          <h4 class="text-lg font-bold text-white">${ap.title}</h4>
          <a href="${ap.github}" target="_blank" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition">
            <i data-lucide="github" class="w-4 h-4"></i>
          </a>
        </div>
        <p class="text-xs text-slate-300 mb-4 leading-relaxed">${ap.description}</p>
        <div class="space-y-2 text-xs">
          <div><strong class="text-purple-400">Objective:</strong> <span class="text-slate-400">${ap.objective}</span></div>
          <div><strong class="text-cyan-400">Key Learning:</strong> <span class="text-slate-400">${ap.keyLearning}</span></div>
        </div>
        <div class="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-800">
          ${ap.technologies.map(t => `<span class="px-2 py-0.5 text-[10px] rounded bg-slate-800 text-slate-300">${t}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  if (window.lucide) window.lucide.createIcons();
}

function renderCertifications(certs) {
  const container = document.getElementById('certifications-grid');
  if (!container) return;

  container.innerHTML = certs.map(c => `
    <div class="glass-card p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition flex flex-col justify-between" data-aos="zoom-in">
      <div class="space-y-2">
        <div class="flex items-start justify-between gap-2">
          <div class="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
            <i data-lucide="shield-check" class="w-5 h-5"></i>
          </div>
          <span class="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
            ${c.date}
          </span>
        </div>
        <h4 class="text-base font-bold text-white pt-1">${c.name}</h4>
        <p class="text-xs text-slate-400">${c.organization}</p>
        <p class="text-[11px] font-mono text-slate-500">ID: ${c.credentialId}</p>
      </div>
      <div class="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between">
        <div class="flex flex-wrap gap-1">
          ${c.skills.slice(0, 3).map(s => `<span class="px-2 py-0.5 text-[10px] rounded bg-slate-800 text-slate-400">${s}</span>`).join('')}
        </div>
        <button onclick="window.portfolioModal.showToast('Certification ID ${c.credentialId} verified!', 'success')" class="text-xs text-cyan-400 font-semibold hover:underline flex items-center gap-1">
          Verify <i data-lucide="chevron-right" class="w-3 h-3"></i>
        </button>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

function renderServices(services) {
  const container = document.getElementById('services-grid');
  if (!container) return;

  container.innerHTML = services.map(s => `
    <div class="glass-card p-6 md:p-8 rounded-2xl border border-white/10 hover:border-blue-500/40 transition space-y-4 group" data-aos="fade-up">
      <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
        <i data-lucide="${s.icon}" class="w-6 h-6"></i>
      </div>
      <h3 class="text-xl font-bold text-white">${s.title}</h3>
      <p class="text-xs md:text-sm text-slate-400 leading-relaxed">${s.description}</p>
      <ul class="space-y-2 pt-2 border-t border-slate-800">
        ${s.features.map(f => `
          <li class="flex items-center gap-2 text-xs text-slate-300">
            <i data-lucide="check-circle" class="w-3.5 h-3.5 text-blue-400 shrink-0"></i>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

function renderWorkflow(workflow) {
  const container = document.getElementById('workflow-steps-grid');
  if (!container) return;

  container.innerHTML = workflow.map(w => `
    <div class="glass-card p-5 rounded-2xl border border-white/10 hover:border-blue-500/40 transition space-y-3 relative group" data-aos="fade-up">
      <div class="flex items-center justify-between">
        <span class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-mono">
          ${w.step}
        </span>
        <div class="w-8 h-8 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <i data-lucide="${w.icon}" class="w-4 h-4"></i>
        </div>
      </div>
      <div>
        <h4 class="text-base font-bold text-white">${w.title}</h4>
        <div class="text-[11px] font-semibold text-blue-400">${w.subtitle}</div>
      </div>
      <p class="text-xs text-slate-400 leading-relaxed">${w.description}</p>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

function renderContact(info) {
  const phoneVal = document.getElementById('contact-phone-val');
  const waVal = document.getElementById('contact-wa-val');
  const emailVal = document.getElementById('contact-email-val');

  if (phoneVal) phoneVal.innerText = info.phone;
  if (waVal) waVal.innerText = info.whatsapp;
  if (emailVal) emailVal.innerText = info.email;
}

function renderFooter(info) {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.innerText = new Date().getFullYear();
}

/* ---------------- Event Handlers & Navigation ---------------- */

function setupNavigation() {
  const navbar = document.getElementById('main-navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      navbar?.classList.add('glass-nav', 'shadow-2xl');
    } else {
      navbar?.classList.remove('glass-nav', 'shadow-2xl');
    }
  });
}

function setupMobileDrawer() {
  const btnOpen = document.getElementById('mobile-menu-btn');
  const btnClose = document.getElementById('mobile-drawer-close');
  const overlay = document.getElementById('mobile-drawer-overlay');
  const drawer = document.getElementById('mobile-drawer-content');
  const links = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    overlay?.classList.remove('hidden');
    setTimeout(() => {
      overlay?.classList.remove('opacity-0');
      drawer?.classList.remove('translate-x-full');
    }, 10);
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer?.classList.add('translate-x-full');
    overlay?.classList.add('opacity-0');
    setTimeout(() => {
      overlay?.classList.add('hidden');
    }, 350);
    document.body.style.overflow = '';
  }

  btnOpen?.addEventListener('click', openDrawer);
  btnClose?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);
  links.forEach(l => l.addEventListener('click', closeDrawer));
}

function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', function () {
    let current = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('form-name')?.value.trim();
    const email = document.getElementById('form-email')?.value.trim();
    const phone = document.getElementById('form-phone')?.value.trim();
    const message = document.getElementById('form-message')?.value.trim();
    const btnSubmit = document.getElementById('form-submit-btn');

    if (!name || !email || !message) {
      window.portfolioModal.showToast('Please fill out all required fields.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      window.portfolioModal.showToast('Please enter a valid email address.', 'error');
      return;
    }

    if (btnSubmit) {
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Sending Message...`;
      if (window.lucide) window.lucide.createIcons();
    }

    setTimeout(() => {
      window.portfolioModal.showToast('Thank you! Your message has been sent successfully.', 'success');
      form.reset();
      if (btnSubmit) {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = `Send Message <i data-lucide="send" class="w-4 h-4"></i>`;
        if (window.lucide) window.lucide.createIcons();
      }
    }, 1500);
  });
}

function setupScrollProgressAndTopBtn() {
  const progressBar = document.getElementById('scroll-progress');
  const topBtn = document.getElementById('back-to-top-btn');

  window.addEventListener('scroll', function () {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    if (progressBar) progressBar.style.width = scrolled + '%';

    if (topBtn) {
      if (winScroll > 500) {
        topBtn.classList.remove('opacity-0', 'pointer-events-none');
        topBtn.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        topBtn.classList.add('opacity-0', 'pointer-events-none');
        topBtn.classList.remove('opacity-100', 'pointer-events-auto');
      }
    }
  });

  topBtn?.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
