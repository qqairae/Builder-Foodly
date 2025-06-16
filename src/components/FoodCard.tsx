import React from "react";
import { Star } from "lucide-react";
import { cn } from "../lib/utils";

interface StarRatingProps {
  rating?: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = "sm",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  // Handle undefined or null rating
  const safeRating = rating || 0;

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[...Array(maxRating)].map((_, index) => (
        <Star
          key={index}
          className={cn(
            sizeClasses[size],
            index < Math.floor(safeRating)
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300",
          )}
        />
      ))}
      <span className="text-sm font-medium text-gray-700 ml-1">
        {safeRating.toFixed(1)}
      </span>
    </div>
  );
};

interface FoodCardProps {
  id: string;
  name: string;
  image: string;
  rating?: number;
  description?: string;
  restaurant?: string;
  onClick?: () => void;
  variant?: "grid" | "list";
  className?: string;
}

export const FoodCard: React.FC<FoodCardProps> = ({
  id,
  name,
  image,
  rating,
  description,
  restaurant,
  onClick,
  variant = "grid",
  className = "",
}) => {
  if (variant === "list") {
    return (
      <div
        className={cn(
          "flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer",
          className,
        )}
        onClick={onClick}
      >
        <div className="relative w-16 h-16 flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 truncate">{name}</h3>
          {restaurant && (
            <p className="text-sm text-gray-500 truncate">{restaurant}</p>
          )}
          {description && (
            <p className="text-xs text-gray-400 mt-1 truncate">{description}</p>
          )}
          <StarRating rating={rating} className="mt-2" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer group",
        className,
      )}
      onClick={onClick}
    >
      <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-gray-900 text-center text-sm leading-tight">
          {name}
        </h3>

        {restaurant && (
          <p className="text-xs text-gray-500 text-center">{restaurant}</p>
        )}

        {description && (
          <p className="text-xs text-gray-400 text-center line-clamp-2">
            {description}
          </p>
        )}

        <div className="flex justify-center">
          <StarRating rating={rating} />
        </div>
      </div>
    </div>
  );
};
