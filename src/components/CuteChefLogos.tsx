import React from "react";

interface ChefLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

// Splash Screen Chef - Super happy and excited
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
        viewBox="0 0 64 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Excited chef hat with bouncy look */}
        <path
          d="M32 2C16 2 6 12 6 22C2 22 -2 26 -2 32C-2 38 2 42 6 42H58C62 42 66 38 66 32C66 26 62 22 58 22C58 12 48 2 32 2Z"
          fill="white"
          stroke="#FF5722"
          strokeWidth="3"
        />

        {/* Bouncy puffs */}
        <circle
          cx="18"
          cy="20"
          r="5"
          fill="white"
          stroke="#FF5722"
          strokeWidth="2"
        />
        <circle
          cx="32"
          cy="10"
          r="6"
          fill="white"
          stroke="#FF5722"
          strokeWidth="2"
        />
        <circle
          cx="46"
          cy="20"
          r="5"
          fill="white"
          stroke="#FF5722"
          strokeWidth="2"
        />

        {/* Star sparkles */}
        <path d="M22 6 L24 10 L22 14 L20 10 Z" fill="#FFD700" />
        <path d="M42 4 L44 8 L42 12 L40 8 Z" fill="#FFD700" />
        <path d="M52 12 L54 16 L52 20 L50 16 Z" fill="#FFD700" />

        {/* Chef band */}
        <rect
          x="6"
          y="40"
          width="52"
          height="12"
          fill="white"
          stroke="#FF5722"
          strokeWidth="3"
          rx="6"
        />

        {/* Super happy face */}
        <circle
          cx="32"
          cy="62"
          r="18"
          fill="#FFF8E1"
          stroke="#FF5722"
          strokeWidth="3"
        />

        {/* Big sparkly eyes */}
        <circle cx="26" cy="56" r="4" fill="#333" />
        <circle cx="38" cy="56" r="4" fill="#333" />
        <circle cx="27" cy="54" r="2" fill="white" />
        <circle cx="39" cy="54" r="2" fill="white" />
        <circle cx="28" cy="55" r="0.5" fill="#FFD700" />
        <circle cx="40" cy="55" r="0.5" fill="#FFD700" />

        {/* Rosy cheeks */}
        <circle cx="20" cy="64" r="4" fill="#FFB3BA" opacity="0.7" />
        <circle cx="44" cy="64" r="4" fill="#FFB3BA" opacity="0.7" />

        {/* Big happy smile */}
        <path
          d="M22 68C26 72 30 74 32 74C34 74 38 72 42 68"
          stroke="#FF5722"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

// Auth Screen Chef - Friendly and welcoming
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
        viewBox="0 0 64 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Classic chef hat with warm look */}
        <path
          d="M32 4C20 4 10 12 10 22C6 22 2 26 2 32C2 38 6 42 10 42H54C58 42 62 38 62 32C62 26 58 22 54 22C54 12 44 4 32 4Z"
          fill="white"
          stroke="#FF5722"
          strokeWidth="2.5"
        />

        {/* Gentle puffs */}
        <ellipse
          cx="22"
          cy="20"
          rx="3"
          ry="4"
          fill="white"
          stroke="#FF5722"
          strokeWidth="1.5"
          opacity="0.8"
        />
        <ellipse
          cx="32"
          cy="14"
          rx="4"
          ry="5"
          fill="white"
          stroke="#FF5722"
          strokeWidth="1.5"
          opacity="0.8"
        />
        <ellipse
          cx="42"
          cy="20"
          rx="3"
          ry="4"
          fill="white"
          stroke="#FF5722"
          strokeWidth="1.5"
          opacity="0.8"
        />

        {/* Chef band with stripes */}
        <rect
          x="10"
          y="40"
          width="44"
          height="10"
          fill="white"
          stroke="#FF5722"
          strokeWidth="2"
          rx="5"
        />
        <line
          x1="15"
          y1="45"
          x2="49"
          y2="45"
          stroke="#FF5722"
          strokeWidth="1"
          opacity="0.3"
        />

        {/* Friendly face */}
        <circle
          cx="32"
          cy="62"
          r="16"
          fill="#FFF8E1"
          stroke="#FF5722"
          strokeWidth="2"
        />

        {/* Kind eyes */}
        <ellipse cx="27" cy="58" rx="2.5" ry="3" fill="#333" />
        <ellipse cx="37" cy="58" rx="2.5" ry="3" fill="#333" />
        <circle cx="28" cy="57" r="1" fill="white" />
        <circle cx="38" cy="57" r="1" fill="white" />

        {/* Soft cheeks */}
        <circle cx="22" cy="64" r="3" fill="#FFB3BA" opacity="0.5" />
        <circle cx="42" cy="64" r="3" fill="#FFB3BA" opacity="0.5" />

        {/* Welcoming smile */}
        <path
          d="M25 68C27 70 29 71 32 71C35 71 37 70 39 68"
          stroke="#FF5722"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

// Preferences Chef - Thoughtful and organized
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
        viewBox="0 0 64 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Tall thoughtful chef hat */}
        <path
          d="M32 2C18 2 8 10 8 20C4 20 0 24 0 30C0 36 4 40 8 40H56C60 40 64 36 64 30C64 24 60 20 56 20C56 10 46 2 32 2Z"
          fill="white"
          stroke="#FF5722"
          strokeWidth="2.5"
        />

        {/* Organized pleats */}
        <line
          x1="20"
          y1="38"
          x2="22"
          y2="15"
          stroke="#FF5722"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <line
          x1="32"
          y1="38"
          x2="32"
          y2="8"
          stroke="#FF5722"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <line
          x1="44"
          y1="38"
          x2="42"
          y2="15"
          stroke="#FF5722"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* Heart decorations */}
        <path
          d="M24 12 C25 11 27 11 27 13 C27 11 29 11 30 12 C29 14 27 16 27 16 C27 16 25 14 24 12 Z"
          fill="#FF69B4"
          opacity="0.6"
        />
        <path
          d="M34 8 C35 7 37 7 37 9 C37 7 39 7 40 8 C39 10 37 12 37 12 C37 12 35 10 34 8 Z"
          fill="#FF69B4"
          opacity="0.6"
        />

        {/* Chef band with cute pattern */}
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
        <circle cx="18" cy="43" r="1.5" fill="#FF5722" opacity="0.4" />
        <circle cx="32" cy="43" r="1.5" fill="#FF5722" opacity="0.4" />
        <circle cx="46" cy="43" r="1.5" fill="#FF5722" opacity="0.4" />

        {/* Thoughtful face */}
        <circle
          cx="32"
          cy="62"
          r="16"
          fill="#FFF8E1"
          stroke="#FF5722"
          strokeWidth="2"
        />

        {/* Focused eyes */}
        <ellipse cx="27" cy="58" rx="3" ry="2.5" fill="#333" />
        <ellipse cx="37" cy="58" rx="3" ry="2.5" fill="#333" />
        <circle cx="28" cy="57" r="1" fill="white" />
        <circle cx="38" cy="57" r="1" fill="white" />

        {/* Gentle cheeks */}
        <circle cx="22" cy="64" r="3" fill="#FFB3BA" opacity="0.6" />
        <circle cx="42" cy="64" r="3" fill="#FFB3BA" opacity="0.6" />

        {/* Content smile */}
        <path
          d="M26 68C28 70 30 71 32 71C34 71 36 70 38 68"
          stroke="#FF5722"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Little stars around face */}
        <circle cx="16" cy="54" r="1" fill="#FFD700" />
        <circle cx="48" cy="58" r="1" fill="#FFD700" />
      </svg>
    </div>
  );
};
