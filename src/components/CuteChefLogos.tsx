import React from "react";

interface ChefLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

// Flat Design Chef Hat - Clean and Modern
export const SplashChef: React.FC<ChefLogoProps> = ({
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Simple flat chef hat */}
        <path
          d="M32 8C24 8 18 12 18 18C15 18 12 21 12 26C12 31 15 34 18 34H46C49 34 52 31 52 26C52 21 49 18 46 18C46 12 40 8 32 8Z"
          fill="white"
          stroke="#FF5722"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Clean chef band */}
        <rect
          x="18"
          y="34"
          width="28"
          height="8"
          fill="white"
          stroke="#FF5722"
          strokeWidth="3"
          rx="4"
        />
      </svg>
    </div>
  );
};

// Line Art Chef Hat - Minimalist Outline
export const AuthChef: React.FC<ChefLogoProps> = ({
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outline only chef hat */}
        <path
          d="M32 10C25 10 20 14 20 19C17 19 14 22 14 26C14 30 17 33 20 33H44C47 33 50 30 50 26C50 22 47 19 44 19C44 14 39 10 32 10Z"
          fill="none"
          stroke="#FF5722"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Simple band outline */}
        <path
          d="M20 33C22 35 24 36 27 36H37C40 36 42 35 44 33C45 35 43 37 40 38H24C21 37 19 35 20 33Z"
          fill="none"
          stroke="#FF5722"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Single center pleat line */}
        <line
          x1="32"
          y1="33"
          x2="32"
          y2="16"
          stroke="#FF5722"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};

// Geometric Chef Hat - Modern Angular Design
export const PreferencesChef: React.FC<ChefLogoProps> = ({
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Geometric chef hat - angular design */}
        <path
          d="M32 12L42 20L48 28L46 32H18L16 28L22 20L32 12Z"
          fill="white"
          stroke="#FF5722"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Geometric chef band */}
        <rect
          x="18"
          y="32"
          width="28"
          height="8"
          fill="white"
          stroke="#FF5722"
          strokeWidth="3"
          rx="0"
        />

        {/* Modern accent lines */}
        <line
          x1="26"
          y1="32"
          x2="28"
          y2="18"
          stroke="#FF5722"
          strokeWidth="2"
          opacity="0.4"
        />
        <line
          x1="32"
          y1="32"
          x2="32"
          y2="14"
          stroke="#FF5722"
          strokeWidth="2"
          opacity="0.4"
        />
        <line
          x1="38"
          y1="32"
          x2="36"
          y2="18"
          stroke="#FF5722"
          strokeWidth="2"
          opacity="0.4"
        />
      </svg>
    </div>
  );
};
