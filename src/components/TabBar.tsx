import React from "react";
import { Home, Clock, User } from "lucide-react";
import { cn } from "../lib/utils";
import { useNavigate, useLocation } from "react-router-dom";

export interface TabItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
}

const tabs: TabItem[] = [
  {
    id: "home",
    label: "Home",
    icon: Home,
    path: "/home",
  },
  {
    id: "history",
    label: "History",
    icon: Clock,
    path: "/history",
  },
  {
    id: "profile",
    label: "Profile",
    icon: User,
    path: "/profile",
  },
];

interface TabBarProps {
  className?: string;
}

export const TabBar: React.FC<TabBarProps> = ({ className = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 pb-2 pt-2 safe-area-pb",
        className,
      )}
    >
      <div className="flex justify-around items-center max-w-sm mx-auto">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          const IconComponent = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => navigate(tab.path)}
              className={cn(
                "flex flex-col items-center justify-center p-2 rounded-lg transition-colors min-w-0 flex-1",
                isActive
                  ? "text-foodly-orange"
                  : "text-gray-400 hover:text-gray-600",
              )}
              aria-label={tab.label}
            >
              <IconComponent
                className={cn(
                  "w-6 h-6 mb-1",
                  isActive ? "text-foodly-orange" : "text-gray-400",
                )}
              />
              <span
                className={cn(
                  "text-xs font-medium",
                  isActive ? "text-foodly-orange" : "text-gray-400",
                )}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
