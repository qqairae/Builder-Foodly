import React from "react";

interface FoodlyLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const FoodlyLogo: React.FC<FoodlyLogoProps> = ({
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Chef hat main body - taller and more traditional */}
        <path
          d="M32 6C22 6 16 12 16 18C10 18 6 22 6 28C6 34 10 38 16 38H48C54 38 58 34 58 28C58 22 54 18 48 18C48 12 42 6 32 6Z"
          fill="white"
          stroke="#FF5722"
          strokeWidth="2"
        />

        {/* Chef hat pleats for authentic look */}
        <path
          d="M20 35C22 30 24 25 26 20"
          stroke="#FF5722"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M32 35C32 30 32 25 32 18"
          stroke="#FF5722"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M44 35C42 30 40 25 38 20"
          stroke="#FF5722"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />

        {/* Chef hat band - wider and more prominent */}
        <rect
          x="16"
          y="36"
          width="32"
          height="6"
          fill="white"
          stroke="#FF5722"
          strokeWidth="2"
          rx="1"
        />

        {/* Hat base */}
        <ellipse cx="32" cy="44" rx="18" ry="4" fill="#FF5722" opacity="0.1" />
      </svg>
    </div>
  );
};

interface FoodPlateProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const FoodPlate: React.FC<FoodPlateProps> = ({
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Plate */}
        <circle
          cx="64"
          cy="64"
          r="50"
          fill="white"
          stroke="#ddd"
          strokeWidth="2"
        />

        {/* Food sections */}
        {/* Green vegetables */}
        <path d="M30 40 L50 40 L50 60 L30 60 Z" fill="#4CAF50" rx="4" />

        {/* Orange/yellow section */}
        <path d="M54 40 L74 40 L74 60 L54 60 Z" fill="#FF9800" rx="4" />

        {/* Red section */}
        <path d="M30 64 L50 64 L50 84 L30 84 Z" fill="#F44336" rx="4" />

        {/* Yellow section */}
        <path d="M54 64 L74 64 L74 84 L54 84 Z" fill="#FFC107" rx="4" />

        {/* Fork on left side */}
        <rect x="15" y="30" width="2" height="20" fill="#666" />
        <rect x="12" y="28" width="8" height="2" fill="#666" />

        {/* Knife on right side */}
        <rect x="111" y="30" width="2" height="20" fill="#666" />
        <path d="M110 28 L114 28 L113 26 L111 26 Z" fill="#666" />
      </svg>
    </div>
  );
};
