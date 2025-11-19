# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based single-page application for "Cafe & Bistro Lumière", a Japanese cafe/bistro website. The project uses Vite for development and build tooling, React Router with HashRouter for client-side routing, and Tailwind CSS (via CDN) for styling.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on port 3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Routing Strategy
- Uses **HashRouter** instead of BrowserRouter for static hosting compatibility
- Routes: `/` (Home), `/terms` (Terms of Service), `/privacy` (Privacy Policy)
- All navigation within the app uses hash-based routing (e.g., `#/terms`)

### Component Structure
```
App.tsx                          # Root component with HashRouter
├── Layout.tsx                   # Wraps all pages with Header/Footer
│   ├── Header.tsx              # Sticky navigation with scroll detection
│   └── Footer.tsx              # Site footer with legal links
└── pages/
    ├── Home.tsx                # Main landing page (composition of sections)
    ├── Terms.tsx               # Terms of Service page
    └── Privacy.tsx             # Privacy Policy page
```

### Home Page Section Components
The Home page (`pages/Home.tsx`) is composed of multiple section components in this order:
1. `Hero` - Hero/banner section with main visual
2. `AboutLite` - Brief introduction/overview
3. `Menu` - Menu display
4. `AboutDetail` - Detailed about section
5. `Gallery` - Image gallery grid
6. `Access` - Location, hours, and embedded Google Maps

All section components are in `components/sections/`.

### Navigation System
The Header component implements a sophisticated navigation system:
- **Scroll-to-section**: Clicking nav items scrolls to section IDs (`#menu`, `#about`, `#gallery`, `#access`)
- **Cross-page navigation**: When on `/terms` or `/privacy`, clicking nav items navigates to `/` first, then scrolls to the section
- The navigation uses `setTimeout` with 100ms delay after route changes to ensure DOM is ready before scrolling
- Section IDs are defined in each section component (e.g., `<section id="menu">`)

### Styling System
- **Tailwind CSS** loaded via CDN (configured in `index.html`)
- Custom color theme defined in `tailwind.config`:
  - `lumiere-base`: #F4EDE3 (Background - warm beige)
  - `lumiere-accent`: #C2A27A (Gold/Tan accent)
  - `lumiere-text`: #4A3F35 (Dark Brown text)
  - `lumiere-white`: #FFFFFF
- Custom fonts: Noto Sans JP (sans-serif) and Noto Serif JP (serif) from Google Fonts
- No separate CSS files - all styling via Tailwind utility classes

### Module Resolution
- Path alias `@/*` maps to the project root directory (configured in `tsconfig.json` and `vite.config.ts`)
- Import maps in `index.html` load React dependencies from CDN (aistudiocdn.com)
- TypeScript with JSX support (react-jsx transform)

### Type Definitions
Located in `types.ts`:
- `MenuItem`: Menu item with name, optional price, optional description
- `MenuCategory`: Menu category with title and array of items
- `GalleryImage`: Gallery image with src, alt, and category ('interior' | 'food' | 'exterior' | 'drink')

## Key Patterns

### Scroll Behavior
- Global smooth scrolling enabled in `index.html` with `scroll-behavior: smooth`
- `ScrollToTop` component in `App.tsx` scrolls to top on route changes
- Header implements sticky positioning with transparency changes based on scroll position

### Responsive Design
- Mobile-first approach with breakpoints: `sm:`, `md:`, `lg:`
- Mobile navigation uses full-screen overlay (slide-in from right)
- Desktop navigation is horizontal in header
- All sections use responsive grid layouts

### Component Organization
- All page-level components in `pages/`
- Reusable components in `components/`
- Section-specific components in `components/sections/`
- Each component is a default export with React.FC type

## Special Considerations

### Dependency Loading Strategy
- **Development**: Uses npm packages (installed via `npm install`)
- **Production**: Dependencies loaded via CDN through importmap in `index.html`
- React, React DOM, React Router DOM, and Lucide React all loaded from aistudiocdn.com
- This dual approach allows for fast iteration locally and zero-bundle deployment

