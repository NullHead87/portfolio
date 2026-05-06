/* ============================================
   KARI RÄSÄNEN — PORTFOLIO
   main.js
   ============================================ */

/**
 * Scroll-reveal: lisää .visible-luokan elementeille
 * kun ne tulevat näkyviin viewportissa.
 */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

/**
 * Skill-palkit: animoi leveyden kun skills-osio
 * tulee näkyviin (käyttää data-width -attribuuttia).
 */
function initSkillBars() {
  const skillsSection = document.getElementById('skills');
  if (!skillsSection) return;

  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.skill-fill').forEach((fill) => {
            const targetWidth = fill.getAttribute('data-width') || 0;
            fill.style.width = targetWidth + '%';
          });
          barObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  barObserver.observe(skillsSection);
}

/**
 * Aktiivinen nav-linkki: korostaa nykyisen osion
 * navigaatiossa vierittäessä.
 */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === '#' + id
            );
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

/**
 * Alustus kun DOM on valmis.
 */
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initSkillBars();
  initActiveNav();
});
