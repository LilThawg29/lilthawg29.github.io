# 🚀 Lilthawg29's Personal Blog

A high-performance, aesthetically pleasing personal blog built with [Zola](https://www.getzola.org/) and deployed via GitHub Actions.

## 🌟 Features

- 🌙 **Vivid Dark Theme**: Custom Koro-sensei inspired aesthetic.
- 📐 **Superior Math Support**: KaTeX rendering with a built-in "Copy LaTeX" button.
- 💻 **Dev-Friendly**: Mac-style terminal code blocks with Monokai syntax highlighting.
- 📖 **Smart Navigation**: Scroll-sync Table of Contents (TOC).
- ⚡ **Auto-Deployment**: Seamless CI/CD via GitHub Actions.

---

## 🛠️ One-Time Deployment Setup

The blog is already configured to work with GitHub Pages using the **Official GitHub Actions** method.

### 1. Configure GitHub Repository
1. Go to your repo: [LilThawg29/lilthawg29.github.io](https://github.com/LilThawg29/lilthawg29.github.io)
2. Click **Settings** → **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, select **`GitHub Actions`**.

### 2. Verify base_url
Ensure your `config.toml` has the correct URL:
```toml
base_url = "https://lilthawg29.github.io"
```

---

## � Daily Workflow (How to Add Content)

### 1. Create a New Post
Posts are stored in `content/blog/`. Each post should have its own folder.

```bash
# Create directory
mkdir -p content/blog/your-post-title

# Create the content file
touch content/blog/your-post-title/index.md
```

### 2. Post Structure (Front-matter)
Place this at the top of your `index.md`:
```markdown
+++
title = "My New Post Title"
date = 2025-12-18
description = "Brief summary of the post"

[taxonomies]
tags = ["security", "tech"]

[extra]
featured_image = "featured.png" # Optional: place featured.png in the same folder
+++

Your content starts here...
```

### 3. Deploy Changes
Simply push your changes to the `main` branch. GitHub will automatically build and deploy your site.

```bash
git add .
git commit -m "Add new post: Your Post Title"
git push origin main
```

---

## � Local Development

If you want to preview changes locally before pushing:

1. **Install Zola**: [Download Zola](https://github.com/getzola/zola/releases)
2. **Run Server**:
   ```bash
   zola serve
   ```
3. **Preview**: Open `http://127.0.0.1:1111` in your browser.

---

## 🎨 Visual Assets
- **Avatar**: `static/images/koro.gif`
- **Background**: `static/images/koro_bg.png`
- **Custom CSS**: `sass/main.scss`

---

## 🔗 Links
- **Live Site**: [https://lilthawg29.github.io](https://lilthawg29.github.io)
- **Zola Docs**: [getzola.org/documentation](https://www.getzola.org/documentation/)
