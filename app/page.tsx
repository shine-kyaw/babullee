"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  ["About", "about"],
  ["Robotics", "robotics"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Achievements", "achievements"],
  ["Interests", "interests"],
  ["Résumé", "resume"],
  ["Contact", "contact"],
] as const;

const projects = [
  {
    index: "01",
    type: "Featured case study",
    title: "Competition Robotics",
    summary:
      "Programming, documentation, strategy, and leadership for VEX Team 10004X—from the Taiwan Open to the World Championship.",
    tags: ["C++", "VEXcode", "Strategy", "Documentation"],
    status: "Media coming soon",
  },
  {
    index: "02",
    type: "Developer tooling",
    title: "Simplified Robotics Coding Template",
    summary:
      "Reworked an existing VEX C++ template to make its structure easier for teammates and less-experienced programmers to understand and use.",
    tags: ["Code organisation", "Team tools", "Clarity"],
    status: "Code comparison coming soon",
  },
  {
    index: "03",
    type: "Product development",
    title: "Mathematics Card Game",
    summary:
      "Main developer of a class project exploring how a mathematics card game can turn learning into a more interactive experience.",
    tags: ["Main developer", "Mathematics", "Prototype"],
    status: "Project details coming soon",
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Programming",
    evidence: "Uses C++ in VEXcode as the main programmer for Team 10004X and has reworked a robotics coding template.",
    items: ["C++", "VEXcode", "Debugging", "Code organisation"],
  },
  {
    number: "02",
    title: "Robotics & Engineering",
    evidence: "Applies programming in a competitive VEX environment; detailed robot systems and routines will be documented later.",
    items: ["Competition robotics", "System thinking", "Testing", "Iteration"],
  },
  {
    number: "03",
    title: "Strategy & Leadership",
    evidence: "Contributes match analysis, tactical planning, club leadership, and coaching-style support.",
    items: ["Match strategy", "Tactical analysis", "Leadership", "Team communication"],
  },
  {
    number: "04",
    title: "Documentation",
    evidence: "Records engineering decisions, testing, progress, and competition preparation in the team notebook.",
    items: ["Engineering notebook", "Design rationale", "Testing records", "Technical explanation"],
  },
];

const interests = [
  ["Basketball & football", "Teamwork, competition, and fast decisions."],
  ["Running", "Consistency, endurance, and steady improvement."],
  ["Gaming", "Systems, strategy, and interactive problem-solving."],
  ["Gadgets", "Hands-on curiosity and experimentation."],
  ["Chemistry & mathematics", "Logical thinking applied to real questions."],
];

