/**
 * Authentication utilities for token management
 */

export interface User {
  id: string;
  email: string;
  name: string;
  picture: string;
}

export const AUTH_KEYS = {
  TOKEN: "token",
  USER: "user",
} as const;

/**
 * Get the stored authentication token
 */
export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(AUTH_KEYS.TOKEN);
}

/**
 * Get the stored user data
 */
export function getUser(): User | null {
  if (typeof window === "undefined") return null;

  const userData = localStorage.getItem(AUTH_KEYS.USER);
  if (!userData) return null;

  try {
    return JSON.parse(userData);
  } catch (error) {
    console.error("Error parsing user data:", error);
    return null;
  }
}

/**
 * Store authentication data
 */
export function setAuthData(token: string, user: User): void {
  if (typeof window === "undefined") return;

  localStorage.setItem(AUTH_KEYS.TOKEN, token);
  localStorage.setItem(AUTH_KEYS.USER, JSON.stringify(user));

  // Also set as httpOnly cookie for better security
  document.cookie = `token=${token}; path=/; max-age=${
    7 * 24 * 60 * 60
  }; secure; samesite=strict`;
}

/**
 * Clear authentication data
 */
export function clearAuthData(): void {
  if (typeof window === "undefined") return;

  localStorage.removeItem(AUTH_KEYS.TOKEN);
  localStorage.removeItem(AUTH_KEYS.USER);

  // Also clear the cookie
  document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  return !!getAuthToken();
}
