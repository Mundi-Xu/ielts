# IELTS Learning Website Project Summary

## Project Overview
This is a Vue 3-based single-page application designed for IELTS exam preparation. The website is deployed on GitHub Pages and organized into six main sections: Vocabulary, Grammar, Listening, Speaking, Reading, and Writing.

## Technical Stack
- **Framework**: Vue 3 with TypeScript
- **Routing**: Vue Router with file-based routing (vite-plugin-pages)
- **Build Tool**: Vite
- **Styling**: UnoCSS (Tailwind CSS compatible)
- **State Management**: Vue Composition API (composables)
- **Icons**: Iconify with Carbon, Phosphor, and Simple Icons icon sets
- **Deployment**: GitHub Pages (via Netlify configuration)

## Key Features

### 1. Vocabulary Section
- Interactive vocabulary training with audio pronunciation
- Spelling practice mode with error tracking
- Word groups organized by categories
- Audio playback controls with keyboard shortcuts
- Copy functionality for words and error review

### 2. Grammar Section
- Grammar concepts presented with mind maps
- Visual learning approach for complex grammar rules

### 3. Listening Section
- 179 key listening words with audio
- Synonym replacement exercises
- Corpus-based listening materials

### 4. Speaking Section
- Speaking topics organized by categories
- Practice questions for IELTS speaking test

### 5. Reading Section
- 538 key reading words with synonym replacements
- Focus on reading comprehension skills

### 6. Writing Section
- 100 sentence translation exercises
- Writing prompts for both Task 1 and Task 2

## Project Structure
```
src/
├── components/     # Reusable UI components
├── composables/    # Vue composables for logic reuse
├── pages/          # Page components with file-based routing
├── styles/         # Global CSS styles
└── types/          # TypeScript type definitions
```

## Deployment Configuration
- **Base URL**: `/` (configured in vite.config.ts)
- **Build Output**: `dist/` directory
- **Routing Mode**: Hash-based routing for GitHub Pages compatibility
- **Netlify Config**: Handles redirects and build commands

## Development Setup
1. Install dependencies: `pnpm install`
2. Development server: `pnpm dev`
3. Build for production: `pnpm build`
4. Preview build: `pnpm preview`

## Key Technical Details
- Uses Vue 3 Composition API with TypeScript
- Implements dark mode support with system preference detection
- Responsive design for various screen sizes
- Audio playback functionality with keyboard controls
- Local storage for persisting user preferences
- File-based routing with automatic page generation
- UnoCSS for utility-first CSS styling
