"use client";
import { useAuth } from "@/contexts";
import React from "react";
import { Button } from "../ui/button";
import { UserProfile } from "./user-profile";
import { useRouter } from "next/navigation";

export default function UserSetting() {
  const { isAuthenticated } = useAuth();
  const { push } = useRouter();

  const handleLogin = () => {
    push("/login");
  };
  return (
    <div
      className="flex items-center gap-4"
      role="group"
      aria-label="User authentication actions"
    >
      {isAuthenticated ? (
        <UserProfile />
      ) : (
        <Button
          onClick={handleLogin}
          variant="outline"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Login to your account"
        >
          Login
        </Button>
      )}
    </div>
  );
}
