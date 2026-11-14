(function () {
  const data = window.portfolioData;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
  const isSafeExternalLink = (value) => /^https?:\/\//i.test(String(value || ""));
  document.documentElement.classList.add("js");

  $$("[data-content]").forEach((element) => {
    const key = element.dataset.content;
    if (data[key]) element.textContent = data[key];
  });
  $$("[data-link]").forEach((element) => {
    const key = element.dataset.link;
    if (data.links[key]) element.href = data.links[key];
  });

  const diagrams = {
    intercoode: '<svg viewBox="0 0 640 180" role="img" aria-label="Three connected panels for shared coding, reasoning, and review"><rect x="12" y="24" width="190" height="132" rx="4"/><rect x="222" y="24" width="190" height="132" rx="4"/><rect x="432" y="24" width="196" height="132" rx="4"/><path d="M202 90h20M412 90h20"/><circle cx="542" cy="68" r="13"/><path d="M542 96v28m-18-12 18 12 18-12"/><path d="M42 54h102M42 72h78M252 54h110M252 72h78"/></svg>',
    graph: '<svg viewBox="0 0 640 180" role="img" aria-label="A graph of connected paper nodes"><path d="M88 94 222 47l150 69 143-54M222 47l42 92 108-23M372 116l55 32 88-86"/><circle cx="88" cy="94" r="12"/><circle cx="222" cy="47" r="15"/><circle cx="372" cy="116" r="14"/><circle cx="515" cy="62" r="13"/><circle cx="264" cy="139" r="10"/><circle cx="427" cy="148" r="9"/></svg>',
    intent: '<svg viewBox="0 0 640 180" role="img" aria-label="Text inputs flowing into intent categories"><path d="M32 52h124M32 90h98M32 128h145M240 90h120M455 90h140"/><circle cx="198" cy="90" r="22"/><circle cx="414" cy="90" r="22"/><path d="M190 82 206 90l-16 8m208-16 16 8-16 8"/></svg>',
    hinglish: '<svg viewBox="0 0 640 180" role="img" aria-label="Two language streams being cleaned and joined"><path d="M34 58h116l40 32-40 32H34l40-32zM454 58h116l36 32-36 32H454l40-32zM230 90h180"/><circle cx="320" cy="90" r="26"/><path d="m306 90 10 10 19-23"/></svg>',
    paper: '<svg viewBox="0 0 640 180" role="img" aria-label="A paper study pipeline with a verified first step"><rect x="30" y="45" width="120" height="90" rx="3"/><rect x="260" y="45" width="120" height="90" rx="3"/><rect x="490" y="45" width="120" height="90" rx="3"/><path d="M150 90h110M380 90h110"/><circle cx="205" cy="90" r="8"/><circle cx="435" cy="90" r="8"/><path d="m197 90 6 6 11-13"/></svg>'
  };

  function projectCard(project, index, kind) {
    const statusClass = project.status.toLowerCase().includes("ongoing") || project.status.toLowerCase().includes("partial") ? "status-wip" : "";
    const diagramLabel = kind === "engineering" ? "collaborate → solve → review" : project.diagram === "paper" ? "study → verify → evaluate" : "question → model → evaluate";
    const isDoiLink = /^https:\/\/(doi\.org|dx\.doi\.org)\//i.test(String(project.link || ""));
    const citation = project.citation ? `<p class="project-citation">${escapeHtml(project.citation)}${isDoiLink ? ` · <a href="${escapeHtml(project.link)}" target="_blank" rel="noreferrer">DOI ↗</a>` : ""}</p>` : "";
    const optionalLink = project.link && isSafeExternalLink(project.link) && !isDoiLink ? `<a class="project-link" href="${escapeHtml(project.link)}" target="_blank" rel="noreferrer">View project ↗</a>` : "";
    return `<article class="project-card" data-filter-type="${escapeHtml(project.category)}"><div class="project-card-top"><span class="project-index">${String(index + 1).padStart(2, "0")}</span><span class="status-pill ${statusClass}">${escapeHtml(project.status)}</span></div><div class="diagram">${diagrams[project.diagram] || ""}<span class="diagram-label">${diagramLabel}</span></div><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.summary)}</p><div class="tag-list">${project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div><details><summary>Read more <span aria-hidden="true">+</span></summary><p>${escapeHtml(project.details)}</p>${citation}${optionalLink}</details></article>`;
  }

  function renderGroup(container, projects, filter, kind) {
    const visible = filter === "all" ? projects : projects.filter((project) => project.category === filter);
    container.innerHTML = visible.map((project, index) => projectCard(project, index, kind)).join("");
  }

  renderGroup($("#engineering-grid"), data.engineeringProjects, "all", "engineering");
  renderGroup($("#research-grid"), data.researchProjects, "all", "research");

  $("#experience-list").innerHTML = data.experience.map((item) => `<article class="timeline-item"><span class="timeline-period">${escapeHtml(item.period)}</span><div><h3>${escapeHtml(item.role)}</h3><p>${escapeHtml(item.organization)}</p><small>${escapeHtml(item.note)}</small></div></article>`).join("");
  $("#skills-list").innerHTML = data.skills.map((skill) => `<article class="skill-group"><h3>${escapeHtml(skill.name)}</h3><p>${escapeHtml(skill.items)}</p></article>`).join("");
  $("#education-list").innerHTML = data.education.map((item) => `<article class="timeline-item"><span class="timeline-period">${escapeHtml(item.period)}</span><div><h3>${escapeHtml(item.degree)}</h3><p>${escapeHtml(item.school)}</p><small>${escapeHtml(item.note)}</small></div></article>`).join("");

  $$("[data-filter-group]").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.dataset.filterGroup;
      $$(`[data-filter-group="${group}"]`).forEach((item) => item.classList.remove("is-active"));
      $$(`[data-filter-group="${group}"]`).forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      button.classList.add("is-active");
      renderGroup(group === "engineering" ? $("#engineering-grid") : $("#research-grid"), group === "engineering" ? data.engineeringProjects : data.researchProjects, button.dataset.filter, group);
    });
  });

  const menuToggle = $(".menu-toggle");
  const nav = $("#site-nav");
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });
  $$("#site-nav a").forEach((link) => link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }));
  $("#current-year").textContent = new Date().getFullYear();

  const reveal = () => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.1 });
    $$(".reveal").forEach((element) => observer.observe(element));
  };
  reveal();
})();
