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
        {/* Cute puffy chef hat with sparkles */}
        <path
          d="M32 2C18 2 8 10 8 20C4 20 0 24 0 30C0 36 4 40 8 40H56C60 40 64 36 64 30C64 24 60 20 56 20C56 10 46 2 32 2Z"
          fill="white"
          stroke="#FF5722"
          strokeWidth="2.5"
        />

        {/* Cute puffy sections on hat */}
        <circle
          cx="20"
          cy="18"
          r="4"
          fill="white"
          stroke="#FF5722"
          strokeWidth="1.5"
          opacity="0.8"
        />
        <circle
          cx="32"
          cy="12"
          r="5"
          fill="white"
          stroke="#FF5722"
          strokeWidth="1.5"
          opacity="0.8"
        />
        <circle
          cx="44"
          cy="18"
          r="4"
          fill="white"
          stroke="#FF5722"
          strokeWidth="1.5"
          opacity="0.8"
        />

        {/* Sparkles on hat */}
        <path d="M24 8 L26 10 L24 12 L22 10 Z" fill="#FFD700" />
        <path d="M40 6 L42 8 L40 10 L38 8 Z" fill="#FFD700" />
        <circle cx="50" cy="14" r="1" fill="#FFD700" />

        {/* Chef hat band with cute pattern */}
        <rect
          x="8"
          y="38"
          width="48"
          height="10"
          fill="white"
          stroke="#FF5722"
          strokeWidth="2"
          rx="5"
        />
        <circle cx="18" cy="43" r="2" fill="#FF5722" opacity="0.3" />
        <circle cx="32" cy="43" r="2" fill="#FF5722" opacity="0.3" />
        <circle cx="46" cy="43" r="2" fill="#FF5722" opacity="0.3" />

        {/* Adorable face */}
        <circle
          cx="32"
          cy="60"
          r="16"
          fill="#FFF8E1"
          stroke="#FF5722"
          strokeWidth="2"
        />

        {/* Rosy cheeks */}
        <circle cx="24" cy="62" r="3" fill="#FFB3BA" opacity="0.6" />
        <circle cx="40" cy="62" r="3" fill="#FFB3BA" opacity="0.6" />

        {/* Sparkling eyes */}
        <circle cx="27" cy="56" r="3" fill="#333" />
        <circle cx="37" cy="56" r="3" fill="#333" />
        <circle cx="28" cy="55" r="1" fill="white" />
        <circle cx="38" cy="55" r="1" fill="white" />

        {/* Cute smile */}
        <path
          d="M24 66C26 68 28 69 32 69C36 69 38 68 40 66"
          stroke="#FF5722"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Heart on cheek */}
        <path
          d="M42 58 C43 57 45 57 45 59 C45 57 47 57 48 58 C47 60 45 62 45 62 C45 62 43 60 42 58 Z"
          fill="#FF69B4"
          opacity="0.7"
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
