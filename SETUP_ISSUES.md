# 🔧 Setup Troubleshooting Guide

Common issues and solutions when setting up the project.

## SSL/Network Issues with npm

### Issue: `ERR_SSL_CIPHER_OPERATION_FAILED`

This error occurs when npm has trouble with SSL/TLS connections to the registry.

### Solutions (try in order):

#### Solution 1: Update Node.js and npm
```bash
# Check current versions
node --version
npm --version

# Download and install the latest LTS version from:
# https://nodejs.org/

# After installing, verify:
node --version  # Should be 18.x or 20.x
npm --version   # Should be 9.x or 10.x
```

#### Solution 2: Clear npm cache
```bash
npm cache clean --force
```

#### Solution 3: Use different registry temporarily
```bash
# Try using http (less secure, only for testing)
npm config set registry http://registry.npmjs.org/
npm install

# After installation, set it back to https
npm config set registry https://registry.npmjs.org/
```

#### Solution 4: Disable strict SSL (temporary)
```bash
# ONLY for troubleshooting, not recommended for production
npm config set strict-ssl false
npm install

# Re-enable after installation
npm config set strict-ssl true
```

#### Solution 5: Use Yarn instead
```bash
# Install Yarn
npm install -g yarn

# Or download from: https://yarnpkg.com/

# Install dependencies
yarn install

# Development commands become:
yarn dev        # instead of npm run dev
yarn build      # instead of npm run build
```

#### Solution 6: Check your network/firewall
- Disable VPN temporarily
- Check corporate firewall settings
- Try from a different network
- Check antivirus software

## Windows-Specific Issues

### Issue: Permission Errors (EPERM)

```
Error: EPERM: operation not permitted
```

**Solutions:**

1. **Run as Administrator**
   - Right-click PowerShell
   - Select "Run as Administrator"
   - Navigate to project folder
   - Run `npm install`

2. **Close all applications**
   - Close VS Code, IDEs, file explorers
   - Make sure no process is using node_modules
   - Try installation again

3. **Use different package manager**
   ```bash
   npm install -g pnpm
   pnpm install
   ```

### Issue: Long Path Names

Windows has a 260 character path limit.

**Solution:**
```bash
# Enable long paths in Windows (requires admin)
# Run in PowerShell as Administrator:
New-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem" -Name "LongPathsEnabled" -Value 1 -PropertyType DWORD -Force

# Or move project to shorter path
# Example: C:\projects\portfolio
```

## General Installation Issues

### Issue: Package conflicts

```bash
# Clear everything and start fresh
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

### Issue: Outdated lock file

```bash
# Delete lock file and reinstall
Remove-Item -Force package-lock.json
npm install
```

### Issue: Module not found errors

Make sure you're in the correct directory:
```bash
cd C:\Users\arun1\Desktop\cyber-hacker-glow-main
npm install
```

## Development Server Issues

### Issue: Port 8080 already in use

**Solution:**
```bash
# Find what's using port 8080
netstat -ano | findstr :8080

# Kill the process (replace PID with actual number)
taskkill /PID <PID> /F

# Or change port in vite.config.ts
# Change "port: 8080" to "port: 3000"
```

### Issue: Cannot access localhost

- Check if dev server is actually running
- Try `http://127.0.0.1:8080` instead
- Check firewall settings
- Make sure you ran `npm run dev`

## Build Issues

### Issue: Out of memory

```bash
# Increase Node memory limit
$env:NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

### Issue: TypeScript errors

Most TypeScript errors don't prevent building. But if build fails:

```bash
# Check for actual errors
npx tsc --noEmit

# Skip type checking during build (not recommended)
# In package.json, change:
# "build": "vite build --no-emit"
```

## Alternative Setup Methods

### Method 1: Use GitHub Codespaces

1. Go to your repository on GitHub
2. Click "Code" → "Codespaces" → "Create codespace"
3. Wait for environment to load
4. Run `npm install` in terminal
5. Run `npm run dev`

No local setup needed!

### Method 2: Use StackBlitz

1. Go to https://stackblitz.com
2. Click "Import from GitHub"
3. Enter your repository URL
4. It will automatically install and run

### Method 3: Use Docker

If you have Docker installed:

```dockerfile
# Create a Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
```

```bash
# Build and run
docker build -t portfolio .
docker run -p 8080:8080 portfolio
```

## Pre-installed Dependencies Workaround

If you absolutely cannot get npm to work, you can:

1. Ask a friend to run `npm install` on their machine
2. Copy their `node_modules` folder to your project
3. This should work temporarily, but not ideal

## Getting Help

If none of these solutions work:

1. **Check Node.js version**: Must be v16 or higher
2. **Check npm logs**: Located in the error message path
3. **Try different Node version manager**: nvm, fnm, or volta
4. **System environment**:
   - Update Windows
   - Check system time is correct
   - Ensure you have internet connection

## Still Having Issues?

### System Information to Collect

```bash
# Node version
node --version

# npm version
npm --version

# npm config
npm config list

# System info
systeminfo | findstr /B /C:"OS Name" /C:"OS Version"
```

### Common Quick Fixes

```bash
# Reset npm configuration
npm config delete registry
npm config delete strict-ssl
npm cache clean --force

# Reinstall npm
npm install -g npm@latest

# Use npx for one-time commands
npx vite  # Run dev server without full install
```

## Success Indicators

You know installation worked when:
- ✅ `node_modules` folder exists
- ✅ Contains 1000+ subfolders
- ✅ `package-lock.json` is created/updated
- ✅ No error messages in terminal
- ✅ Can run `npm run dev` successfully

---

**Remember: If one method doesn't work, try the alternatives!**
