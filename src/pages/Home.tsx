import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FoodCard } from "@/components/FoodCard";
import { TabBar } from "@/components/TabBar";
import { foodItems, foodCategories } from "@/data/mockData";

export default function Home() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Foods");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["Foods", "Drinks", "Snacks", "Sauces"];

  // Get suggested food (first item)
  const suggestedFood = foodItems[0];

  // Get other foods for display
  const displayFoods = foodItems.slice(1, 3);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/search")}
          >
            <Search className="h-6 w-6" />
          </Button>
        </div>

        {/* Main Question */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          What would you like to eat?
        </h1>

        {/* Suggested Item */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600">Suggested:</span>
          </div>
          <div className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3">
            <span className="text-sm font-medium">{suggestedFood.name}</span>
            <img
              src={suggestedFood.image}
              alt={suggestedFood.name}
              className="w-10 h-10 rounded-full object-cover ml-auto"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex space-x-6 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                // Navigate to category pages
                if (category === "Foods") navigate("/foods");
                else if (category === "Drinks") navigate("/drinks");
                else if (category === "Snacks") navigate("/snacks");
                else if (category === "Sauces") navigate("/search?q=sauce");
              }}
              className={`text-sm font-medium pb-2 border-b-2 transition-colors ${
                activeCategory === category
                  ? "text-foodly-orange border-foodly-orange"
                  : "text-gray-500 border-transparent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* See More Link */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => navigate("/search")}
            className="text-sm text-foodly-orange font-medium"
          >
            see more
          </button>
        </div>
      </div>

      {/* Food Grid */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-2 gap-4">
          {displayFoods.map((food) => (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              image={food.image}
              rating={food.rating}
              description={food.description}
              restaurant={food.restaurant}
              variant="grid"
              onClick={() => navigate(`/food/${food.id}`)}
            />
          ))}
        </div>
      </div>

      <TabBar />
    </div>
  );
}
