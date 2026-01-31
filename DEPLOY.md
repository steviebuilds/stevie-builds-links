# Deployment Instructions

## Push to GitHub

The code is ready and committed locally. To push to GitHub:

### 1. Create GitHub Repository

Go to https://github.com/new and create a new repository:
- Repository name: `stevie-builds-links`
- Description: "Minimal link-in-bio site showcasing OpenClaw automation capabilities"
- Visibility: Public (or Private if preferred)
- Do NOT initialize with README, .gitignore, or license (we already have these)

### 2. Add Remote and Push

After creating the repo, run these commands in the project directory:

```bash
cd ~/clawd/stevie-builds-links
git remote add origin https://github.com/YOUR_USERNAME/stevie-builds-links.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 3. Configure GitHub Authentication

If you haven't already, you may need to authenticate:

**Using Personal Access Token (PAT):**
1. Go to https://github.com/settings/tokens
2. Generate a new token (classic) with `repo` scope
3. When prompted for password during push, use the token instead

**Or using SSH:**
```bash
# Add your SSH key to GitHub first
git remote set-url origin git@github.com:YOUR_USERNAME/stevie-builds-links.git
git push -u origin main
```

## Deploy to Coolify

Once pushed to GitHub:

1. Log into your Coolify instance
2. Create a new resource
3. Select "GitHub Repository"
4. Choose `stevie-builds-links` repository
5. Coolify will auto-detect the Dockerfile
6. Configure domain name
7. Deploy!

## Local Testing

Before deploying, you can test locally:

```bash
# Development
npm run dev

# Production build test
npm run build
npm start

# Docker test
docker build -t stevie-builds-links .
docker run -p 3000:3000 stevie-builds-links
```

Visit http://localhost:3000 to preview.
