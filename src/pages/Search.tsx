import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FoodCard } from "@/components/FoodCard";
import { foodItems } from "@/data/mockData";

export default function Search() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState(foodItems);

  const query = searchParams.get("q") || "";

  useEffect(() => {
    if (query) {
      const filtered = foodItems.filter(
        (food) =>
          food.name.toLowerCase().includes(query.toLowerCase()) ||
          food.category.toLowerCase().includes(query.toLowerCase()) ||
          food.restaurant.toLowerCase().includes(query.toLowerCase()),
      );
      setSearchResults(filtered);
    } else {
      setSearchResults(foodItems);
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 shadow-sm">
        <div className="flex items-center space-x-4 mb-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <span className="text-gray-600">Search Places</span>
        </div>
      </div>

      {/* Results Header */}
      <div className="px-4 py-6">
        <h2 className="text-xl font-semibold text-center text-gray-900 mb-6">
          Found {searchResults.length} results
        </h2>

        {/* Results Grid */}
        <div className="grid grid-cols-2 gap-4">
          {searchResults.map((food) => (
            <div key={food.id} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="aspect-square mb-3">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {food.restaurant}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{food.name}</p>

                <div className="flex items-center justify-center space-x-1">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-sm font-medium">{food.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
