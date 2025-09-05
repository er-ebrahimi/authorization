# Authentication & Authorization App

A modern, responsive Next.js application featuring authentication, authorization, and a beautiful 3D globe interface with animated backgrounds. This project showcases best practices in React development with TypeScript, modern UI components, and comprehensive authentication handling.

## 🌟 Features

### Authentication & Authorization

- **Complete Authentication System** - Login with phone number validation
- **JWT Token Management** - Secure token storage in localStorage and cookies
- **Route Protection** - Middleware-based route protection with automatic redirects
- **Authentication Context** - React Context for global auth state management
- **Protected Routes** - `AuthWrapper` component for protecting pages and components
- **Auto-logout** - Automatic token cleanup and redirect on auth failures

### User Interface

- **3D Interactive Globe** - Beautiful Three.js-powered globe with animated interactions
- **Animated Backgrounds** - Shooting stars and dynamic star field animations
- **Modern UI Components** - Built with shadcn/ui and Radix UI primitives
- **Dark/Light Theme** - Theme switching with next-themes
- **Responsive Design** - Mobile-first responsive design with Tailwind CSS
- **Form Validation** - Comprehensive form validation with React Hook Form and Zod
- **Phone Number Input** - Iran phone number validation with custom utilities
- **Toast Notifications** - User feedback with Sonner toast library

### Developer Experience

- **TypeScript** - Full type safety throughout the application
- **Testing Setup** - Jest and Testing Library configuration
- **ESLint** - Code linting with Next.js recommended rules
- **Modern React** - React 19 with concurrent features
- **API Integration** - Axios-based API client with React Query for data fetching
- **Hot Reload** - Turbopack for fast development and builds

## 🛠️ Tech Stack

### Frontend Framework

- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5** - Full type safety

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library
- **Radix UI** - Primitive components for accessibility
- **next-themes** - Theme switching functionality
- **Geist Font** - Modern typography

### Animation & 3D

- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Three.js helpers and abstractions
- **three-globe** - 3D globe visualization
- **Motion (Framer Motion)** - Smooth animations
- **@tsparticles** - Particle system for backgrounds

### State Management & Data Fetching

- **React Context** - Global authentication state
- **TanStack Query (React Query)** - Server state management
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### Authentication & Validation

- **Custom Auth System** - JWT token-based authentication
- **Zod Validation** - Type-safe schema validation
- **Phone Number Validation** - International phone format support
- **Route Protection** - Middleware-based protection

### Development Tools

- **Jest** - Testing framework
- **Testing Library** - Component testing utilities
- **ESLint** - Code linting
- **Turbopack** - Fast bundler for development

### External APIs

- **RandomUser API** - Mock user data for demonstration

## 📦 Installation

### Prerequisites

- **Node.js** 18.17 or later
- **npm** or **yarn** package manager

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/er-ebrahimi/authorization.git
   cd authorization
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Configuration**

   Copy the environment variables:

   ```bash
   cp .env.example .env
   ```

   Update the environment variables in `.env`:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   NEXT_PUBLIC_BACKEND_API_URL=https://randomuser.me/api
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint code linting
- `npm run test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes (if any)
│   ├── login/             # Login page
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Home page with 3D globe
├── components/            # Reusable React components
│   ├── auth/              # Authentication components
│   │   ├── auth-wrapper.tsx
│   │   ├── logout-button.tsx
│   │   └── user-profile.tsx
│   ├── layout/            # Layout components
│   │   ├── navbar.tsx
│   │   └── page-container.tsx
│   ├── ui/                # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── globe.tsx
│   │   └── ...
│   ├── Globe.tsx          # Main 3D globe component
│   ├── login-form.tsx     # Login form with validation
│   └── providers.tsx      # App providers wrapper
├── contexts/              # React contexts
│   └── auth-context.tsx   # Authentication context
├── hooks/                 # Custom React hooks
│   ├── use-login.ts       # Login mutation hook
│   └── index.ts
├── lib/                   # Utility libraries
│   ├── auth.ts           # Authentication utilities
│   ├── axios.ts          # Axios configuration
│   └── utils.ts          # General utilities
├── services/             # API services
│   ├── auth/
│   │   └── login-service.ts
│   └── apis.ts           # API endpoints configuration
├── types/                # TypeScript type definitions
│   └── api-types.ts
├── utils/                # Utility functions
│   ├── validators/       # Validation schemas
│   │   └── auth/
│   └── phone-input-utils.ts
└── middleware.ts         # Next.js middleware for route protection
```

