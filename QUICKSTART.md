# 🎯 Quick Start Guide

Get your cybersecurity portfolio running in 5 minutes!

## ⚡ Fast Setup (Recommended)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

That's it! Open http://localhost:8080 in your browser.

## 📋 Step-by-Step Guide

### 1️⃣ Prerequisites
- **Node.js**: v16 or higher ([Download](https://nodejs.org/))
- **npm**: Comes with Node.js
- **Git**: For version control ([Download](https://git-scm.com/))

Check your versions:
```bash
node --version  # Should be v16 or higher
npm --version   # Should be 8 or higher
```

### 2️⃣ Installation

```bash
# Clone this repository (if not already done)
git clone <your-repo-url>
cd cyber-hacker-glow-main

# Install all dependencies
npm install
```

This will install:
- React 18
- TypeScript
- Tailwind CSS
- shadcn-ui components
- Vite build tool
- All other dependencies

### 3️⃣ Development

```bash
# Start development server with hot reload
npm run dev
```

The site will open at: `http://localhost:8080`

**Features in dev mode:**
- 🔥 Hot Module Replacement (instant updates)
- ⚡ Fast refresh for React components
- 🐛 Source maps for debugging
- 💻 TypeScript type checking

### 4️⃣ Customization

Before deploying, customize the content:

#### Update Personal Information
Edit these files:
- `src/components/Hero.tsx` - Your name, title, tagline
- `src/components/Skills.tsx` - Your skills and expertise
- `src/components/Projects.tsx` - Your projects
- `src/components/Certifications.tsx` - Your certifications
- `src/components/Contact.tsx` - Your contact information
- `src/components/Footer.tsx` - Footer text

#### Update Meta Tags
Edit `index.html`:
- Title
- Description
- Author
- Keywords

#### Update Sitemap
Edit `public/sitemap.xml`:
- Replace `YOUR-USERNAME` with your GitHub username
- Replace `YOUR-REPO-NAME` with your repository name
- Update the lastmod date

### 5️⃣ Build & Preview

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

The production build will be in the `dist/` folder.

### 6️⃣ Deploy to GitHub Pages

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

Quick deploy:
```bash
# Using GitHub Actions (automatic)
git add .
git commit -m "Deploy to GitHub Pages"
git push

# Using gh-pages package (manual)
npm run deploy
```

## 🎨 Customization Tips

### Change Colors
Edit `src/index.css` to change the color scheme:
```css
:root {
  --primary: 100 85% 60%;     /* Neon green */
  --secondary: 180 80% 55%;   /* Cyan */
  --accent: 240 70% 60%;      /* Purple */
}
```

### Add New Sections
1. Create a new component in `src/components/`
2. Import it in `src/pages/Index.tsx`
3. Add it to the page layout

### Change Fonts
Edit `index.html` to use different Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

Then update `src/index.css`:
```css
body {
  font-family: 'YourFont', sans-serif;
}
```

### Remove Pokemon Elements
If you want a more minimal look:
1. Remove `FloatingPokemon` import from `Index.tsx`
2. Remove Pokemon images from components
3. Delete unused Pokemon assets from `src/assets/`

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:8080 |
| `npm run build` | Build for production in `dist/` folder |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run deploy` | Deploy to GitHub Pages (requires gh-pages) |

## 📁 Project Structure

```
cyber-hacker-glow-main/
├── public/               # Static assets
│   ├── robots.txt       # SEO: Search engine directives
│   └── sitemap.xml      # SEO: Site structure
├── src/
│   ├── assets/          # Images, Pokemon sprites
│   ├── components/      # React components
│   │   ├── ui/         # shadcn-ui components
│   │   ├── Hero.tsx    # Landing section
│   │   ├── Skills.tsx  # Skills showcase
│   │   ├── Projects.tsx # Project portfolio
│   │   ├── Certifications.tsx # Certifications
│   │   ├── Contact.tsx # Contact form
│   │   └── Footer.tsx  # Footer
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   │   ├── Index.tsx   # Main page
│   │   └── NotFound.tsx # 404 page
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # App entry point
│   └── index.css       # Global styles & theme
├── index.html          # HTML template
├── package.json        # Dependencies & scripts
├── vite.config.ts      # Vite configuration
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## 🐛 Troubleshooting

### Port 8080 already in use
```bash
# Kill the process using port 8080
# Windows
netstat -ano | findstr :8080
taskkill /PID <PID> /F

# Or change the port in vite.config.ts
```

### Dependencies installation fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build fails
```bash
# Check Node version
node --version  # Should be v16+

# Update npm
npm install -g npm@latest

# Clean install
rm -rf node_modules dist
npm install
npm run build
```

### TypeScript errors
```bash
# Run type checking
npx tsc --noEmit

# Most errors are auto-fixed in dev mode
```

## 💡 Tips for Success

1. **Start small**: Get the basic site running first
2. **Customize gradually**: Update content section by section
3. **Test locally**: Always test with `npm run preview` before deploying
4. **Version control**: Commit often with meaningful messages
5. **Performance**: Check Lighthouse scores before deployment

## 🎓 Learning Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Vite Guide](https://vitejs.dev/guide/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [shadcn-ui Components](https://ui.shadcn.com/)

## 🤝 Need Help?

- Check existing documentation: README.md, DEPLOYMENT.md, OPTIMIZATIONS.md
- Review the THEME_PROMPT.md for design system details
- Look at component files for usage examples

## 🎉 What's Next?

After getting your site running:

1. ✅ Customize all personal information
2. ✅ Add your own projects and certifications
3. ✅ Update contact information
4. ✅ Test on different devices
5. ✅ Deploy to GitHub Pages
6. ✅ Share your portfolio!

---

**You're all set! Happy coding! 🚀**
