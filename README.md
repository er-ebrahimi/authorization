# Authentication & Authorization App

A modern Next.js application built with TypeScript, featuring authentication and authorization capabilities.

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **React Query (TanStack Query)** - Data fetching and caching
- **Axios** - HTTP client with interceptors
- **next-themes** - Dark mode support
- **ESLint** - Code linting and formatting

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── health/
│   │       └── route.ts          # Health check API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with providers
│   └── page.tsx                  # Homepage
├── components/
│   ├── providers.tsx             # React Query provider wrapper
│   ├── theme-provider.tsx        # Theme provider for dark mode
│   └── theme-toggle.tsx          # Dark mode toggle component
└── lib/
    ├── axios.ts                  # Configured Axios instance
    ├── query-client.ts           # React Query client config
    └── utils.ts                  # Utility functions (shadcn/ui)
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/er-ebrahimi/authorization
   cd authorization
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your configuration:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Features

### ✅ Currently Implemented

- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS** with dark mode support
- **shadcn/ui** component library ready
- **React Query** for data fetching with devtools
- **Axios** with request/response interceptors
- **Dark Mode Support** with system preference detection
- **Beautiful Homepage** showcasing the tech stack

### 🔧 Development Tools

- **React Query Devtools** - Available in development mode
- **ESLint** - Code quality and consistency
- **TypeScript** - Full type safety
- **Hot Reload** - Instant development feedback

## 🎨 UI Components

The project uses **shadcn/ui** for consistent, accessible components. To add new components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

## 🌙 Dark Mode

The project includes full dark mode support using **next-themes**:

- **System Preference Detection** - Automatically follows your OS theme
- **Manual Toggle** - Use the theme toggle button in the top-right corner
- **Persistent Theme** - Your theme choice is saved across sessions
- **Smooth Transitions** - Seamless switching between light and dark modes

### Using the Theme Toggle

```tsx
import { ThemeToggle } from "@/components/theme-toggle";

// Add to any component
<ThemeToggle />;
```

### Programmatic Theme Control

```tsx
import { useTheme } from "next-themes";

function MyComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle Theme
    </button>
  );
}
```

## 🔐 Authentication Setup (Coming Soon)

The project is pre-configured for authentication with:

- **Axios interceptors** for automatic token handling
- **React Query** for auth state management
- **Environment variables** for secure configuration

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🌐 Environment Variables

| Variable              | Description                | Default                     |
| --------------------- | -------------------------- | --------------------------- |
| `NEXT_PUBLIC_API_URL` | API base URL               | `http://localhost:3000/api` |
| `DATABASE_URL`        | Database connection string | -                           |
| `NEXTAUTH_SECRET`     | NextAuth secret key        | -                           |
| `NEXTAUTH_URL`        | NextAuth URL               | `http://localhost:3000`     |

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm run start
```

## 📚 Next Steps

- [ ] Implement user authentication
- [ ] Add role-based authorization
- [ ] Create user management dashboard
- [ ] Add database integration
- [ ] Implement protected routes
- [ ] Add form validation
- [ ] Create API documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Happy coding! 🎉**
