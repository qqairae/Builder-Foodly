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
        viewBox="0 0 64 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Chef hat main body - much taller and more traditional */}
        <path
          d="M32 2C20 2 12 8 12 16C6 16 2 20 2 26C2 32 6 36 12 36H52C58 36 62 32 62 26C62 20 58 16 52 16C52 8 44 2 32 2Z"
          fill="white"
          stroke="#FF5722"
          strokeWidth="2"
        />

        {/* Chef hat pleats for authentic look - extended for taller hat */}
        <path
          d="M18 34C20 28 22 20 24 12"
          stroke="#FF5722"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M32 34C32 28 32 20 32 8"
          stroke="#FF5722"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M46 34C44 28 42 20 40 12"
          stroke="#FF5722"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />

        {/* Chef hat band - wider and more prominent */}
        <rect
          x="12"
          y="34"
          width="40"
          height="8"
          fill="white"
          stroke="#FF5722"
          strokeWidth="2"
          rx="2"
        />

        {/* Hat base shadow */}
        <ellipse cx="32" cy="44" rx="22" ry="4" fill="#FF5722" opacity="0.1" />
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

        {/* Food sections with illustrations */}
        {/* Top left - Green vegetables (broccoli) */}
        <rect x="30" y="40" width="20" height="20" fill="#4CAF50" rx="2" />
        <circle cx="35" cy="48" r="3" fill="#2E7D32" />
        <circle cx="42" cy="45" r="2.5" fill="#2E7D32" />
        <circle cx="39" cy="52" r="2" fill="#2E7D32" />
        <path
          d="M33 50 Q35 46 37 50"
          stroke="#2E7D32"
          strokeWidth="1"
          fill="none"
        />

        {/* Top right - Orange section (bread/toast) */}
        <rect x="54" y="40" width="20" height="20" fill="#FFC107" rx="2" />
        <rect x="58" y="44" width="12" height="8" fill="#FFE082" rx="3" />
        <circle cx="62" cy="48" r="1.5" fill="#FF8F00" />
        <circle cx="67" cy="46" r="1" fill="#FF8F00" />

        {/* Bottom left - Red section (meat/strawberries) */}
        <rect x="30" y="64" width="20" height="20" fill="#F44336" rx="2" />
        <ellipse cx="37" cy="70" rx="3" ry="4" fill="#C62828" />
        <ellipse cx="43" cy="73" rx="2.5" ry="3" fill="#C62828" />
        <path d="M35 68 L39 68" stroke="#4CAF50" strokeWidth="1" />
        <path d="M41 71 L44 71" stroke="#4CAF50" strokeWidth="1" />

        {/* Bottom right - Yellow section (egg) */}
        <rect x="54" y="64" width="20" height="20" fill="#FFF3E0" rx="2" />
        <ellipse cx="64" cy="74" rx="7" ry="6" fill="#FFFFFF" />
        <circle cx="64" cy="74" r="3" fill="#FF9800" />
        <circle cx="65" cy="73" r="1" fill="#FFB74D" />

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
