import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Search as SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { foodItems } from "@/data/mockData";

export default function Sauces() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSauces, setFilteredSauces] = useState<typeof foodItems>([]);

  // Filter sauces by category
  const saucesOnly = foodItems.filter(
    (item) => item.category.toLowerCase() === "sauces",
  );

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = saucesOnly.filter(
        (sauce) =>
          sauce.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          sauce.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          sauce.restaurant.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredSauces(filtered);
    } else {
      setFilteredSauces(saucesOnly);
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
              placeholder="Search for sauces..."
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
          Sauces - Found {filteredSauces.length} results
        </h2>

        {/* Results Grid */}
        <div className="grid grid-cols-2 gap-4">
          {filteredSauces.map((sauce) => (
            <div
              key={sauce.id}
              className="bg-white rounded-lg p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200 active:scale-95 transform"
              onClick={() => navigate(`/food/${sauce.id}`)}
            >
              <div className="aspect-square mb-3">
                <img
                  src={sauce.image}
                  alt={sauce.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {sauce.restaurant}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{sauce.name}</p>

                <div className="flex items-center justify-center space-x-1">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-sm font-medium">{sauce.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSauces.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No sauces found matching your search
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Try searching for BBQ, garlic, or other sauce types
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
