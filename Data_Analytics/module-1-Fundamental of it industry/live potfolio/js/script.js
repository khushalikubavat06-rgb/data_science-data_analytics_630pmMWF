/*
  Khushali Kubavat - Premium Data Analytics Portfolio JavaScript
  Interactive Visuals, Theme Switcher, Mobile Sidebar, AOS & Chart.js
*/

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------
  // 1. Theme Toggle Setup (Dark / Light Mode)
  // -------------------------------------------------------------
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const htmlElement = document.documentElement;

  // Read stored preference or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';

  function applyTheme(theme) {
    if (theme === 'light') {
      htmlElement.classList.add('light');
      htmlElement.classList.remove('dark');
      themeToggleBtns.forEach(btn => {
        btn.innerHTML = '<i class="fa-solid fa-moon text-lg text-slate-700"></i>';
        btn.setAttribute('aria-label', 'Switch to Dark Mode');
      });
    } else {
      htmlElement.classList.add('dark');
      htmlElement.classList.remove('light');
      themeToggleBtns.forEach(btn => {
        btn.innerHTML = '<i class="fa-solid fa-sun text-lg text-amber-400"></i>';
        btn.setAttribute('aria-label', 'Switch to Light Mode');
      });
    }
    localStorage.setItem('theme', theme);
  }

  applyTheme(currentTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isLight = htmlElement.classList.contains('light');
      applyTheme(isLight ? 'dark' : 'light');
    });
  });

  // -------------------------------------------------------------
  // 2. Sticky Navbar Scroll Effect & Active Section Tracker
  // -------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('shadow-lg', 'py-3');
      navbar.classList.remove('py-5');
    } else {
      navbar.classList.remove('shadow-lg', 'py-3');
      navbar.classList.add('py-5');
    }

    if (window.scrollY > 400) {
      backToTopBtn?.classList.remove('opacity-0', 'pointer-events-none');
      backToTopBtn?.classList.add('opacity-100');
    } else {
      backToTopBtn?.classList.add('opacity-0', 'pointer-events-none');
      backToTopBtn?.classList.remove('opacity-100');
    }
  });

  // Scroll to Top
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // IntersectionObserver for Navigation Active State
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

  // -------------------------------------------------------------
  // 3. Mobile Right Sidebar Drawer Logic
  // -------------------------------------------------------------
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenuBackdrop.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.add('translate-x-full');
    mobileMenuBackdrop.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
  }

  hamburgerBtn?.addEventListener('click', openMobileMenu);
  closeMenuBtn?.addEventListener('click', closeMobileMenu);
  mobileMenuBackdrop?.addEventListener('click', closeMobileMenu);
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

  // -------------------------------------------------------------
  // 4. Hero Mini Dashboard Chart (Chart.js)
  // -------------------------------------------------------------
  const heroChartCtx = document.getElementById('heroChart')?.getContext('2d');
  if (heroChartCtx && typeof Chart !== 'undefined') {
    const gradientCyan = heroChartCtx.createLinearGradient(0, 0, 0, 200);
    gradientCyan.addColorStop(0, 'rgba(6, 182, 212, 0.4)');
    gradientCyan.addColorStop(1, 'rgba(6, 182, 212, 0.0)');

    const gradientBlue = heroChartCtx.createLinearGradient(0, 0, 0, 200);
    gradientBlue.addColorStop(0, 'rgba(37, 99, 235, 0.4)');
    gradientBlue.addColorStop(1, 'rgba(37, 99, 235, 0.0)');

    new Chart(heroChartCtx, {
      type: 'line',
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q1 (Next)', 'Q2 (Next)'],
        datasets: [
          {
            label: 'Revenue Trend ($K)',
            data: [42, 68, 85, 110, 145, 180],
            borderColor: '#06B6D4',
            backgroundColor: gradientCyan,
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#06B6D4',
            pointRadius: 4,
            pointHoverRadius: 7
          },
          {
            label: 'Data Accuracy Index (%)',
            data: [88, 91, 93, 95, 97, 99],
            borderColor: '#2563EB',
            backgroundColor: gradientBlue,
            borderWidth: 2,
            borderDash: [5, 5],
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#2563EB',
            pointRadius: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            labels: {
              color: '#94A3B8',
              font: { family: 'Inter', size: 11 }
            }
          },
          tooltip: {
            backgroundColor: '#07111F',
            titleColor: '#06B6D4',
            bodyColor: '#F8FAFC',
            borderColor: '#2563EB',
            borderWidth: 1,
            padding: 10,
            displayColors: true
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#64748B', font: { family: 'Inter', size: 10 } }
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#64748B', font: { family: 'Inter', size: 10 } }
          }
        }
      }
    });
  }

  // -------------------------------------------------------------
  // 5. Skills Progress Bar Scroll Animation
  // -------------------------------------------------------------
  const skillBars = document.querySelectorAll('.skill-bar-inner');
  const skillsSection = document.getElementById('skills');

  if (skillsSection && skillBars.length > 0) {
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          skillBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width') || '0%';
            bar.style.width = targetWidth;
          });
          skillsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    skillsObserver.observe(skillsSection);
  }

  // -------------------------------------------------------------
  // 6. Achievements Stat Counter Animation
  // -------------------------------------------------------------
  const counters = document.querySelectorAll('.stat-counter');
  const statsSection = document.getElementById('achievements');

  if (statsSection && counters.length > 0) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target') || '0', 10);
            const suffix = counter.getAttribute('data-suffix') || '';
            const duration = 2000;
            const stepTime = 20;
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                counter.innerText = target + suffix;
                clearInterval(timer);
              } else {
                counter.innerText = Math.ceil(current) + suffix;
              }
            }, stepTime);
          });
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
  }

  // -------------------------------------------------------------
  // 7. Project Category Filtering & Case Study Modal
  // -------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active filter button styling
      filterBtns.forEach(b => {
        b.classList.remove('bg-cyan-500', 'text-slate-900', 'active-filter');
        b.classList.add('bg-slate-800/60', 'text-slate-300', 'hover:bg-slate-700/60');
      });
      btn.classList.remove('bg-slate-800/60', 'text-slate-300', 'hover:bg-slate-700/60');
      btn.classList.add('bg-cyan-500', 'text-slate-900', 'active-filter');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Project Case Study Modal Details Data
  const projectDataMap = {
    1: {
      title: 'Sales Performance Dashboard',
      tools: ['Power BI', 'SQL', 'Excel'],
      overview: 'Designed and deployed an enterprise-grade interactive Power BI dashboard for global sales analytics tracking $12M+ annual revenue.',
      challenge: 'Sales directors lacked real-time visibility into regional sales growth, product margin fluctuations, and sales rep performance across 15+ markets.',
      solution: 'Built an automated SQL ETL pipeline linking CRM & ERP data into Power BI. Integrated DAX time-intelligence measures for YoY growth and interactive drill-through reports.',
      results: ['Reduced reporting generation time by 85%', 'Identified 3 high-margin product opportunities driving +14% revenue', 'Automated daily data refreshes for 40+ sales stakeholders']
    },
    2: {
      title: 'Customer Analytics & Segmentation',
      tools: ['Python', 'Pandas', 'SQL', 'Power BI'],
      overview: 'Conducted RFM (Recency, Frequency, Monetary) segmentation and cohort analysis on 250K+ customer transactions.',
      challenge: 'High customer churn rate and uniform marketing campaigns resulting in low conversion metrics.',
      solution: 'Wrote custom Python scripts to execute K-Means clustering and RFM scoring. Created interactive Power BI dashboards detailing churn propensity and lifetime value (LTV).',
      results: ['Segmented customers into 5 distinct behavioral personas', 'Increased targeted campaign ROI by 28%', 'Reduced customer churn rate by 11% in Q3']
    },
    3: {
      title: 'E-Commerce Analytics Platform',
      tools: ['Python', 'SQL', 'Excel', 'Power BI'],
      overview: 'End-to-end e-commerce funnel analytics platform analyzing order management, inventory turnover, and conversion rates.',
      challenge: 'Fragmented data across Shopify, Google Analytics, and MySQL warehouse preventing unified cross-channel attribution.',
      solution: 'Integrated multi-source data with SQL transformations, cleaned datasets using Pandas, and surfaced KPI cards & funnel visualizations in Power BI.',
      results: ['Optimized checkout flow reducing cart abandonment by 18%', 'Improved inventory turnover reporting accuracy to 99%', 'Uncovered top cross-selling product bundles']
    },
    4: {
      title: 'Financial Performance Analysis',
      tools: ['Excel', 'Power BI', 'SQL'],
      overview: 'Comprehensive financial dashboard monitoring OPEX, CAPEX, profit margins, monthly variances, and budget forecasting.',
      challenge: 'Manual spreadsheet consolidation caused weekly delays and human data entry errors in financial audits.',
      solution: 'Leveraged Power Query for automated data modeling, dynamic Power Pivot metrics, and executive summary dashboards with KPI alerts.',
      results: ['Automated financial closing reports saving 20+ hours monthly', 'Achieved 99.5% variance tracking accuracy vs budget targets', 'Provided board-ready executive visualizations']
    },
    5: {
      title: 'HR Analytics & Attrition Dashboard',
      tools: ['Power BI', 'Excel', 'SQL'],
      overview: 'Strategic workforce intelligence solution forecasting employee turnover and analyzing satisfaction factors.',
      challenge: 'HR leadership needed data-backed insights to understand department-wise attrition spikes and compensation parity.',
      solution: 'Analyzed demographic, tenure, and performance review data in SQL & Excel. Built predictive attrition risk scoring models in Power BI.',
      results: ['Pinpointed key attrition factors in tech departments', 'Enabled proactive HR retention strategies reducing turnover by 15%', 'Standardized salary equity reporting']
    },
    6: {
      title: 'Python Data Analysis & EDA Package',
      tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      overview: 'Exploratory data analysis toolkit performing statistical testing, correlation matrices, and distribution visualizations on complex multi-dimensional datasets.',
      challenge: 'Raw, uncleaned datasets containing 20%+ missing values, outliers, and inconsistent categorical schemas.',
      solution: 'Built automated Python EDA pipelines utilizing Pandas, NumPy, and Seaborn for automated outlier detection, missing value imputation, and correlation heatmaps.',
      results: ['Automated statistical data cleaning pipeline for 100K+ records', 'Generated publication-grade analytical charts & statistical summaries', 'Reduced data prep time for data science team by 60%']
    }
  };

  const projectModal = document.getElementById('project-modal');
  const projectModalBackdrop = document.getElementById('project-modal-backdrop');
  const closeProjectModalBtn = document.getElementById('close-project-modal');
  const caseStudyBtns = document.querySelectorAll('.view-case-study-btn');

  function openProjectModal(projectId) {
    const data = projectDataMap[projectId];
    if (!data) return;

    document.getElementById('modal-project-title').innerText = data.title;
    document.getElementById('modal-project-tools').innerHTML = data.tools.map(t => `<span class="px-2.5 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium">${t}</span>`).join(' ');
    document.getElementById('modal-project-overview').innerText = data.overview;
    document.getElementById('modal-project-challenge').innerText = data.challenge;
    document.getElementById('modal-project-solution').innerText = data.solution;
    document.getElementById('modal-project-results').innerHTML = data.results.map(r => `<li class="flex items-start space-x-2"><i class="fa-solid fa-circle-check text-cyan-400 mt-1"></i><span>${r}</span></li>`).join('');

    projectModal.classList.remove('hidden');
    setTimeout(() => {
      projectModalBackdrop.classList.remove('opacity-0');
      projectModal.querySelector('.modal-content').classList.remove('scale-95', 'opacity-0');
    }, 10);
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    projectModalBackdrop.classList.add('opacity-0');
    projectModal.querySelector('.modal-content').classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
      projectModal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 250);
  }

  caseStudyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });

  closeProjectModalBtn?.addEventListener('click', closeProjectModal);
  projectModalBackdrop?.addEventListener('click', closeProjectModal);

  // -------------------------------------------------------------
  // 8. Contact Form Client-side Validation & Toast Feedback
  // -------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const phone = document.getElementById('contact-phone').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      showFormMessage('Please fill out all required fields (Name, Email, Message).', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormMessage('Please enter a valid email address.', 'error');
      return;
    }

    // Simulate successful form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Sending...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      contactForm.reset();
      showFormMessage('Thank you, ' + name + '! Your message has been sent successfully. Khushali will get back to you shortly.', 'success');
    }, 1200);
  });

  function showFormMessage(msg, type) {
    if (!formStatus) return;
    formStatus.classList.remove('hidden', 'bg-emerald-500/10', 'text-emerald-400', 'border-emerald-500/30', 'bg-rose-500/10', 'text-rose-400', 'border-rose-500/30');

    if (type === 'success') {
      formStatus.classList.add('bg-emerald-500/10', 'text-emerald-400', 'border', 'border-emerald-500/30');
    } else {
      formStatus.classList.add('bg-rose-500/10', 'text-rose-400', 'border', 'border-rose-500/30');
    }

    formStatus.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'} mr-2 text-lg"></i> ${msg}`;

    setTimeout(() => {
      formStatus.classList.add('hidden');
    }, 6000);
  }

  // -------------------------------------------------------------
  // 9. AOS Initialization
  // -------------------------------------------------------------
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }
});
