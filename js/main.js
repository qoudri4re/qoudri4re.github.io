/* ── Nav scroll effect ───────────────────────────── */
const nav = document.querySelector(".site-nav");
if (nav) {
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ── Mobile nav toggle ───────────────────────────── */
const toggle = document.querySelector(".nav__toggle");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("nav--open");
    const isOpen = nav.classList.contains("nav--open");
    toggle.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // Close on link click
  nav.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav--open");
      document.body.style.overflow = "";
    });
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (nav.classList.contains("nav--open") && !nav.contains(e.target)) {
      nav.classList.remove("nav--open");
      document.body.style.overflow = "";
    }
  });
}

/* ── Scroll reveal ───────────────────────────────── */
const revealEls = document.querySelectorAll("[data-reveal]");
if (revealEls.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  revealEls.forEach((el) => observer.observe(el));
}

/* ── Duration helper ─────────────────────────────── */
function calcDuration(period) {
  const MONTHS = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11,
  };
  const parts = period.split("–").map((s) => s.trim());
  if (parts.length < 2) return "";

  function parseDate(str) {
    const s = str.toLowerCase();
    if (s === "present") return new Date();
    const [mon, yr] = s.split(" ");
    return new Date(parseInt(yr, 10), MONTHS[mon.slice(0, 3)] ?? 0, 1);
  }

  const start = parseDate(parts[0]);
  const end = parseDate(parts[1]);
  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  if (months < 1) months = 1;
  const yrs = Math.floor(months / 12);
  const mo = months % 12;

  const yearPart = yrs === 1 ? "1 year" : `${yrs} years`;
  const monthPart = mo === 1 ? "1 month" : `${mo} months`;

  if (yrs === 0) return monthPart;
  if (mo === 0) return yearPart;
  return `${yearPart} ${monthPart}`;
}

/* ── Hero stats ──────────────────────────────────── */
function updateHeroStats() {
  const el = document.getElementById("yrs-exp");
  if (!el || typeof CAREER_START === "undefined") return;
  const dur = calcDuration(CAREER_START + " – Present");
  const match = dur.match(/(\d+)\s*year/);
  el.textContent = match ? match[1] + "+" : "1+";
}

/* ── Tag colorization ────────────────────────────── */
function applyTagColors() {
  document
    .querySelectorAll(".tag:not(.tag--mono):not(.tag--accent)")
    .forEach((el) => {
      const key = el.textContent.trim().toLowerCase();
      const s = TAG_COLORS?.[key];
      if (s) {
        el.style.background = s.bg;
        el.style.color = s.color;
        el.style.borderColor = s.border;
      }
    });
}

/* ── Render technology items ────────────────────── */
const TECH_ICON_URLS = {
  angular: "https://cdn.simpleicons.org/angular",
  "next.js": "https://cdn.simpleicons.org/nextdotjs/4F46E5",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  vue: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  nestjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
};

const TECH_ICONS = {
  javascript: "javascript",
  typescript: "typescript",
  html: "html5",
  css: "css",
  python: "python",
  php: "php",
  java: "java",
  angular: "angular",
  "angular material": "angular",
  react: "react",
  "next.js": "nextdotjs",
  svelte: "svelte",
  vue: "vuedotjs",
  tailwind: "tailwindcss",
  "node.js": "nodedotjs",
  express: "express",
  nestjs: "nestjs",
  laravel: "laravel",
  "spring boot": "springboot",
  django: "django",
  postgresql: "postgresql",
  mongodb: "mongodb",
  redis: "redis",
  mysql: "mysql",
  sqlite: "sqlite",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "amazonwebservices",
  "semantic ui": "semanticuireact",
};

function makeTechItem(name) {
  const item = document.createElement("span");
  item.className = "tech-item";
  const key = name.toLowerCase();
  const slug = TECH_ICONS[key];
  if (slug) {
    const icon = document.createElement("img");
    icon.className = "tech-item__icon";
    icon.src = TECH_ICON_URLS[key] || "https://cdn.simpleicons.org/" + slug;
    icon.alt = "";
    icon.setAttribute("aria-hidden", "true");
    icon.onerror = () => {
      icon.replaceWith(
        Object.assign(document.createElement("span"), {
          className: "tech-item__fallback",
          textContent: name.slice(0, 1),
        }),
      );
    };
    item.appendChild(icon);
  } else {
    const fallback = document.createElement("span");
    fallback.className = "tech-item__fallback";
    fallback.textContent = name.slice(0, 1);
    item.appendChild(fallback);
  }
  item.append(name);
  return item;
}

