import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginApi } from "@/services/auth/login-service";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useLogin = () => {
  const { login } = useAuth();
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      login(data.token, data.user);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      router.push("/");
      toast.success("Successfully logged in!");
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};
