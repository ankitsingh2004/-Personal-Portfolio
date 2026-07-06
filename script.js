/* =========================================================
   Portfolio Script — rewritten to match the actual HTML/CSS
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- Custom Cursor (desktop only) ---------------- */
  (function initCursor() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursorFollower');
    if (!cursor || !follower) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let mouseX = 0, mouseY = 0, followX = 0, followY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    });

    function animateFollower() {
      followX += (mouseX - followX) * 0.15;
      followY += (mouseY - followY) * 0.15;
      follower.style.left = `${followX}px`;
      follower.style.top = `${followY}px`;
      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    document.querySelectorAll('a, button, .project-card, .skill-tag, .interest-chip').forEach((el) => {
      el.addEventListener('mouseenter', () => follower.style.transform = 'translate(-50%, -50%) scale(1.6)');
      el.addEventListener('mouseleave', () => follower.style.transform = 'translate(-50%, -50%) scale(1)');
    });
  })();

  /* ---------------- Canvas Background ---------------- */
  (function initCanvas() {
    const canvas = document.getElementById('bgCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height, particles;

    function getAccentColor() {
      return getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#6C63FF';
    }

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function createParticles() {
      const count = Math.min(60, Math.floor((width * height) / 22000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const accent = getAccentColor();

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = accent;
        ctx.globalAlpha = 0.5;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = accent;
            ctx.globalAlpha = (1 - dist / 120) * 0.15;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      if (!prefersReducedMotion) requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        createParticles();
        if (prefersReducedMotion) draw();
      }, 150);
    });
  })();

  /* ---------------- Scroll Progress Bar ---------------- */
  (function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;
    function update() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = height > 0 ? (scrollTop / height) * 100 : 0;
      bar.style.width = `${pct}%`;
    }
    document.addEventListener('scroll', update, { passive: true });
    update();
  })();

  /* ---------------- Nav: mobile menu + active link + shrink ---------------- */
  (function initNav() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
      });

      navLinks.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', () => {
          navLinks.classList.remove('open');
          hamburger.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
        });
      });
    }

    function setActiveLink() {
      let current = sections[0]?.id;
      const scrollPos = window.scrollY + 120;
      sections.forEach((section) => {
        if (section.offsetTop <= scrollPos) current = section.id;
      });
      links.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });
    }
    document.addEventListener('scroll', setActiveLink, { passive: true });
    setActiveLink();
  })();

  /* ---------------- Smooth Scroll for in-page anchors ---------------- */
  (function initSmoothScroll() {
    const nav = document.getElementById('nav');
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const target = document.querySelector(targetId);
        if (!target) return;
        e.preventDefault();
        const navHeight = nav ? nav.offsetHeight : 64;
        window.scrollTo({
          top: target.offsetTop - navHeight + 1,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
      });
    });
  })();

  /* ---------------- Theme Toggle ---------------- */
  (function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const icon = toggle ? toggle.querySelector('.theme-icon') : null;
    if (!toggle) return;

    function applyTheme(isLight) {
      document.body.classList.toggle('light', isLight);
      document.body.classList.toggle('dark', !isLight);
      if (icon) icon.textContent = isLight ? '🌙' : '☀';
    }

    const saved = localStorage.getItem('portfolio-theme');
    applyTheme(saved === 'light');

    toggle.addEventListener('click', () => {
      const isLight = !document.body.classList.contains('light');
      applyTheme(isLight);
      localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
    });
  })();

  /* ---------------- Typewriter ---------------- */
  (function initTypewriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;
    const phrases = ['Full Stack Developer', 'Problem Solver', 'MERN Stack Builder'];
    let phraseIndex = 0, charIndex = 0, deleting = false;

    function tick() {
      const current = phrases[phraseIndex];
      if (!deleting) {
        charIndex++;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1400);
          return;
        }
      } else {
        charIndex--;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }
      setTimeout(tick, deleting ? 40 : 90);
    }
    tick();
  })();

  /* ---------------- Reveal on Scroll (+ counters + bars) ---------------- */
  (function initReveal() {
    const revealEls = document.querySelectorAll('[data-reveal]');
    const counters = document.querySelectorAll('.stat-num[data-count]');
    const bars = document.querySelectorAll('.bar-fill[data-width]');
    let barsAnimated = false;
    let countersAnimated = false;

    function animateCounters() {
      if (countersAnimated) return;
      countersAnimated = true;
      counters.forEach((el) => {
        const target = parseInt(el.dataset.count, 10) || 0;
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 40));
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = current;
        }, 30);
      });
    }

    function animateBars() {
      if (barsAnimated) return;
      barsAnimated = true;
      bars.forEach((bar) => {
        const width = bar.dataset.width || '0';
        requestAnimationFrame(() => { bar.style.width = `${width}%`; });
      });
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          if (entry.target.querySelector('.stat-num')) animateCounters();
          if (entry.target.querySelector('.bar-fill') || entry.target.classList.contains('proficiency')) animateBars();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach((el) => observer.observe(el));

    // Fallback in case elements are already in view on load
    if (prefersReducedMotion) {
      revealEls.forEach((el) => el.classList.add('revealed'));
      animateCounters();
      animateBars();
    }
  })();

  /* ---------------- Tabs (About section) ---------------- */
  (function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    if (!tabButtons.length) return;

    tabButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        tabButtons.forEach((b) => b.classList.remove('active'));
        tabContents.forEach((c) => c.classList.remove('active'));
        btn.classList.add('active');
        const content = document.getElementById(target);
        if (content) content.classList.add('active');
      });
    });
  })();

  /* ---------------- Project Filter ---------------- */
  (function initFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');
    if (!filterButtons.length) return;

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        cards.forEach((card) => {
          const match = filter === 'all' || card.dataset.category === filter;
          card.classList.toggle('hidden', !match);
        });
      });
    });
  })();

  /* ---------------- Contact Form ---------------- */
  (function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzeo8tzK8aTT5CGrrcaDuFi9aVi35B8ljzrS-AoZNAic3DP6zsAfpZpZ1dXPAz99QzK/exec';
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
    const btnSending = submitBtn ? submitBtn.querySelector('.btn-sending') : null;
    const formMsg = document.getElementById('formMsg');

    function showMessage(text, type) {
      if (!formMsg) return;
      formMsg.textContent = text;
      formMsg.className = `form-msg ${type}`;
      formMsg.hidden = false;
      setTimeout(() => { formMsg.hidden = true; }, 5000);
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (submitBtn) submitBtn.disabled = true;
      if (btnText) btnText.hidden = true;
      if (btnSending) btnSending.hidden = false;

      fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: new FormData(form)
      })
        .then(() => {
          showMessage('✅ Message sent successfully!', 'success');
          form.reset();
        })
        .catch((error) => {
          showMessage('❌ Something went wrong. Please try again.', 'error');
          console.error('Form submission error:', error);
        })
        .finally(() => {
          if (submitBtn) submitBtn.disabled = false;
          if (btnText) btnText.hidden = false;
          if (btnSending) btnSending.hidden = true;
        });
    });
  })();

  /* ---------------- Back to Top ---------------- */
  (function initBackTop() {
    const btn = document.getElementById('backTop');
    if (!btn) return;

    function toggleVisibility() {
      btn.classList.toggle('visible', window.scrollY > 500);
    }
    document.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  })();
});
