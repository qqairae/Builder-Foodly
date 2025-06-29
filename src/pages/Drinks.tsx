import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Search as SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { foodItems } from "@/data/mockData";

export default function Drinks() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDrinks, setFilteredDrinks] = useState<typeof foodItems>([]);

  // Filter drinks by category
  const drinksOnly = foodItems.filter(
    (item) => item.category.toLowerCase() === "drinks",
  );

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = drinksOnly.filter(
        (drink) =>
          drink.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          drink.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          drink.restaurant.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredDrinks(filtered);
    } else {
      setFilteredDrinks(drinksOnly);
    }
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 shadow-sm">
        <div className="flex items-center space-x-4 mb-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/home")}>
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for drinks..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-foodly-orange focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="px-4 py-6">
        <h2 className="text-xl font-semibold text-center text-gray-900 mb-6">
          Drinks - Found {filteredDrinks.length} results
        </h2>

        {/* Results Grid */}
        <div className="grid grid-cols-2 gap-4">
          {filteredDrinks.map((drink) => (
            <div
              key={drink.id}
              className="bg-white rounded-lg p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200 active:scale-95 transform"
              onClick={() => navigate(`/food/${drink.id}`)}
            >
              <div className="aspect-square mb-3">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {drink.restaurant}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{drink.name}</p>

                <div className="flex items-center justify-center space-x-1">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-sm font-medium">{drink.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDrinks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No drinks found matching your search
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Try searching for coffee, juice, or other beverages
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
