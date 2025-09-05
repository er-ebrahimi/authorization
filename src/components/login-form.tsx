"use client";
import { cn } from "@/utils/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginSchema,
  type LoginFormData,
} from "@/utils/validators/auth/login-zod";
import { useLogin } from "@/hooks";
import { useState } from "react";
import {
  createPhoneInputChangeHandler,
  createPhoneInputKeyDownHandler,
} from "@/utils/phone-input-utils";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [displayValue, setDisplayValue] = useState("");
  const loginMutation = useLogin();

  const {
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const handleInputChange = createPhoneInputChangeHandler(
    setDisplayValue,
    setValue
  );
  const handleKeyDown = createPhoneInputKeyDownHandler();

  const onSubmit = (data: LoginFormData, event?: React.BaseSyntheticEvent) => {
    event?.preventDefault();
    loginMutation.mutate();
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-1">
          <form
            className="p-6 md:p-8"
            onSubmit={handleSubmit(onSubmit)}
            role="form"
            aria-label="Login form"
            noValidate
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome</h1>
                <p className="text-muted-foreground text-balance">
                  Login to your AuthApp
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="09xxxxxxxxx, +989xxxxxxxxx, or 00989xxxxxxxxx"
                  value={displayValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  className={`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : "phone-help"}
                  required
                />
                <div id="phone-help" className="sr-only">
                  Enter your phone number in one of these formats: 09xxxxxxxxx,
                  +989xxxxxxxxx, or 00989xxxxxxxxx
                </div>
                {errors.phone && (
                  <p
                    id="phone-error"
                    className="text-sm text-red-500"
                    role="alert"
                    aria-live="polite"
                  >
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <Button
                className="w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                type="submit"
                disabled={loginMutation.isPending}
                aria-describedby={
                  loginMutation.isPending ? "login-status" : undefined
                }
              >
                {loginMutation.isPending ? "Logging in..." : "Login"}
              </Button>
              {loginMutation.isPending && (
                <div id="login-status" className="sr-only" aria-live="polite">
                  Logging in, please wait...
                </div>
              )}

              {loginMutation.isError && (
                <p
                  className="text-sm text-red-500 text-center"
                  role="alert"
                  aria-live="assertive"
                >
                  {loginMutation.error?.message ||
                    "Login failed. Please try again."}
                </p>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our{" "}
        <a
          href="#"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          aria-label="Read our Terms of Service"
        >
          Terms of Service
        </a>{" "}
        and{" "}
        <a
          href="#"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          aria-label="Read our Privacy Policy"
        >
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}
