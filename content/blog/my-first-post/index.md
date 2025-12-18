+++
title = "Welcome to My First Blog Post!"
date = 2025-12-18

[taxonomies]
tags = ["welcome", "beginners", "security"]

[extra]
featured_image = "featured.png"
katex = true
+++

This is a comprehensive demo of the blog's features. We've optimized this theme for **readability**, **security research**, and **technical documentation**.

## 1. Callouts & Alerts
You can highlight important information using the `callout` shortcode. Here is the **syntax** to use it in your markdown:

```jinja
{%/* callout(type="note") */%}
This is a standard note.
{%/* end */%}

{%/* callout(type="warning") */%}
**Caution:** This is a warning.
{%/* end */%}
```

**Result:**
{% callout(type="note") %}
This is a standard note. Use it for general tips or background information.
{% end %}

{% callout(type="warning") %}
**Caution:** This is a warning callout. Perfect for highlighting potential risks in security research or code execution.
{% end %}

---

## 2. Advanced Math with KaTeX
Our theme supports complex LaTeX rendering. This is essential for cryptography or algorithm analysis.

The famous Pythagorean theorem is simple: $a^2 + b^2 = c^2$.

But we can also render much more complex structures:

$$
\mathcal{L} = \sum_{i=1}^{n} (y_{i} - \hat{y}_{i})^{2} + \lambda \sum_{j=1}^{m} |w_{j}|
$$

And inline matrices like $M = \begin{pmatrix} a & b \\\\ c & d \end{pmatrix}$.

---

## 3. Tech-Stack Tables
Tables are styled with high-contrast borders and subtle row highlighting, perfect for comparing tools or listing vulnerabilities.

| Feature | Support | Performance |
| :--- | :---: | :--- |
| **Monokai Syntax** | ✅ Full | Fast (CSS-based) |
| **Formula (KaTeX)** | ✅ Full | Server-side Pre-render |
| **Search Index** | ✅ Built-in | Fast Client-side |
| **Responsive** | ✅ 100% | Mobile-first Grid |

---

## 4. Mac-Style Code Blocks
Code blocks feature a premium "Mac Terminal" look with dots and an integrated copy button.

### Python (Red Teaming Script)
```python
def bypass_av(payload):
    # A simple demonstration of payload obfuscation
    encoded = payload.encode('base64')
    print(f"[*] Obfuscated payload: {encoded}")
    return True

if __name__ == "__main__":
    bypass_av("exploit_v1")
```

### Rust (Systems Programming)
```rust
fn main() {
    let name = "Lilthawg29";
    println!("Hello, {}! Security is a journey, not a destination.", name);
}
```

### HTML/CSS (Styling)
```html
<div class="koro-container">
    <p class="highlight">Innovation through Security.</p>
</div>
```

---

## 5. Footnotes & References
Detailed research often needs citations. You can add footnotes easily[^1].

[^1]: This is a footnote demonstrating how to cite sources or provide extra context without cluttering the main text.

---

## 6. Next Steps
- [x] Setting up the Zola environment.
- [x] Customizing the Koro-yellow theme.
- [ ] Writing your first research article.
- [ ] Deploying to GitHub Pages.

That's it for the feature tour! Feel free to customize these elements to suit your writing style.