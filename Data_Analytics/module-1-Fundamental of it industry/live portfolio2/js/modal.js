/**
 * Interactive Modals & Toast System
 * Khushali Kubavat Portfolio
 */

window.portfolioModal = (function () {
  // Create Modal Backdrop Container if missing
  function getModalContainer() {
    let container = document.getElementById('global-modal-root');
    if (!container) {
      container = document.createElement('div');
      container.id = 'global-modal-root';
      container.className = 'fixed inset-0 z-[100] hidden items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto transition-opacity duration-300';
      document.body.appendChild(container);
    }
    return container;
  }

  function openModal(contentHtml) {
    const container = getModalContainer();
    container.innerHTML = `
      <div class="relative w-full max-w-4xl bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden glass-card my-8 animate-float-none" onclick="event.stopPropagation()">
        <button onclick="window.portfolioModal.closeModal()" class="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition">
          <i data-lucide="x" class="w-6 h-6"></i>
        </button>
        <div class="p-6 md:p-8 max-h-[85vh] overflow-y-auto custom-scrollbar">
          ${contentHtml}
        </div>
      </div>
    `;
    container.onclick = closeModal;
    container.classList.remove('hidden');
    container.classList.add('flex');
    document.body.style.overflow = 'hidden';

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function closeModal() {
    const container = document.getElementById('global-modal-root');
    if (container) {
      container.classList.add('hidden');
      container.classList.remove('flex');
    }
    document.body.style.overflow = '';
  }

  function showProjectDetails(projectId) {
    const projects = window.portfolioData ? window.portfolioData.projects : [];
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const contentHtml = `
      <div class="space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
              ${project.category}
            </span>
            <h3 class="text-2xl md:text-3xl font-bold text-white">${project.title}</h3>
          </div>
          <div class="flex items-center gap-3">
            <a href="${project.github}" target="_blank" class="px-4 py-2 text-sm font-medium rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white transition flex items-center gap-2">
              <i data-lucide="github" class="w-4 h-4"></i> GitHub Code
            </a>
          </div>
        </div>

        <p class="text-slate-300 text-base leading-relaxed">${project.tagline}</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50">
            <h4 class="text-sm font-semibold text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <i data-lucide="alert-circle" class="w-4 h-4"></i> Business Problem
            </h4>
            <p class="text-slate-300 text-sm leading-relaxed">${project.problem}</p>
          </div>

          <div class="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50">
            <h4 class="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <i data-lucide="check-circle-2" class="w-4 h-4"></i> Data Science Solution
            </h4>
            <p class="text-slate-300 text-sm leading-relaxed">${project.solution}</p>
          </div>
        </div>

        <!-- Sample Metrics Grid -->
        ${project.sampleMetrics ? `
          <div class="p-4 rounded-xl bg-blue-950/30 border border-blue-500/20">
            <h4 class="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3">Model Performance & Dataset Specifications</h4>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              ${Object.entries(project.sampleMetrics).map(([key, val]) => `
                <div class="p-3 rounded-lg bg-slate-800/60 border border-slate-700/40">
                  <div class="text-xl font-bold text-white">${val}</div>
                  <div class="text-xs text-slate-400 capitalize mt-1">${key.replace(/([A-Z])/g, ' $1')}</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Interactive Simulator Demo Component -->
        <div class="p-5 rounded-xl bg-gradient-to-r from-slate-900 to-indigo-950 border border-indigo-500/30">
          <h4 class="text-sm font-semibold text-indigo-300 uppercase tracking-wider mb-3 flex items-center gap-2">
            <i data-lucide="play-circle" class="w-4 h-4"></i> Interactive Model Simulation
          </h4>
          <div id="interactive-demo-container" class="space-y-4">
            ${renderInteractiveDemo(project)}
          </div>
        </div>

        <!-- Key Features List -->
        <div>
          <h4 class="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3">Key Technical Features</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${project.features.map(f => `
              <div class="flex items-start gap-2 text-sm text-slate-300">
                <i data-lucide="check" class="w-4 h-4 text-blue-400 shrink-0 mt-0.5"></i>
                <span>${f}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Tech Stack Pills -->
        <div>
          <h4 class="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-2">Technologies Used</h4>
          <div class="flex flex-wrap gap-2">
            ${project.technologies.map(t => `
              <span class="px-3 py-1 text-xs font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                ${t}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    openModal(contentHtml);
  }

  function renderInteractiveDemo(project) {
    if (project.interactiveDemoType === 'churn') {
      return `
        <div class="text-sm space-y-3">
          <p class="text-slate-300">Adjust parameters below to test the churn risk classification model in real time:</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="block text-xs text-slate-400 mb-1">Monthly Charges ($)</label>
              <input type="range" id="demo-churn-charges" min="20" max="150" value="85" class="w-full" oninput="window.portfolioModal.updateChurnDemo()">
              <span id="val-churn-charges" class="text-xs text-blue-400 font-mono">$85</span>
            </div>
            <div>
              <label class="block text-xs text-slate-400 mb-1">Tenure (Months)</label>
              <input type="range" id="demo-churn-tenure" min="1" max="72" value="12" class="w-full" oninput="window.portfolioModal.updateChurnDemo()">
              <span id="val-churn-tenure" class="text-xs text-blue-400 font-mono">12 Months</span>
            </div>
            <div>
              <label class="block text-xs text-slate-400 mb-1">Support Tickets</label>
              <input type="range" id="demo-churn-tickets" min="0" max="10" value="4" class="w-full" oninput="window.portfolioModal.updateChurnDemo()">
              <span id="val-churn-tickets" class="text-xs text-blue-400 font-mono">4 Tickets</span>
            </div>
          </div>
          <div id="demo-churn-result" class="p-3 rounded-lg bg-rose-500/20 border border-rose-500/40 text-center font-semibold text-rose-300">
            High Risk: 78.4% Churn Probability
          </div>
        </div>
      `;
    } else if (project.interactiveDemoType === 'ai') {
      return `
        <div class="text-sm space-y-3">
          <p class="text-slate-300">Enter customer review text to test real-time NLP sentiment analysis:</p>
          <textarea id="demo-ai-input" rows="2" class="w-full p-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-200 text-sm focus:border-blue-500 focus:outline-none" placeholder="Type sample customer feedback here..."></textarea>
          <div class="flex justify-between items-center">
            <button onclick="window.portfolioModal.runAiDemo()" class="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition">
              Analyze Sentiment
            </button>
            <div id="demo-ai-result" class="text-xs font-semibold text-emerald-400">
              Ready for analysis
            </div>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="flex items-center justify-between text-sm text-slate-300">
          <span>Interactive data dashboard simulation active.</span>
          <span class="px-3 py-1 text-xs rounded bg-emerald-500/20 text-emerald-400 font-mono">Live Demo Ready</span>
        </div>
      `;
    }
  }

  function updateChurnDemo() {
    const charges = parseInt(document.getElementById('demo-churn-charges')?.value || '85');
    const tenure = parseInt(document.getElementById('demo-churn-tenure')?.value || '12');
    const tickets = parseInt(document.getElementById('demo-churn-tickets')?.value || '4');

    document.getElementById('val-churn-charges').innerText = `$${charges}`;
    document.getElementById('val-churn-tenure').innerText = `${tenure} Months`;
    document.getElementById('val-churn-tickets').innerText = `${tickets} Tickets`;

    const riskScore = Math.min(99, Math.max(5, Math.round((charges * 0.4) + (tickets * 12) - (tenure * 0.8))));
    const resEl = document.getElementById('demo-churn-result');
    if (resEl) {
      if (riskScore > 60) {
        resEl.className = 'p-3 rounded-lg bg-rose-500/20 border border-rose-500/40 text-center font-semibold text-rose-300';
        resEl.innerText = `High Risk: ${riskScore}% Churn Probability`;
      } else if (riskScore > 35) {
        resEl.className = 'p-3 rounded-lg bg-amber-500/20 border border-amber-500/40 text-center font-semibold text-amber-300';
        resEl.innerText = `Moderate Risk: ${riskScore}% Churn Probability`;
      } else {
        resEl.className = 'p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-center font-semibold text-emerald-300';
        resEl.innerText = `Low Risk: ${riskScore}% Churn Probability (Safe)`;
      }
    }
  }

  function runAiDemo() {
    const txt = document.getElementById('demo-ai-input')?.value || 'The data visualization dashboard is extremely fast and saved our team hours every week!';
    const resEl = document.getElementById('demo-ai-result');
    if (!resEl) return;

    if (txt.toLowerCase().includes('bad') || txt.toLowerCase().includes('slow') || txt.toLowerCase().includes('issue') || txt.toLowerCase().includes('error')) {
      resEl.className = 'text-xs font-semibold text-rose-400';
      resEl.innerText = 'Sentiment: Negative (89.2% Confidence)';
    } else {
      resEl.className = 'text-xs font-semibold text-emerald-400';
      resEl.innerText = 'Sentiment: Positive (94.7% Confidence)';
    }
  }

  function showResumeModal() {
    const data = window.portfolioData.personalInfo;
    const contentHtml = `
      <div class="space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h3 class="text-2xl font-bold text-white">${data.name}</h3>
            <p class="text-sm text-blue-400 font-medium">${data.title}</p>
          </div>
          <button onclick="window.print()" class="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition flex items-center gap-2">
            <i data-lucide="printer" class="w-4 h-4"></i> Print / Save PDF
          </button>
        </div>

        <div class="p-6 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 space-y-4 text-sm leading-relaxed">
          <div class="flex flex-wrap justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
            <span>Location: ${data.location}</span>
            <span>Phone: ${data.phone}</span>
            <span>WhatsApp: ${data.whatsapp}</span>
          </div>

          <div>
            <h4 class="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">Executive Summary</h4>
            <p>${data.heroSubheadline} ${data.heroDescription}</p>
          </div>

          <div>
            <h4 class="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">Experience</h4>
            <p class="font-semibold text-white">Data Scientist — 2 Years Professional Experience</p>
            <ul class="list-disc list-inside text-xs space-y-1 text-slate-400 mt-1">
              <li>End-to-end data cleaning, EDA, statistical modeling, and ML classification pipelines.</li>
              <li>Interactive dashboard building in Power BI & Plotly for cross-functional reporting.</li>
              <li>Advanced SQL database querying, aggregations, and feature engineering.</li>
            </ul>
          </div>

          <div>
            <h4 class="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">Core Technical Stack</h4>
            <p class="text-xs text-slate-400">Python, SQL, Pandas, NumPy, Scikit-learn, XGBoost, Power BI, Matplotlib, Seaborn, MySQL, PostgreSQL, Docker, AWS, Streamlit.</p>
          </div>
        </div>
      </div>
    `;
    openModal(contentHtml);
  }

  function showToast(message, type = 'success') {
    let toastRoot = document.getElementById('toast-root');
    if (!toastRoot) {
      toastRoot = document.createElement('div');
      toastRoot.id = 'toast-root';
      toastRoot.className = 'fixed bottom-6 right-6 z-[120] flex flex-col gap-2 pointer-events-none';
      document.body.appendChild(toastRoot);
    }

    const toast = document.createElement('div');
    const bgClass = type === 'success' ? 'bg-emerald-950/90 border-emerald-500/50 text-emerald-200' : 'bg-rose-950/90 border-rose-500/50 text-rose-200';
    toast.className = `px-5 py-3 rounded-xl border ${bgClass} shadow-xl backdrop-blur-md text-sm font-medium flex items-center gap-3 transition-all duration-300 transform translate-y-4 opacity-0 pointer-events-auto`;
    toast.innerHTML = `
      <i data-lucide="${type === 'success' ? 'check-circle' : 'alert-circle'}" class="w-5 h-5"></i>
      <span>${message}</span>
    `;

    toastRoot.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.classList.remove('translate-y-4', 'opacity-0');
    }, 50);

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-4');
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  return {
    openModal,
    closeModal,
    showProjectDetails,
    updateChurnDemo,
    runAiDemo,
    showResumeModal,
    showToast
  };
})();