function Arrow({ down = false }: { down?: boolean }) {
  return <span aria-hidden="true">{down ? "↓" : "↗"}</span>;
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const copyEmail = async () => {
    const email = "babullee6@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const input = document.createElement("textarea");
      input.value = email;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main>
      <a className="skip-link" href="#content">Skip to content</a>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Babullee home">
          <span className="brand-mark" aria-hidden="true">B</span>
          <span>Babullee <b>李仁柏</b></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <button
          ref={menuButtonRef}
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <span aria-hidden="true">{menuOpen ? "×" : "+"}</span>
        </button>
        <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? "open" : ""}`} aria-label="Mobile navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<span aria-hidden="true">↘</span></a>
          ))}
        </nav>
      </header>

      <section id="home" className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="mechanism" aria-hidden="true">
          <div className="gear gear-one"><i /><i /><i /></div>
          <div className="linkage"><span /><span /><span /></div>
          <div className="gear gear-two"><i /><i /></div>
          <svg viewBox="0 0 600 720" preserveAspectRatio="none">
            <path className="route" d="M40 620 L180 510 L295 555 L390 402 L550 330" />
            <path className="guide" d="M80 130 C220 40 360 100 520 40 M70 680 L560 180" />
            <circle cx="180" cy="510" r="7" /><circle cx="390" cy="402" r="7" /><circle cx="550" cy="330" r="7" />
          </svg>
          <span className="axis-label">10004X</span>
        </div>
        <div className="hero-content" id="content">
          <p className="role-line">Student Roboticist <b>•</b> Programmer <b>•</b> Strategist</p>
          <h1 id="hero-title"><span>Babullee</span><span lang="zh-Hant">李仁柏</span></h1>
          <p className="hero-intro">I’m a student roboticist, programmer, and strategist who enjoys turning ambitious ideas into systems that work under real competitive pressure.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Explore My Work <Arrow /></a>
            <a className="button secondary" href="#robotics">View Robotics Journey <Arrow down /></a>
          </div>
        </div>
        <a className="achievement-rail" href="#achievements">
          <span className="target-icon" aria-hidden="true"><i /></span>
          <span><b>2025 VEX World Championship Competitor</b><small>Team 10004X <em>•</em> <strong>11th</strong> in Qualification Matches</small></span>
          <Arrow />
        </a>
      </section>

      <section id="about" className="section about-section">
        <SectionHeading eyebrow="01 / About" title="Curiosity with competitive energy." />
        <div className="about-grid reveal">
          <p className="lead">Babullee 李仁柏 is a 15-year-old Grade 10 student who likes understanding how systems work—and then finding a way to make them work better.</p>
          <div className="about-copy">
            <p>Based at Putai International School in Puli, Taiwan, he applies logical thinking to practical challenges across robotics, programming, mathematics, chemistry, and engineering.</p>
            <p>His approach is intuitive, persistent, and intensely involved: learn the system, test it under pressure, document what changed, and keep improving.</p>
          </div>
          <dl className="facts">
            <div><dt>Age / Grade</dt><dd>15 / Grade 10</dd></div>
            <div><dt>School</dt><dd>Putai International School</dd></div>
            <div><dt>Location</dt><dd>Puli, Taiwan</dd></div>
            <div><dt>Focus</dt><dd>Robotics · Mathematics · Chemistry</dd></div>
          </dl>
        </div>
      </section>

      <section id="robotics" className="section robotics-section">
        <SectionHeading eyebrow="02 / Robotics" title="One robot. Four disciplines." />
        <div className="robotics-lead reveal">
          <p>For Team 10004X, Babullee contributes across the complete competition cycle—not only code.</p>
          <span className="technical-label">VEX / TEAM 10004X</span>
        </div>
        <div className="role-grid reveal">
          {[
            ["Programming", "C++ and VEXcode in a competitive robotics environment, with code details to be added after review."],
            ["Documentation", "Engineering process, design decisions, testing records, improvements, and competition preparation."],
            ["Strategy", "Match analysis, tactical decisions, competition planning, and robot-use strategy."],
            ["Leadership", "VEX Robotics Club leadership, team preparation, coordination, and coaching-style support."],
          ].map(([title, text], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
        <div className="journey reveal">
          <div className="journey-line" aria-hidden="true"><i /><i /><i /></div>
          <article><span>TAIWAN</span><h3>2025 VEX Taiwan Open</h3><p>National Taiwan University</p><strong>Qualified for the VEX World Championship</strong></article>
          <article><span>UNITED STATES</span><h3>VEX World Championship</h3><p>St. Louis · Team 10004X</p><strong>11th in qualification matches</strong></article>
        </div>
        <div className="media-strip reveal" aria-label="Future robotics media">
          {['Robot photo', 'Engineering notebook', 'Match video', 'Code sample'].map((item) => (
            <div key={item}><span aria-hidden="true">＋</span><p>{item}</p><small>Coming soon</small></div>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <SectionHeading eyebrow="03 / Projects" title="Systems built to be used." />
        <div className="project-list">
          {projects.map((project, index) => (
            <article className={`project reveal ${index === 0 ? "featured" : ""}`} key={project.title}>
              <div className="project-meta"><span>{project.index}</span><small>{project.type}</small></div>
              <div><h3>{project.title}</h3><p>{project.summary}</p><ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
              <div className="project-placeholder"><span aria-hidden="true">{index === 0 ? "⌁" : "{ }"}</span><small>{project.status}</small></div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <SectionHeading eyebrow="04 / Skills" title="Evidence, not percentages." />
        <div className="skills-list">
          {skillGroups.map((group) => (
            <article className="skill-group reveal" key={group.title}>
              <span>{group.number}</span><h3>{group.title}</h3><p>{group.evidence}</p>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section id="achievements" className="section achievements-section">
        <SectionHeading eyebrow="05 / Achievements" title="From Taiwan to St. Louis." />
        <div className="achievement-map reveal">
          <div className="map-line" aria-hidden="true"><i /><i /></div>
          <article><span>01 / NTU</span><h3>2025 VEX Taiwan Open</h3><p>Helped Team 10004X qualify for the VEX World Championship through the 2025 VEX Taiwan Open at National Taiwan University.</p><small>Official competition evidence coming soon</small></article>
          <article><span>02 / ST. LOUIS</span><h3>VEX World Championship</h3><p>Competed in St. Louis with Team 10004X, achieving 11th place during the qualification matches.</p><small>Competition media coming soon</small></article>
        </div>
      </section>

      <section id="interests" className="section interests-section">
        <SectionHeading eyebrow="06 / Interests" title="Energy beyond the workshop." />
        <div className="interest-list reveal">
          {interests.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section id="resume" className="section resume-section">
        <div className="resume-card reveal">
          <span className="eyebrow">07 / Résumé</span>
          <h2>A working record of the work.</h2>
          <p>The online portfolio currently contains Babullee’s education, robotics experience, projects, achievements, skills, and interests. A downloadable PDF will be added when the final résumé is supplied.</p>
          <button className="button disabled" type="button" disabled>PDF Coming Soon</button>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <span className="eyebrow reveal">08 / Contact</span>
        <div className="contact-grid reveal">
          <h2>Let’s build something that works.</h2>
          <div><p>I’m interested in robotics, programming, engineering, mathematics, and ambitious technical projects.</p>
            <a className="email-link" href="mailto:babullee6@gmail.com">babullee6@gmail.com <Arrow /></a>
            <button className="copy-button" type="button" onClick={copyEmail} aria-live="polite">{copied ? "Copied" : "Copy email"}</button>
          </div>
        </div>
      </section>

      <footer><a className="brand" href="#home"><span className="brand-mark">B</span><span>Babullee <b>李仁柏</b></span></a><p>Student Roboticist · Programmer · Strategist</p><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}
