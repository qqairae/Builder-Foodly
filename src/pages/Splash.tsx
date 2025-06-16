import React from "react";
import { useNavigate } from "react-router-dom";
import { FoodlyLogo, FoodPlate } from "../components/FoodlyLogo";
import { Button } from "../components/ui/button";

export const Splash: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-foodly-orange via-foodly-orange to-foodly-orange-light flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto">
        <div className="bg-foodly-orange rounded-3xl p-8 shadow-2xl">
          {/* Top Logo */}
          <div className="flex justify-center mb-8">
            <FoodlyLogo size="lg" className="text-white" />
          </div>

          {/* Title */}
          <div className="text-center mb-4">
            <h1 className="text-5xl font-bold text-white mb-2">Foodly</h1>
            <p className="text-white/90 text-lg font-medium">
              Find your food with Food Smart
            </p>
          </div>

          {/* Food Plate Illustration */}
          <div className="flex justify-center my-12">
            <FoodPlate size="lg" />
          </div>

          {/* Get Started Button */}
          <div className="mt-8">
            <Button
              onClick={handleGetStarted}
              className="w-full bg-white text-foodly-orange hover:bg-gray-50 font-semibold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-200 hover:shadow-xl"
              size="lg"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
