# Instructions for AI coding assistants (Codex, Claude, etc.)

This is the website of the VERGAP project (MSCA Postdoctoral Fellowship,
University of Hamburg, 2026–2028, grant No. 101283632). Read `README.md` for
how the site is built.

## Spelling: always use these forms

| Correct | Never |
|---|---|
| **Gaṇapāṭhavivṛti** (single t) | ~~Gaṇapāṭhavivṛtti~~ |
| गणपाठविवृति | ~~गणपाठविवृत्ति~~ |
| Prakāśavarṣa | |
| Śāradā | |

Use full IAST diacritics in all visible text.

## Rules

- This repository is only the website. The edition and the manuscript
  transcriptions live in the separate repository `ankleb/VERGAP` and are shown
  by the Saktumiva2/TST viewer. Link to them through `_data/text_links.yml`;
  never copy or regenerate XML here.
- Do not make philological changes to Sanskrit text, and do not invent
  Sanskrit phrases, readings or bibliographic data. Leave a `TODO` instead.
- Keep it simple: no new plugins, services or build steps without a clear need,
  explained to the researcher first.
- The owner has limited programming experience: explain consequential changes
  in plain language.
