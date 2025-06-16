import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, Heart, MapPin, Clock, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/FoodCard";
import { foodItems } from "@/data/mockData";

export default function FoodDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const food = foodItems.find((item) => item.id === id);

  if (!food) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>Food not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back and Heart */}
      <div className="relative">
        <div className="absolute top-4 left-4 z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="bg-white/80 backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>

        <div className="absolute top-4 right-4 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/80 backdrop-blur-sm"
          >
            <Heart className="h-6 w-6" />
          </Button>
        </div>

        {/* Food Image */}
        <div className="relative h-80">
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-full object-cover"
          />

          {/* Dot Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-foodly-orange"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8">
        {/* Restaurant Name */}
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
          {food.restaurant}
        </h1>

        {/* Rating */}
        <div className="flex items-center justify-center mb-6">
          <StarRating rating={food.rating} size="lg" />
          <span className="ml-2 text-lg font-semibold">{food.rating}</span>
        </div>

        {/* Food Details */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3">
            <Utensils className="h-5 w-5 text-gray-400" />
            <span className="text-gray-700">{food.name}</span>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-foodly-red" />
            <span className="text-gray-700">
              {food.location || "Kota Warisan"}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-gray-400" />
            <span className="text-gray-700">{food.hours || "10am - 10pm"}</span>
          </div>
        </div>

        {/* View Button */}
        <Button
          className="w-full bg-foodly-orange hover:bg-foodly-orange/90 text-white font-semibold py-4 rounded-full text-lg"
          onClick={() => {
            // Add to history and navigate
            navigate("/home");
          }}
        >
          View
        </Button>
      </div>
    </div>
  );
}
