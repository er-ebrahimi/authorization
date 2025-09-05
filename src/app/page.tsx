"use client";

import { useAuth } from "@/contexts/auth-context";
import { AuthWrapper } from "@/components/auth";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { motion } from "motion/react";
import { Globe } from "@/components/Globe";
import { PageContainer } from "@/components/layout";

export default function Home() {
  const { user, isAuthenticated } = useAuth();
  return (
    <AuthWrapper requireAuth={true}>
      <PageContainer>
        <div className="h-screen overflow-hidden bg-black relative">
          <ShootingStars />
          <StarsBackground />

          <div className="absolute inset-0 w-full h-full z-0 ">
            <Globe />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="div"
                >
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {isAuthenticated
                      ? `Welcome back, ${user?.name}!`
                      : "Authentication & Authorization"}
                  </h1>
                  <p className="text-xl text-gray-300 mb-8">
                    {isAuthenticated
                      ? "You are successfully logged in. Explore the features below."
                      : "Next.js app with TypeScript, Tailwind CSS, shadcn/ui, React Query, and Axios"}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </AuthWrapper>
  );
}
