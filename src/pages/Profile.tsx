import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";

export default function Profile() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleSignOut = async () => {
    await logout();
    navigate("/splash");
  };

  const menuItems = [
    {
      title: "Suggestions History",
      onClick: () => navigate("/history"),
    },
    {
      title: "Preferences",
      onClick: () => navigate("/preferences"),
    },
    {
      title: "Settings",
      onClick: () => {
        // Navigate to settings page (not implemented)
        console.log("Settings clicked");
      },
    },
    {
      title: "Help",
      onClick: () => {
        // Navigate to help page (not implemented)
        console.log("Help clicked");
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-lg font-semibold">My profile</h1>
          <div className="w-10" /> {/* Spacer */}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        {/* Personal Details Section */}
        <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Personal details</h2>
            <Button variant="ghost" size="sm" className="text-foodly-orange">
              change
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={user?.avatar} />
              <AvatarFallback className="bg-foodly-orange text-white text-lg font-semibold">
                {user?.name?.charAt(0) || "M"}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">
                {user?.name || "Marvis Ighedosa"}
              </h3>
              <p className="text-sm text-gray-500">
                {user?.email || "dosamarvis@gmail.com"}
              </p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {menuItems.map((item, index) => (
            <button
              key={item.title}
              onClick={item.onClick}
              className={`w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors ${
                index !== menuItems.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <span className="font-medium text-gray-900">{item.title}</span>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>
          ))}
        </div>

        {/* Sign Out Button */}
        <div className="mt-8">
          <Button
            onClick={handleSignOut}
            className="w-full bg-foodly-orange hover:bg-foodly-orange/90 text-white font-semibold py-4 rounded-full text-lg"
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}
