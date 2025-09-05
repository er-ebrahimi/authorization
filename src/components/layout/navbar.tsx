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
    <nav
      className="sticky top-0 z-50 w-full border-b bg-background"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link
              href="/"
              className="flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              aria-label="AuthApp - Go to homepage"
            >
              <div
                className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-primary-foreground font-bold text-sm">
                  A
                </span>
              </div>
              <span className="font-bold text-xl">AuthApp</span>
            </Link>
          </div>

          <div
            className="hidden md:flex items-center space-x-6"
            aria-label="Main navigation menu"
          >
            {isMunueListVisible &&
              getAllNavigationItems().map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm ${
                    item.disabled
                      ? "text-muted-foreground/50 cursor-not-allowed"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  title={item.description}
                  aria-disabled={item.disabled}
                  aria-describedby={
                    item.description ? `nav-item-${index}-desc` : undefined
                  }
                  tabIndex={item.disabled ? -1 : 0}
                >
                  {item.label}
                  {item.disabled && (
                    <span className="ml-1 text-xs" aria-label="Coming soon">
                      (Soon)
                    </span>
                  )}
                  {item.description && (
                    <span id={`nav-item-${index}-desc`} className="sr-only">
                      {item.description}
                    </span>
                  )}
                </Link>
              ))}
          </div>
          <div
            className="flex items-center space-x-4"
            role="toolbar"
            aria-label="User actions and settings"
          >
            {isLoginLinkVisible && <UserSetting />}
            <ThemeToggle />
            {isMunueListVisible && <MobileMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
}
