import React from "react";

interface ChefLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

// Beautiful Chef Hat for Splash Screen
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
        <defs>
          <linearGradient id="hatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f5f5f5" />
          </linearGradient>
          <linearGradient id="bandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e0e0e0" />
          </linearGradient>
        </defs>

        {/* Main chef hat with beautiful curves */}
        <path
          d="M32 6C22 6 15 11 15 18C11 18 8 21 8 26C8 31 11 34 15 34C17 36 20 37 24 37H40C44 37 47 36 49 34C53 34 56 31 56 26C56 21 53 18 49 18C49 11 42 6 32 6Z"
          fill="url(#hatGradient)"
          stroke="#FF5722"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Hat top highlight */}
        <ellipse cx="32" cy="20" rx="12" ry="8" fill="white" opacity="0.3" />

        {/* Elegant chef band with gradient */}
        <path
          d="M15 35C17 36 20 37 24 37H40C44 37 47 36 49 35C51 37 49 40 45 41H19C15 40 13 37 15 35Z"
          fill="url(#bandGradient)"
          stroke="#FF5722"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Band highlight */}
        <ellipse cx="32" cy="38" rx="18" ry="2" fill="white" opacity="0.4" />

        {/* Subtle pleats as gentle curves */}
        <path
          d="M22 35C23 30 25 25 27 20"
          stroke="#FF5722"
          strokeWidth="0.5"
          opacity="0.3"
          strokeLinecap="round"
        />
        <path
          d="M32 35C32 30 32 25 32 18"
          stroke="#FF5722"
          strokeWidth="0.5"
          opacity="0.3"
          strokeLinecap="round"
        />
        <path
          d="M42 35C41 30 39 25 37 20"
          stroke="#FF5722"
          strokeWidth="0.5"
          opacity="0.3"
          strokeLinecap="round"
        />

        {/* Soft shadow */}
        <ellipse cx="32" cy="43" rx="20" ry="2" fill="#FF5722" opacity="0.08" />
      </svg>
    </div>
  );
};

// Beautiful Chef Hat for Auth Screen
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
        <defs>
          <linearGradient
            id="authHatGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8f8f8" />
          </linearGradient>
          <radialGradient id="authBandGradient" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#eeeeee" />
          </radialGradient>
        </defs>

        {/* Elegant chef hat with smooth curves */}
        <path
          d="M32 8C24 8 17 12 17 19C13 19 10 22 10 27C10 32 13 35 17 35C19 37 22 38 26 38H38C42 38 45 37 47 35C51 35 54 32 54 27C54 22 51 19 47 19C47 12 40 8 32 8Z"
          fill="url(#authHatGradient)"
          stroke="#FF5722"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Top highlight for dimension */}
        <ellipse cx="32" cy="22" rx="10" ry="6" fill="white" opacity="0.25" />

        {/* Beautiful curved band */}
        <path
          d="M17 36C19 37 22 38 26 38H38C42 38 45 37 47 36C49 38 47 41 43 42H21C17 41 15 38 17 36Z"
          fill="url(#authBandGradient)"
          stroke="#FF5722"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Band detail line */}
        <path
          d="M20 39C24 40 28 40 32 40C36 40 40 40 44 39"
          stroke="#FF5722"
          strokeWidth="0.5"
          opacity="0.4"
          strokeLinecap="round"
        />

        {/* Refined pleats */}
        <path
          d="M24 36C25 31 27 26 29 21"
          stroke="#FF5722"
          strokeWidth="0.5"
          opacity="0.25"
          strokeLinecap="round"
        />
        <path
          d="M32 36C32 31 32 26 32 20"
          stroke="#FF5722"
          strokeWidth="0.5"
          opacity="0.25"
          strokeLinecap="round"
        />
        <path
          d="M40 36C39 31 37 26 35 21"
          stroke="#FF5722"
          strokeWidth="0.5"
          opacity="0.25"
          strokeLinecap="round"
        />

        {/* Soft base shadow */}
        <ellipse
          cx="32"
          cy="44"
          rx="18"
          ry="1.5"
          fill="#FF5722"
          opacity="0.06"
        />
      </svg>
    </div>
  );
};

// Beautiful Chef Hat for Preferences Screen
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
        <defs>
          <linearGradient
            id="prefHatGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#fafafa" />
            <stop offset="100%" stopColor="#f0f0f0" />
          </linearGradient>
          <linearGradient
            id="prefBandGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e8e8e8" />
          </linearGradient>
        </defs>

        {/* Tall elegant chef hat */}
        <path
          d="M32 6C22 6 14 11 14 18C10 18 6 22 6 28C6 34 10 38 14 38C16 40 19 41 23 41H41C45 41 48 40 50 38C54 38 58 34 58 28C58 22 54 18 50 18C50 11 42 6 32 6Z"
          fill="url(#prefHatGradient)"
          stroke="#FF5722"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Multiple hat highlights for dimension */}
        <ellipse cx="32" cy="20" rx="11" ry="7" fill="white" opacity="0.2" />
        <ellipse cx="28" cy="16" rx="6" ry="4" fill="white" opacity="0.15" />

        {/* Sophisticated chef band */}
        <path
          d="M14 39C16 40 19 41 23 41H41C45 41 48 40 50 39C52 41 50 44 46 45H18C14 44 12 41 14 39Z"
          fill="url(#prefBandGradient)"
          stroke="#FF5722"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Band decorative elements */}
        <ellipse cx="32" cy="42" rx="20" ry="2" fill="white" opacity="0.3" />
        <circle cx="24" cy="42" r="1" fill="#FF5722" opacity="0.2" />
        <circle cx="32" cy="42" r="1" fill="#FF5722" opacity="0.2" />
        <circle cx="40" cy="42" r="1" fill="#FF5722" opacity="0.2" />

        {/* Elegant curved pleats */}
        <path
          d="M20 39C21 34 23 29 25 24C26 21 27 18 28 16"
          stroke="#FF5722"
          strokeWidth="0.5"
          opacity="0.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M28 39C29 34 31 29 32 24C32 21 32 18 32 14"
          stroke="#FF5722"
          strokeWidth="0.5"
          opacity="0.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M36 39C37 34 38 29 39 24C38 21 37 18 36 16"
          stroke="#FF5722"
          strokeWidth="0.5"
          opacity="0.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M44 39C43 34 41 29 39 24C38 21 37 18 36 16"
          stroke="#FF5722"
          strokeWidth="0.5"
          opacity="0.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Refined shadow */}
        <ellipse
          cx="32"
          cy="47"
          rx="22"
          ry="1.5"
          fill="#FF5722"
          opacity="0.05"
        />
      </svg>
    </div>
  );
};
