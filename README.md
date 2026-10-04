# Nishan

# Nishan Khanal — Personal Portfolio Website

A modern, responsive, animated personal portfolio website built with React, Vite, Tailwind CSS, Framer Motion, and GSAP.

## About

Personal portfolio of **Nishan Khanal**, currently studying Chartered Accountancy (C.A.) at Gurukul CA, Nepal.
- **Location**: Bijayakharka, Khotang, Koshi Zone, Nepal
- **Education**: C.A. at Gurukul CA | +2 Science from Texas International College | SEE from Shree Champawati Madhyamik Vidyalaya, Khotang

## Features

- **Responsive & Modern Design**: Crafted with custom Tailwind styling and dark/warm tones.
- **Fluid Motion & Micro-interactions**: Smooth page scrolling, magnetic buttons, and text animations powered by GSAP and Framer Motion.
- **Projects & Works Showcase**: Curated showcase of academic research, student leadership, community initiatives, and creative presentations.
- **Skills & Activities**: Detailed presentation of office tools, social media management, teamwork, and communication skills.
- **Interactive Contact & Social Links**: Direct channels to connect across platforms.

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## Project Structure

```
├── public/                 # Static assets (favicons, manifest, sitemap)
├── src/
│   ├── assets/             # Images and media assets
│   ├── components/         # Reusable UI components
│   │   ├── About Me/       # About page sections (Education, Skills, Hobbies, etc.)
│   │   ├── common/         # Navbar, Footer, PageBanner, etc.
│   │   ├── effects/        # GSAP/Framer animations and scroll physics
│   │   ├── home/           # Home page sections (Banner, Skills, Services, etc.)
│   │   ├── Projects/       # Project cards and category showcase
│   │   └── utils/          # Smooth scroll, icons, preloader
│   ├── data/
│   │   └── projectsData.js # Static projects and categories list
│   ├── layout/
│   │   └── LayoutOne.jsx   # Main application layout wrapper
│   ├── pages/
│   │   ├── Home.jsx        # Landing page
│   │   ├── About.jsx       # About Me page
│   │   ├── Projects.jsx    # Projects archive page
│   │   └── Contact.jsx     # Contact page
│   ├── App.jsx             # React Router setup
│   ├── index.css           # Global Tailwind & design system tokens
│   └── main.jsx            # Application entry point
├── index.html              # HTML template
├── package.json            # Project dependencies & scripts
└── vite.config.js          # Vite configuration
```

