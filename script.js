/* =========================================================
   Ankit Singh — Portfolio
   Vanilla HTML / CSS / JS. No build step, no dependencies.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------
     DATA — edit here to update site content
  --------------------------------------------------------- */
  const DATA = {
    roles: ['MCA Student', 'Software Engineer', 'Frontend Developer'],

    skillCategories: [
      { category: 'Programming Languages', skills: [
        { name: 'JavaScript', level: 85 }, { name: 'TypeScript', level: 65 },
        { name: 'Java', level: 75 }, { name: 'C++', level: 75 },
        { name: 'C', level: 70 }, { name: 'Python', level: 70 },
      ]},
      { category: 'Frontend', skills: [
        { name: 'React.js', level: 85 }, { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 88 }, { name: 'Tailwind CSS', level: 80 },
      ]},
      { category: 'Backend', skills: [
        { name: 'Node.js', level: 80 }, { name: 'Express.js', level: 78 },
        { name: 'REST APIs', level: 82 }, { name: 'Socket.io', level: 65 },
      ]},
      { category: 'Database', skills: [
        { name: 'MongoDB', level: 78 }, { name: 'Mongoose', level: 72 },
      ]},
      { category: 'Frameworks & Tools', skills: [
        { name: 'Git & GitHub', level: 85 }, { name: 'VS Code', level: 90 }, { name: 'Postman', level: 80 },
      ]},
      { category: 'Cloud & Deployment', skills: [
        { name: 'Vercel', level: 75 }, { name: 'Render', level: 65 },
      ]},
      { category: 'Core CS', skills: [
        { name: 'Data Structures', level: 80 }, { name: 'Algorithms', level: 78 }, { name: 'OOP', level: 82 },
      ]},
      { category: 'Soft Skills', skills: [
        { name: 'Problem Solving', level: 88 }, { name: 'Communication', level: 80 },
        { name: 'Teamwork', level: 82 }, { name: 'Time Management', level: 78 },
      ]},
    ],

    education: [
      { period: '2026 – 2028', title: 'MCA — Master of Computer Applications', org: 'GEHU Dehradun',
        detail: 'Advanced coursework in software architecture, distributed systems, and applied algorithms.', current: true },
      { period: '2023 – 2026', title: 'BCA — Bachelor of Computer Applications', org: 'GEHU Dehradun',
        detail: 'Specialized in web & software development. Built 6+ MERN stack projects during the program.' },
      { period: '2023', title: '12th — Uttarakhand Board', org: 'UK Board of Secondary Education',
        detail: 'Science stream with Computer Science.' },
      { period: '2021', title: '10th — Uttarakhand Board', org: 'UK Board of Secondary Education',
        detail: 'Foundation in mathematics and science.' },
    ],

    experience: [
      { title: 'Web Development Internship', org: 'Open to opportunities', period: '2025',
        detail: 'Built real-world web applications in a professional setting, collaborating on MERN stack features end to end.',
        icon: 'briefcase' },
      { title: 'Freelance Projects', org: 'Independent', period: 'Ongoing',
        detail: 'Currently open to freelance frontend/full-stack work — landing pages, dashboards, and MERN applications.',
        icon: 'laptop', placeholder: true },
      { title: 'Open Source Contributions', org: 'GitHub', period: 'Ongoing',
        detail: 'Actively exploring open-source repositories to contribute fixes and small features.',
        icon: 'git', placeholder: true },
      { title: 'Personal Projects', org: 'Self-directed', period: '2024 – Now',
        detail: '6 shipped projects spanning full-stack apps, systems programming, and frontend tools.',
        icon: 'code' },
    ],

    projects: [
      { title: 'Real-time Collaboration Editor', category: 'fullstack', tags: ['React','Node.js','Socket.io','MongoDB'],
        desc: 'A collaborative code/text editor where multiple users can edit simultaneously with live sync, presence indicators, and conflict resolution.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80',
        github: 'https://github.com/ankitsingh2004/collaboration-editor' },
      { title: 'Expense Tracker', category: 'fullstack', tags: ['React','Node.js','MongoDB'],
        desc: 'Full-stack expense management with category breakdown, interactive charts, budget planning, and multi-user authentication.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=80',
        live: 'https://expense-tracker-nu-bay.vercel.app/' },
      { title: 'CPU Scheduling & Process Manager', category: 'systems', tags: ['Python','psutil','Algorithms'],
        desc: 'System monitoring tool implementing FCFS, SJF, Round Robin scheduling with real-time resource tracking via psutil.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80',
        github: 'https://github.com/ankitsingh2004/process-manager' },
      { title: 'Advanced Todo List', category: 'frontend', tags: ['JavaScript','HTML/CSS','LocalStorage'],
        desc: 'Feature-rich task manager with categories, priorities, due dates, progress tracking, and persistent storage — zero dependencies.',
        image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=700&q=80',
        github: 'https://github.com/ankitsingh2004/Advance-Todo-List' },
      { title: 'Weather App', category: 'frontend', tags: ['React','API','Geolocation','CSS3'],
        desc: 'Responsive weather application with geolocation detection, 7-day forecasts, animated weather icons, and a clean glassmorphic UI.',
        image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=700&q=80',
        github: 'https://github.com/ankitsingh2004/weather-app' },
      { title: 'DSA & Java Applications', category: 'systems', tags: ['Java','C++','OOP','DSA'],
        desc: 'A curated collection of data structure implementations, algorithm solutions, and object-oriented desktop applications in Java and C++.',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=700&q=80',
        github: 'https://github.com/ankitsingh2004/DSAwithCpp' },
    ],

    certifications: [
      { title: 'Young Turks 25 — Round 1 Achievement', org: 'Young Turks', icon: '🏆', file: 'certs/young_turks25_round_1_achievement_page-0001.jpg' },
      { title: 'Web Development Internship', org: 'Internship Program', icon: '💼', file: 'certs/Internship.png' },
      { title: 'TCS iON Career Edge — Young Professional', org: 'Tata Consultancy Services', icon: '🎓', file: 'certs/tcs-certificate.jpg' },
      { title: 'Machine Learning', org: 'Coursera', icon: '🤖', file: 'certs/Coursera.jpg' },
      { title: 'NaukriCampus Participation', org: 'NaukriCampus', icon: '👥', file: 'certs/NaukriCampus_Certificate_Participation_page-0001.jpg' },
    ],

    services: [
      { title: 'Frontend Development', desc: 'Building fast, accessible interfaces with React and modern CSS.' },
      { title: 'React Development', desc: 'Component-driven apps with clean state management and reusable UI.' },
      { title: 'Responsive Web Design', desc: 'Layouts that hold up perfectly from mobile to ultra-wide displays.' },
      { title: 'UI Implementation', desc: 'Turning design files into pixel-accurate, production-ready code.' },
      { title: 'Website Development', desc: 'End-to-end MERN stack builds — from database to deployed frontend.' },
      { title: 'Landing Page Development', desc: 'Conversion-focused landing pages with polish and performance.' },
    ],

    // Clearly-marked placeholders — replace with real feedback before publishing.
    testimonials: [
      { name: 'Add a real testimonial', role: 'Placeholder — Mentor / Teammate / Client', rating: 5, placeholder: true,
        quote: 'This is placeholder text. Replace this with genuine feedback from a mentor, professor, teammate, or client once you have one.' },
      { name: 'Add a real testimonial', role: 'Placeholder — Mentor / Teammate / Client', rating: 5, placeholder: true,
        quote: 'Swap this card out for real feedback about a project you delivered, a hackathon you contributed to, or an internship you completed.' },
    ],
  };

  /* ---------------------------------------------------------
     Splash / Loader
  --------------------------------------------------------- */
  (function initLoader() {
    const loader = document.getElementById('loader');
    const lines = loader.querySelectorAll('.ld-line');
    lines.forEach((line, i) => {
      setTimeout(() => {
        line.textContent = line.dataset.text;
        line.classList.add('show');
      }, 380 * i);
    });
    setTimeout(() => loader.classList.add('hide'), 380 * lines.length + 500);
  })();

  /* ---------------------------------------------------------
     Ambient particle background
  --------------------------------------------------------- */
  (function initCanvas() {
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');
    let w, h, particles;
    const colors = ['199,146,234', '127,219,174', '130,170,255'];

    function resize() { w = canvas.width = innerWidth; h = canvas.height = innerHeight; }
    function seed() {
      const count = Math.min(55, Math.floor((w * h) / 24000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.6, c: colors[Math.floor(Math.random() * colors.length)],
      }));
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c},.5)`; ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 110) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${particles[i].c},${(1 - dist / 110) * 0.12})`; ctx.stroke();
          }
        }
      }
      if (!prefersReducedMotion) requestAnimationFrame(draw);
    }
    resize(); seed(); draw();
    let t; window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(() => { resize(); seed(); if (prefersReducedMotion) draw(); }, 150); });
  })();

  /* ---------------------------------------------------------
     Custom cursor
  --------------------------------------------------------- */
  (function initCursor() {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;

    addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    });
    (function loop() {
      rx += (mx - rx) * .15; ry += (my - ry) * .15;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(loop);
    })();

    document.body.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, .magnetic, [role="button"]')) ring.classList.add('hover');
    });
    document.body.addEventListener('mouseout', (e) => {
      if (e.target.closest('a, button, .magnetic, [role="button"]')) ring.classList.remove('hover');
    });
  })();

  /* ---------------------------------------------------------
     Scroll progress bar
  --------------------------------------------------------- */
  (function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    function update() {
      const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    }
    document.addEventListener('scroll', update, { passive: true });
    update();
  })();

  /* ---------------------------------------------------------
     Navigation — tab bar + mobile menu + scrollspy
  --------------------------------------------------------- */
  (function initNav() {
    const navButtons = document.querySelectorAll('[data-target]');
    const sections = [...new Set([...navButtons].map(b => b.dataset.target))]
      .map(id => document.getElementById(id)).filter(Boolean);
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    function goTo(id) {
      const el = document.getElementById(id);
      if (!el) return;
      scrollTo({ top: el.offsetTop - 58, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
    }
    navButtons.forEach(btn => btn.addEventListener('click', () => goTo(btn.dataset.target)));
    document.querySelectorAll('[data-nav]').forEach(el => {
      if (!el.dataset.target) el.addEventListener('click', (e) => { e.preventDefault(); goTo('home'); });
    });

    hamburger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
    });

    function setActive() {
      const pos = scrollY + 140;
      let current = sections[0]?.id;
      sections.forEach(s => { if (s.offsetTop <= pos) current = s.id; });
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.target === current));
    }
    document.addEventListener('scroll', setActive, { passive: true });
    setActive();
  })();

  /* ---------------------------------------------------------
     Theme: dark / light / system
  --------------------------------------------------------- */
  (function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const iconSun = toggle.querySelector('.icon-sun');
    const iconMoon = toggle.querySelector('.icon-moon');
    const iconSystem = toggle.querySelector('.icon-system');
    const modes = ['dark', 'light', 'system'];
    let mode = localStorage.getItem('theme-mode') || 'system';

    function isLight(m) {
      if (m === 'light') return true;
      if (m === 'dark') return false;
      return matchMedia('(prefers-color-scheme: light)').matches;
    }
    function apply(m) {
      mode = m;
      localStorage.setItem('theme-mode', m);
      document.body.classList.add('theme-transition');
      document.body.classList.toggle('light', isLight(m));
      document.body.classList.toggle('dark', !isLight(m));
      [iconSun, iconMoon, iconSystem].forEach(i => i.hidden = true);
      ({ dark: iconMoon, light: iconSun, system: iconSystem })[m].hidden = false;
      setTimeout(() => document.body.classList.remove('theme-transition'), 400);
    }
    toggle.addEventListener('click', () => apply(modes[(modes.indexOf(mode) + 1) % modes.length]));
    matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => { if (mode === 'system') apply('system'); });
    apply(mode);
  })();

  /* ---------------------------------------------------------
     Hero: terminal boot + typewriter
  --------------------------------------------------------- */
  (function initHero() {
    const whoami = document.getElementById('whoamiText');
    const whoamiCursor = document.getElementById('whoamiCursor');
    const heroName = document.getElementById('heroName');
    const heroRole = document.getElementById('heroRole');
    const text = 'whoami';
    let i = 0;

    function typeWhoami() {
      if (i <= text.length) {
        whoami.textContent = text.slice(0, i);
        i++;
        setTimeout(typeWhoami, 90);
      } else {
        setTimeout(() => {
          whoamiCursor.style.display = 'none';
          document.querySelectorAll('.hero .reveal-up').forEach(el => el.classList.add('in'));
          startRoleTypewriter();
        }, 300);
      }
    }
    setTimeout(typeWhoami, 500);

    function startRoleTypewriter() {
      const el = document.getElementById('typewriter');
      const words = DATA.roles;
      let wi = 0, ci = 0, deleting = false;
      function tick() {
        const word = words[wi];
        if (!deleting && ci <= word.length) { el.textContent = word.slice(0, ci); ci++; setTimeout(tick, 85); }
        else if (!deleting) { setTimeout(() => { deleting = true; tick(); }, 1500); }
        else if (deleting && ci > 0) { ci--; el.textContent = word.slice(0, ci); setTimeout(tick, 40); }
        else { deleting = false; wi = (wi + 1) % words.length; setTimeout(tick, 200); }
      }
      tick();
    }
  })();

  document.getElementById('scrollIndicator').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });

  /* ---------------------------------------------------------
     Scroll reveal (IntersectionObserver) + counters + skill bars
  --------------------------------------------------------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  function observeReveal(el) { revealObserver.observe(el); }

  /* ---------------------------------------------------------
     About: stats counter + tabs
  --------------------------------------------------------- */
  (function initAbout() {
    document.querySelectorAll('#about .reveal').forEach(observeReveal);

    const counters = document.querySelectorAll('.stat-num[data-count]');
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        let cur = 0;
        const step = Math.max(1, Math.ceil(target / 40));
        const timer = setInterval(() => {
          cur += step;
          if (cur >= target) { cur = target; clearInterval(timer); }
          el.textContent = cur;
        }, 30);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach(c => counterObserver.observe(c));

    document.querySelectorAll('.mini-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.mini-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
      });
    });
  })();

  /* ---------------------------------------------------------
     Skills: render categorized cards with animated bars
  --------------------------------------------------------- */
  (function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    DATA.skillCategories.forEach(cat => {
      const card = document.createElement('div');
      card.className = 'skill-card glass reveal';
      const key = cat.category.toLowerCase().replace(/\s+/g, '-');
      card.innerHTML = `
        <p class="file-path">"<span class="accent2">${key}</span>": {</p>
        ${cat.skills.map(s => `
          <div class="skill-row">
            <div class="skill-row-top"><span>${s.name}</span><span class="pct">${s.level}%</span></div>
            <div class="skill-track"><div class="skill-fill" data-level="${s.level}"></div></div>
          </div>`).join('')}
        <p class="file-path" style="margin-top:.5rem">}</p>
      `;
      grid.appendChild(card);
      observeReveal(card);
    });

    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          requestAnimationFrame(() => { bar.style.width = bar.dataset.level + '%'; });
        });
        barObserver.unobserve(entry.target);
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.skill-card').forEach(c => barObserver.observe(c));
  })();

  /* ---------------------------------------------------------
     Education timeline
  --------------------------------------------------------- */
  (function renderEducation() {
    const wrap = document.getElementById('educationTimeline');
    DATA.education.forEach(item => {
      const el = document.createElement('div');
      el.className = 'tl-item reveal';
      el.innerHTML = `
        <span class="tl-dot${item.current ? ' current' : ''}"></span>
        <div class="tl-card glass">
          <div class="tl-top">
            <span class="file-path" style="margin:0">${item.period}</span>
            ${item.current ? '<span class="tl-badge">in progress</span>' : ''}
          </div>
          <h3>${item.title}</h3>
          <p class="tl-org">${item.org}</p>
          <p class="tl-desc">${item.detail}</p>
        </div>`;
      wrap.appendChild(el);
      observeReveal(el);
    });
  })();

  /* ---------------------------------------------------------
     Experience
  --------------------------------------------------------- */
  (function renderExperience() {
    const icons = {
      briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>',
      laptop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/></svg>',
      git: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 9v6M18 9a9 9 0 01-9 9"/><circle cx="18" cy="6" r="3"/></svg>',
      code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    };
    const grid = document.getElementById('experienceGrid');
    DATA.experience.forEach(item => {
      const el = document.createElement('div');
      el.className = `exp-card glass reveal${item.placeholder ? ' placeholder' : ''}`;
      el.innerHTML = `
        <div class="exp-icon">${icons[item.icon]}</div>
        <div class="exp-top"><h3>${item.title}</h3>${item.placeholder ? '<span class="exp-badge">open to this</span>' : ''}</div>
        <p class="exp-org">${item.org} · ${item.period}</p>
        <p class="exp-desc">${item.detail}</p>`;
      grid.appendChild(el);
      observeReveal(el);
    });
  })();

  /* ---------------------------------------------------------
     Projects: render + filter
  --------------------------------------------------------- */
  (function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    DATA.projects.forEach(p => {
      const card = document.createElement('article');
      card.className = 'project-card glass reveal';
      card.dataset.category = p.category;
      card.innerHTML = `
        <div class="project-img">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
          <div class="project-overlay">
            ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="overlay-link code">Code</a>` : ''}
            ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener" class="overlay-link live">Live</a>` : ''}
          </div>
        </div>
        <div class="project-body">
          <div class="project-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
        </div>`;
      grid.appendChild(card);
      observeReveal(card);
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        document.querySelectorAll('.project-card').forEach(card => {
          card.classList.toggle('hidden-card', f !== 'all' && card.dataset.category !== f);
        });
      });
    });
  })();

  /* ---------------------------------------------------------
     Certifications + lightbox
  --------------------------------------------------------- */
  (function renderCertifications() {
    const grid = document.getElementById('certsGrid');
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightboxImg');
    const lbTitle = document.getElementById('lightboxTitle');
    const lbOrg = document.getElementById('lightboxOrg');
    const lbDownload = document.getElementById('lightboxDownload');
    const lbClose = document.getElementById('lightboxClose');

    function open(cert) {
      lbImg.src = cert.file; lbImg.alt = cert.title;
      lbTitle.textContent = cert.title; lbOrg.textContent = cert.org;
      lbDownload.href = cert.file;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function close() { lightbox.classList.remove('open'); document.body.style.overflow = ''; }
    lbClose.addEventListener('click', close);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
    addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

    DATA.certifications.forEach(cert => {
      const card = document.createElement('div');
      card.className = 'cert-card glass reveal';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.innerHTML = `
        <div class="cert-thumb">
          <img src="${cert.file}" alt="${cert.title}" loading="lazy" />
          <div class="cert-overlay"><span>🔍 View Certificate</span></div>
        </div>
        <div class="cert-body">
          <span class="cert-icon">${cert.icon}</span>
          <h3>${cert.title}</h3>
          <p class="cert-org">${cert.org}</p>
          <a href="${cert.file}" download class="cert-download">⬇ Download</a>
        </div>`;
      card.querySelector('.cert-thumb').addEventListener('click', () => open(cert));
      card.querySelector('h3').addEventListener('click', () => open(cert));
      card.addEventListener('keydown', (e) => { if (e.key === 'Enter') open(cert); });
      card.querySelector('.cert-download').addEventListener('click', (e) => e.stopPropagation());
      grid.appendChild(card);
      observeReveal(card);
    });
  })();

  /* ---------------------------------------------------------
     Services
  --------------------------------------------------------- */
  (function renderServices() {
    const icons = ['💻','⚛️','📱','🎨','🌐','🚀'];
    const grid = document.getElementById('servicesGrid');
    DATA.services.forEach((s, i) => {
      const el = document.createElement('div');
      el.className = 'service-card glass reveal';
      el.innerHTML = `<div class="service-icon" style="font-size:1.3rem">${icons[i % icons.length]}</div><h3>${s.title}</h3><p>${s.desc}</p>`;
      grid.appendChild(el);
      observeReveal(el);
    });
  })();

  /* ---------------------------------------------------------
     Testimonials carousel
  --------------------------------------------------------- */
  (function renderTestimonials() {
    const quote = document.getElementById('testimonialQuote');
    const stars = document.getElementById('testimonialStars');
    const name = document.getElementById('testimonialName');
    const role = document.getElementById('testimonialRole');
    const dots = document.getElementById('testimonialDots');
    const card = document.querySelector('.testimonial-card');
    observeReveal(card);

    let index = 0;
    const items = DATA.testimonials;

    DATA.testimonials.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.setAttribute('aria-label', `Testimonial ${i + 1}`);
      dot.addEventListener('click', () => { index = i; render(); resetAuto(); });
      dots.appendChild(dot);
    });

    function render() {
      const t = items[index];
      quote.textContent = `"${t.quote}"`;
      stars.innerHTML = '★'.repeat(t.rating);
      name.textContent = t.name;
      role.innerHTML = t.role + (t.placeholder ? ' <span class="placeholder-tag">placeholder</span>' : '');
      [...dots.children].forEach((d, i) => d.classList.toggle('active', i === index));
    }
    render();

    let auto;
    function resetAuto() {
      clearInterval(auto);
      auto = setInterval(() => { index = (index + 1) % items.length; render(); }, 5500);
    }
    resetAuto();

    document.getElementById('testPrev').addEventListener('click', () => { index = (index - 1 + items.length) % items.length; render(); resetAuto(); });
    document.getElementById('testNext').addEventListener('click', () => { index = (index + 1) % items.length; render(); resetAuto(); });
    card.addEventListener('mouseenter', () => clearInterval(auto));
    card.addEventListener('mouseleave', resetAuto);
  })();

  /* ---------------------------------------------------------
     Reveal for remaining static sections
  --------------------------------------------------------- */
  document.querySelectorAll('.reveal').forEach(observeReveal);

  /* ---------------------------------------------------------
     Contact form: validation + submit to Google Sheet
     via Google Apps Script Web App (no backend needed).
  --------------------------------------------------------- */
  (function initContact() {
    // Your Google Apps Script Web App URL — this is what writes each
    // submission as a new row into your Google Sheet.
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzeo8tzK8aTT5CGrrcaDuFi9aVi35B8ljzrS-AoZNAic3DP6zsAfpZpZ1dXPAz99QzK/exec';

    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnSending = submitBtn.querySelector('.btn-sending');
    const formMsg = document.getElementById('formMsg');

    function setError(field, msg) {
      const group = document.getElementById(field).closest('.form-group');
      group.classList.toggle('error', !!msg);
      document.getElementById('err' + field.replace('f', '').replace(/^\w/, c => c.toUpperCase())).textContent = msg || '';
    }

    function validate() {
      let ok = true;
      const name = document.getElementById('fname').value.trim();
      const email = document.getElementById('femail').value.trim();
      const message = document.getElementById('fmessage').value.trim();

      if (!name) { setError('fname', 'Please enter your name.'); ok = false; } else setError('fname', '');
      if (!email) { setError('femail', 'Please enter your email.'); ok = false; }
      else if (!/^\S+@\S+\.\S+$/.test(email)) { setError('femail', "That email doesn't look right."); ok = false; }
      else setError('femail', '');
      if (!message) { setError('fmessage', 'Please add a short message.'); ok = false; }
      else if (message.length < 10) { setError('fmessage', 'Message should be at least 10 characters.'); ok = false; }
      else setError('fmessage', '');

      return ok;
    }

    function showMsg(text, type) {
      formMsg.textContent = text;
      formMsg.className = 'form-msg ' + type;
      formMsg.hidden = false;
      setTimeout(() => { formMsg.hidden = true; }, 5000);
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validate()) return;

      submitBtn.disabled = true;
      btnText.hidden = true; btnSending.hidden = false;

      try {
        // Apps Script web apps don't send CORS headers, so the request must
        // use mode: 'no-cors'. That means we can't read the response body —
        // but as long as the request reaches Google, the row gets written.
        await fetch(SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: new FormData(form) });
        showMsg('✅ Message sent — thanks for reaching out!', 'success');
        form.reset();
      } catch (err) {
        console.error(err);
        showMsg('❌ Something went wrong. Please try again or email me directly.', 'error');
      } finally {
        submitBtn.disabled = false;
        btnText.hidden = false; btnSending.hidden = true;
      }
    });
  })();

  /* ---------------------------------------------------------
     Magnetic buttons + ripple click effect
  --------------------------------------------------------- */
  (function initMagnetic() {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    document.querySelectorAll('.magnetic').forEach(el => {
      el.style.position = el.style.position || 'relative';
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * 16;
        const y = ((e.clientY - r.top) / r.height - 0.5) * 16;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
      el.addEventListener('click', (e) => {
        const r = el.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'ripple-el';
        ripple.style.left = (e.clientX - r.left) + 'px';
        ripple.style.top = (e.clientY - r.top) + 'px';
        el.appendChild(ripple);
        setTimeout(() => ripple.remove(), 650);
      });
    });
  })();

  /* ---------------------------------------------------------
     Tilt effect on project/cert/exp/service cards
  --------------------------------------------------------- */
  (function initTilt() {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches || prefersReducedMotion) return;
    document.addEventListener('mousemove', (e) => {
      const card = e.target.closest?.('.project-card, .cert-card, .exp-card, .service-card, .skill-card');
      if (!card) return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateY(-2px)`;
    });
    document.addEventListener('mouseout', (e) => {
      const card = e.target.closest?.('.project-card, .cert-card, .exp-card, .service-card, .skill-card');
      if (card) card.style.transform = '';
    });
  })();

  /* ---------------------------------------------------------
     Back to top
  --------------------------------------------------------- */
  (function initBackTop() {
    const btn = document.getElementById('backTop');
    document.addEventListener('scroll', () => btn.classList.toggle('visible', scrollY > 600), { passive: true });
    btn.addEventListener('click', () => scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' }));
  })();

  document.getElementById('year').textContent = new Date().getFullYear();
});
