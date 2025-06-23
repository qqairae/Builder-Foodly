export interface FoodItem {
  id: string;
  name: string;
  image: string;
  rating: number;
  description: string;
  category: string;
  restaurant: string;
  location?: string;
  hours?: string;
}

export interface UserPreferences {
  foodTypes: string[];
  dislikedIngredients: string[];
}

export interface HistoryItem {
  id: string;
  name: string;
  image: string;
  date: string;
  restaurant: string;
}

export const foodItems: FoodItem[] = [
  {
    id: "1",
    name: "Veggie tomato mix",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    description: "Fresh vegetables with tomato",
    category: "Vegetarian",
    restaurant: "Corner Hub",
    location: "Kota Warisan",
    hours: "10am - 10pm",
  },
  {
    id: "2",
    name: "Spicy fish sauce",
    image:
      "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    description: "Spicy fish with special sauce",
    category: "Seafood",
    restaurant: "Ocean Delight",
    location: "Kota Warisan",
    hours: "11am - 9pm",
  },
  {
    id: "3",
    name: "Kawanku Tomyam",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=400&fit=crop&crop=center",
    rating: 3.2,
    description: "Fried chicken tomyam",
    category: "Thai",
    restaurant: "Kawanku Restaurant",
    location: "Kota Warisan",
    hours: "12pm - 11pm",
  },
  {
    id: "4",
    name: "Nasi Lemak Spot",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=400&fit=crop&crop=center",
    rating: 5.5,
    description: "Egg and cucumber",
    category: "Malaysian",
    restaurant: "Nasi Lemak Spot",
    location: "Kota Warisan",
    hours: "7am - 3pm",
  },
  {
    id: "5",
    name: "Nasi Lemak Viral",
    image:
      "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=400&h=400&fit=crop&crop=center",
    rating: 6.4,
    description: "Nasi Lemak and fried chicken",
    category: "Malaysian",
    restaurant: "Nasi Lemak Viral",
    location: "Kota Warisan",
    hours: "8am - 4pm",
  },
  {
    id: "6",
    name: "Grilled Burger",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    description: "Juicy grilled burger with fries",
    category: "Burgers",
    restaurant: "Burger Junction",
    location: "Kota Warisan",
    hours: "11am - 10pm",
  },
];

export const historyItems: HistoryItem[] = [
  {
    id: "1",
    name: "Veggie tomato mix",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop&crop=center",
    date: "April 2021",
    restaurant: "Corner Hub",
  },
  {
    id: "2",
    name: "Fishwith mix orange....",
    image:
      "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=400&h=400&fit=crop&crop=center",
    date: "April 2021",
    restaurant: "Ocean Delight",
  },
];

export const foodCategories = [
  "Pasta",
  "Western",
  "Noodles",
  "Rice",
  "Burgers",
  "Pizza",
  "Sushi",
  "Mexican",
  "Thai",
  "Indian",
  "Desserts",
];

export const dislikedIngredients = [
  "Vegetables",
  "Onions",
  "Seafood",
  "Peanuts",
  "Dairy",
  "Gluten",
  "Spicy",
  "Mushrooms",
  "Coconut",
  "Eggs",
];
