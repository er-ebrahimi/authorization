"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "./mobile-menu";
import Link from "next/link";
import { getAllNavigationItems } from "@/config/navigation";
import UserSetting from "../auth/user-setting";
import { useNavbarControl } from "@/hooks/useNavbarControler";
export function Navbar() {
  const { isMunueListVisible, isLoginLinkVisible } = useNavbarControl();
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  A
                </span>
              </div>
              <span className="font-bold text-xl">AuthApp</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {isMunueListVisible &&
              getAllNavigationItems().map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    item.disabled
                      ? "text-muted-foreground/50 cursor-not-allowed"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  title={item.description}
                >
                  {item.label}
                  {item.disabled && (
                    <span className="ml-1 text-xs">(Soon)</span>
                  )}
                </Link>
              ))}
          </div>
          <div className="flex items-center space-x-4">
            {isLoginLinkVisible && <UserSetting />}
            <ThemeToggle />
            {isMunueListVisible && <MobileMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
}
