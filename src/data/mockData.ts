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
  // FOODS
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
    description: "Spicy and sour Thai soup",
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
  {
    id: "7",
    name: "Margherita Pizza",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop",
    rating: 4.3,
    description: "Classic pizza with fresh basil",
    category: "Pizza",
    restaurant: "Pizza Corner",
    location: "Kota Warisan",
    hours: "11am - 11pm",
  },
  {
    id: "8",
    name: "Chicken Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=400&fit=crop",
    rating: 4.6,
    description: "Creamy chicken pasta",
    category: "Pasta",
    restaurant: "Italian Corner",
    location: "Kota Warisan",
    hours: "12pm - 10pm",
  },

  // DRINKS
  {
    id: "9",
    name: "Fresh Orange Juice",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop",
    rating: 4.7,
    description: "Freshly squeezed orange juice",
    category: "Drinks",
    restaurant: "Fresh Juice Bar",
    location: "Kota Warisan",
    hours: "8am - 8pm",
  },
  {
    id: "10",
    name: "Iced Coffee",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop",
    rating: 4.4,
    description: "Cold brew iced coffee",
    category: "Drinks",
    restaurant: "Coffee Corner",
    location: "Kota Warisan",
    hours: "7am - 9pm",
  },
  {
    id: "11",
    name: "Mango Smoothie",
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop",
    rating: 4.8,
    description: "Tropical mango smoothie",
    category: "Drinks",
    restaurant: "Smoothie Palace",
    location: "Kota Warisan",
    hours: "9am - 7pm",
  },
  {
    id: "12",
    name: "Green Tea Latte",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    rating: 4.2,
    description: "Creamy matcha green tea latte",
    category: "Drinks",
    restaurant: "Tea House",
    location: "Kota Warisan",
    hours: "8am - 8pm",
  },
  {
    id: "13",
    name: "Strawberry Milkshake",
    image:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop",
    rating: 4.5,
    description: "Rich strawberry milkshake",
    category: "Drinks",
    restaurant: "Milkshake Station",
    location: "Kota Warisan",
    hours: "10am - 9pm",
  },
  {
    id: "14",
    name: "Lemon Iced Tea",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop",
    rating: 4.1,
    description: "Refreshing lemon iced tea",
    category: "Drinks",
    restaurant: "Cool Drinks",
    location: "Kota Warisan",
    hours: "9am - 8pm",
  },

  // SNACKS
  {
    id: "15",
    name: "Chocolate Chip Cookies",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop",
    rating: 4.6,
    description: "Freshly baked chocolate chip cookies",
    category: "Snacks",
    restaurant: "Sweet Bakery",
    location: "Kota Warisan",
    hours: "8am - 6pm",
  },
  {
    id: "16",
    name: "French Fries",
    image:
      "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&h=400&fit=crop",
    rating: 4.3,
    description: "Crispy golden french fries",
    category: "Snacks",
    restaurant: "Snack Corner",
    location: "Kota Warisan",
    hours: "11am - 10pm",
  },
  {
    id: "17",
    name: "Potato Chips",
    image:
      "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=400&fit=crop",
    rating: 4.0,
    description: "Crunchy potato chips",
    category: "Snacks",
    restaurant: "Crispy Treats",
    location: "Kota Warisan",
    hours: "9am - 9pm",
  },
  {
    id: "18",
    name: "Chocolate Cake",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop",
    rating: 4.9,
    description: "Rich chocolate layer cake",
    category: "Desserts",
    restaurant: "Cake Heaven",
    location: "Kota Warisan",
    hours: "10am - 8pm",
  },
  {
    id: "19",
    name: "Ice Cream Sundae",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop",
    rating: 4.7,
    description: "Vanilla ice cream with toppings",
    category: "Desserts",
    restaurant: "Ice Cream Parlor",
    location: "Kota Warisan",
    hours: "12pm - 10pm",
  },
  {
    id: "20",
    name: "Donuts",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=400&fit=crop",
    rating: 4.4,
    description: "Glazed and sprinkled donuts",
    category: "Snacks",
    restaurant: "Donut Shop",
    location: "Kota Warisan",
    hours: "7am - 7pm",
  },

  // SAUCES
  {
    id: "21",
    name: "Spicy BBQ Sauce",
    image:
      "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&h=400&fit=crop",
    rating: 4.2,
    description: "Smoky and spicy BBQ sauce",
    category: "Sauces",
    restaurant: "Sauce Master",
    location: "Kota Warisan",
    hours: "10am - 8pm",
  },
  {
    id: "22",
    name: "Garlic Aioli",
    image:
      "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=400&h=400&fit=crop",
    rating: 4.5,
    description: "Creamy garlic aioli sauce",
    category: "Sauces",
    restaurant: "Gourmet Sauces",
    location: "Kota Warisan",
    hours: "9am - 7pm",
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