/* ── Render Skills ───────────────────────────────── */
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid || typeof SKILLS === "undefined") return;

  SKILLS.forEach((cat) => {
    const section = document.createElement("section");
    section.className = "skill-category";
    const label = document.createElement("p");
    label.className = "skill-category__label";
    label.textContent = cat.label;
    const row = document.createElement("div");
    row.className = "skill-category__tags";
    cat.items.forEach((item) => row.appendChild(makeTechItem(item)));
    section.append(label, row);
    grid.appendChild(section);
  });
}

/* ── Render Experience ────────────────────────────── */
function renderExperience() {
  const list = document.getElementById("experience-list");
  if (!list || typeof EXPERIENCE === "undefined") return;

  EXPERIENCE.forEach((job) => {
    const item = document.createElement("div");
    item.className =
      "timeline-item" + (job.current ? " timeline-item--current" : "");

    const header = document.createElement("div");
    header.className = "timeline-item__header";

    const info = document.createElement("div");
    info.innerHTML = `
      <p class="timeline-item__role">${job.role}</p>
      <p class="timeline-item__company">${job.company}<span class="timeline-item__type"> · ${job.type}${job.location ? " · " + job.location : ""}</span></p>
    `;

    const meta = document.createElement("div");
    meta.className = "timeline-item__meta";

    const period = document.createElement("span");
    period.className = "tag tag--mono";
    period.textContent = job.period;
    meta.appendChild(period);

    const duration = job.duration || calcDuration(job.period);
    if (duration) {
      const durTag = document.createElement("span");
      durTag.className = "tag tag--mono";
      durTag.style.color = "var(--text-muted)";
      durTag.textContent = duration;
      meta.appendChild(durTag);
    }

    if (job.current) {
      const curr = document.createElement("span");
      curr.className = "tag tag--accent";
      curr.textContent = "Current";
      meta.appendChild(curr);
    }

    header.appendChild(info);
    if (meta.childElementCount) header.appendChild(meta);
    item.appendChild(header);

    if (job.stack?.length) {
      const row = document.createElement("div");
      row.className = "tags";
      job.stack.forEach((t) => row.appendChild(makeTechItem(t)));
      item.appendChild(row);
    }

    list.appendChild(item);
  });
}

/* ── Render Education ─────────────────────────────── */
function renderEducation() {
  const list = document.getElementById("education-list");
  if (!list || typeof EDUCATION === "undefined") return;

  EDUCATION.forEach((edu) => {
    const item = document.createElement("div");
    item.className = "timeline-item";

    const header = document.createElement("div");
    header.className = "timeline-item__header";

    const info = document.createElement("div");
    info.innerHTML = `
      <p class="timeline-item__role">${edu.degree}</p>
      <p class="timeline-item__company">${edu.school}<span class="timeline-item__type"> · ${edu.location}</span></p>
    `;

    const meta = document.createElement("div");
    meta.className = "timeline-item__meta";

    if (edu.period) {
      const period = document.createElement("span");
      period.className = "tag tag--mono";
      period.textContent = edu.period;
      meta.appendChild(period);
    }

    if (edu.grade) {
      const grade = document.createElement("span");
      grade.className = "tag";
      grade.textContent = edu.grade;
      meta.appendChild(grade);
    }

    if (edu.certificateUrl) {
      const certificate = document.createElement("a");
      certificate.className = "timeline-item__certificate";
      certificate.href = edu.certificateUrl;
      certificate.target = "_blank";
      certificate.rel = "noopener noreferrer";
      certificate.textContent = "View certificate ↗";
      info.appendChild(certificate);
    }

    header.appendChild(info);
    if (meta.childElementCount) header.appendChild(meta);
    item.appendChild(header);

    list.appendChild(item);
  });
}

const year = new Date().getFullYear();
let yearText = document.getElementById("year");

if (yearText) {
  yearText.textContent = year;
}

/* ── Init ────────────────────────────────────────── */
updateHeroStats();
renderSkills();
renderExperience();
renderEducation();
applyTagColors();
