"use client"; // This hook uses a client-side hook (usePathname), so the file needs this directive.

import { usePathname } from "next/navigation";

// Define the shape of the state our hook will return
interface NavbarState {
  isMunueListVisible: boolean;
  isLoginLinkVisible: boolean;
}

export function useNavbarControl(): NavbarState {
  const pathname = usePathname();

  const isAuthPage = pathname === "/login" || pathname === "/register";

  return {
    isMunueListVisible: !isAuthPage,
    isLoginLinkVisible: !isAuthPage,
  };
}
