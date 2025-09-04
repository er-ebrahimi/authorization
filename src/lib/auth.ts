/**
 * Authentication utilities for token management
 */

export interface User {
  id: string;
  email: string;
  name: string;
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
}

/**
 * Clear authentication data
 */
export function clearAuthData(): void {
  if (typeof window === "undefined") return;

  localStorage.removeItem(AUTH_KEYS.TOKEN);
  localStorage.removeItem(AUTH_KEYS.USER);
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  return !!getAuthToken();
}
