import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SplashChef } from "@/components/CuteChefLogos";
import { usePreferences } from "@/contexts/PreferencesContext";
import { foodCategories, dislikedIngredients } from "@/data/mockData";

export default function Preferences() {
  const navigate = useNavigate();
  const { preferences, updatePreferences } = usePreferences();

  const [selectedFoodTypes, setSelectedFoodTypes] = useState<string[]>(
    preferences?.foodTypes || [],
  );
  const [selectedDislikes, setSelectedDislikes] = useState<string[]>(
    preferences?.dislikedIngredients || [],
  );

  const toggleFoodType = (foodType: string) => {
    setSelectedFoodTypes((prev) =>
      prev.includes(foodType)
        ? prev.filter((item) => item !== foodType)
        : [...prev, foodType],
    );
  };

  const toggleDislike = (ingredient: string) => {
    setSelectedDislikes((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient],
    );
  };

  const handleSave = () => {
    updatePreferences({
      foodTypes: selectedFoodTypes,
      dislikedIngredients: selectedDislikes,
    });
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-foodly-orange to-foodly-red flex flex-col items-center px-6 py-8">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <SplashChef size="lg" className="mb-4" />
          <h1
            className="text-white text-4xl font-bold"
            style={{
              fontFamily: "Comic Sans MS, cursive, system-ui",
              letterSpacing: "2px",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Foodly
          </h1>
        </div>

        {/* Preferences Title */}
        <h2 className="text-white text-xl font-semibold text-center mb-8">
          Preferences
        </h2>

        {/* Type of Food Section */}
        <div className="mb-8">
          <h3 className="text-white text-xl font-medium mb-6 text-center">
            Type of Food
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {foodCategories.map((category) => (
              <button
                key={category}
                onClick={() => toggleFoodType(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  selectedFoodTypes.includes(category)
                    ? "bg-white text-foodly-orange shadow-lg"
                    : "bg-white/20 text-white border border-white/30 hover:bg-white/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Dislike Ingredients Section */}
        <div className="mb-12">
          <h3 className="text-white text-xl font-medium mb-6 text-center">
            Dislike Ingredients
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {dislikedIngredients.map((ingredient) => (
              <button
                key={ingredient}
                onClick={() => toggleDislike(ingredient)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  selectedDislikes.includes(ingredient)
                    ? "bg-white text-foodly-orange shadow-lg"
                    : "bg-white/20 text-white border border-white/30 hover:bg-white/30"
                }`}
              >
                {ingredient}
              </button>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-24 flex justify-center">
          <Button
            onClick={handleSave}
            className="bg-white text-foodly-orange hover:bg-white/90 font-semibold py-3 px-12 rounded-full text-lg"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
