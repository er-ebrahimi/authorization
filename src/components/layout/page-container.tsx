"use client";

import { cn } from "@/lib/utils";
import styles from "./page-container.module.css";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Whether to use full viewport height minus navbar
   * @default true
   */
  fullHeight?: boolean;
}

/**
 * A container component that automatically calculates the remaining viewport height
 * after accounting for the navbar (64px).
 *
 * This prevents scrolling by ensuring content fits within the available space.
 *
 * @example
 * // Basic usage - takes full height minus navbar
 * <PageContainer>
 *   <YourContent />
 * </PageContainer>
 *
 * @example
 * // With custom styling
 * <PageContainer className="bg-gray-100 p-4">
 *   <YourContent />
 * </PageContainer>
 *
 * @example
 * // Disable full height
 * <PageContainer fullHeight={false}>
 *   <YourContent />
 * </PageContainer>
 */
export function PageContainer({
  children,
  className,
  fullHeight = true,
}: PageContainerProps) {
  return (
    <div
      className={cn(
        styles.pageContainer,
        fullHeight && styles.fullHeight,
        className
      )}
    >
      {children}
    </div>
  );
}
