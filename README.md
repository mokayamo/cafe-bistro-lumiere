# Cafe & Bistro Lumière

A modern, responsive website for a Japanese cafe and bistro. Built with React, TypeScript, and Vite, optimized for static hosting on Vercel.

🌐 **Live Site**: https://bistro-lumiere.vercel.app

## Features

- ✨ Responsive single-page application
- 🎨 Custom Tailwind CSS design with warm, elegant color palette
- 📱 Mobile-first approach with hamburger menu
- 🗺️ Embedded Google Maps
- 📄 Legal pages (Terms of Service, Privacy Policy)
- ⚡ Fast builds with Vite
- 🚀 Zero-bundle deployment with CDN dependencies

## Tech Stack

- **React 19.2.0** - Modern React with latest features
- **TypeScript 5.8.2** - Type-safe development
- **Vite 6.2.0** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS (via CDN)
- **React Router DOM** - Hash-based routing for static hosting
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mokayamo/cafe-bistro-lumiere.git
cd cafe-bistro-lumiere

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
├── components/
│   ├── Header.tsx          # Sticky navigation with scroll detection
│   ├── Footer.tsx          # Site footer with legal links
│   ├── Layout.tsx          # Page wrapper
│   └── sections/           # Home page sections
│       ├── Hero.tsx
│       ├── AboutLite.tsx
│       ├── Menu.tsx
│       ├── AboutDetail.tsx
│       ├── Gallery.tsx
│       └── Access.tsx
├── pages/
│   ├── Home.tsx           # Main landing page
│   ├── Terms.tsx          # Terms of Service
│   └── Privacy.tsx        # Privacy Policy
├── types.ts               # TypeScript type definitions
├── App.tsx                # Root component with routing
└── index.html             # Entry point with Tailwind config
```

## Deployment

This project is configured for deployment on Vercel with automatic builds from the `main` branch.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

## Color Palette

- **Base**: `#F4EDE3` - Warm beige background
- **Accent**: `#C2A27A` - Gold/tan accents
- **Text**: `#4A3F35` - Dark brown text
- **White**: `#FFFFFF`

## License

This project is a sample/portfolio piece. Feel free to use as reference.

## Author

Created as a web design portfolio sample.
