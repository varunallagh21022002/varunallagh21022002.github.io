# Varun Allagh — Portfolio

A dependency-free, responsive editorial portfolio for GitHub Pages. It uses warm off-white, deep navy, restrained coral, expressive type, relative asset paths, and no backend or build step.

## Local preview

From this folder, run any static server, for example:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Opening `index.html` directly also works, but a local server gives the most realistic browser behavior.

## Updating content

Most portfolio content lives in [`content.js`](content.js), in the `window.portfolioData` object:

- Update the intro, about, research, skills, education, experience, and contact copy.
- Add engineering work to `engineeringProjects` and research or paper studies to `researchProjects`.
- Each project supports `title`, `status`, `summary`, `details`, `tags`, and `diagram`.
- Research statuses should distinguish ongoing work from paper studies. Keep results proportional to the evidence available.
- Update social links in `links`.

### Example project

```js
{
  title: "A project title",
  status: "Ongoing",
  summary: "One factual sentence visible on the card.",
  details: "A fuller explanation. Avoid invented metrics, links, or implementations.",
  tags: ["React", "NLP"],
  diagram: "graph"
}
```

Use one of the existing diagram keys (`intercoode`, `graph`, `intent`, `hinglish`, or `paper`) or add a new SVG entry in `script.js`.

### Example research entry

```js
{
  title: "A research direction",
  status: "Ongoing",
  summary: "What is being explored, without implying a finished result.",
  details: "What has been verified, what remains, and what is not claimed.",
  tags: ["Research"],
  diagram: "intent"
}
```

The page structure and no-JavaScript fallback are in `index.html`; visual styles are in `styles.css`; filters, mobile navigation, and enhanced rendering are in `script.js`. Replace `assets/varun-allagh.jpeg` if you want to use another portrait, and update the `src` and `alt` text in `index.html` if needed.

## GitHub Pages

1. Create or use a GitHub repository for the site.
2. Push these files to the repository's default branch (or a dedicated `gh-pages` branch).
3. In **Settings → Pages**, choose **Deploy from a branch**, select the branch and `/ (root)` folder, then save.
4. Because all CSS, JavaScript, and image references are relative, the site also works when served from a repository subpath.

No deployment, push, or commit is performed by this project.
