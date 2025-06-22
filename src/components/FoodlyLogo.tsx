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
        {/* Chef hat */}
        <path
          d="M32 8C24 8 20 14 20 20C16 20 12 24 12 28C12 32 16 36 20 36H44C48 36 52 32 52 28C52 24 48 20 44 20C44 14 40 8 32 8Z"
          fill="white"
          stroke="#FF5722"
          strokeWidth="2"
        />

        {/* Chef hat band */}
        <rect
          x="20"
          y="34"
          width="24"
          height="4"
          fill="white"
          stroke="#FF5722"
          strokeWidth="1"
        />

        {/* Face circle */}
        <circle
          cx="32"
          cy="48"
          r="12"
          fill="white"
          stroke="#FF5722"
          strokeWidth="2"
        />

        {/* Eyes */}
        <circle cx="28" cy="44" r="2" fill="#333" />
        <circle cx="36" cy="44" r="2" fill="#333" />

        {/* Smile */}
        <path
          d="M26 52C28 54 30 55 32 55C34 55 36 54 38 52"
          stroke="#F44336"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
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

        {/* Fork and Spoon overlapped in exact same position */}
        {/* Fork */}
        <rect x="15" y="30" width="2" height="20" fill="#666" />
        <rect x="12" y="28" width="8" height="2" fill="#666" />

        {/* Spoon (perfectly overlapped with fork) */}
        <rect x="15" y="30" width="2" height="20" fill="#666" />
        <ellipse cx="16" cy="29" rx="4" ry="2" fill="#666" />
      </svg>
    </div>
  );
};
