"use client";

import { AuthWrapper } from "@/components/auth";
import { useAuth } from "@/contexts/auth-context";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <AuthWrapper requireAuth={true}>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Dashboard
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Welcome to your protected dashboard, {user?.name}!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  🔐 Protected Content
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  This page is only accessible to authenticated users. The
                  AuthWrapper component automatically checks for authentication
                  tokens and redirects unauthenticated users to the login page.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  🛡️ Security Features
                </h2>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>✅ Token validation</li>
                  <li>✅ Automatic redirection</li>
                  <li>✅ Loading states</li>
                  <li>✅ Middleware protection</li>
                  <li>✅ Cookie + localStorage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
}
