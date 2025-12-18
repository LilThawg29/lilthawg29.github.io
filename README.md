# My Personal Blog

A personal blog built with [Zola](https://www.getzola.org/) - a fast static site generator written in Rust.

## 🚀 Quick Deploy to GitHub Pages

### Step 1: Update Configuration

Edit `config.toml` and change the `base_url`:

```toml
base_url = "https://lilthawg29.github.io"
```

### Step 2: Initialize Git & Push

```bash
# Navigate to the blog directory
cd /mnt/c/Users/lilthawg29/Desktop/myblog

# Initialize git (if not already done)
git init

# Add remote repository
git remote add origin https://github.com/LilThawg29/lilthawg29.github.io.git

# Add all files
git add .

# Commit
git commit -m "Initial blog setup"

# Push to main branch
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository: https://github.com/LilThawg29/lilthawg29.github.io
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Build and deployment**:
   - **Source**: Select `GitHub Actions`
4. The workflow will automatically run on push to `main` branch

### Step 4: Wait for Deployment

- Go to **Actions** tab to see deployment progress
- After ~2-3 minutes, your site will be live at: **https://lilthawg29.github.io**

---

## 🛠️ Local Development

```bash
# Install Zola (if not installed)
# On Ubuntu/WSL:
snap install zola

# Run local server
zola serve

# Build for production
zola build
```

---

## 📁 Project Structure

```
myblog/
├── config.toml          # Site configuration
├── content/             # Markdown content
│   ├── _index.md        # Homepage bio
│   └── blog/            # Blog posts
├── sass/                # SCSS stylesheets
├── static/              # Static assets (images, JS)
├── templates/           # HTML templates
└── .github/workflows/   # GitHub Actions for auto-deploy
```

---

## ✨ Features

- 🎨 Dark theme with Koro-sensei aesthetic
- 📐 KaTeX math rendering with copy button
- 📋 Mac-style code blocks with syntax highlighting
- 📖 Table of Contents with scroll sync
- 🏷️ Tag system
- 📱 Responsive design

---

## 📝 Creating New Posts

```bash
# Create a new post folder
mkdir -p content/blog/my-new-post

# Create index.md inside
cat > content/blog/my-new-post/index.md << 'EOF'
+++
title = "My New Post"
date = 2025-12-18

[taxonomies]
tags = ["example", "tutorial"]

[extra]
featured_image = "featured.png"
+++

Your content here...
EOF
```

---

## 🔗 Links

- [Zola Documentation](https://www.getzola.org/documentation/)
- [GitHub Repository](https://github.com/LilThawg29/lilthawg29.github.io)
- [Live Site](https://lilthawg29.github.io)
