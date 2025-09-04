"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllNavigationItems } from "@/config/navigation";
import UserSetting from "../auth/user-setting";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigationItems = getAllNavigationItems();
  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="h-9 w-9"
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`block text-sm font-medium transition-colors ${
                  item.disabled
                    ? "text-muted-foreground/50 cursor-not-allowed"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => !item.disabled && setIsOpen(false)}
                title={item.description}
              >
                {item.label}
                {item.disabled && (
                  <span className="ml-2 text-xs">(Coming Soon)</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
