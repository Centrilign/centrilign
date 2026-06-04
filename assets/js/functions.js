 // ─────────────────────────────────────────────
    // Footer year
    // ─────────────────────────────────────────────
    document.getElementById('footer-year').textContent = new Date().getFullYear();

    // ─────────────────────────────────────────────
    // Hamburger toggle
    // ─────────────────────────────────────────────
    const hamburger  = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    // ─────────────────────────────────────────────
    // Scroll reveal
    // ─────────────────────────────────────────────
    const revealEls = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => observer.observe(el));

    // ─────────────────────────────────────────────
    // Nav opacity on scroll
    // ─────────────────────────────────────────────
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
      nav.style.background = window.scrollY > 40
        ? 'rgba(8,8,16,0.96)'
        : 'rgba(8,8,16,0.82)';
    }, { passive: true });
  