### Environment Variables (Optional)
- Vite config supports `GEMINI_API_KEY` in `.env.local` (not required for basic functionality)
- Exposed as both `process.env.API_KEY` and `process.env.GEMINI_API_KEY`
- No `.env.local` file is committed to the repository

### Development Notes
- Vite dev server runs on `0.0.0.0:3000` for network access
- TypeScript with experimental decorators enabled (`experimentalDecorators: true`)
- Legal pages (Terms/Privacy) are React routes, not static HTML files

# CLAUDE.md

This file provides guidance for development work. Please follow the guidelines and requirements below when proceeding with development.

## Conversation Guidelines
常に日本語で会話する

## AI Security Guidelines

### Secure Coding Principles

#### 1. Environment Variables and Secret Management
- **Absolutely Prohibited**: Hardcoding API keys, DB connections, or secrets
- **Client-side Exposure**: Handle sensitive information and personal data only on the server side
- **Service Role Keys, Secret Keys, Admin Keys** must be used only on the server side
- **Production Environment Credentials** must never be written directly in code

#### 2. Database Security
- Always enable Row Level Security
- Implement least privilege policies
- Use server-side validation for all database operations
- **Never perform SQL operations from frontend**, implement safe DB operations in backend
- Avoid direct SQL query concatenation, thoroughly implement SQL injection countermeasures

#### 3. API Implementation Security
- Mandatory input validation using schema validation
- Implement rate limiting
  - Per user: 100 requests/minute
  - Per IP: 1000 requests/hour
- Safe error handling that doesn't expose internal details
- Protection from user enumeration attacks
- Implement authentication for all API endpoints
- Filter unnecessary data with output filtering

#### 4. Authentication and Account Security
- Client secrets must be used only on the server side
- Implement CSRF protection
- Use cryptographically secure token generation
- Prohibit storing unencrypted passwords

#### 5. Authorization Management
- Implement Role-Based Access Control (RBAC)
- Protect admin actions
- Prevent privilege escalation
- Apply need-to-know principle

#### 6. Security Headers
- Implement strict security headers
- Implement CSP headers (must add if not implemented)
- Prevent clickjacking
- Control content type options
- Set referrer policy
- Restrict permissions policy

#### 7. XSS Prevention
- Always sanitize user-generated content
- Use libraries like DOMPurify
- Never insert HTML directly without sanitization
- Thoroughly apply SafeText component

#### 8. Log Management
- **Production Environment**: Remove console.log containing personal or sensitive information
- **Development Environment**: Display only necessary logs
- Never output API keys or passwords to logs
- Prohibit displaying debug information containing user personal data

#### 9. Data Protection and Privacy
- **Minimize Collection**: Collect only necessary minimum data
- **Encryption**: Encrypt at rest and in transit
- **Access Control**: Apply need-to-know principle
- **Retention Period**: Securely delete data when no longer needed

### Development Build Workflow

When implementing features or making major adjustments, always execute the following steps:

1. **After Code Changes**
   - Run `npm run build` to check for build errors

2. **If Errors Occur**
   - Report error details
   - Implement fixes
   - Check build again

3. **After Confirming Build Success**
   - Report "Build succeeded. Ready for deployment"

**Required Checks for**:
- After new feature implementation
- After multiple file changes
- After type definition changes
- After import/export changes
- After removing unnecessary code

### Secure Development Practices

#### Code Review Checklist
- [ ] Confirm input validation implementation
- [ ] Proper authentication and authorization implementation
- [ ] No sensitive information in error messages
- [ ] No personal information output to logs
- [ ] SQL injection countermeasures
- [ ] XSS countermeasures implemented
- [ ] CSRF countermeasures implemented
- [ ] Admin privilege takeover countermeasures
- [ ] Prevention of important information leaks from server

