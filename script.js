/* =========================================================
   Ankit Singh — Portfolio
   Vanilla HTML / CSS / JS. No build step, no dependencies.
   All file names below match the files in the repo root.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- DATA: edit here to update content ---------------- */
  const DATA = {
    roles: ['MCA Student', 'Full-Stack Developer', 'AI/ML Enthusiast'],

    skills: [
      { category: 'Programming languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C'] },
      { category: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
      { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'Socket.io'] },
      { category: 'Database', items: ['MongoDB', 'Mongoose'] },
      { category: 'AI / ML', items: ['Machine Learning', 'Agentic AI', 'Streamlit', 'Python'] },
      { category: 'Tools & deployment', items: ['Git & GitHub', 'VS Code', 'Postman', 'Vercel', 'Render', 'Streamlit Cloud'] },
      { category: 'Core CS', items: ['Data Structures', 'Algorithms', 'OOP'] },
      { category: 'Soft skills', items: ['Problem solving', 'Communication', 'Teamwork', 'Time management'] },
    ],

    education: [
      { period: '2026 – 2028', title: 'MCA — Master of Computer Applications', org: 'GEU Dehradun',
        detail: 'Advanced coursework in software architecture, distributed systems and applied algorithms.', current: true },
      { period: '2023 – 2026', title: 'BCA — Bachelor of Computer Applications', org: 'GEHU Dehradun',
        detail: 'Specialised in web and software development. Built multiple MERN stack projects during the program.' },
      { period: '2023', title: 'Class 12 — Uttarakhand Board', org: 'UK Board of Secondary Education',
        detail: 'Science stream with Computer Science.' },
      { period: '2021', title: 'Class 10 — Uttarakhand Board', org: 'UK Board of Secondary Education',
        detail: 'Foundation in mathematics and science.' },
    ],

    experience: [
      { title: 'AI/ML Internship', org: 'AI/ML Internship Program', period: '2026',
        detail: 'Worked on applied machine learning tasks and AI-driven solutions, strengthening my Python and ML fundamentals.',
        icon: 'brain', file: 'AIML_Internship_2.pdf' },
      { title: 'Web Development Internship', org: 'Internship Program', period: '2025',
        detail: 'Built real-world web applications in a professional setting, working on MERN stack features end to end.',
        icon: 'briefcase', file: 'Internship.png' },
      { title: 'Young Turks 25 — Round 1', org: 'Young Turks', period: '2025',
        detail: 'Cleared Round 1 of a competitive talent program, applying problem solving and technical skills under time pressure.',
        icon: 'trophy', file: 'young_turks25_round_1_achievement_page-0001.jpg' },
      { title: 'Personal projects', org: 'Self-directed', period: '2024 – Present',
        detail: 'Seven projects shipped across full-stack web, AI/ML, systems programming and frontend tooling.',
        icon: 'code' },
    ],

    projects: [
      { title: 'Personal Diet Planner', category: 'ai', tags: ['Python', 'Streamlit', 'Health Tech'],
        desc: 'A web app that creates a personalised diet plan from the user\'s body details, goals and preferences, deployed on Streamlit Cloud.',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=700&q=80',
        live: 'https://diet-planner-8hzzylecnqrwrsk3pdzvru.streamlit.app/' },
      { title: 'AI Intelligence Attendance System', category: 'ai', tags: ['Python', 'Computer Vision', 'AI'],
        desc: 'An AI-powered attendance system that identifies people automatically and records attendance, removing manual roll calls.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=700&q=80',
        github: 'https://github.com/ankitsingh2004' },
      { title: 'Real-time Collaboration Editor', category: 'fullstack', tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
        desc: 'A collaborative editor where multiple users edit at once, with live sync, presence indicators and conflict resolution.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80',
        github: 'https://github.com/ankitsingh2004/collaboration-editor' },
      { title: 'Expense Tracker', category: 'fullstack', tags: ['React', 'Node.js', 'MongoDB'],
        desc: 'Full-stack expense management with category breakdowns, charts, budget planning and multi-user authentication.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=80',
        live: 'https://expense-tracker-nu-bay.vercel.app/' },
      { title: 'Advanced Todo List', category: 'frontend', tags: ['JavaScript', 'HTML/CSS', 'LocalStorage'],
        desc: 'Task manager with categories, priorities, due dates, progress tracking and persistent storage, with zero dependencies.',
        image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=700&q=80',
        github: 'https://github.com/ankitsingh2004/Advance-Todo-List' },
      { title: 'CPU Scheduling & Process Manager', category: 'systems', tags: ['Python', 'psutil', 'Algorithms'],
        desc: 'System monitoring tool implementing FCFS, SJF and Round Robin scheduling with real-time resource tracking.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80',
        github: 'https://github.com/ankitsingh2004/process-manager' },
      { title: 'DSA & Java Applications', category: 'systems', tags: ['Java', 'C++', 'OOP', 'DSA'],
        desc: 'A collection of data structure implementations, algorithm solutions and object-oriented applications in Java and C++.',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=700&q=80',
        github: 'https://github.com/ankitsingh2004/DSAwithCpp' },
    ],

    certifications: [
      { title: 'AI/ML Internship Certificate', org: 'AI/ML Internship Program', file: 'AIML_Internship_2.pdf' },
      { title: 'Agentic AI Certificate', org: 'Agentic AI Program', file: 'AgenticAiCertificate.pdf' },
      { title: 'Web Development Internship', org: 'Internship Program', file: 'Internship.png' },
      { title: 'TCS iON Career Edge — Young Professional', org: 'Tata Consultancy Services', file: 'tcs-certificate.jpg' },
      { title: 'Machine Learning', org: 'Coursera', file: 'Coursera.jpg' },
      { title: 'Young Turks 25 — Round 1 Achievement', org: 'Young Turks', file: 'young_turks25_round_1_achievement_page-0001.jpg' },
      { title: 'NaukriCampus Participation', org: 'NaukriCampus', file: 'NaukriCampus_Certificate_Participation_page-0001.jpg' },
    ],

    services: [
      { title: 'Full-stack web development', desc: 'End-to-end MERN builds, from database design to a deployed frontend.' },
      { title: 'Frontend development', desc: 'Fast, accessible interfaces built with React and modern CSS.' },
      { title: 'Responsive web design', desc: 'Layouts that work from small phones to wide desktop displays.' },
      { title: 'AI-powered apps', desc: 'Python and Streamlit tools that put machine learning to practical use.' },
      { title: 'UI implementation', desc: 'Turning design files into pixel-accurate, production-ready code.' },
      { title: 'Landing pages', desc: 'Clear, fast landing pages that are easy to maintain.' },
    ],
  };

  /* ---------------- Icons ---------------- */
  const s = (p, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" ${extra}>${p}</svg>`;
  const ICONS = {
    github: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    leetcode: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 01.066-.523 2.545 2.545 0 01.619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 00-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0013.483 0zm-2.866 12.815a1.38 1.38 0 00-1.38 1.382 1.38 1.38 0 001.38 1.382H20.79a1.38 1.38 0 001.38-1.382 1.38 1.38 0 00-1.38-1.382z"/></svg>`,
    mail: s('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>'),
    phone: s('<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>'),
    pin: s('<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>'),
    download: s('<path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"/>', 'width="16" height="16"'),
    external: s('<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>', 'width="14" height="14"'),
    up: s('<polyline points="18 15 12 9 6 15"/>'),
    menu: s('<path d="M3 6h18M3 12h18M3 18h18"/>'),
    sun: s('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
    moon: s('<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>'),
    monitor: s('<rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>'),
    briefcase: s('<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>', 'width="22" height="22"'),
    brain: s('<path d="M12 5a3 3 0 10-5.9.8A3 3 0 004 9a3 3 0 001 2.2A3.5 3.5 0 007.5 17H12zM12 5a3 3 0 115.9.8A3 3 0 0120 9a3 3 0 01-1 2.2A3.5 3.5 0 0116.5 17H12zM12 5v16"/>', 'width="22" height="22"'),
    trophy: s('<path d="M6 9H4a2 2 0 01-2-2V5h4M18 9h2a2 2 0 002-2V5h-4M6 3h12v6a6 6 0 01-12 0zM12 15v4M8 21h8"/>', 'width="22" height="22"'),
    code: s('<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>', 'width="22" height="22"'),
    pdf: s('<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M9 13h6M9 17h6"/>', 'width="44" height="44" stroke-width="1.5"'),
  };
  document.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = ICONS[el.dataset.icon] || ''; });

  /* ---------------- Reveal on scroll ---------------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealObserver.unobserve(e.target); } });
  }, { threshold: 0.1 });
  const observe = (el) => revealObserver.observe(el);

  /* ---------------- Scroll progress + back to top ---------------- */
  const bar = document.getElementById('scrollProgress');
  const backTop = document.getElementById('backTop');
  function onScroll() {
    const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    backTop.classList.toggle('visible', scrollY > 600);
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  backTop.addEventListener('click', () => scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));

  /* ---------------- Navigation ---------------- */
  (function initNav() {
    const links = document.querySelectorAll('.nav-link');
    const ids = [...new Set([...links].map(b => b.dataset.target))];
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('mobileMenu');

    function goTo(id) {
      const el = document.getElementById(id);
      if (!el) return;
      scrollTo({ top: id === 'home' ? 0 : el.offsetTop - 64, behavior: reduceMotion ? 'auto' : 'smooth' });
      menu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
    links.forEach(b => b.addEventListener('click', () => goTo(b.dataset.target)));
    document.querySelectorAll('[data-scroll]').forEach(a => a.addEventListener('click', (e) => { e.preventDefault(); goTo(a.dataset.scroll); }));
    document.querySelector('.nav-logo').addEventListener('click', (e) => { e.preventDefault(); goTo('home'); });
    hamburger.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(open));
    });

    function spy() {
      const pos = scrollY + 140;
      let current = sections[0].id;
      sections.forEach(sec => { if (sec.offsetTop <= pos) current = sec.id; });
      links.forEach(b => b.classList.toggle('active', b.dataset.target === current));
    }
    document.addEventListener('scroll', spy, { passive: true });
    spy();
  })();

  /* ---------------- Theme: dark / light / system ---------------- */
  (function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const icons = toggle.querySelectorAll('.theme-icon');
    const modes = ['dark', 'light', 'system'];
    let mode = 'system';
    try { mode = localStorage.getItem('theme-mode') || 'system'; } catch (e) {}
    const isLight = (m) => m === 'light' || (m === 'system' && matchMedia('(prefers-color-scheme: light)').matches);

    function apply(m) {
      mode = m;
      try { localStorage.setItem('theme-mode', m); } catch (e) {}
      document.body.classList.toggle('light', isLight(m));
      document.body.classList.toggle('dark', !isLight(m));
      icons.forEach(i => { i.hidden = i.dataset.mode !== m; });
      toggle.title = `Theme: ${m}`;
    }
    toggle.addEventListener('click', () => apply(modes[(modes.indexOf(mode) + 1) % modes.length]));
    matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => { if (mode === 'system') apply('system'); });
    apply(mode);
  })();

  /* ---------------- Hero role typewriter ---------------- */
  (function typewriter() {
    const el = document.getElementById('typewriter');
    const words = DATA.roles;
    if (reduceMotion) { el.textContent = words[0]; return; }
    let wi = 0, ci = 0, deleting = false;
    (function tick() {
      const word = words[wi];
      if (!deleting && ci <= word.length) { el.textContent = word.slice(0, ci++); setTimeout(tick, 80); }
      else if (!deleting) { setTimeout(() => { deleting = true; tick(); }, 1600); }
      else if (ci > 0) { el.textContent = word.slice(0, --ci); setTimeout(tick, 35); }
      else { deleting = false; wi = (wi + 1) % words.length; setTimeout(tick, 250); }
    })();
  })();

  /* ---------------- Stat counters ---------------- */
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target, target = parseInt(el.dataset.count, 10);
      let cur = 0;
      const timer = setInterval(() => {
        cur++;
        el.textContent = cur;
        if (cur >= target) clearInterval(timer);
      }, reduceMotion ? 1 : 90);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-num[data-count]').forEach(c => counterObserver.observe(c));

  /* ---------------- Skills ---------------- */
  const skillsGrid = document.getElementById('skillsGrid');
  DATA.skills.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'skill-card card reveal';
    card.innerHTML = `<h3>${cat.category}</h3><div class="chips">${cat.items.map(i => `<span class="chip">${i}</span>`).join('')}</div>`;
    skillsGrid.appendChild(card);
    observe(card);
  });

  /* ---------------- Education ---------------- */
  const eduWrap = document.getElementById('educationTimeline');
  DATA.education.forEach(item => {
    const el = document.createElement('div');
    el.className = 'tl-item reveal';
    el.innerHTML = `
      <span class="tl-dot${item.current ? ' current' : ''}"></span>
      <div class="tl-card card">
        <span class="tl-period">${item.period}</span>${item.current ? '<span class="badge">In progress</span>' : ''}
        <h3>${item.title}</h3>
        <p class="tl-org">${item.org}</p>
        <p class="tl-desc">${item.detail}</p>
      </div>`;
    eduWrap.appendChild(el);
    observe(el);
  });

  /* ---------------- Experience ---------------- */
  const expGrid = document.getElementById('experienceGrid');
  DATA.experience.forEach(item => {
    const el = document.createElement('div');
    el.className = 'exp-card card reveal';
    el.innerHTML = `
      <div class="exp-icon">${ICONS[item.icon]}</div>
      <h3>${item.title}</h3>
      <p class="exp-meta">${item.org} &middot; ${item.period}</p>
      <p class="exp-desc">${item.detail}</p>
      ${item.file ? `<a class="link" href="${item.file}" target="_blank" rel="noopener">View certificate ${ICONS.external}</a>` : ''}`;
    expGrid.appendChild(el);
    observe(el);
  });

  /* ---------------- Projects + filter ---------------- */
  const projectsGrid = document.getElementById('projectsGrid');
  DATA.projects.forEach(p => {
    const card = document.createElement('article');
    card.className = 'project-card card';
    card.dataset.category = p.category;
    card.innerHTML = `
      <div class="project-img"><img src="${p.image}" alt="${p.title} preview" loading="lazy" onerror="this.style.display='none'" /></div>
      <div class="project-body">
        <div class="project-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-links">
          ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Live demo ${ICONS.external}</a>` : ''}
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">${ICONS.github.replace('width="20" height="20"', 'width="14" height="14"')} Code</a>` : ''}
        </div>
      </div>`;
    projectsGrid.appendChild(card);
  });
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.project-card').forEach(c => c.classList.toggle('hidden-card', f !== 'all' && c.dataset.category !== f));
    });
  });

  /* ---------------- Certificates + viewer (images and PDFs) ---------------- */
  (function certificates() {
    const grid = document.getElementById('certsGrid');
    const lb = document.getElementById('lightbox');
    const view = document.getElementById('lightboxView');
    const isPdf = (f) => f.toLowerCase().endsWith('.pdf');

    function open(c) {
      document.getElementById('lightboxTitle').textContent = c.title;
      document.getElementById('lightboxOrg').textContent = c.org;
      document.getElementById('lightboxDownload').href = c.file;
      view.innerHTML = isPdf(c.file)
        ? `<iframe src="${c.file}" title="${c.title}"></iframe>`
        : `<img src="${c.file}" alt="${c.title}" />`;
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
      document.getElementById('lightboxClose').focus();
    }
    function close() { lb.classList.remove('open'); view.innerHTML = ''; document.body.style.overflow = ''; }
    document.getElementById('lightboxClose').addEventListener('click', close);
    lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
    addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

    DATA.certifications.forEach(c => {
      const card = document.createElement('div');
      card.className = 'cert-card card reveal';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View ${c.title}`);
      card.innerHTML = `
        <div class="cert-thumb ${isPdf(c.file) ? 'cert-pdf' : ''}">
          ${isPdf(c.file) ? `${ICONS.pdf}<span>PDF certificate</span>` : `<img src="${c.file}" alt="${c.title}" loading="lazy" />`}
        </div>
        <div class="cert-body">
          <h3>${c.title}</h3>
          <p class="cert-org">${c.org}</p>
          <div class="cert-actions"><button type="button">View</button><a href="${c.file}" download>Download</a></div>
        </div>`;
      card.addEventListener('click', () => open(c));
      card.addEventListener('keydown', (e) => { if (e.key === 'Enter' && e.target === card) open(c); });
      card.querySelector('a').addEventListener('click', (e) => e.stopPropagation());
      grid.appendChild(card);
      observe(card);
    });
  })();

  /* ---------------- Services ---------------- */
  const servicesGrid = document.getElementById('servicesGrid');
  DATA.services.forEach(sv => {
    const el = document.createElement('div');
    el.className = 'service-card card reveal';
    el.innerHTML = `<h3>${sv.title}</h3><p>${sv.desc}</p>`;
    servicesGrid.appendChild(el);
    observe(el);
  });

  document.querySelectorAll('.reveal').forEach(observe);

  /* ---------------- Contact form -> Google Sheet (Apps Script) ---------------- */
  (function contact() {
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzeo8tzK8aTT5CGrrcaDuFi9aVi35B8ljzrS-AoZNAic3DP6zsAfpZpZ1dXPAz99QzK/exec';
    const form = document.getElementById('contactForm');
    const btn = document.getElementById('submitBtn');
    const btnText = btn.querySelector('.btn-text');
    const btnSending = btn.querySelector('.btn-sending');
    const msg = document.getElementById('formMsg');

    function setError(id, text) {
      document.getElementById(id).closest('.form-group').classList.toggle('error', !!text);
      document.getElementById('err-' + id).textContent = text || '';
    }
    function validate() {
      const name = form.fname.value.trim(), email = form.femail.value.trim(), message = form.fmessage.value.trim();
      let ok = true;
      if (!name) { setError('fname', 'Enter your name.'); ok = false; } else setError('fname', '');
      if (!email) { setError('femail', 'Enter your email address.'); ok = false; }
      else if (!/^\S+@\S+\.\S+$/.test(email)) { setError('femail', 'Enter a valid email address.'); ok = false; }
      else setError('femail', '');
      if (message.length < 10) { setError('fmessage', 'Write a message of at least 10 characters.'); ok = false; } else setError('fmessage', '');
      return ok;
    }
    function show(text, type) {
      msg.textContent = text; msg.className = 'form-msg ' + type; msg.hidden = false;
      setTimeout(() => { msg.hidden = true; }, 6000);
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validate()) return;
      btn.disabled = true; btnText.hidden = true; btnSending.hidden = false;
      try {
        // Apps Script sends no CORS headers, so we use no-cors; the row is still written.
        await fetch(SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: new FormData(form) });
        show('Message sent. Thanks for reaching out!', 'success');
        form.reset();
      } catch (err) {
        console.error(err);
        show('Message not sent. Try again, or email me at as5806801@gmail.com.', 'error');
      } finally {
        btn.disabled = false; btnText.hidden = false; btnSending.hidden = true;
      }
    });
  })();

  document.getElementById('year').textContent = new Date().getFullYear();
});
