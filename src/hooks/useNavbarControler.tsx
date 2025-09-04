"use client";

import { usePathname } from "next/navigation";

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