#### Implementation Checklist
- [ ] Use environment variables
- [ ] Enable RLS and set policies
- [ ] Validate all inputs
- [ ] Implement rate limiting
- [ ] Secure error messages
- [ ] Protect sensitive user data
- [ ] Server-side permission checks

### Prohibited Actions

#### Security - Things You Must Never Do
- ❌ Write production environment credentials directly in code
- ❌ Output API keys or passwords to logs
- ❌ Display debug information containing user personal data
- ❌ Direct SQL query concatenation (causes SQL injection)
- ❌ Store unencrypted passwords
- ❌ Ignore or work around security warnings
- ❌ Copy production data to development environment

#### Denied Command Permissions
- Strict security measures to prevent destructive bash commands
- Denied Commands:
  - `Bash(rm -rf /)`
  - `Bash(rm -rf ~)`
  - `Bash(rm -rf ~/*)`
  - `Bash(rm -rf /*)`

#### Code Quality - Things Not to Do
- ❌ Swallow errors (catch and do nothing)
- ❌ Meaningless try-catch abuse
- ❌ Easy use of 'any' in TypeScript
- ❌ Abuse of eslint-disable
- ❌ Implementation ignoring existing design patterns

#### Destructive Operations - Things Not to Execute Without Confirmation
- ❌ Database deletion or reset
- ❌ Direct deployment to production
- ❌ Bulk update/deletion of large amounts of data
- ❌ Migration without backup
- ❌ Major dependency changes (major version upgrades, etc.)

#### Performance - Implementations to Avoid
- ❌ Code with possibility of infinite loops
- ❌ Leaving N+1 query problems
- ❌ Loading huge data into memory at once
- ❌ Executing synchronous heavy processing on UI thread
- ❌ React implementations causing unnecessary re-renders

#### UX - Things Not to Do
- ❌ Delete data without user consent
- ❌ Discard unsaved changes
- ❌ Display nothing on error
- ❌ No progress display for long processes
- ❌ Implementation ignoring mobile compatibility
- ❌ Implementation not considering accessibility

#### Automation - Things Requiring Human Judgment
- ❌ Fully automated production deployment (approval process required)
- ❌ Automatic deletion of user data
- ❌ Automatic execution of billing or payments
- ❌ Automatic delivery of important notifications (content verification required)
- ❌ Automation of processes with legal implications

#### AI Behavior
- ❌ State uncertain things definitively
- ❌ Statements that downplay security risks
- ❌ Vague assurances like "probably okay"
- ❌ Hide errors or bugs
- ❌ Ignore user concerns

### Recommended Responses

#### Security Focus
- ✅ Always use environment variables
- ✅ Always validate input values
- ✅ Handle errors appropriately

#### Confirmation and Communication
- ✅ Always confirm destructive operations
- ✅ Ask questions when uncertain
- ✅ Explain risks in advance

#### Things to Always Confirm
- "Delete production database?"
- "This operation cannot be undone. Continue?"
- "X records will be affected. Execute?"

### Examples of Absolutely Bad Code

```javascript
// ❌ Absolutely Bad - Hardcoding
const apiKey = "sk-123example90abcdef";

// ❌ Absolutely Bad - Password logging
console.log(`Password: ${user.password}`);

// ❌ Absolutely Bad - SQL Injection
const query = `SELECT * FROM users WHERE id = ${userId}`;

// ❌ Swallowing errors
try {
  await someFunction();
} catch (error) {
  // Do nothing - Absolutely bad
}

// ❌ Abuse of any
const data: any = await fetchData(); // Should be typed

// ❌ N+1 Problem
users.forEach(async (user) => {
  const posts = await db.query(`SELECT * FROM posts WHERE user_id = ${user.id}`);
});

// ❌ Bulk processing of huge arrays
const hugeArray = await fetchAllRecords(); // 1 million records
const processed = hugeArray.map(item => complexProcess(item));
```

**Security is not an afterthought but a core design principle integrated from the beginning.**