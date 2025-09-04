# Authentication Wrapper

A comprehensive authentication wrapper system for Next.js applications that provides token validation, automatic redirection, and multiple protection layers.

## Features

- 🔐 **Token Validation**: Checks both localStorage and cookies for authentication tokens
- 🔄 **Automatic Redirection**: Redirects unauthenticated users to login page
- ⚡ **Performance Optimized**: Uses middleware for route-level protection
- 🛡️ **Multiple Protection Layers**: Component-level, route-level, and middleware protection
- 🎯 **Flexible Configuration**: Support for public and protected routes
- 📱 **Loading States**: Proper loading indicators during authentication checks
- 🔒 **Security**: Cookie + localStorage storage with proper cleanup

## Components

### AuthWrapper

The main wrapper component that handles authentication checks and redirection.

```tsx
import { AuthWrapper } from "@/components/auth";

function ProtectedPage() {
  return (
    <AuthWrapper requireAuth={true} redirectTo="/login">
      <div>This content is only visible to authenticated users</div>
    </AuthWrapper>
  );
}
```

#### Props

- `children`: React.ReactNode - The content to render
- `requireAuth`: boolean (default: true) - Whether authentication is required
- `redirectTo`: string (default: "/login") - Where to redirect if not authenticated

### withAuth HOC

Higher-order component for protecting entire components.

```tsx
import { withAuth } from "@/components/auth";

function MyProtectedComponent() {
  return <div>Protected content</div>;
}

// Wrap the component
export default withAuth(MyProtectedComponent, {
  requireAuth: true,
  redirectTo: "/login",
});
```

### useRequireAuth Hook

Custom hook for authentication checks in functional components.

```tsx
import { useRequireAuth } from "@/components/auth";

function MyComponent() {
  const { isAuthenticated, isLoading } = useRequireAuth(true);

  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) return <div>Please log in</div>;

  return <div>Authenticated content</div>;
}
```

## Usage Examples

### 1. Protecting Individual Pages

```tsx
// src/app/dashboard/page.tsx
import { AuthWrapper } from "@/components/auth";

export default function DashboardPage() {
  return (
    <AuthWrapper requireAuth={true}>
      <div>Dashboard content</div>
    </AuthWrapper>
  );
}
```

### 2. Public Pages (No Authentication Required)

```tsx
// src/app/about/page.tsx
import { AuthWrapper } from "@/components/auth";

export default function AboutPage() {
  return (
    <AuthWrapper requireAuth={false}>
      <div>About page - accessible to everyone</div>
    </AuthWrapper>
  );
}
```

### 3. Using the HOC Pattern

```tsx
// src/app/profile/page.tsx
import { withAuth } from "@/components/auth";

function ProfilePage() {
  return <div>User profile</div>;
}

export default withAuth(ProfilePage, {
  requireAuth: true,
  redirectTo: "/login",
});
```

### 4. Custom Redirect Paths

```tsx
// src/app/admin/page.tsx
import { AuthWrapper } from "@/components/auth";

export default function AdminPage() {
  return (
    <AuthWrapper requireAuth={true} redirectTo="/unauthorized">
      <div>Admin content</div>
    </AuthWrapper>
  );
}
```

## Middleware Protection

The system includes Next.js middleware for additional route-level protection:

```typescript
// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Authentication logic here
  // Automatically redirects unauthenticated users
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public).*)"],
};
```

## Configuration

### Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Auth Context Setup

The wrapper works with the existing AuthContext:

```tsx
// src/contexts/auth-context.tsx
export function AuthProvider({ children }) {
  // Authentication state management
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
```

## Security Features

1. **Token Validation**: Checks both localStorage and cookies
2. **Automatic Cleanup**: Removes invalid or expired tokens
3. **Redirect Loops Prevention**: Prevents infinite redirects
4. **Loading States**: Shows loading indicators during checks
5. **Middleware Protection**: Additional server-side protection
6. **Cookie Security**: Secure cookie settings with proper flags

## Best Practices

1. **Use AuthWrapper for most cases**: Simple and flexible
2. **Use withAuth for reusable components**: When you need to protect entire components
3. **Use useRequireAuth for custom logic**: When you need fine-grained control
4. **Set requireAuth={false} for public pages**: Explicitly mark public content
5. **Use middleware for additional security**: Provides server-side protection
6. **Handle loading states**: Always show loading indicators during authentication checks

## Troubleshooting

### Common Issues

1. **Redirect Loops**: Make sure login page has `requireAuth={false}`
2. **Token Not Found**: Check if token is properly stored in localStorage/cookies
3. **Loading Forever**: Ensure AuthContext is properly initialized
4. **Middleware Not Working**: Check the matcher configuration in middleware.ts

### Debug Mode

Enable debug logging by setting:

```typescript
localStorage.setItem("auth-debug", "true");
```

This will log authentication checks to the console.
