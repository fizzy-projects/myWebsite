# Portfolio & Book Blog - Setup Guide

## Overview
A professional portfolio and book blog website built with React and TypeScript, designed for a mathematician/statistician with full-stack development experience. Features a minimal analytics-inspired aesthetic with smooth animations and custom CSS styling.

Available in two themes:
- **Dark Theme** - Modern, sophisticated dark background with blue accents
- **Light Theme** - Clean, minimal light background with blue accents

## Files

### Dark Theme
- **PortfolioBlog.tsx** - Main React component with TypeScript
- **PortfolioBlog.css** - Custom CSS styling (dark theme)

### Light Theme
- **PortfolioBlogLight.tsx** - Main React component with TypeScript
- **PortfolioBlogLight.css** - Custom CSS styling (light theme)

## Features

### Design Themes

**Dark Theme**
- Primary: Deep navy (#0a0e27)
- Accent: Bright blue (#2563eb)
- Perfect for: Modern tech portfolios, night browsing, high contrast
- Vibe: Contemporary, sleek, professional

**Light Theme**
- Primary: Clean white (#ffffff)
- Accent: Blue (#1d4ed8)
- Perfect for: Professional/corporate portfolios, daytime reading, accessible
- Vibe: Clean, minimalist, approachable

### 1. Home Page
- **Hero Section**: Introduction with animated geometric shapes
- **Stats Display**: Years of experience, projects, and books read
- **Call-to-Action Buttons**: Quick navigation to portfolio and blog
- **Expertise Cards**: Visual breakdown of core competencies (Statistical Modeling, Data Engineering, Full-Stack Development, Machine Learning)

### 2. Portfolio Section
- **Project Cards**: 5 sample projects with descriptions, technologies, and impact metrics
- **Responsive Grid**: Automatically adjusts for different screen sizes
- **Hover Effects**: Cards lift and highlight on hover
- **Tech Tags**: Technology stack for each project displayed visually

### 3. Book Blog Section
- **Search Functionality**: Real-time search across book titles, authors, and excerpts
- **Category Filtering**: Filter books by category (Psychology, Statistics, Mathematics, etc.)
- **Book Reviews**: 6 sample books with ratings, personal notes, and tags
- **Interactive Filters**: Dynamic category buttons with active states

### 4. Navigation
- **Sticky Header**: Remains visible while scrolling
- **Tab Navigation**: Smooth switching between Home, Portfolio, and Blog
- **Social Icons**: Links to GitHub, LinkedIn, and Email
- **Parallax Effect**: Header slightly moves with scroll

## Customization

### Update Personal Information
In the component, modify:
```javascript
const bookBlog: BlogPost[] = [ /* your books */ ];
const projects: Project[] = [ /* your projects */ ];
```

### Change Theme Colors
Edit CSS variables in `:root`:

**Dark Theme (PortfolioBlog.css)**:
```css
:root {
  --primary: #0a0e27;        /* Main background */
  --secondary: #1a1f3a;      /* Card backgrounds */
  --accent: #2563eb;         /* Primary accent color */
  --accent-light: #60a5fa;   /* Light accent */
  --text-primary: #f0f4f8;   /* Main text */
  --text-secondary: #a0aec0; /* Secondary text */
  --border-color: #2d3748;   /* Borders */
  --success: #10b981;        /* Success states */
}
```

**Light Theme (PortfolioBlogLight.css)**:
```css
:root {
  --primary: #ffffff;        /* Main background */
  --primary-dark: #fafaf9;   /* Dark white for footer */
  --secondary: #f5f5f4;      /* Light gray backgrounds */
  --accent: #1d4ed8;         /* Primary accent color */
  --accent-light: #3b82f6;   /* Light accent */
  --text-primary: #1f2937;   /* Main text (dark) */
  --text-secondary: #6b7280; /* Secondary text (gray) */
  --border-color: #e5e7eb;   /* Light borders */
  --success: #059669;        /* Success states */
}
```

### Update Fonts
The designs use:
- **Display Font**: Lora (serif) for light theme / Playfair Display (serif) for dark theme
- **Body Font**: Segoe UI / Roboto (sans-serif)
- **Mono Font**: Courier New / Monaco

Import fonts in your HTML/app (Light Theme):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Import fonts in your HTML/app (Dark Theme):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">
```

### Add Social Links
Update the social icons section:
```jsx
<a href="https://github.com/yourprofile" className="icon-link" title="GitHub">
  {/* SVG */}
</a>
```

## Installation & Setup

### Choose Your Theme
Before starting, decide which theme matches your style:
- **Dark Theme**: Use `PortfolioBlog.tsx` and `PortfolioBlog.css`
- **Light Theme**: Use `PortfolioBlogLight.tsx` and `PortfolioBlogLight.css`

### For a New React Project:

1. **Create React App with TypeScript**:
```bash
npx create-react-app portfolio-blog --template typescript
cd portfolio-blog
```

2. **Copy Theme Files** (choose one):
```bash
# For Dark Theme
cp PortfolioBlog.tsx src/components/
cp PortfolioBlog.css src/components/

# OR for Light Theme
cp PortfolioBlogLight.tsx src/components/
cp PortfolioBlogLight.css src/components/
```

3. **Update App.tsx**:

For Dark Theme:
```tsx
import PortfolioBlog from './components/PortfolioBlog';

function App() {
  return <PortfolioBlog />;
}

export default App;
```

For Light Theme:
```tsx
import PortfolioBlogLight from './components/PortfolioBlogLight';

function App() {
  return <PortfolioBlogLight />;
}

export default App;
```

4. **Run the Project**:
```bash
npm start
```

### For Existing React Project:
1. Copy both the TSX and CSS files for your chosen theme to your components directory
2. Import the component in the desired location
3. Ensure the CSS file is in the same directory as the TSX file
4. Update any personal information as needed

## Browser Support
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (14+)
- Mobile browsers: Fully responsive

## Performance Notes
- CSS animations use GPU acceleration (transform, opacity)
- No external dependencies required (except React)
- Optimized for 60fps animations
- Responsive design with mobile-first approach

## Responsive Breakpoints
- **Desktop**: 1400px max-width container
- **Tablet**: 768px and below
- **Mobile**: 480px and below

## Key TypeScript Interfaces
```typescript
interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  tags: string[];
  rating: number;
  notes: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  impact: string;
  year: number;
}
```

## Animation Details
- **Slide In**: Elements slide in on page load with staggered delays
- **Float**: Geometric shapes float up/down continuously
- **Hover States**: Cards lift on hover with enhanced shadows
- **Smooth Transitions**: All state changes use CSS transitions

## Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Focus states for all interactive elements
- Color contrast compliant
- Mobile-friendly navigation

## Next Steps for Enhancement
1. Add actual links to GitHub, LinkedIn, and portfolio projects
2. Integrate with a CMS or database for dynamic content
3. Add dark/light mode toggle
4. Implement form submission for contact/newsletter
5. Add reading time estimates for blog posts
6. Create individual post detail pages
7. Add pagination for blog posts
8. Integrate analytics tracking

## Tips
- The design uses a "sum" symbol (∑) for branding - perfect for analytics/math focus
- Color scheme is dark with blue accents - professional and easy on the eyes
- Minimal use of shadows and effects - prevents "overdone" look
- Typography choices elevate the design - Playfair Display for headings
- Mobile experience is as polished as desktop

---

Built with ❤️ for mathematicians, statisticians, and data-driven developers.

## Quick Comparison

| Feature | Dark Theme | Light Theme |
|---------|-----------|------------|
| Background | Deep Navy | Clean White |
| Primary Text | Light (#f0f4f8) | Dark (#1f2937) |
| Accent | Blue (#2563eb) | Blue (#1d4ed8) |
| Card Style | Dark with subtle gradients | White with shadows |
| Best For | Modern portfolios, night mode | Professional, corporate, accessible |
| Typography | Playfair Display | Lora serif |
| Readability | High contrast for night | High contrast for day |

Both themes include identical functionality, animations, and responsive design. Choose based on your personal preference and target audience.
