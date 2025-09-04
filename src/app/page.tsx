"use client";

import { useAuth } from "@/contexts/auth-context";
import { AuthWrapper } from "@/components/auth";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";

export default function Home() {
  const { user, isAuthenticated } = useAuth();
  return (
    <AuthWrapper requireAuth={true}>
      <div className="min-h-screen bg-gradient-to-br ">
        <ShootingStars />
        <StarsBackground />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                {isAuthenticated
                  ? `Welcome back, ${user?.name}!`
                  : "Authentication & Authorization"}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {isAuthenticated
                  ? "You are successfully logged in. Explore the features below."
                  : "Next.js app with TypeScript, Tailwind CSS, shadcn/ui, React Query, and Axios"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
}
