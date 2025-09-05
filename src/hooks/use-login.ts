import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginApi } from "@/services/auth/login-service";
import { useAuth } from "@/contexts/auth-context";
import { toast } from "sonner";

export const useLogin = () => {
  const { login } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      login(data.token, data.user);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Successfully logged in!");
      window.location.reload();
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};
