import React from "react";

interface ChefLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

// Professional Chef Hat for Splash Screen
export const SplashChef: React.FC<ChefLogoProps> = ({
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
        {/* Professional chef hat main body */}
        <path
          d="M32 4C20 4 12 10 12 18C8 18 4 22 4 28C4 34 8 38 12 38H52C56 38 60 34 60 28C60 22 56 18 52 18C52 10 44 4 32 4Z"
          fill="white"
          stroke="#FF5722"
          strokeWidth="2"
        />

        {/* Traditional pleats */}
        <path
          d="M18 36C20 30 22 24 24 18"
          stroke="#FF5722"
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M32 36C32 30 32 24 32 16"
          stroke="#FF5722"
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M46 36C44 30 42 24 40 18"
          stroke="#FF5722"
          strokeWidth="1"
          opacity="0.4"
        />

        {/* Chef hat band */}
        <rect
          x="12"
          y="36"
          width="40"
          height="8"
          fill="white"
          stroke="#FF5722"
          strokeWidth="2"
          rx="2"
        />

        {/* Hat base shadow */}
        <ellipse cx="32" cy="46" rx="22" ry="3" fill="#FF5722" opacity="0.1" />
      </svg>
    </div>
  );
};

// Professional Chef Hat for Auth Screen
export const AuthChef: React.FC<ChefLogoProps> = ({
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
        {/* Classic professional chef hat */}
        <path
          d="M32 6C22 6 14 12 14 20C10 20 6 24 6 30C6 36 10 40 14 40H50C54 40 58 36 58 30C58 24 54 20 50 20C50 12 42 6 32 6Z"
          fill="white"
          stroke="#FF5722"
          strokeWidth="2"
        />

        {/* Traditional vertical pleats */}
        <path
          d="M20 38C22 32 24 26 26 20"
          stroke="#FF5722"
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M32 38C32 32 32 26 32 18"
          stroke="#FF5722"
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M44 38C42 32 40 26 38 20"
          stroke="#FF5722"
          strokeWidth="1"
          opacity="0.4"
        />

        {/* Professional chef band */}
        <rect
          x="14"
          y="38"
          width="36"
          height="8"
          fill="white"
          stroke="#FF5722"
          strokeWidth="2"
          rx="3"
        />

        {/* Subtle base */}
        <ellipse cx="32" cy="48" rx="20" ry="2" fill="#FF5722" opacity="0.1" />
      </svg>
    </div>
  );
};

// Professional Chef Hat for Preferences Screen
export const PreferencesChef: React.FC<ChefLogoProps> = ({
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
        viewBox="0 0 64 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Tall professional chef hat */}
        <path
          d="M32 4C20 4 10 10 10 18C6 18 2 22 2 28C2 34 6 38 10 38H54C58 38 62 34 62 28C62 22 58 18 54 18C54 10 44 4 32 4Z"
          fill="white"
          stroke="#FF5722"
          strokeWidth="2"
        />

        {/* Clean organized pleats */}
        <path
          d="M18 36C20 30 22 24 24 18"
          stroke="#FF5722"
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M26 36C28 30 30 24 32 16"
          stroke="#FF5722"
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M34 36C36 30 38 24 40 18"
          stroke="#FF5722"
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M42 36C44 30 46 24 48 20"
          stroke="#FF5722"
          strokeWidth="1"
          opacity="0.4"
        />

        {/* Professional chef band */}
        <rect
          x="10"
          y="36"
          width="44"
          height="10"
          fill="white"
          stroke="#FF5722"
          strokeWidth="2"
          rx="4"
        />

        {/* Clean shadow */}
        <ellipse cx="32" cy="48" rx="24" ry="2" fill="#FF5722" opacity="0.1" />
      </svg>
    </div>
  );
};
