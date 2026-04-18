# Portfolio Website

A personal portfolio website designed for IT Support and System Administration.
Built with HTML, modern CSS Grid/Flexbox, and vanilla JavaScript.

## Features
* **Performance:** Zero frameworks, 100/100 Lighthouse score.
* **Design:** Premium Dark Mode using CSS Variables.
* **Responsiveness:** Mobile-first architecture.
* **Interactive:** Custom DOM-manipulation logic test (Speed Grid).

## Live Site
[aayushacharya.com.au](https://aayushacharya.com.au)

## Project Structure
```
/
├── assets/
│   ├── images/     # Profile photo, favicon
│   └── pdfs/       # Certification PDFs
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
├── .gitignore
└── README.md
```

## Branch Strategy
| Branch | Purpose |
|--------|---------|
| `main` | Production — live site, deploy only via PR |
| `dev`  | Active development, all changes land here first |
| `feature/*` | Short-lived branches for new sections or features |

## Workflow
```bash
# Start new work
git checkout dev
git checkout -b feature/your-feature-name

# Finish and merge to dev
git checkout dev
git merge --no-ff feature/your-feature-name

# Deploy to production
git checkout main
git merge --no-ff dev
git push origin main
```