## 🔐 Authentication Flow

### How Authentication Works

1. **Login Process**

   - User enters phone number in the login form
   - Form validation using Zod schema
   - API call to RandomUser API for mock authentication
   - JWT token generation and user data retrieval
   - Token stored in localStorage and cookies

2. **Route Protection**

   - Middleware checks for valid tokens on protected routes
   - Automatic redirect to login page if unauthenticated
   - AuthWrapper component for component-level protection

3. **State Management**
   - Global authentication state via React Context
   - Automatic token validation on app initialization
   - Persistent login across browser sessions

### Login Credentials

Since this is a demo application using RandomUser API, any valid phone number format will work:

- `09xxxxxxxxx` (Iranian format)
- `+989xxxxxxxxx` (Iranian format)
- `00989xxxxxxxxx` (Alternative Iranian format)

## 🎨 UI Components

### Custom Components

- **Globe Component** - Interactive 3D globe with country data
- **Animated Backgrounds** - Shooting stars and particle systems
- **Login Form** - Comprehensive form with validation
- **Navbar** - Responsive navigation with user menu
- **Theme Toggle** - Dark/light mode switching

### shadcn/ui Components

- Buttons, Cards, Inputs, Labels
- Dialog, Dropdown Menu, Popover
- Avatar, Alert Dialog, Command Menu
- Scroll Area, Toast notifications

## 🧪 Testing

The project includes comprehensive testing setup:

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch
```

### Testing Configuration

- **Jest** with Next.js integration
- **Testing Library** for component testing
- **jsdom** environment for browser simulation
- **Custom matchers** for enhanced assertions

## 🔧 Configuration

### TypeScript Configuration

- Strict type checking enabled
- Path aliases configured (`@/` for `src/`)
- Next.js optimizations included

### Tailwind CSS

- Custom color system with CSS variables
- shadcn/ui integration
- Animation utilities included
- Responsive design utilities

### ESLint

- Next.js recommended rules
- TypeScript integration
- Custom rules for code quality

## 🌐 Environment Variables

| Variable                      | Description      | Default                     |
| ----------------------------- | ---------------- | --------------------------- |
| `NEXT_PUBLIC_API_URL`         | Internal API URL | `http://localhost:3000/api` |
| `NEXT_PUBLIC_BACKEND_API_URL` | External API URL | `https://randomuser.me/api` |
| `NEXTAUTH_URL`                | Application URL  | `http://localhost:3000`     |

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Deployment Platforms

This application can be deployed on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **AWS Amplify**
- **Any Node.js hosting platform**

## 📱 Features in Detail

### Authentication Features

- ✅ Phone number validation with multiple formats
- ✅ Automatic token refresh handling
- ✅ Secure token storage (localStorage + cookies)
- ✅ Route-level protection with middleware
- ✅ Component-level protection with AuthWrapper
- ✅ Redirect to intended page after login

### UI/UX Features

- ✅ Responsive design for all screen sizes
- ✅ Dark/light theme switching
- ✅ Smooth animations and transitions
- ✅ 3D interactive globe visualization
- ✅ Particle system backgrounds
- ✅ Toast notifications for user feedback
- ✅ Loading states and error handling
- ✅ Accessibility features (ARIA labels, foucs-visible states)

### Developer Features

- ✅ TypeScript for type safety
- ✅ Comprehensive testing setup
- ✅ Hot reload with Turbopack
- ✅ Code linting and formatting
- ✅ Path aliases for clean imports
- ✅ API client with error handling
- ✅ State management with React Query
- ✅ Form validation with Zod schemas

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🆘 Troubleshooting

### Common Issues

1. **Node.js Version**

   - Ensure you're using Node.js 18.17 or later
   - Use `node --version` to check your current version

2. **Dependencies**

   - Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`

3. **Environment Variables**

   - Ensure `.env` file exists with correct variables
   - Restart development server after changing environment variables

4. **Build Issues**
   - Clear Next.js cache: `rm -rf .next`
   - Try building with legacy bundler: `npm run build` (without Turbopack)

### Development Tips

- Use React DevTools for debugging component state
- Use TanStack Query DevTools for API debugging
- Check browser console for authentication errors
- Use network tab to monitor API calls

---

**Built with ❤️ using Next.js, TypeScript, and modern web technologies.**
