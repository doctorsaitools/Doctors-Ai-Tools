# DoctorsAITools.com

Static site (Eleventy) deployed to GitHub Pages by GitHub Actions.

## Deploy
1. Push this folder to the `main` branch of `doctorsaitools/Doctors-Ai-Tools`.
2. GitHub > Settings > Pages > Source: **GitHub Actions** (keep custom domain and Enforce HTTPS).
3. The site rebuilds on every push.

## Edit content
- Site-wide settings, editor name, MailerLite form URL, analytics token: `src/_data/site.js`
- Homepage sample content (tools, scores, articles): `src/_data/home.json`
- Page markup: `src/index.njk` | Layout: `src/_includes/base.njk` | Styles: `src/css/main.css`

## Launch day
Set `live: true` in `src/_data/site.js`. Until then the site is `noindex` and shows photo-placeholder labels.

## Local
`npm install` then `npm start`
