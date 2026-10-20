# Bruin Tapeout website

The public website for **Bruin Tapeout**, UCLA's undergraduate chip design team.

It's a [Jekyll](https://jekyllrb.com) site hosted for free on GitHub Pages.
**You don't need to install anything to edit it.** Change a file on GitHub,
commit, and the live site updates in a minute or two.

- Live site: <https://sugar0ats.github.io/bruin-tapeout_website/>
- Pages: Home, About, Projects, Resources, Sponsors, Contact

---

## Where everything lives

Almost every edit is in one of these files:

| I want to change... | Edit this file |
|:--|:--|
| Leadership (names, roles, photos) | `_data/officers.yml` |
| Subteams (descriptions, pictures, tools) | `_data/subteams.yml` |
| Projects (status, specs, features, links) | `_data/projects.yml` |
| Sponsors | `_data/sponsors.yml` |
| Sponsorship tier table | `_data/sponsor_tiers.yml` |
| Home page numbers (3 subteams, 50+ members, ...) | `_data/stats.yml` |
| Timeline milestones (Home and About) | `_data/timeline.yml` |
| Home page headline, intro, and "Our story" blurb | `index.md` |
| About page history and "How we work" list | `about.md` |
| Projects page "What's next" list | `projects.md` |
| Resources page links and videos | `_data/resources.yml` |
| Sponsors page "Why sponsor us" and "How to give" | `sponsors.md` |
| Contact page text and topics | `contact.md` |
| Club email, mailing address, GitHub and social links | `_config.yml` |
| Menu links | `_data/navigation.yml` |
| Logo files | `assets/images/logo/` (see [Logo](#logo)) |
| Colors and fonts | top of `assets/css/main.css` |

Every data file starts with a comment that explains each field.

### Editing tips

- **`.yml` files are indentation-sensitive.** Use spaces, not tabs, and keep
  things lined up with the entries around them. If the site stops updating
  after an edit, a misaligned line is the most likely cause (see
  [Troubleshooting](#troubleshooting)).
- If a value contains a colon (`:`), wrap it in quotes:
  `title: "Spring 2027: our second tapeout"`.
- **`.md` files** are Markdown. Everything between the two `---` lines at the
  top is settings; everything below is regular text, where `**bold**`,
  `*italic*`, and `[link text](https://example.com)` all work.

---

## Common tasks

### Add a photo or a new person to Leadership

1. Upload a square photo (about 600×600, JPG or PNG) to
   `assets/images/officers/`, e.g. `emma-cao.jpg`.
   On GitHub: open the folder → **Add file** → **Upload files**.
2. In `_data/officers.yml`, fill in their block:

   ```yaml
   - name: Emma Cao
     role: Project Lead · Physical Design Lead
     photo: /assets/images/officers/emma-cao.jpg
     details: Electrical Engineering, Class of 2027
     linkedin: https://www.linkedin.com/in/...
   ```

Leave `photo: ""` to show the person's initials instead. People appear in the
order they're listed. To add someone, copy a whole block (from `- name` down)
and paste it where you want them to appear. This is the only file to update
when leadership changes; the subteam descriptions don't name anyone.

### Replace a subteam picture with a real photo

Upload the photo to `assets/images/subteams/`, then change that subteam's
`image:` (and `image_alt:`, a short description for screen readers) in
`_data/subteams.yml`. Landscape photos around 1200×900 look best; they're
cropped to a 4:3 frame. The Physical Design picture is the layout screenshot
from our sponsorship brochure; the other two are placeholder illustrations.

### Update the member count or other stats

Edit `value:` in `_data/stats.yml`. Use `suffix: "+"` for "50+".

### Update a project's status

In `_data/projects.yml`:

- Change `status:` (the label) and `status_key:` (the color of the dot next
  to it): `design`, `fabrication`, or `complete`.
- Move the progress tracker forward by changing each milestone's `state:` to
  `done`, `current`, or `upcoming`.

For example, when the chip comes back from the fab:

```yaml
  status: Back from the fab, now in bring-up
  status_key: complete
  ...
  milestones:
    ...
    - name: Fabrication
      state: done
    - name: Bring-up
      state: current
```

### Add a new project

Copy the whole `- id: riscv8` block in `_data/projects.yml`, paste it **above**
the existing one (newest first), and edit it. The first project in the file is
the one featured on the Home page. The `encoding`, `image`, and `milestones`
sections are optional, so delete any that don't apply.

### Add a sponsor

Add a block to `_data/sponsors.yml`. To show a logo instead of the name, upload
it (SVG or transparent PNG, dark-colored to suit the light page) to
`assets/images/sponsors/` and set `logo:` to its path. Check the sponsor's
brand guidelines before using their logo.

### Change the sponsorship tiers

Edit `_data/sponsor_tiers.yml`. Each benefit has a `from:` tier; it gets a
check mark in that tier and every tier above it.

### Add a timeline milestone

Add an entry to the bottom of `_data/timeline.yml`. Move `current: true` to
whichever milestone is happening now.

---

## Logo

`assets/images/logo/` holds web versions of the Bruin Tapeout logo, made from
the original artwork:

| File | Used for |
|:--|:--|
| `logo-badge.png` | The full logo on a black circle (home page, like the brochure cover) |
| `mark-badge.png` | The bear without the lettering, for small sizes (header and footer) |
| `logo.png` | The full logo on a transparent background, for dark backgrounds |
| `favicon.png`, `apple-touch-icon.png` | Browser tab and phone home-screen icons |

If the logo changes, replace these files with new versions of the same size
and keep the same file names.

---

## Hosting on GitHub Pages

One-time setup:

1. Merge this branch into `main`.
2. On GitHub go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*,
   then choose `main` and `/ (root)`, and click **Save**.
4. After a minute or two the site is live at
   `https://sugar0ats.github.io/bruin-tapeout_website/`.

### Custom domain

If you later buy a domain such as `bruintapeout.com`:

1. Add it under **Settings → Pages → Custom domain** and follow GitHub's DNS
   instructions.
2. In `_config.yml`, set `url: "https://bruintapeout.com"` and `baseurl: ""`.

### If the repository moves

If the repo is renamed or moved (for example into the `UCLA-Tapeout-Club`
organization), update `url` and `baseurl` in `_config.yml` to match the new
Pages address, e.g. `url: "https://ucla-tapeout-club.github.io"` and
`baseurl: "/bruin-tapeout_website"`.

---

## Previewing on your own computer (optional)

You only need this if you want to see changes before publishing them.

1. Install Ruby ([guide](https://jekyllrb.com/docs/installation/)).
2. In this folder, run:

   ```bash
   bundle install
   bundle exec jekyll serve
   ```

3. Open <http://localhost:4000/bruin-tapeout_website/>.

The preview reloads when you save a file, except `_config.yml`, which needs a
restart (Ctrl+C, then `bundle exec jekyll serve` again).

---

## Troubleshooting

**The site didn't update after my edit.** Open the repo's **Actions** tab. A
red ✗ next to "pages build and deployment" means the build failed; click it to
see the error. It usually names the file and line, which is most often a `.yml`
indentation problem or a missing quote.

**An image doesn't show up.** Paths start with `/assets/...` and are
case-sensitive: `Jane.JPG` and `jane.jpg` are different files.

---

## How it's built

```
_config.yml          site settings (title, email, URL)
_data/               all the editable content lists
_layouts/            page templates (one per page type)
_includes/           reusable pieces: header, footer, page header, people
assets/css/main.css  all styles; colors and fonts are at the top
assets/js/main.js    mobile menu, copy-email button, scroll animations
assets/images/       logo, photos, illustrations
index.md, about.md, projects.md, sponsors.md, contact.md   the pages
```

The design follows our sponsorship brochure: the same fonts (Sora and IBM
Plex Sans), warm paper and charcoal backgrounds, the gold rule, and the
rainbow wedge as the one bright accent.

The site works without JavaScript; the script only adds the mobile menu and
the copy-email button.
