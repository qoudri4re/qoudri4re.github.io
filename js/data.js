/**
 * PORTFOLIO DATA
 *
 * Edit this file to update your experience, education, and tag colors.
 * All sections on the site that render from data read from here.
 */

/* ── Tag color map ──────────────────────────────────
   Keys are lowercase. Values: { bg, color, border }
─────────────────────────────────────────────────── */
const TAG_COLORS = {
  /* ── Blog categories ──────────────────────────── */
  'architecture': { bg: 'rgba(245,158,11,0.1)',   color: '#f59e0b', border: 'rgba(245,158,11,0.22)' },
  'devops':       { bg: 'rgba(167,139,250,0.1)',  color: '#a78bfa', border: 'rgba(167,139,250,0.22)' },
  'frontend':     { bg: 'rgba(56,189,248,0.1)',   color: '#38bdf8', border: 'rgba(56,189,248,0.22)' },
  'backend':      { bg: 'rgba(52,211,153,0.1)',   color: '#34d399', border: 'rgba(52,211,153,0.22)' },
  'auth':         { bg: 'rgba(251,146,60,0.1)',   color: '#fb923c', border: 'rgba(251,146,60,0.22)' },
  'performance':  { bg: 'rgba(250,204,21,0.1)',   color: '#facc15', border: 'rgba(250,204,21,0.22)' },
  'database':     { bg: 'rgba(45,212,191,0.1)',   color: '#2dd4bf', border: 'rgba(45,212,191,0.22)' },

  /* ── Languages & core web ─────────────────────── */
  'html':         { bg: 'rgba(249,115,22,0.1)',   color: '#f97316', border: 'rgba(249,115,22,0.22)' },
  'css':          { bg: 'rgba(96,165,250,0.1)',   color: '#60a5fa', border: 'rgba(96,165,250,0.22)' },
  'javascript':   { bg: 'rgba(253,224,71,0.1)',   color: '#fde047', border: 'rgba(253,224,71,0.22)' },
  'typescript':   { bg: 'rgba(147,197,253,0.1)',  color: '#93c5fd', border: 'rgba(147,197,253,0.22)' },

  /* ── Frontend frameworks ──────────────────────── */
  'angular':          { bg: 'rgba(248,113,113,0.1)', color: '#f87171', border: 'rgba(248,113,113,0.22)' },
  'angular material': { bg: 'rgba(248,113,113,0.08)',color: '#fca5a5', border: 'rgba(248,113,113,0.18)' },
  'react':            { bg: 'rgba(103,232,249,0.1)', color: '#67e8f9', border: 'rgba(103,232,249,0.22)' },
  'next.js':          { bg: 'rgba(226,232,240,0.07)',color: '#e2e8f0', border: 'rgba(226,232,240,0.14)' },
  'svelte':           { bg: 'rgba(255,62,0,0.1)',    color: '#ff6b35', border: 'rgba(255,62,0,0.22)' },
  'vue':              { bg: 'rgba(66,184,131,0.1)',  color: '#42b883', border: 'rgba(66,184,131,0.22)' },

  /* ── CSS / UI libs ────────────────────────────── */
  'tailwind':     { bg: 'rgba(45,212,191,0.1)',   color: '#2dd4bf', border: 'rgba(45,212,191,0.22)' },
  'semantic ui':  { bg: 'rgba(0,185,140,0.1)',    color: '#00b98c', border: 'rgba(0,185,140,0.22)' },

  /* ── Backend / runtime ────────────────────────── */
  'node.js':      { bg: 'rgba(74,222,128,0.1)',   color: '#4ade80', border: 'rgba(74,222,128,0.22)' },
  'express':      { bg: 'rgba(148,163,184,0.1)',  color: '#94a3b8', border: 'rgba(148,163,184,0.22)' },
  'go':           { bg: 'rgba(34,211,238,0.1)',   color: '#22d3ee', border: 'rgba(34,211,238,0.22)' },

  /* ── Databases ────────────────────────────────── */
  'postgresql':   { bg: 'rgba(96,165,250,0.1)',   color: '#60a5fa', border: 'rgba(96,165,250,0.22)' },
  'pgsql':        { bg: 'rgba(96,165,250,0.1)',   color: '#60a5fa', border: 'rgba(96,165,250,0.22)' },
  'mongodb':      { bg: 'rgba(134,239,172,0.1)',  color: '#86efac', border: 'rgba(134,239,172,0.22)' },
  'redis':        { bg: 'rgba(252,165,165,0.1)',  color: '#fca5a5', border: 'rgba(252,165,165,0.22)' },

  /* ── Realtime / infra ─────────────────────────── */
  'socket.io':    { bg: 'rgba(203,213,225,0.07)', color: '#cbd5e1', border: 'rgba(203,213,225,0.14)' },
  'docker':       { bg: 'rgba(125,211,252,0.1)',  color: '#7dd3fc', border: 'rgba(125,211,252,0.22)' },
  'kubernetes':   { bg: 'rgba(129,140,248,0.1)',  color: '#818cf8', border: 'rgba(129,140,248,0.22)' },

  /* ── Payments / platforms ─────────────────────── */
  'stripe':       { bg: 'rgba(192,132,252,0.1)',  color: '#c084fc', border: 'rgba(192,132,252,0.22)' },
  'vercel':       { bg: 'rgba(226,232,240,0.07)', color: '#e2e8f0', border: 'rgba(226,232,240,0.14)' },

  /* ── Languages ────────────────────────────────── */
  'python':       { bg: 'rgba(250,204,21,0.1)',   color: '#facc15', border: 'rgba(250,204,21,0.22)' },
  'php':          { bg: 'rgba(139,92,246,0.1)',   color: '#8b5cf6', border: 'rgba(139,92,246,0.22)' },
  'java':         { bg: 'rgba(251,146,60,0.1)',   color: '#fb923c', border: 'rgba(251,146,60,0.22)' },

  /* ── Backend frameworks ───────────────────────── */
  'laravel':      { bg: 'rgba(248,113,113,0.1)',  color: '#f87171', border: 'rgba(248,113,113,0.22)' },
  'spring boot':  { bg: 'rgba(74,222,128,0.1)',   color: '#4ade80', border: 'rgba(74,222,128,0.22)' },
  'django':       { bg: 'rgba(52,211,153,0.1)',   color: '#34d399', border: 'rgba(52,211,153,0.22)' },

  /* ── Databases ────────────────────────────────── */
  'mysql':        { bg: 'rgba(251,191,36,0.1)',   color: '#fbbf24', border: 'rgba(251,191,36,0.22)' },
  'sqlite':       { bg: 'rgba(148,163,184,0.1)',  color: '#94a3b8', border: 'rgba(148,163,184,0.22)' },

  /* ── Cloud / infra ────────────────────────────── */
  'aws':          { bg: 'rgba(251,146,60,0.08)',  color: '#ff9900', border: 'rgba(251,146,60,0.22)' },
};

