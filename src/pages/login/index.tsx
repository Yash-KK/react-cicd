import React, { useState } from "react";
import { motion } from "motion/react";
import { Eye, EyeOff, Rocket } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


type UserRole = "ADMIN" | "USER";

interface LoginPageProps {
  onLogin: (role: UserRole, email: string) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Generate static particle positions once
  const [particles] = useState(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      background:
        i % 2 === 0 ? "var(--primary)" : "var(--accent)",
      width: Math.random() * 20 + 10,
      height: Math.random() * 20 + 10,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    })),
  );

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Determine role based on email
    const role: UserRole =
      email === "pm@gmail.com" ? "ADMIN" : "USER";

    setIsLoading(false);
    onLogin(role, email);
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Static Background */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full opacity-20"
            style={{
              background: particle.background,
              width: particle.width,
              height: particle.height,
              left: particle.left,
              top: particle.top,
            }}
          />
        ))}
      </div>

   

      {/* Login Card */}
      <div className="flex items-center justify-center min-h-screen p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="w-full max-w-md p-8 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl"
          style={{ background: "var(--gradient-card)" }}
        >
          {/* Logo/Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Rocket className="w-8 h-8 text-white" />
            </div>
            {/* <h1
              className="text-2xl font-semibold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Welcome Back
            </h1>
            <p style={{ color: "var(--text-secondary)" }}>
              Sign in to your project management dashboard
            </p> */}
          </motion.div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Label
                htmlFor="email"
                style={{ color: "var(--text-primary)" }}
              >
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 backdrop-blur-sm border-white/20"
                style={{
                  background: "var(--surface)",
                  color: "var(--text-primary)",
                }}
                placeholder="Enter your email"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Label
                htmlFor="password"
                style={{ color: "var(--text-primary)" }}
              >
                Password
              </Label>
              <div className="relative mt-2">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-12 backdrop-blur-sm border-white/20"
                  style={{
                    background: "var(--surface)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 text-white font-medium rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                style={{
                  background: isLoading
                    ? "var(--secondary)"
                    : "var(--gradient-primary)",
                }}
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  "Sign In"
                )}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              <div
                className="text-xs text-center p-3 rounded-lg"
                style={{
                  background: "var(--muted)",
                  color: "var(--text-secondary)",
                }}
              >
                <p className="mb-1">
                  <strong>Demo Accounts:</strong>
                </p>
                <p>
                  pm@gmail.com — PM Role
                  <br />
                  <span className="text-[11px] opacity-80">
                    Password: random
                  </span>
                </p>
                <p>
                  analyst@gmail.com — Analyst Role
                  <br />
                  <span className="text-[11px] opacity-80">
                    Password: random
                  </span>
                </p>
              </div>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}