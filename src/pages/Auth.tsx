import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FoodlyLogo } from "../components/FoodlyLogo";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useAuth } from "../contexts/AuthContext";
import { cn } from "../lib/utils";

export const Auth: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("Dosamarvis@gmail.com");
  const [username, setUsername] = useState("Dosamarvis02");
  const [password, setPassword] = useState("••••••••");
  const [isLoading, setIsLoading] = useState(false);

  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (activeTab === "login") {
        await login(email, password);
      } else {
        await signup(email, username, password);
      }
      navigate("/preferences");
    } catch (error) {
      console.error("Authentication error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic
    console.log("Forgot password clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center">
            <FoodlyLogo size="lg" />
            <div className="w-4 h-3 bg-foodly-red rounded-full mt-2"></div>
          </div>
        </div>

        {/* Auth Form */}
        <div className="bg-white rounded-t-3xl p-6 shadow-lg">
          {/* Tab Navigation */}
          <div className="flex mb-8">
            <button
              className={cn(
                "flex-1 text-center py-2 font-medium",
                activeTab === "login"
                  ? "text-foodly-orange border-b-2 border-foodly-orange"
                  : "text-gray-400",
              )}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={cn(
                "flex-1 text-center py-2 font-medium",
                activeTab === "signup"
                  ? "text-foodly-orange border-b-2 border-foodly-orange"
                  : "text-gray-400",
              )}
              onClick={() => setActiveTab("signup")}
            >
              Sign-up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {activeTab === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-500 text-sm">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-0 border-b border-gray-300 rounded-none px-0 pb-2 focus-visible:ring-0 focus-visible:border-gray-600"
                  placeholder="Dosamarvis@gmail.com"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="username" className="text-gray-500 text-sm">
                {activeTab === "login" ? "Username" : "Username"}
              </Label>
              <Input
                id="username"
                type={activeTab === "login" ? "email" : "text"}
                value={activeTab === "login" ? email : username}
                onChange={(e) =>
                  activeTab === "login"
                    ? setEmail(e.target.value)
                    : setUsername(e.target.value)
                }
                className="border-0 border-b border-gray-300 rounded-none px-0 pb-2 focus-visible:ring-0 focus-visible:border-gray-600"
                placeholder={
                  activeTab === "login"
                    ? "Dosamarvis@gmail.com"
                    : "Dosamarvis02"
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-500 text-sm">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-0 border-b border-gray-300 rounded-none px-0 pb-2 focus-visible:ring-0 focus-visible:border-gray-600"
                placeholder="••••••••"
              />
            </div>

            {activeTab === "login" && (
              <div className="text-right">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-foodly-orange text-sm hover:underline"
                >
                  Forgot passcode?
                </button>
              </div>
            )}

            <div className="pt-6">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-foodly-orange hover:bg-foodly-orange-dark text-white font-semibold py-4 rounded-full text-lg"
              >
                {isLoading
                  ? "Loading..."
                  : activeTab === "login"
                    ? "Login"
                    : "Sign Up"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
