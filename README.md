# 🚀 CODE ALPHA STUDIO — Next-Gen Interactive Image Gallery

A visually stunning, high-performance, dark-themed image gallery web application built with **HTML5, CSS3, and Vanilla JavaScript**. Designed with cinematic glassmorphism aesthetics, fluid typography, responsive masonry layouts, and an interactive fullscreen lightbox.

---

## ✨ Key Features & Capabilities

### 1. 🎨 Design & Visual Experience
- **Cinematic Dark Theme**: Deep obsidian backdrop (`#07080e`) enhanced with ambient radial glow gradients.
- **Hero Showcase**: Prominently features the Lead Developer portrait (`HERO PIC.png`) with smooth entrance animation and dual neon red & cyan ambient glow.
- **Glassmorphism Design System**: Translucent frosted panels with CSS backdrop blur, subtle luminous borders, and micro-interactions.
- **Fluid Typography**: Dynamic scaling with `clamp()` and Google Fonts (`Plus Jakarta Sans` for bold headlines and `Inter` for crisp body copy).
- **Responsive Layout Engine**: Supports **Masonry View** (staggered natural aspect ratios), **Uniform Grid View** (clean balanced frames), and **Compact 4-Column View**.

### 2. ⚡ Interactive Image Gallery
- **Curated High-Resolution Dataset**: Hand-picked photography across 5 distinct categories:
  - 🌲 **Nature & Wilderness**
  - 🏛️ **Modern Architecture**
  - ⚡ **Digital World / Technology**
  - 🎭 **Portraits & Character Studies** (including CODE ALPHA STUDIO Lead Developer)
  - ✈️ **Global Travel**
- **Zero-Reload Dynamic Filtering**: Instant category switching with live item count badges.
- **Real-Time Live Search**: Instant search matching photo titles, locations, photographers, or descriptions with clear button and zero-state messaging.
- **Favorites System**: Save and remove liked photos with `localStorage` persistence, a dedicated Favorites filter, and a header count pill.
- **Smart Image Loading & Fallbacks**: Asynchronous lazy loading with graceful fallback handling if offline or network disrupted.

### 3. 🔍 Fullscreen Lightbox Modal Viewer
- **Synchronized Navigation**: Next and Previous controls navigate strictly through the *currently filtered* active set of images.
- **Comprehensive Keyboard Controls**:
  - `→` (Right Arrow): Next image
  - `←` (Left Arrow): Previous image
  - `Esc`: Close lightbox
  - `L` or `F`: Toggle favorite / like
- **Mobile Touch Gestures**: Smooth swipe left / swipe right touch recognition for phones and tablets.
- **Detailed Metadata**: Image title, photographer attribution, location, category badge, and active counter (`3 / 19`).
- **High-Res Link**: Quick link to view or download original resolution photograph.
- **Scroll Lock**: Automatically disables page scrolling while the lightbox is active.

### 4. 🌟 Additional Modules & Connect
- **Hero Section**: High-impact introduction with an interactive photograph card, live status badge, and quick lightbox trigger.
- **Featured Collections**: Interactive 3D cards ("Nature & Wilderness", "Modern Architecture", "Digital World") with direct-filter triggers.
- **Philosophy & Statistics**: Animated number counters triggered when the About section scrolls into view (25,000+ Curated Photos, 150+ Creative Collections, 4.8M+ Discoveries).
- **Sticky Navigation & Header**: Glassmorphic sticky header with scroll-progress indicator, active link tracking, and mobile hamburger drawer.
- **Developer Social Links**: Clickable, styled social media buttons in the footer with custom hover glowing effects:
  - [GitHub: @thesidharthray](https://github.com/thesidharthray)
  - [Instagram: @sidhxrthray](https://www.instagram.com/sidhxrthray/)
  - [LinkedIn: Rishikesh Kumar](https://www.linkedin.com/in/rishikesh-kumar-a03b50397/)
- **Back to Top**: Quick floating button with smooth scroll behavior.

---

## 📁 Project Structure

```text
CODE-ALPHA-STUDIO/
│
├── HERO PIC.png        # Lead Developer portrait
├── index.html          # Semantic HTML5 layout, meta tags, and component structure
├── css/
│   └── style.css       # Complete CSS3 design system, responsive queries, and animations
├── js/
│   └── script.js       # Curated image dataset, filtering, lightbox, search, and gestures
└── README.md           # Documentation, feature guide, and setup instructions
```

---

## 🚀 How to Run Locally

You can run this project instantly using any standard web server or browser.

### Option 1: Using Python (Recommended)
Open your terminal in the project directory and run:
```bash
python -m http.server 8080
```
Then open your browser at:
```text
http://localhost:8080
```

### Option 2: Using Node.js / npx `serve`
```bash
npx serve -l 8080
```

### Option 3: VS Code Live Server
1. Open the project folder in VS Code.
2. Right-click on `index.html` and click **"Open with Live Server"**.

---

## ♿ Accessibility & Standards
- Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Full ARIA attributes (`aria-label`, `role="dialog"`, `role="tab"`, `aria-selected`, `aria-expanded`).
- Visible keyboard focus rings (`:focus-visible`) for all interactive elements.
- Respects `prefers-reduced-motion` for users sensitive to motion.

---

## 📜 License
Crafted with ❤️ by **CODE ALPHA STUDIO** for creative visual storytellers and modern web engineers.
