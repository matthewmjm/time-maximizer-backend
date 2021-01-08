const categories = [
  {
    id: 1,
    name: "Home",
    icon: "home",
    backgroundColor: "#fc5c65",
    color: "white"
  },
  {
    id: 2,
    name: "Car",
    icon: "car",
    backgroundColor: "#fd9644",
    color: "white"
  },
  {
    id: 3,
    name: "Pets",
    icon: "dog-service",
    backgroundColor: "#fed330",
    color: "white"
  },
  {
    id: 4,
    name: "Dining",
    icon: "food",
    backgroundColor: "#26de81",
    color: "white"
  },
  {
    id: 5,
    name: "Friends",
    icon: "shoe-baby-face-outline",
    backgroundColor: "#2bcbba",
    color: "white"
  },
  {
    id: 6,
    name: "Work",
    icon: "briefcase-outline",
    backgroundColor: "#45aaf2",
    color: "white"
  },
  {
    id: 7,
    name: "Banking",
    icon: "bank-outline",
    backgroundColor: "#4b7bec",
    color: "white"
  },
  {
    id: 8,
    name: "Shopping",
    icon: "cart-outline",
    backgroundColor: "#a55eea",
    color: "white"
  },
  {
    id: 9,
    name: "Workout",
    icon: "dumbbell",
    backgroundColor: "#778ca3",
    color: "white"
  },
  // {
  //   id: 10,
  //   name: "Other",
  //   icon: "application",
  //   backgroundColor: "#778ca3",
  //   color: "white"
  // }
];

const getCategories = () => categories;

const getCategory = id => categories.find(c => c.id === id);

module.exports = {
  getCategories,
  getCategory
};
