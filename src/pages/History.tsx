import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { historyItems } from "@/data/mockData";

export default function History() {
  const navigate = useNavigate();
  const [history, setHistory] = useState(historyItems);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const toggleDeleteMode = () => {
    setIsDeleteMode(!isDeleteMode);
  };

  const deleteItem = (id: string) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  };

  const groupedHistory = history.reduce(
    (acc, item) => {
      const date = item.date;
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(item);
      return acc;
    },
    {} as Record<string, typeof history>,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <h1 className="text-lg font-semibold">History</h1>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleDeleteMode}
            className="text-gray-600"
          >
            {isDeleteMode ? "Cancel" : "Edit"}
          </Button>
        </div>
      </div>

      {/* Delete Mode Instructions */}
      {isDeleteMode && (
        <div className="bg-yellow-50 px-4 py-3 border-b">
          <p className="text-sm text-gray-600 text-center">
            Swipe on an item to delete
          </p>
        </div>
      )}

      {/* History List */}
      <div className="px-4 py-6">
        {Object.entries(groupedHistory).map(([date, items]) => (
          <div key={date} className="mb-6">
            <h2 className="text-sm text-gray-500 mb-3">{date}</h2>

            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.restaurant}</p>
                  </div>

                  {isDeleteMode && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteItem(item.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {history.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No history yet</p>
          </div>
        )}
      </div>

      {/* Delete Button (shown in delete mode) */}
      {isDeleteMode && (
        <div className="fixed bottom-6 right-6">
          <Button
            size="icon"
            className="bg-red-500 hover:bg-red-600 text-white rounded-full w-14 h-14 shadow-lg"
            onClick={() => {
              // Clear all history
              setHistory([]);
              setIsDeleteMode(false);
            }}
          >
            <Trash2 className="h-6 w-6" />
          </Button>
        </div>
      )}

      {/* Done Button */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
        <Button
          onClick={() => navigate("/home")}
          className="bg-foodly-orange hover:bg-foodly-orange/90 text-white font-semibold px-12 py-3 rounded-full"
        >
          Done
        </Button>
      </div>
    </div>
  );
}
