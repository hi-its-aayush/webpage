---

## 🛠️ Tech Stack

- **Structure:** Semantic HTML5 with meaningful markup
- **Styling:** CSS Grid, Flexbox, CSS Custom Properties for theming
- **Logic:** Vanilla JavaScript (ES6+) — no dependencies
- **Icons:** Font Awesome 6
- **Fonts:** Google Fonts (Inter)
- **Hosting:** GitHub Pages
- **Domain:** Custom `.com.au` domain with DNS configuration

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git (optional, for cloning)

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/hi-its-aayush/webpage.git
   cd webpage
```

2. **Open locally**
   - Simply open `index.html` in your browser, or
   - Use a local server for better development experience:
```bash
     # Python 3
     python -m http.server 8000

     # Node.js (with http-server)
     npx http-server
```

3. **View in browser**
   - Navigate to `http://localhost:8000` (or your server port)

---

## 🎯 Key Features Explained

### 🌙 Dark Mode
The entire site uses CSS custom properties (variables) for theming. Toggle between light and dark modes with a single click — the preference is saved to localStorage.

**Relevant File:** `css/style.css` (search for `--color-*` variables)

### ⌨️ Typewriter Effect
The name section features a smooth typewriter animation that types out text character by character. Built entirely with vanilla JavaScript.

**Relevant File:** `js/script.js` → `typewriter()` function

### 🔒 Anti-Bot Contact Injection
Email and contact details are not hardcoded in HTML. Instead, they're injected via JavaScript to prevent email scrapers from harvesting your contact information.

**Relevant File:** `js/script.js` → `injectContact()` function

### 🎮 Mini Games
Two interactive games are embedded:
- **Speed Grid:** Click tiles as fast as you can
- **Tech Memory:** Flip cards to match pairs of tech logos

**Relevant File:** `js/script.js` → Game functions

### 📱 Responsive Design
Mobile-first approach with CSS media queries for tablets and desktops. Test on various devices or use browser DevTools.

---

## 📜 Certifications Featured

The portfolio showcases the following professional credentials:

- Microsoft Cloud Support Associate
- Microsoft Endpoint Administrator (MD-102)
- Cisco CCST IT Support (100-140)
- CompTIA A+ Core 1
- Google IT Support Professional Certificate
- ServiceNow IT Automation & AI-Powered Workflows

---

## 🔧 Customization

### Update Your Info
Edit `index.html` to replace:
- Name and bio
- Professional summary
- Links to your social profiles
- Certification titles and links

### Change Colors
All colors are defined as CSS variables in `css/style.css`:
```css
:root {
  --color-primary: #007bff;
  --color-background: #ffffff;
  --color-text: #333333;
  /* ... more variables ... */
}
```

### Add Your Own Content
- Replace `assets/images/banner.svg` with your own banner
- Add or remove sections by modifying `index.html`
- Adjust styling in `css/style.css`
- Extend functionality in `js/script.js`

### Update Certifications
1. Add your PDF files to `assets/pdfs/`
2. Update the links in `index.html`
3. Add corresponding titles and descriptions

---

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Create a GitHub repository** named `webpage` (or your choice)

2. **Push your code**
```bash
   git remote add origin https://github.com/YOUR_USERNAME/webpage.git
   git branch -M main
   git push -u origin main
```

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Select `main` branch as source
   - Save

4. **Add Custom Domain (Optional)**
   - Update the `CNAME` file with your domain name
   - Configure DNS records with your domain provider
   - Re-enable GitHub Pages (it may auto-configure)

Your site will be live at `https://YOUR_GITHUB_USERNAME.github.io/webpage` or your custom domain!

---

## 📊 Performance

- **Lighthouse Score:** 100/100 across Performance, Accessibility, Best Practices, and SEO
- **Zero HTTP Requests:** No external API calls or tracking
- **Optimized Assets:** Minified CSS and JavaScript
- **Fast Load Times:** Typical load time under 0.5 seconds on 4G

---

## 🛡️ Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | Latest  | ✅ Full support |
| Firefox | Latest  | ✅ Full support |
| Safari  | Latest  | ✅ Full support |
| Edge    | Latest  | ✅ Full support |

---

## 📝 License

© 2026 Aayush Acharya — All Rights Reserved.

This project is made public for reference and educational purposes. Feel free to fork and use it as inspiration for your own portfolio, but please don't claim the content or design as your own.

---

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to:
- Open an [Issue](https://github.com/hi-its-aayush/webpage/issues)
- Submit a [Pull Request](https://github.com/hi-its-aayush/webpage/pulls)

---

## 📧 Get in Touch

For inquiries about my work or collaboration opportunities, please visit the website at [aayushacharya.com.au](https://aayushacharya.com.au) or reach out through the contact form.

---

<div align="center">
  Made with ❤️ using vanilla web technologies
</div>
