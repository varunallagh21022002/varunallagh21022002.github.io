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
- Add engineering work to `engineeringProjects`.
- Add papers read to `papersRead`, authored work to `papersWritten`, and executed studies/adaptations to `papersImplemented`.
- Engineering entries support `title`, `status`, `category`, `summary`, `details`, `tags`, `diagram`, `diagramLabel`, and optional `link`.
- Paper entries additionally support `filters`, `citation`, and an optional public `link`. Use explicit categories/filters rather than matching display status strings.
- Keep papers read, papers written, and papers implemented distinct. A paper implementation should say whether it is an adaptation, exact reproduction, or partial evidence; never transfer the paper authors’ results to Varun.
- Update social links in `links`.

### Example project

```js
{
  title: "A project title",
  status: "Ongoing",
  summary: "One factual sentence visible on the card.",
  details: "A fuller explanation. Avoid invented metrics, links, or implementations.",
  tags: ["React", "NLP"],
  diagram: "intercoode",
  diagramLabel: "share → reason → review"
}
```

Use one of the existing diagram keys (`intercoode`, `fileshareica`, `internetsp33d`, `intent`, `filter`, `disambiguate`, `hinglish`, or `paper`) or add a new SVG entry in `script.js`. Give each engineering project its own `diagramLabel`; labels should describe that project's actual flow rather than reuse a generic engineering phrase.

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
