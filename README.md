# sahlamol-scm-portfolio

Single-page portfolio for Sahlamol V B, targeting Supply Chain Analyst, S&OP / Supply Planning, Demand Planning and Procurement roles. The design uses KPI strips, planning tables and a "monthly S&OP review" layout instead of a developer-style template.

## Tech stack
Next.js 14 (App Router), React 18, Tailwind CSS 3. No API keys or environment variables. Dark mode follows the system setting.

## Run locally
```bash
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # production check
```

## Customize
- **All text and numbers:** edit `data/content.js` (profile, KPIs, projects, experience, skills, education).
- **Documents:** the project report and S&OP deck are in `public/files/`. To add a resume download, put a phone-free PDF there and add a link in `app/page.jsx`.
- **Colors:** edit the CSS variables at the top of `app/globals.css`.
- **Photo:** none by default. To add one, place `photo.jpg` in `public/` and add an `<img>` in the hero in `app/page.jsx`.

## Structure
```
app/          layout.jsx, page.jsx, globals.css
components/   Nav.jsx, Section.jsx, Project.jsx
data/         content.js
public/files  Resume, project report, S&OP review pack
```

## Deploy
Push to GitHub and import the repo in Vercel. No configuration needed.

## Data note
Project results come from synthetic datasets (as stated in the source reports) and demonstrate method, not real company performance.
