"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuthToken, getUser, setAuthData, clearAuthData } from "@/lib/auth";

interface User {
  id: string;
  email: string;
  name: string;
  picture: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing token and user data on mount
    const token = getAuthToken();
    const userData = getUser();

    if (token && userData) {
      setUser(userData);
    } else if (token && !userData) {
      // Token exists but no user data, clear invalid token
      clearAuthData();
    }

    setIsLoading(false);
  }, []);

  const login = (token: string, userData: User) => {
    setAuthData(token, userData);
    setUser(userData);
  };

  const logout = () => {
    clearAuthData();
    setUser(null);
    // Redirect to login page
    window.location.href = "/login";
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
