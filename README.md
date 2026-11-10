# VERGAP project website

Source of the public website of **VERGAP — Verse, Grammar, Pedagogy**
(MSCA Postdoctoral Fellowship, University of Hamburg, 2026–2028, grant No. 101283632).

Published at: <https://ankleb.github.io/VERGAP-project/>

## What this repository is (and is not)

- It **is** the project website: information, news, outputs, and links.
- It is **not** where the edition or transcriptions live. Those are in
  [ankleb/VERGAP](https://github.com/ankleb/VERGAP) and shown by the
  Saktumiva2/TST viewer. This site only **links** to them, through
  `_data/text_links.yml`. Updating the XML never rebuilds this website.
- Do not copy XML files, TEI content or comparative datasets into this repository.

## How publishing works

Every push to `main` is built and published automatically by
`.github/workflows/deploy.yml` (about a minute). Progress: the **Actions** tab on GitHub.
Pushes to other branches are only built, to check that nothing is broken.

The site is built with a script rather than GitHub's built-in Jekyll because the
bibliography plugin (jekyll-scholar) is not allowed in the built-in build.

One-time setup on GitHub: **Settings → Pages → Source: GitHub Actions**.

## Where things are

| What | Where |
|---|---|
| Menu (order, names, drop-down) | `_data/menu.yml` |
| Links to the edition and transcriptions | `_data/text_links.yml` |
| Home page text | `_pages/index.md` |
| Project, About, Outputs, News pages | `_pages/*.md` |
| "The Text and Its Author" section | `_pages/text/` |
| News and blog posts | `_posts/YYYY-MM-DD-title.md` |
| Works cited | `_bibliography/references.bib` |
| Your own outputs (Outputs page) | `_bibliography/outputs.bib` |
| Images | `assets/img/` |
| Site title, funding texts, citation style | `_config.yml` |
| Look and feel (placeholder for now) | `assets/css/style.scss` |
| Page templates | `_layouts/`, `_includes/` |

## Writing a news item or blog post

Create `_posts/2027-03-15-short-title.md`:

```markdown
---
title: Paper at the World Sanskrit Conference
category: conference        # news | conference | publication | blog
description: One-line summary shown in the news list
references: true            # only if you cite anything
---

Text, with citations such as {% cite key -l 45 %}.
```

## Updating a page

Edit the Markdown file. On "Introduction" and "Method", change
`last_updated:` in the front matter when you revise the text.

## Citations

Put BibTeX entries in `_bibliography/references.bib`. In a page, write
`{% cite key %}` or `{% cite key -l 45 %}` (page number). Pages with
`references: true` in their front matter get a reference list automatically.
The style (`chicago-author-date`) is set under `scholar:` in `_config.yml`.

Note: in `.bib` files, a line starting with `%` is not a safe comment if it
contains `@`. Keep example entries out of `.bib` files.

## Adding an output

On the Zenodo record: **Export → BibTeX**. Paste into `_bibliography/outputs.bib`
and add one keyword so it appears under the right heading on the Outputs page:

```bibtex
@misc{vergap-edition-v1,
  author    = {Surname, Firstname},
  title     = {Gaṇapāṭhavivṛti: provisional critical edition},
  year      = {2027},
  publisher = {Zenodo},
  version   = {v1.0},
  doi       = {10.5281/zenodo.0000000},
  keywords  = {deliverable}
}
```

Keywords: `deliverable`, `publication`, `talk`.

## "Last updated" dates of the edition and transcriptions

Shown next to each link. They are fetched live from GitHub in the visitor's
browser (`assets/js/site.js`), so they are always current without rebuilding the site.

## Previewing locally (optional)

Requires Ruby. Then:

```bash
bundle install
bundle exec jekyll serve
```

and open <http://localhost:4000/VERGAP-project/>.

## Open decisions

- Visual design (the current styling is a deliberate placeholder).
- EU emblem image in the footer (check Grant Agreement wording).
- Licence for the website text.
- Custom domain (if any): change `url` and `baseurl` in `_config.yml` and the
  `--baseurl` in the workflow.
