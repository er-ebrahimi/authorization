"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import { isAuthenticated } from "@/lib/auth";

interface AuthWrapperProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  redirectTo?: string;
}

/**
 * Authentication wrapper component that handles token validation and redirection
 *
 * @param children - The content to render
 * @param requireAuth - Whether authentication is required (default: true)
 * @param redirectTo - Where to redirect if not authenticated (default: "/login")
 */
export function AuthWrapper({
  children,
  requireAuth = true,
  redirectTo = "/login",
}: AuthWrapperProps) {
  const { isAuthenticated: contextIsAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!requireAuth) return;

    if (isLoading) return;

    if (pathname === "/login") return;

    const hasToken = contextIsAuthenticated || isAuthenticated();

    if (!hasToken) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }

      router.push(redirectTo);
    }
  }, [
    contextIsAuthenticated,
    isLoading,
    requireAuth,
    redirectTo,
    router,
    pathname,
  ]);

  if (isLoading && requireAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Checking authentication...
          </p>
        </div>
      </div>
    );
  }

  if (
    requireAuth &&
    !isLoading &&
    !contextIsAuthenticated &&
    !isAuthenticated()
  ) {
    return null;
  }

  return <>{children}</>;
}

/**
 * Higher-order component for protecting routes
 *
 * @param WrappedComponent - The component to protect
 * @param options - Configuration options (default: { requireAuth: true, redirectTo: "/login" })
 * @returns {React.ComponentType<P>}
 */
export function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: { requireAuth?: boolean; redirectTo?: string } = {}
) {
  const { requireAuth = true, redirectTo = "/login" } = options;

  return function AuthenticatedComponent(props: P) {
    return (
      <AuthWrapper requireAuth={requireAuth} redirectTo={redirectTo}>
        <WrappedComponent {...props} />
      </AuthWrapper>
    );
  };
}

/**
 * Hook for checking if current route requires authentication.
 * @param requireAuth - Whether authentication is required (default: true)
 * @returns {isAuthenticated: boolean, isLoading: boolean}
 */
export function useRequireAuth(requireAuth: boolean = true) {
  const { isAuthenticated: contextIsAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!requireAuth || isLoading || pathname === "/login") return;

    const hasToken = contextIsAuthenticated || isAuthenticated();

    if (!hasToken) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
      router.push("/login");
    }
  }, [contextIsAuthenticated, isLoading, requireAuth, router, pathname]);

  return {
    isAuthenticated: contextIsAuthenticated || isAuthenticated(),
    isLoading,
  };
}
