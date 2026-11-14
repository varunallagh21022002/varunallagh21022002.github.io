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
    filleshareica: '<svg viewBox="0 0 640 180" role="img" aria-label="Approved devices exchanging files through a session"><rect x="28" y="45" width="100" height="90" rx="10"/><rect x="512" y="45" width="100" height="90" rx="10"/><path d="M128 90h384"/><path d="m250 72 22 18-22 18m140-36-22 18 22 18"/><circle cx="320" cy="90" r="28"/><path d="M306 90h28m-14-14v28"/></svg>',
    internetsp33d: '<svg viewBox="0 0 640 180" role="img" aria-label="Browser tabs organized around a focused task"><rect x="28" y="35" width="584" height="110" rx="5"/><path d="M28 66h584M74 51h100M220 51h100M366 51h100"/><rect x="66" y="87" width="134" height="34" rx="3"/><rect x="254" y="87" width="134" height="34" rx="3"/><rect x="442" y="87" width="134" height="34" rx="3"/><circle cx="170" cy="104" r="8"/><path d="m166 104 4 4 8-10"/></svg>',
    intent: '<svg viewBox="0 0 640 180" role="img" aria-label="Text inputs flowing into intent categories"><path d="M32 52h124M32 90h98M32 128h145M240 90h120M455 90h140"/><circle cx="198" cy="90" r="22"/><circle cx="414" cy="90" r="22"/><path d="M190 82 206 90l-16 8m208-16 16 8-16 8"/></svg>',
    hinglish: '<svg viewBox="0 0 640 180" role="img" aria-label="Two language streams being cleaned and joined"><path d="M34 58h116l40 32-40 32H34l40-32zM454 58h116l36 32-36 32H454l40-32zM230 90h180"/><circle cx="320" cy="90" r="26"/><path d="m306 90 10 10 19-23"/></svg>',
    filter: '<svg viewBox="0 0 640 180" role="img" aria-label="Generated samples passing through quality filters"><path d="M34 58h150M34 90h150M34 122h150M258 90h124M456 90h150"/><path d="M214 42v96l30-48z"/><circle cx="416" cy="90" r="26"/><path d="m404 90 9 9 17-21"/></svg>',
    disambiguate: '<svg viewBox="0 0 640 180" role="img" aria-label="An ambiguous utterance compared with target and competing intents"><circle cx="102" cy="90" r="31"/><circle cx="320" cy="48" r="27"/><circle cx="320" cy="132" r="27"/><path d="M133 82 293 54M133 98l160 28M347 48h170M347 132h170"/><path d="m504 40 14 8-14 8m0 68 14 8-14 8"/></svg>',
    paper: '<svg viewBox="0 0 640 180" role="img" aria-label="A paper study pipeline with a verified first step"><rect x="30" y="45" width="120" height="90" rx="3"/><rect x="260" y="45" width="120" height="90" rx="3"/><rect x="490" y="45" width="120" height="90" rx="3"/><path d="M150 90h110M380 90h110"/><circle cx="205" cy="90" r="8"/><circle cx="435" cy="90" r="8"/><path d="m197 90 6 6 11-13"/></svg>'
  };

  function projectCard(project, index, kind) {
    const statusClass = project.status.toLowerCase().includes("ongoing") || project.status.toLowerCase().includes("partial") ? "status-wip" : "";
    const diagramLabel = project.diagramLabel || (project.diagram === "paper" ? "study → verify → evaluate" : "question → model → evaluate");
    const isDoiLink = /^https:\/\/(doi\.org|dx\.doi\.org)\//i.test(String(project.link || ""));
    const citation = project.citation ? `<p class="project-citation">${escapeHtml(project.citation)}${isDoiLink ? ` · <a href="${escapeHtml(project.link)}" target="_blank" rel="noreferrer">DOI ↗</a>` : ""}</p>` : "";
    const optionalLink = project.link && isSafeExternalLink(project.link) && !isDoiLink ? `<a class="project-link" href="${escapeHtml(project.link)}" target="_blank" rel="noreferrer">${kind === "engineering" ? "View source" : "Read paper"} ↗</a>` : "";
    return `<article class="project-card" data-filter-type="${escapeHtml(project.category)}"><div class="project-card-top"><span class="project-index">${String(index + 1).padStart(2, "0")}</span><span class="status-pill ${statusClass}">${escapeHtml(project.status)}</span></div><div class="diagram">${diagrams[project.diagram] || ""}<span class="diagram-label">${diagramLabel}</span></div><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.summary)}</p><div class="tag-list">${project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div><details><summary>Read more <span aria-hidden="true">+</span></summary><p>${escapeHtml(project.details)}</p>${citation}${optionalLink}</details></article>`;
  }

  function renderGroup(container, projects, filter, kind) {
    const visible = filter === "all" ? projects : projects.filter((project) => project.category === filter || (Array.isArray(project.filters) && project.filters.includes(filter)));
    container.innerHTML = visible.map((project, index) => projectCard(project, index, kind)).join("");
  }

  renderGroup($("#engineering-grid"), data.engineeringProjects, "all", "engineering");
  renderGroup($("#research-grid"), data.papersRead, "all", "research");
  renderGroup($("#implemented-grid"), data.papersImplemented, "all", "research");

  $("#skills-list").innerHTML = data.skills.map((skill) => `<article class="skill-group"><h3>${escapeHtml(skill.name)}</h3><p>${escapeHtml(skill.items)}</p></article>`).join("");
  $("#education-list").innerHTML = data.education.map((item) => `<article class="timeline-item"><span class="timeline-period">${escapeHtml(item.period)}</span><div><h3>${escapeHtml(item.degree)}</h3><p>${escapeHtml(item.school)}</p><small>${escapeHtml(item.note)}</small></div></article>`).join("");

  $$("[data-filter-group]").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.dataset.filterGroup;
      $$(`[data-filter-group="${group}"]`).forEach((item) => item.classList.remove("is-active"));
      $$(`[data-filter-group="${group}"]`).forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      button.classList.add("is-active");
      renderGroup(group === "engineering" ? $("#engineering-grid") : $("#research-grid"), group === "engineering" ? data.engineeringProjects : data.papersRead, button.dataset.filter, group);
    });
  });

  $$("[data-library-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.libraryTab;
      $$("[data-library-tab]").forEach((item) => {
        const selected = item === tab;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-selected", String(selected));
      });
      $$("[data-library-panel]").forEach((panel) => {
        const selected = panel.dataset.libraryPanel === target;
        panel.hidden = !selected;
        panel.classList.toggle("is-active", selected);
      });
    });
    tab.addEventListener("keydown", (event) => {
      const tabs = $$("[data-library-tab]");
      const currentIndex = tabs.indexOf(tab);
      let nextIndex = currentIndex;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (currentIndex + 1) % tabs.length;
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;
      if (nextIndex !== currentIndex) {
        event.preventDefault();
        tabs[nextIndex].focus();
        tabs[nextIndex].click();
      }
    });
  });
  const activeLibraryTab = $(".library-tab.is-active");
  if (activeLibraryTab) activeLibraryTab.click();

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
