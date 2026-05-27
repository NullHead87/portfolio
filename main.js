/* main.js */

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

const skillData = {
  documentation: {
    title: "Tekninen dokumentointi",
    level: 90,
    label: "Vahva osaaminen",
    text: "Dokumentoin työvaiheet, ratkaisut ja ympäristöt selkeästi, rakenteellisesti ja toistettavasti. Olen saanut opinnoissani positiivista palautetta dokumentoinnin selkeydestä ja siitä, että tekemäni ratkaisut ovat helposti muiden ymmärrettävissä ja toistettavissa."
  },
  sql: {
    title: "SQL / MySQL",
    level: 63,
    label: "Hyvä perustason osaaminen",
    text: "Olen suorittanut tietokantakurssin arvosanalla 5. Kurssilla suunniteltiin ja toteutettiin tietokantaratkaisuja MySQL-ympäristössä sekä harjoiteltiin SQL-kyselyitä, tietokantojen rakennetta ja tiedonhallinnan perusteita."
  },
  python: {
    title: "Python",
    level: 55,
    label: "Perusteet / kehittyvä osaaminen",
    text: "Olen käyttänyt Pythonia opinnoissa, harjoitustöissä ja pienissä työkaluissa. Hallitsen perusteet, kuten syntaksin, funktiot, tiedostonkäsittelyn ja ohjelman rakenteen. Kehitän osaamista aktiivisesti käytännön projektien kautta."
  },
  azure: {
    title: "Azure",
    level: 25,
    label: "Toimintaperiaatteet / itseopiskelu",
    text: "Olen perehtynyt Azure-pilviympäristöjen toimintaperiaatteisiin osana opintoja ja omaehtoista opiskelua. Kehitän parhaillani osaamistani itsenäisesti Azure-ympäristöjen ja niissä käytettävien työkalujen parissa."
  },
  linux: {
    title: "Linux",
    level: 65,
    label: "Hyvä käytännön perustaso",
    text: "Olen käyttänyt Linux-ympäristöjä opinnoissa, palvelinharjoituksissa ja kyberturvallisuuden laboratorioissa. Kokemusta on komentorivistä, palveluiden hallinnasta, oikeuksista, verkkotyökaluista ja järjestelmän peruskäytöstä."
  },
  networking: {
    title: "Tietoverkot",
    level: 55,
    label: "Hyvä perustason osaaminen",
    text: "Olen opiskellut tietoverkkoja käytännön harjoituksissa, joissa on käsitelty muun muassa IP-osoitteistusta, reititystä, VLANeja, kytkimiä, palomuureja ja verkkoympäristöjen vianhakua."
  },
  cyber: {
    title: "Kyberturvallisuus",
    level: 66,
    label: "Kehittyvä vahva osaaminen",
    text: "Kyberturvallisuus on ICT-opintojeni suuntautuminen. Olen perehtynyt tietoturvateknologioihin, web-sovellusten turvallisuustestaukseen sekä OWASP Top 10 -riskeihin. Harjoituksissa olen käyttänyt muun muassa Burp Suitea ja tutkinut haavoittuvuuksia kuten SQL-injektioita, XSS:ää, JWT-haavoittuvuuksia ja rajapintojen turvallisuutta. Sain kyberturvallisuuteen liittyvistä kursseista arvosanan 5, ja olen saanut hyvää palautetta erityisesti raportoinnin selkeydestä ja rakenteesta."
  },
  docker: {
    title: "Docker / kontitus",
    level: 60,
    label: "Käytännön perustaso",
    text: "Olen käyttänyt Dockeria opinnoissa ja harjoituksissa muun muassa konttien rakentamiseen, ajamiseen, verkottamiseen sekä docker-compose-ympäristöjen ymmärtämiseen. Ymmärrän kontituksen perusperiaatteet ja käyttötarkoituksen."
  },
  api: {
    title: "API-rajapinnat",
    level: 50,
    label: "Käytännön perustaso",
    text: "Olen toteuttanut ja testannut REST API -rajapintoja backend-opinnoissa. Kokemusta on muun muassa Express.js- ja FastAPI-tyyppisistä ratkaisuista, endpoint-rakenteista, HTTP-metodeista ja rajapintojen testaamisesta."
  },
  git: {
    title: "Git / GitLab",
    level: 82,
    label: "Hyvä käytännön osaaminen",
    text: "Käytän Gitiä ja GitLabia opintoprojekteissa ja omissa projekteissa. Hallitsen perustoiminnot kuten commitit, branchit, merge-tilanteet, etärepositoriot ja projektien dokumentoinnin README-tiedostoihin."
  },
  leadership: {
    title: "Johtaminen",
    level: 85,
    label: "Vahva käytännön kokemus",
    text: "Minulla on yli 10 vuoden kokemus vuorotyöryhmän vastuuhenkilönä toimimisesta. Lisäksi johtamisosaamistani tukevat MPK:n johtajakoulutukset, tehtävä maakuntakomppaniassa ryhmän varajohtajana sekä sitoutuminen MPK:n kouluttajatoimintaan. Näissä tehtävissä olen kehittänyt erityisesti ryhmän ohjaamista, paineensietokykyä, selkeää viestintää ja osaamisen jakamista."
  },
  systems: {
    title: "Tietojärjestelmät",
    level: 57,
    label: "Hyvä kokonaisuuksien ymmärrys",
    text: "Opintojeni kautta olen perehtynyt tietojärjestelmiin, ohjelmistopalveluihin, integraatioihin, API-rajapintoihin ja kokonaisarkkitehtuurin perusteisiin. Vahvuuteni on teknisten kokonaisuuksien hahmottaminen ja jäsentäminen."
  },
  javascript: {
    title: "JavaScript",
    level: 50,
    label: "Perusteet / käytännön harjoitukset",
    text: "Olen käyttänyt JavaScriptiä opinnoissa ja omissa projekteissa erityisesti selainpohjaisissa ratkaisuissa. Hallitsen perussyntaksin, DOM-käsittelyn, tapahtumankuuntelijat ja yksinkertaisen toiminnallisuuden rakentamisen verkkosivuille."
  },
  dataanalytics: {
    title: "Data-analytiikka",
    level: 35,
    label: "Perusteet / kehittyvä osaaminen",
    text: "Olen perehtynyt data-analytiikan perusteisiin opintojen kautta. Ymmärrän datan käsittelyn, tulkinnan ja visualisoinnin perusperiaatteita sekä sen, miten analytiikkaa voidaan hyödyntää päätöksenteon ja tietojärjestelmien tukena. Kehitän osaamistani aiheessa aktiivisesti."
  },
 windows: {
   title: "Windows",
   level: 60,
   label: "Hyvä käyttötason osaaminen",
   text: "Olen käyttänyt Windows-ympäristöjä opinnoissa, työssä ja omissa projekteissa. Hallitsen käyttöjärjestelmän peruskäytön, asetukset, tiedostorakenteet, ohjelmistojen käytön sekä yleisen vianhaun. Windows toimii minulle päivittäisenä työskentely- ja kehitysympäristönä."
  },

 frontend: {
   title: "Frontend-ohjelmointi",
   level: 50,
   label: "Perusteet / käytännön harjoitukset",
   text: "Olen toteuttanut verkkosivuja ja käyttöliittymiä HTML:n, CSS:n ja JavaScriptin avulla. Osaan rakentaa responsiivisia sivurakenteita, muotoilla käyttöliittymiä ja lisätä perustoiminnallisuuksia JavaScriptillä. Oma portfolio toimii yhtenä käytännön esimerkkinä frontend-osaamisestani."
  },

 backend: {
   title: "Backend-ohjelmointi",
   level: 55,
   label: "Käytännön perustaso",
   text: "Olen opiskellut backend-kehitystä ja toteuttanut harjoituksissa REST API -rajapintoja, palvelinpuolen reititystä sekä tietokantaan liittyviä toimintoja. Kokemusta on erityisesti Node.js- ja Express-ympäristöistä sekä Python/FastAPI-tyyppisistä ratkaisuista omissa projekteissa."
  },

 algorithms: {
   title: "Tietorakenteet & algoritmit",
   level: 40,
   label: "Perusteet / opintojen kautta",
   text: "Olen opiskellut tietorakenteiden ja algoritmien perusteita osana ICT-opintoja. Ymmärrän peruskäsitteitä kuten listat, taulukot, silmukat, ehdot, funktiot, hakeminen, lajittelu ja algoritmisen ajattelun merkityksen ohjelmoinnissa. Kehitän osaamista edelleen opintojen ja käytännön harjoitusten kautta."
}
};

function initSkillModal() {
  const modal = document.getElementById("skillModal");
  const closeBtn = document.getElementById("skillModalClose");
  const title = document.getElementById("skillTitle");
  const level = document.getElementById("skillLevel");
  const label = document.getElementById("skillLabel");
  const text = document.getElementById("skillText");
  const gaugeFill = document.querySelector(".gauge-fill");

  if (!modal || !closeBtn || !gaugeFill) return;

  const circumference = 2 * Math.PI * 48;

  function openModal(skillKey) {
    const skill = skillData[skillKey];
    if (!skill) return;

    title.textContent = skill.title;
    level.textContent = skill.level;
    label.textContent = skill.label;
    text.textContent = skill.text;

    const offset = circumference - (skill.level / 100) * circumference;
    gaugeFill.style.strokeDasharray = circumference;
    gaugeFill.style.strokeDashoffset = circumference;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");

    setTimeout(() => {
      gaugeFill.style.strokeDashoffset = offset;
    }, 80);
  }

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }

  document.querySelectorAll(".skill-pill").forEach((button) => {
    button.addEventListener("click", () => {
      openModal(button.dataset.skill);
    });
  });

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("skill-modal-backdrop") ||
      event.target === modal
    ) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initSkillModal();
});
