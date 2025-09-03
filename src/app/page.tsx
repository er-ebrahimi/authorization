"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["health"],
    queryFn: async () => {
      const response = await api.get("/health");
      return response.data;
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header with theme toggle */}
          <div className="flex justify-between items-start mb-8">
            <div></div>
            <ThemeToggle />
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Authentication & Authorization
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Next.js app with TypeScript, Tailwind CSS, shadcn/ui, React Query,
              and Axios
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                🚀 Tech Stack
              </h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>✅ Next.js 15 with App Router</li>
                <li>✅ TypeScript</li>
                <li>✅ Tailwind CSS</li>
                <li>✅ shadcn/ui</li>
                <li>✅ React Query (TanStack Query)</li>
                <li>✅ Axios</li>
                <li>✅ Dark Mode Support</li>
                <li>✅ ESLint</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                🔧 API Status
              </h2>
              {isLoading && (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                  <span className="text-gray-600 dark:text-gray-300">
                    Checking API...
                  </span>
                </div>
              )}
              {error && (
                <div className="text-red-600 dark:text-red-400">
                  ❌ API connection failed
                </div>
              )}
              {data && (
                <div className="text-green-600 dark:text-green-400">
                  ✅ API is running
                  <div className="text-sm text-gray-500 mt-1">
                    Status: {data.status}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              📁 Project Structure
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Core Files:
                </h3>
                <ul className="space-y-1 text-gray-600 dark:text-gray-300 font-mono">
                  <li>src/app/layout.tsx</li>
                  <li>src/app/page.tsx</li>
                  <li>src/components/providers.tsx</li>
                  <li>src/lib/axios.ts</li>
                  <li>src/lib/query-client.ts</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Configuration:
                </h3>
                <ul className="space-y-1 text-gray-600 dark:text-gray-300 font-mono">
                  <li>components.json</li>
                  <li>tailwind.config.ts</li>
                  <li>tsconfig.json</li>
                  <li>.env.example</li>
                  <li>.gitignore</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
