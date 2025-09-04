/**
 * Centralized navigation configuration
 */

export interface NavigationItem {
  href: string;
  label: string;
  description?: string;
  icon?: string;
  disabled?: boolean;
}

export const navigationItems: NavigationItem[] = [
  {
    href: "/",
    label: "Home",
    description: "Go to homepage",
  },
  {
    href: "#",
    label: "Dashboard",
    description: "View your dashboard",
    disabled: true,
  },
  {
    href: "#",
    label: "Profile",
    description: "Manage your profile",
    disabled: true,
  },
  {
    href: "#",
    label: "Settings",
    description: "Application settings",
    disabled: true,
  },
];

/**
 * Get navigation items filtered by availability
 */
export function getAvailableNavigationItems(): NavigationItem[] {
  return navigationItems.filter((item) => !item.disabled);
}

/**
 * Get all navigation items (including disabled ones)
 */
export function getAllNavigationItems(): NavigationItem[] {
  return navigationItems;
}
