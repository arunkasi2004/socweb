# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your cybersecurity portfolio to GitHub Pages.

## Prerequisites

- Git installed on your machine
- GitHub account
- Node.js and npm installed

## Method 1: Automated Deployment with GitHub Actions (Recommended)

This project includes a GitHub Actions workflow that automatically deploys your site when you push to the main branch.

### Steps:

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically build and deploy your site

3. **Access your site:**
   - Your site will be available at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
   - The deployment usually takes 1-3 minutes

### Custom Domain (Optional)

If you want to use a custom domain:

1. Go to Settings > Pages
2. Enter your custom domain under "Custom domain"
3. Add DNS records as instructed by GitHub
4. Wait for DNS propagation (can take up to 48 hours)

## Method 2: Manual Deployment with gh-pages

If you prefer manual deployment:

1. **Install gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add the homepage field at the top level:
   ```json
   "homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME"
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

   This will:
   - Build your project
   - Create/update the `gh-pages` branch
   - Push the build to GitHub

4. **Enable GitHub Pages:**
   - Go to Settings > Pages
   - Select `gh-pages` branch as source
   - Click Save

## Updating Your Site

### With GitHub Actions (Method 1):
Simply push your changes to the main branch:
```bash
git add .
git commit -m "Update content"
git push
```

The site will automatically rebuild and redeploy.

### With gh-pages (Method 2):
Run the deploy command:
```bash
npm run deploy
```

## Configuration for GitHub Pages

The project is already configured for GitHub Pages with:

1. **Base URL:** Set to `'./'` for relative paths (works with any repo name)
2. **Build optimizations:** Minification, code splitting, tree-shaking
3. **`.nojekyll` file:** Prevents Jekyll processing
4. **Asset handling:** Proper public path configuration

## Build Optimization

The production build includes:

- ✅ Minified JavaScript and CSS
- ✅ Code splitting for faster loading
- ✅ Tree-shaking to remove unused code
- ✅ Compressed assets
- ✅ Optimized images
- ✅ Console statements removed

## Troubleshooting

### Site shows 404 error
- Check that GitHub Pages is enabled in repository settings
- Verify the correct branch is selected (main for Actions, gh-pages for manual)
- Wait a few minutes for deployment to complete

### Assets not loading
- Make sure `base: './'` is in `vite.config.ts`
- Check that all asset imports use relative paths
- Clear browser cache and hard reload

### Build fails
- Check Node version (should be 16+)
- Delete `node_modules` and `package-lock.json`, then run `npm install`
- Check the Actions tab for detailed error logs

### Old version still showing
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check GitHub Actions tab to ensure deployment completed
- Wait a few minutes for CDN cache to clear

## Performance Tips

The site is already optimized, but you can further improve:

1. **Image optimization:** Compress images before adding them
2. **Lazy loading:** Already implemented for components
3. **CDN:** GitHub Pages uses CDN automatically
4. **Caching:** Configured via build tools

## Local Testing

Before deploying, test the production build locally:

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

Visit `http://localhost:4173` to see how it will look when deployed.

## Repository Settings Checklist

- [ ] Repository is public (or you have GitHub Pages enabled for private repos)
- [ ] GitHub Pages is enabled in Settings
- [ ] Source is set to "GitHub Actions" or "gh-pages branch"
- [ ] Deployment completed successfully (check Actions tab)
- [ ] Site is accessible at the GitHub Pages URL

## Support

If you encounter issues:
1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the Actions logs for error details
3. Ensure all dependencies are installed correctly

---

**Your portfolio is now live and accessible to the world! 🎉**