/* ── Career start (for dynamic years-of-experience) ─
   Format: 'Mon YYYY'
─────────────────────────────────────────────────── */
const CAREER_START = 'Apr 2023';

/* ── Skills ─────────────────────────────────────────
   Each category has a label and an array of items.
   Items are matched against TAG_COLORS for coloring.
─────────────────────────────────────────────────── */
const SKILLS = [
  {
    label: 'Languages',
    items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'PHP', 'Java'],
  },
  {
    label: 'Frontend',
    items: ['Angular', 'React', 'Next.js', 'Svelte', 'Tailwind'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'Laravel', 'Spring Boot', 'Django'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'SQLite'],
  },
  {
    label: 'Infra & Tools',
    items: ['Docker', 'Kubernetes', 'AWS'],
  },
];

/* ── Education ──────────────────────────────────────
   Add objects to this array to add new entries.
─────────────────────────────────────────────────── */
const EDUCATION = [
  {
    degree:   'B.Sc. Computer Science',
    school:   'Usmanu Danfodiyo University',
    grade:    'Second Class Upper',
    period:   'Nov 2018 – Dec 2023',
    location: 'Sokoto, Nigeria',
  },
];

/* ── Work Experience ────────────────────────────────
   Add objects to this array to add new entries.
   Most recent first.
─────────────────────────────────────────────────── */
const EXPERIENCE = [
  {
    role:    'Frontend Developer (Intern)',
    company: 'Encentral Solutions',
    period:  'Apr 2023 – Sep 2023',
    type:    'Remote',
    stack:   ['Angular', 'Semantic UI'],
    duration: '6 months',
    location: "Abuja, Nigeria"
  },
  {
    role:    'Frontend Developer',
    company: 'Encentral Solutions',
    period:  'Nov 2023 – Sep 2025',
    type:    'Remote',
    stack:   ['Angular', 'Semantic UI', 'Angular Material', 'Svelte'],
    duration: '1 year 11 months',
    location: "Abuja, Nigeria"
  },
  {
    role:    'Software Developer',
    company: 'HuiosPay',
    period:  'Sep 2025 – Present',
    type:    'Hybrid',
    current: true,
    stack:   ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'React', 'Next.js', 'Tailwind', 'Angular'],
    location: "Abuja, Nigeria"
  },
];
