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
    <div className="flex items-center gap-4">
      {isAuthenticated ? (
        <UserProfile />
      ) : (
        <Button onClick={handleLogin} variant="outline">
          Login
        </Button>
      )}
    </div>
  );
}
