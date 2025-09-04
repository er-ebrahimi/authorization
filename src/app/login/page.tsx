import { LoginForm } from "@/components/login-form";
import { SparklesCore } from "@/components/ui/sparkles";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br  flex flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="relative z-10">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
